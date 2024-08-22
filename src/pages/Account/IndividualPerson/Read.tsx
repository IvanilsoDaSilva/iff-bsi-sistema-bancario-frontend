import { useLocation } from 'react-router-dom';

const Read = () => {
    const { state } = useLocation();

    return (
      <div className="flex flex-col space-y-5 min-h-fit my-page">
        <div className="flex items-center space-x-1">
          <span className="text-primary">/</span>
          <a href="/" className="my-link">Home</a>
          <span className="text-primary">/</span>
          <a href="/account" className="my-link">Account</a>
          <span className="text-primary">/</span>
          <a href="/account/individual-person/read" className="my-link">Read</a>
        </div>

        <div className="bg-primary py-10 rounded space-y-5 animate-left-right-50">
          <div className="px-10">
            <span className="flex flex-col text-secondary font-bold">
              Nome: {state.name}
            </span>
            <span className="flex flex-col text-secondary font-bold">
              CPF: {state.cpf}
            </span>
            <span className="flex flex-col text-secondary font-bold">
              RG: {state.rg}
            </span>
            <span className="flex flex-col text-secondary font-bold">
              Nascimento: {state.birth}
            </span>
            <span className="flex flex-col text-secondary font-bold">
              Numero da Conta: {state.number}
            </span>
          </div>
          <div className="bg-black h-10"></div>
        </div>
          
          <div className="flex space-x-1">
            <a href="/account">
              <button className="my-button">Login</button>
            </a>
          </div>
      </div>
    );
  };
  
  export default Read;
  