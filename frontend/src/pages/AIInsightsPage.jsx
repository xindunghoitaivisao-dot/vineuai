import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import { suggestedQuestions, previousInsights } from '../mock';

const AIInsightsPage = () => {
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendQuestion = () => {
    if (!question.trim()) return;
    
    // Add user question to chat
    const userMessage = { type: 'user', text: question, timestamp: new Date().toLocaleString() };
    const aiResponse = {
      type: 'ai',
      text: 'This is a mock response. In the full version, this will connect to OpenAI to provide real insights about your data.',
      confidence: 88,
      timestamp: new Date().toLocaleString()
    };
    
    setChatHistory([...chatHistory, userMessage, aiResponse]);
    setQuestion('');
  };

  const handleSuggestedQuestion = (suggestedQ) => {
    setQuestion(suggestedQ);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="display-medium mb-2">AI Insights</h1>
        <p className="body-medium text-[#4D4D4D]">Ask questions about your data and get AI-powered insights</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <div className="bg-[#121212] border border-[rgba(255,255,255,0.25)] flex flex-col" style={{ height: '600px' }}>
            {/* Chat Messages */}
            <div className="flex-1 p-6 overflow-y-auto space-y-6">
              {chatHistory.length === 0 ? (
                <div className="flex items-center justify-center h-full text-center">
                  <div>
                    <Sparkles size={64} className="mx-auto text-[#00FFD1] mb-4" />
                    <h3 className="heading-2 mb-2">Ask me anything about your data</h3>
                    <p className="body-medium text-[#4D4D4D]">Try one of the suggested questions below to get started</p>
                  </div>
                </div>
              ) : (
                chatHistory.map((message, idx) => (
                  <div key={idx} className={`flex ${
                    message.type === 'user' ? 'justify-end' : 'justify-start'
                  }`}>
                    <div className={`max-w-[80%] p-4 ${
                      message.type === 'user' 
                        ? 'bg-[#00FFD1] text-black' 
                        : 'bg-black border border-[rgba(255,255,255,0.25)]'
                    }`}>
                      <p className="body-medium mb-2">{message.text}</p>
                      {message.confidence && (
                        <p className="body-small text-[#00FFD1]">Confidence: {message.confidence}%</p>
                      )}
                      <p className="body-small text-[#4D4D4D] mt-2">{message.timestamp}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Input Area */}
            <div className="p-6 border-t border-[rgba(255,255,255,0.25)]">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendQuestion()}
                  placeholder="Ask about your data..."
                  className="flex-1 bg-black border border-[rgba(255,255,255,0.25)] px-4 py-3 text-white body-medium focus:outline-none focus:border-[#00FFD1] transition-colors"
                />
                <button onClick={handleSendQuestion} className="btn-primary">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Suggested Questions */}
          <div className="mt-6">
            <h3 className="heading-3 mb-4">Suggested Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSuggestedQuestion(q)}
                  className="text-left p-4 bg-[#121212] border border-[rgba(255,255,255,0.25)] hover:border-[#00FFD1] transition-all duration-300 body-medium"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Previous Insights */}
        <div>
          <div className="bg-[#121212] p-6 border border-[rgba(255,255,255,0.25)]">
            <h3 className="heading-3 mb-6">Previous Insights</h3>
            <div className="space-y-6">
              {previousInsights.map((insight) => (
                <div key={insight.id} className="pb-6 border-b border-[rgba(255,255,255,0.25)] last:border-0">
                  <p className="body-medium font-semibold mb-2">{insight.question}</p>
                  <p className="body-small text-[#4D4D4D] mb-3">{insight.answer.substring(0, 120)}...</p>
                  <div className="flex items-center justify-between">
                    <span className="body-small text-[#00FFD1]">Confidence: {insight.confidence}%</span>
                    <span className="body-small text-[#4D4D4D]">{insight.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 btn-secondary justify-center">View All History</button>
          </div>

          {/* Info Card */}
          <div className="mt-6 bg-[rgba(0,255,209,0.05)] p-6 border border-[#00FFD1]">
            <Sparkles size={32} className="text-[#00FFD1] mb-3" />
            <h4 className="heading-3 mb-2">AI-Powered Insights</h4>
            <p className="body-small text-[rgba(255,255,255,0.85)]">
              Our AI analyzes your business data in real-time to provide actionable insights and recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsightsPage;