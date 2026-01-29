import React, { useState } from "react";

const Admissions = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    classApplied: "",
    phone: "",
    email: "",
    fatherName: "",
    motherName: "",
    gender: "",
    dob: "",
    address: "",
    previousSchool: "",
    status: "Pending",
    date: new Date().toLocaleDateString(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const oldData = JSON.parse(localStorage.getItem("form")) || [];
    localStorage.setItem(
      "form",
      JSON.stringify([...oldData, formData])
    );

    alert("Admission Form Submitted");
    setFormData({
      studentName: "",
      classApplied: "",
      phone: "",
      email: "",
      fatherName: "",
      motherName: "",
      gender: "",
      dob: "",
      address: "",
      previousSchool: "",
      status: "Pending",
      date: new Date().toLocaleDateString(),
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">

        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Student Admission Form
        </h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">

          <input className="input" name="studentName" value={formData.studentName}
            onChange={handleChange} placeholder="Student Name" required />

          <select className="input" name="classApplied" value={formData.classApplied}
            onChange={handleChange} required>
            <option value="">Select Class</option>
            {[1,2,3,4,5,6,7,8,9,10,11,12].map(c => (
              <option key={c} value={c}>Class {c}</option>
            ))}
          </select>

          <input className="input" name="phone" value={formData.phone}
            onChange={handleChange} placeholder="Phone Number" required />

          <input className="input" name="email" value={formData.email}
            onChange={handleChange} placeholder="Email" />

          <input className="input" name="fatherName" value={formData.fatherName}
            onChange={handleChange} placeholder="Father Name" required />

          <input className="input" name="motherName" value={formData.motherName}
            onChange={handleChange} placeholder="Mother Name" />

          <select className="input" name="gender" value={formData.gender}
            onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input className="input" type="date" name="dob"
            value={formData.dob} onChange={handleChange} />

          <textarea className="input md:col-span-2 h-24" name="address"
            value={formData.address} onChange={handleChange}
            placeholder="Address" />

          <input className="input md:col-span-2" name="previousSchool"
            value={formData.previousSchool} onChange={handleChange}
            placeholder="Previous School Name" />

          <button className="md:col-span-2 bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800">
            Submit Form
          </button>

        </form>
      </div>

      <style>
        {`
          .input {
            width: 100%;
            padding: 12px;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            outline: none;
          }
          .input:focus {
            border-color: #1e40af;
          }
        `}
      </style>
    </div>
  );
};

export default Admissions;
