import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail, User, ArrowRight } from "lucide-react";
import chef from "../assets/img/tangerine-newt-q2PMPo8gBBk-unsplash.png";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-[Outfit]">
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full relative">
        <img
          src={chef}
          alt="Chef"
          className="object-cover w-full h-screen"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-5xl font-bold text-center px-4"
          >
            {/* {isSignUp ? "Join the Flavor Journey" : "Welcome Back!"} */}
          </motion.h1>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="md:w-1/2 w-full flex items-center justify-center bg-gradient-to-br from-white/80 to-white/30 backdrop-blur-lg">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md p-8 md:p-12 rounded-3xl bg-white/25 backdrop-blur-2xl border border-white/30 shadow-[0_8px_32px_rgba(31,38,135,0.15)]"
        >
          <h2 className="text-3xl font-semibold text-center mb-2">
            {isSignUp ? "Create Account" : "Sign In"}
          </h2>
          <p className="text-center text-gray-600 mb-8 text-sm">
            {isSignUp
              ? "Join us and explore your next favorite dish!"
              : "Sign in to continue your flavor journey."}
          </p>

          <form className="space-y-5">
            {isSignUp && (
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-500 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/40 border border-white/30 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-500 w-4 h-4" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/40 border border-white/30 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-500 w-4 h-4" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/40 border border-white/30 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 mt-6 py-3 rounded-xl bg-orange-500 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </form>

          {/* Toggle */}
          <div className="text-center text-sm mt-6 text-gray-700">
            {isSignUp ? "Already have an account?" : "Don’t have an account?"}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="ml-2 text-primary font-semibold hover:underline"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
