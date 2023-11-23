
import { useState } from 'react';
import Header from '../dashboard/Header';
import SignUp from './SignUp';

const ParentComponent = () => {
  const [openSignUp, setOpenSignUp] = useState(false);

  const openPopUp = () => {
    setOpenSignUp(true);
  };

  const closePopUp = () => {
    setOpenSignUp(false);
  };

  return (
    <div>
      <Header openSignUp={openPopUp} />
      <SignUp isAuthenticated open={openSignUp} handleClose={closePopUp} />
    </div>
  );
};

export default ParentComponent;
