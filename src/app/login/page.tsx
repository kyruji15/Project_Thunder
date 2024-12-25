import React from 'react';

function Page() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f9f9f9' }}>
      <div style={{ width: '100%', maxWidth: '600px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'left', marginBottom: '3px', color: 'var(--new-text, #1D2939)', fontFamily: 'Inter', fontSize: '32px', fontStyle: 'normal', fontWeight: '700', lineHeight: '44px' }}>เข้าสู่ระบบ</h2>
        <p style={{ textAlign: 'left', marginBottom: '20px', color: '#667085', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: '500', lineHeight: '24px' }}>โปรดกรอกข้อมูลเพื่อเข้าสู่ระบบ</p>
        <form>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px', color: 'var(--new-text, #1D2939)', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>เบอร์โทรศัพท์</label>
            <input
              type="text"
              id="phone"
              placeholder="กรอกเบอร์โทรศัพท์"
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', color: 'var(--Grey-400, #98A2B3)', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', lineHeight: '145%' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', color: 'var(--new-text, #1D2939)', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>รหัสผ่าน</label>
            <input
              type="password"
              id="password"
              placeholder="กรอกรหัสผ่าน"
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', color: 'var(--Grey-400, #98A2B3)', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', lineHeight: '145%' }}
            />
          </div>
          <div style={{ marginBottom: '15px', textAlign: 'right' }}>
            <a href="#" style={{ fontSize: '14px', color: 'var(--secondary, #FF372F)', textAlign: 'right', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', lineHeight: '145%', textDecoration: 'none' }}>ลืมรหัสผ่าน</a>
          </div>
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
