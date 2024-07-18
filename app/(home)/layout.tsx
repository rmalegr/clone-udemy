import Topbar from "@/components/layout/Topbar"
import React from "react"

const HomeLayout
  = ({ children }: { children: React.ReactNode }) => {
    return (
      <div>
        <Topbar />
        {children}
      </div>
    )
  }

export default HomeLayout
