import React from 'react'
import "../../Styles/CrmFunds.css";
import { useNavigate } from "react-router-dom";

function CmrFunds() {
    const navigate =useNavigate();
  return (
   <>
    <section className='crmfund'>
    <h2 className='crmfundhead'>CMRF FUNDS</h2>
        <div className='d-flex justify-content-around'>
         <h2>Total Candidates :- 20</h2>
         <input type='text' placeholder='Search contact by name, village , mandal.....' className='form-control w-50'/>
         <button className='add-btn'>ADD +</button>
        </div>
        <div>

            <table border="1" cellspacing="0" cellpadding="10">

    <thead>
        <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Village</th>
            <th>Action</th>
        </tr>
    </thead>

    <tbody>

        <tr>
            <td>1</td>
            <td>Abburi Pullaya</td>
            <td>25-02-2025</td>
            <td>₹10,00,000/-</td>
            <td>Kalavalla</td>
            <td>
                <button onClick={()=>navigate("/dashboard/cmr-funds-details")}>View</button>
            </td>
        </tr>

        <tr>
            <td>2</td>
            <td>Srinivas</td>
            <td>01-03-2026</td>
            <td>₹58,000/-</td>
            <td>Kandukur</td>
            <td>
               <button onClick={()=>navigate("/dashboard/cmr-funds-details")}>View</button>
            </td>
        </tr>

        <tr>
            <td>3</td>
            <td>Knaparthi Narayanamma</td>
            <td>20-03-2026</td>
            <td>₹28,500/-</td>
            <td>Muthyalapadu</td>
            <td>
                <button onClick={()=>navigate("/dashboard/cmr-funds-details")}>View</button>
            </td>
        </tr>

    </tbody>

</table>
        </div>
    </section>
   </>
  )
}

export default CmrFunds