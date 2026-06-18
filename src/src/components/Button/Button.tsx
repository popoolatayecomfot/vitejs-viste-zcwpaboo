import { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
    size?: ButtonSize
    }

    export const Button = ({ 
      variant = 'primary', 
        size = 'md', 
          children, 
            className = '',
              ...props 
              }: ButtonProps) => {
                const baseStyles = 'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2'
                  
                    const variants = {
                        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
                            secondary: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
                                outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
                                    ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
                                      }
                                        
                                          const sizes = {
                                              sm: 'px-3 py-1.5 text-sm',
                                                  md: 'px-4 py-2 text-base',
                                                      lg: 'px-6 py-3 text-lg'
                                                        }
                                                          
                                                            return (
                                                                <button 
                                                                      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
                                                                            {...props}
                                                                                >
                                                                                      {children}
                                                                                          </button>
                                                                                            )
                                                                                            }