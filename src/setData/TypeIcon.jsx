export const TypeIcon = (type) => {
  switch (type) {
    case "불꽃":
      return import.meta.env.VITE_PUBLIC_URL + "/icon/fire.svg";
    case "물":
      return import.meta.env.VITE_PUBLIC_URL + "/icon/water.svg";
    case "풀":
      return import.meta.env.VITE_PUBLIC_URL + "/icon/grass.svg";
    case "전기":
      return import.meta.env.VITE_PUBLIC_URL + "/icon/electric.svg";
    case "벌레":
      return import.meta.env.VITE_PUBLIC_URL + "/icon/bug.svg";
    case "격투":
      return import.meta.env.VITE_PUBLIC_URL + "/icon/fight.svg";
    case "독":
      return import.meta.env.VITE_PUBLIC_URL + "/icon/poison.svg";
    case "땅":
      return import.meta.env.VITE_PUBLIC_URL + "/icon/ground.svg";
    case "바위":
      return import.meta.env.VITE_PUBLIC_URL + "/icon/rock.svg";
    case "비행":
      return import.meta.env.VITE_PUBLIC_URL + "/icon/fly.svg";
    case "에스퍼":
      return import.meta.env.VITE_PUBLIC_URL + "/icon/esper.svg";
    case "고스트":
      return import.meta.env.VITE_PUBLIC_URL + "/icon/ghost.svg";
    case "얼음":
      return import.meta.env.VITE_PUBLIC_URL + "/icon/ice.svg";
    case "드래곤":
      return import.meta.env.VITE_PUBLIC_URL + "/icon/dragon.svg";
    case "페어리":
      return import.meta.env.VITE_PUBLIC_URL + "/icon/fairy.svg";
    default:
      return import.meta.env.VITE_PUBLIC_URL + "/icon/normal.svg";
  }
};
