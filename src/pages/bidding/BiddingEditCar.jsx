/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
// import React from "react";
import Inputs from "../../forms/Inputs";
import { Textarea } from "@material-tailwind/react";
import { useBiddingCarByIdQuery, useBiddingcarUpdateMutation } from "../../services/biddingAPI"
import {  useNavigate, useParams } from "react-router-dom";
import { useGetOnlyBrandsQuery, useGetVariantsQuery, useGetSubVariantsQuery } from "../../services/brandAPI";
import { useGetAllDealerListQuery } from "../../services/dealerAPI";
import { ToastContainer, toast } from "react-toastify";
// import {  Input } from "@material-tailwind/react";

// const cityOptions = {
//   Pune: ["MH-12"],
//   PimpriChichwad: ["MH-14"],
//   Mumbai: ["MH-01", "MH-02", "MH-03", "MH-47"],
//   Amravati: ["MH-27"],
//   Yavatmal: ["MH-29"],
//   Chandrapur: ["MH-34"],
//   Kolhapur: ["MH-09"],
//   Solapur: ["MH-13", "MH-45"],
//   Nanded: ["MH-26"],
//   Latur: ["MH-24"],
//   Satara: ["MH-11"],
//   Sangli: ["MH-10"],
//   Nashik: ["MH-15", "MH-51"],
//   Beed: ["MH-32"],
//   Jalna: ["MH-21"],
//   Nagpur: ["MH-31", "MH-49  "],
//   Gondia: ["MH-35"],
//   Gadchiroli: ["MH-33"],
//   Bhandara: ["MH-36"],
//   Washim: ["MH-37"],
//   Jalgaon: ["MH-19"],
//   Akola: ["MH-30"],
//   Buldhana: ["MH-28"],
//   Dhule: ["MH-18"],
//   Nandurbar: ["MH-39"],
//   Thane: ["MH-04", "MH-05", "MH-48"],
//   Raigad: ["MH-06"],
//   Ratnagiri: ["MH-08"],
//   Sindhudurg: ["MH-07"],
//   Ahmednagar: ["MH-16"],
//   Dharashiv: ["MH-25"],
//   SambhajiNagar: ["MH-20"],
// };

