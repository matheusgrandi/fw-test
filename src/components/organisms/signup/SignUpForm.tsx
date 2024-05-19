import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
} from '@mui/material'

type FormInputs = {
  companyName: string
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  agree: boolean
}

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>()

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data)
  }

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete='off'
      className='px-[4.5rem] py-[4.281rem] max-sm:py-0 max-sm:px-0 h-full bg-white '
    >
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='companyName'
        label='Company Name'
        {...register('companyName', { required: 'Company Name is required' })}
        error={!!errors.companyName}
        helperText={errors.companyName?.message}
      />
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='firstName'
        label='First Name'
        {...register('firstName', { required: 'First Name is required' })}
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
      />
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='lastName'
        label='Last Name'
        {...register('lastName', { required: 'Last Name is required' })}
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
      />
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='email'
        label='Email Address'
        {...register('email', {
          required: 'Email is required',
          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='phone'
        label='Phone Number'
        {...register('phone', { required: 'Phone Number is required' })}
        error={!!errors.phone}
        helperText={errors.phone?.message}
      />
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='password'
        label='Password'
        type='password'
        {...register('password', { required: 'Password is required' })}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <FormControlLabel
        control={
          <Checkbox
            {...register('agree', { required: 'You must agree to the terms' })}
            color='primary'
          />
        }
        label={
          <Typography>
            I agree to Fieldwork's{' '}
            <a href='#terms' className='text-blue-500'>
              Terms of Service
            </a>
          </Typography>
        }
      />
      {errors.agree && (
        <Typography color='error' variant='body2'>
          {errors.agree.message}
        </Typography>
      )}
      <Button
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        className='mt-4'
      >
        Create account
      </Button>
      <Box className='mt-2 text-center'>
        <Typography>
          Already have an account?{' '}
          <a href='#signin' className='text-blue-500'>
            Sign In
          </a>
        </Typography>
      </Box>
    </Box>
  )
}

export default SignUpForm
