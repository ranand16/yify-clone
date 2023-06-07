import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNWRkMDc0Y2YyZjAxOWQyOGVjODhkNWNkYmUyM2YxYiIsInN1YiI6IjY0N2M5NTE3Y2Y0YjhiMDBhODc4MTNjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xNUvJG8z9V9H35bJdwJZJpID5ssVPGLQyu0le1N2Gk8",
//   },
// };

// fetch(
//   "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
