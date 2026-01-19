import React from "react";

const Comment = () => {
  const comments = [
    {
      id: 1,
      name: "Rahul Sharma",
      message: "Bhai website ka UI kaafi acha hai 👍",
      time: "2 hours ago",
      likes: 12,
    },
    {
      id: 2,
      name: "Ankit Verma",
      message: "Backend thoda slow lag raha hai, optimize karo",
      time: "1 hour ago",
      likes: 5,
    },
    {
      id: 3,
      name: "Pooja Singh",
      message: "Login flow smooth hai, good work!",
      time: "30 minutes ago",
      likes: 9,
    },
    {
      id: 4,
      name: "Aman Khan",
      message: "Dark mode add kar do to aur better hoga",
      time: "10 minutes ago",
      likes: 3,
    },
    {
      id: 5,
      name: "Neha Gupta",
      message: "Mobile view bhi responsive hai, nice work",
      time: "8 minutes ago",
      likes: 6,
    },
    {
      id: 6,
      name: "Rohit Yadav",
      message: "Cart feature me quantity update option add karo",
      time: "5 minutes ago",
      likes: 4,
    },
    {
      id: 7,
      name: "Simran Kaur",
      message: "Overall experience smooth hai, impressed",
      time: "3 minutes ago",
      likes: 7,
    },
    {
      id: 8,
      name: "Vikas Meena",
      message: "Checkout page thoda aur clean ho sakta hai",
      time: "Just now",
      likes: 2,
    },
  ];

  return (
    <div className="w-full py-14 bg-white ">
      <h2 className="text-2xl font-semibold text-center mb-8 ">
        User Comments
      </h2>

      <div className="overflow-x-auto hide-scrollbar flex gap-6 px-6 scroll-smooth">
        {comments.map((c) => (
          <div
            key={c.id}
            className="min-w-[320px] bg-white rounded-2xl border
            shadow-md hover:shadow-xl transition-all duration-300
            p-6 flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-600 text-white
              flex items-center justify-center font-semibold">
                {c.name.charAt(0)}
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  {c.name}
                </h3>
                <p className="text-xs text-gray-500">{c.time}</p>
              </div>
            </div>

            {/* Message */}
            <p className="text-gray-700 mt-4 leading-relaxed">
              {c.message}
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t">
              <span className="text-sm text-gray-600">
                ❤️ {c.likes}
              </span>

              <button className="text-sm font-medium text-green-600 hover:text-green-700">
                Reply →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
