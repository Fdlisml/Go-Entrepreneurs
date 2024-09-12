import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="/#hero" className="logo d-flex align-items-center">
              <img src="inertia/img/ss-logo-icon.png" alt="" />
              <span className="sitename">Go Entrepreneurs</span>
            </a>
            <div className="footer-contact pt-3">
              <p>Jl. Karang Tengah Raya No.29</p>
              <p>Lb. Bulus, Kec. Cilandak, Kota Jakarta Selatan</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+62 857-7853-7382</span>
              </p>
              <p>
                <strong>Instagram:</strong> <span>@goent26</span>
              </p>
            </div>
            {/* Uncomment if you want to add social links */}
            {/* 
            <div className="social-links d-flex mt-4">
              <a href=""><i className="bi bi-twitter-x"></i></a>
              <a href=""><i className="bi bi-facebook"></i></a>
              <a href=""><i className="bi bi-instagram"></i></a>
              <a href=""><i className="bi bi-linkedin"></i></a>
            </div> 
            */}
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#programs-excellence">Program Excellence</a>
              </li>
              <li>
                <a href="#galery">Galery</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="#services">
                  Program Pelatihan Kewirausahaan Terstruktur
                </a>
              </li>
              <li>
                <a href="#services">Inkubasi Bisnis</a>
              </li>
              <li>
                <a href="#services">Fasilitasi Akses</a>
              </li>
              <li>
                <a href="#services">
                  Pengembangan dan Pemasaran Produk
                </a>
              </li>
              <li>
                <a href="#services">Kerjasama dan Kemitraan</a>
              </li>
              <li>
                <a href="#services">Program Magang dan Pengalaman Kerja</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">Go Entrepreneurs</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
