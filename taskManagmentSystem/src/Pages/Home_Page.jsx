import React, { useState } from 'react'
import Input_felds from '../Components/Input_felds'
import ButtonFields from '../Components/ButtonFields'

const Home_Page = () => {

    const [obj, setObj] = useState({
        title: "",
        description: "",
        priority: "",
        status: "",
        dueDate: "",
        createdAt: Date.now()
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setObj((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAdd = () => {
        console.log(obj);
    };

    return (
        <div className="h-screen w-full bg-gray-300 flex items-center justify-center">
            <div className='bg-white w-[90%] sm:w-[30%] h-[70%] flex flex-col justify-center items-center rounded-md space-y-4'>
                <h1 className='text-xl   sm:text-2xl font-extrabold'>Add Detail</h1>

                <Input_felds name="title" value={obj.title} onChange={handleChange} placeholder="Title" autoComplete="off" />
                <Input_felds name="description" value={obj.description} onChange={handleChange} placeholder="Description" autoComplete="off" />
                <Input_felds name="priority" value={obj.priority} onChange={handleChange} placeholder="priority" autoComplete="off" />
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
                {/* <Input_felds name="status" value={obj.status} onChange={handleChange} placeholder="status" autoComplete="off" /> */}
                <Input_felds name="dueDate" value={obj.dueDate} onChange={handleChange} placeholder="dueDate" autoComplete="off" />

                <ButtonFields label="Add Product" onClick={handleAdd} />
            </div>
        </div>
    );
};

export default Home_Page;
