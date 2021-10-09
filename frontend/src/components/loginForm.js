import { useForm } from 'react-hook-form';
import React, { useState } from 'react';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const onSubmit = () => {
    
  };

  const onChange = (value, key) => {
    setState({
      ...state,
      [key]: value,
    })
    console.log(state)
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <input {...register('Username')} placeholder="Title" type="text" value={state.Title} onChange={e => onChange(e.target.value, 'Title')} />
        </p>
        <p>
          <input {...register('Password')} placeholder="Authors" type="text" value={state.Authors} onChange={e => onChange(e.target.value, 'Authors')} />
        </p>
        <p>
          <input type="submit" />
        </p>
      </form>
    </div>
  );
};
export default LoginForm;
