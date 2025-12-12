import React, { useState } from "react";
import { 
  FaTachometerAlt, 
  FaShoppingCart, 
  FaBox, 
  FaChartBar,
  FaUsers,
  FaWarehouse,
  FaDollarSign,
  FaCog,
  FaDesktop,
  FaMicrochip,
  FaMemory,
  FaHdd
} from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const [hovered, setHovered] = useState(null);
  const location = useLocation();

  const menuItems = [
    { label: "Dashboard", icon: <FaTachometerAlt />, path: "/" },
    { label: "Products", icon: <FaBox />, path: "/products" },
    { label: "Orders", icon: <FaShoppingCart />, path: "/orders" },
    { label: "Customers", icon: <FaUsers />, path: "/customers" },
    { label: "Inventory", icon: <FaWarehouse />, path: "/inventory" },
    { label: "Analytics", icon: <FaChartBar />, path: "/analytics" },
    { label: "Revenue", icon: <FaDollarSign />, path: "/revenue" },
    { label: "Settings", icon: <FaCog />, path: "/settings" },
  ];

  const productCategories = [
    { label: "CPUs", icon: <FaMicrochip />, color: "#4CAF50" },
    { label: "GPUs", icon: <FaChartBar />, color: "#2196F3" },
    { label: "RAM", icon: <FaMemory />, color: "#FF9800" },
    { label: "Storage", icon: <FaHdd />, color: "#9C27B0" },
    { label: "Motherboards", icon: <FaDesktop />, color: "#E91E63" },
  ];

  return (
    <div style={styles.sidebar}>
      <div style={styles.header}>
        <div style={styles.logoCircle}>
          <FcManager size={40} />
        </div>
        <h3 style={styles.title}>TECH SALES MONITOR</h3>
        <p style={styles.subtitle}>Computer Accessories & Components</p>
      </div>

      <div style={styles.categorySection}>
        <h4 style={styles.categoryTitle}>Product Categories</h4>
        <div style={styles.categories}>
          {productCategories.map((category, index) => (
            <div key={index} style={styles.categoryItem}>
              <div style={{...styles.categoryIcon, color: category.color}}>
                {category.icon}
              </div>
              <span style={styles.categoryLabel}>{category.label}</span>
            </div>
          ))}
        </div>
      </div>

      <nav style={styles.nav}>
        {menuItems.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            style={{
              ...styles.navItem,
              backgroundColor: location.pathname === item.path ? "#327DFF" : 
                             hovered === index ? "#327DFF20" : "transparent",
              color: location.pathname === item.path ? "white" : 
                     hovered === index ? "#327DFF" : "#b0b7c3",
              borderLeft: location.pathname === item.path ? "4px solid #327DFF" : "4px solid transparent",
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={{
              ...styles.icon,
              color: location.pathname === item.path ? "white" : 
                     hovered === index ? "#327DFF" : "#b0b7c3"
            }}>
              {item.icon}
            </div>
            <span style={styles.label}>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div style={styles.footer}>
        <div style={styles.stats}>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>24/7</span>
            <span style={styles.statLabel}>Support</span>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>500+</span>
            <span style={styles.statLabel}>Products</span>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>99%</span>
            <span style={styles.statLabel}>Uptime</span>
          </div>
        </div>
        <div style={styles.salesInfo}>
          <div style={styles.salesItem}>
            <span style={styles.salesLabel}>Today's Sales</span>
            <span style={styles.salesValue}>$12,450</span>
          </div>
          <div style={styles.salesItem}>
            <span style={styles.salesLabel}>Active Orders</span>
            <span style={styles.salesValue}>48</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "280px",
    height: "100vh",
    background: "linear-gradient(to bottom, #0b0a0aff, #131313ff)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 1000,
    borderRight: "1px solid #334155",
  },
  header: {
    textAlign: "center",
    padding: "30px 20px",
    borderBottom: "1px solid #334155",
  },
  logoCircle: {
    margin: "0 auto 15px",
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundColor: "#1e293b",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
    border: "2px solid #334155",
  },
  title: {
    marginTop: "10px",
    fontWeight: "bold",
    fontSize: "18px",
    color: "#e2e8f0",
    letterSpacing: "0.5px",
  },
  subtitle: {
    fontSize: "12px",
    color: "#94a3b8",
    marginTop: "5px",
  },
  categorySection: {
    padding: "20px",
    borderBottom: "1px solid #334155",
  },
  categoryTitle: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#94a3b8",
    marginBottom: "15px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  categories: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  categoryItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#1e293b",
    padding: "8px 12px",
    borderRadius: "6px",
    border: "1px solid #334155",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  categoryItemHover: {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },
  categoryIcon: {
    fontSize: "14px",
  },
  categoryLabel: {
    fontSize: "12px",
    color: "#e2e8f0",
    fontWeight: "500",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    padding: "20px 0",
    flex: 1,
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    textDecoration: "none",
    padding: "12px 25px",
    margin: "4px 0",
    transition: "all 0.3s ease",
    borderLeft: "4px solid transparent",
  },
  icon: {
    fontSize: "18px",
    width: "24px",
    textAlign: "center",
    transition: "color 0.3s ease",
  },
  label: {
    fontSize: "14px",
    fontWeight: "500",
    transition: "color 0.3s ease",
  },
  footer: {
    padding: "20px",
    borderTop: "1px solid #334155",
    backgroundColor: "#1e293b",
  },
  stats: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  statNumber: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#e2e8f0",
  },
  statLabel: {
    fontSize: "11px",
    color: "#94a3b8",
    marginTop: "3px",
  },
  salesInfo: {
    backgroundColor: "#0f172a",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #334155",
  },
  salesItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },
  salesItemLast: {
    marginBottom: "0",
  },
  salesLabel: {
    fontSize: "12px",
    color: "#94a3b8",
  },
  salesValue: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#4CAF50",
  },
};