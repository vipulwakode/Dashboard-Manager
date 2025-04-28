import { generateUniqueId } from "../utils/helper";

export const availableWidgets = [
  { id: generateUniqueId(), name: 'Security Posture', content: 'Security posture content here...' },
  { id: generateUniqueId(), name: 'Compliance Status', content: 'Compliance status details...' },
  { id: generateUniqueId(), name: 'Response Time', content: 'Average response time metrics...' },
  { id: generateUniqueId(), name: 'Error Rate', content: 'System error rate analysis...' },
  { id: generateUniqueId(), name: 'User Activity', content: 'Track user activity and engagement...' },
  { id: generateUniqueId(), name: 'System Health', content: 'Real-time system health status...' },
  { id: generateUniqueId(), name: 'Incident Reports', content: 'Summary of recent incident reports...' },
  { id: generateUniqueId(), name: 'Login Analytics', content: 'Monitor login trends and patterns...' },
  { id: generateUniqueId(), name: 'API Performance', content: 'Monitor API response and uptime...' },
  { id: generateUniqueId(), name: 'Storage Usage', content: 'Current storage consumption metrics...' },
  { id: generateUniqueId(), name: 'Network Traffic', content: 'Real-time network traffic analysis...' },
  { id: generateUniqueId(), name: 'Patch Updates', content: 'Latest security patch updates applied...' }
];

export const initialData = {
  categories: [
    {
      id: 'cat1',
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: generateUniqueId(), name: 'Security Posture', content: 'Security posture content here...' },
        { id: generateUniqueId(), name: 'Compliance Status', content: 'Compliance status details...' },
        { id: generateUniqueId(), name: 'Threat Detection', content: 'Threat detection metrics and alerts...' },
      ]
    },
    {
      id: 'cat2',
      name: 'Performance Metrics',
      widgets: [
        { id: generateUniqueId(), name: 'Response Time', content: 'Average response time metrics...' },
        { id: generateUniqueId(), name: 'Error Rate', content: 'System error rate analysis...' },
        { id: generateUniqueId(), name: 'Uptime', content: 'System uptime statistics and reports...' },
      ]
    },
    {
      id: 'cat3',
      name: 'User Insights',
      widgets: [
        { id: generateUniqueId(), name: 'User Activity', content: 'Track user activity and engagement...' },
        { id: generateUniqueId(), name: 'Login Analytics', content: 'Monitor login trends and patterns...' },
        { id: generateUniqueId(), name: 'Account Creation Rate', content: 'New account registrations over time...' }
      ]
    },
    {
      id: 'cat4',
      name: 'Infrastructure Monitoring',
      widgets: [
        { id: generateUniqueId(), name: 'System Health', content: 'Real-time system health status...' },
        { id: generateUniqueId(), name: 'Storage Usage', content: 'Current storage consumption metrics...' },
        { id: generateUniqueId(), name: 'Network Traffic', content: 'Real-time network traffic analysis...' },
      ]
    },
    {
      id: 'cat5',
      name: 'Incident Management',
      widgets: [
        { id: generateUniqueId(), name: 'Incident Reports', content: 'Summary of recent incident reports...' },
        { id: generateUniqueId(), name: 'Mean Time to Recovery (MTTR)', content: 'Average time to recover from incidents...' },
        { id: generateUniqueId(), name: 'Open Tickets', content: 'Count of currently open support tickets...' }
      ]
    }
  ]
};
