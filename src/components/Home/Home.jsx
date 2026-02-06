// import { Link } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';

// const Home = () => {
//   const { user } = useAuth();

//   return (
//     <div className="text-center py-20">
//       <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
//          <span className="text-orange-600">Real Estate Listing </span>Website
//       </h1>
//       <p className="text-xl text-black-600 mb-8 max-w-2xl mx-auto">
//         Your One Step Destination for Real Estate Listings
//       </p>
      
//       <div className="space-x-4">
//         {user ? (
//           <Link 
//             to="/profile" 
//             className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
//           >
//             Go to Dashboard
//           </Link>
//         ) : (
//           <>
//             <Link 
//               to="/register" 
//               className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
//             >
//               Get Started
//             </Link>
//             <Link 
//               to="/login" 
//               className="bg-blue-600 text-white border border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
//             >
//               Login
//             </Link>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home; 



import React, { useState } from 'react';
import { Search, Phone, Menu, X, User, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function KalingaHomesLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Category');
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')",
          backgroundColor: '#1a1a2e'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header/Navigation */}
        <header className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="bg-red-600 p-2 rounded">
                <div className="text-white font-bold text-xl md:text-2xl">CH</div>
              </div>
              <div className="ml-3">
                <div className="text-white font-bold text-xl md:text-2xl">City Homes</div>
                <div className="text-white/80 text-xs md:text-sm">Smart Real Estate</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-white">
            <Link to="/" className="hover:text-red-500 transition">Home</Link>
            <Link to="/buy" className="hover:text-red-500 transition">Buy</Link>
            <Link to="/rent" className="hover:text-red-500 transition">Rent</Link>
            <Link to="/sell" className="hover:text-red-500 transition">Sell</Link>
            <Link to="/about" className="hover:text-red-500 transition">About</Link>
            <Link to="/contact" className="hover:text-red-500 transition">Contact</Link>
            
            {/* Auth Section - Same as your old navbar */}
            {user ? (
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-white">
                  <User size={18} />
                  <span className="text-white">Hi, {user.name}</span>
                </div>
                {user.role === 'admin' && (
                  <Link 
                    to="/admin" 
                    className="text-red-300 font-semibold hover:text-red-400 transition"
                  >
                    Admin Panel
                  </Link>
                )}
                <button 
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full transition flex items-center gap-2 text-sm"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/login" 
                  className="text-white hover:text-red-500 transition"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full transition"
                >
                  Register
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-gray-900/95 backdrop-blur-sm px-4 py-6 space-y-4 z-50">
            <Link to="/" className="block text-white hover:text-red-500 py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/buy" className="block text-white hover:text-red-500 py-2" onClick={() => setMobileMenuOpen(false)}>Buy</Link>
            <Link to="/rent" className="block text-white hover:text-red-500 py-2" onClick={() => setMobileMenuOpen(false)}>Rent</Link>
            <Link to="/sell" className="block text-white hover:text-red-500 py-2" onClick={() => setMobileMenuOpen(false)}>Sell</Link>
            <Link to="/about" className="block text-white hover:text-red-500 py-2" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/contact" className="block text-white hover:text-red-500 py-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            
            {/* Auth Section for Mobile - Same as your old navbar */}
            {user ? (
              <>
                <div className="flex items-center space-x-3 py-2 border-t border-white/20 pt-4">
                  <User size={18} className="text-white" />
                  <span className="text-white">Hi, {user.name}</span>
                </div>
                {user.role === 'admin' && (
                  <Link 
                    to="/admin" 
                    className="block text-white hover:text-red-500 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Admin Panel
                  </Link>
                )}
                <button 
                  onClick={handleLogout}
                  className="w-full bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full text-white flex items-center justify-center gap-2"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="block text-white hover:text-red-500 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="block bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full text-white text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        )}

        {/* Hero Section - REST OF YOUR CODE REMAINS EXACTLY THE SAME */}
        <div className="flex flex-col items-center justify-center px-4 pt-20 md:pt-32 pb-16 md:pb-24">
          {/* Main Heading */}
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-6 md:mb-8 max-w-5xl leading-tight">
            Discover Your Dream Home in Bhubaneswar
          </h1>

          {/* Subheading */}
          <p className="text-white/90 text-base md:text-lg lg:text-xl text-center mb-8 md:mb-12 max-w-3xl">
            Verified flats, houses & rentals with trust and transparency from Kalinga Homes
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-4xl bg-white rounded-full shadow-2xl p-2 md:p-3 flex flex-col md:flex-row gap-2 md:gap-0 items-stretch md:items-center mb-8 md:mb-12">
            <div className="flex items-center flex-1 px-4 py-2 md:py-0">
              <Search className="text-gray-400 mr-3" size={20} />
              <input
                type="text"
                placeholder="Search by Location, Property, or Area..."
                className="w-full outline-none text-gray-700 placeholder-gray-400 text-sm md:text-base"
              />
            </div>
            <div className="md:border-l border-gray-300 px-4">
              <select 
                className="outline-none text-gray-700 bg-transparent cursor-pointer w-full md:w-auto py-2 md:py-0"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option>Category</option>
                <option>Apartment</option>
                <option>Independent House</option>
                <option>Villa</option>
                <option>Commercial</option>
                <option>Plot</option>
              </select>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 md:py-2 rounded-full transition font-medium flex items-center justify-center gap-2">
              <Search size={18} />
              Search
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 md:mb-24">
            <Link 
              to={user ? "/buy" : "/register"} 
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-6 md:px-8 py-3 rounded-full transition font-medium text-center"
            >
              Buy a Property
            </Link>
            <Link 
              to={user ? "/rent" : "/register"} 
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-6 md:px-8 py-3 rounded-full transition font-medium text-center"
            >
              Rent a Property
            </Link>
            <Link 
              to={user ? "/list-property" : "/register"} 
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-6 md:px-8 py-3 rounded-full transition font-medium text-center"
            >
              List Your Property
            </Link>
          </div>

          {/* Auth Section - Only shown when user is NOT logged in */}
          {!user && (
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">
                Ready to Find Your Dream Home?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Create an account to save properties, get personalized recommendations, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/register" 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full transition font-medium"
                >
                  Get Started
                </Link>
                <Link 
                  to="/login" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full transition font-medium"
                >
                  Login
                </Link>
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 text-center text-white">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <div className="text-2xl md:text-3xl font-bold mb-2">1000+</div>
              <div className="text-sm md:text-base text-white/80">Happy Clients</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <div className="text-2xl md:text-3xl font-bold mb-2">500+</div>
              <div className="text-sm md:text-base text-white/80">Verified Properties</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <div className="text-2xl md:text-3xl font-bold mb-2">Trusted Since 2024</div>
              <div className="text-sm md:text-base text-white/80">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Contact Button - Fixed on left side */}
        <a 
          href="tel:+919556665449"
          className="fixed left-0 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white px-3 py-8 md:py-5 rounded-r-lg shadow-lg transition flex items-center justify-center z-20 group"
          style={{ writingMode: 'vertical-rl' }}
        >
          <Phone size={20} className="mb-2 rotate-90 group-hover:scale-110 transition-transform" />
          <span className="font-bold text-sm md:text-base">+91 9556665449</span>
        </a>

        {/* WhatsApp Button - Fixed bottom right */}
        <a
          href="https://wa.me/919556665449"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition z-20 group"
        >
          <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}