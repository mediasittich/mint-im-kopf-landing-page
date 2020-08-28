import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import { Modal as RBModal } from "react-bootstrap"

const Modal = ({ isShowing, hide }) => {
  const data = useStaticQuery(graphql`
    {
      strapiGdpr {
        content
      }
    }
  `)
  return (
    <RBModal
      show={isShowing}
      onHide={hide}
      backdrop="static"
      keyboard={false}
      scrollable
      centered
    >
      <RBModal.Body>
        <ReactMarkdown source={data.strapiGdpr.content} />
      </RBModal.Body>
      <RBModal.Footer>
        <button onClick={hide} className="btn cta">
          Einverstanden
        </button>
      </RBModal.Footer>
    </RBModal>
  )
}

export default Modal
