import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Transition } from '@headlessui/react'

const Modal = ({ show = false, onBackdropClick = () => {}, children }) => {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const handleCloseClick = e => {
    e.preventDefault()
    onBackdropClick()
  }

  return isBrowser
    ? ReactDOM.createPortal(
        <Transition
          show={show}
          className='fixed inset-0 z-50 flex items-center justify-center'
          enter='transition-colors ease-linear duration-100'
          enterFrom='bg-black/0'
          enterTo='bg-black/50'
          entered='bg-black/50'
          leave='transition-colors ease-linear delay-100 duration-100'
          leaveFrom='bg-black/50'
          leaveTo='bg-black/0'
          onClick={handleCloseClick}
        >
          <Transition.Child
            enter='transition-transform ease-in-out delay-100 duration-100'
            enterFrom='scale-0'
            enterTo='scale-100'
            leave='transition-transform ease-in-out duration-100'
            leaveFrom='scale-100'
            leaveTo='scale-0'
          >
            {children}
          </Transition.Child>
        </Transition>,
        document.getElementById('modal-root')
      )
    : null
}

export default Modal
