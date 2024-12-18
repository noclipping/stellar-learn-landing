import Head from "next/head";
import { useState } from "react";
import WaitlistModal from "@/components/WaitlistModal";


export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
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
          <section className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Revolutionize Learning with Stellar Learn
            </h1>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Coming Soon 🕒
            </h1>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-black text-white px-6 py-4 rounded-lg hover:bg-gray-800 transition w-56"
                onClick={() => setIsWaitlistOpen(true)}
              >
                Join Waiting List
              </button>
              <a
                href="https://outlook.office365.com/owa/calendar/StellarLearnDemoRequest@nebulaacademy.org/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-700 text-white px-6 py-4 rounded-lg hover:bg-indigo-800 transition w-56 inline-flex items-center justify-center"
              >
                Request a Demo
              </a>
            </div>
            <WaitlistModal
              isOpen={isWaitlistOpen}
              onClose={() => setIsWaitlistOpen(false)}
            />
          </section>

          <section className="mb-24 flex justify-center relative">
            <div className="relative flex items-center justify-center py-16">
              <div className="relative hover:z-10 transition-all">
                <img
                  src="/assets/lms-admin-screenshot.png"
                  alt="Stellar-Learn LMS Screenshot 1"
                  className="rounded-lg shadow-lg w-full max-w-2xl transition-transform transform hover:scale-105"
                  draggable="false"
                  style={{
                    position: "relative",
                    top: "50px",
                    left: "50px",
                    userSelect: "none",
                  }}
                />
              </div>
              <div className="relative hover:z-10 transition-all">
                <img
                  src="/assets/lms-screenshot.png"
                  alt="Stellar-Learn LMS Screenshot 2"
                  className="rounded-lg shadow-lg w-full max-w-2xl transition-transform transform hover:scale-105"
                  draggable="false"
                  style={{
                    position: "relative",
                    top: "-50px",
                    left: "-50px",
                    userSelect: "none",
                  }}
                />
              </div>
            </div>
          </section>

          <section className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              More exciting features and updates are coming soon. 🚀 Stay tuned!
            </h1>
          </section>
        </main>
      </div>
    </>
  );
}
