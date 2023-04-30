import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Solar panels",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Battery",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Inverter",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Japanes panels",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Solar Frames",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Solar Cables",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Schneider Electric",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "AGS Battery",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "T Solars",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
