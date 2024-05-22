import { ToastOptions } from 'react-toastify'

export type ToastType = 'success' | 'error' | 'info' | 'warning'

export default interface ToastContextType {
  showToast: (message: string, type: ToastType, options?: ToastOptions) => void
}
