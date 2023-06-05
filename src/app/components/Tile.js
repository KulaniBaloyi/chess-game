
  "use client"
const Tile = ({number,img,id,tileNumber,x,y}) => {  
  function highlight(e){
   
  }
 

  
  const markPlace =(e)=>{

    //set attribute
    e.target.setAttribute('data-x',x)
    e.target.setAttribute('data-y',y)
    let dataX = e.target.getAttribute('data-x')
    let dataY = e.target.getAttribute('data-y')
    
    //Changing the value of the attributes so I can do math functions on them
    dataX = Math.floor(dataX)
    dataY = Math.floor(dataY)
    //console.log(document.querySelector('.chess-piece'))
   document.querySelectorAll('.chess-piece')[0].classList.remove('highlighted')
   document.querySelectorAll('.chess-piece')[0].classList.remove('active')
    //highlighting marked place
    document.querySelectorAll(`[data-x="${dataX}"][data-y="${dataY}"]`)[0].classList.add('highlighted');
   
  
//the block you clicks  and Y coordinates
   console.log('X: '+dataX + ' Y: '+dataY)
   
      //The logic for how a KNIGHT moves
      for(let h =1; h<3;h++){
        
   if (e.target.classList.contains(`bh-${h}`) || e.target.classList.contains(`wh-${h}`)){
    let j =2
    for(let i =1;i<3;i++){
      try{
         if( document.querySelectorAll(`[data-x="${dataX-i}"][data-y="${dataY+j}"]`)[0].firstElementChild.classList.contains('chess-piece')){
            //Dont print
         }else{
          document.querySelectorAll(`[data-x="${dataX-i}"][data-y="${dataY+j}"]`)[0].innerHTML+=`<p style='color:red; position:absolute;pointer-events:none; place-self:center;background-color:rgba(0,0,0,.15); border-radius:50%;height:1.5rem; width:1.5rem;'></p>`;
        document.querySelectorAll(`[data-x="${dataX-i}"][data-y="${dataY+j}"]`)[0].addEventListener('click',highlight)

         }   
        
      }catch(err){
        //do nothing
      }
      try{
        if( document.querySelectorAll(`[data-x="${dataX-i}"][data-y="${dataY-j}"]`)[0].firstElementChild.classList.contains('chess-piece')){
          //Dont print
        }
        else{
          document.querySelectorAll(`[data-x="${dataX-i}"][data-y="${dataY-j}"]`)[0].innerHTML+=`<p style='color:red; position:absolute;pointer-events:none; place-self:center;background-color:rgba(0,0,0,.15); border-radius:50%;height:1.5rem; width:1.5rem;'></p>`;
          document.querySelectorAll(`[data-x="${dataX-i}"][data-y="${dataY-j}"]`)[0].addEventListener('click',highlight)
        }
       
      }catch(err){
        //do nothing
      }
      try{
        if(document.querySelectorAll(`[data-x="${dataX+i}"][data-y="${dataY+j}"]`)[0].firstElementChild.classList.contains('chess-piece')){
          //dont print
        }
        else{
          document.querySelectorAll(`[data-x="${dataX+i}"][data-y="${dataY+j}"]`)[0].innerHTML+=`<p style='color:red; position:absolute;pointer-events:none; place-self:center;background-color:rgba(0,0,0,.15); border-radius:50%;height:1.5rem; width:1.5rem;'></p>`;
        document.querySelectorAll(`[data-x="${dataX+i}"][data-y="${dataY+j}"]`)[0].addEventListener('click',highlight)
        }
        
      }catch(err){
        //do nothing
      }
      try{
        if(document.querySelectorAll(`[data-x="${dataX+i}"][data-y="${dataY-j}"]`)[0].firstElementChild.classList.contains('chess-piece')){

        }else{
          document.querySelectorAll(`[data-x="${dataX+i}"][data-y="${dataY-j}"]`)[0].innerHTML+=`<p style='color:red; position:absolute;pointer-events:none; place-self:center;background-color:rgba(0,0,0,.15); border-radius:50%;height:1.5rem; width:1.5rem;'></p>`;
      document.querySelectorAll(`[data-x="${dataX+i}"][data-y="${dataY-j}"]`)[0].addEventListener('click',highlight)

        }
        
      
      }catch(err){
        //do nothing
      }
      j--
  }

   }
    
        
      }
   
   
  //The logic for how a ROOK
  for(let r =1; r<3;r++){
  if (e.target.classList.contains(`br-${r}`) || e.target.classList.contains(`wr-${r}`)){
  for (let i = 0; i < 9; i++) {
    if(i == y) {
      //here up and down
    
        for (let j = 0; j < 9; j++) {
            if(j == dataX) continue;
            try{
              document.querySelectorAll(`[data-x="${j}"][data-y="${i}"]`)[0].innerHTML+=`<p style='color:red; position:absolute; place-self:center;background-color:rgba(0,0,0,.15); border-radius:50%;height:1.5rem; width:1.5rem;'></p>`;

            }catch(err){
              //do nothing
            }
         
       }
   }
    if(i == dataY) continue;
    try{
      document.querySelectorAll(`[data-x="${dataX}"][data-y="${i}"]`)[0].innerHTML+=`<p style='color:red; position:absolute; place-self:center;background-color:rgba(0,0,0,.15); border-radius:50%;height:1.5rem; width:1.5rem;'></p>`;

    }catch(err){
      //do nothing
    }
 }
}
  }
//The logic for how a QUEEN moves
  if (e.target.classList.contains(`wq`) || e.target.classList.contains(`bq`)){
for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if(i == dataX && j == dataY) continue;
        if(j-i == dataY-dataX) {
            try{
              document.querySelectorAll(`[data-x="${i}"][data-y="${j}"]`)[0].innerHTML+=`<p style='color:red; position:absolute; place-self:center;background-color:rgba(0,0,0,.15); border-radius:50%;height:1.5rem; width:1.5rem;'></p>`;
            }catch(err){
              //do nothing
            }
            
        }
    }
}

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if(i == dataX && j == dataY) continue;
        if(i+j == dataX+dataY) {
          try{
            document.querySelectorAll(`[data-x="${i}"][data-y="${j}"]`)[0].innerHTML+=`<p style='color:red; position:absolute; place-self:center;background-color:rgba(0,0,0,.15); border-radius:50%;height:1.5rem; width:1.5rem;'></p>`;
          }catch(err){
            //do nothing
          }
            
        }
    }
}

