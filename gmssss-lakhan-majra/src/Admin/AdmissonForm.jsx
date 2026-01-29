import React, { useEffect, useState } from "react";

const AdmissionTable = () => {
    const [formData , setFormData]= useState([])


    useEffect(()=>{
        const StoreForm = JSON.parse(localStorage.getItem("form")) || []
        setFormData(StoreForm)
    },[])


//   const demoData = [
//     {
//       id: 1,
//       name: "Rahul Kumar",
//       class: "10th",
//       phone: "9876543210",
//       email: "rahul@gmail.com",
//       fatherName: "Suresh Kumar",
//       motherName: "Sunita Kumar",
//       gender: "Male",
//       dob: "2008-05-12",
//       address: "Delhi, India",
//       previousSchool: "ABC Public School",
//       status: "Pending",
//       createdAt: "2026-01-20",
//     },
//     {
//       id: 2,
//       name: "Anjali Sharma",
//       class: "8th",
//       phone: "9123456780",
//       email: "anjali@gmail.com",
//       fatherName: "Rakesh Sharma",
//       motherName: "Neha Sharma",
//       gender: "Female",
//       dob: "2010-09-18",
//       address: "Jaipur, Rajasthan",
//       previousSchool: "Bright Future School",
//       status: "Approved",
//       createdAt: "2026-01-18",
//     },
//   ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-full bg-white rounded-lg shadow p-4 overflow-x-auto">

        <h2 className="text-2xl font-semibold mb-4">
          Admission Details
        </h2>

        <table className="w-full border text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">#</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Class</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Father</th>
              <th className="border p-2">Mother</th>
              <th className="border p-2">Gender</th>
              <th className="border p-2">DOB</th>
              <th className="border p-2">Address</th>
              <th className="border p-2">Previous School</th>
              <th className="border p-2">Date</th>
            </tr>
          </thead>

          <tbody>
            {formData.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{item.studentName}</td>
                <td className="border p-2">{item.classApplied}</td>
                <td className="border p-2">{item.phone}</td>
                <td className="border p-2">{item.email}</td>
                <td className="border p-2">{item.fatherName}</td>
                <td className="border p-2">{item.motherName}</td>
                <td className="border p-2">{item.gender}</td>
                <td className="border p-2">{item.dob}</td>
                <td className="border p-2">{item.address}</td>
                <td className="border p-2">{item.previousSchool}</td>
                <td className="border p-2">{Date.now()}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default AdmissionTable;
