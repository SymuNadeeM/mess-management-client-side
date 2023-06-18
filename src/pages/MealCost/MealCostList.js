import { Link } from "react-router-dom";

import useAsync from "../../hook/useAsync";
import useBazarList from "../../hook/useBazarList";
import BazarListServices from "../../services/BazarListServices";

const MealCostList = () => {
  const { data, error, loading } = useAsync(BazarListServices.getAllBazarList);
  const { handleDelete } = useBazarList();

  console.log("data ======>", data);

  return (
    <>
      <div className="mt-[30px]   px-[30px] md:p-[10px]">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center my-4 gap-2">
            <i className="fa-solid fa-clipboard-list text-2xl text-green"></i>
            <h1 className=" text-[#40513B] text-2xl font-abc">Bazar List</h1>
          </div>
          <div className="flex items-center gap-2  text-white font-abc text-sm  bg-green2 px-3 py-2 rounded hover:bg-btnbg  duration-200 ">
            <i className="fa-solid fa-plus"></i>
            <Link to="/add-meal-cost">Add Meal Cost</Link>
          </div>
        </div>
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className=" bg-[#faf7f7] font-archivo  text-text2    block md:table-row absolute -top-full md:top-auto -left-full md:left-auto shadow-md text-sm  md:relative ">
              <th className=" p-2 text-left block md:table-cell">Date</th>
              <th className=" p-2 text-left block md:table-cell">
                Item Description
              </th>
              <th className=" p-2 text-left block md:table-cell">Amount</th>
              <th className="  p-2 text-left block md:table-cell">Submit by</th>
              <th className="  p-2 text-left block md:table-cell">Action</th>
            </tr>
          </thead>
          <tbody className=" mt-2 block md:table-row-group shadow-md">
            {loading
              ? "Loading..."
              : data?.data?.map((items) => (
                  <tr
                    className=" bg-white font-archivo border border-spacing-2  border-btnbg md:border-none block md:table-row"
                    key={items.id}
                  >
                    <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                      <span className="inline-block w-1/3 md:hidden  font-bold">
                        Date:
                      </span>
                      <td>{new Date(items?.date).toLocaleDateString()}</td>
                    </td>
                    <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                      <span className="inline-block w-1/3 md:hidden  font-bold">
                        Details :
                      </span>
                      <td>{items.itemDescription}</td>
                    </td>

                    <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                      <span className="inline-block w-1/3 md:hidden  font-bold">
                        Amount
                      </span>
                      <td>{items.itemAmount} Taka </td>
                    </td>
                    <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                      <span className="inline-block w-1/3 md:hidden  font-bold">
                        Submit by
                      </span>
                      <td>{items?.member?.name} </td>
                    </td>
                    <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Actions
                      </span>

                      <button className=" bg-green2  text-white font-bold py-1 px-2 border border-blue-500 rounded">
                        <Link to={`/edite-meal-cost/${items._id}`}>
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
            <tr className=" bg-[#FFECEC]  font-archivo">
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

export default MealCostList;