for (let i = 0; i < 9; i++) {
    if(i == dataY) {
       
        for (let j = 0; j < 9; j++) {
            if(j == dataX) continue;
            try{
              document.querySelectorAll(`[data-x="${j}"][data-y="${i}"]`)[0].innerHTML+=`<p style='color:red; position:absolute; place-self:center;background-color:rgba(0,0,0,.15); border-radius:50%;height:1.5rem; width:1.5rem;'></p>`;
            }catch(err){
              //do nothing
            }
           
        }
    }
    if(i == dataY) continue;
    try{
      document.querySelectorAll(`[data-x="${dataX}"][data-y="${i}"]`)[0].innerHTML+=`<p style='color:red; position:absolute; place-self:center;background-color:rgba(0,0,0,.15); border-radius:50%;height:1.5rem; width:1.5rem;'></p>`;
    }catch(err){
      //do nothing
    }
    
}
}
//BISHOP
for(let b =1; b<3;b++){
  if (e.target.classList.contains(`bb-${b}`) || e.target.classList.contains(`wb-${b}`)){
for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if(i == dataX && j == dataY) continue;
        if(j-i == dataY-dataX) {
          try{
            document.querySelectorAll(`[data-x="${i}"][data-y="${j}"]`)[0].innerHTML+=`<p style='color:red; position:absolute; place-self:center;background-color:rgba(0,0,0,.15); border-radius:50%;height:1.5rem; width:1.5rem;'></p>`;
          
          }catch(err){
            //do nothing
          }
          
        }
     }
}
for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if(i == dataX && j == dataY) continue;
        if(i+j == dataY+dataX) {
          try{
            document.querySelectorAll(`[data-x="${i}"][data-y="${j}"]`)[0].innerHTML+=`<p style='color:red; position:absolute; place-self:center;background-color:rgba(0,0,0,.15); border-radius:50%;height:1.5rem; width:1.5rem;'></p>`;          
          }catch(err){
            //do nothing
          }            
          
        }
    }
}
  }
}
//PAWN
for(let p =1; p<9;p++){
  if (e.target.classList.contains(`wp-${p}`)){
 for (let i = 1; i < 3; i++) {
  try{
    document.querySelectorAll(`[data-x="${dataX}"][data-y="${dataY+i}"]`)[0].innerHTML+=`<p style='color:red; position:absolute; place-self:center;background-color:rgba(0,0,0,.15); border-radius:50%;height:1.5rem; width:1.5rem;'></p>`;
  
  }catch(err){
    //do nothing
  }
}
  }else if (e.target.classList.contains(`bp-${p}`)){
    for (let i = 1; i < 3; i++) {
     try{
       document.querySelectorAll(`[data-x="${dataX}"][data-y="${dataY-i}"]`)[0].innerHTML+=`<p style='color:red; position:absolute; place-self:center;background-color:rgba(0,0,0,.15); border-radius:50%;height:1.5rem; width:1.5rem;'></p>`;
     
     }catch(err){
       //do nothing
     }
   }
     }
}
  //KING
        
    if (e.target.classList.contains(`bk`)){
  for (let i = dataX-1; i < dataX+2; i++) {
    for (let j = dataY-1; j < dataY+2; j++) {
      if(i==dataX && j==dataY) continue;
      try{
        document.querySelectorAll(`[data-x="${i}"][data-y="${j}"]`)[0].innerHTML+=`<p style='color:red; position:absolute; place-self:center;background-color:rgba(0,0,0,.15); border-radius:50%;height:1.5rem; width:1.5rem;'></p>`;

      }catch(err){
        //do nothing
      }
    
    }
  }
    
 }else if (e.target.classList.contains(`wk`)){
  for (let i = dataX-1; i < dataX+2; i++) {
    for (let j = dataY-1; j < dataY+2; j++) {
      if(i==dataX && j==dataY) continue;
      try{
        document.querySelectorAll(`[data-x="${i}"][data-y="${j}"]`)[0].innerHTML+=`<p style='color:red; position:absolute; place-self:center;background-color:rgba(0,0,0,.15); border-radius:50%;height:1.5rem; width:1.5rem;'></p>`;

      }catch(err){
        //do nothing
      }
    
    }
  }
}
 }


  //this separates the tile number i.e A4 so i can style the letter and number separately
