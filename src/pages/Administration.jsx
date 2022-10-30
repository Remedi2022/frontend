import './Administration.css'
import LeftNav from "../components/LeftNav/LeftNav"
import TopBar from "../components/TopBar/TopBar"
import PatientList from "../components/PatientList/PatientList"
import { Link } from 'react-router-dom';
import UseModal from '../hooks/UseModal';
import SearchBar from '../components/SearchBar/SearchBar';



function Content() {
    return (
        <div className="content">
            <div className="homeMenu">
                <div class="Searchbar">
                    <SearchBar placeholder="이름으로 검색" />
                    {/*
                    <form className="Form" action="/" method="GET">
                        <input className="Search-field" type="search" placeholder="이름으로 환자 검색"/>
                        <button className="Search-button" type="submit">
                            <img className='SearchIcon' src={ process.env.PUBLIC_URL + '/icons/search50_999.png' } />
                        </button>
                    </form>
                    */}           
                </div>
                <div className="homeMenuItem" id="long">
                    <span className="homeMenuItemTitle">수납실</span>
                    <span className="homeMenuItemDetail">이메디 남 17개월 #VIP<br></br>(텍스트별 크기 조정하기)건강보험 일반진료 1진료실</span>
                    <div className="homeMenuButton">
                        <Link to = "/payment">
                            <button className="homeMenuItemButton">수납 진행하기</button>
                        </Link>
                    </div>
                </div>
                <div className="homeMenuItem">
                    <span className="homeMenuItemTitle">신환 등록</span>
                    <span>신규환자를 등록하시겠습니까?</span>
                    <div className="homeMenuButton">
                        {/* <button>신환 등록하기</button> */}
                        <UseModal></UseModal>
                    </div>
                </div>
                <div className="homeMenuItem">
                    <span className="homeMenuItemTitle">접수 신청</span>
                    <span>우성주 여 23세 #단골 #실손보험</span>
                    <div className="homeMenuButton">
                        <Link to="/reception">
                            <button className="homeMenuItemButton">접수하기</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Administration() {
    return (
        <div className="Administration">
            <div className="container">
                <LeftNav />
                <div className='topbarContainer'>
                    <TopBar />
                    <div className='patientlistContainer'>
                        <PatientList/>
                        <Content />
                    </div>
                </div>
                {/* <div className=""> page </div> */}
            </div>
        </div>
    )
}
