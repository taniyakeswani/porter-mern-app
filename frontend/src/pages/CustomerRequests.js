import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMyRequests } from '../services/api';

function CustomerRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await getMyRequests();
      setRequests(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Failed to fetch requests:', err);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/customer/login');
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: '#ffc107',
      assigned: '#17a2b8',
      'in-transit': '#007bff',
      delivered: '#28a745',
      cancelled: '#dc3545',
    };
    return colors[status] || '#6c757d';
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>My Requests</h2>
        <div>
          <button onClick={() => navigate('/customer/home')} style={styles.navButton}>
            Create Request
          </button>
          <button onClick={handleLogout} style={styles.logoutButton}>
            Logout
          </button>
        </div>
      </div>

      <div style={styles.content}>
        {loading ? (
          <p style={styles.loading}>Loading requests...</p>
        ) : requests.length === 0 ? (
          <p style={styles.empty}>No requests found. Create your first request!</p>
        ) : (
          <div style={styles.grid}>
            {requests.map((request) => (
              <div key={request._id} style={styles.card}>
                <div style={styles.cardHeader}>
                  <span style={{ ...styles.status, backgroundColor: getStatusColor(request.status) }}>
                    {request.status.toUpperCase()}
                  </span>
                  <span style={styles.date}>
                    {new Date(request.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div style={styles.cardBody}>
                  <p style={styles.label}>Pickup:</p>
                  <p style={styles.value}>{request.pickupAddress}</p>
                  <p style={styles.label}>Drop:</p>
                  <p style={styles.value}>{request.dropAddress}</p>
                  <p style={styles.label}>Weight:</p>
                  <p style={styles.value}>{request.weight} kg</p>
                  {request.notes && (
                    <>
                      <p style={styles.label}>Notes:</p>
                      <p style={styles.value}>{request.notes}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  navButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  logoutButton: {
    padding: '10px 20px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  loading: {
    textAlign: 'center',
    fontSize: '18px',
    marginTop: '50px',
  },
  empty: {
    textAlign: 'center',
    fontSize: '18px',
    marginTop: '50px',
    color: '#666',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #dee2e6',
  },
  status: {
    padding: '5px 12px',
    borderRadius: '20px',
    color: 'white',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  date: {
    fontSize: '14px',
    color: '#666',
  },
  cardBody: {
    padding: '15px',
  },
  label: {
    fontSize: '12px',
    color: '#666',
    marginTop: '10px',
    marginBottom: '5px',
  },
  value: {
    fontSize: '14px',
    color: '#333',
    marginBottom: '5px',
  },
};

export default CustomerRequests;