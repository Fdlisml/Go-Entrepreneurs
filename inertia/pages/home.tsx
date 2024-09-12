import { useEffect, useState } from 'react';
import { Head } from '@inertiajs/react'
import Header from './partials/Header'
import Footer from './partials/Footer'
import Chatbot from './component/ChatBot';
// import AOS from 'aos'

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // AOS.init({
    //   duration: 600,
    //   easing: 'ease-in-out',
    //   once: true,
    //   mirror: false
    // });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   const scrollTop = document.querySelector(".scroll-top") as HTMLElement | null;

  //   function toggleScrollTop() {
  //     if (scrollTop) {
  //       window.scrollY > 100 ? scrollTop.classList.add("active") : scrollTop.classList.remove("active");
  //     }
  //   }

  //   if (scrollTop) {
  //     scrollTop.addEventListener("click", (e) => {
  //       e.preventDefault();
  //       window.scrollTo({
  //         top: 0,
  //         behavior: "smooth",
  //       });
  //     });
  //   }

  //   window.addEventListener("load", toggleScrollTop);
  //   document.addEventListener("scroll", toggleScrollTop);
    
  //   return () => {
  //     window.removeEventListener("load", toggleScrollTop);
  //     document.removeEventListener("scroll", toggleScrollTop);
  //   };
  // }, []);

  return (
    <>
      <Head title="Homepage" />

      <Header />

      <main className="main">

        <section id="hero" className="hero section">

          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6 order-lg-last">
                <img src="inertia/img/hero-img.png" className="img-fluid" alt="galery" />
              </div>
              <div className="col-lg-6  d-flex flex-column justify-content-center">
                <h1>GO ENTREPRENEURS</h1>
                <p>Mulailah perjalanan sukses Anda dengan <strong>GO ENTREPRENEURS</strong> sekarang!</p>
                <div className="d-flex">
                  <a href="#about" className="btn-get-started">Get Started</a>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section id="about" className="about section">

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row align-items-xl-center gy-5">

              <div className="col-xl-5 content">
                <h3>About Us</h3>
                <h2>“We can do big together”</h2>
                <p><strong>Go Entrepreneurs</strong> dimaksudkan menjadi Pintu Kotak
                  Pandora Entrepreneurships bagi potensi-potensi siswa
                  SMK/SMA dan kaum mudaberbakat lainnya yang siap
                  dilatih bekerja keras sebagai modal utama menjadi
                  seorang entrepreneur yang memang selalu membutuhkan
                  permodalan disamping keahlian untuk mewujudkannya
                  hingga berhasil, yang juga seringkali perlu waktu ber tahun
                  tahun.</p>
              </div>

            </div>
          </div>

        </section>

        <section id="services" className="services section">

          <div className="container section-title" data-aos="fade-up">
            <h2>Our Services</h2>
          </div>

          <div className="container">

            <div className="row gy-4">

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="service-item item-cyan position-relative">
                  <div className="icon">
                    <img src="inertia/img/64e09305e6d72.png" alt="galery" width="100" />
                  </div>
                  <h3>Program Pelatihan Kewirausahaan Terstruktur</h3>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="service-item item-orange position-relative">
                  <div className="icon">
                    <img src="inertia/img/64ef206d3cbab.png" alt="galery" width="100" />
                  </div>
                  <h3>Inkubasi Bisnis</h3>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="service-item item-teal position-relative">
                  <div className="icon">
                    <img src="inertia/img/economy-recovery.png" alt="galery" width="100" />
                  </div>
                  <h3>Fasilitasi Akses Permodalan</h3>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div className="service-item item-red position-relative">
                  <div className="icon">
                    <img src="inertia/img/economic-growth.png" alt="galery" width="100" />
                  </div>
                  <h3>Pengembangan dan Pemasaran Produk</h3>
                  <a href="#" className="stretched-link"></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                <div className="service-item item-indigo position-relative">
                  <div className="icon">
                    <img src="inertia/img/business-contract.png" alt="galery" width="100" />
                  </div>
                  <h3>Kerjasama dan Kemitraan</h3>
                  <a href="#" className="stretched-link"></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                <div className="service-item item-pink position-relative">
                  <div className="icon">
                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                      <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"></path>
                    </svg>
                    <i className="bi bi-chat-square-text"></i>
                  </div>
                  <h3>Program Magang dan Pengalaman Kerja</h3>
                  <a href="#" className="stretched-link"></a>
                </div>
              </div>

            </div>

          </div>

        </section>

        <section id="why-us" className="why-us section">

          <div className="container section-title" data-aos="fade-up">
            <h2>Why Us?</h2>
          </div>

          <div className="container">

            <div className="row gy-4">

              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="card-item">
                  <span>01</span>
                  <img src="inertia/img/Verified.png" alt="galery" width="100" />
                  <p>Mengatasi pengangguran tinggi
                    lulusan SMK/SMA dan rendahnya
                    kewirausahaan di Indonesia dengan
                    solusi konkret.</p>
                </div>
              </div>

              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div className="card-item">
                  <span>02</span>
                  <img src="inertia/img/business-target.png" alt="galery" width="100" />
                  <p>Memiliki kesempatan
                    mengembangkan keterampilan dan
                    memperluas usaha setelah lulus dari
                    program.
                  </p>
                </div>
              </div>

              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                <div className="card-item">
                  <span>03</span>
                  <img src="inertia/img/cv-form.png" alt="galery" width="100" />
                  <p>Kurikulum praktis memberi
                    keterampilan dan kepercayaan diri
                    untuk sukses di kewirausahaan
                    melalui pengalaman langsung.</p>
                </div>
              </div>

            </div>

          </div>

        </section>

        <section id="progams-excellence" className="services section">

          <div className="container section-title" data-aos="fade-up">
            <h2>Program Excellence</h2>
          </div>

          <div className="container">

            <div className="row gy-4">

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="service-item item-cyan position-relative">
                  <div className="icon">
                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                      <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                    </svg>
                    <i className="bi bi-activity"></i>
                  </div>
                  <h3>Pengembangan Keterampilan Praktis</h3>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="service-item item-orange position-relative">
                  <div className="icon">
                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                      <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
                    </svg>
                    <i className="bi bi-broadcast"></i>
                  </div>
                  <h3>Akses ke Jaringan Dunia Usaha</h3>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="service-item item-teal position-relative">
                  <div className="icon">
                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                      <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"></path>
                    </svg>
                    <i className="bi bi-easel"></i>
                  </div>
                  <h3>Dukungan Modal dan Sumber Daya</h3>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div className="service-item item-red position-relative">
                  <div className="icon">
                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                      <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"></path>
                    </svg>
                    <i className="bi bi-bounding-box-circles"></i>
                  </div>
                  <h3>Pembelajaran Berkelanjutan</h3>
                  <a href="#" className="stretched-link"></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                <div className="service-item item-indigo position-relative">
                  <div className="icon">
                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                      <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"></path>
                    </svg>
                    <i className="bi bi-calendar4-week icon"></i>
                  </div>
                  <h3>Kontribusi pada Ekonomi Nasional</h3>
                  <a href="#" className="stretched-link"></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                <div className="service-item item-pink position-relative">
                  <div className="icon">
                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                      <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"></path>
                    </svg>
                    <i className="bi bi-chat-square-text"></i>
                  </div>
                  <h3>Peluang Untuk Mandiri</h3>
                  <a href="#" className="stretched-link"></a>
                </div>
              </div>

            </div>

          </div>

        </section>

        <section id="galery" className="portfolio section">

          <div className="container section-title" data-aos="fade-up">
            <h2>Galery</h2>
          </div>

          <div className="container">

            <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

              {/* <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-product">Product</li>
              <li data-filter=".filter-branding">Branding</li>
              <li data-filter=".filter-books">Books</li>
            </ul> */}

              <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <div className="portfolio-content h-100">
                    <img src="inertia/img/portfolio/app-1.jpg" className="img-fluid" alt="galery" />
                    <div className="portfolio-info">
                      <h4>App 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="inertia/img/portfolio/app-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <div className="portfolio-content h-100">
                    <img src="inertia/img/portfolio/product-1.jpg" className="img-fluid" alt="galery" />
                    <div className="portfolio-info">
                      <h4>Product 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="inertia/img/portfolio/product-1.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <div className="portfolio-content h-100">
                    <img src="inertia/img/portfolio/branding-1.jpg" className="img-fluid" alt="galery" />
                    <div className="portfolio-info">
                      <h4>Branding 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="inertia/img/portfolio/branding-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                  <div className="portfolio-content h-100">
                    <img src="inertia/img/portfolio/books-1.jpg" className="img-fluid" alt="galery" />
                    <div className="portfolio-info">
                      <h4>Books 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="inertia/img/portfolio/books-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <div className="portfolio-content h-100">
                    <img src="inertia/img/portfolio/app-2.jpg" className="img-fluid" alt="galery" />
                    <div className="portfolio-info">
                      <h4>App 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="inertia/img/portfolio/app-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <div className="portfolio-content h-100">
                    <img src="inertia/img/portfolio/product-2.jpg" className="img-fluid" alt="galery" />
                    <div className="portfolio-info">
                      <h4>Product 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="inertia/img/portfolio/product-2.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <div className="portfolio-content h-100">
                    <img src="inertia/img/portfolio/branding-2.jpg" className="img-fluid" alt="galery" />
                    <div className="portfolio-info">
                      <h4>Branding 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="inertia/img/portfolio/branding-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                  <div className="portfolio-content h-100">
                    <img src="inertia/img/portfolio/books-2.jpg" className="img-fluid" alt="galery" />
                    <div className="portfolio-info">
                      <h4>Books 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="inertia/img/portfolio/books-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <div className="portfolio-content h-100">
                    <img src="inertia/img/portfolio/app-3.jpg" className="img-fluid" alt="galery" />
                    <div className="portfolio-info">
                      <h4>App 3</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="inertia/img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <div className="portfolio-content h-100">
                    <img src="inertia/img/portfolio/product-3.jpg" className="img-fluid" alt="galery" />
                    <div className="portfolio-info">
                      <h4>Product 3</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="inertia/img/portfolio/product-3.jpg" title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <div className="portfolio-content h-100">
                    <img src="inertia/img/portfolio/branding-3.jpg" className="img-fluid" alt="galery" />
                    <div className="portfolio-info">
                      <h4>Branding 3</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="inertia/img/portfolio/branding-3.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                  <div className="portfolio-content h-100">
                    <img src="inertia/img/portfolio/books-3.jpg" className="img-fluid" alt="galery" />
                    <div className="portfolio-info">
                      <h4>Books 3</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="inertia/img/portfolio/books-3.jpg" title="Branding 3" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>

        <section id="form" className="contact section light-background">

          <div className="container section-title" data-aos="fade-up">
            <h2>Form Pendaftaran Program</h2>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row gy-4 justify-content-center">
              <div className="col-lg-8">
                <form action="{{ route('PendaftarProgramController.store') }}" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="500">
                  <div className="row gy-4">

                    <div className="col-md-12">
                      <input type="text" name="nama" className="form-control" placeholder="Your Name" required />
                    </div>

                    <div className="col-md-12">
                      <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                    </div>

                    <div className="col-md-12">
                      <input className="form-check-input" type="radio" name="jenis_kelamin" id="flexRadioDisabled" value="Laki-laki" />
                      <label className="form-check-label">
                        Male
                      </label>
                      <input className="form-check-input" type="radio" name="jenis_kelamin" id="flexRadioDisabled" value="Perempuan" />
                      <label className="form-check-label">
                        Female
                      </label>
                    </div>

                    <div className="col-md-12">
                      <input type="number" className="form-control" name="umur" placeholder="Your Age" required />
                    </div>

                    {/* <div className="col-md-12">
                      <textarea className="form-control" name="message" rows="4" placeholder="Message" required></textarea>
                    </div> */}

                    <div className="col-md-12 text-center">
                      <button type="submit">Send</button>
                    </div>

                  </div>
                </form>
              </div>

            </div>

          </div>

        </section>

        <section id="contact" className="contact section light-background">

          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row gy-4 justify-content-center">
              <div className="col-lg-8">
                <div className="row gy-4">

                  <div className="col-lg-12">
                    <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
                      <i className="bi bi-geo-alt"></i>
                      <h3>Address</h3>
                      <p>Jl. Karang Tengah Raya No.29 4, RT.4/RW.4, Lb. Bulus, Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12440</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="400">
                      <i className="bi bi-instagram"></i>
                      <h3>Instagram</h3>
                      <p>@goent26</p>
                    </div>
                  </div>


                  <div className="col-md-6">
                    <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                      <i className="bi bi-whatsapp"></i>
                      <h3>Whatsapp</h3>
                      <p>+62 857-7853-7382</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </section>

        <Chatbot />

      </main>

      <Footer />

      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

      {loading ?? (
        <div id="preloader"></div>
      )}
    </>
  )
}