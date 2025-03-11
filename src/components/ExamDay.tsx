import '@styles/examDay.scss';

const ExamDay = () => {
    return (
        <div className="content">
            <div className="content-box">
                <div className="content-title">자격저격</div>
                <div className="content-alert">
                    <div>자격저격 이예은님,</div>
                    <div>내일은 드디어 정보처리기사 시험일입니다.</div>
                </div>
                <div className="content-info1">
                    이예은님 안녕하세요, 내일 정보처리기사 시험이 시작됩니다.
                    지금까지 준비해온 것들을 시험장에서 모두 발휘하시길 바레요.
                    시험 전 챙기셔야 하는 것들까지 자격저격이 상세하게 안내해드릴게요!
                </div>
                <div className="content-info2">
                    <div className="content-info2__date">
                        시험일: 2025.03.12 (D-1)
                    </div>
                    <button className="detail-info">자격증 상세 정보 보기</button>
                </div>
            </div>
        </div>
    );
};

export default ExamDay;