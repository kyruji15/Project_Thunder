"use client";

import React, { useState } from 'react';

function Page() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f4f8' }}>
      <div style={{ width: '100%', maxWidth: '600px', padding: '30px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', border: '1px solid #d1d5db' }}>
        {success && (
          <div style={{ backgroundColor: '#d4edda', color: '#155724', padding: '10px', borderRadius: '4px', marginBottom: '20px', textAlign: 'center', fontFamily: 'Inter', fontSize: '16px', fontWeight: '500' }}>
            เปลี่ยนรหัสผ่านสำเร็จ
          </div>
        )}
        <h2 style={{ flex: '1 0 0', textAlign: 'left', marginBottom: '15px', color: 'var(--new-text, #1D2939)', fontFamily: 'Inter', fontSize: '32px', fontStyle: 'normal', fontWeight: '700', lineHeight: '44px' }}>
          ลืมรหัสผ่าน
        </h2>
        <div style={{ textAlign: 'center', color: '#FF372F', fontFamily: 'Inter', fontSize: '20px', fontWeight: '600', marginBottom: '25px', letterSpacing: '1px' }}>0813239137</div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="newPassword" style={{ display: 'block', marginBottom: '8px', color: 'var(--new-text, #1D2939)', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>
              กรอกรหัสผ่านใหม่
            </label>
            <input
              type="password"
              id="newPassword"
              placeholder="กรอกรหัสผ่านใหม่"
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px',
                color: 'var(--Grey-400, #98A2B3)',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '145%',
              }}
            />
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '8px', color: 'var(--new-text, #1D2939)', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>
              ยืนยันรหัสผ่านใหม่อีกครั้ง
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="กรอกรหัสผ่านใหม่อีกครั้ง"
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px',
                color: 'var(--Grey-400, #98A2B3)',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '145%',
              }}
            />
          </div>
          <br></br><br></br><br></br><br></br>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#f00',
              color: 'var(--white-ffffff, #FFF)',
              textAlign: 'center',
              fontFamily: 'Inter',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: '145%',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            เปลี่ยนรหัสผ่าน
          </button>
        </form>
        <br></br>
        <hr style={{background:'var(--black-100-e-5-e-5-e-5, #E5E5E5)',height: '0.5px',}}></hr>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <span style={{ fontSize: '14px', color: 'var(--black-9001-a-1-a-1-a, #1A1A1A)', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', lineHeight: '145%' }}>
            ยังไม่มีบัญชี?{' '}
          </span>
          <a
            href="#"
            style={{
              fontSize: '14px',
              color: 'var(--secondary, #FF372F)',
              textAlign: 'right',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '145%',
              textDecoration: 'none',
            }}
          >
            สมัครสมาชิก
          </a>
        </div>
      </div>
    </div>
  );
}

export default Page;