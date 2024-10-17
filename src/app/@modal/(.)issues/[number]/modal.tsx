'use client';

import { useRouter } from 'next/navigation';
import { type ElementRef, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import CloseMd from '@svgs/Close_MD.svg';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70">
      <dialog ref={dialogRef} className="rounded-xl" onClose={onDismiss}>
        <div className="p-10 w-[70vh] h-[70vh] overflow-auto scrollbar-hide">
          <button onClick={onDismiss} className="absolute top-5 right-5">
            <CloseMd />
          </button>
          {children}
        </div>
      </dialog>
    </div>,
    document.getElementById('modal-root')!,
  );
}
