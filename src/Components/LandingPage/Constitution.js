import React from "react";
import "../../Styles/Constitution.css";
import { FaRegBuilding } from "react-icons/fa";
import { TbTool } from "react-icons/tb";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineBarChart } from "react-icons/md";

function Constitution() {
  return (
    <section className="constitution-section">
      <div className="constitution-container">
        <div className="section-tag">Constituency</div>
        <h3>Gurazala — Our Constituency</h3>
        <p>Assembly Constituency No. 100 · Palnadu District · Andhra Pradesh</p>
        <div className="container">
          <iframe
            src="https://www.google.com/maps?q=Gurazala,Andhra Pradesh&z=13&output=embed"
            style={{ width: "100%", height: "70vh", border: "0" }}
            allowFullScreen
            loading="lazy"
          ></iframe>

          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244750.24307196066!2d79.46219918831176!3d16.565301935547662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a354698baba8abf%3A0x569de52ea7225b5f!2sGurajala%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1779881125558!5m2!1sen!2sin"   referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
        <div className="container">
          <div className="mandal-section">
            <h3>4 Official Mandals in Gurazala Constituency</h3>
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="mandal-card">
                  <h4>Gurazala</h4>
                  <p>Constituency HQ</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="mandal-card">
                  <h4>Dachepalli</h4>
                  <p>Mandal</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="mandal-card">
                  <h4>Piduguralla</h4>
                  <p>Mandal</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="mandal-card">
                  <h4>Machavaram</h4>
                  <p>Mandal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="constituency-key-stats">
                <h3>
                  <FaRegBuilding className="const-icon" />
                  Constituency Overview
                </h3>
                <ul>
                  <li>Gurazala — Palnadu District, AP</li>
                  <li>Assembly Segment No: 100</li>
                  <li>Total voters: ~2.68 lakh (2,68,469)</li>
                  <li>Total population: ~4.5–5.0 lakh</li>
                  <li>Total area: ~1,000+ sq. km</li>
                  <li>District HQ: Narasaraopet</li>
                  <li>Constituency HQ: Gurazala</li>
                  <li>Lok Sabha: Narasaraopet segment</li>
                  <li>Reservation: General (Unreserved)</li>
                  <li>Current MLA: Yarapathineni Srinivasa Rao</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="constituency-key-stats">
                <h3>
                  <TbTool className="const-icon" /> Key Issues Addressed
                </h3>
                <ul>
                  <li>Irrigation and water availability for farmers</li>
                  <li>Support for chilli, cotton and paddy farmers</li>
                  <li>Rural road connectivity across 4 mandals</li>
                  <li>Drinking water supply to villages</li>
                  <li>Employment through industrial projects</li>
                  <li>Education and skill development for youth</li>
                  <li>RTC and public transport improvements</li>
                  <li>Industrial development — cement and limestone sector</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="constituency-key-stats">
                <h3>
                  <BsPeopleFill className="const-icon" /> Demographics (Approx.)
                </h3>

                <ul>
                  <li>
                    Main Occupation: Agriculture, Dairy, Limestone & Cement
                    Industry
                  </li>
                  <li>Literacy Rate: ~65–70%</li>
                </ul>

                <div className="demographic-progress">
                  <div className="progress-item">
                    <span className="label">SC Population</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: "20%", backgroundColor: "#1d4ed8" }}
                      ></div>
                    </div>
                    <span className="value">~20%</span>
                  </div>

                  <div className="progress-item">
                    <span className="label">BC / OBC Population</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: "45%", backgroundColor: "#f59e0b" }}
                      ></div>
                    </div>
                    <span className="value">~40–45%</span>
                  </div>

                  <div className="progress-item">
                    <span className="label">ST Population</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: "2%", backgroundColor: "#8b5cf6" }}
                      ></div>
                    </div>
                    <span className="value">~2%</span>
                  </div>

                  <div className="progress-item">
                    <span className="label">Minority Population</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: "5%", backgroundColor: "#16a34a" }}
                      ></div>
                    </div>
                    <span className="value">~3–5%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="constituency-key-stats">
                <h3>
                  {" "}
                  <MdOutlineBarChart className="const-icon" /> Economy &
                  Industry
                </h3>
                <ul>
                  <li>Agriculture — chilli, cotton, paddy crops</li>
                  <li>Dairy and animal husbandry</li>
                  <li>Limestone mining industry</li>
                  <li>Cement manufacturing sector</li>
                  <li>Small businesses and local trade</li>
                  <li>Inland constituency — no coastal economy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="election-results-card">
            <h2 className="election-title">
              2024 ELECTION RESULT — GURAZALA CONSTITUENCY NO. 100
            </h2>

            <div className="results-row">
              <div className="result-box">
                <h3 className="winner-votes">1,28,201</h3>
                <p>YSR Garu (TDP) Votes</p>
              </div>

              <div className="vs-circle">VS</div>

              <div className="result-box">
                <h3 className="runner-votes">98,715</h3>
                <p>YSRCP (Runner-up)</p>
              </div>

              <div className="vertical-divider"></div>

              <div className="result-box">
                <h3 className="highlight-green">55.01%</h3>
                <p>Vote Share</p>
              </div>

              <div className="result-box">
                <h3 className="highlight-green">29,486</h3>
                <p>Victory Margin</p>
              </div>

              <div className="result-box">
                <h3 className="highlight-green">2,33,046</h3>
                <p>Total Votes Cast</p>
              </div>
            </div>

            <div className="sworn-section">
              <h2>4 June 2024</h2>
              <p>Sworn In as MLA</p>
            </div>
          </div>
          <br />
        </div>
      </div>
    </section>
  );
}

export default Constitution;
