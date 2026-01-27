import React, { useState } from "react";

const Notice_Page = () => {
  const [search, setSearch] = useState("");

  const notices = [
    {
      id: 1,
      title: "Holiday on Independence Day",
      date: "15 Aug 2026",
      category: "Holiday",
      isNew: true,
    },
    {
      id: 2,
      title: "Class 10 Exam Date Sheet",
      date: "20 Aug 2026",
      category: "Exam",
      isNew: false,
    },
    {
      id: 3,
      title: "Admission Open for Session 2026",
      date: "01 Sep 2026",
      category: "Admission",
      isNew: true,
    },
  ];

  const filteredNotices = notices.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-16 min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-blue-900">
          School Notices
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Latest updates & official announcements
        </p>

        {/* Search */}
        <div className="mt-8 flex justify-center">
          <input
            type="text"
            placeholder="Search notice..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-md border shadow-sm"
          />
        </div>

        {/* Notice List */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {filteredNotices.length === 0 ? (
            <p className="text-center col-span-2 text-gray-500">
              No notices found
            </p>
          ) : (
            filteredNotices.map((notice) => (
              <div
                key={notice.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-blue-800">
                      {notice.title}
                    </h2>
                    {notice.isNew && (
                      <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">
                        NEW
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-500 mt-2">
                    📅 {notice.date}
                  </p>

                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded">
                      {notice.category}
                    </span>

                    <button className="text-sm text-white bg-blue-700 px-4 py-2 rounded hover:bg-blue-800">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default Notice_Page;
