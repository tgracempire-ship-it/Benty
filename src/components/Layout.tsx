import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Navbar';
import ContactModal from './ContactModal';
import type { ModalType } from '../types';

export default function Layout() {
  const [modalType, setModalType] = useState<ModalType>(null);

  const handleOpenModal = (type: ModalType) => {
    setModalType(type);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setModalType(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      <Navbar onOpenModal={handleOpenModal} />
      
      {/* Context allows passing down the open modal function to any page if needed */}
      <Outlet context={{ openModal: handleOpenModal }} />
      
      {modalType && (
        <ContactModal type={modalType} onClose={handleCloseModal} />
      )}
    </>
  );
}
