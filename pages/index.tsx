import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";
import { GetStaticProps } from "next";
import { TinaProvider, TinaCMS, useCMS, useForm, usePlugin } from "tinacms";
import { useGithubJsonForm, useGithubToolbarPlugins } from "react-tinacms-github";
import { InlineForm, InlineImage } from "react-tinacms-inline";
import GDbackground from "../public/bg_svg.svg";
import Logo from "../public/gooddoctor_logo.svg";
import Arrow from "../public/arrow_down.svg";
import Search from "../public/search.svg";
import BookMedical from "../public/book_medical.svg";
import HealthArticle from "../public/health_article.svg";
import GoodDoctorBusiness from "../public/good_doctor_business.svg";
import ArrowForward from "../public/arrow_forward.svg";
import LocationSVG from "../public/location_on.svg";
import LogoLong from "../public/logo_long.svg";
import ArrowDownSolid from "../public/arrow_down_1.svg";
import FacebookSVG from "../public/social/facebook.svg";
import InsSVG from "../public/social/ins.svg";
import LinkedinSVG from "../public/social/linkedin.svg";
import TwitterSVG from "../public/social/twitter.svg";
import YoutubeSVG from "../public/social/youtube.svg";

export default function Home({ file }) {
  // const data = file.data;

  const formOptions: any = {
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
        name: "image_url",
        component: "image",
        validate: (value, allValues, meta, field) => {},
        // Generate the frontmatter value based on the filename
        // Decide the file upload directory for the post
        uploadDir: (value, value2) => {
          console.log("🚀 ~ file: index.tsx ~ line 26 ~ Home ~ value", value);
          return "/public/";
        },
        // Generate the src attribute for the preview image.
        previewSrc: (fullSrc) => {
          console.log("fullSrc", fullSrc);
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
    ],
  };

  // Registers a JSON Tina Form
  const [data, form] = useGithubJsonForm(file, formOptions);
  console.log("🚀 ~ file: index.tsx ~ line 22 ~ Home ~ data", data);
  usePlugin(form);
  useGithubToolbarPlugins();

  return (
    <div className="min-h-screen">
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <div
        className="bg-cover bg-center bg-no-repeat h-header relative"
        style={{ backgroundImage: "url(/background.png)" }}
      >
        <div className="container mx-auto">
          <nav className="h-20 flex items-center justify-between">
            <div className="header-left flex items-center">
              <div className="hambuger">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="#FFF" />
                </svg>
              </div>
              <div className="ml-7">
                <Logo />
              </div>
            </div>
            <div className="header-right flex items-center space-x-6">
              {/* Be our partner */}
              <div className="flex items-center relative">
                <span className="text-white mr-1">Be Our Partner</span>
                <Arrow />
                <ul className="hidden">
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                </ul>
              </div>

              {/* Help Centre */}
              <div className="flex items-center">
                <span className="text-white">Help Centre</span>
              </div>

              {/* Bahasa Indonesia */}
              <div className="flex items-center relative">
                <span className="text-white">Bahasa Indonesia</span>
                <Arrow />
                <ul className="hidden">
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                </ul>
              </div>

              <Search />
            </div>
          </nav>
          <div className="grid grid-cols-12 gap-3 auto-cols-fr mt-32">
            <div className="col-start-2 col-end-6 z-30">
              <div className="text-homeBanner leading-header w-96 font-bold text-white">
                <span className="font-thin">{data.title1}</span>
                <div>{data.title2}</div>
              </div>
            </div>
            <div className="col-start-7 col-end-13 pl-9 relative">
              <div className="absolute z-20">
                <GDbackground />
              </div>
              <img
                style={{ marginTop: "400px" }}
                className="absolute z-10"
                src={typeof data.image_url === "string" ? data.image_url : data.image_url.previewSrc}
              />
            </div>
          </div>
        </div>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {/* Welcome to <a href="https://nextjs.org">Next.js!</a>1 */}
          {data.title}
        </h1>

        <img width="400" src={typeof data.image_url === "string" ? data.image_url : data.image_url.previewSrc} />

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

/**
 * Fetch data with getStaticProps based on 'preview' mode
 */
export const getStaticProps: GetStaticProps = async function ({ preview, previewData }) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: "content/home.json",
      parse: parseJson,
    });
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: "content/home.json",
        data: (await import("../content/home.json")).default,
      },
    },
  };
};
