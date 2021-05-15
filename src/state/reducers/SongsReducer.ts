
export type Song = {
  title: string;
  duration: string;
};


export const songsReducer: () => Song[] = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All star", duration: "3:14" },
    { title: "I Want it That Way", duration: "1: 45" },
  ];
};