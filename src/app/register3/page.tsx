import React from 'react';

function Page() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f4f8' }}>
      <div style={{ width: '100%', maxWidth: '600px', padding: '20px', backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', border: '1px solid #d1d5db' }}>
        <h2 style={{ textAlign: 'left', marginBottom: '1px', color: 'var(--new-text, #1D2939)', fontFamily: 'Inter', fontSize: '32px', fontStyle: 'normal', fontWeight: '700', lineHeight: '44px' }}>สมัครสมาชิก</h2>
        <p style={{ textAlign: 'left', marginBottom: '20px', color: '#667085', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: '500', lineHeight: '24px' }}>โปรดกรอกข้อมูลเพื่อสมัครสมาชิก</p>
        <div style={{ textAlign: 'center', color: '#FF372F', fontFamily: 'Inter', fontSize: '20px', fontWeight: '600', marginBottom: '20px', letterSpacing: '1px' }}>0813239137</div>
        <form>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', color: 'var(--new-text, #1D2939)', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>กรอกรหัสผ่าน</label>
            <input
              type="password"
              id="password"
              placeholder="กรอกรหัสผ่าน"
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', color: 'var(--Grey-400, #98A2B3)', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', lineHeight: '145%' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '5px', color: 'var(--new-text, #1D2939)', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>ยืนยันรหัสผ่านใหม่อีกครั้ง</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="กรอกรหัสผ่าน"
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', color: 'var(--Grey-400, #98A2B3)', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', lineHeight: '145%' }}
            />
          </div>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
            <div style={{ flex: '1' }}>
              <label htmlFor="firstName" style={{ display: 'block', marginBottom: '5px', color: 'var(--new-text, #1D2939)', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>ชื่อ</label>
              <input
                type="text"
                id="firstName"
                placeholder="กรอกชื่อ"
                required
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', color: 'var(--Grey-400, #98A2B3)', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', lineHeight: '145%' }}
              />
            </div>
            <div style={{ flex: '1' }}>
              <label htmlFor="lastName" style={{ display: 'block', marginBottom: '5px', color: 'var(--new-text, #1D2939)', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>นามสกุล</label>
              <input
                type="text"
                id="lastName"
                placeholder="กรอกนามสกุล"
                required
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', color: 'var(--Grey-400, #98A2B3)', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', lineHeight: '145%' }}
              />
            </div>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="newPassword" style={{ display: 'block', marginBottom: '5px', color: 'var(--new-text, #1D2939)', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>รหัสผ่าน</label>
            <input
              type="password"
              id="newPassword"
              placeholder="กรอกรหัสผ่าน"
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', color: 'var(--Grey-400, #98A2B3)', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', lineHeight: '145%' }}
            />
          </div>
          <div style={{ marginBottom: '15px', textAlign: 'right' }}>
            <a href="#" style={{ fontSize: '14px', color: 'var(--secondary, #FF372F)', textAlign: 'right', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', lineHeight: '145%', textDecoration: 'none' }}>ลืมรหัสผ่าน</a>
          </div>
          <br></br>
          <button
            type="submit"
            style={{ width: '100%', padding: '10px', backgroundColor: '#f00', color: 'var(--white-ffffff, #FFF)', textAlign: 'center', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: '600', lineHeight: '145%', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            เข้าสู่ระบบ
          </button>
        </form>
        <br></br>
        <hr style={{background:'var(--black-100-e-5-e-5-e-5, #E5E5E5)',height: '0.5px',}}></hr>
        <div style={{ marginTop: '15px', textAlign: 'center' }}>
          <span style={{ fontSize: '14px', color: 'var(--black-9001-a-1-a-1-a, #1A1A1A)', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', lineHeight: '145%' }}>ยังไม่มีบัญชี? </span>
          <a href="#" style={{ fontSize: '14px', color: 'var(--secondary, #FF372F)', textAlign: 'right', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', lineHeight: '145%', textDecoration: 'none' }}>สมัครสมาชิก</a>
        </div>
      </div>
    </div>
  );
}

export default Page;
