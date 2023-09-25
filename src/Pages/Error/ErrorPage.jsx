import {Link} from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
                <h3 className="text-5xl font-bold text-red-500 py-2">404 Not Found</h3>
                <p className="text-xl font-medium text-gray-700 py-2">Look Like you are lost</p>
                <Link to='/' className="bg-red-500 text-white rounded-md text-center py-2 px-3">Go Back To Home</Link>
        </div>
    );
};

export default ErrorPage;