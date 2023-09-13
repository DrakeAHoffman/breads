const { router } = require('express')
const React = require('react')
const { db } = require('../models/bread')
const Default = require('./layouts/Default')


function Index ({breads, bakers, title})  {
  return (
  <Default title={title}>
      <h2>Index Page</h2>
      <h3>Bakers</h3>
      <ul>
          {
              bakers.map((baker)=> {
                  return (
                      <li key={baker._id}>
                          <a href={`/bakers/${baker._id}`}>{baker.name}</a>
                          {baker.name}
                      </li>
                  )
              })
          }
      </ul>
      <h3>Breads</h3>
      <ul>
    
  {breads.map((bread, index)=> {
    return (
      <li key={index}>
        <a href={`/breads/${bread._id}`}>
          {bread.name}
        </a>
      </li>
    )
  })}
  </ul>
  </Default>
  )
}








module.exports = Index


