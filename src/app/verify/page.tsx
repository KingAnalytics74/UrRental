"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, ShieldCheck, CheckCircle2, Upload, ArrowRight, Lock } from "lucide-react";

const STEPS = [
  { id: 1, title: "NIN Verification", desc: "Enter your National Identification Number" },
  { id: 2, title: "BVN Check", desc: "Provide your Bank Verification Number" },
  { id: 3, title: "Document Upload", desc: "Upload a recent utility bill" },
  { id: 4, title: "Review", desc: "Review and submit for verification" },
];

export default function VerifyPage() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

  const next = () => {
    if (step < 4) setStep(step + 1);
    else setDone(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-white border-b border-gray-100 px-4 py-4">
        <Link href="/" className="inline-flex items-center gap-2">
          <div className="w-8 h-8 bg-[#1A56DB] rounded-lg flex items-center justify-center">
            <Home className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg text-[#1E2A4A]">
            Ur<span className="text-[#1A56DB]">Rentals</span>
          </span>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-xl">
          {done ? (
            <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center shadow-sm">
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-10 h-10 text-emerald-500" />
              </div>
              <h2 className="text-2xl font-extrabold text-[#1E2A4A] mb-2">Verification Submitted!</h2>
              <p className="text-gray-500 mb-6">
                Your details are under review. You&apos;ll receive a notification within 24 hours once your account is verified.
              </p>
              <Link href="/properties" className="inline-flex items-center gap-2 bg-[#1A56DB] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#1340B0] transition-colors">
                Browse Properties <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <div className="text-center mb-8">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-7 h-7 text-[#1A56DB]" />
                </div>
                <h1 className="text-2xl font-extrabold text-[#1E2A4A] mb-2">Verify Your Identity</h1>
                <p className="text-gray-500 text-sm">Complete verification to unlock full access to UrRentals</p>
              </div>

              {/* Step indicator */}
              <div className="flex items-center gap-1 mb-8">
                {STEPS.map((s, i) => (
                  <div key={s.id} className="flex items-center gap-1 flex-1">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors flex-shrink-0 ${
                      step > s.id ? "bg-emerald-500 text-white" : step === s.id ? "bg-[#1A56DB] text-white" : "bg-gray-100 text-gray-400"
                    }`}>
                      {step > s.id ? "✓" : s.id}
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className={`flex-1 h-0.5 ${step > s.id ? "bg-emerald-400" : "bg-gray-200"}`} />
                    )}
                  </div>
                ))}
              </div>

              <div className="mb-2">
                <h2 className="font-bold text-[#1E2A4A]">{STEPS[step - 1].title}</h2>
                <p className="text-gray-500 text-sm">{STEPS[step - 1].desc}</p>
              </div>

              <div className="mt-5 space-y-4">
                {step === 1 && (
                  <div>
                    <label className="block text-sm font-semibold text-[#1E2A4A] mb-1.5">National Identification Number (NIN)</label>
                    <input type="text" placeholder="Enter your 11-digit NIN" maxLength={11} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1A56DB] tracking-widest" />
                    <p className="text-xs text-gray-400 mt-1.5 flex items-center gap-1"><Lock className="w-3 h-3" /> Encrypted and never stored in plain text</p>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <label className="block text-sm font-semibold text-[#1E2A4A] mb-1.5">Bank Verification Number (BVN)</label>
                    <input type="text" placeholder="Enter your 11-digit BVN" maxLength={11} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1A56DB] tracking-widest" />
                    <p className="text-xs text-gray-400 mt-1.5 flex items-center gap-1"><Lock className="w-3 h-3" /> Used only to verify your identity — not for financial access</p>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <label className="block text-sm font-semibold text-[#1E2A4A] mb-1.5">Utility Bill (Address Proof)</label>
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-[#1A56DB] transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Click to upload your utility bill</p>
                      <p className="text-xs text-gray-400 mt-1">NEPA/IKEDC bill, water or internet bill — dated within 3 months</p>
                      <p className="text-xs text-gray-400">PDF, PNG, JPG — max 5MB</p>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-3">
                    {[
                      { label: "NIN", value: "••••••••••1" },
                      { label: "BVN", value: "••••••••••2" },
                      { label: "Utility Bill", value: "utility_bill.pdf uploaded" },
                    ].map((r) => (
                      <div key={r.label} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <span className="text-sm font-semibold text-[#1E2A4A]">{r.label}</span>
                        <div className="flex items-center gap-1.5 text-emerald-600 text-sm">
                          <CheckCircle2 className="w-4 h-4" />
                          {r.value}
                        </div>
                      </div>
                    ))}
                    <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl text-xs text-blue-700">
                      By submitting, you confirm all information is accurate and you consent to our identity verification process.
                    </div>
                  </div>
                )}
              </div>

              <button onClick={next} className="w-full mt-6 bg-[#1A56DB] hover:bg-[#1340B0] text-white py-3 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2">
                {step < 4 ? <>Continue <ArrowRight className="w-4 h-4" /></> : <>Submit Verification <ShieldCheck className="w-4 h-4" /></>}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
