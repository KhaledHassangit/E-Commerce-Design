import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
    return (
        <div>
        <div style={{minHeight:"650px"}} className='d-flex justify-content-center mt-5'>
        <div class="login-container ">
        <div class="login-header">
            <div>تسجيل حساب جديد</div>
        </div>
        <input type="text" class="login-input" placeholder="اسم المستخدم" id="username"/>
        <input type="text" class="login-input" placeholder="الايميل" id="username"/>
        <input type="password" class="login-input" placeholder="كلمه السر" id="password" maxlength="15" minlength="8"/>
        <button class="login-button" id="login-button">تسجيل الدخول</button>
        <h5 className='mt-3 text-center'>لديك حساب بالفعل ؟
        <Link to="/login" style={{textDecoration:"none"}}>
        <span className='text-danger' style={{cursor:"pointer"}}>أضعط هنا</span>
        </Link>
        </h5>
        </div>
    </div>
        </div>
    )
}

export default Register
