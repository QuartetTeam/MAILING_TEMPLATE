import '@styles/receiptDay.scss';

const ReceiptDay = () => {
    return (
        <div className="content">
            <div className="content-box">
                <div className="content-title">자격저격</div>
                <div className="content-alert">
                    <div>자격저격 [정보처리기사]</div>
                    <div>접수기간이 시작되었습니다.</div>
                </div>
                <div className="content-info1">
                    이예은님 안녕하세요, 정보처리기사 접수기간이 시작되었습니다. 지금 접수하러 가시는 게 어떠세요?
                </div>
                <div className="content-info2">
                    <button className="detail-info">자세한 시험일정 보기</button>
                    <div className="content-info2__date">
                        접수기간: 2025.03.11 (D-Day)
                    </div>
                </div>
                <button className="receipt">바로 접수하러 가기</button>
            </div>
        </div>
    );
};

export default ReceiptDay;