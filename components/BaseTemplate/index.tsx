import React from "react"

const BaseTemplate = (children: React.ReactNode) => {
  return (
      <main className='px-10 md:px-20 lg:px-30 max-w-5xl mx-auto'>
        <section className='min-h-screen pt-10'>
          <div className="flex flex-col gap-12 items-center">

          </div>
        </section>
      </main>
  )
}

export default BaseTemplate
