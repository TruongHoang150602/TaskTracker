import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import account from '../../../data/account';
// components
import Iconify from '../../../components/iconify';
// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const username = useRef(null);
  const password = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    console.log(username.current.value , password.current.value);
    // for ( const user1 of account){
    //   if( user1.username === username.current.value && user1.password === password.current.value){
    //     sessionStorage.setItem("username", username.current.value);
    //     navigate('/dashboard', { replace: true });
    //     break;
    //   }
    // }
    account.forEach( (item)=>{
      if( item.username === username.current.value && item.password === password.current.value){
        sessionStorage.setItem("username", username.current.value);
        navigate("/dashboard", { replace: true });
        
      }
    })
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField inputRef={username} name="email" label="Email address" />

        <TextField
          inputRef={password}
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Login
      </LoadingButton>
    </>
  );
}
