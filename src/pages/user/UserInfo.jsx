/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useGetUserByIdQuery } from "../../services/userAPI";
import { IoChevronBack } from "react-icons/io5";
import { Button } from "@material-tailwind/react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const UserInfo = () => {
  const token = Cookies.get("token");

  let jwtDecodes;

  if (token) {
    jwtDecodes = jwtDecode(token);
  }
  const userProfileId = token ? jwtDecodes?.userProfileId : null;

  const { data } = useGetUserByIdQuery(userProfileId);

  if (!data) {
    return (
      <div>
        <p>No Data Found</p>
      </div>
    );
  }

  return (
    <>
      <div className="text-3xl font-bold mt-5 mb-4 ml-4 md:ml-12 xl:mb-[-5rem] md:mb-8">
        User Information
      </div>
      <div className="flex justify-center items-center xl:h-screen">
        <div className="w-full max-w-4xl flex flex-col mx-2 md:flex-row shadow-xl">
          <div className="w-full md:w-1/3 flex justify-center lg:mt-8 md:mt-8">
            <img
              src="https://tamilnaducouncil.ac.in/wp-content/uploads/2020/04/dummy-avatar.jpg"
              alt="User"
              className="object-cover w-1/2 h-1/2 lg:h-1/2   lg:w-2/3 md:w-2/3 "
            />
          </div>
          <div className="w-full md:w-2/3 p-8 flex flex-col justify-between">
            <div className="overflow-x-auto lg:overflow-x-visible">
              <table className="table w-full mb-5 ml-2 border-collapse border border-gray-200">
                <tbody>
                  <tr>
                    <th className="px-4 py-2 border border-gray-200">
                      First Name
                    </th>
                    <td className="px-4 py-2 border border-gray-200">
                      {data.firstName}
                    </td>
                  </tr>
                  <tr>
                    <th className="px-4 py-2 border border-gray-200">
                      Last Name
                    </th>
                    <td className="px-4 py-2 border border-gray-200">
                      {data.lastName}
                    </td>
                  </tr>
                  <tr>
                    <th className="px-4 py-2 border border-gray-200">
                      Mobile Number
                    </th>
                    <td className="px-4 py-2 border border-gray-200">
                      {data.mobile_no}
                    </td>
                  </tr>
                  <tr>
                    <th className="px-4 py-2 border border-gray-200">
                      Email
                    </th>
                    <td className="px-4 py-2 border border-gray-200">
                      {data.email}
                    </td>
                  </tr>
                  <tr>
                    <th className="px-4 py-2 border border-gray-200">City</th>
                    <td className="px-4 py-2 border border-gray-200">
                      {data.city}
                    </td>
                  </tr>
                  <tr>
                    <th className="px-4 py-2 border border-gray-200">
                      Address
                    </th>
                    <td className="px-4 py-2 border border-gray-200">
                      {data.address}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center items-center mt-4 md:mt-0">
              <Link to={`/user/UserProfileUpdate/${userProfileId}`}>
                <div className="flex items-center mt-5">
                  <Button>Update Profile</Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
