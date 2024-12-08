import { useNavigate, useLocation } from 'react-router-dom'; // React Router hooks

const ErrorPage = () => {
  const navigate = useNavigate();
  const location = useLocation(); // To get the current path

  const handleBackToHome = () => {
    navigate('/'); // Navigate back to the homepage
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-gray-800 p-4">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4 text-white text-center">
        The path <span className="font-mono text-blue-600">"{location.pathname}"</span> does not exist.
      </p>
      <button
        onClick={handleBackToHome}
        className="mt-6 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow hover:bg-orange-800 transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
