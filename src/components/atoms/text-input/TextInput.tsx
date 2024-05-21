import React, { InputHTMLAttributes, forwardRef } from 'react'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
  error?: string
  rightIcon?: React.ReactNode
  fullWidth?: boolean
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    { label, id, type = 'text', error, rightIcon, fullWidth = false, ...props },
    ref
  ) => {
    return (
      <div
        className={`flex flex-col mb-4 ${
          fullWidth ? 'w-full' : 'max-w-[20rem]'
        }`}
      >
        <label htmlFor={id} className='mb-2 text-sm font-medium text-gray-700'>
          {label}
        </label>
        <div className='relative'>
          <input
            id={id}
            type={type}
            ref={ref}
            className={`w-full h-[52px] pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 ${
              error ? 'border-red-500' : 'border-gray-400'
            }`}
            {...props}
          />
          {rightIcon && (
            <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
              {rightIcon}
            </div>
          )}
        </div>
        <div className='h-4 mt-1'>
          {error && <span className='text-sm text-red-500'>{error}</span>}
        </div>
      </div>
    )
  }
)

TextInput.displayName = 'TextInput'

export default TextInput
