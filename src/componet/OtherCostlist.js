import React from "react";

const OtherCostlist = () => {
  return (
    <div>
      <div className="mt-[50px] mb-2">
        <div className="flex items-center my-4 gap-2">
          <i class="fa-solid fa-money-bill-1-wave text-2xl text-green "></i>

          <h1 className=" text-[#40513B] text-2xl font-abc">Other Cost List</h1>
        </div>
      </div>
      <div>
        <table className="table-auto text-center w-full md:w-3/4 border">
          <thead className=" border">
            <tr className="bg-[#faf7f7] font-archivo  text-text2 shadow text-sm">
              <th className="p-2  border">Date</th>
              <th className="p-2  border">Details</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Submite By</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">25-03-2023</td>
              <td className="p-2 border">Light</td>
              <td className="p-2 border">320</td>
              <td className="p-2 border">Raihan</td>
            </tr>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">25-03-2023</td>
              <td className="p-2 border">Light</td>
              <td className="p-2 border">420</td>
              <td className="p-2 border">Shojib</td>
            </tr>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">25-03-2023</td>
              <td className="p-2 border">Light</td>
              <td className="p-2 border">420</td>
              <td className="p-2 border">Shojib</td>
            </tr>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">25-03-2023</td>
              <td className="p-2 border">Light</td>
              <td className="p-2 border">420</td>
              <td className="p-2 border">Shojib</td>
            </tr>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">25-03-2023</td>
              <td className="p-2 border">Light</td>
              <td className="p-2 border">420</td>
              <td className="p-2 border">Shojib</td>
            </tr>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">25-03-2023</td>
              <td className="p-2 border">Light</td>
              <td className="p-2 border">420</td>
              <td className="p-2 border">Shojib</td>
            </tr>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">25-03-2023</td>
              <td className="p-2 border">Light</td>
              <td className="p-2 border">420</td>
              <td className="p-2 border">Shojib</td>
            </tr>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">25-03-2023</td>
              <td className="p-2 border">Light</td>
              <td className="p-2 border">420</td>
              <td className="p-2 border">Shojib</td>
            </tr>

            <tr className=" bg-slate-600 text-white">
              <td></td>
              <td></td>
              <td className="p-2 border">2550</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OtherCostlist;
