import { atom, onMount, task } from "nanostores";

export const photos = atom([]);

export const fetchPhotos = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/photos?albumId=5&_start=0&_limit=20"
  );
  const fetchedPhotos = await response.json();
  console.log(fetchedPhotos);
  return fetchedPhotos;
};

onMount(photos, () => {
  task(async () => {
    photos.set(await fetchPhotos());
  });
});
