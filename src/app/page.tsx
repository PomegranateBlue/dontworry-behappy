import Link from "next/link";

const App = () => {
  return (
    <div>
      <span>Home</span>
      <br />
      <span>Start of Project</span>
      <ul>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default App;
