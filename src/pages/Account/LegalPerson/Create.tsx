import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { CreateLegalPersonAccount } from "../../../api/SistemaBancarioBackend";

import { ILegalPersonAccount } from "../../../interfaces/LegalPersonAccount";
import InputField from "../../../components/Input";

const Create = () => {
  const navigate = useNavigate();

  const [companyName, setCompanyName] = useState<string>("");
  const [cnpj, setCnpj] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [accountType, setAccountType] = useState("CORRENTE");
  const [agencyCode, setAgencyCode] = useState("001");

  const [httpStatus, setHttpStatus] = useState("");

  const handle = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const response = await CreateLegalPersonAccount({
      companyName,
      cnpj,
      password,
      accountType,
      agencyCode,
    } as ILegalPersonAccount);
    setHttpStatus(response.status.toString());

    if (response.status == 201) {
      response
        .json()
        .then((i) => navigate("/account/legal-person/read", { state: i }));
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
          <a href="/account/legal-person/create" className="my-link">Create</a>
        </div>

        <div className="animate-left-right-100">
          <InputField
            label="Razão Social"
            type="text"
            name="companyName"
            value={companyName as string}
            onChange={(e: any) => setCompanyName(e.target.value)}
            required
          />
        </div>

        <div className="animate-left-right-200">
          <InputField
            label="CNPJ"
            type="text"
            name="cnpj"
            value={cnpj as string}
            onChange={(e: any) => setCnpj(e.target.value)}
            required
          />
        </div>

        <div className="animate-left-right-300">
          <InputField
            label="Senha"
            type="password"
            value={password as string}
            placeholder="Digite sua senha"
            name="password"
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </div>

        <div className="animate-left-right-400">
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

        <div className="animate-left-right-500">
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
          <button onClick={() =>{setCompanyName(""); setCnpj(""); setPassword(""); setAccountType(""); setAgencyCode("");}} className="my-button">Limpar</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
