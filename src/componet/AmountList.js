import React from "react";

const AmountList = () => {
  return (
    <div>
      <div className="mt-[50px] mb-2">
        <div className="flex items-center my-4 gap-2">
          <i class="fa-solid fa-sack-dollar text-green2 text-2xl"></i>
          <h1 className=" text-[#40513B] text-2xl font-abc">
            All Member Money List
          </h1>
        </div>
      </div>
      <div>
        <table className="table-auto text-center w-full md:w-3/4 border">
          <thead className=" border">
            <tr className="bg-[#faf7f7] font-archivo  text-text2 shadow text-sm">
              <th className="p-2  border">Name</th>
              <th className="p-2 border">Deposit</th>
              <th className="p-2 border">Will Get</th>
              <th className="p-2 border">Due</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">Nure Alom</td>
              <td className="p-2 border">2000</td>
              <td className="p-2 border">1401</td>
              <td className="p-2 border">191</td>
            </tr>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">Akber Ali</td>
              <td className="p-2 border">1000</td>
              <td className="p-2 border">2401</td>
              <td className="p-2 border">91</td>
            </tr>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">Shakib </td>
              <td className="p-2 border">1200</td>
              <td className="p-2 border">701</td>
              <td className="p-2 border">290</td>
            </tr>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">Harun Khan</td>
              <td className="p-2 border">1700</td>
              <td className="p-2 border">840</td>
              <td className="p-2 border">540</td>
            </tr>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">Iqbal Hossain</td>
              <td className="p-2 border">2000</td>
              <td className="p-2 border">450</td>
              <td className="p-2 border">132</td>
            </tr>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">Nure Alom</td>
              <td className="p-2 border">2000</td>
              <td className="p-2 border">1401</td>
              <td className="p-2 border">191</td>
            </tr>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">Nure Alom</td>
              <td className="p-2 border">2000</td>
              <td className="p-2 border">1401</td>
              <td className="p-2 border">191</td>
            </tr>
            <tr className=" hover:bg-slate-300">
              <td className="p-2 border">Nure Alom</td>
              <td className="p-2 border">2000</td>
              <td className="p-2 border">1401</td>
              <td className="p-2 border">191</td>
            </tr>
            <tr className=" bg-slate-600 text-white">
              <td className="p-2 border">
                <strong>Total: </strong>
              </td>
              <td className="p-2 border">
                <strong> ৳ 15000</strong>
              </td>
              <td className="p-2 border">
                <strong>৳ 1260</strong>
              </td>
              <td className="p-2 border">
                <strong>৳ 8575</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AmountList;
