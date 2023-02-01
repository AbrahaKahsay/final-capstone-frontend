import '../styles/pending-popup.css';

const PendingPopup = () => (
  <div id="pending-popup">
    <div id="pending-popup__content">
      <div id="load">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
      <p>this may take a few seconds</p>
    </div>
  </div>
);
export default PendingPopup;
