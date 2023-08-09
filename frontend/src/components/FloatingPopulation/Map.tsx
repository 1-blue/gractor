import { Map as KakaoMap, MapMarker } from "react-kakao-maps-sdk";

const LATITUDE = 37.5114116206258;
const LONGITUDE = 127.079687718424;
const MARKER_COLOR = { RED: 0, BLUE: 1 };
const markers = [
  { src: "/red-marker.png", size: { width: 40, height: 40 } },
  { src: "/blue-marker.png", size: { width: 29, height: 42 } },
];

import type { Coords } from "@src/types";
interface Props {
  datas: (Pick<Coords, "latitude" | "longitude"> & { name: string })[];
  selectedList: string[];
  setSelectedList: React.Dispatch<React.SetStateAction<string[]>>;
}

/** 2023/08/07 - 유동인구 지도 컴포넌트 - by 1-blue */
const Map: React.FC<Props> = ({ datas, selectedList, setSelectedList }) => {
  const target = datas.find(
    (data) => data.name === selectedList[selectedList.length - 1]
  );
  const lat = target ? target.latitude : LATITUDE;
  const lng = target ? target.longitude : LONGITUDE;

  return (
    <KakaoMap center={{ lat, lng }} className="w-full h-[500px]" level={4}>
      {datas.map(({ latitude, longitude, name }) => (
        <MapMarker
          key={latitude + longitude}
          position={{ lat: latitude, lng: longitude }}
          title={name}
          onClick={() => {
            setSelectedList((prev) =>
              prev.includes(name)
                ? prev.filter((v) => v !== name)
                : [...prev, name]
            );
          }}
          image={
            selectedList.includes(name)
              ? markers[MARKER_COLOR.RED]
              : markers[MARKER_COLOR.BLUE]
          }
        />
      ))}
    </KakaoMap>
  );
};

export default Map;
