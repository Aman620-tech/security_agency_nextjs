'use client'

import { useState, useEffect, useRef } from 'react'
import { MessageSquare, ChevronLeft, ChevronRight, Quote, Send } from 'lucide-react'
import { reviewsAPI } from '@/lib/api'
import { toast } from 'sonner'

const INITIAL_FORM = {
  name:        '',
  email:       '',
  description: '',
  rating:      0,
  tenderName:  '',
  areaName:    '',
}

const AUTO_INTERVAL = 4000

export default function ReviewsPage() {
  const [reviews, setReviews]           = useState([])
  const [loading, setLoading]           = useState(true)
  const [submitting, setSubmitting]     = useState(false)
  const [formData, setFormData]         = useState(INITIAL_FORM)
  const [hoveredStar, setHoveredStar]   = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => { fetchReviews() }, [])

  useEffect(() => {
    if (reviews.length <= 2) return
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, AUTO_INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [reviews.length])

  const fetchReviews = async () => {
    setLoading(true)
    try {
      const data = await reviewsAPI.getAll()
      setReviews(data.filter((r) => r.is_show && !r.is_deleted))
    } catch {
      toast.error('Failed to load reviews')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.rating) {
      toast.error('Please select a star rating')
      return
    }
    setSubmitting(true)
    try {
      await reviewsAPI.create(formData)
      toast.success('Review submitted successfully!')
      setFormData(INITIAL_FORM)
      fetchReviews()
    } catch {
      toast.error('Failed to submit review')
    } finally {
      setSubmitting(false)
    }
  }

  const set = (field) => (e) => setFormData((f) => ({ ...f, [field]: e.target.value }))

  const goTo = (idx) => {
    clearInterval(timerRef.current)
    setCurrentIndex((idx + reviews.length) % reviews.length)
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, AUTO_INTERVAL)
  }

  const prev = () => goTo(currentIndex - 1)
  const next = () => goTo(currentIndex + 1)

  const visiblePair = reviews.length > 0
    ? [
        reviews[currentIndex % reviews.length],
        reviews[(currentIndex + 1) % reviews.length],
      ]
    : []

  const formatDate = (dateVal) => {
    const d = dateVal?.$date ? new Date(dateVal.$date) : new Date(dateVal)
    return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })
  }

  const STAR_LABELS = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent']

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Client <span className="text-amber-500">Reviews</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Honest feedback from businesses and individuals who trust our security services.
            </p>
          </div>
        </div>
      </section>

      {/* ── Reviews carousel ──────────────────────────────────────── */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <p className="text-gray-400 text-sm mb-10">
            {!loading && `${reviews.length} review${reviews.length !== 1 ? 's' : ''}`}
          </p>

          {/* Skeleton */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-pulse">
              {[1, 2].map((i) => (
                <div key={i} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-amber-500/20 space-y-4">
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, j) => <div key={j} className="w-4 h-4 rounded bg-slate-700" />)}
                  </div>
                  <div className="h-3 bg-slate-700 rounded w-full" />
                  <div className="h-3 bg-slate-700 rounded w-5/6 mx-auto" />
                  <div className="h-3 bg-slate-700 rounded w-1/3 mx-auto mt-4" />
                  <div className="h-2 bg-slate-700 rounded w-1/4 mx-auto" />
                </div>
              ))}
            </div>
          )}

          {/* Empty */}
          {!loading && reviews.length === 0 && (
            <div className="bg-slate-800 rounded-xl border border-amber-500/10 text-center py-20">
              <MessageSquare className="h-12 w-12 text-slate-600 mx-auto mb-3" />
              <p className="text-gray-400 font-medium">No reviews yet</p>
              <p className="text-slate-500 text-sm mt-1">Be the first to share your experience below!</p>
            </div>
          )}

          {/* 2-card carousel */}
          {!loading && reviews.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {visiblePair.map((review, idx) => (
                  <div
                    key={`${review._id?.$oid ?? review._id}-${idx}`}
                    className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-amber-500/20 relative transition-all duration-500 animate-slideIn"
                  >
                    <Quote className="h-10 w-10 text-amber-500/20 absolute top-6 right-6" />

                    {/* Stars from rating field */}
                    {(() => {
                      const stars = Math.min(5, Math.max(0, Number(review.rating) || 0))
                      return (
                        <div className="flex justify-center mb-4">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <svg
                              key={s}
                              className={`h-5 w-5 ${s <= stars ? 'text-amber-500 fill-amber-500' : 'text-slate-600 fill-slate-600'}`}
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      )
                    })()}

                    <p className="text-gray-300 text-base italic text-center mb-6 line-clamp-4">
                      "{review.description}"
                    </p>

                    <div className="text-center">
                      <p className="text-white font-semibold">{review.name}</p>
                      {review.tenderName && (
                        <p className="text-amber-500/80 text-xs mt-1">{review.tenderName}</p>
                      )}
                      {review.areaName && (
                        <p className="text-slate-500 text-xs mt-0.5">{review.areaName}</p>
                      )}
                      <p className="text-slate-600 text-xs mt-1">{formatDate(review.createdAt)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {reviews.length > 2 && (
                <div className="flex justify-center gap-4 mt-8">
                  <button onClick={prev} className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors">
                    <ChevronLeft className="h-5 w-5 text-white" />
                  </button>
                  <div className="flex gap-2 items-center">
                    {reviews.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => goTo(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === currentIndex ? 'bg-amber-500 w-6' : 'w-2 bg-slate-600'
                        }`}
                      />
                    ))}
                  </div>
                  <button onClick={next} className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors">
                    <ChevronRight className="h-5 w-5 text-white" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── Write a Review ────────────────────────────────────────── */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">

            <div className="text-center mb-10">
              <div className="h-px w-12 bg-amber-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-2">
                Share Your <span className="text-amber-500">Experience</span>
              </h2>
              <p className="text-gray-400 text-sm">
                Had an experience with us? We'd love to hear from you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Your Name *</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={set('name')}
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Email Address *</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={set('email')}
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Tender Name + Area Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Tender Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Staff Mid-Year Performance"
                    value={formData.tenderName}
                    onChange={set('tenderName')}
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Area Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Corporate Headquarters"
                    value={formData.areaName}
                    onChange={set('areaName')}
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Star Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Rating *</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      onClick={() => setFormData((f) => ({ ...f, rating: star }))}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <svg
                        className={`h-8 w-8 transition-colors ${
                          star <= (hoveredStar || formData.rating)
                            ? 'text-amber-500 fill-amber-500'
                            : 'text-slate-600 fill-slate-600'
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                  {(hoveredStar || formData.rating) > 0 && (
                    <span className="text-amber-500 text-sm font-medium ml-1">
                      {STAR_LABELS[hoveredStar || formData.rating]}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Your Review *</label>
                <textarea
                  placeholder="Tell us about your experience..."
                  value={formData.description}
                  onChange={set('description')}
                  rows={5}
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none resize-none transition-colors"
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-slate-950 font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-slate-950 border-t-transparent" />
                    Submitting…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Submit Review
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.4s ease both;
        }
      `}</style>
    </>
  )
}