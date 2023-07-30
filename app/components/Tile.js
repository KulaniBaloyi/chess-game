"use client"
const Tile = ({ isDark ,i,j}) => {
  return (
    <>
    {isDark==1? <div className={`h-5 aspect-square bg-[hsla(0,0%,100%,1)] grid place-content-center text-black`}>
      <p>{i}:{j}</p>
    </div>: 
    <div className={`bg-[#81b64c] grid place-content-center h-5 aspect-square text-white`}>
      <p>{i}:{j}</p>
    </div>}
   
    </>
    
  );
};

export default Tile
