import { GetServerSideProps } from "next";
import { ToolMetaData, toolsList } from "../utils/tools";

function generateSiteMap(posts: Array<ToolMetaData>, host: string) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${host}</loc>
    </url>
     ${posts
       .map(({ path }) => {
         return `
       <url>
           <loc>${`${host}${path}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will return the sitemap
}

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  const host = req.headers.host || "http://localhost"; // FIXME
  const sitemap = generateSiteMap(toolsList, host);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
