import React from 'react'
import Layout from '../../components/Layout/Layout.jsx'
import UserMenu from '../../components/Layout/UserMenu.jsx'
import { useAuth } from '../../context/auth.jsx'

const Dashboard = () => {
  const[auth, setAuth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-flui m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.answer}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard