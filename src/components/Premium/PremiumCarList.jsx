import { Link } from 'react-router-dom';
import lexus from '../../assets/lexus.jpg';
import mclaren from '../../assets/mclaren.jpeg';
import mercedes from '../../assets/mercedes.jpg';
import porsche from '../../assets/porsche.jpg';
import lrover from '../../assets/lrover.jpg';
import kia from '../../assets/kia.jpeg';
import jaguar from '../../assets/jaguar.jpeg';
import bmw from '../../assets/bmw.jpeg';
import audi from '../../assets/audi.jpeg';
import bmw1 from '../../assets/bmw1.png';
import volkswagon from '../../assets/volkswagon.jpg';
import ducati from '../../assets/ducati.jpg';

const PremiumCarList = () => {
    const cars = [
      {
        id: 1,
        price: '₹69,00,000',
        name: '2019 LEXUS RX450HL',
        emi: '₹1,18,646.33',
        year: 2020,
        kms: 38000,
        fuelType: 'HYBRID',
        state: 'TELANGANA',
        image: lexus, 
        booked: false,
      },
      {
        id: 2,
        price: '₹4,75,00,000',
        name: '2022 MCLAREN 720S SPIDER',
        emi: '₹8,16,768.21',
        year: 2022,
        kms: 1400,
        fuelType: 'PETROL',
        state: 'MAHARASHTRA',
        image: mclaren, 
        booked: true,
      },
      {
        id: 3,
        price: '₹76,00,000',
        name: '2022 MERCEDES AMG GLC43 4MATIC COUPE',
        emi: '₹1,30,682.91',
        year: 2022,
        kms: 28400,
        fuelType: 'PETROL',
        state: 'TELANGANA',
        image: mercedes, 
        booked: true,
      },
      {
          id: 4,
          price: '₹76,00,000',
          name: '2022 MERCEDES AMG GLC43 4MATIC COUPE',
          emi: '₹1,30,682.91',
          year: 2022,
          kms: 28400,
          fuelType: 'PETROL',
          state: 'TELANGANA',
          image: lexus, 
          booked: false,
        }, {
          id: 5,
          price: '₹76,00,000',
          name: '2022 PORSCHE',
          emi: '₹1,30,682.91',
          year: 2022,
          kms: 28400,
          fuelType: 'PETROL',
          state: 'TELANGANA',
          image: porsche, 
          booked: false,
        }, {
          id: 6,
          price: '₹76,00,000',
          name: '2020 LAND ROVER',
          emi: '₹1,30,682.91',
          year: 2022,
          kms: 28400,
          fuelType: 'PETROL',
          state: 'TELANGANA',
          image: lrover, 
          booked: false,
        }, {
          id: 7,
          price: '₹76,00,000',
          name: '2021 KIA SELTOS',
          emi: '₹1,30,682.91',
          year: 2022,
          kms: 28400,
          fuelType: 'PETROL',
          state: 'TELANGANA',
          image: kia, 
          booked: true,
        }, {
          id: 8,
          price: '₹76,00,000',
          name: '2022 JAQUAR',
          emi: '₹1,30,682.91',
          year: 2022,
          kms: 28400,
          fuelType: 'PETROL',
          state: 'TELANGANA',
          image: jaguar, 
          booked: false,
        }, {
          id: 9,
          price: '₹76,00,000',
          name: '2022 BMW',
          emi: '₹1,30,682.91',
          year: 2022,
          kms: 28400,
          fuelType: 'PETROL',
          state: 'TELANGANA',
          image: bmw, 
          booked: false,
        },
        {
          id: 10,
          price: '₹76,00,000',
          name: '2017 NEW AUDI',
          emi: '₹1,30,682.91',
          year: 2022,
          kms: 28400,
          fuelType: 'PETROL',
          state: 'TELANGANA',
          image: audi, 
          booked: false,
        }, {
          id: 11,
          price: '₹76,00,000',
          name: '2022 BMW',
          emi: '₹1,30,682.91',
          year: 2022,
          kms: 28400,
          fuelType: 'PETROL',
          state: 'TELANGANA',
          image: bmw1, 
          booked: true,
        },  {
          id: 12,
          price: '₹76,00,000',
          name: '2022 PORSCHE',
          emi: '₹1,30,682.91',
          year: 2022,
          kms: 28400,
          fuelType: 'PETROL',
          state: 'TELANGANA',
          image: porsche, 
          booked: false,
        },
        {
          id: 13,
          price: '₹76,00,000',
          name: '2021 KIA SELTOS',
          emi: '₹1,30,682.91',
          year: 2022,
          kms: 28400,
          fuelType: 'PETROL',
          state: 'TELANGANA',
          image: kia, 
          booked: true,
        },
        {
          id: 14,
          price: '₹76,00,000',
          name: '2022 DUCATI',
          emi: '₹1,30,682.91',
          year: 2022,
          kms: 28400,
          fuelType: 'PETROL',
          state: 'TELANGANA',
          image: ducati, 
          booked: false,
        },{
          id: 15,
          price: '₹76,00,000',
          name: '2022 MERCEDES AMG GLC43 4MATIC COUPE',
          emi: '₹1,30,682.91',
          year: 2022,
          kms: 28400,
          fuelType: 'PETROL',
          state: 'TELANGANA',
          image: lexus, 
          booked: false,
        },
        {
          id: 16,
          price: '₹76,00,000',
          name: '2022 JAQUAR',
          emi: '₹1,30,682.91',
          year: 2022,
          kms: 28400,
          fuelType: 'PETROL',
          state: 'TELANGANA',
          image: jaguar, 
          booked: false,
        },  {
          id: 17,
          price: '₹76,00,000',
          name: '2015 VOLKSWAGON',
          emi: '₹1,30,682.91',
          year: 2022,
          kms: 28400,
          fuelType: 'PETROL',
          state: 'TELANGANA',
          image: volkswagon, 
          booked: false,
        },  {
          id: 18,
          price: '₹69,00,000',
          name: '2019 LEXUS RX450HL',
          emi: '₹1,18,646.33',
          year: 2020,
          kms: 38000,
          fuelType: 'HYBRID',
          state: 'TELANGANA',
          image: lexus, 
          booked: false,
        },
    ];
  
    return (
      <div className="container mx-auto p-4">
        <div className="flex justify-between  items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-wrap">Total {cars.length} Results Found</h2>
          <div className="flex space-x-2">
            <button className="btn-filter  text-sm lg:text-xl font-bold">Filters</button>
            <div className="relative">
              <select className="form-select text-sm lg:text-xl">
                <option  value="price">Sort by: Price</option>
              </select>
            </div>
          </div>
        </div>
        <Link to="/CarImageCarousel">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-10 ">
          {cars.map((car) => (
            <div key={car.id} className="border rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <img src={car.image} alt={car.name} className="object-cover" />
                {car.booked && (
                  <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">BOOKED</span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{car.price}</h3>
                <p className="font-semibold mt-1">{car.name}</p>
                <p className="text-sm font-semibold text-gray-500 mt-1">EMI STARTS @ {car.emi}</p>
                <div className="grid grid-cols-2 gap-2 mt-8">
                  <div>
                    <p className="text-xs font-semibold text-gray-500">REG. YEAR</p>
                    <p className="text-sm font-semibold">{car.year}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500">KMS</p>
                    <p className="text-sm font-semibold">{car.kms}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500">FUEL TYPE</p>
                    <p className="text-sm font-semibold">{car.fuelType}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500">REG. STATE</p>
                    <p className="text-sm font-semibold">{car.state}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </Link>
        <div className="flex justify-center items-center mb-20">
        <button className="bg-black text-white text-sm font-semibold py-3 px-6 rounded-lg w-48 hover:bg-gray-800 ">
          SHOW MORE
        </button>
        
      </div>
      </div>
    );
  };
  
  export default PremiumCarList;
  