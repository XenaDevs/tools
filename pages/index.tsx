import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { ToolMetaData, toolsList } from "../utils/tools";
import { fuse } from "../utils/search";
import { getVisitedTools } from "../utils/local-storage";

const Home = () => {
  const [searchResult, setSearchResult] =
    useState<Array<ToolMetaData>>(toolsList);
  const [visitedTools, setVisitedTools] = useState<
    Record<string, { visits: number; tool: ToolMetaData }>
  >({});

  useEffect(() => {
    const results = getVisitedTools();
    setVisitedTools(results);
  }, []);

  const navTools = searchResult.map((tool: ToolMetaData, i) => (
    <div
      key={i}
      className="border text-Black bg-White p-4 w-full rounded-md shadow-sm shadow-CTA"
    >
      <Link href={tool.path} passHref>
        <h2 className="text-2xl mb-2">{tool.label}</h2>
        <p>{tool.shortDesc}</p>
      </Link>
    </div>
  ));

  const mostVisitedTools = Object.values(visitedTools).sort(
    (a, b) => b.visits - a.visits
  );

  const favoriteTools = mostVisitedTools.map(({ tool }, i) => (
    <div key={i} className="underline text-CTA">
      <Link href={tool.path} passHref>
        <p>{tool.label}</p>
      </Link>
    </div>
  ));

  return (
    <>
      <Head>
        <title>Xena-dev</title>
      </Head>
      <main className="px-10 md:px-20 lg:px-40">
        <section className="min-h-screen pt-10">
          <div className="bg-Black text-White p-4 mb-6ows flex flex-col md:flex-row gap-4 justify-center">
            Your top tools: {favoriteTools}
          </div>

          <div className="bg-White p-4 w-full md:w-2/3 mx-auto my-20 rounded-sm">
            <input
              className="text-Black border w-4/5 p-1"
              type={"search"}
              placeholder="Search"
              onChange={(e) => {
                const result = fuse.search(e.target.value);
                const paths = result.map(({ item }) => item.path);

                const foundTools = toolsList.filter((tool) =>
                  paths.includes(tool.path)
                );
                setSearchResult(foundTools.length > 0 ? foundTools : toolsList);
              }}
            />
          </div>

          <div className="my-6 grid md:grid-cols-2 2xl:grid-cols-4 gap-10 items-center">
            {navTools}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
