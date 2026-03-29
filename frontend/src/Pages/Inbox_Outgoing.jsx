import { useEffect, useState } from "react";
import Login_Header from "../Components/Login_Header";
import { getInboxByType } from "../api/mockApi";

function Inbox_Outgoing() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadInbox = async () => {
      try {
        const data = await getInboxByType("outgoing");
        setItems(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadInbox();
  }, []);

  return (
    <div>
      <Login_Header />
      <main style={{ padding: "30px" }}>
        <h1>Outgoing</h1>

        {loading ? (
          <p>Loading inbox...</p>
        ) : items.length === 0 ? (
          <p>No outgoing messages yet.</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="inbox-card">
              <h3>{item.otherUserName}</h3>
              <p>{item.message}</p>
              <p>
                <strong>Request:</strong> {item.requestTitle}
              </p>
            </div>
          ))
        )}
      </main>
    </div>
  );
}

export default Inbox_Outgoing;