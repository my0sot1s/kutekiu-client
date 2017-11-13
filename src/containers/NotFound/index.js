import React from 'react'
import { Link } from 'react-router-dom'
export default () => (
    <div style={{ height: 100 + 'vh', width: 100 + '%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Không tìm thấy trang ^-^ <span> <Link to='/'>Home
        </Link></span></h2>
    </div>
)