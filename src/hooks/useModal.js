import { useState } from "react"

const useModal = () => {
  const [isShowing, setIsShowing] = useState(true)

  function hideModal() {
    setIsShowing(false)
  }

  return {
    isShowing,
    hideModal,
  }
}

export default useModal
