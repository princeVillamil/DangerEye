import './assets/style/EmergencyHotlinePage.css'

import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

const EmergencyHotlinePage = () =>{
  const invoices = [
    {
      id: '97412378923',
      client: 'Microsoft Corporation',
      issuedDate: '14 Jan 2022',
      issuedDay: 'Friday',
      dueDate: '01 Feb 2022',
      dueDay: 'Tuesday',
      amount: '$15,792',
      status: 'Pending',
    },
    {
      id: '97412378924',
      client: 'Tesla Inc.',
      issuedDate: '14 Jan 2022',
      issuedDay: 'Friday',
      dueDate: '01 Feb 2022',
      dueDay: 'Tuesday',
      amount: '$275',
      status: 'Pending',
    },
    {
      id: '97412378925',
      client: 'Coca Cola co.',
      issuedDate: '14 Jan 2022',
      issuedDay: 'Friday',
      dueDate: '01 Feb 2022',
      dueDay: 'Tuesday',
      amount: '$8,950,500',
      status: 'Pending',
    },
    {
      id: '97412378926',
      client: 'Nvidia Corporation',
      issuedDate: '14 Jan 2022',
      issuedDay: 'Friday',
      dueDate: '01 Feb 2022',
      dueDay: 'Tuesday',
      amount: '$98,218',
      status: 'Pending',
    },
  ];




  return(
    <div className="emergencyHotlinePage">
      <HeaderComponent/>
        <section className="emergencyHotlineSection">
          <div className="container">
            <h1>Emergency Hotline List</h1>
            {/* Search/Filter  */}


            <div className="container">
              <h2 className="heading">Invoices</h2>
              <div className="table-container">
                <table className="invoice-table">
                  <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col className="w-24" />
                  </colgroup>
                  <thead className="table-header">
                    <tr className="table-row">
                      <th className="table-cell">Invoice #</th>
                      <th className="table-cell">Client</th>
                      <th className="table-cell">Issued</th>
                      <th className="table-cell">Due</th>
                      <th className="table-cell text-right">Amount</th>
                      <th className="table-cell">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map((invoice, index) => (
                      <tr key={index} className="table-row">
                        <td className="table-cell">
                          <p>{invoice.id}</p>
                        </td>
                        <td className="table-cell">
                          <p>{invoice.client}</p>
                        </td>
                        <td className="table-cell">
                          <p>{invoice.issuedDate}</p>
                          <p className="subtext">{invoice.issuedDay}</p>
                        </td>
                        <td className="table-cell">
                          <p>{invoice.dueDate}</p>
                          <p className="subtext">{invoice.dueDay}</p>
                        </td>
                        <td className="table-cell text-right">
                          <p>{invoice.amount}</p>
                        </td>
                        <td className="table-cell text-right">
                          <span className="status">
                            <span>{invoice.status}</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>
      <FooterComponent/>
    </div>
  )
}


export default EmergencyHotlinePage;

