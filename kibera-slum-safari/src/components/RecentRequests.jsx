
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';


function RecentRequests() {
  const tableRowStyles = {
    lineHeight:"60px",
    textAlign: "center", // Center-align text
  };

  return (
    <div>
      <div>
        <h3 className="text-black text-2xl ml-96 mb-6 mt-14 font-bold">Recent Requests</h3>
      </div>
      <table className="mt-8 ml-96 min-w-min max-w-screen-xl  bg-gray-100  shadow-lg py-64 p px-96 "  style={{ width: "1500px" }}>
        <tbody className="ml-12">
          <tr style={tableRowStyles}>
            <td className="p-2 text-black hover:bg-blue-500 hover:rounded-lg transition duration-300">
              Salvation Army
            </td>
            <td className="p-2 text-black hover:bg-blue-500 hover:rounded-lg transition duration-300">
              Description
            </td>
            <td className="p-2 text-black hover:bg-blue-500 hover:rounded-lg transition duration-300">
            <FontAwesomeIcon icon={faTrash} size="2xl" style={{color: "#024e54",}} /> 
            </td>
            <td className="p-2 text-black  hover:bg-blue-500 hover:rounded-lg transition duration-300">
            <FontAwesomeIcon icon={faCheck} size="2xl" style={{color: "#024e54",}} />

            </td>
          </tr>
          <tr style={tableRowStyles}>
            <td className="p-2 text-black hover:bg-blue-500 hover:rounded-lg transition duration-300">
              The Red Cross
            </td>
            <td className="p-2 text-black hover:bg-blue-500 hover:rounded-lg transition duration-300">
              Description
            </td>
            <td className="p-2 text-black hover:bg-blue-500 hover:rounded-lg transition duration-300">
            <FontAwesomeIcon icon={faTrash} size="2xl" style={{color: "#024e54",}} /> 

            </td>
            <td className="p-2 text-black hover:bg-blue-500 hover:rounded-lg transition duration-300">
            <FontAwesomeIcon icon={faCheck} size="2xl" style={{color: "#024e54",}} />

            </td>
          </tr>
          <tr style={tableRowStyles}>
            <td className="p-2 text-black hover:bg-blue-500 hover:rounded-lg transition duration-300">
              The AMREF Kenya
            </td>
            <td className="p-2 text-black hover:bg-blue-500 hover:rounded-lg transition duration-300">
              Description
            </td>
            <td className="p-2 text-black  hover:bg-blue-500 hover:rounded-lg transition duration-300">

            <FontAwesomeIcon icon={faTrash} size="2xl" style={{color: "#024e54",}} /> 
                       </td>

            <td className="p-2 text-black hover:bg-blue-500 hover:rounded-lg transition duration-300">
            <FontAwesomeIcon icon={faCheck} size="2xl" style={{color: "#024e54",}} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RecentRequests;

