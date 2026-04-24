import fs from "node:fs";
import path from "node:path";
import Script from "next/script";

const homeHtml = fs.readFileSync(
  path.join(process.cwd(), "content", "home.html"),
  "utf8",
);

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: homeHtml }} />
      <Script src="/js/script.js" strategy="afterInteractive" />
    </>
  );
}
