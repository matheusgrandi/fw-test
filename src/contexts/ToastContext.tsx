import { createContext, ReactNode } from 'react'
import { toast, ToastOptions } from 'react-toastify'
import { ToastType, ToastContextType } from 'src/types/models'

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined
)

interface ToastProviderProps {
  children: ReactNode
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const showToast = (
    message: string,
    type: ToastType,
    options?: ToastOptions
  ) => {
    toast[type](message, options)
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
    </ToastContext.Provider>
  )
}
