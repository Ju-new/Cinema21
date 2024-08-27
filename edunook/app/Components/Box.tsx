import React from 'react';
import './Styles.css';

// Define the interface for the component's props
interface BoxProps {
    placeName: string;
    openingHours: string;
    imageUrl: string;
}

// Use the interface in the component's props
const Box: React.FC<BoxProps> = ({ placeName, openingHours, imageUrl }) => (
    <button className="box-button">
        <img src={imageUrl} alt={placeName} className="box-image" />
        <div className="box-content">
            <div className="box-name">{placeName}</div>
            <div className="box-hours">{openingHours}</div>
        </div>
    </button>
);

export default Box;
