import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '91ufe034',
    dataset: 'production',
  },
  // Hostname for `sanity deploy` -> https://karachi-law-firms.sanity.studio
  studioHost: 'karachi-law-firms',
  deployment: {
    // Pinned so redeploys never prompt for an application id.
    appId: 'gfxh93y8hfcpqo75rs1dput6',
  },
})
