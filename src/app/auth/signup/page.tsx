"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Home, Eye, EyeOff, Mail, Lock, User, Phone, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Suspense } from "react";

function SignUpForm() {
  const searchParams = useSearchParams();
  const defaultRole = searchParams.get("role") === "landlord" ? "landlord" : "tenant";

  const [role, setRole] = useState<"tenant" | "landlord">(defaultRole);
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const update = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) { setStep(2); return; }
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
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
        <div className="w-full max-w-lg">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-extrabold text-[#1E2A4A] mb-2">Create your account</h1>
              <p className="text-gray-500 text-sm">Join Nigeria&apos;s verified rental marketplace</p>
            </div>

            {/* Step indicator */}
            <div className="flex items-center gap-2 mb-8">
              {[1, 2].map((s) => (
                <div key={s} className="flex items-center gap-2 flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    step > s ? "bg-emerald-500 text-white" : step === s ? "bg-[#1A56DB] text-white" : "bg-gray-100 text-gray-400"
                  }`}>
                    {step > s ? <CheckCircle2 className="w-4 h-4" /> : s}
                  </div>
                  <span className={`text-xs font-medium ${step >= s ? "text-[#1E2A4A]" : "text-gray-400"}`}>
                    {s === 1 ? "Your details" : "Account type"}
                  </span>
                  {s < 2 && <div className={`flex-1 h-0.5 ${step > s ? "bg-emerald-400" : "bg-gray-200"}`} />}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#1E2A4A] mb-1.5">First name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          required
                          value={form.firstName}
                          onChange={(e) => update("firstName", e.target.value)}
                          placeholder="Tunde"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#1A56DB] focus:ring-2 focus:ring-blue-50 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1E2A4A] mb-1.5">Last name</label>
                      <input
                        type="text"
                        required
                        value={form.lastName}
                        onChange={(e) => update("lastName", e.target.value)}
                        placeholder="Adewale"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#1A56DB] focus:ring-2 focus:ring-blue-50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1E2A4A] mb-1.5">Email address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="you@example.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#1A56DB] focus:ring-2 focus:ring-blue-50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1E2A4A] mb-1.5">Phone number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="+234 800 000 0000"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#1A56DB] focus:ring-2 focus:ring-blue-50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1E2A4A] mb-1.5">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type={showPwd ? "text" : "password"}
                        required
                        minLength={8}
                        value={form.password}
                        onChange={(e) => update("password", e.target.value)}
                        placeholder="At least 8 characters"
                        className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#1A56DB] focus:ring-2 focus:ring-blue-50 transition-colors"
                      />
                      <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <p className="text-sm text-gray-600 mb-2">I am joining as a…</p>
                  <div className="grid grid-cols-2 gap-4">
                    {(["tenant", "landlord"] as const).map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRole(r)}
                        className={`relative p-5 rounded-2xl border-2 transition-all text-left ${
                          role === r
                            ? "border-[#1A56DB] bg-blue-50"
                            : "border-gray-200 hover:border-gray-300 bg-white"
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                          role === r ? "bg-[#1A56DB] text-white" : "bg-gray-100 text-gray-500"
                        }`}>
                          {r === "tenant" ? <User className="w-5 h-5" /> : <Building2 className="w-5 h-5" />}
                        </div>
                        <div className="font-bold text-[#1E2A4A] capitalize mb-1">{r}</div>
                        <div className="text-xs text-gray-500">
                          {r === "tenant"
                            ? "Browse and rent verified properties"
                            : "List and manage your properties"}
                        </div>
                        {role === r && (
                          <div className="absolute top-3 right-3">
                            <CheckCircle2 className="w-5 h-5 text-[#1A56DB]" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-xs text-blue-700 mt-4">
                    {role === "tenant"
                      ? "✓ You'll be asked to verify your identity (NIN) to access contact details of landlords."
                      : "✓ You'll verify your identity and property ownership before listings go live."}
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1A56DB] hover:bg-[#1340B0] text-white py-3 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-60 mt-2"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : step === 1 ? (
                  <>Continue <ArrowRight className="w-4 h-4" /></>
                ) : (
                  <>Create Account <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <Link href="/auth/signin" className="text-[#1A56DB] font-semibold hover:underline">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SignUpPage() {
  return (
    <Suspense>
      <SignUpForm />
    </Suspense>
  );
}
