import {defineArrayMember, defineField, defineType} from 'sanity'

const CATEGORIES = [
  {title: 'Family Law', value: 'family-law'},
  {title: 'Property & Real Estate', value: 'property-law'},
  {title: 'Criminal & Civil Law', value: 'criminal-law'},
  {title: 'Business & Corporate', value: 'corporate-law'},
  {title: 'Documentation & Process', value: 'documentation'},
  {title: 'Immigration & Specialized', value: 'immigration'},
  {title: 'Firm News & Guides', value: 'guides'},
]

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'seo', title: 'SEO'},
    {name: 'related', title: 'Related & FAQ'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required().min(10).max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      description: 'The URL segment. The post will live at /blog/<slug>.',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/&/g, 'and')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
            .slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      group: 'content',
      description:
        'The short summary shown on the blog listing cards. Also used as the meta description if you do not set one.',
      validation: (Rule) => Rule.required().min(50).max(300),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      group: 'content',
      options: {hotspot: true},
      description: 'Used on the listing card, the post header and the breadcrumb background.',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          validation: (Rule) =>
            Rule.required().error('Alt text is required for SEO and accessibility.'),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'object',
      group: 'content',
      description: 'Who wrote this. Feeds the Article schema, which Google uses for E-E-A-T.',
      fields: [
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string',
          initialValue: 'KarachiLawFirms.pk',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'role',
          title: 'Role / credentials',
          type: 'string',
          description: 'e.g. "Senior Partner, Family Law" - strengthens author authority signals.',
        }),
        defineField({
          name: 'profileUrl',
          title: 'Profile URL',
          type: 'url',
          description: 'Link to their team page or LinkedIn.',
        }),
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      group: 'content',
      description: 'Posts with a future date are hidden from the site until that time.',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'updatedAt',
      title: 'Last updated',
      type: 'datetime',
      group: 'content',
      description:
        'Set this when you materially revise a post. Google shows and rewards freshness.',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      group: 'related',
      of: [{type: 'string'}],
      options: {list: CATEGORIES},
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      group: 'related',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'relatedServices',
      title: 'Related services',
      type: 'array',
      group: 'related',
      description:
        'Internal links shown alongside the post. Internal linking is one of the strongest on-page SEO levers.',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Path',
              type: 'string',
              description: 'e.g. /service/divorce-lawyer',
              validation: (Rule) =>
                Rule.required().custom((value) =>
                  value && value.startsWith('/') ? true : 'Path must start with /',
                ),
            }),
          ],
          preview: {select: {title: 'title', subtitle: 'href'}},
        }),
      ],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      group: 'related',
      description:
        'Rendered at the bottom of the post and emitted as FAQPage structured data, which can win rich results.',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {select: {title: 'question'}},
        }),
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      group: 'content',
      description: 'Featured posts sort to the top of the blog listing.',
      initialValue: false,
    }),
    defineField({
      name: 'seo',
      title: 'SEO & Social',
      type: 'seo',
      group: 'seo',
    }),
  ],
  orderings: [
    {
      title: 'Published, newest first',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{field: 'title', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'title', subtitle: 'slug.current', media: 'mainImage', date: 'publishedAt'},
    prepare({title, subtitle, media, date}) {
      const when = date ? new Date(date).toISOString().slice(0, 10) : 'unpublished'
      return {title, subtitle: `${when} - /blog/${subtitle || ''}`, media}
    },
  },
})
