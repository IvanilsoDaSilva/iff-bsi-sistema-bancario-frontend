import { useEffect, useState } from "react";
import { AdminPageData } from "../../api/SistemaBancarioBackend";

const Index = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const getAdminPageData = async () => {
      try {
        const response = await AdminPageData();
        if (!response.ok) {
          throw new Error("Não conseguimos pegar os dados da API");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error("Erro ao buscar dados da página de administração:", err);
      }
    };

    getAdminPageData();
  }, []);

  return (
    <div className="flex flex-col space-y-5 min-h-fit my-page">
      <div className="flex items-center space-x-1">
        <span className="text-primary">/</span>
        <a href="/" className="my-link">
          Home
        </a>
        <span className="text-primary">/</span>
        <a href="/admin" className="my-link">
          Admin
        </a>
      </div>

      <table className=":">
        <thead className="bg-primary text-secondary">
          <tr>
            <th>ID</th>
            <th>Conta</th>
            <th>Saldo</th>
            <th>Nome</th>
            <th>Documento</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="odd:bg-primary/15">
              <td>{user.id}</td>
              <td>{user.number}</td>
              <td>{user.balance}</td>
              {user.legalPersonId != null ? (
                <>
                  <td>{user.companyName}</td>
                  <td>{user.cnpj}</td>
                </>
              ) : (
                <>
                  <td>{user.name}</td>
                  <td>{user.cpf}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
