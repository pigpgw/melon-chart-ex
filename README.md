# React + Vite 를 사용한 간단한 멜론 차트 만들기 

## 방법 1 likeIds라는 state를 선언해서 좋아요가 눌린 id를 저장해서 좋아요가 눌린 곡을 구분한다.
-[] 단점: 추가 계산 필요: UI를 렌더링할 때, 각 곡이 좋아요된 상태인지 확인하기 위해 likeIds 배열을 매번 확인해야 합니다.
-[] 상태 동기화: 좋아요 상태와 차트 데이터가 분리되어 있기 때문에, 두 상태 간 동기화를 신경 써야 합니다.

## 방법 2 melonChart의 각 곡에 isLike라는 프로퍼티를 추가해서 좋아요가 눌린 곡을 구분한다.
-[] 단점: 좋아요 상태를 변경할 때마다 전체 차트 데이터를 업데이트해야 합니다
