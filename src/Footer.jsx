import React from "react";

const day = new Date()
const year= day.getFullYear()

function Footer(){
  return(
    <footer className="footer">
    <p>copyright&copy; {year}</p>
    </footer>
  )
}

export default Footer