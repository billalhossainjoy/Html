header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.logo {
  font-size: 30px;
  font-weight: bold;
}

nav {
  flex: 1;
  text-align: right;
}

.nav-links {
  display: flex;
  justify-content: space-around;
  list-style: none;
}

.nav-links li a {
  color: #333;
  text-decoration: none;
  font-size: 18px;
  padding: 8px 12px;
}

.burger {
  display: none;
  cursor: pointer;
}

.burger div {
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 5px;
  transition: all 0.3s ease;
}

@media screen and (max-width: 768px) {
  .nav-links {
    position: fixed;
    background-color: #f2f2f2;
    height: 100vh;
    width: 200px;
    top: 0;
    right: -200px;
    text-align: left;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transition: all 0.5s ease;
  }

  .nav-links li {
    opacity: 0;
  }

  .burger {
    display: block;
  }
}

.nav-active {
  right: 0;
}

.burger.active .line1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.burger.active .line2 {
  opacity: 0;
}

.burger.active .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}
