import {
  Shield,
  Users,
  Award,
  Clock,
  Target,
  Heart,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
const currentYear = new Date().getFullYear()
const yearsOfExperience = currentYear - 2009
export const metadata = {
  title: "About Us | Prabha Indira Special Security Agency Private Limited Agency",
  description:
    `Learn about India's most trusted security agency with ${yearsOfExperience}+ years of excellence. PSARA licensed, ISO certified, serving 200+ clients across 25+ cities.`,
};

export default function AboutPage() {
  const currentYear = new Date().getFullYear();
  const sinceYear = 2009;
  const yearsOfExperience = currentYear - sinceYear;
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About{" "}
              <span className="text-amber-500">Prabha Indira Special Security Agency Private Limited </span>
            </h1>
            <p className="text-gray-300 text-lg">
              India's most trusted security services provider, delivering
              excellence since 2009.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
              <div className="h-1 w-20 bg-amber-500 mb-6"></div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Incorporated under the Companies Act 2013 and registered in
                Madhya Pradesh, Prabha Indira Special Security Agency Private Limited Agency Private Limited. has been
                delivering professional security guard services and facility
                manpower solutions to corporate, residential, industrial, and
                institutional clients across India since 2009.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <span className="text-amber-500 font-semibold">
                  We don't deploy guards — we deploy discipline.
                </span>{" "}
                Every personnel we place undergoes structured training, thorough
                background verification, and continuous on-ground supervision.
                Our leadership brings deep expertise in security operations,
                compliance, and workforce management, ensuring you never have to
                worry about who stands at your gate.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, we're proud to be the trusted security partner for over{" "}
                <span className="text-amber-500 font-semibold">
                  200+ businesses
                </span>
                , from small enterprises to Fortune 500 companies, across{" "}
                <span className="text-amber-500 font-semibold">25+ cities</span>{" "}
                in India.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-950 p-8 rounded-xl border border-amber-500/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Shield className="h-10 w-10 text-amber-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">5000+</div>
                  <div className="text-sm text-gray-400">
                    Personnel Deployed
                  </div>
                </div>
                <div className="text-center">
                  <Users className="h-10 w-10 text-amber-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">200+</div>
                  <div className="text-sm text-gray-400">Satisfied Clients</div>
                </div>
                <div className="text-center">
                  <Award className="h-10 w-10 text-amber-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <Clock className="h-10 w-10 text-amber-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-gray-400">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl border border-amber-500/10 text-center">
              <Target className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">
                Our Mission
              </h3>
              <p className="text-gray-300">
                To provide unparalleled security solutions with integrity,
                professionalism, and cutting-edge technology, ensuring the
                safety and peace of mind of our clients.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl border border-amber-500/10 text-center">
              <Heart className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-gray-300">
                To be India's most trusted and innovative security services
                provider, setting new benchmarks in safety, reliability, and
                client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-slate-800 rounded-xl border border-amber-500/10">
              <h3 className="text-xl font-bold text-amber-500 mb-3">
                Integrity
              </h3>
              <p className="text-gray-300">
                We operate with honesty, transparency, and ethical practices in
                everything we do.
              </p>
            </div>
            <div className="text-center p-6 bg-slate-800 rounded-xl border border-amber-500/10">
              <h3 className="text-xl font-bold text-amber-500 mb-3">
                Excellence
              </h3>
              <p className="text-gray-300">
                We strive for the highest standards in security operations and
                client service.
              </p>
            </div>
            <div className="text-center p-6 bg-slate-800 rounded-xl border border-amber-500/10">
              <h3 className="text-xl font-bold text-amber-500 mb-3">
                Reliability
              </h3>
              <p className="text-gray-300">
                We deliver on our promises, every time, without fail or
                compromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Certifications & Accreditations
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "ISO 9001:2015 Certified",
              "PSARA Licensed",
              "NSDC Partner",
              "ISO 45001:2018",
            ].map((cert) => (
              <div
                key={cert}
                className="flex items-center space-x-2 px-6 py-3 bg-slate-900 rounded-full border border-amber-500/20"
              >
                <CheckCircle className="h-5 w-5 text-amber-500" />
                <span className="text-gray-300">{cert}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-6">
            Registered under Companies Act 2013, Madhya Pradesh
          </p>
        </div>
      </section>
    </>
  );
}
