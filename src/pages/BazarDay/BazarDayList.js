import React from "react";
import { Link } from "react-router-dom";

const BazarDayList = () => {
  const getDays = (year, month) => {
    return new Date(year, month, 0).getDate();
  };
  const daysInSeptember = getDays(2023, 2);

  return (
    <>
      <div className="mt-[30px]   px-[30px] md:p-[10px]">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center my-4 gap-2">
            <i className="fa-solid fa-users text-2xl text-green"></i>
            <h1 className=" text-[#40513B] text-2xl font-abc">
              Bazar Day's List
            </h1>
          </div>
          <div className="flex items-center gap-2  text-white font-abc text-sm  bg-green2 px-3 py-2 rounded hover:bg-btnbg  duration-200 ">
            <i class="fa-solid fa-plus"></i>
            <Link to="/add-bazar-day">Add Bazar Day</Link>
          </div>
        </div>
        <table
          className=" w-full text-center  h-3/4 border border-b-0
      "
        >
          <thead>
            <tr className=" border">
              <th className=" border">Sat</th>
              <th className=" border">Sun</th>
              <th className=" border">Mon</th>
              <th className=" border">Tue</th>
              <th className=" border">Wed</th>
              <th className=" border">Thu</th>
              <th className=" border">Fri</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className=" border">1</td>
              <td className=" border">2</td>
              <td className=" border">3</td>
              <td className=" border">4</td>
              <td className=" border">5</td>
              <td className=" border">6</td>
              <td className=" border">7</td>
            </tr>
            <tr>
              <td className=" border">8</td>
              <td className=" border">9</td>
              <td className=" border">10</td>
              <td className=" border">11</td>
              <td className=" border">12</td>
              <td className=" border">13</td>
              <td className=" border">14</td>
            </tr>
            <tr>
              <td className=" border">15</td>
              <td className=" border">16</td>
              <td className=" border">17</td>
              <td className=" border">18</td>
              <td className=" border">19</td>
              <td className=" border">20</td>
              <td className=" border">21</td>
            </tr>
            <tr>
              <td className=" border">22</td>
              <td className=" border">23</td>
              <td className=" border">24</td>
              <td className=" border">25</td>
              <td className=" border">26</td>
              <td className=" border">27</td>
              <td className="border">28</td>
            </tr>
            <tr>
              {daysInSeptember === 29 ? (
                <td className=" border">29</td>
              ) : daysInSeptember === 30 ? (
                <>
                  <td className=" border">29</td>
                  <td className=" border">30</td>
                </>
              ) : (
                daysInSeptember === 31 && (
                  <>
                    <td className=" border">29</td>
                    <td className=" border">30</td>
                    <td className=" border">31</td>
                  </>
                )
              )}
            </tr>
          </tbody>
        </table>
        <button className="mt-5 bg-green2  text-white font-bold py-1 px-2 border border-blue-500 rounded">
        {/* {`/edite-bazar-day/${items._id}`} */}
                    <Link to="/edite-bazar-day">
                      {/* <OtherCostEdite /> */}
                      Edite
                    </Link>
                  </button>
      </div>
    </>
  );
};

export default BazarDayList;
