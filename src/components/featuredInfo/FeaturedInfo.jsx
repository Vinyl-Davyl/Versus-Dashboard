import React from 'react';
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";


export default function FeaturedInfo() {
  return (
    <div className="featured">
      {/* Featured Item */}
      <div className="featuredItem">
        <span className="featuredTitle">
          Total Revenue
        </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            $2,415
          </span>
          <span className="featuredRate">
            -11.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">
          Compared to last month
        </span>
      </div>

      {/* Featured Item 2 */}
      <div className="featuredItem">
        <span className="featuredTitle">
          Product Sales
        </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            $4,415
          </span>
          <span className="featuredRate">
            -6.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">
          Compared to last month
        </span>
      </div>

      {/* Featured Item 3 */}
      <div className="featuredItem">
        <span className="featuredTitle">
          Avg Cost
        </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            $2,225
          </span>
          <span className="featuredRate">
            -2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">
          Compared to last month
        </span>
      </div>
    </div>
  )
}
