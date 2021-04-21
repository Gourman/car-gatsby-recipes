import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const getData = graphql`
  {
    site {
      info: siteMetadata {
        title
        description
        author
        person {
          age
          name
        }
        complexData {
          age
          name
        }
        simpleData
      }
    }
  }
`

const FetchData = () => {
  const data = useStaticQuery(getData)

  return (
    <div>
      <h2>Nombre: {data.site.info.person.name}</h2>
      {data.site.info.complexData.map((item, index) => (
        <p key={index}>
          Este es {item.name}:{item.age}
        </p>
      ))}
    </div>
  )
}

export default FetchData
