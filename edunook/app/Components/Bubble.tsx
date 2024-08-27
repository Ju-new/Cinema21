import React from 'react';
import './Styles.css';

// Define the interface for the component's props
interface BubbleProps {
    placeholderText: string;
}

// Use the interface in the component's props
const Bubble: React.FC<BubbleProps> = ({ placeholderText }) => (
    <div className="bubble">
        <button>{placeholderText}</button> {/* Replaced the input with a paragraph element */}
    </div>
);

export default Bubble;
