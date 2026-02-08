import "../DashboardBase/DashBase.css"


function DashboardBase() {
  return (
    <div className="dashbase_fondo">

        <header className="dashbase_header">
        <div className="header_left">
            <h2>ToolsCat</h2>
        </div>

        <div className="header_center">
            <button><img src="/icons/Home.png" alt="" /> Dash</button>
            <button><img  src="/icons/Settings.png" alt="" /></button>
            <img className="m" src="/icons/Montaña.png" alt="" />
        </div>

        <div className="header_right">
        <div className="user_avatar"></div>

        <div className="user_info">
            <span className="user_name">Stiven Blanco</span>
            <span className="user_email">delleore@gmail.com</span>
            <span className="user_role">Admin</span>
        </div>

        </div>

        </header>
        
        <div className="bottom_dock">
            
            <img className="cachoright" src="/icons/Vector.png" alt="" />
            <button className="dock_btn yellow"><img src="/icons/User.png" alt="" /></button>
            <button className="dock_btn blue"><img src="/icons/Tool.png" alt="" /></button>
            <button className="dock_btn pink"><img src="/icons/Trendingup.png" alt="" /></button>
        </div>

        <div className="dashbase_body">
            <div className="canva_left">
                <div className="canva_left_side">
                    <div className="tools_top">
                        <button className="tool_btn active">🔗</button>
                        <button className="tool_btn">☰</button>
                        <button className="tool_btn">▦</button>
                    </div>

                    <div className="tools_bottom">
                        <button className="tool_btn">+</button>
                        <button className="tool_btn">−</button>
                    </div>
                </div>

                <div className="RealCanva">
                <div className="welcome_card">

                    <div className="welcome_top">
                    <div className="welcome_btn">☰</div>
                    <div className="welcome_btn">🔔</div>
                    </div>

                    <div className="welcome_center">
                    <h2>Bienvenido</h2>
                    <p>Stiven Blanco</p>
                    <span className="welcome_role">Admin</span>
                    </div>

                </div>
                </div>



            </div>
            <div className="canva_right">
                <div className="relleno">

                </div>
            </div>
        </div>
    </div>
  );
}

export default DashboardBase;
