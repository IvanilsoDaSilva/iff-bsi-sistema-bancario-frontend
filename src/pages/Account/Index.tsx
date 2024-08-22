import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { LoginAccount } from "../../api/SistemaBancarioBackend";

import { ILoginAccount } from "../../interfaces/LoginAccount";
import InputField from "../../components/Input";

const Index = () => {
  const navigate = useNavigate();

  const [number, setNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [httpStatus, setHttpStatus] = useState("");

  const [, setCookie, removeCookie] = useCookies(["user"]);

  const handle = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const response = await LoginAccount({
      number,
      password,
    } as ILoginAccount);
    setHttpStatus(response.status.toString());
    if (response.status == 201) {
      removeCookie("user", { path: "/" });

      response.json().then((i) => {
        setCookie("user", i, { path: "/" });
        navigate("/account/dashboard");
      });
    }
  };

  return (
    <div className="min-h-fit my-page">
      <p>{httpStatus}</p>
      <form method="POST" onSubmit={handle} className="flex flex-col space-y-5">
        <div className="flex items-center space-x-1">
          <span className="text-primary">/</span>
          <a href="/" className="my-link">Home </a>
          <span className="text-primary">/</span>
          <a href="/account" className="my-link">Account </a>
        </div>

        <div className="animate-left-right-100">
          <InputField
            label="Numero da conta"
            type="text"
            name="number"
            value={number as string}
            onChange={(e: any) => setNumber(e.target.value)}
            required
          />
        </div>
        
        <div className="animate-left-right-200">
          <InputField
            label="Senha"
            type="password"
            name="password"
            value={password as string}
            onChange={(e: any) => setPassword(e.target.value)}
            required
          />
        </div>
        
        
        <div className="flex space-x-1">
          <button type="submit" className="my-button">Enviar</button>
          <button onClick={() =>{setNumber(""); setPassword("")}} className="my-button">Limpar</button>
        </div>

        <div className="flex space-x-1">
          <a href="/account/individual-person/create" className="my-link">Crie uma conta pessoal</a>
          <a href="/account/legal-person/create" className="my-link">Crie uma conta empresarial</a>
        </div>
      </form>
    </div>
  );
};

export default Index;
