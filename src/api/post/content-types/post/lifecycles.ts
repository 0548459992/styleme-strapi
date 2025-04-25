export default {
  async beforeCreate(event) {
    const { data } = event.params;

    if (!data.publishDate) {
      data.publishDate = new Date().toISOString();
    }
  },
};
