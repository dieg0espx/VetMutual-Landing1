import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../utils/supabaseClient';
import logo from '../images/logo.png'
import Image from 'next/image';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);  
    } else {
      router.push('/dashboard'); // Redirect after login
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#09090b]">
    <div className="bg-[#0f0f10] p-8 rounded-lg shadow-lg w-96">
      <Image src={logo} className='w-[60%] mx-auto mt-2 mb-4'/>
      <h2 className="text-white text-2xl font-semibold">Login</h2>
      <p className="text-gray-400 text-sm mb-6">
        Enter your email below to login to your account
      </p>

      <form onSubmit={handleLogin} className="space-y-4">
        {/* Email Input */}
        <div>
          <label className="text-gray-400 text-sm">Email</label>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mt-1 bg-black text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-gray-600"
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="text-gray-400 text-sm flex justify-between">
            Password
            <a href="#" className="text-gray-500 text-sm hover:underline">
              Forgot your password?
            </a>
          </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mt-1 bg-black text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-gray-600"
            required
          />
        </div>

        {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-white text-black font-medium py-3 rounded-md hover:bg-gray-300"
        >
          Login
        </button>
      </form>

    </div>
  </div>
);
}