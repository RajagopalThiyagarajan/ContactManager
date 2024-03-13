import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import SearchItems from "./components/SearchItems";
import UpdateContact from "./components/UpdateContact";
import Footer from "./components/Footer";
import { DataProvider } from "./context/DataContext";
function App() {
  return (
    <div>
      <DataProvider>
        <Header />
        <AddContact />
        <SearchItems />
        <ContactList />
        <UpdateContact />
        <Footer />
      </DataProvider>
    </div>
  );
}
export default App;
