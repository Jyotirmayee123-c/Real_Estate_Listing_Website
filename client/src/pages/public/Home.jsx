import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
         <span className="text-orange-600">Real Estate Listing </span>Website
      </h1>
      <p className="text-xl text-black-600 mb-8 max-w-2xl mx-auto">
        Your One Step Destination for Real Estate Listings
      </p>
      
      <div className="space-x-4">
        {user ? (
          <Link 
            to="/profile" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Go to Dashboard
          </Link>
        ) : (
          <>
            <Link 
              to="/register" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <Link 
              to="/login" 
              className="bg-blue-600 text-white border border-white-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;