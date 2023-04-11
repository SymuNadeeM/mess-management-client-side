import React from 'react';

const Calendar = () => {
  const getDays = (year, month) => {
    return new Date(year, month).getDate();
  };
  const daysInSeptember = getDays(2023, 2);
  return (
    <>
      
       <table
          className="p-2 w-full text-center  h-full border border-b-0
      "
        >
          <thead>
            <tr className=" border">
              <th className="py-3 border border-gray-400">Sat</th>
              <th className=" py-3 border border-gray-400">Sun</th>
              <th className=" py-3 border border-gray-400">Mon</th>
              <th className=" border border-gray-400 py-3">Tue</th>
              <th className=" border border-gray-400 py-3">Wed</th>
              <th className=" border border-gray-400 py-3">Thu</th>
              <th className=" border border-gray-400 py-3">Fri</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className=" border border-gray-400 py-3">1</td>
              <td className=" border border-gray-400 py-3">2</td>
              <td className=" border border-gray-400 py-3">3</td>
              <td className=" border border-gray-400 py-3">4</td>
              <td className=" border border-gray-400 py-3">5</td>
              <td className=" border border-gray-400 py-3">6</td>
              <td className=" border border-gray-400 py-3">7</td>
            </tr>
            <tr>
              <td className=" border border-gray-400 py-3">8</td>
              <td className=" border border-gray-400 py-3">9</td>
              <td className=" border border-gray-400 py-3">10</td>
              <td className=" border border-gray-400 py-3">11</td>
              <td className=" border border-gray-400 py-3">12</td>
              <td className=" border border-gray-400 py-3">13</td>
              <td className=" border border-gray-400 py-3">14</td>
            </tr>
            <tr>
              <td className=" border border-gray-400 py-3">15</td>
              <td className=" border border-gray-400 py-3">16</td>
              <td className=" border border-gray-400 py-3">17</td>
              <td className=" border border-gray-400 py-3">18</td>
              <td className=" border border-gray-400 py-3">19</td>
              <td className=" border border-gray-400 py-3">20</td>
              <td className=" border border-gray-400 py-3">21</td>
            </tr>
            <tr>
              <td className=" border border-gray-400 py-3">22</td>
              <td className=" border border-gray-400 py-3">23</td>
              <td className=" border border-gray-400 py-3">24</td>
              <td className=" border border-gray-400 py-3">25</td>
              <td className=" border border-gray-400 py-3">26</td>
              <td className=" border border-gray-400 py-3">27</td>
              <td className="border border-gray-400 py-3">28</td>
            </tr>
            <tr>
              {daysInSeptember === 29 ? (
                <td className=" border border-gray-400 py-3">29</td>
              ) : daysInSeptember === 30 ? (
                <>
                  <td className=" border border-gray-400 py-3">29</td>
                  <td className=" border border-gray-400 py-3">30</td>
                </>
              ) : (
                daysInSeptember === 31 && (
                  <>
                    <td className=" border border-gray-400 py-3">29</td>
                    <td className=" border border-gray-400 py-3">30</td>
                    <td className=" border border-gray-400 py-3">31</td>
                  </>
                )
              )}
            </tr>
          </tbody>
        </table>
    </>
  );
};

export default Calendar;