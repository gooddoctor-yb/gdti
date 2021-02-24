var uploadDir = (value, value2) => {
  return "/public/";
};

var previewSrc = (fullSrc) => {
  if (typeof fullSrc === "string") {
    if (fullSrc.includes("http")) {
      return fullSrc;
    } else {
      return "/" + fullSrc;
    }
  } else {
    return fullSrc?.previewSrc;
  }
};

export const formOptions: any = {
  label: "Home Page",
  fields: [
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
      uploadDir,
      previewSrc,
    },
    {
      name: "company_milestone_1",
      component: "image",
      uploadDir,
      previewSrc,
    },
    {
      name: "company_milestone_2",
      component: "image",
      uploadDir,
      previewSrc,
    },
    {
      name: "company_milestone_3",
      component: "image",

      uploadDir,
      previewSrc,
    },
    {
      name: "who_we_are",
      component: "text",
    },
    {
      name: "who_we_are_description",
      component: "text",
    },
    {
      name: "gdt_accent",
      component: "text",
    },
    {
      name: "animation_title_1",
      component: "text",
    },
    {
      name: "animation_description_1",
      component: "text",
    },
    {
      name: "animation_image_1",
      component: "image",
      uploadDir,
      previewSrc,
    },
    {
      name: "animation_title_2",
      component: "text",
    },
    {
      name: "animation_description_2",
      component: "text",
    },
    {
      name: "animation_image_2",
      component: "image",
      uploadDir,
      previewSrc,
    },
    {
      name: "animation_title_3",
      component: "text",
    },
    {
      name: "animation_description_3",
      component: "text",
    },
    {
      name: "animation_image_3",
      component: "image",
      uploadDir,
      previewSrc,
    },
    {
      name: "our_products",
      component: "text",
    },
    {
      name: "our_product_title_1",
      component: "text",
    },
    {
      name: "our_product_description_1",
      component: "text",
    },
    {
      name: "our_product_image_1",
      component: "image",
      uploadDir,
      previewSrc,
    },
    {
      name: "our_product_title_2",
      component: "text",
    },
    {
      name: "our_product_description_2",
      component: "text",
    },
    {
      name: "our_product_image_2",
      component: "image",
      uploadDir,
      previewSrc,
    },
    {
      name: "tips_title_1",
      component: "text",
    },
    {
      name: "tips_description_1",
      component: "text",
    },
    {
      name: "tips_image_1",
      component: "image",
      uploadDir,
      previewSrc,
    },
    {
      name: "tips_title_2",
      component: "text",
    },
    {
      name: "tips_description_2",
      component: "text",
    },
    {
      name: "tips_image_2",
      component: "image",
      uploadDir,
      previewSrc,
    },
    {
      name: "business_solutions",
      component: "text",
    },
    {
      name: "business_solutions_image_1",
      component: "image",
      uploadDir,
      previewSrc,
    },
    {
      name: "business_solutions_title_1",
      component: "text",
    },
    {
      name: "business_solutions_description_1",
      component: "text",
    },
  ],
};
