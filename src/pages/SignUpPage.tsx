import React from 'react'
import { Grid, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import SignUpForm from 'src/components/organisms/signup/SignUpForm'
import SignUpCard from 'src/components/organisms/signup/SignUpCard'
const SignUpPage: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid container className='flex w-full h-full justify-between'>
      <Grid item xs={1} md={8} className='flex max-md:flex-col'>
        <h3 className='font-normal text-2xl leading-9 pl-6'>FieldWork</h3>
        <Grid
          item
          xs={12}
          md={8}
          className={`flex items-center w-full justify-center max-md:justify-center max-md:pt-32`}
        >
          <SignUpCard />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        className={isMobile ? 'order-1 mb-4 md:mb-0' : ''}
      >
        <div className='bg-white p-8 rounded shadow h-full flex items-center justify-center'>
          <SignUpForm />
        </div>
      </Grid>
    </Grid>
  )
}

export default SignUpPage
