import React, { useEffect, useState } from "react";
import Input_felds from "../Components/Input_felds";
import ButtonFields from "../Components/ButtonFields";
import { useNavigate } from "react-router-dom";

const Home_Page = () => {
  const [obj, setObj] = useState({
    title: "",
    description: "",
    priority: "",
    status: "",
    dueDate: "",
  });

  const [index, setIndex] = useState(null);
  const navigate = useNavigate()
  // 👉 Load edit data once
  useEffect(() => {
    const editTask = JSON.parse(localStorage.getItem("editTask"));
    const editIndex = JSON.parse(localStorage.getItem("editIndex"));

    if (editTask !== null && editIndex !== null) {
      setObj(editTask);
      setIndex(editIndex);
    }
  }, []);

  // 👉 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setObj((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 👉 Add / Update task
  const handleAdd = (e) => {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem("Task")) || [];

    if (index !== null) {
      // UPDATE
      data[index] = obj;
      localStorage.removeItem("editTask");
      localStorage.removeItem("editIndex");
      setIndex(null);
    } else {
      // ADD
      data.push({
        ...obj,
        createdAt: Date.now(),
      });
    }

    localStorage.setItem("Task", JSON.stringify(data));

    // Reset form
    setObj({
      title: "",
      description: "",
      priority: "",
      status: "",
      dueDate: "",
    });
    navigate("/task")
  };

  return (
    <div className="h-screen w-full bg-gray-300 flex items-center justify-center">
      <div className="bg-white w-[90%] sm:w-[30%] h-[70%] flex flex-col justify-center items-center rounded-md space-y-4">
        <h1 className="text-xl sm:text-2xl font-extrabold">
          {index !== null ? "Edit Task" : "Add Task"}
        </h1>

        <Input_felds
          name="title"
          value={obj.title}
          onChange={handleChange}
          placeholder="Title"
          autoComplete="off"
        />

        <Input_felds
          name="description"
          value={obj.description}
          onChange={handleChange}
          placeholder="Description"
          autoComplete="off"
        />

        <Input_felds
          name="priority"
          value={obj.priority}
          onChange={handleChange}
          placeholder="Priority"
          autoComplete="off"
        />

        <select
          name="status"
          value={obj.status}
          onChange={handleChange}
          className="w-[70%] border p-2 rounded"
        >
          <option value="">Select Status</option>
          <option value="pending">Pending</option>
          <option value="complete">Complete</option>
        </select>

        <Input_felds
          name="dueDate"
          value={obj.dueDate}
          onChange={handleChange}
          placeholder="Due Date"
          autoComplete="off"
        />

        <ButtonFields
          label={index !== null ? "Update Task" : "Add Task"}
          onClick={handleAdd}
        />
      </div>
    </div>
  );
};

export default Home_Page;
