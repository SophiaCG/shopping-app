function DeliveryNotes() {
  return (
    <div className="delivery-notes">
      <div className="delivery-notes-row">
        <div className="delivery-image-text">
          <i class="fa-solid fa-truck"></i>
          <div className="delivery-notes-text">
            <h5>Free Delivery</h5>
            <h5>Enter your Postal code for Delivery Availability</h5>
          </div>
        </div>
      </div>
      <div className="delivery-notes-row">
        <div className="delivery-image-text">
          <i class="fa-solid fa-box"></i>
          <div className="delivery-notes-text">
            <h5>Return Delivery</h5>
            <h5>Free 30days Delivery Returns. Details</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryNotes;
