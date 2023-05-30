import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import useAsync from "../../hook/useAsync";
import useBazarDay from "../../hook/useBazarDay";
import BazarScheduleServices from "../../services/BazarScheduleServices";

const BazarDayList = () => {
  const [date, setDate] = useState(new Date());
  const [realdata, setrealdata] = useState({});

  const { data, error, loading } = useAsync(
    BazarScheduleServices.getAllBazarSchedule
  );

  const searchSchedule = async (date) => {
    setDate(date);
    const res = await BazarScheduleServices.searchBazarSchedule(date);
    setrealdata(res?.data[0] || {});
  };

  const { handleDelete } = useBazarDay();

  return (
    <>
      {/* calendar and name of user */}
      <h1 className="my-4 text-[#40513B] text-2xl font-Robbi">Calendar</h1>

      <div className=" grid  md:grid-cols-2 gap-3">
        <div className="flex justify-center items-center">
          <Calendar onChange={searchSchedule} value={date} />
        </div>

        <div className="flex justify-center items-start md:justify-start md:items-center">
          <div className=" bg-teal-300 px-5 py-2 rounded-md border-spacing-1">
            <p className=" text-btnbg text-lg font-jose">
              Bazar on this day →
              {Object.keys(realdata).length !== 0 ? (
                <strong className=" text-red-600">
                  {realdata?.member?.name}
                </strong>
              ) : (
                <strong className=" text-red-600">No member selected</strong>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Total Bazar List */}
      <div className="mt-[30px] px-[30px] md:p-[10px]">
        {/* header part */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center my-4 gap-2">
            <i className="fa-solid fa-users text-2xl text-green"></i>
            <h1 className=" text-[#40513B] text-2xl font-abc">
              Bazar Day's List
            </h1>
          </div>

          <div className="flex items-center gap-2  text-white font-abc text-sm  bg-green2 px-3 py-2 rounded hover:bg-btnbg  duration-200 ">
            <i className="fa-solid fa-plus"></i>
            <Link to="/add-bazar-day">Add Bazar Day</Link>
          </div>
        </div>

        {/* body of content */}
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className=" bg-[#faf7f7] font-archivo  text-text2    block md:table-row absolute -top-full md:top-auto -left-full md:left-auto shadow-md text-sm  md:relative ">
              <th className="  p-2 text-left block md:table-cell">Date</th>
              <th className=" p-2 text-left block md:table-cell">Name</th>
              <th className=" p-2 text-left block md:table-cell">Action</th>
            </tr>
          </thead>
          <tbody className=" mt-2 block md:table-row-group shadow-md">
            {loading
              ? "loading.."
              : data?.data?.map((items) => (
                  <tr
                    className=" bg-white font-archivo border border-spacing-2  border-btnbg md:border-none block md:table-row"
                    key={items._id}
                  >
                    <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                      <span className="inline-block w-1/3 md:hidden  font-bold">
                        Date
                      </span>
                      <td>{new Date(items?.date).toLocaleDateString()}</td>
                    </td>
                    <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                      <span className="inline-block w-1/3 md:hidden  font-bold">
                        Meal:
                      </span>
                      <td>{items?.member?.name}</td>
                    </td>
                    <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Actions
                      </span>

                      <button className=" bg-green2  text-white font-bold py-1 px-2 border border-blue-500 rounded">
                        <Link to={`/edite-bazar-day/${items._id}`}>
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
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BazarDayList;
