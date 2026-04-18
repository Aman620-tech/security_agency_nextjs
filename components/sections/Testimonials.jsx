'use client'

import { useState, useEffect, useRef } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Link from 'next/link'
import { reviewsAPI } from '@/lib/api'

const AUTO_INTERVAL = 4000

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading]           = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const timerRef                        = useRef(null)

  useEffect(() => {
    const load = async () => {
      try {
        const data = await reviewsAPI.getAll()
        setTestimonials(data.filter((r) => r.is_show && !r.is_deleted))
      } catch {
        // silently fail
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  useEffect(() => {
    if (testimonials.length <= 2) return
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, AUTO_INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [testimonials.length])

  const goTo = (idx) => {
    clearInterval(timerRef.current)
    setCurrentIndex((idx + testimonials.length) % testimonials.length)
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, AUTO_INTERVAL)
  }

  const next = () => goTo(currentIndex + 1)
  const prev = () => goTo(currentIndex - 1)

  const visiblePair = testimonials.length > 0
    ? [
        testimonials[currentIndex % testimonials.length],
        testimonials[(currentIndex + 1) % testimonials.length],
      ]
    : []

  if (loading || testimonials.length === 0) return null

  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="h-px w-12 bg-amber-500 mx-auto" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our <span className="text-amber-500">Clients Say</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from our satisfied clients across India.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">

          {/* 2-card sliding row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visiblePair.map((item, idx) => {
              // ── fix: safely parse rating as a number ──
              const stars = Math.min(5, Math.max(0, Number(item.rating) || 0))

              return (
                <div
                  key={`${item._id?.$oid ?? item._id}-${idx}`}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-amber-500/20 relative transition-all duration-500 animate-slideIn"
                >
                  <Quote className="h-10 w-10 text-amber-500/20 absolute top-6 right-6" />

                  {/* Stars — dynamic */}
                  <div className="flex justify-center mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`h-5 w-5 ${
                          s <= stars
                            ? 'text-amber-500 fill-amber-500'
                            : 'text-slate-600 fill-slate-600'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-gray-300 text-base italic text-center mb-6 line-clamp-4">
                    "{item.description}"
                  </p>

                  {/* Name + tender + area */}
                  <div className="text-center">
                    <p className="text-white font-semibold">{item.name}</p>
                    {item.tenderName && (
                      <p className="text-amber-500/80 text-xs mt-1">{item.tenderName}</p>
                    )}
                    {item.areaName && (
                      <p className="text-slate-500 text-xs mt-0.5">{item.areaName}</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Nav controls */}
          {testimonials.length > 2 && (
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-white" />
              </button>

              <div className="flex gap-2 items-center">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goTo(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'bg-amber-500 w-6' : 'w-2 bg-slate-600'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-white" />
              </button>
            </div>
          )}

          {/* View all link */}
          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="text-amber-500 hover:text-amber-400 text-sm font-medium underline underline-offset-4 transition-colors"
            >
              View all reviews →
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.4s ease both;
        }
      `}</style>
    </section>
  )
}