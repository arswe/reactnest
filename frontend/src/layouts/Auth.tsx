import { Button, Container, Stack, TextField, Typography } from '@mui/material'
import { ReactNode, useState } from 'react'

interface AuthProps {
  submitLabel: string
  onSubmit: (credentials: { email: string; password: string }) => Promise<void>
  children?: ReactNode
}

const Auth = ({ submitLabel, onSubmit, children }: AuthProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Container maxWidth='sm'>
      <Stack
        direction={{ xs: 'column', sm: 'column' }}
        alignSelf='center'
        justifyContent={'center'}
        height={'60vh'}
        spacing={1}
        useFlexGap
        gap={4}
        sx={{ p: 2, width: { xs: '100%', sm: 'auto' } }}
      >
        <Typography variant='h4' sx={{ py: 4 }} align='center'>
          {submitLabel}
        </Typography>

        <TextField
          id='Email'
          hiddenLabel
          margin='normal'
          variant='outlined'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputProps={{ autoComplete: 'off' }}
        />

        <TextField
          id='password'
          hiddenLabel
          margin='normal'
          variant='outlined'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          inputProps={{ autoComplete: 'off' }}
        />
        <Button variant='contained' color='primary' onClick={() => onSubmit({ email, password })} sx={{ my: '1rem' }}>
          {submitLabel}
        </Button>

        {children}
      </Stack>
    </Container>
  )
}

export default Auth
