

const Rooms=()=>(
      
  <layout >
  {/* <header>Room 1 &nbsp;&nbsp;
  <input type ="checkbox" checked></input></header> */}
 
 
 
  <div className="column">
    Adults <br />
    (18+)  <br /> 
      <select>
          <option selected> 1 </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
      </select>  
      </div>
      <div className="column1">
     
    Children <br />
    (0-17) <br />    
      <select>
          <option selected> 0 </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
      </select> 
      </div>
     
  

  <style jsx global>{`
 body{ 
   text-align: center;
 }
 layout{
  display: inline-block;
  border-style: ridge;
  margin: 40px; 
  border-radius: 10px;
}

 header{
   background: lightgrey;
   padding: 10px;
 }
 .column{
   width: 70px;
   float: left;
   padding:5px;
 }
 .column1{
  width: 70px;
  float: left;
  padding: 5px;
}


 `}

 </style>
<br />
    
  

    </layout>

)

export default Rooms;