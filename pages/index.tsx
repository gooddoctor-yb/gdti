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
import { formOptions } from "../config_tina/home";

export default function Home({ file }) {
  // const data = file.data;

  // Registers a JSON Tina Form
  const [data, form] = useGithubJsonForm(file, formOptions);
  usePlugin(form);
  useGithubToolbarPlugins();

  return (
    <div className="min-h-screen">
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      {/* header menu banner */}
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
                src={
                  typeof data.header_image_url === "string" ? data.header_image_url : data.header_image_url?.previewSrc
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* WHO WE ARE */}
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-3 auto-cols-fr mt-64">
          <div className="col-start-1 col-end-6 z-30">
            <div className="flex items-center h-9 space-x-3">
              <div className="text-lg text-brand_text">WHO WE ARE</div>
              <span className="w-14 border-2 border-brand_text"></span>
            </div>

            <div className="font-bold text-normal_text_light text-title1 leading-tight">
              Hey, nice to meet you. We’re Good Doctor
            </div>

            <div className="mt-3 font-normal leading-snug text-normal_text">
              Appointed official partner of Grab in rolling out the GrabHealth service, our aim is to connect healthcare
              professionals with patients in delivering high-quality health services, thus improving accessibility of
              healthcare without being constrained by time and geographic boundaries.
            </div>
          </div>
        </div>
      </div>

      {/* company milestone */}
      <div className="container mx-auto">
        <div className="mt-36">
          <div className="flex items-end">
            <div>
              <img
                src={
                  typeof data.company_milestone_1 === "string"
                    ? data.company_milestone_1
                    : data?.company_milestone_1?.previewSrc
                }
              />
            </div>
            <div className="">
              <img
                src={
                  typeof data.company_milestone_2 === "string"
                    ? data.company_milestone_2
                    : data?.company_milestone_2?.previewSrc
                }
              />
            </div>
            <div>
              <img
                src={
                  typeof data.company_milestone_3 === "string"
                    ? data.company_milestone_3
                    : data?.company_milestone_3?.previewSrc
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gooddoctor SEA */}
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-3 auto-cols-fr mt-36">
          <div className="col-start-2 col-end-12 relative ml-10" style={{ width: "852px" }}>
            <div
              className="absolute -top-14 left-0 w-20 h-14 bg-no-repeat bg-center"
              style={{ backgroundImage: "url('/doblue_quote_start.png')" }}
            ></div>
            <div className="text-5xl font-bold text-brand_title leading-tight">
              Good Doctor Technology(GDT) is a health-tech company with the vision of ‘One Doctor for One Family in SEA’
            </div>
            <div
              className="absolute -bottom-5 right-0 w-24 h-16 bg-no-repeat bg-center"
              style={{ backgroundImage: "url('/doblue_quote_end.png')" }}
            ></div>
          </div>
        </div>
      </div>

      {/* 3 banner , animation */}
      <div className="container mx-auto">
        <div className="grid gird-cols-12 gap-3 mt-36">
          <div className="col-start-1 col-end-5">
            <div className="py-8 px-9 transition ease-in duration-300 cursor-pointer hover:shadow-home">
              <div className="flex justify-center">
                <img height="180" width="180" src="/animation_001.svg" alt="" />
              </div>
              <div className="space-y-3 text-left mt-8">
                <h1 className="text-normal_text_light text-2xl font-semibold">Covid-19 Updates</h1>
                <div className="mt-3">The latest resources to keep your family and you healthy and safe</div>
                <div>
                  <a className="text-brand_link" href="#">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-5 col-end-9">
            <div className="py-8 px-9 transition ease-in duration-300 cursor-pointer hover:shadow-home">
              <div className="flex justify-center">
                <img height="180" width="180" src="/animation_002.svg" alt="" />
              </div>
              <div className="space-y-3 text-left mt-8">
                <h1 className="text-normal_text_light text-2xl font-semibold">Parenthood Tips</h1>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</div>
                <div>
                  <a className="text-brand_link" href="#">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-9 col-end-13">
            <div className="py-8 px-9 transition ease-in duration-300 cursor-pointer hover:shadow-home">
              <div className="flex justify-center">
                <img height="180" width="180" src="/animation_003.svg" alt="" />
              </div>
              <div className="space-y-3 text-left mt-8">
                <h1 className="text-normal_text_light text-2xl font-semibold">Healthy Life</h1>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</div>
                <div>
                  <a className="text-brand_link" href="#">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our products */}
      <div className="container mx-auto">
        <div className="mt-40">
          <div className="flex items-center h-9 space-x-3">
            <div className="text-lg text-brand_text">OUR PRODUCTS</div>
            <span className="w-14 border-2 border-brand_text"></span>
          </div>
          <div className="font-bold text-title1 leading-tight">
            Learn more about the other different ways we serve your healthcare needs.
          </div>
        </div>

        <div className="grid gird-cols-12 gap-3 auto-cols-fr mt-10">
          <div className="col-start-1 col-end-6">
            <img src="/doctor.svg" alt="doctor" />
          </div>
          <div className="col-start-6 col-end-13 self-center">
            <h1 className="text-4xl font-bold">Medical Consultation</h1>
            <p className="mt-3">
              From General Practitioners to Specialists, talking to a doctor is only 3 clicks away.
            </p>
          </div>
        </div>
        <div className="grid gird-cols-12 gap-3 auto-cols-fr mt-10">
          <div className="col-start-2 col-end-7 self-center">
            <h1 className="text-4xl font-bold">The GoodMall</h1>
            <p className="mt-3">
              Purchase your medication and other health products from licensed pharmacies with no hidden costs.
            </p>
          </div>
          <div className="col-start-7 col-end-13">
            <img src="/goodmall.svg" alt="doctor" />
          </div>
        </div>
      </div>

      {/* bg-brand_bg */}
      <div className="bg-brand_bg flex items-center py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-3 auto-cols-fr">
            <div className="col-span-1">
              <div className="flex items-center p-9 bg-white space-x-5">
                <div className="min-h-px180 min-w-px180">
                  <img className="w-full h-full" alt="medical" src="/book_medical.svg" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">Book medical appointment</h2>
                  <div className="mt-3">
                    Book your next medical appointment with hundreds of our hospital & lab partners - quick & easy.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex items-center p-9 bg-white space-x-5">
                <div className="min-h-px180 min-w-px180">
                  <img className="w-full h-full" alt="medical" src="/health_article.svg" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">Health articles</h2>
                  <div className="mt-3">
                    Be updated with thousands of health articles specially curated by our medical team to keep you
                    informed & healthy.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bg-white */}
      <div className="container mx-auto mt-20">
        <div className="business-title">
          <div className="flex items-center h-9 space-x-3">
            <div className="text-lg text-brand_text">BUSINESS SOLUTIONS</div>
            <span className="w-14 border-2 border-brand_text"></span>
          </div>
          <div className="font-bold text-title1 leading-tight">
            Be the boss who gives health insurance that doesn’t cost an arm and a leg
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 auto-cols-fr mt-11">
          <div className="col-span-1">
            <img
              style={{ height: "426px", width: "483px" }}
              src="/good_doctor_business.svg"
              alt="gooddoctor business"
            />
            {/* <GoodDoctorBusiness /> */}
          </div>
          <div className="col-span-1 self-center">
            <h2 className="font-bold text-title1 leading-tight">Good Doctor Business</h2>
            <p className="mt-3">Provide a holistic healthcare plan for your employees or insurance policy holders</p>
          </div>
        </div>
      </div>

      {/* Newsroom */}
      <div
        className="bg-cover bg-center bg-no-repeat h-60 relative mt-28"
        style={{ backgroundImage: "url(/newsroom.png)" }}
      >
        <div className="mask absolute z-0 inset-0 bg-gradient-to-b from-gradient_from to-gradient_to object-contain opacity-90"></div>
        <div className="absolute inset-0 z-10">
          <div className="container mx-auto h-full flex items-center">
            <div>
              <div className="text-4xl font-bold text-white">Newsroom</div>
              <div className="flex items-center text-white mt-2">
                <div className="mr-3">
                  {`Stay up to date to our `}
                  <a href="#" className="underline">
                    latest news
                  </a>
                </div>
                <ArrowForward />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact us */}

      <div className="container mx-auto mt-20">
        <div className="grid grid-cols-12 gap-3 auto-cols-fr relative">
          <div className="col-start-1 col-end-4 pb-20">
            <div className="text-brand_title text-2xl">Contact us</div>
            <div className="text-5xl font-bold mt-3">Transform healthcare today</div>
            <div className="flex mt-6">
              <div className="flex-none">
                <LocationSVG />
              </div>
              <div className="ml-2">GoodDoctor Technology 176 Orchard Rd Singapore 238843</div>
            </div>
          </div>

          <div className="col-start-7 col-end-13 relative">
            <div className="absolute right-0 ml-6 contact-wrapper bg-normal_text_light px-px70 py-px60 flex flex-col text-white space-y-3">
              <div className="flex flex-col">
                <label>First & last name *</label>
                <input className="mt-3" value="" placeholder="Your first & last name" />
              </div>
              <div className="flex flex-col">
                <label>Email address *</label>
                <input className="mt-3" value="" placeholder="Your email address" />
              </div>
              <div className="flex flex-col">
                <label>Enquiry details *</label>
                <input className="mt-3" value="" placeholder="Your enquiry" />
              </div>
              <div className="pt-10 text-center">
                <p>By sending this inquiry, I agree to the Terms & Conditions</p>
                <button className="bg-brand_link px-10 py-4 mt-5">submit</button>
              </div>
            </div>
          </div>

          <div className="absolute top-28 left-1/3 col-span-12">
            <img width="266" height="280" src="/Contactus.png" />
          </div>
        </div>
      </div>

      {/* company info */}
      <div className="bg-brand_bg py-20">
        <div className="container mx-auto mt-64">
          <div className="grid grid-cols-12 gap-3 auto-cols-fr">
            <div className="col-start-1 col-end-4 space-y-6">
              <div>
                <LogoLong />
              </div>
              <div>
                <div className="font-semibold">Download our Application on</div>
                <div className="flex space-x-3 mt-2">
                  <div>
                    <img src="/AppsStore.png" />
                  </div>
                  <div>
                    <img src="/GooglePlaystore.png" />
                  </div>
                </div>
              </div>
              <div>
                <div className="font-semibold">Are you a doctor?</div>
                <div className="flex space-x-3">
                  <div className="mt-2">
                    <img src="/register_button.png" />
                  </div>
                </div>
              </div>

              {/* language */}
              <div className="relative w-52 py-3 px-4 border rounded-md border-box bg-white cursor-pointer">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-1">
                    <LocationSVG />
                    <span>Singapore</span>
                  </div>
                  <ArrowDownSolid />
                </div>
                <ul className="hidden">
                  <li>Indonisa</li>
                  <li>Thailand</li>
                </ul>
              </div>
            </div>

            {/* company info */}
            <div className="col-start-4 col-end-13">
              <div className="flex space-x-10">
                {/* group1 */}
                <div className="space-y-4">
                  <h1 className="font-semibold">About</h1>
                  <ol>
                    <li>Our story</li>
                    <li>Where we operate</li>
                    <li>Our PR stories</li>
                    <li>Press center</li>
                  </ol>
                </div>
                {/* group2 */}
                <div className="space-y-4">
                  <h1 className="font-semibold">Users</h1>
                  <ol>
                    <li>Consult</li>
                    <li>Commerce</li>
                    <li>Health articles</li>
                    <li>Make offline appt</li>
                    <li>Insurance connect</li>
                  </ol>
                </div>
                {/* group3 */}
                <div className="space-y-4">
                  <h1 className="font-semibold">Partners</h1>
                  <ol>
                    <li>Our story</li>
                    <li>Where we operate</li>
                    <li>Our PR stories</li>
                    <li>Press center</li>
                  </ol>
                </div>
                {/* group4 */}
                <div>
                  <h1>Careers</h1>
                  <ol>
                    <li>GDT life</li>
                    <li>GDT teams</li>
                    <li>Office locations</li>
                  </ol>
                </div>
                <div>
                  <h1>Brand</h1>
                  <ol>
                    <li>GDT Indonesia</li>
                    <li>GDT Singapore</li>
                    <li>GDT Thailand</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container mx-auto h-20 flex items-center">
          <div className="w-full flex justify-between items-center">
            <div>© Good Doctor, 2021. All Rights Reserved</div>
            <ul className="flex space-x-4">
              <li>
                <FacebookSVG />
              </li>
              <li>
                <InsSVG />
              </li>
              <li>
                <LinkedinSVG />
              </li>
              <li>
                <TwitterSVG />
              </li>
              <li>
                <YoutubeSVG />
              </li>
            </ul>
          </div>
        </div>
      </div>
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
