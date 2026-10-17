import {defineArrayMember, defineField, defineType} from 'sanity'

/**
 * Rich text for blog bodies. The styles/lists/marks here map 1:1 onto the tags
 * the existing posts already used (h2, h3, h4, p, ul, ol, strong, em, a, img)
 * so the rendered markup — and therefore the .cs_blog_content styling — is
 * unchanged from the hard-coded version.
 */
export const blockContent = defineType({
  name: 'blockContent',
  title: 'Body',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Paragraph', value: 'normal'},
        {title: 'Heading 2', value: 'h2'},
        {title: 'Heading 3', value: 'h3'},
        {title: 'Heading 4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bulleted', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Bold', value: 'strong'},
          {title: 'Italic', value: 'em'},
          {title: 'Underline', value: 'underline'},
        ],
        annotations: [
          defineArrayMember({
            name: 'link',
            title: 'External link',
            type: 'object',
            fields: [
              defineField({
                name: 'href',
                title: 'URL',
                type: 'url',
                validation: (Rule) =>
                  Rule.required().uri({scheme: ['https', 'http', 'mailto', 'tel']}),
              }),
              defineField({
                name: 'newTab',
                title: 'Open in a new tab',
                type: 'boolean',
                initialValue: true,
              }),
              defineField({
                name: 'noFollow',
                title: 'Add rel="nofollow"',
                type: 'boolean',
                description: 'Use for paid, untrusted or user-submitted links.',
                initialValue: false,
              }),
            ],
          }),
          defineArrayMember({
            name: 'internalLink',
            title: 'Internal link',
            type: 'object',
            description: 'Link to another page on karachilawfirms.pk — good for SEO.',
            fields: [
              defineField({
                name: 'path',
                title: 'Path',
                type: 'string',
                description: 'For example /service/divorce-lawyer or /contact',
                validation: (Rule) =>
                  Rule.required().custom((value) =>
                    value && value.startsWith('/')
                      ? true
                      : 'Path must start with / (e.g. /service/divorce-lawyer)',
                  ),
              }),
            ],
          }),
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          description: 'Describe the image for screen readers and search engines.',
          validation: (Rule) => Rule.required().error('Alt text is required for SEO and accessibility.'),
        }),
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string',
        }),
      ],
    }),
  ],
})
