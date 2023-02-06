import { atom, onMount, task } from "nanostores";

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
interface FetchPhotos {
  isLoading: boolean;
  data: Photo[];
}

export const photos = atom<FetchPhotos>({ isLoading: false, data: [] });


onMount(photos, () => {
  photos.set({ isLoading: true, data: [] });

  task(async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?albumId=5&_start=0&_limit=20"
      );

      photos.set({ isLoading: false, data: await response.json() });
    } catch (e) {
      console.log(e);
    }
  });
});