export default function BiddingEditCar() {

  const { beadingCarId } = useParams();
  
  const { data: Carid } = useBiddingCarByIdQuery(beadingCarId);
  const { data: brandData } = useGetOnlyBrandsQuery();
  const { data: dealarList } = useGetAllDealerListQuery();
  const brands = brandData?.list.map((item) => item.brand) || [];

  const [selectedModel, setSelectedModel] = useState('');
  const [selectedBrand, setSelectedBrand] = useState(''); //Two field Brands and Model
  const [modelOptions, setModelOptions] = useState([]);
  const [variantOptions, setVariantOptions] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const userInfo = localStorage.getItem("userInfo");
  const { userId :userid } = JSON.parse(userInfo);
  const navigate = useNavigate();

  

  const [formData, setFormData] = useState({
    //features
    acFeature: Carid?.acFeature,
    musicFeature: Carid?.musicFeature,
    powerWindowFeature: Carid?.powerWindowFeature,
    rearParkingCameraFeature: Carid?.rearParkingCameraFeature,
    buttonStart: Carid?.buttonStart,
        abs: Carid?.abs,
        sunroof: Carid?.sunroof,
        airbag: Carid?.airbag,
        childSafetyLocks: Carid?.childSafetyLocks,
    // fields
    brand: Carid?.brand,
    bodyType: Carid?.model,
    price: Carid?.price,
    model: Carid?.model,
    cVariant: Carid?.variant,
    year: Carid?.year,
    transmission: Carid?.transmission,
    color: Carid?.color,
    city: Carid?.city,
    fuelType: Carid?.fuelType,
    kmDriven: Carid?.kmDriven,
    carInsurance: Carid?.carInsurance,
    registration: Carid?.registration,
    description: Carid?.description,
    // safetyDescription: Carid?.safetyDescription,
    area: Carid?.area,
    // carStatus: "Active",
    // noOfWheels: "",
    ownerSerial: Carid?.ownerSerial,
    tyre: "",
    userId:userid,
    dealerId: Carid?.dealerId,
    carInsuranceType: Carid?.carInsuranceType,

  });
  const { data: variantData } = useGetVariantsQuery(selectedBrand, {
    skip: !selectedBrand,
  });

  const { data: subVariantData } = useGetSubVariantsQuery(
    { brand: selectedBrand, variant: selectedModel },
    {
      skip: !selectedBrand || !selectedModel,
    }
  );

  const [biddingcarUpdate] = useBiddingcarUpdateMutation();
  useEffect(() => {
    if (Carid) {
      setFormData({
        brand: Carid?.brand || "",
        model: Carid?.model || "",
        price: Carid?.price || "",
        cVariant: Carid?.variant || "",
        year: Carid?.year || "",
        bodyType: Carid?.bodyType || "",
        transmission: Carid?.transmission || "",
        color: Carid?.color || "",
        city: Carid?.city || "",
        fuelType: Carid?.fuelType || "",
        kmDriven: Carid?.kmDriven || "",
        carInsurance: Carid?.carInsurance !== undefined ? Carid.carInsurance : "",
        registration: Carid?.registration || "",
        description: Carid?.description || "",
        area: Carid?.area || "",
        ownerSerial: Carid?.ownerSerial || "",
        tyre: Carid?.tyre || "",
        dealerId: Carid?.dealerId || "",
        title: Carid?.title || "",
        insuranceType: Carid?.carInsuranceType || "",
        musicFeature: Carid?.musicFeature || "",
        acFeature: Carid?.acFeature || "",
        powerWindowFeature: Carid?.powerWindowFeature || "",
        rearParkingCameraFeature: Carid?.rearParkingCameraFeature || "",
        buttonStart: Carid?.buttonStart || "",
        abs: Carid?.abs || "",
        sunroof: Carid?.sunroof || "",
        airbag: Carid?.airbag || "",
        childSafetyLocks: Carid?.childSafetyLocks || ""
      });
      setSelectedModel(Carid?.model);
      setSelectedBrand(Carid?.brand);
      setVariantOptions(Carid?.cVariant);
    }
  }, [Carid]);

 
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the form data to send to the backend
    const data = {
      buttonStart: formData.buttonStart,
      abs: formData.abs,
      sunroof: formData.sunroof,
      airbag: formData.airbag,
      childSafetyLocks: formData.childSafetyLocks,
      acFeature: formData.acFeature,
      musicFeature: formData.musicFeature,
      area: formData.area,
      bodyType: formData.bodyType,
      brand: formData.brand,
      cVariant: formData.cVariant,
      carInsurance: formData.carInsurance,
      // carStatus: "ACTIVE",
      city: formData.city,
      color: formData.color,
      description: formData.description,
      fuelType: formData.fuelType,
      kmDriven: formData.kmDriven,
      model: formData.model,
      noOfWheels: formData.noOfWheels,
      ownerSerial: formData.ownerSerial,
      powerWindowFeature: formData.powerWindowFeature,
      price: formData.price,
      rearParkingCameraFeature: formData.rearParkingCameraFeature,
      registration: formData.registration,
      // safetyDescription: formData.safetyDescription,
      transmission: formData.transmission,
      tyre: formData.tyre,
      year: formData.year,
      dealerId: formData.dealerId,
      date: "2023-07-19",
      beadingCarId : beadingCarId,
      carInsuranceType:formData.carInsuranceType
    };

    try {
      const res = await biddingcarUpdate({ data, beadingCarId });
      if(res?.data?.status === "success"){
        toast.success("Car edit successfully")
        setTimeout(() => {
          navigate(`/bidding/${beadingCarId}/uploadimage`)
        }, 1000)
      }
      
    } catch (error) {
      // console.log(error)
    }
   

  };

  // const handleCityChange = (event) => {
  //   const selectedCity = event.target.value;
  //   setFormData({
  //     ...formData,
  //     city: selectedCity,
  //     registration: "", // Reset registration when city changes
  //   });
  // };

  const handleChangeType = (event) => {
    const value = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      carInsuranceType: value,
    }));
  }

  const handleChange = (event) => {
    const value = event.target.value === "true";
    setFormData((prevFormData) => ({
      ...prevFormData,
      carInsurance: value,
    }));
    setShowCalendar(value);
  };
  const handleDateChange = (event) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      insurancedate: value,
    }));
  };
  const handleBrandChange = (event) => {
    const brand = event.target.value;
    setSelectedBrand(brand);
    setFormData({
      ...formData,
      brand,
      model: '',
      cVariant: '',
    });
  };

  const handleModelChange = (event) => {
    const model = event.target.value;
    setSelectedModel(model);
    setFormData({
      ...formData,
      model,
      cVariant: '',
    });
  };

  const handleVariantChange = (event) => {
    const cVariant = event.target.value;
    setFormData({
      ...formData,
      cVariant,
    });
  };

  useEffect(() => {
    if (variantData) {
      const models = [...new Set(variantData.list.map((item) => item.variant))];
      setModelOptions(models);
    }
  }, [variantData]);

  useEffect(() => {
    if (subVariantData) {
      const variants = [...new Set (subVariantData.list.map((item) => item.subVariant))];
      setVariantOptions(variants);
    }
  }, [subVariantData]);

  return (
    <>
      <ToastContainer />
      <div className="md:flex justify-center m-6 md:m-0">
        <div>
          <form onSubmit={handleSubmit} className="w-full xl:w-[45rem]">
            <div className="flex justify-center">
              <p className="text-3xl font-semibold m-4">Edit Bidding Car</p>
            </div>
            <div className="md:flex gap-2">
              <div className="mt-5 w-full">
                <select
                  required
                  className="w-full border-2 border-gray-400 p-2 rounded-md"
                  value={formData?.brand}
                  onChange={handleBrandChange}
                >
                  <option value="">Brands</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5 w-full">
                <select
                  required
                  className="w-full border-2 border-gray-400 p-2 rounded-md"
                  value={formData?.model}
                  onChange={handleModelChange}
                  disabled={!selectedBrand}
                >
                  <option value="">Models</option>
                  {modelOptions.map((model, i) => (
                    <option key={i} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="md:flex">
              <div className="mt-5 w-full">
                <select
                  className="w-full border-2 border-gray-400 p-2 rounded-md"
                  name="cVariant"
                  value={formData?.cVariant}
                  onChange={handleVariantChange}
                  disabled={!modelOptions.length}
                  required
                >
                  <option value="">Car Variant</option>
                  {variantOptions?.map((cVariant, i) => (
                    <option key={i} value={cVariant}>
                      {cVariant}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5 md:ml-2 w-full">
                <select
                  required
                  className="w-full border-2 border-gray-400 p-2 rounded-md"
                  name="transmission"
                  value={formData?.transmission}
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      transmission: event.target.value,
                    });
                  }}
                >
                  <option value="">Transmission</option>
                  <option>Automatic</option>
                  <option>Manual</option>
                </select>
              </div>
            </div>
            <div className="md:flex">
              <div className="mt-5 w-full">
                <Inputs
                  required
                  label="Price"
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={(event) => {
                    // Ensure only numbers are accepted
                    const value = event.target.value;
                    if (/^[0-9]*$/.test(value)) {
                      setFormData({
                        ...formData,
                        price: value,
                      });
                    }
                  }}
                />
              </div>

              <div className="mt-5 md:ml-2 w-full">
                <select
                  required
                  className="w-full border-2 border-gray-400 p-2 rounded-md"
                  label={"year"}
                  type={"number"}
                  name={"year"}
                  value={formData?.year}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      year: event.target.value,
                    })
                  }
                >
                  <option>Year</option>
                  {[...Array(new Date().getFullYear() - 2004)].map(
                    (_, index) => {
                      const year = 2005 + index;
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    }
                  )}
                </select>
              </div>
            </div>

            <div className="md:flex">
              <div className="mt-5 w-full">
                <select
                  required
                  className="w-full border-2 border-gray-400 p-2 rounded-md"
                  label={"Color"}
                  type={"text"}
                  name={"color"}
                  value={formData.color}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      color: event.target.value,
                    })
                  }
                >
                  <option value="">Color</option>
                  {[
                    "Red",
                    "Blue",
                    "Yellow",
                    "Pink",
                    "Purple",
                    "White",
                    "Black",
                    "Orange",
                    "Green",
                    "Brown",
                    "Gold",
                    "Aqua",
                  ].map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5 md:ml-2 w-full">
                <select
                  required
                  className="w-full border-2 border-gray-400 p-2 rounded-md"
                  name="ownerSerial"
                  value={formData.ownerSerial}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      ownerSerial: event.target.value,
                    })
                  }
                >
                  <option value="">Select Owner Serial</option>
                  {["1", "2", "3", "4", "5"].map((serial) => (
                    <option key={serial} value={serial}>
                      {serial}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="md:flex gap-2">
              <div className="mt-5 w-full">
                <Inputs
                  required
                  label={"Area"}
                  type={"text"}
                  name={"area"}
                  value={formData.area}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      area: event.target.value,
                    })
                  }
                />
              </div>
              <div className="mt-5 w-full">
                <select
                  required
                  className="w-full border-2 border-gray-400 p-2 rounded-md"
                  name="carInsurance"
                  value={formData.carInsurance}
                  onChange={handleChange}
                >
                  <option value="">Car Insurance</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
                {showCalendar && (
                  <>
                    <div className="mt-3">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="date"
                      >
                        Select Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        value={formData.insurancedate}
                        onChange={handleDateChange}
                        className="w-full border-2 border-gray-400 p-2 rounded-md"
                      />
                    </div>
                    <label
                      className="block text-gray-700 text-sm font-bold mt-2"
                      htmlFor="insurance"
                    >
                      Insurance Type
                    </label>
                    <select
                      required
                      className="w-full border-2 border-gray-400 p-2 rounded-md"
                      name="carInsurance"
                      value={formData.carInsuranceType}
                      onChange={handleChangeType}
                    >
                      <option value=""> Insurance Type</option>
                      <option value="Comprehensive">Comprehensive</option>
                      <option value="Zero Dept">Zero Depreciation </option>
                      <option value="Third Party">Third Party</option>
                    </select>
                  </>
                )}
              </div>
            </div>
            <div className="md:flex gap-2">
              <div className="mt-5 w-full">
                <Inputs
                  required
                  label={"Km Driven"}
                  type={"text"}
                  name={"kmDriven"}
                  value={formData.kmDriven}
                  onChange={(event) => {
                    // Ensure only numbers are accepted
                    const value = event.target.value;
                    if (/^[0-9]*$/.test(value)) {
                      setFormData({
                        ...formData,
                        kmDriven: value,
                      });
                    }
                  }}
                />
              </div>
              <div className="mt-5 w-full">
                <select
                  required
                  className="w-full border-2 border-gray-400 p-2 rounded-md"
                  label={"fuelType"}
                  type={"text"}
                  name={"fuelType"}
                  value={formData.fuelType}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      fuelType: event.target.value,
                    })
                  }
                >
                  <option value="">Fuel Type</option>

                  {[
                    "Petrol",
                    "Diesel",
                    "CNG",
                    "Electric",
                    "Hybrid",
                    "Petrol+CNG",
                  ].map((fuel) => (
                    <option key={fuel} value={fuel}>
                      {fuel}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* <div className="md:flex">
            <div className="mt-5 w-full">
              <select
                className="w-full border-2 border-gray-400 p-2 rounded-md"
                label="City"
                name="city"
                value={formData.city}
                onChange={handleCityChange}
              >
                <option value="">Select City</option>
                {Object.keys(cityOptions).map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5 ml-2 w-full">
              <select
                className="w-full border-2 border-gray-400 p-2 rounded-md"
                label="Registration"
                name="registration"
                value={formData.registration}
                onChange={(event) =>
                  setFormData({ ...formData, registration: event.target.value })
                }
                disabled={!formData.city}
              >
                <option value="">Select Registration</option>
                {formData.city &&
                  cityOptions[formData.city]?.map((reg) => (
                    <option key={reg} value={reg}>
                      {reg}
                    </option>
                  ))}
              </select>
            </div>
          </div> */}
            <div className="md:flex">
              <div className="mt-5 ml-5">
                <input
                  label={"Music Feature"}
                  type={"checkbox"}
                  name={"musicFeature"}
                  // value={formData.musicFeature}
                  checked={formData.musicFeature}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      musicFeature: event.target.checked,
                    })
                  }
                />{" "}
                Music
              </div>

              <div className="mt-5 ml-5">
                <input
                  label={"Power Window Feature"}
                  type={"checkbox"}
                  name={"powerWindowFeature"}
                  // value={formData.powerWindowFeature}
                  checked={formData.powerWindowFeature}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      powerWindowFeature: event.target.checked,
                    })
                  }
                />{" "}
                Power Windows
              </div>

              <div className="mt-5 ml-5">
                <input
                  label={"Ac Feature"}
                  type={"checkbox"}
                  name={"acFeature"}
                  // value={formData.acFeature}
                  checked={formData.acFeature}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      acFeature: event.target.checked,
                    })
                  }
                />{" "}
                Air Conditioning
              </div>

              <div className="mt-5 ml-5">
                <input
                  label={"Rear Parking Camera Feature"}
                  type={"checkbox"}
                  name={"rearParkingCameraFeature"}
                  // value={formData.rearParkingCameraFeature}
                  checked={formData.rearParkingCameraFeature}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      rearParkingCameraFeature: event.target.checked,
                    })
                  }
                />{" "}
                Rear Parking Camera
              </div>
            </div>
            {/* tenth part */}
            <div className="md:flex">
              <div className="mt-5 ml-5">
                <input
                  label={"Button Start"}
                  type={"checkbox"}
                  name={"buttonStart"}
                  // value={formData.musicFeature}
                  checked={formData.buttonStart}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      buttonStart: event.target.checked,
                    })
                  }
                />{" "}
                Button Start
              </div>

              <div className="mt-5 ml-5">
                <input
                  label={"ABS"}
                  type={"checkbox"}
                  name={"abs"}
                  // value={formData.powerWindowFeature}
                  checked={formData.abs}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      abs: event.target.checked,
                    })
                  }
                />{" "}
                ABS
              </div>

              <div className="mt-5 ml-5">
                <input
                  label={"Sunroof"}
                  type={"checkbox"}
                  name={"sunroof"}
                  // value={formData.acFeature}
                  checked={formData.sunroof}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      sunroof: event.target.checked,
                    })
                  }
                />{" "}
                Sunroof
              </div>

              <div className="mt-5 ml-5">
                <input
                  label={"Child Safety Locks"}
                  type={"checkbox"}
                  name={"childSafetyLocks"}
                  // value={formData.rearParkingCameraFeature}
                  checked={formData.childSafetyLocks}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      childSafetyLocks: event.target.checked,
                    })
                  }
                />{" "}
                Child Safety Locks
              </div>
              <div className="mt-5 ml-5">
                <input
                  label={"AirBag"}
                  type={"checkbox"}
                  name={"airbag"}
                  // value={formData.musicFeature}
                  checked={formData.airbag}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      airbag: event.target.checked,
                    })
                  }
                />{" "}
                AirBag
              </div>
            </div>
            <div className="mt-5 w-50">
              <select
                required
                className="w-full border-2 border-gray-400 p-2 rounded-md"
                label={"Select Dealer"}
                name={"dealerId"}
                value={formData.dealerId}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    dealerId: event.target.value,
                  })
                }
              >
                <option value="">Select Dealar</option>
                {dealarList?.list?.map((dealer) => (
                  <option key={dealer.dealer_id} value={dealer.dealer_id}>
                    {dealer.firstName + " " + dealer.lastName}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5 w-full">
              <Inputs
                required
                label={"Title"}
                type={"text"}
                name={"title"}
                value={formData.title}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    title: event.target.value,
                  })
                }
              />
            </div>
            <div className="mt-5">
              <Textarea
                required
                label="Description"
                name="description"
                value={formData.description}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    description: event.target.value,
                  })
                }
              />
            </div>

            <div className="mt-5 flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Update Car
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
