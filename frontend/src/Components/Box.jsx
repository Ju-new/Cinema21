import './Styles.css';

const Box = ({ placeName, openingHours, imageUrl }) => (
    <button className="box-button">
        <img src={imageUrl} alt={placeName} className="box-image" />
        <div className="box-content">
            <div className="box-name">{placeName}</div>
            <div className="box-hours">{openingHours}</div>
        </div>
    </button>
);

export default Box;
