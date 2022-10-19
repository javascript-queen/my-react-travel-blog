import React from 'react'
import './Blog.css'
import location from '../img/location.svg'

export function Blog(props) {
  return (
    <div className='blog'>
      <img className="blog--img" src={props.info.image} alt="pointer"/>
      <div className='blog--text'>
        <img src={location} alt="pointer"/>
        <span>{props.info.location}</span>
        <a href={props.info.googleMapsUrl} target="_blank" rel="noreferrer"><span>View on Google Maps</span></a>
        <h1 className="title">{props.info.title}</h1>
        <h3>{props.info.data}</h3>
        <p>{props.info.description}</p>
      </div>
    </div>
  )
}