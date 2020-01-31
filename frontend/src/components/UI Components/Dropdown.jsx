import React from "react"

// Using only as inspiration. From React Semantic UI.

const DropdownExampleSelection = () => {
  const friendOptions = [
    {
      key: "Jenny Hess",
      text: "Jenny Hess",
      value: "Jenny Hess",
      image: { avatar: true, src: "/images/avatar/small/jenny.jpg" }
    },
    {
      key: "Elliot Fu",
      text: "Elliot Fu",
      value: "Elliot Fu",
      image: { avatar: true, src: "/images/avatar/small/elliot.jpg" }
    },
    {
      key: "Stevie Feliciano",
      text: "Stevie Feliciano",
      value: "Stevie Feliciano",
      image: { avatar: true, src: "/images/avatar/small/stevie.jpg" }
    },
    {
      key: "Christian",
      text: "Christian",
      value: "Christian",
      image: { avatar: true, src: "/images/avatar/small/christian.jpg" }
    },
    {
      key: "Matt",
      text: "Matt",
      value: "Matt",
      image: { avatar: true, src: "/images/avatar/small/matt.jpg" }
    },
    {
      key: "Justen Kitsune",
      text: "Justen Kitsune",
      value: "Justen Kitsune",
      image: { avatar: true, src: "/images/avatar/small/justen.jpg" }
    }
  ]

  return (
    <input
      placeholder="Select Friend"
      options={friendOptions}
    />
  )
}

export default DropdownExampleSelection
