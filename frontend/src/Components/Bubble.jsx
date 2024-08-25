import '../App.css';
import './Styles.css';

const Bubble = ({ placeholderText }) => (
    <div className="bubble">
        <button>{placeholderText}</button> {/* Replaced the input with a paragraph element */}
    </div>
);


export default Bubble;
