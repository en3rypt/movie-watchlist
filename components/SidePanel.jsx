import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Transition } from '@headlessui/react'

const SidePanel = ({ show, onBackdropClick, children }) => {
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
          className='fixed inset-0 z-50'
          enter='transition-colors ease-linear duration-100'
          enterFrom='bg-black/0'
          enterTo='bg-black/50'
          entered='bg-black/50'
          leave='transition-colors ease-linear delay-300 duration-100'
          leaveFrom='bg-black/50'
          leaveTo='bg-black/0'
          onClick={handleCloseClick}
        >
          <Transition.Child
            as='aside'
            className='absolute inset-y-0 w-4/5 sm:w-96 bg-white'
            enter='transition-all ease-in-out delay-100 duration-300'
            enterFrom='-right-96'
            enterTo='right-0'
            entered='right-0'
            leave='transition-all ease-in-out duration-300'
            leaveFrom='right-0'
            leaveTo='-right-96'
            onClick={e => e.stopPropagation()}
          >
            {children}
          </Transition.Child>
        </Transition>,
        document.getElementById('overlay-root')
      )
    : null
}

export default SidePanel
