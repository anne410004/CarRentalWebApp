import React, { useState, useEffect } from "react";

const Home = () => {
  const [location, setLocation] = useState("Detecting location...");
  const [userName, setUserName] = useState("Guest");
  const [currentPage, setCurrentPage] = useState("home");
  const [authVisible, setAuthVisible] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const goToAuthPage = (signUp = false) => {
    setIsSignUp(signUp);
    setAuthVisible(true);
  };
  const goBackFromAuth = () => {
    setAuthVisible(false);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setIsSignUp(false);
  };

  const handleAuth = () => {
    if (isSignUp) {
      if (email && password && password === confirmPassword) {
        const name = email.split("@")[0];
        setUserName(name.charAt(0).toUpperCase() + name.slice(1));
        goBackFromAuth();
      } else if (password !== confirmPassword) {
        alert("Passwords don't match!");
      }
    } else {
      if (email && password) {
        const name = email.split("@")[0];
        setUserName(name.charAt(0).toUpperCase() + name.slice(1));
        goBackFromAuth();
      }
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude.toFixed(2)}, ${longitude.toFixed(2)}`);
        },
        (error) => {
          console.error(error);
          setLocation("Location unavailable");
        }
      );
    }
  }, []);

  const topTrends = [
    {
      id: 1,
      name: "Porsche 911",
      location: "Denver, Co",
      price: 650,
      rating: 5.0,
      trips: 64,
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      features: ["Auto", "Premium"]
    },
    {
      id: 2,
      name: "Tesla Model S",
      location: "San Francisco, CA",
      price: 580,
      rating: 4.9,
      trips: 128,
      img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80",
      features: ["Electric", "Auto"]
    },
    {
      id: 3,
      name: "BMW X5",
      location: "Los Angeles, CA",
      price: 520,
      rating: 4.8,
      trips: 92,
      img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
      features: ["SUV", "Luxury"]
    },
    {
      id: 4,
      name: "Mercedes S-Class",
      location: "Miami, FL",
      price: 680,
      rating: 5.0,
      trips: 156,
      img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
      features: ["Luxury", "Premium"]
    }
  ];

  const renderAuthModal = () => (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: "white",
        borderRadius: "20px",
        padding: "3rem",
        width: "90%",
        maxWidth: "450px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        position: "relative"
      }}>
        <button
          onClick={goBackFromAuth}
          style={{
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
            background: "none",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            color: "#666",
            padding: "0.5rem"
          }}
        >✕</button>

        <h2 style={{
          margin: "0 0 0.5rem 0",
          fontSize: "32px",
          fontWeight: "700",
          color: "#1a1a1a"
        }}>{isSignUp ? "Create Account" : "Welcome Back"}</h2>
        <p style={{
          margin: "0 0 2rem 0",
          color: "#888",
          fontSize: "16px"
        }}>{isSignUp ? "Sign up to start your journey" : "Sign in to continue your journey"}</p>

        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{
            display: "block",
            marginBottom: "0.5rem",
            fontSize: "14px",
            fontWeight: "600",
            color: "#333"
          }}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "0.85rem",
              border: "2px solid #e0e0e0",
              borderRadius: "10px",
              fontSize: "15px",
              outline: "none",
              transition: "border 0.2s",
              boxSizing: "border-box"
            }}
            onFocus={(e) => e.target.style.borderColor = "#7D00FF"}
            onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
          />
        </div>

        <div style={{ marginBottom: isSignUp ? "1.5rem" : "2rem" }}>
          <label style={{
            display: "block",
            marginBottom: "0.5rem",
            fontSize: "14px",
            fontWeight: "600",
            color: "#333"
          }}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "0.85rem",
              border: "2px solid #e0e0e0",
              borderRadius: "10px",
              fontSize: "15px",
              outline: "none",
              transition: "border 0.2s",
              boxSizing: "border-box"
            }}
            onFocus={(e) => e.target.style.borderColor = "#7D00FF"}
            onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
          />
        </div>

        {isSignUp && (
          <div style={{ marginBottom: "2rem" }}>
            <label style={{
              display: "block",
              marginBottom: "0.5rem",
              fontSize: "14px",
              fontWeight: "600",
              color: "#333"
            }}>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "0.85rem",
                border: "2px solid #e0e0e0",
                borderRadius: "10px",
                fontSize: "15px",
                outline: "none",
                transition: "border 0.2s",
                boxSizing: "border-box"
              }}
              onFocus={(e) => e.target.style.borderColor = "#7D00FF"}
              onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
            />
          </div>
        )}

        <button
          onClick={handleAuth}
          style={{
            width: "100%",
            padding: "0.9rem",
            backgroundColor: "#7D00FF",
            border: "none",
            borderRadius: "12px",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.2s",
            boxShadow: "0 4px 12px rgba(125, 0, 255, 0.3)",
            marginBottom: "1rem"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#6a00d9";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#7D00FF";
            e.target.style.transform = "translateY(0)";
          }}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>

        <p style={{
          textAlign: "center",
          color: "#888",
          fontSize: "14px",
          margin: 0
        }}>
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <span 
            onClick={() => setIsSignUp(!isSignUp)}
            style={{ 
              color: "#7D00FF", 
              fontWeight: "600", 
              cursor: "pointer" 
            }}
          >
            {isSignUp ? "Sign in" : "Sign up"}
          </span>
        </p>
      </div>
    </div>
  );

  const renderBrowsePage = () => (
    <div style={{ padding: "4rem", maxWidth: "1400px", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem" }}>
        <div>
          <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "36px", fontWeight: "700", color: "#1a1a1a" }}>Browse All Rentals</h3>
          <p style={{ margin: 0, fontSize: "16px", color: "#888" }}>Find your perfect car for your trip</p>
        </div>
        <button style={{ background: "none", border: "none", color: "#7D00FF", fontSize: "16px", fontWeight: "600", cursor: "pointer", padding: "0.75rem 1.5rem", borderRadius: "8px", transition: "background 0.2s" }}
          onMouseEnter={(e) => e.target.style.backgroundColor = "#f5f0ff"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
        >Filters</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
        {topTrends.map(car => (
          <div key={car.id} style={{ backgroundColor: "white", borderRadius: "20px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", cursor: "pointer", transition: "transform 0.3s, box-shadow 0.3s" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
            }}
          >
            <div style={{ width: "100%", height: "220px", overflow: "hidden" }}>
              <img src={car.img} alt={car.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s" }}
                onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
              />
            </div>
            <div style={{ padding: "1.5rem" }}>
              <h4 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "0.5rem" }}>{car.name}</h4>
              <p style={{ fontSize: "14px", color: "#666" }}>📍 {car.location}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                <span style={{ fontWeight: "600" }}>⭐ {car.rating}</span>
                <span style={{ fontWeight: "700", fontSize: "18px" }}>${car.price}/day</span>
              </div>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                {car.features.map((f, idx) => (
                  <div key={idx} style={{ padding: "0.4rem 0.8rem", backgroundColor: "#f5f5f5", borderRadius: "16px", fontSize: "12px", fontWeight: "500" }}>{f}</div>
                ))}
              </div>
              <button style={{ width: "100%", padding: "0.8rem", backgroundColor: "#7D00FF", border: "none", borderRadius: "12px", color: "white", fontWeight: "600", cursor: "pointer", transition: "all 0.2s", boxShadow: "0 4px 12px rgba(125, 0, 255, 0.3)" }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#6a00d9";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 6px 20px rgba(125, 0, 255, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#7D00FF";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 12px rgba(125, 0, 255, 0.3)";
                }}
              >Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderHomePage = () => (
    <>
      <div style={{
        background: "linear-gradient(135deg, rgba(125, 0, 255, 0.95), rgba(88, 0, 179, 0.95)), url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "5rem 4rem",
        color: "white",
        textAlign: "center"
      }}>
        <h2 style={{
          margin: "0 0 1rem 0",
          fontSize: "52px",
          fontWeight: "800",
          letterSpacing: "-2px"
        }}>Hello, {userName}</h2>
        <p style={{
          margin: "0 0 3rem 0",
          fontSize: "22px",
          opacity: 0.95,
          fontWeight: "400"
        }}>What's your next destination?</p>

        <div style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "rgba(255, 255, 255, 0.98)",
          borderRadius: "16px",
          padding: "1.25rem 1.75rem",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
          backdropFilter: "blur(10px)"
        }}>
          <span style={{ fontSize: "28px" }}>🔍</span>
          <div style={{ flex: 1, textAlign: "left" }}>
            <input 
              type="text"
              placeholder="Search for destinations..."
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                fontSize: "18px",
                fontWeight: "500",
                color: "#333",
                backgroundColor: "transparent",
                marginBottom: "4px"
              }}
            />
            <div style={{
              fontSize: "14px",
              color: "#999"
            }}>Anywhere • Anytime</div>
          </div>
          <button style={{
            padding: "0.85rem 1.5rem",
            backgroundColor: "#7D00FF",
            border: "none",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            cursor: "pointer",
            transition: "all 0.2s",
            boxShadow: "0 4px 12px rgba(125, 0, 255, 0.4)",
            color: "white",
            fontSize: "15px",
            fontWeight: "600"
          }}>
            <span>⚙️</span>
            Filters
          </button>
        </div>
      </div>

      <div style={{ 
        padding: "4rem",
        maxWidth: "1400px",
        margin: "0 auto"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "2rem"
        }}>
          <div>
            <h3 style={{
              margin: "0 0 0.5rem 0",
              fontSize: "36px",
              fontWeight: "700",
              color: "#1a1a1a",
              letterSpacing: "-1px"
            }}>Recommended Rentals</h3>
            <p style={{
              margin: 0,
              fontSize: "16px",
              color: "#888"
            }}>Planning Your Break?</p>
          </div>
          <button style={{
            background: "none",
            border: "none",
            color: "#7D00FF",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            transition: "background 0.2s"
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = "#f5f0ff"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
          >View all →</button>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "2rem"
        }}>
          {topTrends.map((car) => (
            <div
              key={car.id}
              style={{
                backgroundColor: "white",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
              }}
            >
              <div style={{
                position: "relative",
                width: "100%",
                height: "220px",
                backgroundColor: "#f5f5f5",
                overflow: "hidden"
              }}>
                <img
                  src={car.img}
                  alt={car.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s"
                  }}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                />
              </div>

              <div style={{ padding: "1.5rem" }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1rem"
                }}>
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      margin: "0 0 0.75rem 0",
                      fontSize: "22px",
                      fontWeight: "700",
                      color: "#1a1a1a",
                      letterSpacing: "-0.5px"
                    }}>{car.name}</h4>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      color: "#888",
                      fontSize: "14px",
                      marginBottom: "0.6rem"
                    }}>
                      <span>📍</span>
                      <span>{car.location}</span>
                    </div>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      color: "#666",
                      fontSize: "14px"
                    }}>
                      <span>⭐</span>
                      <span style={{ fontWeight: "600", color: "#333" }}>{car.rating}</span>
                      <span style={{ color: "#aaa" }}>({car.trips} trips)</span>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{
                      fontSize: "32px",
                      fontWeight: "800",
                      color: "#1a1a1a",
                      lineHeight: "1",
                      letterSpacing: "-1.5px"
                    }}>${car.price}</div>
                    <div style={{
                      fontSize: "14px",
                      color: "#999",
                      marginTop: "0.25rem"
                    }}>/day</div>
                  </div>
                </div>

                <div style={{
                  display: "flex",
                  gap: "0.6rem",
                  marginBottom: "1rem"
                }}>
                  {car.features.map((feature, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: "0.4rem 0.9rem",
                        backgroundColor: "#f5f5f5",
                        borderRadius: "20px",
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#666"
                      }}
                    >
                      {feature}
                    </div>
                  ))}
                </div>

                <button style={{
                  width: "100%",
                  padding: "0.85rem",
                  backgroundColor: "#7D00FF",
                  border: "none",
                  borderRadius: "12px",
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  boxShadow: "0 4px 12px rgba(125, 0, 255, 0.3)"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#6a00d9";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 6px 20px rgba(125, 0, 255, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#7D00FF";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 12px rgba(125, 0, 255, 0.3)";
                }}
                >Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const renderNotifications = () => (
    <div style={{ 
      padding: "4rem",
      maxWidth: "1000px",
      margin: "0 auto",
      minHeight: "calc(100vh - 80px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{
        textAlign: "center",
        padding: "3rem"
      }}>
        <div style={{
          width: "180px",
          height: "180px",
          margin: "0 auto 2rem",
          position: "relative"
        }}>
          <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
            <circle cx="100" cy="100" r="90" fill="#f5f0ff" />
            
            <path
              d="M100 50 C85 50 75 60 75 75 L75 95 C75 110 65 120 60 130 L140 130 C135 120 125 110 125 95 L125 75 C125 60 115 50 100 50 Z"
              fill="#7D00FF"
              opacity="0.9"
            />
            
            <ellipse cx="100" cy="135" rx="8" ry="10" fill="#7D00FF" opacity="0.9" />
            
            <rect x="95" y="45" width="10" height="8" rx="2" fill="#7D00FF" opacity="0.9" />
            
            <circle cx="130" cy="70" r="8" fill="#FF6B6B">
              <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="145" cy="85" r="6" fill="#FFB84D">
              <animate attributeName="opacity" values="1;0.5;1" dur="2s" begin="0.3s" repeatCount="indefinite" />
            </circle>
            <circle cx="140" cy="105" r="5" fill="#A78BFA">
              <animate attributeName="opacity" values="1;0.5;1" dur="2s" begin="0.6s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        <h2 style={{
          margin: "0 0 1rem 0",
          fontSize: "32px",
          fontWeight: "700",
          color: "#1a1a1a",
          letterSpacing: "-1px"
        }}>No Notifications Yet</h2>
        
        <p style={{
          margin: "0 0 2rem 0",
          fontSize: "18px",
          color: "#888",
          lineHeight: "1.6"
        }}>
          You'll see payment confirmations, booking updates,<br />
          and important alerts here
        </p>

        <div style={{
          display: "inline-flex",
          gap: "0.8rem",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          <div style={{
            padding: "0.6rem 1.2rem",
            backgroundColor: "#f5f5f5",
            borderRadius: "20px",
            fontSize: "14px",
            color: "#666",
            fontWeight: "500"
          }}>
            💰 Payment Received
          </div>
          <div style={{
            padding: "0.6rem 1.2rem",
            backgroundColor: "#f5f5f5",
            borderRadius: "20px",
            fontSize: "14px",
            color: "#666",
            fontWeight: "500"
          }}>
            🚗 Booking Confirmed
          </div>
          <div style={{
            padding: "0.6rem 1.2rem",
            backgroundColor: "#f5f5f5",
            borderRadius: "20px",
            fontSize: "14px",
            color: "#666",
            fontWeight: "500"
          }}>
            ⏰ Upcoming Trip
          </div>
        </div>
      </div>
    </div>
  );

  const renderPaymentHistory = () => (
    <div style={{ 
      padding: "4rem",
      maxWidth: "1000px",
      margin: "0 auto",
      minHeight: "calc(100vh - 80px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{
        textAlign: "center",
        padding: "3rem"
      }}>
        <div style={{
          width: "200px",
          height: "200px",
          margin: "0 auto 2rem",
          position: "relative"
        }}>
          <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
            <circle cx="100" cy="100" r="90" fill="#f5f0ff" />
            
            <rect x="60" y="50" width="80" height="100" rx="4" fill="white" stroke="#7D00FF" strokeWidth="3" />
            
            <line x1="70" y1="70" x2="130" y2="70" stroke="#7D00FF" strokeWidth="2" opacity="0.7" />
            <line x1="70" y1="85" x2="120" y2="85" stroke="#7D00FF" strokeWidth="2" opacity="0.5" />
            <line x1="70" y1="100" x2="130" y2="100" stroke="#7D00FF" strokeWidth="2" opacity="0.5" />
            <line x1="70" y1="115" x2="110" y2="115" stroke="#7D00FF" strokeWidth="2" opacity="0.5" />
            
            <text x="100" y="140" fontSize="24" fontWeight="bold" fill="#7D00FF" textAnchor="middle">$</text>
            
            <text x="45" y="80" fontSize="20" opacity="0.6">🚗</text>
            <text x="150" y="110" fontSize="20" opacity="0.6">🚙</text>
            
            <circle cx="50" cy="60" r="3" fill="#FFB84D">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="155" cy="70" r="2.5" fill="#A78BFA">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="145" cy="140" r="3" fill="#FF6B6B">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" begin="1s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        <h2 style={{
          margin: "0 0 1rem 0",
          fontSize: "32px",
          fontWeight: "700",
          color: "#1a1a1a",
          letterSpacing: "-1px"
        }}>No Payment History</h2>
        
        <p style={{
          margin: "0 0 2rem 0",
          fontSize: "18px",
          color: "#888",
          lineHeight: "1.6"
        }}>
          Your rental transactions and payment receipts<br />
          will appear here once you book a car
        </p>

        <button 
          onClick={() => setCurrentPage("home")}
          style={{
            padding: "0.85rem 2rem",
            backgroundColor: "#7D00FF",
            border: "none",
            borderRadius: "12px",
            color: "white",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.2s",
            boxShadow: "0 4px 12px rgba(125, 0, 255, 0.3)"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#6a00d9";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#7D00FF";
            e.target.style.transform = "translateY(0)";
          }}
        >
          Browse Rentals
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ 
      minHeight: "100vh",
      backgroundColor: "#f8f9fa",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }}>
      <nav style={{
        backgroundColor: "white",
        padding: "1rem 4rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 100
      }}>
        <h1 style={{
          margin: 0,
          fontSize: "28px",
          fontWeight: "700",
          color: "#7D00FF",
          letterSpacing: "-0.5px",
          cursor: "pointer"
        }}
        onClick={() => setCurrentPage("home")}
        >Rentcars</h1>
        
        <div style={{
          display: "flex",
          gap: "2.5rem",
          alignItems: "center"
        }}>
          <a 
            onClick={() => setCurrentPage("home")}
            style={{ 
              color: currentPage === "home" ? "#333" : "#666", 
              textDecoration: "none", 
              fontWeight: currentPage === "home" ? "600" : "500",
              cursor: "pointer"
            }}>Home</a>
          <a 
            onClick={() => setCurrentPage("browse")}
            style={{ 
              color: currentPage === "browse" ? "#333" : "#666", 
              textDecoration: "none", 
              fontWeight: currentPage === "browse" ? "600" : "500",
              cursor: "pointer"
            }}>Browse</a>
          <a 
            onClick={() => setCurrentPage("notifications")}
            style={{ 
              color: currentPage === "notifications" ? "#333" : "#666", 
              textDecoration: "none", 
              fontWeight: currentPage === "notifications" ? "600" : "500",
              cursor: "pointer"
            }}>Notifications</a>
          <a 
            onClick={() => setCurrentPage("payment")}
            style={{ 
              color: currentPage === "payment" ? "#333" : "#666", 
              textDecoration: "none", 
              fontWeight: currentPage === "payment" ? "600" : "500",
              cursor: "pointer"
            }}>Payment History</a>
        </div>

        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <button 
            onClick={() => goToAuthPage(false)}
            style={{
              padding: "0.65rem 1.5rem",
              backgroundColor: "white",
              border: "2px solid #7D00FF",
              borderRadius: "8px",
              color: "#7D00FF",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "14px",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#7D00FF";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.color = "#7D00FF";
            }}
          >Sign In</button>
          <button 
            onClick={() => goToAuthPage(true)}
            style={{
              padding: "0.65rem 1.5rem",
              backgroundColor: "#7D00FF",
              border: "none",
              borderRadius: "8px",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "14px",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#6a00d9";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#7D00FF";
            }}
          >Sign Up</button>
          <div style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "#7D00FF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "18px",
            color: "white",
            fontWeight: "600"
          }}>
            👤
          </div>
        </div>
      </nav>

      {currentPage === "home" && renderHomePage()}
      {currentPage === "browse" && renderBrowsePage()}
      {currentPage === "notifications" && renderNotifications()}
      {currentPage === "payment" && renderPaymentHistory()}

      {authVisible && renderAuthModal()}
    </div>
  );
};

export default Home;