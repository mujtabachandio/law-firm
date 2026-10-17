import {defineField, defineType} from 'sanity'

/**
 * Reusable SEO object. Mirrors the metaTitle / metaDesc / canonical fields that
 * the hard-coded blog posts already carried, and adds the fields the site was
 * missing (keywords, OG image, robots control, focus keyword).
 */
export const seo = defineType({
  name: 'seo',
  title: 'SEO & Social',
  type: 'object',
  options: {collapsible: true, collapsed: false},
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta title',
      type: 'string',
      description:
        'Shown as the clickable headline in Google. Aim for 50-60 characters. Falls back to the post title if left empty.',
      validation: (Rule) =>
        Rule.max(70).warning('Titles over ~60 characters usually get truncated in search results.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      description:
        'The snippet under the title in Google. Aim for 140-160 characters. Falls back to the excerpt if left empty.',
      validation: (Rule) =>
        Rule.max(180).warning('Descriptions over ~160 characters usually get truncated.'),
    }),
    defineField({
      name: 'focusKeyword',
      title: 'Focus keyword',
      type: 'string',
      description:
        'The single phrase this post should rank for, e.g. "divorce lawyer in Karachi". Used for internal review only.',
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
      description: 'Secondary terms. Rendered into the meta keywords tag.',
    }),
    defineField({
      name: 'ogImage',
      title: 'Social share image',
      type: 'image',
      options: {hotspot: true},
      description:
        'Used for Facebook, LinkedIn and X cards. Ideally 1200x630. Falls back to the main image.',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from search engines',
      type: 'boolean',
      description: 'Adds noindex, nofollow. Use for thin or temporary posts.',
      initialValue: false,
    }),
  ],
})
