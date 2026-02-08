import styles from "../DashboardBase/DashBase.module.css";

function DashboardBase() {
  return (
    <div className={styles.dashbase_fondo}>

      <header className={styles.dashbase_header}>
        <div className={styles.header_left}>
          <h2>ToolsCat</h2>
        </div>

        <div className={styles.header_center}>
          <button><img src="/icons/Home.png" alt="" /> Dash</button>
          <button><img src="/icons/Settings.png" alt="" /></button>
          <img className={styles.m} src="/icons/Montaña.png" alt="" />
        </div>

        <div className={styles.header_right}>
          <div className={styles.user_avatar}></div>

          <div className={styles.user_info}>
            <span className={styles.user_name}>Stiven Blanco</span>
            <span className={styles.user_email}>delleore@gmail.com</span>
            <span className={styles.user_role}>Admin</span>
          </div>
        </div>
      </header>

      <div className={styles.bottom_dock}>
        <img className={styles.cachoright} src="/icons/Vector.png" alt="" />
        <button className={`${styles.dock_btn} ${styles.yellow}`}>
          <img src="/icons/User.png" alt="" />
        </button>
        <button className={`${styles.dock_btn} ${styles.blue}`}>
          <img src="/icons/Tool.png" alt="" />
        </button>
        <button className={`${styles.dock_btn} ${styles.pink}`}>
          <img src="/icons/Trendingup.png" alt="" />
        </button>
      </div>

      <div className={styles.dashbase_body}>
        <div className={styles.canva_left}>
          <div className={styles.canva_left_side}>
            <div className={styles.tools_top}>
              <button className={`${styles.tool_btn} ${styles.active}`}>🔗</button>
              <button className={styles.tool_btn}>☰</button>
              <button className={styles.tool_btn}>▦</button>
            </div>

            <div className={styles.tools_bottom}>
              <button className={styles.tool_btn}>+</button>
              <button className={styles.tool_btn}>−</button>
            </div>
          </div>

          <div className={styles.RealCanva}>
            <div className={styles.welcome_card}>
              <div className={styles.welcome_top}>
                <div className={styles.welcome_btn}>☰</div>
                <div className={styles.welcome_btn}>🔔</div>
              </div>

              <div className={styles.welcome_center}>
                <h2>Bienvenido</h2>
                <p>Stiven Blanco</p>
                <span className={styles.welcome_role}>Admin</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.canva_right}>
          <div className={styles.relleno}></div>
        </div>
      </div>
    </div>
  );
}

export default DashboardBase;
