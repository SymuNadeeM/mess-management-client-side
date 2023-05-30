import React from "react";

const MealList = () => {
  return (
    <div>
      <div className="mt-[50px] mb-2">
        <div className="flex items-center my-4 gap-2">
          <i class="fa-solid fa-pepper-hot text-2xl text-green"></i>
          <h1 className=" text-[#40513B] text-2xl font-abc">Meal List</h1>
        </div>
      </div>
      <div>
        <table className="table-auto text-center w-full md:w-3/4 border">
          <thead className=" border">
            <tr className="bg-[#faf7f7] font-archivo  text-text2 shadow text-sm">
              <th className="p-2  border">Date</th>
              <th className="p-2  border">Meal</th>
              <th className="p-2 border">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">25-03-2023</td>
              <td className="p-2 border">3</td>
              <td className="p-2 border">Nure Alom</td>
            </tr>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">25-03-2023</td>
              <td className="p-2 border">3</td>
              <td className="p-2 border">Shahid</td>
            </tr>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">25-03-2023</td>
              <td className="p-2 border">3</td>
              <td className="p-2 border">Joohir Bahdur</td>
            </tr>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">25-03-2023</td>
              <td className="p-2 border">3</td>
              <td className="p-2 border">Nure Alom</td>
            </tr>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">25-03-2023</td>
              <td className="p-2 border">3</td>
              <td className="p-2 border">Nure Alom</td>
            </tr>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">25-03-2023</td>
              <td className="p-2 border">3</td>
              <td className="p-2 border">Nure Alom</td>
            </tr>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">25-03-2023</td>
              <td className="p-2 border">3</td>
              <td className="p-2 border">Nure Alom</td>
            </tr>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">25-03-2023</td>
              <td className="p-2 border">3</td>
              <td className="p-2 border">Nure Alom</td>
            </tr>

            <tr className=" bg-slate-600 text-white">
              <td></td>
              <td className="p-2 border">150</td>

              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MealList;
