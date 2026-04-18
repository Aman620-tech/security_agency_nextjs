'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBuilding, 
  faChartLine, 
  faIndustry, 
  faUniversity,
  faBank,
  faLeaf,
  faChartSimple,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons'

const clients = [
  { name: 'Tech Mahindra', icon: faBuilding, color: 'text-blue-500' },
  { name: 'Reliance Industries', icon: faIndustry, color: 'text-red-500' },
  { name: 'Tata Group', icon: faBriefcase, color: 'text-blue-400' },
  { name: 'Infosys', icon: faUniversity, color: 'text-purple-500' },
  { name: 'HDFC Bank', icon: faBank, color: 'text-blue-600' },
  { name: 'Godrej', icon: faLeaf, color: 'text-green-500' },
  { name: 'Adani Group', icon: faChartLine, color: 'text-orange-500' },
  { name: 'L&T', icon: faChartSimple, color: 'text-gray-500' },
  // Duplicate for seamless loop
  { name: 'Tech Mahindra', icon: faBuilding, color: 'text-blue-500' },
  { name: 'Reliance Industries', icon: faIndustry, color: 'text-red-500' },
  { name: 'Tata Group', icon: faBriefcase, color: 'text-blue-400' },
  { name: 'Infosys', icon: faUniversity, color: 'text-purple-500' },
]

export default function ClientLogos() {
  return (
    <section className="py-20 bg-slate-800 border-y border-amber-500/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Trusted By Industry Leaders</p>
          <div className="h-px w-12 bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 mx-4 group bg-slate-900/50 rounded-xl p-4 transition-all duration-300 hover:bg-slate-900 border border-amber-500/10 hover:border-amber-500/30"
              >
                <div className="flex flex-col items-center justify-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon 
                      icon={client.icon} 
                      className={`h-8 w-8 ${client.color} group-hover:text-amber-500 transition-colors`}
                    />
                  </div>
                  <span className="text-gray-400 group-hover:text-amber-500 text-xs font-medium text-center transition-colors">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: fit-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}