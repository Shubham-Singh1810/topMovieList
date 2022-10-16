import React from 'react'

export default function Card(props) {
  return (
    <div  style={{ boxShadow:"2px 2px 5px gray",padding:"5px", margin:"5px", borderRadius:"10px"}}>
            <img src={props.v.img.src} className="width" style={{height:"450px"}} alt={props.v.img.src} />
             <div style={{textAlign:"center", background:"whitesmoke"}}>
             <h1 style={{fontFamily:"cursive"}}>{props.v.title} <b>{props.v.ranking}</b></h1>
              <p><b>Distributor</b> {props.v.distributor}</p>
              <p><b>Amount</b> {props.v.amount}</p>
              <p><i>Reseled in the Year : </i> {props.v.year}</p>
             </div>
              
            </div>
  )
}
