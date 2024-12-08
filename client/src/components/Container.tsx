import React from "react"

type ContainerProp = {
    children: React.ReactNode
}

const Container = ({children}: ContainerProp) => {
  return (
    <div className="mx-auto max-w-[1100px] px-10">
        {children}
    </div>
  )
}

export default Container