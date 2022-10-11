import './Login.css'


export default function Login(){
    return(
        <div className="loginHome">
            <div className="loginContentBox">
                <div className="loginContent">
                    <span className="remedi"> REMEDi </span>
                    <div className="inputWrapper">
                        <div className="inputBoxID">
                            <input id="idContent"
                                type="text"
                                name="idContent"
                                placeholder="id"
                            />
                        </div>
                        <div className="inputBoxPW">
                            <input id="pwContent"
                                type="password"
                                name="pwContent"
                                placeholder="password"
                            />
                        </div>
                    </div>  
                    <div className="option">
                        <input type="checkbox" id="id"/>
                        <label htmlFor="id"></label>
                        <label htmlFor="id" className="saveID">ID 저장 </label>  
                        <label className="forgetPW"> 비밀번호를 잊으셨나요?</label>
                   </div>
                    <div className="buttonWrapper">
                        <button className="Button">로그인</button>
                        <button className="Button">회원가입</button>
                    </div>
                </div>
            </div>
        </div>
    )
}