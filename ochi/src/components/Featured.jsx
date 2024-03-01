import React from "react";

function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] pb-20">
        <h1 className="text-8xl tracking-tight">Featured projects</h1>
      </div>

      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardContainer  card w-1/2 h-[75vh] ">
            <h1 className="absolute bg-red-500 z-[9] text-8xl">shi</h1>
            <div className="card rounded-3xl w-full h-full overflow-hidden">
                <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="not found" className="w-full h-full bg-cover"/>
            </div>
          </div>
          <div className="cardContainer  card w-1/2 h-[75vh]  overflow-hidden ">
            <div className="card overflow-hidden rounded-3xl w-full h-full ">
                <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
