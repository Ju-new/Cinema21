'use client';
import React, { useState } from 'react';

interface IMGProps {
    imageUrl: string;
    placeName: string;
}

const IMG: React.FC<IMGProps> = ({ placeName, imageUrl }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <button
                onClick={openModal}
                className="flex flex-col p-2 border-none overflow-hidden cursor-pointer items-center transition-transform duration-300 ease-in-out transform hover:scale-101 rounded-2xl"
            >
                <img
                    src={imageUrl}
                    alt={placeName}
                    className="w-full h-52 object-cover rounded-2xl shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
                <div className="p-4 flex flex-col items-center">
                    {/* Content here */}
                </div>
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 scale-150" onClick={closeModal}>
                    <div className="relative bg-white p-4 rounded-lg" onClick={(e) => e.stopPropagation()}>
                        <img src={imageUrl} alt={placeName} className="w-full max-w-3xl h-auto object-cover rounded-lg shadow-lg" />
                        <button
                            className="absolute top-2 right-2 text-white text-2xl bg-red-500 rounded-full p-1"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default IMG;
