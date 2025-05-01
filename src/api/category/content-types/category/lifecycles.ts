// src/api/category/content-types/category/lifecycles.ts

import slugifyImport from 'slugify';

const slugify = slugifyImport as (str: string, options?: { lower?: boolean; strict?: boolean }) => string;

export default {
  async beforeCreate(event) {
    const { data } = event.params;
    if (data.name && !data.slug) {
      data.slug = slugify(data.name, { lower: true, strict: true });
    }
  },

  async beforeUpdate(event) {
    const { data } = event.params;
    if (data.name && !data.slug) {
      data.slug = slugify(data.name, { lower: true, strict: true });
    }
  },
};
