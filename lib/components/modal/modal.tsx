// // import React, { useState } from 'react';

// // const Modal: React.FC = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [name, setName] = useState('');
// //   const [description, setDescription] = useState('');

// //   const openModal = () => setIsOpen(true);
// //   const closeModal = () => setIsOpen(false);

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     // Here you can handle form submission, e.g., send data to the server
// //     console.log('Name:', name);
// //     console.log('Description:', description);
// //     // Close the modal after handling form submission
// //     closeModal();
// //   };

// //   return (
// //     <>
// //       {/* Modal toggle */}
// //       <button
// //         onClick={openModal}
// //         className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
// //         type="button"
// //       >
// //         + Conversation
// //       </button>

// //       {/* Main modal */}
// //       {isOpen && (
// //         <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
// //           <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6">
// //             <div className="absolute top-0 right-0 p-2">
// //               <button
// //                 onClick={closeModal}
// //                 className="text-gray-400 hover:text-gray-800 focus:outline-none"
// //                 aria-label="Close modal"
// //               >
// //                 <svg
// //                   className="w-6 h-6"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   viewBox="0 0 24 24"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth="2"
// //                     d="M6 18L18 6M6 6l12 12"
// //                   />
// //                 </svg>
// //               </button>
// //             </div>
// //             <h3 className="text-lg font-semibold text-gray-900">Create New Conversation</h3>
// //             <form onSubmit={handleSubmit}>
// //               <div className="mt-4">
// //                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">
// //                   Name
// //                 </label>
// //                 <input
// //                   id="name"
// //                   type="text"
// //                   value={name}
// //                   onChange={(e) => setName(e.target.value)}
// //                   className="mt-1 p-2 w-full border border-gray-300 rounded-md"
// //                   required
// //                 />
// //               </div>
// //               <div className="mt-4">
// //                 <label htmlFor="description" className="block text-sm font-medium text-gray-700">
// //                   Description
// //                 </label>
// //                 <textarea
// //                   id="description"
// //                   value={description}
// //                   onChange={(e) => setDescription(e.target.value)}
// //                   rows={3}
// //                   className="mt-1 p-2 w-full border border-gray-300 rounded-md"
// //                   required
// //                 />
// //               </div>
// //               <div className="mt-6">
// //                 <button
// //                   type="submit"
// //                   className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// //                 >
// //                   Add new conversation
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default Modal;
import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  addConversation: (name: string, description: string) => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  addConversation,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addConversation(name, description);
    setName("");
    setDescription("");
    closeModal(); // Close the modal after adding conversation
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <div className="absolute top-0 right-0 p-2">
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-800 focus:outline-none"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Create New Conversation
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add new conversation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

// Modal.tsx

// import React, { useState } from 'react';

// interface ModalProps {
//   addConversation: (name: string, description: string) => void;
// }

// const Modal: React.FC<ModalProps> = ({ addConversation }) => {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     addConversation(name, description);
//     setName('');
//     setDescription('');
//   };

//   return (
//     <>
//       <button onClick={handleSubmit}>+ Conversation</button>
//       {/* The rest of your modal code */}
//     </>
//   );
// };

// export default Modal;
