// src/api/tag/content-types/tag/lifecycles.ts

import slugify from 'slugify';

export default {
  async beforeCreate(event) {
    const { data } = event.params;
    if (data.name && !data.slug) {
      data.slug = slugify(data.name, { lower: true });
    }
  },

  async beforeUpdate(event) {
    const { data } = event.params;
    if (data.name && !data.slug) {
      data.slug = slugify(data.name, { lower: true });
    }
  },
};
