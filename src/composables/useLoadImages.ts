export const useLoadAsset = (image: string) => {
  const imgUrl = new URL(image, import.meta.url).href;
  return imgUrl;
};
