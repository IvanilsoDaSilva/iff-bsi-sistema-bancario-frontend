import { Route, Routes, BrowserRouter } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Account from "./pages/Account/Index";
import Deposit from "./pages/Account/Deposit";
import Withdraw from "./pages/Account/Withdraw";
import Transfer from "./pages/Account/Transfer";

import Admin from "./pages/Admin/Index";
import Dashboard from "./pages/Account/Dashboard";
import IndividualPersonAccount from "./pages/Account/IndividualPerson/Index";
import LegalPersonAccount from "./pages/Account/LegalPerson/Index";
import IndividualPersonAccountCreate from "./pages/Account/IndividualPerson/Create";
import IndividualPersonAccountRead from "./pages/Account/IndividualPerson/Read";
import LegalPersonAccountCreate from "./pages/Account/LegalPerson/Create";
import LegalPersonAccountRead from "./pages/Account/LegalPerson/Read";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/account" element={<Account />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/account/dashboard" element={<Dashboard />} />
          <Route path="/account/deposit" element={<Deposit />} />
          <Route path="/account/withdraw" element={<Withdraw />} />
          <Route path="/account/transfer" element={<Transfer />} />
          <Route
            path="/account/individual-person/"
            element={<IndividualPersonAccount />}
          />
          <Route
            path="/account/legal-person/"
            element={<LegalPersonAccount />}
          />
          <Route
            path="/account/individual-person/create"
            element={<IndividualPersonAccountCreate />}
          />
          <Route
            path="/account/individual-person/read"
            element={<IndividualPersonAccountRead />}
          />
          <Route
            path="/account/legal-person/create"
            element={<LegalPersonAccountCreate />}
          />
          <Route
            path="/account/legal-person/read"
            element={<LegalPersonAccountRead />}
          />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
