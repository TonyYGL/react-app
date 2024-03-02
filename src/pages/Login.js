import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  // 定義一個處理輸入變化的函數
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value }); // 更新狀態中的對應屬性
  };


  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='loginForm'>
        <TextField
          id="username"
          label="Username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleInputChange}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          name='password'
          type="password"
          value={formData.password}
          onChange={handleInputChange}
        />

        <Button variant="text"
          onClick={() => {
            alert(JSON.stringify(formData));
            navigate('/home', { state: { username: formData.username } });
          }}
        >Login
        </Button>
      </div>
    </Box>
  );
}

export default Login;