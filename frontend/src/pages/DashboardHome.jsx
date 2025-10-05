import React from 'react';
import { TrendingUp, TrendingDown, Users, DollarSign, Target, Lightbulb, AlertTriangle, Download, Share2, Eye } from 'lucide-react';
import { dashboardMetrics, revenueData, customerSegmentation, regionalPerformance, aiInsights, recentReports } from '../mock';

const DashboardHome = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="display-medium mb-2">Dashboard Overview</h1>
        <p className="body-medium text-[#4D4D4D]">Welcome back! Here's what's happening with your business today.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-[#121212] p-6 border border-[rgba(255,255,255,0.25)]">
          <div className="flex items-center justify-between mb-4">
            <p className="body-medium text-[#4D4D4D]">Total Revenue</p>
            <DollarSign size={20} className="text-[#00FFD1]" />
          </div>
          <h3 className="display-medium mb-2">{dashboardMetrics.totalRevenue.value}</h3>
          <div className={`flex items-center gap-2 ${
            dashboardMetrics.totalRevenue.trend > 0 ? 'text-[#00FFD1]' : 'text-red-500'
          }`}>
            {dashboardMetrics.totalRevenue.trend > 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            <span className="body-small">{dashboardMetrics.totalRevenue.trend > 0 ? '+' : ''}{dashboardMetrics.totalRevenue.trend}% ({dashboardMetrics.totalRevenue.change})</span>
          </div>
        </div>

        <div className="bg-[#121212] p-6 border border-[rgba(255,255,255,0.25)]">
          <div className="flex items-center justify-between mb-4">
            <p className="body-medium text-[#4D4D4D]">Active Customers</p>
            <Users size={20} className="text-[#00FFD1]" />
          </div>
          <h3 className="display-medium mb-2">{dashboardMetrics.activeCustomers.value}</h3>
          <div className={`flex items-center gap-2 ${
            dashboardMetrics.activeCustomers.trend > 0 ? 'text-[#00FFD1]' : 'text-red-500'
          }`}>
            {dashboardMetrics.activeCustomers.trend > 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            <span className="body-small">{dashboardMetrics.activeCustomers.trend > 0 ? '+' : ''}{dashboardMetrics.activeCustomers.trend}% ({dashboardMetrics.activeCustomers.change})</span>
          </div>
        </div>

        <div className="bg-[#121212] p-6 border border-[rgba(255,255,255,0.25)]">
          <div className="flex items-center justify-between mb-4">
            <p className="body-medium text-[#4D4D4D]">Conversion Rate</p>
            <Target size={20} className="text-[#00FFD1]" />
          </div>
          <h3 className="display-medium mb-2">{dashboardMetrics.conversionRate.value}</h3>
          <div className={`flex items-center gap-2 ${
            dashboardMetrics.conversionRate.trend > 0 ? 'text-[#00FFD1]' : 'text-red-500'
          }`}>
            {dashboardMetrics.conversionRate.trend > 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            <span className="body-small">{dashboardMetrics.conversionRate.trend > 0 ? '+' : ''}{dashboardMetrics.conversionRate.trend}% ({dashboardMetrics.conversionRate.change})</span>
          </div>
        </div>

        <div className="bg-[#121212] p-6 border border-[rgba(255,255,255,0.25)]">
          <div className="flex items-center justify-between mb-4">
            <p className="body-medium text-[#4D4D4D]">AI Confidence Score</p>
            <Lightbulb size={20} className="text-[#00FFD1]" />
          </div>
          <h3 className="display-medium mb-2">{dashboardMetrics.aiConfidence.value}</h3>
          <div className={`flex items-center gap-2 ${
            dashboardMetrics.aiConfidence.trend > 0 ? 'text-[#00FFD1]' : 'text-red-500'
          }`}>
            {dashboardMetrics.aiConfidence.trend > 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            <span className="body-small">{dashboardMetrics.aiConfidence.trend > 0 ? '+' : ''}{dashboardMetrics.aiConfidence.trend}% ({dashboardMetrics.aiConfidence.change})</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue Chart */}
        <div className="bg-[#121212] p-6 border border-[rgba(255,255,255,0.25)]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="heading-2">Revenue Analytics</h3>
            <select className="bg-black border border-[rgba(255,255,255,0.25)] px-4 py-2 text-white body-small focus:outline-none focus:border-[#00FFD1]">
              <option>Last 6 months</option>
              <option>Last 30 days</option>
              <option>Last 7 days</option>
            </select>
          </div>
          <div className="h-64 flex items-end justify-between gap-4">
            {revenueData.map((data, idx) => {
              const maxRevenue = Math.max(...revenueData.map(d => d.revenue));
              const height = (data.revenue / maxRevenue) * 100;
              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-3">
                  <div className="w-full bg-[#00FFD1] transition-all duration-500 hover:bg-[#6FD2C0]" style={{ height: `${height}%` }}></div>
                  <p className="body-small text-[#4D4D4D]">{data.month}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Customer Segmentation */}
        <div className="bg-[#121212] p-6 border border-[rgba(255,255,255,0.25)]">
          <h3 className="heading-2 mb-6">Customer Segmentation</h3>
          <div className="flex items-center justify-center h-64">
            <div className="relative w-48 h-48">
              {customerSegmentation.map((segment, idx) => {
                const offset = customerSegmentation.slice(0, idx).reduce((acc, s) => acc + s.value, 0);
                return (
                  <div key={idx} className="absolute inset-0">
                    <svg className="transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke={segment.color}
                        strokeWidth="20"
                        strokeDasharray={`${segment.value * 2.513} ${251.3 - segment.value * 2.513}`}
                        strokeDashoffset={-offset * 2.513}
                      />
                    </svg>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-6">
            {customerSegmentation.map((segment, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-4 h-4" style={{ backgroundColor: segment.color }}></div>
                <span className="body-small">{segment.segment}: {segment.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Row Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Regional Performance */}
        <div className="bg-[#121212] p-6 border border-[rgba(255,255,255,0.25)]">
          <h3 className="heading-2 mb-6">Sales Performance by Region</h3>
          <div className="space-y-4">
            {regionalPerformance.map((region, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <span className="body-medium">{region.region}</span>
                  <span className="body-medium text-[#00FFD1]">{region.performance}%</span>
                </div>
                <div className="w-full bg-black h-3">
                  <div 
                    className="h-full bg-[#00FFD1] transition-all duration-500"
                    style={{ width: `${region.performance}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insights Panel */}
        <div className="bg-[#121212] p-6 border border-[rgba(255,255,255,0.25)]">
          <h3 className="heading-2 mb-6">Today's Key Insights</h3>
          <div className="space-y-4">
            {aiInsights.slice(0, 4).map((insight, idx) => {
              const iconMap = {
                TrendingUp: TrendingUp,
                AlertTriangle: AlertTriangle,
                Lightbulb: Lightbulb,
                Target: Target
              };
              const Icon = iconMap[insight.icon];
              return (
                <div key={idx} className="flex items-start gap-3 p-4 bg-black border border-[rgba(255,255,255,0.25)] hover:border-[#00FFD1] transition-colors">
                  <Icon size={20} className={`mt-1 ${
                    insight.type === 'success' ? 'text-[#00FFD1]' : 
                    insight.type === 'warning' ? 'text-yellow-500' : 
                    'text-white'
                  }`} />
                  <div className="flex-1">
                    <h4 className="body-medium font-semibold mb-1">{insight.title}</h4>
                    <p className="body-small text-[#4D4D4D]">{insight.message}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="w-full mt-6 btn-secondary justify-center">View All Insights</button>
        </div>
      </div>

      {/* Recent Reports Table */}
      <div className="bg-[#121212] p-6 border border-[rgba(255,255,255,0.25)]">
        <h3 className="heading-2 mb-6">Recent Reports</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.25)]">
                <th className="text-left py-4 body-medium text-[#4D4D4D]">Report Name</th>
                <th className="text-left py-4 body-medium text-[#4D4D4D]">Date Generated</th>
                <th className="text-left py-4 body-medium text-[#4D4D4D]">Type</th>
                <th className="text-left py-4 body-medium text-[#4D4D4D]">Status</th>
                <th className="text-right py-4 body-medium text-[#4D4D4D]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentReports.map((report) => (
                <tr key={report.id} className="border-b border-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                  <td className="py-4 body-medium">{report.name}</td>
                  <td className="py-4 body-medium text-[#4D4D4D]">{report.date}</td>
                  <td className="py-4">
                    <span className="px-3 py-1 bg-[rgba(0,255,209,0.1)] text-[#00FFD1] body-small">{report.type}</span>
                  </td>
                  <td className="py-4">
                    <span className={`px-3 py-1 body-small ${
                      report.status === 'Ready' ? 'bg-[rgba(0,255,209,0.1)] text-[#00FFD1]' : 'bg-[rgba(255,255,255,0.1)] text-[#4D4D4D]'
                    }`}>{report.status}</span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-[rgba(255,255,255,0.1)] transition-colors" title="View">
                        <Eye size={18} className="text-[#00FFD1]" />
                      </button>
                      <button className="p-2 hover:bg-[rgba(255,255,255,0.1)] transition-colors" title="Download">
                        <Download size={18} className="text-[#00FFD1]" />
                      </button>
                      <button className="p-2 hover:bg-[rgba(255,255,255,0.1)] transition-colors" title="Share">
                        <Share2 size={18} className="text-[#00FFD1]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;