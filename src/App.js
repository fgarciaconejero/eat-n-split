import FriendsList from "./components/FriendsList";
import FormAddFriends from "./components/FormAddFriends";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriends />
        <Button>Add friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}
