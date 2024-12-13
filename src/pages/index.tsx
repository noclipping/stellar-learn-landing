import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stellar Learn LMS</title>
        <meta
          name="description"
          content="Revolutionize your learning experience with Stellar-Learn. Join our waiting list today!"
        />
        <link rel="icon" href="/stellar-learn-favicon.png" />
      </Head>
      <div className="bg-gray-100 min-h-screen">
        <main className="px-6 py-12">
          {/* Headline Section */}
          <section className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Revolutionize Learning with Stellar Learn
            </h1>
            <button
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition mb-4"
            >
              Coming Soon (Join Waiting List)
            </button>
            <br />
            <button
              className="bg-indigo-700 text-white px-6 py-3 rounded-lg hover:bg-indigo-800 transition"
            >
              Request a Demo
            </button>
          </section>

          {/* Screenshot Section */}
          <section className="mb-12">
            <img
              src="/assets/lms-screenshot.png"
              alt="Stellar-Learn LMS Screenshot"
              className="rounded-lg shadow-lg w-full max-w-3xl mx-auto"
            />
          </section>

          {/* Placeholder for Future Content */}
          <section className="text-center">
            <p className="text-gray-600 text-lg">
              More exciting features and updates are coming soon. Stay tuned!
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
