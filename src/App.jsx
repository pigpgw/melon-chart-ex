import { useState , useEffect } from 'react'
import { FaHeart } from "react-icons/fa6";
import './App.css'


function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [items, setItems] = useState([]);
  
  function handleLike(index) {
    const newItems = [...items];
    newItems[index].isLike = true;
    setItems(newItems);
  }

  function handleRemoveLike(index) {
    const newItems = [...items];
    newItems[index].isLike = false;
    setItems(newItems);
  }
  
  useEffect(() => {
    setIsLoading(true);
    fetch("https://api-ex.vercel.app/api/getMelonChart")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.melonChart);
        setItems(res.melonChart); // state가 바뀜 -> 컴포넌트 리렌더링 -> useEffect의 [] 빈배열을 넘겨주는 이곳 safe zone에서는 다시 실행이 되지 않음.

        setIsError(false);
        setIsLoading(false);
      })
      .catch(() => setIsError(true));
  }, []);


  return (
    <>
      <div>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <img
            width="142"
            height="99"
            src="https://cdnimg.melon.co.kr/resource/image/web/common/logo_melon142x99.png"
            alt="Melon"
          />
        </div>
        {isError && <div>에러 발생!!!!</div>}
        {isLoading && <div>로딩 중..</div>}
        {!isLoading && (
          <table style={{ borderCollapse: "separate", borderSpacing: 20 }}>
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
              {items.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <div
                        style={{
                          color: "#333",
                          fontSize: 18,
                          fontFamily: "'Nunito', sans-serif",
                          fontWeight: "500",
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
                          border: "1px solid rgba(0,0,0,0.1)",
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
                          justifyContent: "center",
                          alignItems: "flex-start",
                        }}
                      >
                        <div style={{ color: "#333", fontSize: 14 }}>
                          {item.title}
                        </div>
                        <div style={{ color: "#969696", fontSize: 12 }}>
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
                      <div
                        onClick={() => {
                          if (item.isLike) {
                            handleRemoveLike(index);
                          } else {
                            handleLike(index);
                          }
                        }}
                      >
                        {item.isLike && <FaHeart color="#fe3d3d" />}
                        {!item.isLike && <FaHeart color="#e0dfdf" />}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

const commonStyle = {
  tableHead : {borderCollapse: 'separate', borderSpacing:20}
}

export default App;
