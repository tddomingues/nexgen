import { Container } from "./BackToTop.style";

import { useState } from "react";

const BackToTop = () => {
    const [distanceTop, setDistanceTop] = useState(0)

    window.addEventListener("scroll", ()  => {
        
        setDistanceTop(window.pageYOffset || document.documentElement.scrollTop)
        
       
    })

    const moveUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })

        
    }

  return (
    <Container>
      <div onClick={moveUp} style={distanceTop > 500 ? {display: "flex"} : {display: "none"}}><i className="bi bi-arrow-up-short"></i></div>
    </Container>
  )
}

export default BackToTop
