import React from "react";

const BazarList = () => {
  return (
    <div>
      <div className="mt-[50px] mb-2">
        <div className="flex items-center my-4 gap-2">
          <i className="fa-solid fa-clipboard-list text-2xl text-green"></i>
          <h1 className=" text-[#40513B] text-2xl font-abc">Bazar List</h1>
        </div>
      </div>
      <div>
        <table className="table-auto text-center w-full md:w-3/4 border">
          <thead className=" border">
            <tr className="bg-[#faf7f7] font-archivo  text-text2 shadow text-sm">
              <th className="p-2  border">Date</th>
              <th className="p-2 border">Item name</th>
              <th className="p-2 border">Cost</th>
              <th className="p-2 border">Submit by</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">25-03-2023</td>
              <td className="p-2 border">Fish-5kg</td>
              <td className="p-2 border">450</td>
              <td className="p-2 border">Nure Alom</td>
            </tr>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">25-03-2023</td>
              <td className="p-2 border">Fish-5kg</td>
              <td className="p-2 border">450</td>
              <td className="p-2 border">Nure Alom</td>
            </tr>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">25-03-2023</td>
              <td className="p-2 border">Fish-5kg</td>
              <td className="p-2 border">450</td>
              <td className="p-2 border">Nure Alom</td>
            </tr>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">25-03-2023</td>
              <td className="p-2 border">Fish-5kg</td>
              <td className="p-2 border">450</td>
              <td className="p-2 border">Nure Alom</td>
            </tr>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">25-03-2023</td>
              <td className="p-2 border">Fish-5kg</td>
              <td className="p-2 border">450</td>
              <td className="p-2 border">Nure Alom</td>
            </tr>

            <tr className=" bg-slate-600 text-white">
              <td></td>
              <td></td>
              <td className="p-2 border">
                <strong>৳ 8575</strong>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BazarList;
