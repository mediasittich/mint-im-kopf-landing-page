import React from "react"
import { FaTimes } from "react-icons/fa"
import { Link } from "gatsby"

const sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""} `}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <Link styleClass={`${isOpen ? "sidebar-links" : ""}`} />
      </div>
    </aside>
  )
}

export default sidebar
