
const CarSummary = () => {
  const features = [
    { label: 'Reg. State', value: 'Odisha', icon: '🗺️' },
    { label: 'Vehicle Type', value: 'Sports Sedan', icon: '🚗' },
    { label: 'Registration Year', value: '2017', icon: '📅' },
    { label: 'Engine', value: '3996cc, Turbocharged, V8, DOHC', icon: '🔧' },
    { label: 'Transmission', value: '8-Speed PDK Automatic Transmission', icon: '⚙️' },
    { label: 'Ownership', value: '1st', icon: '👤' },
    { label: 'Peak Torque', value: '770Nm @ 2000 - 4500 RPM', icon: '💪' },
    { label: 'Peak Power', value: '550PS / 542BHP @ 5750 RPM', icon: '🏎️' },
    { label: 'Doors', value: '5', icon: '🚪' },
    { label: 'Drive', value: 'AWD', icon: '🛞' },
    { label: 'Seating Capacity', value: '4', icon: '🪑' },
    { label: 'Manufacturing Year', value: '2016', icon: '🏭' },
    { label: 'Fuel', value: 'Petrol', icon: '⛽' },
    { label: 'Kms done', value: '6550', icon: '🛣️' },
    { label: 'Exterior Color', value: 'Sapphire Blue Metallic', icon: '🎨' },
  ];

  return (
    <div className=" w-full p-16">
      <h2 className="text-2xl font-semibold mb-6">CAR SUMMARY</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="text-3xl mb-2">{feature.icon}</div>
            <p className="text-sm text-gray-600 mb-1 ">{feature.label}</p>
            <p className="text-lg font-bold text-gray-800 text-center">{feature.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarSummary;
