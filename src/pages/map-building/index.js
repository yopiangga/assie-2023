import { data } from "src/assets/data.js";
import imageMap from "src/assets/map.png";
import imageDescription from "src/assets/description.png";
import imageBackground from "src/assets/background.jpg";

export function MapBuildingPage() {
  return (
    <div className="relative h-screen w-full bg-blue-800 flex flex-col items-center justify-center">
      <img src={imageBackground} className="absolute w-full h-full" />

      <br />
      <br />
      <br />

      <div className="bg-white rounded-[28px] p-4 w-11/12 overflow-scroll flex relative">
        <img src={imageMap} className="relative" />

        {data.map((item) => {
          return (
            <ButtonCircle
              key={item.id}
              id={item.id}
              callback={(id) => {
                console.log(id);
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

      <div className="w-11/12 h-[520px] bg-white relative rounded-[28px]"></div>

      {/* <br />
      <br />

      <div className="text-center relative">
        <h1 className="text-white font-bold text-[80px]">ASSIE 2023</h1>
      </div>
      <br />
      <br /> */}
    </div>
  );
}

function ButtonCircle({ id, callback, item }) {
  return (
    <button
      onClick={() => {
        callback(id);
      }}
      style={{
        left: item?.coordinate?.left || 0,
        top: item?.coordinate?.top || 0,
        height: item?.size || 15,
        width: item?.size || 15,
      }}
      className={`bg-yellow-400 absolute rounded-full`}
    ></button>
  );
}
