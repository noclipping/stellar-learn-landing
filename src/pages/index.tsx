import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stellar Learn LMS</title>
        <meta
          name="description"
          content="Welcome to Stellar Learn LMS. Learn and grow with us!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Stellar Learn LMS
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Your gateway to a brighter learning future.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </main>
    </>
  );
}
