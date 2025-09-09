import { useState } from "react";
import WaitlistModal from "@/components/WaitlistModal";

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  return (
    <>
      <style jsx>{`
        @media (max-width: 1023px) {
          .overlap-image {
            position: static !important;
            top: auto !important;
            left: auto !important;
          }
        }
      `}</style>
      <div className="bg-gray-100 min-h-screen">
        <main className="px-6 py-12">
          <section className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Revolutionize Learning with Stellar Learn
            </h1>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Coming Soon 🕒
            </h1>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <button
                className="bg-black text-white px-6 py-4 rounded-lg hover:bg-gray-800 transition w-full sm:w-56"
                onClick={() => setIsWaitlistOpen(true)}
              >
                Join Waiting List
              </button>
              <a
                href="https://npda.notion.site/Nebula-Academy-Partner-Program-2696192e418f803dadd5e681407c1c1f?source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-6 py-4 rounded-lg w-full sm:w-56 font-semibold overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 inline-flex items-center justify-center"
              >
                <span className="relative z-10">Become a Partner</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
              <a
                href="https://outlook.office365.com/owa/calendar/StellarLearnDemoRequest@nebulaacademy.org/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-700 text-white px-6 py-4 rounded-lg hover:bg-indigo-800 transition w-full sm:w-56 inline-flex items-center justify-center"
              >
                Request a Demo
              </a>
            </div>
            <WaitlistModal
              isOpen={isWaitlistOpen}
              onClose={() => setIsWaitlistOpen(false)}
            />
          </section>

          <section className="mb-8 sm:mb-24 flex justify-center relative">
            <div className="relative flex flex-col lg:flex-row items-center justify-center py-8 sm:py-16 gap-4 sm:gap-8 lg:gap-0">
              <div className="relative hover:z-10 transition-all">
                <img
                  src="/assets/admin-dashboard.png"
                  alt="Stellar-Learn LMS Screenshot 1"
                  className="overlap-image rounded-lg shadow-lg w-full max-w-2xl transition-transform transform hover:scale-105"
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
                  src="/assets/user-dashboard.png"
                  alt="Stellar-Learn LMS Screenshot 2"
                  className="overlap-image rounded-lg shadow-lg w-full max-w-2xl transition-transform transform hover:scale-105"
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

          {/* Stellar-Learn Content Section */}
          <section className="bg-white py-10 sm:py-20 px-6 my-8 sm:my-16">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4 text-gray-800">
                  Welcome to Stellar-Learn
                </h2>
                <h3 className="text-2xl text-gray-600 mb-8">
                  The Future of Learning, Powered by AI
                </h3>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Stellar-Learn isn&apos;t just another Learning Management
                  System—it&apos;s a{" "}
                  <span className="font-bold text-gray-800">
                    next-generation, AI-enhanced platform
                  </span>{" "}
                  built to transform the way organizations, educators, and
                  learners connect.
                </p>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-6">
                  With{" "}
                  <span className="font-bold text-gray-800">
                    intelligent automation, real-time analytics, and adaptive
                    course design
                  </span>
                  , Stellar-Learn makes training not only seamless, but smarter.
                  Our AI features work behind the scenes to personalize learning
                  paths, surface insights that drive performance, and help you
                  measure ROI like never before.
                </p>
              </div>

              {/* Why Stellar-Learn Cards */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
                  Why Stellar-Learn?
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                    <h4 className="text-xl font-bold mb-3 text-purple-600">
                      AI-Driven Experience
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Personalized recommendations, automated workflows, and
                      predictive analytics that keep learners engaged and
                      leaders informed.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                    <h4 className="text-xl font-bold mb-3 text-blue-600">
                      All-in-One Platform
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      From full course delivery to student management, built-in
                      certification handling, and white-label options for your
                      brand.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                    <h4 className="text-xl font-bold mb-3 text-green-600">
                      Measurable Impact
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Deep data insights and ROI dashboards that prove the value
                      of every training investment.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                    <h4 className="text-xl font-bold mb-3 text-pink-600">
                      Future-Ready Design
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Scalable, secure, and built for institutions, enterprises,
                      and training partners who want more than &quot;just an
                      LMS.&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Built for Growth Section */}
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-6 text-gray-800">
                  Built for Growth
                </h3>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Whether you&apos;re an{" "}
                  <span className="font-bold text-gray-800">
                    educator shaping the classroom of tomorrow
                  </span>{" "}
                  or a{" "}
                  <span className="font-bold text-gray-800">
                    partner expanding your reach
                  </span>
                  , Stellar-Learn provides the tools, intelligence, and
                  flexibility you need to succeed in a digital-first world.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8 sm:mb-24 flex justify-center relative">
            <div className="relative flex flex-col lg:flex-row items-center justify-center py-8 sm:py-16 gap-4 sm:gap-8 lg:gap-0">
              <div className="relative hover:z-20 transition-all z-20">
                <img
                  src="/assets/Course.png"
                  alt="Stellar-Learn Course Screenshot"
                  className="overlap-image rounded-lg shadow-lg w-full max-w-2xl transition-transform transform hover:scale-105"
                  draggable="false"
                  style={{
                    position: "relative",
                    top: "-50px",
                    left: "50px",
                    userSelect: "none",
                  }}
                />
              </div>
              <div className="relative hover:z-20 transition-all z-10">
                <img
                  src="/assets/Profile.png"
                  alt="Stellar-Learn Profile Screenshot"
                  className="overlap-image rounded-lg shadow-lg w-full max-w-2xl transition-transform transform hover:scale-105"
                  draggable="false"
                  style={{
                    position: "relative",
                    top: "50px",
                    left: "-50px",
                    userSelect: "none",
                  }}
                />
              </div>
            </div>
          </section>

          <section className="text-center mb-8 sm:mb-24">
            <h1 className="text-2xl font-bold text-gray-800">
              More exciting features and updates are coming soon. 🚀 Stay tuned!
            </h1>
          </section>
        </main>
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 pb-10 sm:pb-20">
          <button
            className="bg-black text-white px-6 py-4 rounded-lg hover:bg-gray-800 transition w-full sm:w-56"
            onClick={() => setIsWaitlistOpen(true)}
          >
            Join Waiting List
          </button>
          <a
            href="https://npda.notion.site/Nebula-Academy-Partner-Program-2696192e418f803dadd5e681407c1c1f?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-6 py-4 rounded-lg w-full sm:w-56 font-semibold overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 inline-flex items-center justify-center"
          >
            <span className="relative z-10">Become a Partner</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </a>
          <a
            href="https://outlook.office365.com/owa/calendar/StellarLearnDemoRequest@nebulaacademy.org/bookings/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-700 text-white px-6 py-4 rounded-lg hover:bg-indigo-800 transition w-full sm:w-56 inline-flex items-center justify-center"
          >
            Request a Demo
          </a>
        </div>
      </div>
    </>
  );
}
