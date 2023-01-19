import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import './scss/is-styles.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/:id" element={<Content />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
    </React.Fragment>
  );
}

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);

  function togglePanel() {
    setIsDropdownOpen(!isDropdownOpen);
  }
  function toggleSubPanel() {
    setIsSubOpen(!isSubOpen);
  }

  const eff = useEffect(() => {
    setIsSubOpen(true);
  }, []);

  const sections = [
    {
      id: 0,
      prefixIcon: 'Home',
      suffixIcon: 'expand_more',
      title: '시스템트레이딩 스토어',
      link: '#1',
    },
    { id: 1, prefixIcon: 'computer', title: '무료강의', link: '#2' },
    { id: 2, prefixIcon: 'military_tech', title: '멤버쉽 강의', link: '3' },
    {
      id: 3,
      prefixIcon: 'description',
      suffixIcon: 'expand_more',
      title: '시스템 위키',
      link: '#4',
    },
    {
      id: 4,
      prefixIcon: 'forum',
      suffixIcon: 'expand_more',
      title: '회원 커뮤니티',
      link: '#5',
    },
    { id: 5, prefixIcon: 'login', title: '로그인/회원가입', link: '#6' },
  ];
  const subSections = [
    { id: 0, title: '시스템트레이딩 소개', link: '#0-1' },
    { id: 3, title: '기본 사용자용', link: '#0-1' },
    { id: 3, title: '중급 사용자용', link: '#0-1' },
    { id: 3, title: '고급 사용자용', link: '#0-1' },
  ];
  return (
    <header>
      <nav>
        <div className={'navbar'}>
          <div className="navbar-responsive responsive">
            <button className="material-symbols-outlined">search</button>
            <span className="navbar-mobile-title">시스템트레이딩스토어</span>
            <button className="material-symbols-outlined" onClick={togglePanel}>
              menu
            </button>
          </div>
          <div className={'navbar-link ' + (isDropdownOpen ? 'open' : '')}>
            <ul className="navbar-link-items">
              <li className="navbar-item-header responsive">
                <div className="container">
                  <span className="title">I-Store</span>
                  <button
                    onClick={togglePanel}
                    className="btn-close material-symbols-outlined"
                  >
                    close
                  </button>
                </div>
              </li>
              {sections.map((section) => (
                <li className="navbar-item">
                  <Link to={section.link}>
                    <span className="material-symbols-outlined">
                      {section.prefixIcon}
                    </span>
                    <span className="navbar-item-title">{section.title}</span>
                    <span className="material-symbols-outlined">
                      {section.suffixIcon}
                    </span>
                  </Link>
                  <div className="sub-list-container">
                    <ul className="sub-list">
                      {subSections.map((sub) => {
                        if (sub.id == section.id) {
                          return (
                            <li className="sub-item">
                              <Link to={sub.link}>
                                <span className="title">{sub.title}</span>
                              </Link>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                </li>
              ))}
              <li className="navbar-item-footer">
                <div className="footer">
                  <input className="txt-search responsive" />
                  <button className="btn-search material-symbols-outlined">
                    search
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div
            className="navbar-background responsive"
            onClick={togglePanel}
          ></div>
        </div>
      </nav>

      <div className={'sub-list-box ' + (isSubOpen ? 'open' : '')} />

      <div
        onClick={togglePanel}
        className={'bg-blur ' + (isDropdownOpen ? 'open' : '')}
      />
    </header>
  );
}

function Content() {
  return (
    <div className="content-box">
      <div className="content-title">
        <h1>책 속 지식이</h1>
        <h1>클릭만 하면 내 것으로 </h1>
        <a href="https://www.slid.cc/ko">https://www.slid.cc/ko</a>
      </div>
      <div className="content-video">
        <h1>VIDEO</h1>
      </div>
    </div>
  );
}
