import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Используем переменную окружения для определения URL сервера
            const serverUrl = `${process.env.REACT_APP_SERVER_URL_SEND}/api/send-email`;
            await axios.post(serverUrl, { name, email, message });
            setLoading(false);
            setSnackbarMessage('Message sent successfully');
            setSnackbarOpen(true);
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
            setLoading(false);
            setSnackbarMessage('Error sending message');
            setSnackbarOpen(true);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">Message</label>
                    <textarea
                        id="message"
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    {loading ? 'Sending...' : 'Send'}
                </button>
            </form>
            {snackbarOpen && (
                <div className={`mt-4 p-2 text-white text-center rounded-md ${snackbarOpen ? 'bg-green-500' : 'bg-red-500'}`}>
                    {snackbarMessage}
                    <button onClick={handleCloseSnackbar} className="text-lg ml-4">&times;</button>
                </div>
            )}
        </div>
    );
};

export default ContactForm;


// import React, { useState } from 'react';
// import axios from 'axios';

// const ContactForm = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [snackbarOpen, setSnackbarOpen] = useState(false);
//     const [snackbarMessage, setSnackbarMessage] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             await axios.post('http://localhost:3001/api/send-email', { name, email, message });
//             setLoading(false);
//             setSnackbarMessage('Message sent successfully');
//             setSnackbarOpen(true);
//             setName('');
//             setEmail('');
//             setMessage('');
//         } catch (error) {
//             console.error('Error sending message:', error);
//             setLoading(false);
//             setSnackbarMessage('Error sending message');
//             setSnackbarOpen(true);
//         }
//     };

//     // const handleCloseSnackbar = () => {
//     //     setSnackbarOpen(false);
//     // };

//     return (
//         <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                     <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Name</label>
//                     <input
//                         type="text"
//                         id="name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">Message</label>
//                     <textarea
//                         id="message"
//                         rows="4"
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}
//                         required
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                     ></textarea>
//                 </div>
//                 <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//                 >
//                     {loading ? 'Sending...' : 'Send'}
//                 </button>
//             </form>
//             <div className={`mt-4 p-2 bg-${snackbarOpen ? 'green' : 'red'}-500 text-white text-center rounded-md ${snackbarOpen ? 'block' : 'hidden'}`}>
//                 {snackbarMessage}
//             </div>
//         </div>
//     );
// };

// export default ContactForm;

