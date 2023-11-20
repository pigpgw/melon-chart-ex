import { useState } from 'react'
import './App.css'
import { melonChart as melonChartItems}  from './assets/dummy/melonChart';
import { FaHeart } from "react-icons/fa6";

function App() {
  console.log(melonChartItems);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <img
          width="142"
          height="99"
          src="https://cdnimg.melon.co.kr/resource/image/web/common/logo_melon142x99.png"
          alt="Melon"
        />
      </div>

      <table style={commonStyle.tableHead}>
        <thead>
          <tr>
            <th style={commonStyle.tableHead}>순위</th>
            <th></th>
            <th style={commonStyle.tableHead}>곡정보</th>
            <th style={commonStyle.tableHead}>앨범</th>
            <th style={commonStyle.tableHead}>좋아요</th>
          </tr>
        </thead>
        <tbody>
          {melonChartItems.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <div
                    style={{
                      color: "#333",
                      fontSize: 18,
                      fontFamily: "'Numito', sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {item.rank}
                  </div>
                </td>
                <td>
                  <img
                    style={{
                      width: 60,
                      height: 60,
                      border: " 1px solid rgba(0,0,0,0.1)",
                    }}
                    src={item.thumbnailUrl}
                    alt={item.title}
                  />
                </td>
                <td style={{ width: 250 }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ color: "#333", fontSize: 14 }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: 12, color: "#969696" }}>
                      {item.artist}
                    </div>
                  </div>
                </td>
                <td style={{ width: 150 }}>
                  <div style={{ color: "#969696", fontSize: 14 }}>
                    {item.albumName}
                  </div>
                </td>
                <td>
                  <div>
                    {/* <FaHeart color="#dddddd" /> */}
                    <FaHeart color="#fe4343" />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const commonStyle = {
  tableHead : {borderCollapse: 'separate', borderSpacing:20}
}

export default App;
