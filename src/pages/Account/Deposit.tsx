import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { DepositAccount } from "../../api/SistemaBancarioBackend";

import { IPersonAccount } from "../../interfaces/PersonAccount";
import InputField from "../../components/Input";

const Deposit = () => {
  const navigate = useNavigate();

  const [balance, setBalance] = useState<number | null>(null);

  const [httpStatus, setHttpStatus] = useState("");

  const [cookies] = useCookies(["user"]);

  const handle = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const response = await DepositAccount({
      id: cookies.user.id,
      balance,
    } as IPersonAccount);
    setHttpStatus(response.status.toString());

    if (response.status == 201) {
      navigate("/account/dashboard");
    }
  };

  return (
    <div className="min-h-fit my-page">
      <p>{httpStatus}</p>
      <form method="POST" onSubmit={handle} className="flex flex-col space-y-5">
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
          <span className="text-primary">/</span>
          <a href="/account/deposit" className="my-link">
            Sacar
          </a>
        </div>

        <InputField
          label="Valor"
          type="number"
          name="balance"
          value={balance as number}
          onChange={(e: any) => setBalance(e.target.value as unknown as number)}
          required
        />

        <div className="flex space-x-1">
          <button type="submit" className="my-button">
            Depositar
          </button>
          <button
            onClick={() => {
              setBalance(0);
            }}
            className="my-button"
          >
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Deposit;
