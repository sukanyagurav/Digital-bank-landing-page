import React from 'react'

const Container = ({children,classes=''}) => {
  return (
    <div className={`max-w-[1200px] mx-auto ${classes}`}>
      {children}
    </div>
  )
}

export default Container
