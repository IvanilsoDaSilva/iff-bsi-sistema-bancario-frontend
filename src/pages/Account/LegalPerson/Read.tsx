import { useLocation } from 'react-router-dom';

const Read = () => {
    const { state } = useLocation();

    return (
      // <>
      //   <ol>
      //     <ul>
      //       <a href="/account/legal-person/create">Voltar</a>
      //     </ul>
      //     <ul>
      //       <a href="/account">Login</a>
      //     </ul>
      //   </ol>
      //   <ol>
      //     <ul>Razão social: {state.companyName}</ul>
      //     <ul>CNPJ: {state.cnpj}</ul>
      //     <ul>Numero da conta: {state.number}</ul>
      //   </ol>
      // </>
      <div className="flex flex-col space-y-5 flex-grow min-h-fit my-section">
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
              Razão Social: {state.companyName}
            </span>
            <span className="flex flex-col text-secondary font-bold">
              CNPJ: {state.cnpj}
            </span>
            <span className="flex flex-col text-secondary font-bold">
              Numero da conta: {state.number}
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
  