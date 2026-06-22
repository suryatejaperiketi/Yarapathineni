import React from "react";
import "../../Styles/CmrffundsDetails.css";

function CmrffundsDetails() {
  return (
    <div className="cmrf-container">

      <h3 className="cmrffdet">View Member Details</h3>

      <div className="form-cmrf">

        <form>

          <div className="input-group-cmr">
            <label>Name *</label>
            <input type="text" placeholder="Abburi Pullaya" />
          </div>

          <div className="input-group-cmr">
            <label>Relation *</label>
            <input type="text" placeholder="S/O Abburi Venkata Rao" />
          </div>

          <div className="input-group-cmr">
            <label>Amount *</label>
            <input type="text" placeholder="₹10,00,000/-" />
          </div>

          <div className="input-group-cmr">
            <label>Issue Date *</label>
            <input type="text" placeholder="24-02-2025" />
          </div>

          <div className="input-group-cmr">
            <label>Mandal *</label>
            <input type="text" placeholder="Kandukur" />
          </div>

          <div className="input-group-cmr">
            <label>Village *</label>
            <input type="text" placeholder="Kalavalla" />
          </div>

            <div className="input-group-cmr">
            <label>Video Bite *</label>
            <input type="file"  />
          </div>

        </form>

        <button className="update-btn">
          Update
        </button>

      </div>

    </div>
  );
}

export default CmrffundsDetails;