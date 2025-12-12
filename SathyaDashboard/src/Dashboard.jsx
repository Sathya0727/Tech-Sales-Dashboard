import React from 'react';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { FaArrowUp, FaArrowDown, FaDollarSign, FaChartLine, FaShoppingCart, FaDownload, FaDesktop, FaMicrochip, FaMemory, FaHdd, FaTv } from 'react-icons/fa';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {

  const statsCards = [
    {
      title: "Total Revenue",
      value: "₹330,200",
      change: "+10.2%",
      isPositive: true,
      icon:"₹",
      color: "#2196F3"
    },
    {
      title: "Orders Processed",
      value: "290+",
      change: "+5.3%",
      isPositive: true,
      icon: <FaShoppingCart />,
      color: "#6ea9a9ff"
    },
    {
      title: "Products Sold",
      value: "85,452",
      change: "+8.7%",
      isPositive: true,
      icon: <FaChartLine />,
      color: "#9CA3AF"
    },
    {
      title: "New Customers",
      value: "500",
      change: "+12.1%",
      isPositive: true,
      icon: <FaDownload />,
      color: "#e64747ff"
    }
  ];

 
  const performanceStats = [
    {
      title: "Conversion Rate",
      value: "37%",
      subValue: "0% → 100%",
      color: "#d6a5deff"
    },
    {
      title: "Avg. Order Value",
      value: "₹4,59,000",
      subValue: "₹2,33,000 → ₹4,60,000",
      color: "#71d9d9ff",
    },
    {
      title: "Avg. Delivery Time",
      value: "2.3 days",
      subValue: "1 day → 5 days",
      color: "#9dcc84ff",
    }
  ];

  const accessoriesData = [
    { category: "CPU", sales: 120, revenue: 951900, icon: <FaMicrochip />, color: "#4CAF50" },
    { category: "Motherboard", sales: 85, revenue: 799900, icon: <FaDesktop />, color: "#2196F3" },
    { category: "Graphics Card", sales: 65, revenue: 680700, icon: <FaChartLine />, color: "#FF9800" },
    { category: "RAM", sales: 180, revenue: 406000, icon: <FaMemory />, color: "#9C27B0" },
    { category: "SSD", sales: 220, revenue: 292900 ,icon: <FaHdd />, color: "#E91E63" },
    { category: "Monitor", sales: 95, revenue: 198800, icon: <FaTv />, color: "#607D8B" },
  ];


  const statesData = [
    { state: "Tamilnadu", revenue: "₹45,200", growth: "+86%" },
    { state: "Karnataka", revenue: "₹38,700", growth: "+74%" },
    { state: "Kerala", revenue: "₹32,500",  growth: "+52%" },
    { state: "Andhra", revenue: "₹28,900",  growth: "+34%" },
   
  ];

  const productPerformanceData = [
    { product: "RTX 4090 GPU", revenue: "₹56,000", growth: "+65%" },
    { product: "Intel i9 CPU", revenue: "₹42,000", growth: "+42%" },
    { product: "32GB DDR5 RAM", revenue: "₹38,000", growth: "+33%" },
    { product: "2TB NVMe SSD", revenue: "₹32,000", growth: "+22%" },
    { product: "Mpther Board", revenue: "$28,000", growth: "+19%" },
     
  ];

  const monthlySalesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [45000, 52000, 48000, 61000, 58000, 65000, 72000, 68000, 75000, 82000, 78000, 85000],
        fill: true,
        backgroundColor: 'rgba(33, 150, 243, 0.1)',
        borderColor: '#2196F3',
        tension: 0.4,
        pointBackgroundColor: '#2196F3',
      },
    ],
  };

  const productSalesData = {
    labels: ['CPU', 'GPU', 'RAM', 'SSD', 'Motherboard', 'Monitor', 'PSU', 'Cooler'],
    datasets: [
      {
        label: 'Units Sold',
        data: [120, 65, 180, 220, 85, 95, 75, 60],
        backgroundColor: [
          '#4CAF50',
          '#2196F3',
          '#ffe600ff',
          '#9C27B0',
          '#E91E63',
          '#607D8B',
          '#00BCD4',
          '#FF5722'
        ],
        borderRadius: 5,
      },
    ],
  };

  const clusteredColumnData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Online Sales',
        data: [45000, 52000, 48000, 61000],
        backgroundColor: '#292727ff',
      },
      {
        label: 'Retail Sales',
        data: [38000, 45000, 42000, 52000],
        backgroundColor: '#85afd2ff',
      },
      {
        label: 'Bulk Orders',
        data: [28000, 32000, 35000, 42000],
        backgroundColor: '#ff9900ff',
      },
    ],
  };

 
  const multiLineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'CPU Sales',
        data: [12000, 14000, 11000, 16000, 15000, 18000, 17000, 19000, 21000, 23000, 22000, 24000],
        borderColor: '#73cd76ff',
        backgroundColor: 'rgba(76, 175, 80, 0.1)',
        tension: 0.4,
      },
      {
        label: 'GPU Sales',
        data: [18000, 21000, 19000, 23000, 22000, 25000, 24000, 27000, 29000, 32000, 30000, 34000],
        borderColor: '#2196F3',
        backgroundColor: 'rgba(33, 150, 243, 0.1)',
        tension: 0.4,
      },
      {
        label: 'RAM Sales',
        data: [8000, 9500, 8700, 11000, 10500, 12000, 11500, 13000, 14000, 15500, 14500, 16000],
        borderColor: '#f46d24ff',
        backgroundColor: 'rgba(255, 152, 0, 0.1)',
        tension: 0.4,
      },
      {
        label: 'SSD Sales',
        data: [6000, 7500, 6800, 9000, 8500, 10000, 9500, 11000, 12000, 13500, 12500, 14000],
        borderColor: '#c98bd4ff',
        backgroundColor: 'rgba(156, 39, 176, 0.1)',
        tension: 0.4,
      },
     
      {
        label: 'Motherboard Sales',
        data: [4000, 5500, 4800, 7000, 6500, 8000, 7500, 9000, 10000, 11500, 10500, 12000],
        borderColor: '#c64c75ff',
        backgroundColor: 'rgba(233, 30, 99, 0.1)',
        tension: 0.4,
      },
    ],
  };


  const categoryPieData = {
    labels: ['CPU', 'GPU', 'RAM', 'SSD', 'Motherboard', 'Monitor'],
    datasets: [
      {
        label: 'Revenue Share',
        data: [25, 35, 15, 12, 8, 5],
        backgroundColor: [
          '#0accccff',
          '#175181ff',
          '#eddabcff',
          '#c299c9ff',
          '#ce64b0ff',
          '#607D8B'
        ],
        borderWidth: 0,
        hoverOffset: 15,
      },
    ],
  };


  const channelPieData = {
    labels: ['Online Store', 'Retail Partners', 'Corporate Bulk', 'Direct Sales'],
    datasets: [
      {
        label: 'Channel Distribution',
        data: [45, 25, 20, 10],
        backgroundColor: [
          '#e2e98cff',
          '#2196F3',
          '#4465dbff',
          '#603067ff'
        ],
        borderWidth: 0,
        hoverOffset: 15,
      },
    ],
  };


  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          font: {
            size: 12
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0,0,0,0.05)'
        },
        ticks: {
          callback: function(value) {
            return '₹' + value;
          }
        }
      },
      x: {
        grid: {
          color: 'rgba(0,0,0,0.05)'
        }
      }
    }
  };

 
  const salesTableData = [
    { id: 1, product: 'Intel Core i9-13900K', category: 'CPU', amount: '₹650', customer: 'Tech Solutions Inc.', date: '2024-01-15', status: 'Delivered' },
    { id: 2, product: 'NVIDIA RTX 4090', category: 'GPU', amount: '₹1,800', customer: 'Gaming Hub', date: '2024-01-14', status: 'Processing' },
    { id: 3, product: 'Corsair 32GB DDR5', category: 'RAM', amount: '₹220', customer: 'PC Builders Co.', date: '2024-01-13', status: 'Delivered' },
    { id: 4, product: 'Samsung 2TB NVMe SSD', category: 'Storage', amount: '₹180', customer: 'Data Systems Ltd.', date: '2024-01-12', status: 'Pending' },
    { id: 5, product: 'ASUS ROG Monitor 27"', category: 'Monitor', amount: '₹450', customer: 'Media Creators', date: '2024-01-11', status: 'Shipped' },
  ];

  return (
    <div style={styles.container}>
    
      <div style={styles.topStats}>
        {statsCards.map((stat, index) => (
          <div key={index} style={{...styles.statCard, borderLeft: `4px solid ${stat.color}`}}>
            <div style={styles.statHeader}>
              <span style={{...styles.statIcon, backgroundColor: `${stat.color}20`}}>
                {stat.icon}
              </span>
              <span style={styles.changeText}>
                {stat.isPositive ? <FaArrowUp style={{color: '#4CAF50'}} /> : <FaArrowDown style={{color: '#F44336'}} />}
                {stat.change}
              </span>
            </div>
            <div style={styles.statContent}>
              <h3 style={styles.statValue}>{stat.value}</h3>
              <p style={styles.statTitle}>{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

     
      <div style={styles.performanceSection}>
        <h3 style={styles.sectionTitle}>Today's Performance</h3>
        <div style={styles.performanceStats}>
          {performanceStats.map((stat, index) => (
            <div key={index} style={{...styles.performanceCard, borderTop: `4px solid ${stat.color}`}}>
              <div style={styles.performanceHeader}>
                <h4 style={styles.performanceTitle}>{stat.title}</h4>
                <div style={{...styles.progressBar, backgroundColor: `${stat.color}30`}}>
                  <div style={{...styles.progressFill, backgroundColor: stat.color, width: '70%'}}></div>
                </div>
              </div>
              <div style={styles.performanceContent}>
                <h2 style={{...styles.performanceValue, color: stat.color}}>{stat.value}</h2>
                <span style={styles.performanceSubValue}>{stat.subValue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.accessoriesSection}>
        <h3 style={styles.sectionTitle}>Computer Accessories Sales</h3>
        <div style={styles.accessoriesGrid}>
          {accessoriesData.map((item, index) => (
            <div key={index} style={styles.accessoryCard}>
              <div style={styles.accessoryHeader}>
                <div style={{...styles.accessoryIcon, color: item.color}}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={styles.accessoryCategory}>{item.category}</h4>
                  <p style={styles.accessorySales}>{item.sales} units sold</p>
                </div>
              </div>
              <div style={styles.accessoryRevenue}>
                <span style={styles.revenueAmount}>₹{item.revenue.toLocaleString()}</span>
                <span style={styles.revenueLabel}>Revenue</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.chartsGrid}>
        
        <div style={styles.chartCard}>
          <div style={styles.chartHeader}>
            <h3 style={styles.chartTitle}>Monthly Revenue Trend</h3>
            <select style={styles.chartSelect}>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>
          </div>
          <div style={styles.chartContainer}>
            <Line data={monthlySalesData} options={chartOptions} />
          </div>
        </div>

       
        <div style={styles.chartCard}>
          <div style={styles.chartHeader}>
            <h3 style={styles.chartTitle}>Product Sales Performance</h3>
            <div style={styles.growthBadge}>
              <FaArrowUp style={{marginRight: '5px'}} />
              18.5% Overall Growth
            </div>
          </div>
          <div style={styles.chartContainer}>
            <Bar data={productSalesData} options={chartOptions} />
          </div>
        </div>
      </div>

    
      <div style={styles.singleChartContainer}>
        <div style={styles.chartCard}>
          <div style={styles.chartHeader}>
            <h3 style={styles.chartTitle}>Quarterly Sales by Channel (Clustered Column)</h3>
            <div style={styles.growthStats}>
              <span style={styles.growthItem}>Total: ₹312,000</span>
              <span style={styles.growthItem}>Growth: +24.3%</span>
            </div>
          </div>
          <div style={styles.chartContainer}>
            <Bar 
              data={clusteredColumnData} 
              options={{
                ...chartOptions,
                scales: {
                  ...chartOptions.scales,
                  x: {
                    ...chartOptions.scales.x,
                    stacked: false,
                  },
                  y: {
                    ...chartOptions.scales.y,
                    stacked: false,
                  }
                }
              }} 
            />
          </div>
        </div>
      </div>

      
      <div style={styles.singleChartContainer}>
        <div style={styles.chartCard}>
          <div style={styles.chartHeader}>
            <h3 style={styles.chartTitle}>Product Category Performance (Multi-line Chart)</h3>
            <select style={styles.chartSelect}>
              <option>All Categories</option>
              <option>CPU Only</option>
              <option>GPU Only</option>
              <option>RAM Only</option>
              <option>SSD Only</option>
              <option>Monitor Only</option>
            </select>
          </div>
          <div style={styles.chartContainer}>
            <Line data={multiLineData} options={chartOptions} />
          </div>
        </div>
      </div>

    
      <div style={styles.twoChartsGrid}>
      
        <div style={styles.chartCard}>
          <div style={styles.chartHeader}>
            <h3 style={styles.chartTitle}>Sales by Product Category</h3>
          </div>
          <div style={styles.pieChartContainer}>
            <Pie data={categoryPieData} options={chartOptions} />
          </div>
          <div style={styles.pieChartFooter}>
            <span style={styles.pieFooterText}>Total Revenue: $250,000</span>
          </div>
        </div>

        
        <div style={styles.chartCard}>
          <div style={styles.chartHeader}>
            <h3 style={styles.chartTitle}>Sales Channel Distribution</h3>
          </div>
          <div style={styles.pieChartContainer}>
            <Pie data={channelPieData} options={chartOptions} />
          </div>
          <div style={styles.pieChartFooter}>
            <span style={styles.pieFooterText}>Online: 45%, Retail: 25%</span>
          </div>
        </div>
      </div>

      
      <div style={styles.dataCardsGrid}>
      
        <div style={styles.dataCard}>
          <div style={styles.chartHeader}>
            <h3 style={styles.chartTitle}>Top 6 Revenue by State</h3>
          </div>
          <div style={styles.statesList}>
            {statesData.map((state, index) => (
              <div key={index} style={styles.stateItem}>
                <div style={styles.stateHeader}>
                  <span style={styles.stateName}>{state.state}</span>
                  <span style={styles.stateRevenue}>{state.revenue}</span>
                </div>
                <div style={styles.stateDetails}>
                  <span style={styles.stateProduct}>{state.topProduct}</span>
                  <span style={{...styles.stateGrowth, color: '#4CAF50'}}>
                    <FaArrowUp style={{marginRight: '3px', fontSize: '10px'}} />
                    {state.growth}
                  </span>
                </div>
                <div style={styles.stateBarContainer}>
                  <div 
                    style={{
                      ...styles.stateBar,
                      width: `${(parseInt(state.revenue.replace(/[^0-9]/g, '')) / 50000) * 100}%`,
                      backgroundColor: ['#4c66af', '#2196F3', '#FF9800', '#9C27B0', '#E91E63', '#607D8B'][index]
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

       
        <div style={styles.dataCard}>
          <div style={styles.chartHeader}>
            <h3 style={styles.chartTitle}>Top 5 Products by Revenue</h3>
          </div>
          <div style={styles.productList}>
            {productPerformanceData.map((product, index) => (
              <div key={index} style={styles.productItem}>
                <div style={styles.productInfo}>
                  <span style={styles.productName}>{product.product}</span>
                  <span style={{...styles.productGrowth, color: '#4CAF50'}}>
                    <FaArrowUp style={{marginRight: '3px'}} />
                    {product.growth}
                  </span>
                </div>
                <div style={styles.productBarContainer}>
                  <div 
                    style={{
                      ...styles.productBar,
                      width: `${(parseInt(product.revenue.replace(/[^0-9]/g, '')) / 60000) * 100}%`,
                      backgroundColor: ['#4CAF50', '#2196F3', '#FF9800', '#9C27B0', '#E91E63'][index]
                    }}
                  >
                    <span style={styles.productValue}>{product.revenue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    
      <div style={styles.tableCard}>
        <div style={styles.tableHeader}>
          <h3 style={styles.tableTitle}>Recent Sales Orders</h3>
          <button style={styles.addButton}>+ New Order</button>
        </div>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Order ID</th>
              <th style={styles.th}>Product</th>
              <th style={styles.th}>Category</th>
              <th style={styles.th}>Amount</th>
              <th style={styles.th}>Customer</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {salesTableData.map((order) => (
              <tr key={order.id}>
                <td style={styles.td}>#ORD-{order.id}</td>
                <td style={{...styles.td, fontWeight: '600'}}>{order.product}</td>
                <td style={styles.td}>
                  <span style={{
                    ...styles.categoryBadge,
                    backgroundColor: order.category === 'CPU' ? '#4CAF5020' : 
                                   order.category === 'GPU' ? '#2196F320' : 
                                   order.category === 'RAM' ? '#FF980020' : 
                                   order.category === 'Storage' ? '#9C27B020' : '#607D8B20',
                    color: order.category === 'CPU' ? '#4CAF50' : 
                          order.category === 'GPU' ? '#2196F3' : 
                          order.category === 'RAM' ? '#FF9800' : 
                          order.category === 'Storage' ? '#9C27B0' : '#607D8B'
                  }}>
                    {order.category}
                  </span>
                </td>
                <td style={styles.td}>{order.amount}</td>
                <td style={styles.td}>{order.customer}</td>
                <td style={styles.td}>{order.date}</td>
                <td style={styles.td}>
                  <span style={{
                    ...styles.statusBadge,
                    backgroundColor: order.status === 'Delivered' ? '#4CAF5020' : 
                                   order.status === 'Processing' ? '#2196F320' : 
                                   order.status === 'Shipped' ? '#FF980020' : '#F4433620',
                    color: order.status === 'Delivered' ? '#4CAF50' : 
                          order.status === 'Processing' ? '#2196F3' : 
                          order.status === 'Shipped' ? '#FF9800' : '#F44336'
                  }}>
                    {order.status}
                  </span>
                </td>
                <td style={styles.td}>
                  <button style={styles.viewButton}>View</button>
                  <button style={styles.editButton}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f5f7fa',
    minHeight: 'calc(100vh - 100px)',
  },
  topStats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  statCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  },
  statHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
  },
  statIcon: {
    fontSize: '20px',
    padding: '10px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  changeText: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '14px',
    fontWeight: '600',
  },
  statContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  statValue: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#333',
    margin: 0,
  },
  statTitle: {
    fontSize: '14px',
    color: '#666',
    margin: 0,
  },
  performanceSection: {
    marginBottom: '30px',
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '20px',
  },
  performanceStats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  performanceCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  },
  performanceHeader: {
    marginBottom: '15px',
  },
  performanceTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#333',
    margin: '0 0 10px 0',
  },
  progressBar: {
    height: '6px',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: '3px',
  },
  performanceContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  performanceValue: {
    fontSize: '32px',
    fontWeight: '700',
    margin: 0,
  },
  performanceSubValue: {
    fontSize: '14px',
    color: '#666',
    backgroundColor: '#f8f9fa',
    padding: '5px 10px',
    borderRadius: '6px',
    display: 'inline-block',
  },
  accessoriesSection: {
    marginBottom: '30px',
  },
  accessoriesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  accessoryCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accessoryHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  accessoryIcon: {
    fontSize: '24px',
    padding: '12px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
  },
  accessoryCategory: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#333',
    margin: 0,
  },
  accessorySales: {
    fontSize: '14px',
    color: '#666',
    margin: '5px 0 0 0',
  },
  accessoryRevenue: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  revenueAmount: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#333',
  },
  revenueLabel: {
    fontSize: '12px',
    color: '#666',
  },
  chartsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  singleChartContainer: {
    marginBottom: '30px',
  },
  twoChartsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  dataCardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  chartCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  },
  dataCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  },
  chartHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  chartTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#333',
    margin: 0,
  },
  chartSelect: {
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid #ddd',
    backgroundColor: 'white',
    color: '#333',
    fontSize: '14px',
  },
  chartContainer: {
    height: '300px',
    width: '100%',
  },
  pieChartContainer: {
    height: '250px',
    width: '100%',
  },
  growthBadge: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#4CAF5020',
    color: '#4CAF50',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '600',
  },
  growthStats: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  growthItem: {
    fontSize: '12px',
    color: '#666',
  },
  pieChartFooter: {
    textAlign: 'center',
    paddingTop: '15px',
    borderTop: '1px solid #eee',
    marginTop: '15px',
  },
  pieFooterText: {
    fontSize: '14px',
    color: '#333',
    fontWeight: '600',
  },
  statesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  stateItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  stateHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stateName: {
    fontSize: '14px',
    color: '#333',
    fontWeight: '600',
  },
  stateRevenue: {
    fontSize: '16px',
    color: '#333',
    fontWeight: '700',
  },
  stateDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '5px',
  },
  stateProduct: {
    fontSize: '12px',
    color: '#666',
  },
  stateGrowth: {
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#4CAF5020',
    padding: '3px 8px',
    borderRadius: '4px',
    fontWeight: '600',
  },
  stateBarContainer: {
    width: '100%',
  },
  stateBar: {
    height: '6px',
    borderRadius: '3px',
    transition: 'width 0.3s',
  },
  productList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  productItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  productInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: {
    fontSize: '14px',
    color: '#333',
    fontWeight: '500',
  },
  productGrowth: {
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#4CAF5020',
    padding: '3px 8px',
    borderRadius: '4px',
    fontWeight: '600',
  },
  productBarContainer: {
    width: '100%',
  },
  productBar: {
    height: '28px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px',
    transition: 'width 0.3s',
  },
  productValue: {
    fontSize: '12px',
    color: 'white',
    fontWeight: '600',
  },
  tableCard: {
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    overflowX: 'auto',
  },
  tableHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  tableTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#333',
    margin: 0,
  },
  addButton: {
    backgroundColor: '#327DFF',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'background-color 0.3s',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    padding: '15px 12px',
    textAlign: 'left',
    borderBottom: '2px solid #f0f0f0',
    color: '#666',
    fontWeight: '600',
    fontSize: '14px',
  },
  td: {
    padding: '15px 12px',
    textAlign: 'left',
    borderBottom: '1px solid #f0f0f0',
    color: '#333',
    fontSize: '14px',
  },
  categoryBadge: {
    padding: '4px 10px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '600',
    display: 'inline-block',
  },
  statusBadge: {
    padding: '5px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    display: 'inline-block',
  },
  viewButton: {
    backgroundColor: '#f8f9fa',
    color: '#666',
    border: '1px solid #ddd',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
    marginRight: '8px',
    transition: 'all 0.3s',
  },
  editButton: {
    backgroundColor: '#327DFF',
    color: 'white',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
    transition: 'all 0.3s',
  },
};