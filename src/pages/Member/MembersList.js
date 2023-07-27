// import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import useAsync from "../../hook/useAsync";
import useMember from "../../hook/useMember";
import MemberServices from "../../services/MemberServices";

const MembersList = () => {
  const { data, error, loading } = useAsync(MemberServices.getAllMember);
  const { handleDelete } = useMember();

  return (
    <>
      <div className="mt-[30px]   px-[30px] my-[30px] mx-[20px] md:p-[10px]">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center my-4 gap-2">
            <i className="fa-solid fa-users text-2xl text-green dark:text-white"></i>
            <h1 className=" text-[#40513B] dark:text-dark_blue1 text-2xl font-abc">
              All Member List
            </h1>
          </div>
          <div className="flex items-center gap-2  text-white  font-abc text-sm  bg-green2 px-3 py-2 rounded hover:bg-btnbg  duration-200 ">
            <i className="fa-solid fa-plus"></i>
            <Link to="/add-member">Add New member</Link>
          </div>
        </div>

        <table className="min-w-full border-collapse block  md:table">
          <thead className="block md:table-header-group">
            <tr className=" bg-[#faf7f7] dark:bg-darkHead font-archivo  text-text2 dark:text-white    block md:table-row absolute -top-full md:top-auto -left-full md:left-auto shadow-md text-sm  md:relative ">
              <th className=" p-2 text-left block md:table-cell">Name</th>
              <th className=" p-2 text-left block md:table-cell">Email</th>

              <th className=" p-2 text-left block md:table-cell">Phone</th>
              <th className=" p-2 text-left block md:table-cell">
                Permanent Address
              </th>
              <th className=" p-2 text-left block md:table-cell">
                Blood group
              </th>
              <th className=" p-2 text-left block md:table-cell">Action</th>
            </tr>
          </thead>
          <tbody className=" mt-2 block md:table-row-group shadow-md">
            {loading
              ? "Loading.."
              : data?.data?.map((items) => (
                  <tr
                    className=" bg-white dark:bg-darkHover dark:text-white  font-archivo border border-spacing-2  border-btnbg md:border-none block md:table-row"
                    key={items._id}
                  >
                    <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                      <span className="inline-block w-1/3  dark:text-dark_blue2 md:hidden font-bold">
                        Name
                      </span>
                      <td>{items.name}</td>
                    </td>
                    <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                      <span className="inline-block w-1/3 dark:text-dark_blue2 md:hidden font-bold">
                        Email Address
                      </span>
                      <td>{items.email}</td>
                    </td>

                    <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                      <span className="inline-block w-1/3 dark:text-dark_blue2 md:hidden font-bold">
                        Phone
                      </span>
                      <td className=" text-btnbg dark:text-white">
                        0{items.phone}
                      </td>
                    </td>
                    <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                      <span className="inline-block w-1/3 dark:text-dark_blue2 md:hidden font-bold">
                        permanent address
                      </span>
                      <td className=" text-btnbg dark:text-white">
                        {items.permanentaddress}
                      </td>
                    </td>
                    <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                      <span className="inline-block w-1/3 dark:text-dark_blue2 md:hidden font-bold">
                        Blood group
                      </span>
                      <td className=" text-btnbg dark:text-white">
                        {items.bloodgroup}
                      </td>
                    </td>
                    <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                      <span className="inline-block w-1/3 dark:text-dark_blue2 md:hidden font-bold">
                        Actions
                      </span>
                      <button className=" bg-green2  text-white font-bold py-1 px-2 border border-blue-500 rounded">
                        <Link to={`/edit-member/${items._id}`}>Edite</Link>
                      </button>
                      <button
                        onClick={() => handleDelete(items._id)}
                        className="ml-2 bg-btnbg  text-white font-bold py-1 px-2 border border-red-500 rounded"
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
