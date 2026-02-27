import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}！ 訪問いただきありがとうございます！</h3>
      <button
        class="border rounded bg-gray-200 px-2 py-1 cursor-pointer dark:bg-white dark:text-black"
        onClick={() => setGreeting(randomMessage())}
      >
        新しい挨拶
      </button>
    </div>
  );
}
