import LeftBanner from "../components/LeftBanner";
import LoginFrom from "../components/LoginFrom";

const LoginPage = () => {
  return (
    <div>
      <div className='xl:flex items-stretch'>
        {/* Left Banner */}
        <LeftBanner />
        {/* Login From  */}
        <LoginFrom />
      </div>
    </div>
  );
};

export default LoginPage;
