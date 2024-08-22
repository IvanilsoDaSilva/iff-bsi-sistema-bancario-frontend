import { useNavigate } from "react-router-dom";
import { useState } from "react";

import InputField from "../../../components/Input";


import { CreateIndividualPersonAccount } from "../../../api/SistemaBancarioBackend";
import { IIndividualPersonAccount } from "../../../interfaces/IndividualPersonAccount";

const Create = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [rg, setRg] = useState<string>("");
  const [birth, setBirth] = useState<Date | null>(new Date());
  const [password, setPassword] = useState<string>("");
  const [accountType, setAccountType] = useState("CORRENTE");
  const [agencyCode, setAgencyCode] = useState("001");

  const [httpStatus, setHttpStatus] = useState("");


  const handle = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const response = await CreateIndividualPersonAccount({
      name,
      cpf,
      rg,
      birth,
      password,
      accountType,
      agencyCode,
    } as IIndividualPersonAccount);
    setHttpStatus(response.status.toString());

    if (response.status == 201) {
      response
        .json()
        .then((i) => navigate("/account/individual-person/read", { state: i }));
    }
  };

  return (
    <div className="min-h-fit my-page">
      <p>{httpStatus}</p>
      <form method="POST" onSubmit={handle} className="flex flex-col space-y-5">
        <div className="flex items-center space-x-1">
          <span className="text-primary">/</span>
          <a href="/" className="my-link">Home</a>
          <span className="text-primary">/</span>
          <a href="/account" className="my-link">Account</a>
          <span className="text-primary">/</span>
          <a href="/account/individual-person/create" className="my-link">Create</a>
        </div>

        <div className="animate-left-right-100">
          <InputField
            label="Nome"
            type="text"
            value={name as string}
            placeholder="Digite o seu nome"
            name="name"
            onChange={(e: any) => setName(e.target.value)}
          />
        </div>

        <div className="animate-left-right-200">
          <InputField
            label="CPF"
            type="text"
            value={cpf as string}
            placeholder="000.000.000-00"
            name="cpf"
            onChange={(e: any) => setCpf(e.target.value)}
          />
        </div>
        
        <div className="animate-left-right-300">
          <InputField
            label="RG"
            type="text"
            value={rg as string}
            placeholder="00.000.000-0"
            name="rg"
            onChange={(e: any) => setRg(e.target.value)}
          />
        </div>
        
        <div className="animate-left-right-400">
          <InputField
            label="Data de Nascimento"
            type="date"
            value={birth as unknown as string}
            placeholder="00.000.000-0"
            name="birth"
            onChange={(e: any) => setBirth(e.target.value as unknown as Date)}
          />
        </div>

        <div className="animate-left-right-500">
          <InputField
            label="Senha"
            type="password"
            value={password as string}
            placeholder="Digite sua senha"
            name="password"
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </div>

        <div className="animate-left-right-600">
          <div className="flex flex-col">
            <label htmlFor="accountType" className="my-label">Tipo da conta:</label>
            <select
              name="accountType"
              className="my-input"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)} required
            >
              <option value="CORRENTE">CORRENTE</option>
              <option value="POUPANCA">POUPANCA</option>
              <option value="PAGAMENTOS">PAGAMENTOS</option>
              <option value="UNIVERSITARIA">UNIVERSITARIA</option>
            </select>
          </div>
        </div>
        
        <div className="animate-left-right-700">
          <div className="flex flex-col">
            <label htmlFor="agencyCode" className="my-label">Código da agência: </label>
            <select
              name="agencyCode"
              className="my-input"
              value={agencyCode}
              onChange={(e) => setAgencyCode(e.target.value)}
            >
              <option value="001">001</option>
              <option value="014">014</option>
              <option value="055">055</option>
              <option value="666">666</option>
            </select>
          </div>
        </div>
        
        <div className="flex space-x-1">
          <button type="submit" className="my-button">Enviar</button>
          <button onClick={() =>{setName(""); setCpf(""); setRg(""); setBirth(new Date()); setPassword(""); setAccountType(""); setAgencyCode("");}} className="my-button">Limpar</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
