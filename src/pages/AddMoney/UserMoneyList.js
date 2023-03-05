import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserMoneyList = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const getdata = async () => {
      await axios
        .get("http://localhost:4000/money")
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
    return <div>Loading... </div>;
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
              All Member Money List
            </h1>
          </div>
          <div className="flex items-center gap-2  text-white font-abc text-sm  bg-green2 px-3 py-2 rounded hover:bg-btnbg  duration-200 ">
            <i class="fa-solid fa-plus"></i>
            <Link to="/add-money">Add member amount</Link>
          </div>
        </div>
        <table class="min-w-full border-collapse block md:table">
          <thead class="block md:table-header-group">
            <tr class=" bg-[#faf7f7] font-archivo  text-text2    block md:table-row absolute -top-full md:top-auto -left-full md:left-auto shadow-md text-sm  md:relative ">
              <th class="  p-2 text-left block md:table-cell">User_Id</th>
              <th class=" p-2 text-left block md:table-cell">Name</th>
              <th class=" p-2 text-left block md:table-cell">Amount</th>
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
                  <span className="inline-block w-1/3 md:hidden  font-bold">
                    UserName :
                  </span>
                  <td>{items?.user.name}</td>
                </td>
                <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                  <span className="inline-block w-1/3 md:hidden  font-bold">
                    Amonut
                  </span>
                  <td>{items.amount} Taka </td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserMoneyList;
