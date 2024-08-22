import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [cookies, , removeCookie] = useCookies(["user"]);

  const navigate = useNavigate();

  return (
    // <>
    //   <ol>
    //     <ul>
    //       <a href="/account">Voltar</a>
    //     </ul>
    //   </ol>
    //   <ol>
    //     {
    //       cookies.user.cpf != null && (
    //         <ul>Nome: {cookies.user.name}</ul>
    //       )
    //     }
    //     {
    //       cookies.user.cnpj != null && (
    //         <ul>Razão social: {cookies.user.companyName}</ul>
    //       )
    //     }

    //     <ul>Agencia da conta: {cookies.user.agencyCode}</ul>
    //     <ul>Numero da conta: {cookies.user.number}</ul>
    //     <ul>Saldo da conta: R$ {cookies.user.balance}</ul>
    //   </ol>
    //   <ol>
    //     <ul>
    //       <a href="/account/withdraw ">Sacar</a>
    //     </ul>
    //     <ul>
    //       <a href="/account/deposit">Depositar</a>
    //     </ul>
    //     <ul>
    //       <a href="/account/transfer">Transferir</a>
    //     </ul>
    //     <ul>
    //       <a onClick={() => {removeCookie("user", { path: "/" }); navigate("/account");}}>Sair</a>
    //     </ul>
    //   </ol>
    // </>

    <div className="flex flex-col min-h-fit space-y-5 my-page">
      <div className="flex items-center space-x-1">
        <span className="text-primary">/</span>
        <a href="/" className="my-link">
          Home
        </a>
        <span className="text-primary">/</span>
        <a href="/account" className="my-link">
          Account
        </a>
        <span className="text-primary">/</span>
        <a href="/account/Dashboard" className="my-link">
          Dashboard
        </a>
      </div>

      <div className="bg-primary py-10 rounded space-y-5 animate-left-right-50">
        <div className="px-10">
          <span className="flex flex-col text-secondary font-bold">
            {cookies.user.cpf != null && <>Nome: {cookies.user.name}</>}
            {cookies.user.cnpj != null && (
              <>Razão social: {cookies.user.companyName}</>
            )}
          </span>
          <span className="flex flex-col text-secondary font-bold">
            Agencia da conta: {cookies.user.agencyCode}
          </span>
          <span className="flex flex-col text-secondary font-bold">
            Numero da conta: {cookies.user.number}
          </span>
          <span className="flex flex-col text-secondary font-bold">
            Saldo da conta: R$ {cookies.user.balance}
          </span>
        </div>
        <div className="bg-black h-10"></div>
      </div>

      <div className="flex space-x-1">
        <a href="/account/withdraw">
          <button className="my-button">Sacar</button>
        </a>
        <a href="/account/deposit">
          <button className="my-button">Depositar</button>
        </a>
        <a href="/account/transfer">
          <button className="my-button">Transferir</button>
        </a>
        <a
          onClick={() => {
            removeCookie("user", { path: "/" });
            navigate("/account");
          }}
        >
          <button className="my-button">Sair</button>
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
