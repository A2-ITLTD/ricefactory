import React, { useState } from "react";
import axios from "axios";

const RiceForm = () => {
  const [formData, setFormData] = useState({
    tradingName: "",
    address: "",
    contactName: "",
    phone: "",
    mobile: "",
    fax: "",
    email: "",
    town: "",
    state: "",
    postcode: "",
    bsb: "",
    accountNumber: "",
    accountName: "",
    bankName: "",
    branchName: "",
    abn: "",
    gstRegistered: "",
    gstType: "",
    paygWithholding: "",
    taxExempt: "",
    farmNumber: "",
    regionDistrict: "",
    propertyName: "",
    date: "",
    sugarType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with your API endpoint or WhatsApp API integration
    const whatsappNumber = "+8801846937397";
    const message = `New sugar delivery registration:\n${JSON.stringify(formData, null, 2)}`;
    try {
      await axios.post(`https://api.whatsapp.com/send?phone=${whatsappNumber}`, { message });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="bg-orange-400 py-12">
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Sugar Delivery Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-semibold">Trading Name</label>
            <input
              type="text"
              name="tradingName"
              value={formData.tradingName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Contact Name</label>
            <input
              type="text"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Mobile</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Fax</label>
            <input
              type="text"
              name="fax"
              value={formData.fax}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Town</label>
            <input
              type="text"
              name="town"
              value={formData.town}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Postcode</label>
            <input
              type="text"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Bank Details</label>
            <input
              type="text"
              name="bsb"
              placeholder="BSB -"
              value={formData.bsb}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="accountNumber"
              placeholder="Account Number"
              value={formData.accountNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-2"
              required
            />
            <input
              type="text"
              name="accountName"
              placeholder="Account Name"
              value={formData.accountName}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-2"
              required
            />
            <input
              type="text"
              name="bankName"
              placeholder="Bank Name"
              value={formData.bankName}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-2"
              required
            />
            <input
              type="text"
              name="branchName"
              placeholder="Branch Name"
              value={formData.branchName}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-2"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Tax Details</label>
            <input
              type="text"
              name="abn"
              placeholder="ABN"
              value={formData.abn}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <label className="block mt-4">
              Are you GST registered?
              <select
                name="gstRegistered"
                value={formData.gstRegistered}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-2"
                required
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>
            <label className="block mt-4">
              GST Type
              <select
                name="gstType"
                value={formData.gstType}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-2"
              >
                <option value="">Select</option>
                <option value="Cash">Cash</option>
                <option value="Accrual">Accrual</option>
              </select>
            </label>
            <label className="block mt-4">
              PAYG Withholding
              <select
                name="paygWithholding"
                value={formData.paygWithholding}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-2"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>
            <label className="block mt-4">
              Tax Exempt
              <select
                name="taxExempt"
                value={formData.taxExempt}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-2"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>
          </div>
          <div>
            <label className="block mb-2 font-semibold">Farm(s) Details</label>
            <input
              type="text"
              name="farmNumber"
              placeholder="Farm Number"
              value={formData.farmNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="regionDistrict"
              placeholder="Region / District"
              value={formData.regionDistrict}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-2"
              required
            />
            
                <input
                type="text"
                name="regionDistrict"
                placeholder="Region / District"
                value={formData.regionDistrict}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-2"
                required
                />
                <input
                type="text"
                name="propertyName"
                placeholder="Property Name"
                value={formData.propertyName}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-2"
                required
                />
                <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-2"
                required
                />
            </div>
    
            <div className="md:col-span-2">
                <label className="block mb-2 font-semibold">Sugar Type</label>
                <select
                name="sugarType"
                value={formData.sugarType}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
                >
                <option value="">Select Rice Type</option>
                <option value="Basmati Rice">
                Basmati Rice
                </option>
                <option value="Jasmine Rice">
                Jasmine Rice
                </option>
                <option value="100% Broken Rice)">
                100% Broken Rice
                </option>
                <option value="Brown Rice">
                Brown Rice
                </option>
                <option value="Long Grain Rice">
                Long Grain Rice
                </option>
                <option value="Short Grain Rices">Short Grain Rices</option>
                </select>
            </div>
            </div>
    
            <button
            type="submit"
            className="mt-6 w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
            >
            Submit
            </button>
        </form>
        </div>
        </div>
    );
    };
          
export default RiceForm;
          