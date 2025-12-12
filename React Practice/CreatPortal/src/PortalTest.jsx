import { createPortal } from "react-dom"

function PortalTest() {
  return createPortal (
   
      <h1>Portel Test</h1> ,
      document.querySelector("#test-root")
   
  )
}

export default PortalTest
