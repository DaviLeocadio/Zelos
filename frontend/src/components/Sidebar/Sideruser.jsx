import './sideuser.css';
import LogoutUser from '../LogoutUser/LogoutUser';


export default function Sideuser() {
  return (
    <>
      {/* Nav Computador */}
      <div className="d-none d-md-block">
        <aside className="sidebar">
          <img
            src="/logotipos/logoEscritaVermelha.png"
            className="logo"
            alt=""
          />
          <div className="sidebtns">
            <a href="">
              <button className="sidepage perfil">
                <i className="bi bi-person-fill"></i>Perfil
              </button>
            </a>
            <a href="">
              <button className="sidepage chamados">
                <i className="bi bi-gear-fill"></i>Chamados
              </button>
            </a>
            <a href="">
              <button className="sidepage dashboard">
                <i className="bi bi-book-fill"></i>Dashboard
              </button>
            </a>
            <a href="">
              <button className="sidepage ajuda">
                <i className="bi bi-chat-text-fill"></i>Ajuda
              </button>
            </a>
          </div>
          <div className="logout">
            <LogoutUser />
          </div>
        </aside>
      </div>
      {/* Nav mobile */}
      <div className="d-block d-md-none w-100">
        <nav className="navbar navbar-dark ">
          <div className="container-fluid nav-mobile">
            <button
              className="navbar-toggler btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#staticBackdrop"
              aria-controls="staticBackdrop"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {/* Offcanvas */}
            <div
              className="offcanvas offcanvas-start"
              data-bs-backdrop="static"
              tabIndex="-1"
              id="staticBackdrop"
              aria-labelledby="staticBackdropLabel"
            >
              <div className="offcanvas-header">
                <img
                  src="/logotipos/logoEscritaVermelha.png"
                  className="logo-mobile"
                  alt=""
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div className="sidebtns">
                  <a href="">
                    <button className="sidepage perfil">
                      <i className="bi bi-person-fill"></i>Perfil
                    </button>
                  </a>
                  <a href="">
                    <button className="sidepage chamados">
                      <i className="bi bi-gear-fill"></i>Chamados
                    </button>
                  </a>
                  <a href="">
                    <button className="sidepage dashboard">
                      <i className="bi bi-book-fill"></i>Dashboard
                    </button>
                  </a>
                  <a href="">
                    <button className="sidepage ajuda">
                      <i className="bi bi-chat-text-fill"></i>Ajuda
                    </button>
                  </a>
                </div>
                <div className="logout-mobile">
                  <LogoutUser />
                </div>
              </div>
            </div>
            <img
              src="/logotipos/logoSenaiBranca.png"
              alt=""
              className="img-fluid img-nav-mobile"
            />
            <img
              src="/logotipos/logoEscritaBranca.png"
              className="img-fluid img-nav-mobile"
            />
          </div>
        </nav>
      </div>
    </>
  );
}
