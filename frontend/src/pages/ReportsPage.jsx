import React, { useState } from 'react';
import { FileText, Plus, Filter } from 'lucide-react';
import { reportCategories } from '../mock';

const ReportsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const filters = ['All', 'Financial', 'Marketing', 'Strategy', 'Operations', 'Research', 'Compliance'];

  const filteredReports = selectedFilter === 'All' 
    ? reportCategories 
    : reportCategories.filter(report => report.type === selectedFilter);

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="display-medium mb-2">Reports</h1>
          <p className="body-medium text-[#4D4D4D]">Generate and manage your business reports</p>
        </div>
        <button className="btn-primary">
          <Plus size={20} /> Create Custom Report
        </button>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 text-[#4D4D4D]">
            <Filter size={20} />
            <span className="body-medium">Filter:</span>
          </div>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2 transition-all duration-300 ${
                selectedFilter === filter
                  ? 'btn-primary'
                  : 'btn-secondary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReports.map((report, idx) => (
          <div key={idx} className="bg-[#121212] border border-[rgba(255,255,255,0.25)] p-6 dark-hover dark-transition group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-[rgba(0,255,209,0.1)] flex items-center justify-center">
                <FileText size={24} className="text-[#00FFD1]" />
              </div>
              <span className="px-3 py-1 bg-black text-[#00FFD1] body-small">{report.type}</span>
            </div>
            <h3 className="heading-3 mb-3">{report.title}</h3>
            <p className="body-medium text-[#4D4D4D] mb-4">{report.description}</p>
            <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.25)]">
              <p className="body-small text-[#4D4D4D]">Last: {report.lastGenerated}</p>
              <button className="text-[#00FFD1] body-medium hover:underline">Generate</button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredReports.length === 0 && (
        <div className="text-center py-20">
          <FileText size={64} className="mx-auto text-[#4D4D4D] mb-4" />
          <h3 className="heading-2 mb-2">No reports found</h3>
          <p className="body-medium text-[#4D4D4D]">Try adjusting your filters or create a custom report</p>
        </div>
      )}
    </div>
  );
};

export default ReportsPage;