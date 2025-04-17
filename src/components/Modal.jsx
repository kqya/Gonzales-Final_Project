import { createPortal } from 'react-dom';

export default function Modal({ children, onClose }) {
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-100">
      <div className="border-1 border-white bg-black text-white p-6 rounded-xl w-full max-w-md shadow-lg relative">
        <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white hover:bg-white transition hover-gradient-text bg-transparent border-none outline-none ring-0 focus:outline-none focus:ring-0 rounded-full p-2 transition-colors duration-200"
            style={{
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
              }}
            >
            ✖
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
