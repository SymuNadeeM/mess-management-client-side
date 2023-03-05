import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MembersList = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm("are you sure?")) {
      axios.delete(`http://localhost:4000/newmember/${id}`);
      window.location.reload();
    }
  };

  useEffect(() => {
    const getdata = async () => {
      await axios
        .get("http://localhost:4000/newmember")
        .then((res) => {
          setData(res.data);
          setloading(false);
        })
        .catch((err) => {
          seterror(err);
          setloading(false);
        });
    };
    getdata();
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }
  if (error != null) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="mt-[30px]   px-[30px] md:p-[10px]">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center my-4 gap-2">
            <i className="fa-solid fa-users text-2xl text-green"></i>
            <h1 className=" text-[#40513B] text-2xl font-abc">
              All Member List
            </h1>
          </div>
          <div className="flex items-center gap-2  text-white font-abc text-sm  bg-green2 px-3 py-2 rounded hover:bg-btnbg  duration-200 ">
            <i class="fa-solid fa-plus"></i>
            <Link to="/add-member">Add New member</Link>
          </div>
        </div>

        <table class="min-w-full border-collapse block md:table">
          <thead class="block md:table-header-group">
            <tr class=" bg-[#faf7f7] font-archivo  text-text2    block md:table-row absolute -top-full md:top-auto -left-full md:left-auto shadow-md text-sm  md:relative ">
              <th class="  p-2 text-left block md:table-cell">User_Id</th>
              <th class=" p-2 text-left block md:table-cell">Name</th>
              <th class=" p-2 text-left block md:table-cell">Age</th>
              <th class=" p-2 text-left block md:table-cell">Email</th>
              <th class=" p-2 text-left block md:table-cell">Password</th>
              <th class=" p-2 text-left block md:table-cell">Address</th>
              <th class=" p-2 text-left block md:table-cell">Action</th>
            </tr>
          </thead>
          <tbody class=" mt-2 block md:table-row-group shadow-md">
            {data?.map((items) => (
              <tr
                class=" bg-white font-archivo border border-spacing-2  border-btnbg md:border-none block md:table-row"
                key={items.id}
              >
                <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                  <span className="inline-block w-1/3 md:hidden  font-bold">
                    Id :
                  </span>
                  <td>{items.id}</td>
                </td>
                <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    Name
                  </span>
                  <td>{items.name}</td>
                </td>
                <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    Age
                  </span>
                  <td>{items.age}</td>
                </td>
                <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    Email Address
                  </span>
                  <td>{items.email}</td>
                </td>
                <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    Password
                  </span>
                  <td className=" text-btnbg">{items.password}</td>
                </td>
                <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    Address
                  </span>
                  <td className=" text-btnbg">{items.address}</td>
                </td>
                <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    Actions
                  </span>
                  <button className=" bg-green2  text-white font-bold py-1 px-2 border border-blue-500 rounded">
                    <Link to={`/edit-member/${items.id}`}>Edite</Link>
                  </button>
                  <button
                    onClick={() => handleDelete(items.id)}
                    class=" bg-btnbg  text-white font-bold py-1 px-2 border border-red-500 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MembersList;
