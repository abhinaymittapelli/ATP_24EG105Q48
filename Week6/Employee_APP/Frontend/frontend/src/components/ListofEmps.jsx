import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API=import.meta.env.VITE_API_URL
function ListofEmps() {

  const [emps,setEmps]=useState([]);
  const navigate=useNavigate();

  const gotoEmployee=(empObj)=>{
    //navigate to employee along with selected employee object
    navigate("/employee",{state:empObj});
  }

  const gotoEditEmployee=(empobj)=>{
    //navigate to employee along with selected employee object
    navigate("/edit-emp",{state:empobj});
  }

  //delete employee
  const deleteEmpById=async (id)=>{
    let res=await axios.delete(`${API}/employee-api/employee/${id}`)
    if(res.status==200){
      //get employees
      getEmps();
    }
  }

  //get all employees
  async function getEmps() {
      let res=await axios.get(`${API}/employee-api/employee`);
      if(res.status==200){
        let resObj=await res.data;
        setEmps(resObj.payload);
      }
    }

  //get all employees on component loading
  useEffect(()=>{
    getEmps();
  },[])

  return (
    <div>
      <h2 className="text-4xl text-center">List Of Employees</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-8">
        {
            emps.map((empObj)=>(
                <div key={empObj._id} className="bg-white p-5 rounded-2xl text-2xl text-center">
                    <p className="mt-2">{empObj.email}</p>
                    <p className="mb-5">{empObj.name}</p>

                    {/* 3 buttons */}
                    
                      <div className="flex gap-4 mt-4">

  {/* View Button */}
  <button
    onClick={() => gotoEmployee(empObj)}
    className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded-xl shadow-md font-semibold transition duration-300 hover:scale-105"
  >
    View
  </button>


  {/* Edit Button */}
  <button
    onClick={() => gotoEditEmployee(empObj)}
    className="bg-amber-500 hover:bg-amber-700 text-white px-5 py-2 rounded-xl shadow-md font-semibold transition duration-300 hover:scale-105"
  >
    Edit
  </button>


  {/* Delete Button */}
  <button
    onClick={() => deleteEmpById(empObj._id)}
    className="bg-red-500 hover:bg-red-700 text-white px-5 py-2 rounded-xl shadow-md font-semibold transition duration-300 hover:scale-105"
  >
    Delete
  </button>

</div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default ListofEmps
