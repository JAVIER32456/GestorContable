import React, {useState} from 'react'
import TableMove from './tableMove'
import ModalNewMove from '../modal/modalNewMove'

const Accounting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='text-white'>
      <div className='pb-3 flex justify-end'>
        <button className='
          bg-green-500 
          hover:bg-green-600 
          transition-colors 
          font-bold py-2 px-4 
          rounded cursor-pointer' 
          onClick={openModal}>
          Agregar
        </button>
        <ModalNewMove isOpen={isModalOpen} onClose={closeModal} />
          
      </div>
      <TableMove />
    </div>
  )
}

export default Accounting
