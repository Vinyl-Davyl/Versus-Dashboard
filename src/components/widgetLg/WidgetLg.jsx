import "./widgetLg.css";
import React from 'react'


export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/6973949/pexels-photo-6973949.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Maggie Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">James Brown</span>
          </td>
          <td className="widgetLgDate">2 Sept 2020</td>
          <td className="widgetLgAmount">$100.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/5379056/pexels-photo-5379056.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Becky Almiron</span>
          </td>
          <td className="widgetLgDate">12 Jun 2021</td>
          <td className="widgetLgAmount">$1430.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Bart Samson</span>
          </td>
          <td className="widgetLgDate">3 Jan 2021</td>
          <td className="widgetLgAmount">$78.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
