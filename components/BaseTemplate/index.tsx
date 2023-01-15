import React from "react";

const BaseTemplate = (children: React.ReactNode) => {
  return (
    <main className="px-10 md:px-20 lg:px-30 max-w-5xl mx-auto">
      <section className="pt-10">
        <div className="flex flex-col gap-12 items-center">{children}</div>
      </section>
    </main>
  );
};

export default BaseTemplate;
