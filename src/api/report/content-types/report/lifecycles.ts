export default {
  async beforeCreate(event) {
    const { data } = event.params;

    if (!data.reportedAt) {
      data.reportedAt = new Date().toISOString();
    }
  },

  async afterCreate(event) {
    const { result } = event;

    // נשלוף את כל הדיווחים על אותו פוסט, כולל ה-reporter
    const reports = await strapi.entityService.findMany('api::report.report', {
      filters: {
        post: result.post?.id ?? result.post,
      },
      populate: { reporter: true },
    });

    // סופרים דיווחים של משתמשים ייחודיים
    const uniqueUserIds = new Set(
      reports.map((r: any) => r.reporter?.id).filter(Boolean)
    );

    // אם יש 3 משתמשים שונים שדיווחו – מעבירים את הפוסט למצב 'archived'
    if (uniqueUserIds.size >= 3) {
      await strapi.entityService.update('api::post.post', result.post?.id ?? result.post, {
        data: {
          statusPost: 'archived',
        },
      });
    }
  },
};
