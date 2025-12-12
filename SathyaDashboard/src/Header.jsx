import React, { useState } from "react";
import { RiSearchEyeLine } from "react-icons/ri";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaCaretDown, FaBell } from "react-icons/fa";

export default function Header() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div style={styles.navbar}>
    
      <div style={styles.leftSection}>
        <h1 style={styles.title}>SATHYA J</h1>
      </div>

  
      <div style={styles.rightSection}>
      
        <div style={styles.searchContainer}>
          <RiSearchEyeLine size={18} style={{ marginRight: "10px", color: "#666" }} />
          <input 
            type="text" 
            placeholder="Search..." 
            style={styles.searchBox} 
          />
        </div>

        <div style={styles.actionIcon}>
          <FaBell size={18} />
          <span style={styles.badge}>3</span>
        </div>
        
    
        <div style={{ position: "relative" }}>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            style={styles.selectBox}
          >
            <option value="">Quick Actions</option>
            <option value="new-order">New Order</option>
            <option value="add-product">Add Product</option>
            <option value="generate-report">Generate Report</option>
            <option value="settings">Settings</option>
          </select>
          <FaCaretDown style={styles.caretIcon} />
        </div>

        <div style={styles.profile}>
          <IoPersonCircleSharp size={36} />
          <div style={styles.profileInfo}>
            <span style={styles.profileName}>Admin</span>
            <span style={styles.profileRole}>Manager</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: "15px 25px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    marginBottom: "20px",
  },
  leftSection: {
    flex: 1,
  },
  title: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#1e293b",
    margin: 0,
    letterSpacing: "-0.5px",
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: "6px",
    padding: "8px 12px",
    width: "200px",
    border: "1px solid #e2e8f0",
  },
  searchBox: {
    border: "none",
    background: "transparent",
    outline: "none",
    fontSize: "14px",
    color: "#333",
    width: "100%",
  },
  actionIcon: {
    position: "relative",
    cursor: "pointer",
    color: "#666",
    padding: "8px",
    borderRadius: "6px",
    backgroundColor: "#f8f9fa",
  },
  badge: {
    position: "absolute",
    top: "-3px",
    right: "-3px",
    backgroundColor: "#ff4757",
    color: "white",
    borderRadius: "50%",
    width: "16px",
    height: "16px",
    fontSize: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
  },
  selectBox: {
    padding: "8px 30px 8px 12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    backgroundColor: "white",
    color: "#333",
    outline: "none",
    fontSize: "14px",
    cursor: "pointer",
    minWidth: "140px",
  },
  caretIcon: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
    color: "#666",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "6px 10px",
    borderRadius: "6px",
    backgroundColor: "#f8f9fa",
    cursor: "pointer",
  },
  profileInfo: {
    display: "flex",
    flexDirection: "column",
  },
  profileName: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#333",
  },
  profileRole: {
    fontSize: "12px",
    color: "#666",
  },
};