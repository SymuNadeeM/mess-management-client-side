import { Link } from "react-router-dom";
import useAsync from "../../hook/useAsync";
import usePaidAmount from "../../hook/usePaidAmount";
import PaidAmountServices from "../../services/PaidAmountServices";

const UserMoneyList = () => {
  const { data, error, loading } = useAsync(
    PaidAmountServices.getAllPaidAmount
  );
  console.log(data.amount);
  // console.log(data?.data?.amount);
  const { handleDelete } = usePaidAmount();

  return (
    <>
      <div className="mt-[30px]   px-[30px] my-[30px] mx-[20px] md:p-[10px]">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center my-4 gap-2">
            <i className="fa-solid fa-sack-dollar text-green2 dark:text-white text-xl"></i>
            <h1 className=" text-[#40513B] text-2xl font-abc dark:text-dark_blue2">
              All Member Money List
            </h1>
          </div>
          <div className="flex items-center gap-2  text-white font-abc text-sm  bg-green2 px-1 md:px-3 py-1 md:py-2  rounded hover:bg-btnbg  duration-200 ">
            <i className="fa-solid fa-plus"></i>
            <Link to="/add-money">Add member amount</Link>
          </div>
        </div>
        <table className="min-w-full border-collapse block  md:table">
          <thead className="block md:table-header-group">
            <tr className=" bg-[#faf7f7] dark:bg-darkHead font-archivo  text-text2 dark:text-white    block md:table-row absolute -top-full md:top-auto -left-full md:left-auto shadow-md text-sm  md:relative ">
              <th className=" p-2 text-left block md:table-cell">Name</th>
              <th className=" p-2 text-left block md:table-cell">Amount</th>
              <th className=" p-2 text-left block md:table-cell">Action</th>
            </tr>
          </thead>
          <tbody className=" mt-2 block md:table-row-group shadow-md">
            {loading
              ? "Loading..."
              : data?.data?.map((items) => (
                  <tr
                    className=" bg-white dark:bg-darkHover font-archivo border dark:text-white border-spacing-2  border-btnbg md:border-none block md:table-row"
                    key={items._id}
                  >
                    <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                      <span className="inline-block w-1/3 md:hidden  font-bold">
                        UserName :
                      </span>
                      <td>{items?.member?.name}</td>
                    </td>
                    <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                      <span className="inline-block w-1/3 md:hidden  font-bold">
                        Amonut
                      </span>
                      <td>{items.amount} Tk </td>
                    </td>
                    <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Actions
                      </span>

                      <button className=" bg-green2  text-white font-bold py-1 px-2 border border-blue-500 rounded">
                        <Link to={`/money-edite/${items._id}`}>Edite</Link>
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
            <tr className=" bg-[#FFECEC] dark:bg-darkBottom dark:text-white  font-archivo">
              <td className="md:p-2">Total :</td>
              <td className="md:p-2">{data.amount}Tk</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserMoneyList;
