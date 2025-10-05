# VinaEu AI - Backend Integration Contracts

## Overview
This document outlines the API contracts between frontend and backend, what data was mocked in mock.js, and how to integrate them.

## Authentication Flow

### 1. Login Process
**Frontend**: `LoginPage.jsx`
- User clicks "Continue with Google"
- Redirects to: `https://auth.emergentagent.com/?redirect=${encodeURIComponent(redirectUrl)}`
- redirectUrl should be: `${window.location.origin}/dashboard`

**After OAuth**:
- User lands at: `/dashboard#session_id={session_id}`
- Frontend detects session_id in URL hash
- Frontend calls: `POST /api/auth/session` with `{session_id}`
- Backend returns: `{session_token, user: {id, email, name, picture}}`
- Backend sets httpOnly cookie with session_token
- Frontend stores user data in context/state
- Frontend removes hash from URL
- Dashboard loads

### 2. Get Current User
**Endpoint**: `GET /api/auth/me`
**Auth**: Session cookie (automatic) or Bearer token in Authorization header
**Response**: `{id, email, name, picture, created_at}`

### 3. Logout
**Endpoint**: `POST /api/auth/logout`
**Auth**: Session cookie
**Action**: Clears session from DB and removes cookie

## Dashboard APIs

### Metrics
**Endpoint**: `GET /api/dashboard/metrics`
**Auth**: Required
**Response**:
```json
{
  "totalRevenue": {"value": "$2.4M", "trend": 12, "change": "+$284K"},
  "activeCustomers": {"value": "1,847", "trend": 8, "change": "+142"},
  "conversionRate": {"value": "24.3%", "trend": -2, "change": "-0.5%"},
  "aiConfidence": {"value": "94.2%", "trend": 15, "change": "+12.1%"}
}
```
**Frontend**: `DashboardHome.jsx` - Replace `dashboardMetrics` import

### Revenue Data
**Endpoint**: `GET /api/dashboard/revenue`
**Auth**: Required
**Response**: Array of `{month: string, revenue: number}`
**Frontend**: `DashboardHome.jsx` - Replace `revenueData` import

### Customer Segmentation
**Endpoint**: `GET /api/dashboard/customer-segmentation`
**Auth**: Required
**Response**: Array of `{segment: string, value: number, color: string}`
**Frontend**: `DashboardHome.jsx` - Replace `customerSegmentation` import

### Regional Performance
**Endpoint**: `GET /api/dashboard/regional-performance`
**Auth**: Required
**Response**: Array of `{region: string, performance: number}`
**Frontend**: `DashboardHome.jsx` - Replace `regionalPerformance` import

### AI Insights
**Endpoint**: `GET /api/dashboard/ai-insights`
**Auth**: Required
**Response**: Array of insight objects with type, icon, title, message, confidence
**Frontend**: `DashboardHome.jsx` - Replace `aiInsights` import

## Reports APIs

### Get Reports
**Endpoint**: `GET /api/reports`
**Auth**: Required
**Response**: Array of report objects
**Frontend**: `DashboardHome.jsx` - Replace `recentReports` import

### Get Report Categories
**Endpoint**: `GET /api/report-categories`
**Auth**: Required
**Response**: Array of report category objects
**Frontend**: `ReportsPage.jsx` - Replace `reportCategories` import

## AI Chat APIs

### Send Message
**Endpoint**: `POST /api/ai/chat`
**Auth**: Required
**Request**: `{question: string}`
**Response**: `{answer: string, confidence: number, timestamp: string}`
**Frontend**: `AIInsightsPage.jsx` - Replace mock chat response

### Get Chat History
**Endpoint**: `GET /api/ai/history`
**Auth**: Required
**Response**: Array of `{id, question, answer, confidence, timestamp}`
**Frontend**: `AIInsightsPage.jsx` - Replace `previousInsights` import

## Integration Steps

### Phase 1: Authentication Setup
1. Create AuthContext in frontend
2. Handle session_id processing on dashboard mount
3. Store user data in context
4. Add axios interceptor for auth headers
5. Implement protected route wrapper

### Phase 2: Dashboard Integration
1. Replace all mock data imports with API calls
2. Use useEffect to fetch data on mount
3. Add loading states
4. Add error handling

### Phase 3: AI Chat Integration
1. Update handleSendQuestion to call `/api/ai/chat`
2. Update chat history to call `/api/ai/history`
3. Remove mock response logic

### Phase 4: Reports Integration
1. Fetch reports from `/api/reports`
2. Fetch categories from `/api/report-categories`

## Error Handling
- 401: Redirect to login
- 403: Show permission denied
- 500: Show generic error message
- Network errors: Show retry option

## Current Mock Data in mock.js
- `blogPosts` - Keep (no backend yet)
- `industryLogos` - Keep (static data)
- `dashboardMetrics` - Remove (use API)
- `revenueData` - Remove (use API)
- `customerSegmentation` - Remove (use API)
- `regionalPerformance` - Remove (use API)
- `aiInsights` - Remove (use API)
- `recentReports` - Remove (use API)
- `reportCategories` - Remove (use API)
- `suggestedQuestions` - Keep (static data)
- `previousInsights` - Remove (use API)
