import React from "react";
import { Link } from "react-router-dom";
import useAsync from "../../hook/useAsync";
import useOtherCost from "../../hook/useOtherCost";
import OthersCostServices from "../../services/OthersCostServices";

const OtherCostList = () => {
  const { data, error, loading } = useAsync(
    OthersCostServices.getAllOthersCost
  );
  const { handleDelete } = useOtherCost();

  return (
    <>
      <div className="mt-[30px]   px-[30px] my-[30px] mx-[20px] md:p-[10px]">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center my-4 gap-2">
            <i className="fa-solid fa-money-bill-1-wave text-2xl text-green dark:text-white "></i>
            <h1 className=" text-[#40513B] dark:text-dark_blue2 text-2xl font-abc">
              Other Cost
            </h1>
          </div>
          <div className="flex items-center gap-2  text-white font-abc text-sm  bg-green2 px-3 py-2 rounded hover:bg-btnbg  duration-200 ">
            <i className="fa-solid fa-plus"></i>
            <Link to="/add-other-cost">Add Other Cost</Link>
          </div>
        </div>
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className=" bg-[#faf7f7] dark:bg-darkHead dark:text-white font-archivo  text-text2    block md:table-row absolute -top-full md:top-auto -left-full md:left-auto shadow-md text-sm  md:relative ">
              <th className="  p-2 text-left block md:table-cell">Date</th>
              <th className=" p-2 text-left block md:table-cell">Details</th>
              <th className=" p-2 text-left block md:table-cell">Amount</th>
              <th className=" p-2 text-left block md:table-cell">Submite By</th>
              <th className=" p-2 text-left block md:table-cell">Action</th>
            </tr>
          </thead>
          <tbody className=" mt-2 block md:table-row-group shadow-md">
            {loading
              ? "Loading.."
              : data?.data?.map((items) => (
                  <tr
                    className=" bg-white dark:bg-darkHover dark:text-white font-archivo border border-spacing-2  border-btnbg md:border-none block md:table-row"
                    key={items._id}
                  >
                    <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                      <span className="inline-block w-1/3 md:hidden  font-bold">
                        Date :
                      </span>
                      <td>{new Date(items?.date).toLocaleDateString()}</td>
                    </td>
                    <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                      <span className="inline-block w-1/3 md:hidden  font-bold">
                        cost Name
                      </span>
                      <td>{items.costName}</td>
                    </td>
                    <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                      <span className="inline-block w-1/3 md:hidden  font-bold">
                        Amonut :
                      </span>
                      <td>{items.costPrice} Tk </td>
                    </td>
                    <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                      <span className="inline-block w-1/3 md:hidden  font-bold">
                        Submite By :
                      </span>
                      <td>{items?.member?.name} </td>
                    </td>
                    <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Actions
                      </span>

                      <button className=" bg-green2  text-white font-bold py-1 px-2 border border-blue-500 rounded">
                        <Link to={`/edite-other-cost/${items._id}`}>
                          {/* <OtherCostEdite /> */}
                          Edite
                        </Link>
                      </button>

                      <button
                        onClick={() => handleDelete(items._id)}
                        className=" ml-2 bg-btnbg  text-white font-bold py-1 px-2 border border-red-500 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            <tr className=" bg-[#FFECEC]  dark:bg-darkBottom dark:text-white font-archivo">
              <td></td>
              <td className="md:p-2">Total :</td>
              <td className="md:p-2">{data.amount}Tk</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OtherCostList;
