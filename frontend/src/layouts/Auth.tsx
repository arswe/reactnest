import { Button, Container, Stack, TextField, Typography } from '@mui/material'
import { ReactNode, useState } from 'react'

interface AuthProps {
  submitLabel: string
  onSubmit: (credentials: { email: string; password: string }) => Promise<void>
  children: ReactNode
  error?: string
}

const Auth = ({ submitLabel, onSubmit, children, error }: AuthProps) => {
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
          error={!!error}
          helperText={error}
          onChange={(event) => setEmail(event.target.value)}
        />

        <TextField
          id='password'
          hiddenLabel
          margin='normal'
          variant='outlined'
          type='password'
          placeholder='Password'
          value={password}
          error={!!error}
          helperText={error}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button variant='contained' onClick={() => onSubmit({ email, password })}>
          {submitLabel}
        </Button>
        {children}
      </Stack>
    </Container>
  )
}

export default Auth
