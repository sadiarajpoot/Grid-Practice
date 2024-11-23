

export default function Home() {
  return (
<div>
  <div className="grid grid-rows-[60px_300px_200px_100px] sm:grid-rows-[30px_150px_100px_50px] md:grid-rows-[50px_200px_200px_100px] grid-cols-3 sm:grid-cols-2 md:grid-cols-3 bg-red-800 gap-3 p-9 content-center text-center font-bold text-2xl m-auto">
    <div className="col-span-3 sm:col-span-2 md:col-span-3 bg-gradient-to-br from-pink-700 via-blue-400 to-emerald-600">Header</div>
    <div className="row-span-2 sm:row-span-1 md:row-span-2 bg-gradient-to-br from-pink-400 via-green-400 to-yellow-600">SideBar</div>
    <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-br from-blue-400 via-green-300 to-yellow-300">Content  One</div>
    <div className="bg-gradient-to-r from-pink-500 to-yellow-300">Content  Two</div>
    <div className="bg-gradient-to-br from-purple-500 via-orange-400 to-yellow-300">Content  Three</div>
    <div className="col-span-3  sm:col-span-2 md:col-span-3 bg-gradient-to-br from-red-300 via-pink-400 to-yellow-300">Footer</div>
  </div>
</div>

    
  );
}
    // Grid
    // <div className="grid grid-cols-3 grid-rows-[200px_200px] gap-6">
    //   <div className="bg-green-400 col-span-3">BOX-1</div>
    //   <div className="bg-green-400 row-span-2">BOX-2</div>
    //   <div className="bg-green-400 col-span-2">BOX-3</div>
    // </div>

    
    //postions
    //relative,absoulate,fixed and sticky
   
  //   <div>
  //   <div className="w-80 h-80 bg-red- content-center text-center text-black bg-green-700">Box-1</div>
  //   <div className="w-80 h-80 bg-purple-600">Box-2</div>
  //   <div className="w-80 h-80 bg-yellow-600">Box-3</div>
  //   <div className="w-80 h-80 bg-orange-500">Box-3</div>
  // </div>

  //assigment Grid
//   <div className="grid grid-rows-[100px_200px_200px_100px] gap-2 text-white text-[30px] content-center p-3 bg-black text-center font-extrabold">
//   <div className="bg-red-400 col-span-3">Header</div>
//   <div className="bg-yellow-400 row-span-2">SideBar</div>
//   <div className="bg-purple-400 col-span-2">Content 1</div>
//   <div className="bg-green-400">Content 2</div>
//   <div className="bg-orange-400">Content 3</div>
//   <div className="bg-pink-400 col-span-3">Footer</div>
// </div>