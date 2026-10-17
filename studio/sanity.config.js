import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'karachi-law-firms',
  title: 'Karachi Law Firms',

  projectId: '91ufe034',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    productionUrl: async (prev, {document}) => {
      if (document._type === 'post' && document.slug?.current) {
        return `https://karachilawfirms.pk/blog/${document.slug.current}`
      }
      return prev
    },
  },
})
