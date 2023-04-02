import { Link } from 'react-router-dom';

export const Error404 = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mt-8">404 - Page not found</h1>
        <p className="text-xl text-gray-600 mt-4">Sorry, the page you are looking for could not be found.</p>
        <Link to="/" className="text-blue-500 hover:underline mt-4">Go back to the homepage</Link>
      </div>
    </div>
  );
}
