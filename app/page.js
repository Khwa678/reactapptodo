/*"use client"

import React, { useState } from 'react'


const page = () => {

  const [title,settitle]=useState("")

  const[desc,setdesc]=useState("")

  const [mainTask,setMainTask]=useState([])


  const submitHandler=(e)=>{
e.preventDefault()

setMainTask([...mainTask,{title,desc}]);




    //console.log("kiara")

  //  console.log(title)
   // console.log(desc)
    settitle("");

    setdesc("");
    console.log(mainTask)



  }
  let renderTask=<h2>No Task Available </h2>;
  if(mainTask.length>0){


  
mainTask.map((t,i)=>{


  return(<li> <div className='flex justify-between mb-5'>

    <h5 className='text-2xl font-semibold'>

      {t.title}
    </h5>
    <h6 className='text-2xl font-semibold'>

      {t.desc}
    </h6>
  </div>
  </li>
  );
});

  }
  return (
    <div><h1 className='bg-black text-white p-5 text-2xl font-semibold text-center' >

      Khwahish's TodoList. </h1>

      <form onSubmit={submitHandler }>

        <input type="text"className='text-2xl border-zinc-600 border-4 m-5 px-4 py-3 flex'placeholder='enter your Title here '
        value={title}  onChange={ (e)=>{
          settitle(e.target.value)

        }}
        >
        
        
        </input>
        
        <input type="text"className='text-2xl border-zinc-600 border-4 m-5 px-4 py-3'placeholder='enter your task here '
        
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)
        }}
        >
        
        
        </input>

        <button
        className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-8'>Add Task</button>
      </form>

      <hr></hr>

      <div className="p-8 bg-slate-400">
<ul>

  {renderTask}


</ul>

      </div>
      </div>
  )
}

export default page;

*/

"use client";

import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    // Prevent empty task submission
    if (!title || !desc) {
      alert("Please enter both title and description!");
      return;
    }

    // Add new task to the list
    setMainTask([...mainTask, { title, desc }]);

    // Reset form fields
    setTitle("");
    setDesc("");
  };

  const deleteHandler=(i)=>{

    let copytask=[...mainTask]

    copytask.splice(i,1)
    setMainTask(copytask)



  }
  const renderTask =
    mainTask.length > 0 ? (
      mainTask.map((t, i) => (
        <li  key={i} className="mb-5 flex items-center justify-between mb-8 ">
          <div className="flex bg-white p-4 rounded shadow-md w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-2xl font-semibold text-gray-600 justify-between items-center ml-7">{t.desc}</h6>
          </div>

          <button
          onClick={()=>{

            deleteHandler(i)
          }}
           className="bg-red-600 text-White rounded font-bold w-67px">Delete </button>
        </li>
      ))
    ) : (
      <h2 className="text-center text-xl font-semibold text-gray-700">
        No Task Available
      </h2>
    );

  return (
    <div>
      <h1 className="bg-black text-white p-5 text-2xl font-semibold text-center">
        Khwahish's TodoList
      </h1>

      <form onSubmit={submitHandler} className="flex flex-col items-center">
        <input
          type="text"
          className="text-2xl border-zinc-600 border-4 m-5 px-4 py-3 w-96"
          placeholder="Enter your Title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          className="text-2xl border-zinc-600 border-4 m-5 px-4 py-3 w-96"
          placeholder="Enter your Task here"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 text-2xl font-bold rounded m-8"
        >
          Add Task
        </button>
      </form>

      <hr className="my-6 border-gray-300" />

      <div className="p-8 bg-slate-400 rounded shadow-md">
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
};

export default Page;
