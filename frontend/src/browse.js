import React from "react";

const Browse = () => {
  const carList = [
    {
      id: 1,
      name: "Porsche 911",
      brand: "Porsche",
      location: "Denver, CO",
      price: 650,
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      features: ["Auto", "Premium"]
    },
    {
      id: 2,
      name: "Tesla Model S",
      brand: "Tesla",
      location: "San Francisco, CA",
      price: 580,
      img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80",
      features: ["Electric", "Auto"]
    },
    {
      id: 3,
      name: "BMW X5",
      brand: "BMW",
      location: "Los Angeles, CA",
      price: 520,
      img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
      features: ["SUV", "Luxury"]
    },
    {
      id: 4,
      name: "Mercedes S-Class",
      brand: "Mercedes",
      location: "Miami, FL",
      price: 680,
      img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
      features: ["Luxury", "Premium"]
    },
    {
      id: 5,
      name: "Audi Q7",
      brand: "Audi",
      location: "New York, NY",
      price: 590,
      img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
      features: ["SUV", "Luxury"]
    },
    {
      id: 6,
      name: "Ford Mustang",
      brand: "Ford",
      location: "Austin, TX",
      price: 480,
      img: "https://images.unsplash.com/photo-1597006681591-fbb1a0ebd00b?w=800&q=80",
      features: ["Sport", "Manual"]
    }
  ];

  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "#f8f9fa", 
      padding: "4rem",
      maxWidth: "1400px",
      margin: "0 auto"
    }}>
      <h2 style={{ 
        fontSize: "36px", 
        fontWeight: "700", 
        color: "#1a1a1a", 
        marginBottom: "1rem" 
      }}>Browse Cars</h2>
      <p style={{ fontSize: "16px", color: "#666", marginBottom: "2rem" }}>
        Explore all car brands and rental options
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "2rem"
      }}>
        {carList.map((car) => (
          <div key={car.id} style={{
            backgroundColor: "white",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            cursor: "pointer",
            transition: "transform 0.3s, box-shadow 0.3s"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
          }}
          >
            <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
              <img 
                src={car.img} 
                alt={car.name} 
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s" }}
                onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
              />
            </div>
            <div style={{ padding: "1.5rem" }}>
              <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "20px", fontWeight: "700", color: "#1a1a1a" }}>
                {car.name}
              </h4>
              <div style={{ fontSize: "14px", color: "#888", marginBottom: "0.5rem" }}>
                📍 {car.location}
              </div>
              <div style={{ fontSize: "16px", fontWeight: "600", color: "#7D00FF", marginBottom: "0.75rem" }}>
                ${car.price}/day
              </div>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                {car.features.map((feat, idx) => (
                  <div key={idx} style={{
                    backgroundColor: "#f5f5f5",
                    padding: "0.3rem 0.7rem",
                    borderRadius: "16px",
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "#555"
                  }}>
                    {feat}
                  </div>
                ))}
              </div>
              <button style={{
                width: "100%",
                padding: "0.7rem",
                backgroundColor: "#7D00FF",
                color: "white",
                border: "none",
                borderRadius: "12px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s"
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
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
