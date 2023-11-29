import { data } from "src/assets/data.js";
import imageMap from "src/assets/map.png";
import imageDescription from "src/assets/description.png";
import imageBackground from "src/assets/background.jpg";
import { useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";

export function MapBuildingPage() {
  const [boothSelected, setBoothSelected] = useState();

  return (
    <div className="relative h-screen w-full bg-blue-800 flex flex-col items-center justify-center">
      <img src={imageBackground} className="absolute w-full h-full" />

      {boothSelected?.images.length >= 1 ? (
        <div className="w-full h-full bg-black absolute z-10 bg-opacity-40 flex justify-center items-center">
          <div className="relative bg-white">
            <img
              src={`images/banner/${boothSelected.images[0]}`}
              className="w-[600px]"
              alt={boothSelected.name}
            />
            <button
              onClick={() => {
                setBoothSelected(null);
              }}
              className="absolute -right-12 -top-12 bg-white rounded-full p-2"
            >
              <FiX size={24} />
            </button>
          </div>
        </div>
      ) : boothSelected?.images?.length == 0 ? (
        <div className="w-full h-full bg-black absolute z-10 bg-opacity-40 flex justify-center items-center">
          <div className="relative bg-white flex justify-center items-center">
            <img
              src={imageBackground}
              className="w-[600px]"
              alt={boothSelected.name}
            />
            <div className="absolute bg-white py-3 px-5 rounded-xl">
              <h1 className="text-4xl font-bold text-center">
                {boothSelected.name}
              </h1>
            </div>
            <button
              onClick={() => {
                setBoothSelected(null);
              }}
              className="absolute -right-12 -top-12 bg-white rounded-full p-2"
            >
              <FiX size={24} />
            </button>
          </div>
        </div>
      ) : null}

      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="w-11/12 bg-white relative rounded-[28px] p-5">
        <video width="955" controls autoPlay={true} loop muted>
          <source src="video/bpbrin.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <br />

      <div className="bg-white rounded-[28px] p-4 w-11/12 overflow-scroll flex relative">
        <img src={imageMap} className="relative" />

        {data.map((item) => {
          return (
            <ButtonCircle
              key={item.id}
              id={item.id}
              callback={(temp) => {
                setBoothSelected(temp);
              }}
              item={item}
            />
          );
        })}
      </div>

      <br />

      <div className="bg-white rounded-[28px] p-4 overflow-hidden w-11/12 relative">
        <img src={imageDescription} />
      </div>

      <br />
    </div>
  );
}

function ButtonCircle({ callback, item }) {
  return (
    <button
      onClick={() => {
        callback(item);
      }}
      style={{
        left: item?.coordinate?.left || 0,
        top: item?.coordinate?.top || 0,
        height: item?.size || 15,
        width: item?.size || 15,
      }}
      className={`absolute rounded-full`}
    ></button>
  );
}
