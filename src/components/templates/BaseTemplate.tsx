import { Box } from '@mui/material'
import { Link, Outlet } from 'react-router-dom'

type BaseTemplateProps = {
  hasHeader?: boolean
  helpEnabled?: boolean
}

const BaseTemplate = ({ hasHeader, helpEnabled = true }: BaseTemplateProps) => {
  return (
    <Box className='flex flex-col h-full bg-gray-50 p-6 sm:px-8 h-screen w-screen'>
      {hasHeader && (
        <h3 className='font-normal text-2xl pl-6 mb-6'>FieldWork</h3>
      )}
      <Outlet />
      {helpEnabled && (
        <Box className='flex justify-center items-center mt-6'>
          <span className='text-sm'>
            Need help? Contact{' '}
            <Link className='text-info' to={'#'}>
              FieldWork
            </Link>
          </span>
        </Box>
      )}
    </Box>
  )
}

export default BaseTemplate
