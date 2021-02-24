import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head></Head>
        <body className={process.env.NEXT_PUBLIC_ENV_TYPE === "prod" ? "" : "debug-screens"}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
