import React from "react";
import Link from "next/link";
import { ToolMetaData } from "../utils/utils";
import { toolsList } from "../utils/tools";

const Home = () => {
  const tools = toolsList.map((tool: ToolMetaData, i: number) => (
    <>
      <Link href={tool.path} passHref>
        <p>{tool.label}</p>
      </Link>

      <h1>{tool.shortDesc}</h1>
    </>
  ));
  return tools;
};

export default Home;
