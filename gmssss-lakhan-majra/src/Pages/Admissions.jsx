import React, { useState } from "react";

const Admissions = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Admission Form Submitted Successfully");
  };

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6 pb-16">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-blue-900">
            Student Admission Form
          </h1>
          <p className="text-gray-600 mt-2">
            Fill all required details carefully
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-10 space-y-10"
        >

          {/* Student Info */}
          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-6">
              Student Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" name="studentName" placeholder="Student Name" onChange={handleChange} required className="input" />
              <input type="text" name="fatherName" placeholder="Father's Name" onChange={handleChange} required className="input" />
              <input type="text" name="motherName" placeholder="Mother's Name" onChange={handleChange} className="input" />
              <input type="date" name="dob" onChange={handleChange} className="input" />
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-6">
              Contact Details
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <input type="tel" name="phone" placeholder="Mobile Number" onChange={handleChange} required className="input" />
              <input type="email" name="email" placeholder="Email Address" onChange={handleChange} className="input" />
              <textarea name="address" placeholder="Full Address" onChange={handleChange} className="input md:col-span-2 h-28" />
            </div>
          </section>

          {/* Academic */}
          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-6">
              Academic Details
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <select name="classApplied" onChange={handleChange} required className="input">
                <option value="">Class Applying For</option>
                {[1,2,3,4,5,6,7,8,9,10,11,12].map(c => (
                  <option key={c} value={c}>Class {c}</option>
                ))}
              </select>

              <input type="text" name="previousSchool" placeholder="Previous School Name" onChange={handleChange} className="input" />
            </div>
          </section>

          {/* Documents */}
          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-6">
              Document Uploads
            </h2>

            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <FileInput label="Student Photo" name="photo" onChange={handleChange} />
              <FileInput label="Birth Certificate" name="birthCert" onChange={handleChange} />
              <FileInput label="Aadhaar Card (Student)" name="aadhaar" onChange={handleChange} />
              <FileInput label="Parent Aadhaar" name="parentAadhaar" onChange={handleChange} />
              <FileInput label="Transfer Certificate (TC)" name="tc" onChange={handleChange} />
              <FileInput label="Character Certificate" name="characterCert" onChange={handleChange} />
              <FileInput label="Caste Certificate (Optional)" name="casteCert" onChange={handleChange} />
              <FileInput label="Previous Marksheet" name="marksheet" onChange={handleChange} />
            </div>
          </section>

          {/* Submit */}
          <div className="text-center">
            <button className="px-10 py-4 bg-blue-900 text-white rounded-xl font-semibold hover:bg-blue-800 transition">
              Submit Admission Form
            </button>
          </div>
        </form>
      </div>

      {/* Input Style */}
      <style>
        {`
          .input {
            width: 100%;
            border: 1px solid #d1d5db;
            padding: 12px 14px;
            border-radius: 10px;
            outline: none;
          }
          .input:focus {
            border-color: #1e3a8a;
          }
        `}
      </style>
    </div>
  );
};

const FileInput = ({ label, name, onChange }) => (
  <div>
    <label className="block mb-1 font-medium text-gray-700">{label}</label>
    <input type="file" name={name} onChange={onChange} className="w-full" />
  </div>
);

export default Admissions;
