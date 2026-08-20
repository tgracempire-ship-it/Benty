import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Re-run whenever DOM changes (simple implementation for SPA routes)
    const observeElements = () => {
      const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
      hiddenElements.forEach((el) => observer.observe(el));
    };

    observeElements();
    
    // Poll briefly after mount to catch elements rendered by child routes
    const timeout = setTimeout(observeElements, 100);
    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

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
