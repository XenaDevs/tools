import { Head } from "components/Head/Head";
import { ToolMetaData } from "utils/tools";

export const ToolTemplate = ({
  metadata,
  tool,
}: {
  metadata: ToolMetaData;
  tool: React.ReactNode;
}) => {
  return (
    <main className="px-10 md:px-20 lg:px-30 max-w-5xl mx-auto">
      <Head tool={metadata} />

      <section className=" py-10">
        <h1 className="text-xl">{metadata.label}</h1>
        {tool}
      </section>
    </main>
  );
};
