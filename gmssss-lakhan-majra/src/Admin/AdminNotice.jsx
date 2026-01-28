import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { NoticeContext } from "../context/NoticeContext";

const AdminNotice = () => {
  
    const {handleSave , handleDelete , notices , obj , setObj} = useContext(NoticeContext)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setObj({ ...obj, [name]: type === "checkbox" ? checked : value })
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 ">

                {/* LEFT : FORM */}
                <div className="lg:col-span-1 sticky top-8 h-fit pt-16">
                    <div className="bg-white rounded-2xl shadow-lg border p-6">
                        <h2 className="text-2xl font-bold text-slate-800 mb-1">
                            Manage Notice
                        </h2>
                        <p className="text-sm text-gray-500 mb-6">
                            Create school announcements
                        </p>

                        <div className="flex flex-col gap-4">
                            <input
                                type="text"
                                name="title"
                                value={obj.title}
                                placeholder="Notice Title"
                                onChange={handleChange}
                                className="h-11 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />

                            <input
                                type="date"
                                name="date"
                                value={obj.date}
                                onChange={handleChange}
                                className="h-11 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />

                            <select
                                name="category"
                                value={obj.category}
                                onChange={handleChange}
                                className="h-11 px-4 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                            >
                                <option value="">Select Category</option>
                                <option>Admission</option>
                                <option>Holiday</option>
                                <option>Exam</option>
                                <option>Event</option>
                                <option>General</option>
                            </select>

                            <label className="flex items-center gap-3 text-sm text-gray-700">
                                <input
                                    type="checkbox"
                                    name="check"
                                    checked={obj.check}
                                    onChange={handleChange}
                                    className="accent-blue-600"
                                />
                                Mark as New
                            </label>

                            <button
                                onClick={handleSave}
                                className="mt-4 h-11 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            >
                                Save Notice
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT : NOTICE LIST */}
                <div className="lg:col-span-2 pt-16 ">
                    <h2 className="text-xl font-bold text-slate-800 mb-4 text-center " >
                        All Notices
                    </h2>

                    {notices.length === 0 ? (
                        <div className="bg-white rounded-xl border p-10 text-center text-gray-500">
                            📭 No notices added yet
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 gap-6  ">
                            {notices.map((notice, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow hover:shadow-lg transition border "
                                >
                                    <div className="p-5">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-lg font-semibold text-slate-800">
                                                {notice.title}
                                            </h3>
                                            {notice.check && (
                                                <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">
                                                    NEW
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-sm text-gray-500 mt-2">
                                            📅 {notice.date}
                                        </p>

                                        <div className="mt-4 flex justify-between items-center">
                                            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                                                {notice.category}
                                            </span>

                                            <button className="text-sm text-blue-600 hover:underline space-x-3 flex">
                                                <CiEdit size={20} />
                                                <MdDeleteOutline size={20} onClick={() => handleDelete(index)} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default AdminNotice;