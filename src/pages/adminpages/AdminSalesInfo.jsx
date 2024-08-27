import { Link, useNavigate, useParams } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { Button } from "@material-tailwind/react";
import { useSellerByIdQuery } from "../../services/salesAPI";
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";
import { FiLoader } from 'react-icons/fi'; 
import {
  
  Typography,

} from "@material-tailwind/react";

const AdminSalesInfo = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const token = Cookies.get("token");

  let jwtDecodes;

  if (token) {
    jwtDecodes = jwtDecode(token);
  }

  const salesPersonId = token ? jwtDecodes?.salesPersonId : null;
  const userRole = token ? jwtDecodes?.authorities[0] : null;
  const DealerId = token ? jwtDecodes?.dealerId : null;
  DealerId;
  // console.log(DealerId)
  // console.log(DealerId);

  const { data, isLoading, isError, error } = useSellerByIdQuery({userId});
  isLoading;
  isError;
  error;
  // console.log(isLoading);
  // console.log(isError);
  // console.log(error);
  // console.log("data",data?.response.adddress);
  // const { data, isLoading, isError, error } = useSellerByIdQuery({ userId });
  // console.log(isLoading);
  // console.log(isError);
  // console.log(error);
  // console.log("data", data?.response.adddress);

  const {
    response: {
      firstName,
      lastName,
      mobileNo,
      area,
      email,
      city,
      address,
    } = {},
  } = data || {};
  if (isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center p-8">
        <FiLoader className="animate-spin text-blue-gray-800 h-16 w-16" />
      </div>
    );
  }
  return (
    <>
      <div className="text-3xl font-bold mt-5 mb-8 ml-4 md:ml-12 xl:mb-[-2rem] md:mb-8">
        Profile Information
      </div>
      {userRole === "ADMIN" ? (<Typography className=" xl:mt-7 ml-4 hidden xl:block xl:ml-12 xl:mb-[-5rem]">
        <div className="flex">
      <Link to={"/"}>
              <p className="hover:text-blue-900"> Home </p> 
              </Link>
               /
              <Link to={"/admin/salesuser"}>
              <p className="hover:text-blue-900">Seller</p>
              </Link>
              /
            
              <p>Info</p>

              </div>
      </Typography>) : (<Typography className=" xl:mt-7 ml-4 hidden xl:block xl:ml-12 xl:mb-[-5rem]">
        <div className="flex">
      <Link to={"/"}>
              <p className="hover:text-blue-900"> Home </p> 
              </Link>
               /
              <p>Info</p>

              </div>
      </Typography>)}
      
      <div className="flex justify-center items-center xl:h-screen">
        <div className="w-full max-w-4xl flex flex-col mx-2 md:flex-row shadow-xl">
          <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center lg:mt-8 md:mt-8">
            <img
              src="https://tamilnaducouncil.ac.in/wp-content/uploads/2020/04/dummy-avatar.jpg"
              alt="Dealer"
              className="object-cover w-1/2 h-1/2 lg:w-2/3 md:w-2/3"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 p-8 flex flex-col justify-between">
            <div className="overflow-x-auto lg:overflow-visible">
              <div className="overflow-x-auto lg:overflow-visible">
                <table className="table w-full ml-2 mb-5 border-collapse border border-gray-200">
                  <tbody>
                    <tr>
                      <th className="px-4 py-2 border border-gray-200">
                        First Name
                      </th>
                      <td className="px-4 py-2 border border-gray-200">
                        {firstName}
                      </td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 border border-gray-200">
                        Last Name
                      </th>
                      <td className="px-4 py-2 border border-gray-200">
                        {lastName}
                      </td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 border border-gray-200">
                        Mobile Number
                      </th>
                      <td className="px-4 py-2 border border-gray-200">
                        {mobileNo}
                      </td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 border border-gray-200">Area</th>
                      <td className="px-4 py-2 border border-gray-200">{area}</td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 border border-gray-200">Email</th>
                      <td className="px-4 py-2 border border-gray-200">
                        <div className="email-content">{email}</div>
                      </td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 border border-gray-200">City</th>
                      <td className="px-4 py-2 border border-gray-200">{city}</td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 border border-gray-200">
                        Address
                      </th>
                      <td className="px-4 py-2 border border-gray-200">
                        {address}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex justify-center items-center mt-4 md:mt-0">
              <span className="flex items-center">
                {userRole === "ADMIN" ? (
                  <Button
                    size="md"
                    className="mt-2 ml-2 cursor-pointer flex items-center"
                    onClick={() => navigate(-1)}
                  >
                    <IoChevronBack className="w-5 h-5" /> Back
                  </Button>
                ) : null}

                {userRole === "SALESPERSON" ? (
                  <Link to={`/seller/edit/${userId}/${salesPersonId}`}>
                    <Button
                      size="md"
                      className="mt-2 ml-2 cursor-pointer flex items-center"
                    >
                      Edit Profile
                    </Button>
                  </Link>
                ) : null}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSalesInfo;
