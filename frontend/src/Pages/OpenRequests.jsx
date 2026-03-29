import { useEffect, useState } from "react";
import Login_Header from "../Components/Login_Header";
import OpenRequestCard from "../Components2/OpenRequestCard";
import profilePic from "../assets/image.png";
import { getOpenRequests, acceptRequest, getCurrentUser } from "../api/mockApi";
import "../styles/OpenRequests.css";

function OpenRequests() {
  const [requests, setRequests] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadRequests = async () => {
    try {
      const [requestData, userData] = await Promise.all([
        getOpenRequests(),
        getCurrentUser(),
      ]);

      setRequests(requestData);
      setCurrentUser(userData);
    } catch (error) {
      console.error("Error loading open requests:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRequests();
  }, []);

  const handleAccept = async (requestId) => {
    try {
      await acceptRequest(requestId);
      alert("Request accepted successfully!");
      setRequests((prev) => prev.filter((request) => request.id !== requestId));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="open-requests-page">
      <Login_Header />

      <main className="open-requests-main">
        <div className="open-requests-header">
          <h1>Open requests.</h1>
          <p>View who in your neighborhood needs help.</p>
        </div>

        {loading ? (
          <p>Loading requests...</p>
        ) : (
          <div className="open-requests-grid">
            {requests.map((request) => (
              <OpenRequestCard
                key={request.id}
                profilePic={profilePic}
                name={request.name}
                description={request.description}
                skills={request.skills}
                requesting={request.requesting}
                offer={request.offer}
                onAccept={
                  currentUser && currentUser.id !== request.userId
                    ? () => handleAccept(request.id)
                    : null
                }
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default OpenRequests;