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
    <div key={i}>
      <Link href={tool.path} passHref className="max-w-fit">
        <h2 className="text-2xl mb-2 underline">{tool.label}</h2>
        <p>{tool.shortDesc}</p>
      </Link>
    </div>
  ));

  const mostVisitedTools = Object.values(visitedTools).sort(
    (a, b) => b.visits - a.visits
  );

  const favoriteTools = mostVisitedTools.map(({ tool }, i) => (
    <div key={i}>
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
        <input
          className="text-Black"
          type={"search"}
          onChange={(e) => {
            const result = fuse.search(e.target.value);
            const paths = result.map(({ item }) => item.path);

            const foundTools = toolsList.filter((tool) =>
              paths.includes(tool.path)
            );
            setSearchResult(foundTools.length > 0 ? foundTools : toolsList);
          }}
        />

        <section className="min-h-screen pt-10">
          <div>{favoriteTools}</div>
          <div className="grid grid-cols-4 gap-8 items-center">{navTools}</div>
        </section>
      </main>
    </>
  );
};

export default Home;
