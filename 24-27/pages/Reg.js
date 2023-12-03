import React from 'react';

const Reg = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      password,
    };

    // Submit the form data to the server
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{
      backgroundColor: '#f2f2f2',
      padding: '20px',
      width: '400px',
      margin: '0 auto',
      borderRadius: '10px',
    }}>
      <h2>Registration Form</h2>

      <label style={{
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
      }}>First Name:
        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          style={{
            width: '95%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            outline: 'none',
            fontFamily: 'sans-serif',
            fontSize: '14px',
          }}
        />
      </label>

      <label style={{
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
      }}>Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          style={{
            width: '95%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            outline: 'none',
            fontFamily: 'sans-serif',
            fontSize: '14px',
          }}
        />
      </label>

      <label style={{
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
      }}>Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          style={{
            width: '95%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            outline: 'none',
            fontFamily: 'sans-serif',
            fontSize: '14px',
          }}
        />
      </label>

      <label style={{
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
      }}>Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          style={{
            width: '95%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            outline: 'none',
            fontFamily: 'sans-serif',
            fontSize: '14px',
          }}
        />
      </label>

      <button
        type="submit"
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '10px',
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          fontSize: '16px',
          '&:hover': {
            backgroundColor: '#0069d9',
          },
        }}
      >
        Register
      </button>
    </form>
  );
};

export default Reg;
