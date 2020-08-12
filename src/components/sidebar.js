import React from "react"
import { FaTimes } from "react-icons/fa"

const sidebar = ({}) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""} `}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
        {/* <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} /> */}
      </div>
    </aside>
  )
}

export default sidebar
