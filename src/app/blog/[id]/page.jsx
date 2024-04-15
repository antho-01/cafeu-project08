import React from 'react'

export default function Page({params}) {
      let persons = {
            david:[
                  {
                        name: "david",
                        stories: "loves coding"
                  }
            ],

            tom:[
                  {
                        name: "tom",
                        stories: "typing"
                  }
            ]
      }
      
      let data = persons[params.id];

  return (
    <div>
      {
            data.map((x)=>{
                  return (
                        <p>display {x.name} <br /> {x.stories}</p>
                  )
            })
      } 
      
    </div>
  )
}
