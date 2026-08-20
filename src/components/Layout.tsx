import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ContactModal from './ContactModal';
import type { ModalType } from '../types';

export default function Layout() {
  const [modalType, setModalType] = useState<ModalType>(null);
  const location = useLocation();

  const handleOpenModal = (type: ModalType) => {
    setModalType(type);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setModalType(null);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Optional: observer.unobserve(entry.target) if you only want it to reveal once
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const observeElements = () => {
      const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
      hiddenElements.forEach((el) => observer.observe(el));
    };

    // Small timeout to allow React to render the new route components
    const timeout = setTimeout(observeElements, 100);
    
    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [location.pathname]); // Re-run when the route changes!

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
