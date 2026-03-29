import { useEffect, useState } from "react";
import Login_Header from "../Components/Login_Header";
import { getApprovedRequests } from "../api/mockApi";

function Approved() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadApproved = async () => {
      try {
        const data = await getApprovedRequests();
        setRequests(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadApproved();
  }, []);

  return (
    <div>
      <Login_Header />
      <main style={{ padding: "30px" }}>
        <h1>Approved Requests</h1>

        {loading ? (
          <p>Loading approved requests...</p>
        ) : requests.length === 0 ? (
          <p>No approved requests yet.</p>
        ) : (
          requests.map((request) => (
            <div key={request.id} className="inbox-card">
              <h3>{request.name}</h3>
              <p>
                <strong>Request:</strong> {request.requesting}
              </p>
              <p>
                <strong>Offer:</strong> {request.offer}
              </p>
              <p>
                <strong>Accepted By:</strong> {request.acceptedByName}
              </p>
            </div>
          ))
        )}
      </main>
    </div>
  );
}

export default Approved;