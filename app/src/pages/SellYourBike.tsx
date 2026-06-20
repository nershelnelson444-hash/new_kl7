import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';
import StaggerContainer, { StaggerItem } from '../components/StaggerContainer';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const bikeConditions = ["New", "Like New", "Good", "Fair"];
const bikeTypes = ["Sport", "Naked", "Adventure", "Cruiser", "Scooter", "Classic", "Off-Road", "Other"];

export default function SellYourBike() {
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  return (
    <div className="w-full min-h-screen bg-background-main flex flex-col overflow-hidden">

      {/* ─── PAGE HERO ─────────────────────────────────── */}
      <section className="w-full bg-background-main pt-[104px] pb-0 flex flex-col items-center">
        <div className="max-w-[1480px] w-full px-8 py-20">
          <FadeIn direction="up">
            <div className="flex flex-col lg:flex-row justify-between items-end w-full gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-sm font-bold uppercase tracking-wider text-text-extra-muted">Sell Your Bike</span>
                <h1 className="text-[56px] font-bold leading-none tracking-[-0.03em] max-w-2xl">
                  Get the Best Price for Your Bike
                </h1>
              </div>
              <div className="flex flex-col items-end gap-4 max-w-md">
                <p className="text-text-black-muted font-medium text-base text-right">
                  Fast, transparent, and hassle-free. Fill in the form and we'll contact you within 24 hours with a competitive valuation.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── FORM + BENEFITS ───────────────────────────── */}
      <section className="w-full bg-background-main pb-36 flex flex-col items-center">
        <div className="max-w-[1480px] w-full px-8 flex flex-col lg:flex-row gap-16">

          {/* Left: Benefits */}
          <FadeIn direction="up" className="w-full lg:w-[35%]">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <div className="bg-white border border-grey-main rounded-full px-4 py-2 w-fit">
                  <span className="text-base font-medium uppercase tracking-wider">Why KL7?</span>
                </div>
                <h2 className="text-[32px] font-bold leading-tight tracking-[-0.03em]">
                  Sell Smarter, Not Harder
                </h2>
                <p className="text-text-black-muted font-medium text-base">
                  We make selling your bike as effortless as buying one.
                </p>
              </div>

              <StaggerContainer delayChildren={0.2} staggerChildren={0.12} className="flex flex-col gap-6">
                {[
                  { icon: "⚡", title: "Fast Valuation", desc: "Get a competitive offer within 24 hours—no waiting, no guessing." },
                  { icon: "💰", title: "Best Market Price", desc: "We benchmark against live market data to ensure you receive the fairest price." },
                  { icon: "📋", title: "Zero Paperwork Hassle", desc: "We handle all the JPJ transfer documentation from start to finish." },
                  { icon: "🔒", title: "Safe & Secure", desc: "Fully transparent process with no hidden fees or surprise deductions." },
                ].map(({ icon, title, desc }) => (
                  <StaggerItem key={title}>
                    <div className="flex flex-row gap-4 items-start">
                      <div className="w-12 h-12 bg-white border border-grey-main rounded-2xl flex items-center justify-center shrink-0 text-xl">
                        {icon}
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="font-bold text-text-black">{title}</h4>
                        <p className="text-text-black-muted text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Testimonial */}
              <div className="bg-white border border-grey-main rounded-3xl p-6 flex flex-col gap-4">
                <p className="text-text-black font-medium text-base leading-relaxed">
                  "KL7 Garage gave me the best price I'd seen anywhere—and processed everything within 2 days. Absolutely seamless."
                </p>
                <div className="flex flex-row items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-background-mid flex items-center justify-center font-bold text-sm">AH</div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">Ahmad Hakim</span>
                    <span className="text-text-extra-muted text-xs">Sold: Kawasaki Z900</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Form */}
          <FadeIn direction="up" delay={0.2} className="w-full lg:w-[65%]">
            <div className="bg-white border border-grey-main rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex flex-col items-center justify-center py-16 gap-6 text-center"
                  >
                    <div className="w-16 h-16 bg-background-main rounded-full flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h2 className="text-[32px] font-bold leading-none tracking-[-0.03em]">Request Submitted!</h2>
                    <p className="text-text-black-muted max-w-xs">Our team will contact you within 24 hours with a valuation. Keep your phone handy!</p>
                    <div className="flex flex-row gap-4 mt-4">
                      <Button
                        variant="primary"
                        onClick={() => { setSubmitted(false); setStep(1); }}
                      >
                        Submit Another
                      </Button>
                      <Button asLink to="/inventory" variant="inverse">
                        Browse Bikes
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-8"
                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  >
                    <div className="flex flex-col gap-2">
                      <h2 className="text-[32px] font-bold leading-none tracking-[-0.03em]">Bike Details</h2>
                      <p className="text-text-black-muted">Tell us about the bike you'd like to sell.</p>
                    </div>

                    {/* ── Section 1: Bike Info ── */}
                    <div className="flex flex-col gap-6">
                      <h3 className="font-bold text-sm uppercase tracking-wider text-text-extra-muted border-b border-grey-main pb-3">About Your Bike</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="font-medium text-sm text-text-black-muted uppercase tracking-wider">Brand / Make</label>
                          <input
                            type="text"
                            required
                            className="w-full bg-background-mid border border-grey-main rounded-xl px-4 py-4 outline-none focus:border-black-main transition-colors font-medium text-text-black"
                            placeholder="e.g. Honda, Yamaha"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-medium text-sm text-text-black-muted uppercase tracking-wider">Model</label>
                          <input
                            type="text"
                            required
                            className="w-full bg-background-mid border border-grey-main rounded-xl px-4 py-4 outline-none focus:border-black-main transition-colors font-medium text-text-black"
                            placeholder="e.g. CBR600RR, MT-09"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="font-medium text-sm text-text-black-muted uppercase tracking-wider">Year</label>
                          <input
                            type="number"
                            required
                            min="1990"
                            max={new Date().getFullYear()}
                            className="w-full bg-background-mid border border-grey-main rounded-xl px-4 py-4 outline-none focus:border-black-main transition-colors font-medium text-text-black"
                            placeholder="2022"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-medium text-sm text-text-black-muted uppercase tracking-wider">Mileage (km)</label>
                          <input
                            type="number"
                            required
                            className="w-full bg-background-mid border border-grey-main rounded-xl px-4 py-4 outline-none focus:border-black-main transition-colors font-medium text-text-black"
                            placeholder="15000"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-medium text-sm text-text-black-muted uppercase tracking-wider">Engine (cc)</label>
                          <input
                            type="number"
                            className="w-full bg-background-mid border border-grey-main rounded-xl px-4 py-4 outline-none focus:border-black-main transition-colors font-medium text-text-black"
                            placeholder="600"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="font-medium text-sm text-text-black-muted uppercase tracking-wider">Bike Type</label>
                          <select className="w-full bg-background-mid border border-grey-main rounded-xl px-4 py-4 outline-none focus:border-black-main transition-colors font-medium text-text-black appearance-none">
                            {bikeTypes.map(t => <option key={t}>{t}</option>)}
                          </select>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-medium text-sm text-text-black-muted uppercase tracking-wider">Condition</label>
                          <select className="w-full bg-background-mid border border-grey-main rounded-xl px-4 py-4 outline-none focus:border-black-main transition-colors font-medium text-text-black appearance-none">
                            {bikeConditions.map(c => <option key={c}>{c}</option>)}
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="font-medium text-sm text-text-black-muted uppercase tracking-wider">Asking Price (RM)</label>
                        <input
                          type="number"
                          className="w-full bg-background-mid border border-grey-main rounded-xl px-4 py-4 outline-none focus:border-black-main transition-colors font-medium text-text-black"
                          placeholder="e.g. 18000"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="font-medium text-sm text-text-black-muted uppercase tracking-wider">Additional Notes</label>
                        <textarea
                          rows={3}
                          className="w-full bg-background-mid border border-grey-main rounded-xl px-4 py-4 outline-none focus:border-black-main transition-colors font-medium text-text-black resize-none"
                          placeholder="Any modifications, accident history, service records, or other details we should know..."
                        />
                      </div>
                    </div>

                    {/* ── Section 2: Owner Info ── */}
                    <div className="flex flex-col gap-6">
                      <h3 className="font-bold text-sm uppercase tracking-wider text-text-extra-muted border-b border-grey-main pb-3">Your Details</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="font-medium text-sm text-text-black-muted uppercase tracking-wider">Full Name</label>
                          <input
                            type="text"
                            required
                            className="w-full bg-background-mid border border-grey-main rounded-xl px-4 py-4 outline-none focus:border-black-main transition-colors font-medium text-text-black"
                            placeholder="Ahmad Hakim"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-medium text-sm text-text-black-muted uppercase tracking-wider">Phone Number</label>
                          <input
                            type="tel"
                            required
                            className="w-full bg-background-mid border border-grey-main rounded-xl px-4 py-4 outline-none focus:border-black-main transition-colors font-medium text-text-black"
                            placeholder="+60 12-000 0000"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="font-medium text-sm text-text-black-muted uppercase tracking-wider">Email Address</label>
                        <input
                          type="email"
                          required
                          className="w-full bg-background-mid border border-grey-main rounded-xl px-4 py-4 outline-none focus:border-black-main transition-colors font-medium text-text-black"
                          placeholder="ahmad@example.com"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="font-medium text-sm text-text-black-muted uppercase tracking-wider">Preferred Contact Method</label>
                        <select className="w-full bg-background-mid border border-grey-main rounded-xl px-4 py-4 outline-none focus:border-black-main transition-colors font-medium text-text-black appearance-none">
                          <option>WhatsApp</option>
                          <option>Phone Call</option>
                          <option>Email</option>
                        </select>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full"
                    >
                      Submit Valuation Request
                    </Button>

                    <p className="text-center text-xs text-text-extra-muted">
                      By submitting, you agree to our{' '}
                      <Link to="/legal-pages/privacy-policy" className="underline hover:text-text-black">Privacy Policy</Link>.
                      We'll never share your details with third parties.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>

        </div>
      </section>

    </div>
  );
}
