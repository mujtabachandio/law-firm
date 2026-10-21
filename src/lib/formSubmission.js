/**
 * The handshake between a form and the thank-you page.
 *
 * A form cannot simply navigate to /thank-you and trust that whoever arrives
 * there submitted something: the URL is guessable, and it would otherwise be
 * indexable, shareable and countable as a conversion by anyone who typed it.
 * So a successful submission leaves a note in sessionStorage, and the
 * thank-you page refuses to render without one.
 *
 * sessionStorage rather than router state because router state is lost on
 * reload, and bouncing someone back to the contact form because they pressed
 * F5 on the confirmation would be worse than the problem it solves. It is also
 * per-session, so it cannot leak a conversion into someone else's visit.
 */

const SUBMISSION_KEY = 'klf:form-submitted';
const REPORTED_KEY = 'klf:form-submitted-reported';

/** sessionStorage throws in some privacy modes; never let that break a form. */
function safeGet(key) {
  try {
    return window.sessionStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function safeSet(key, value) {
  try {
    window.sessionStorage.setItem(key, value);
  } catch (error) {
    /* ignore */
  }
}

/**
 * Record that a form was sent successfully.
 *
 * `formName` says which form, `fromPath` where it was submitted from — both
 * end up on the analytics event so a conversion can be traced back to the page
 * that earned it.
 */
export function markFormSubmitted(formName, fromPath) {
  safeSet(
    SUBMISSION_KEY,
    JSON.stringify({
      formName: formName || 'contact',
      fromPath: fromPath || '',
      at: Date.now(),
    }),
  );
}

/** The most recent submission in this session, or null if there is none. */
export function readFormSubmission() {
  const raw = safeGet(SUBMISSION_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed.at === 'number' ? parsed : null;
  } catch (error) {
    return null;
  }
}

/**
 * Announce the submission to GTM, at most once per submission.
 *
 * Reloading the thank-you page must not report a second conversion, so the
 * timestamp of the submission we already reported is remembered. A genuinely
 * new submission carries a new timestamp and is reported again.
 *
 * Returns true if the event was pushed.
 */
export function reportFormSubmission(submission) {
  if (!submission) return false;

  const alreadyReported = safeGet(REPORTED_KEY);
  if (alreadyReported === String(submission.at)) return false;

  try {
    // The GTM snippet creates this, but the page can be opened before the
    // container has loaded, and dataLayer is designed to be pushed to early.
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'form_submission',
      form_name: submission.formName,
      form_location: submission.fromPath,
    });
  } catch (error) {
    return false;
  }

  safeSet(REPORTED_KEY, String(submission.at));
  return true;
}