const tileNo= tileNumber.split('')  

    if (number %2===0){
      //White Tile
      return <div id={tileNumber} className={`relative chess-block font-bold text-[#ebecd0]  w-[62.5px] cursor-pointer hover:bg-red-600 aspect-square grid place-content-center bg-[#7fa650]`}>
        <p className={`${x==0?'flex':'hidden'} absolute top-1 left-1 text-xs`}>{tileNo[1]}</p>
        <p className={`${y==7?'flex':'hidden'} absolute bottom-1 right-1 text-xs`}>{tileNo[0]}</p>
        
        {img &&<div className={`${tileNumber} chess-piece w-[62px] h-[62px] bg-no-repeat bg-center`} style={{backgroundImage:`url(${img})`}}></div>}
        </div>
    }else{
      //Black tile
      return <div id={tileNumber} className={`relative chess-block font-bold text-[#7fa650] w-[62.5px] cursor-pointer hover:bg-red-600 aspect-square grid place-content-center bg-[#ebecd0]`}>
        <p className={`${x==0?'flex':'hidden'} absolute top-1 left-1 text-xs`}>{tileNo[1]}</p>
        <p className={`${y==7?'flex':'hidden'} absolute bottom-1 right-1 text-xs`}>{tileNo[0]}</p>
      {img &&<div className={` chess-piece w-[62px] h-[62px] bg-no-repeat bg-center`} style={{backgroundImage:`url(${img})`}}></div>}
        </div>
        
    }
  }
  
  export default Tile