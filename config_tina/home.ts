export const formOptions: any = {
  label: "Home Page",
  fields: [
    { name: "title", component: "text" },
    {
      name: "title1",
      component: "text",
    },
    {
      name: "title2",
      component: "text",
    },
    {
      name: "header_image_url",
      component: "image",
      validate: (value, allValues, meta, field) => {},
      // Generate the frontmatter value based on the filename
      // Decide the file upload directory for the post
      uploadDir: (value, value2) => {
        return "/public/";
      },
      // Generate the src attribute for the preview image.
      previewSrc: (fullSrc) => {
        if (typeof fullSrc === "string") {
          if (fullSrc.includes("http")) {
            return fullSrc;
          } else {
            return "/" + fullSrc;
          }
        } else {
          return fullSrc?.previewSrc;
        }
      },
    },
    {
      name: "company_milestone_1",
      component: "image",
      validate: (value, allValues, meta, field) => {},
      // Generate the frontmatter value based on the filename
      // Decide the file upload directory for the post
      uploadDir: (value, value2) => {
        return "/public/";
      },
      // Generate the src attribute for the preview image.
      previewSrc: (fullSrc) => {
        if (typeof fullSrc === "string") {
          if (fullSrc.includes("http")) {
            return fullSrc;
          } else {
            return "/" + fullSrc;
          }
        } else {
          return fullSrc?.previewSrc;
        }
      },
    },
    {
      name: "company_milestone_2",
      component: "image",
      validate: (value, allValues, meta, field) => {},
      // Generate the frontmatter value based on the filename
      // Decide the file upload directory for the post
      uploadDir: (value, value2) => {
        return "/public/";
      },
      // Generate the src attribute for the preview image.
      previewSrc: (fullSrc) => {
        if (typeof fullSrc === "string") {
          if (fullSrc.includes("http")) {
            return fullSrc;
          } else {
            return "/" + fullSrc;
          }
        } else {
          return fullSrc.previewSrc;
        }
      },
    },
    {
      name: "company_milestone_3",
      component: "image",
      validate: (value, allValues, meta, field) => {},
      // Generate the frontmatter value based on the filename
      // Decide the file upload directory for the post
      uploadDir: (value, value2) => {
        return "/public/";
      },
      // Generate the src attribute for the preview image.
      previewSrc: (fullSrc) => {
        if (typeof fullSrc === "string") {
          if (fullSrc.includes("http")) {
            return fullSrc;
          } else {
            return "/" + fullSrc;
          }
        } else {
          return fullSrc?.previewSrc;
        }
      },
    },
  ],
};
