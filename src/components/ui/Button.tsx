import type { ReactNode } from 'react'

interface ButtonProps {
  children?: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md'
  icon?: ReactNode
  disabled?: boolean
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

const variantClasses: Record<string, string> = {
  primary: 'bg-[#6C4CF1] text-white hover:bg-[#5b3fe0] border border-[#6C4CF1]',
  secondary: 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200',
  ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 border border-transparent',
  danger: 'bg-white text-red-500 hover:bg-red-50 border border-red-200',
}

const sizeClasses: Record<string, string> = {
  sm: 'px-2.5 py-1.5 text-xs',
  md: 'px-3.5 py-2 text-sm',
}

export function Button({
  children,
  variant = 'secondary',
  size = 'md',
  icon,
  disabled = false,
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-1.5 rounded-md font-medium transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {icon}
      {children}
    </button>
  )
}
