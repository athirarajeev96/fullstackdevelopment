import React from 'react';
import Card from './Card';
let planList = ["Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain", "Monthly Status Reports"];
function App() {
  let data = [
    {
      plan: "FREE",
      price: 0,
      user: "Single User",
      storage: "5 GB Storage",
      plans: planList
    },
    {
      plan: "PLUS",
      price: 9,
      user: "5 Users",
      storage: "50 GB Storage",
      plans: planList
    },
    {
      plan: "PRO",
      price: 49,
      user: "Unlimited Users",
      storage: "150 GB Storage",
      plans: planList
    }
  ];
 return <>
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {data.map((e, i) => (
            <Card key={i} data={e} />
          ))}
        </div>
      </div>
    </section>
    </>
}

export default App;
