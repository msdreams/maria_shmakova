import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  label: string;
  variant?: "center" | "fullscreen";
  children: ReactNode;
};

const ease = [0.2, 0.7, 0.2, 1] as const;

export const Modal = ({ open, onClose, label, variant = "center", children }: ModalProps) => {
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={label}
          className={classNames(
            "fixed inset-0 z-50 flex",
            variant === "center" ? "items-center justify-center bg-ink/80 p-4 backdrop-blur-sm" : "bg-ink"
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            key="panel"
            className={classNames(
              variant === "center" ? "relative w-full max-w-6xl" : "relative h-[100dvh] w-full"
            )}
            initial={variant === "center" ? { opacity: 0, y: 16, scale: 0.98 } : { opacity: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={variant === "center" ? { opacity: 0, y: 8, scale: 0.98 } : { opacity: 0 }}
            transition={{ duration: 0.3, ease }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
