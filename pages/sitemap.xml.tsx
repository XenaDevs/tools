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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const host = context.req.headers.host || "http://localhost"; // FIXME
  const sitemap = generateSiteMap(toolsList, host);

  context.res.setHeader("Content-Type", "text/xml");
  context.res.write(sitemap);
  context.res.end();

  return {
    props: {},
  };
};

export default SiteMap;
