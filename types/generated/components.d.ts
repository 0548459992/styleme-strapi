import type { Schema, Struct } from '@strapi/strapi';

export interface SocialLinksSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_social_links_social_links';
  info: {
    displayName: 'socialLinks';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'social-links.social-links': SocialLinksSocialLinks;
    }
  }
}
