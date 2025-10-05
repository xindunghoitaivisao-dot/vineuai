import React from 'react';
import { BarChart3, TrendingUp, PieChart, Activity } from 'lucide-react';
import { revenueData, customerSegmentation, regionalPerformance } from '../mock';

const AnalyticsPage = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="display-medium mb-2">Analytics</h1>
        <p className="body-medium text-[#4D4D4D]">Detailed insights and performance metrics</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-[#121212] p-6 border border-[rgba(255,255,255,0.25)]">
          <BarChart3 size={32} className="text-[#00FFD1] mb-4" />
          <h3 className="heading-3 mb-2">Total Sessions</h3>
          <p className="display-medium">45.2K</p>
          <p className="body-small text-[#00FFD1] mt-2">+12.3% vs last month</p>
        </div>
        <div className="bg-[#121212] p-6 border border-[rgba(255,255,255,0.25)]">
          <TrendingUp size={32} className="text-[#00FFD1] mb-4" />
          <h3 className="heading-3 mb-2">Avg Session Duration</h3>
          <p className="display-medium">8m 42s</p>
          <p className="body-small text-[#00FFD1] mt-2">+5.7% vs last month</p>
        </div>
        <div className="bg-[#121212] p-6 border border-[rgba(255,255,255,0.25)]">
          <PieChart size={32} className="text-[#00FFD1] mb-4" />
          <h3 className="heading-3 mb-2">Bounce Rate</h3>
          <p className="display-medium">32.4%</p>
          <p className="body-small text-red-500 mt-2">-2.1% vs last month</p>
        </div>
        <div className="bg-[#121212] p-6 border border-[rgba(255,255,255,0.25)]">
          <Activity size={32} className="text-[#00FFD1] mb-4" />
          <h3 className="heading-3 mb-2">Page Views</h3>
          <p className="display-medium">124K</p>
          <p className="body-small text-[#00FFD1] mt-2">+18.9% vs last month</p>
        </div>
      </div>

      {/* Detailed Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue Trend */}
        <div className="bg-[#121212] p-6 border border-[rgba(255,255,255,0.25)]">
          <h3 className="heading-2 mb-6">Revenue Trend Analysis</h3>
          <div className="h-80 flex items-end justify-between gap-3">
            {revenueData.map((data, idx) => {
              const maxRevenue = Math.max(...revenueData.map(d => d.revenue));
              const height = (data.revenue / maxRevenue) * 100;
              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-3 group">
                  <div className="relative w-full">
                    <div 
                      className="w-full bg-[#00FFD1] transition-all duration-500 hover:bg-[#6FD2C0] cursor-pointer" 
                      style={{ height: `${height * 3}px` }}
                    ></div>
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black px-3 py-2 border border-[#00FFD1] whitespace-nowrap transition-opacity">
                      <p className="body-small">${(data.revenue / 1000000).toFixed(1)}M</p>
                    </div>
                  </div>
                  <p className="body-small text-[#4D4D4D]">{data.month}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Regional Deep Dive */}
        <div className="bg-[#121212] p-6 border border-[rgba(255,255,255,0.25)]">
          <h3 className="heading-2 mb-6">Regional Performance Deep Dive</h3>
          <div className="space-y-6">
            {regionalPerformance.map((region, idx) => (
              <div key={idx} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="body-medium font-semibold">{region.region}</p>
                    <p className="body-small text-[#4D4D4D]">Performance Score</p>
                  </div>
                  <div className="text-right">
                    <p className="heading-3 text-[#00FFD1]">{region.performance}%</p>
                  </div>
                </div>
                <div className="w-full bg-black h-4 relative overflow-hidden">
                  <div 
                    className="h-full bg-[#00FFD1] transition-all duration-700 group-hover:bg-[#6FD2C0]"
                    style={{ width: `${region.performance}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Behavior Analysis */}
      <div className="bg-[#121212] p-6 border border-[rgba(255,255,255,0.25)] mb-8">
        <h3 className="heading-2 mb-6">Customer Behavior Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="heading-3 mb-4">Top Actions</h4>
            <div className="space-y-3">
              {[
                { action: 'View Dashboard', count: '12.4K', percentage: 85 },
                { action: 'Generate Report', count: '8.2K', percentage: 65 },
                { action: 'Export Data', count: '5.1K', percentage: 45 },
                { action: 'AI Query', count: '3.8K', percentage: 35 }
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="body-medium">{item.action}</span>
                    <span className="body-small text-[#4D4D4D]">{item.count}</span>
                  </div>
                  <div className="w-full bg-black h-2">
                    <div className="h-full bg-[#00FFD1]" style={{ width: `${item.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="heading-3 mb-4">Device Breakdown</h4>
            <div className="space-y-3">
              {[
                { device: 'Desktop', percentage: 65 },
                { device: 'Mobile', percentage: 25 },
                { device: 'Tablet', percentage: 10 }
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="body-medium">{item.device}</span>
                    <span className="body-small text-[#00FFD1]">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-black h-2">
                    <div className="h-full bg-[#00FFD1]" style={{ width: `${item.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="heading-3 mb-4">Traffic Sources</h4>
            <div className="space-y-3">
              {[
                { source: 'Direct', percentage: 45 },
                { source: 'Organic Search', percentage: 30 },
                { source: 'Referral', percentage: 15 },
                { source: 'Social', percentage: 10 }
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="body-medium">{item.source}</span>
                    <span className="body-small text-[#00FFD1]">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-black h-2">
                    <div className="h-full bg-[#00FFD1]" style={{ width: `${item.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-[#121212] p-6 border border-[rgba(255,255,255,0.25)]">
        <h3 className="heading-3 mb-4">Export Analytics</h3>
        <div className="flex gap-4">
          <button className="btn-primary">Export as PDF</button>
          <button className="btn-secondary">Export as Excel</button>
          <button className="btn-secondary">Export as CSV</button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;