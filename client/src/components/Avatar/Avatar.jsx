import React from 'react'

const Avatar = ({ children, backgroundColor,px, py, color, borderRadius, fontSize, curser}) => {
  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || 'black',
    borderRadius,
    fontSize,
    textAlign: "center",
    curser: curser || null,
    textDecoration: "none"
  }
  return (
    <div style={style}>
      { children }
    </div>
  )
}

export default Avatar