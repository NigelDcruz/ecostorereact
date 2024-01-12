import React from 'react';

const MainFooter: React.FC = () => {
    return (
        <footer className="bg-gray-200 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h2 className="text-xl font-bold mb-4">About</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Links</h2>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;
