import React, { useEffect, useState } from "react";
const data = [{}];
const Main = () => {
  const [checked, setChecked] = useState(0);
  const [data, setData] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [status, setStatus] = useState({});

  const fetchDetails = async () => {
    await fetch("http://localhost:8080/api/v1/get-flight/")
      .then((res) => res.json())
      .then((res) => setStatus(res));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8080/api/v1/get-flights")
      .then((res) => res.json())
      .then((res) => setData(res));
  };
  return (
    <div className="grid">
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit} className="max-w-6xl mt-20">
          <div className="flex  gap-5">
            <label>
              <input type="radio" name="trip" onChange={(e) => setChecked(0)} checked={checked === 0} />
              One Way
            </label>
            <label>
              <input type="radio" name="trip" onChange={(e) => setChecked(1)} checked={checked === 1} />
              Round Trip
            </label>
            <label>
              <input type="radio" name="trip" onChange={(e) => setChecked(2)} checked={checked === 2} />
              Multi-City
            </label>
          </div>
          <div className="flex gap-5 mt-10 px-5 min-w-full justify-between">
            <label htmlFor="from" className="grid">
              From
              <select onChange={(e) => setFrom(e.target.value)} name="from" id="from" className="">
                <option value="Delhi">Delhi</option>
              </select>
            </label>

            <label htmlFor="to" className="grid">
              To
              <select onChange={(e) => setTo(e.target.value)} name="to" id="to">
                <option value="Maharastra">Maharastra</option>
              </select>
            </label>

            <div>
              <p>Departure Date</p>
              <p>18 Jun 2023</p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div className="grid border-b-2">
              <h3 className="font-bold  text-gray-500 ">Add return trip</h3>
              <p> </p>
            </div>

            <div className="grid border-b-2">
              <h3 className="font-bold  text-gray-500">Passangers & Extra</h3>
              <p className="font-semibold text-gray-700">1</p>
            </div>
            <div className="grid border-b-2">
              <h3 className="font-bold  text-gray-500">Pay in(currency)</h3>
              <p className="font-semibold text-gray-700">Indian rupee</p>
            </div>
          </div>
          <div className="pt-5">
            <label>
              <input type="radio" name="radio" />
              Armed Forces
            </label>
            <label>
              <input type="radio" name="radio" required />
              Vaccinated
            </label>
            <label>
              <input type="radio" name="radio" />
              Family & Friends
            </label>
            <label>
              <input type="radio" name="radio" />
              Students
            </label>
            <label>
              <input type="radio" name="radio" required />
              Doctors & Nurses
            </label>
            <label>
              <input type="radio" name="radio" />
              Unaccompanied Minor
            </label>
          </div>
          <div className="flex justify-end pt-5">
            <button type="submit" className="bg-indigo-700 text-white p-2">
              Search Flight &#8594;
            </button>
          </div>
        </form>
      </div>
      <h1 className="justify-center flex max-w-6xl mt-10 text-2xl">All Available Flights</h1>
      <div className="flex justify-center ">
        <div className="max-w-6xl mt-10 border rounded-lg w-full h-96 overflow-scroll">
          <ul className="">
            <li className="max-w-6xl w-full bg-indigo-600 text-white flex px-2 items-center justify-between h-16 shadow-md">
              <p>FlightId</p>
              <p>From</p>
              <p>&#8594;</p>
              <p>To</p>
              <p>Price</p>
              <button></button>
            </li>
            {data.length === 0 ? (
              <li>Search flights...</li>
            ) : (
              data.map((item) => (
                <li className="w-full bg-gray-50 flex px-2 justify-between items-center h-16 shadow-md my-2">
                  <p>{item.flightId}</p>
                  <p>{item.from}</p>
                  <p>&#8594;</p>
                  <p>{item.to}</p>
                  <p>{item.price}/-</p>
                  <button
                    className="bg-indigo-700 rounded px-3 text-white py-2"
                  >
                    Book
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
      {status && (
        <div className="flex justify-center max-w-6xl">
          <div className="grid">
            <h1>Booking details</h1>
            <div className="w-full rounded bg-gray-50 shadow-md">{status.price}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
