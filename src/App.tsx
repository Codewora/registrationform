import './App.css';
import styled from '@emotion/styled';
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { useScreenSize } from './screenSize';

const CustomeContainer = styled(({ isMobile, ...other }: any) => (
  <div {...other} />
))`
  max-width: 1200px;
  width: ${(props) => (props.isMobile ? '90%' : '1200px')};
  box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  height: 600px;
`;

const ContainerLogin = styled.div`
  width: 45%;
  box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContainerRegister = styled(({ isMobile, ...other }: any) => (
  <div {...other} />
))`
  width: ${(props) => (props.isMobile ? '100%' : '55%')};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const CustomInput = styled(({ isMobile, ...other }: any) => (
  <input {...other} />
))`
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
  outline: none;
  border: none;
  background: transparent;
  padding: 12px;
  margin: 10px 0;
  border-radius: 8px;
  width: ${(props) => (props.isMobile ? '90%' : '400px')};
`;

const FormTitle = styled.p`
  color: #181818;
  font-size: 32px;
  font-weight: 700;
`;

const IconContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 6px;
  border: 1px solid #bdbbbb;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #bdbbbb;
  border-radius: 100%;
  cursor: pointer;
`;

const CustomButton = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  outline: none;
  border: none;
  color: #ffffff;
  background: #2550b7;
  cursor: pointer;
`;

const FormText = styled.p`
  color: #898989;
  font-size: 15px;
  padding: 20px;
`;

const SignInContainer = styled.p`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px 20px 0 0;
`;

const App = () => {
  const screen = useScreenSize();

  console.log(screen);

  return (
    <div className='App'>
      <CustomeContainer isMobile={['xs', 'sm'].includes(screen)}>
        {!['xs', 'sm'].includes(screen) ? (
          <ContainerLogin>
            <FormTitle>Welcome Back !</FormTitle>
            <FormText>To keep connected with us please login.</FormText>
            <CustomButton>SIGN IN</CustomButton>
          </ContainerLogin>
        ) : null}
        <ContainerRegister isMobile={['xs', 'sm'].includes(screen)}>
          <FormTitle>Create Account</FormTitle>
          <IconContainer>
            <Icon>
              <FaFacebookF />
            </Icon>
            <Icon>
              <FaLinkedinIn />
            </Icon>
            <Icon>
              <FaTwitter />
            </Icon>
          </IconContainer>
          <FormText>or use email for the registeration</FormText>
          <ContainerInput>
            <CustomInput
              type='text'
              placeholder='Username'
              isMobile={screen === 'xs'}
            />
            <CustomInput
              type='text'
              placeholder='Email'
              isMobile={screen === 'xs'}
            />
            <CustomInput
              type='password'
              placeholder='Password'
              isMobile={screen === 'xs'}
            />
          </ContainerInput>
          <CustomButton>SIGN UP</CustomButton>
          {['xs', 'sm'].includes(screen) && (
            <SignInContainer>
              <FormText>
                Don't have account? <a href='#'>Sign in</a>
              </FormText>
            </SignInContainer>
          )}
        </ContainerRegister>
      </CustomeContainer>
    </div>
  );
};

export default App;
