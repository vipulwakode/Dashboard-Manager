import { generateUniqueId } from "../utils/helper";

export const availableWidgets = [
    { id: generateUniqueId(), name: 'Security Posture', content: 'Security posture content here...' },
    { id: generateUniqueId(), name: 'Compliance Status', content: 'Compliance status details...' },
    { id: generateUniqueId(), name: 'Response Time', content: 'Average response time metrics...' },
    { id: generateUniqueId(), name: 'Error Rate', content: 'System error rate analysis...' }
  ];

export const initialData = {
    categories: [
      {
        id: 'cat1',
        name: 'CSPM Executive Dashboard',
        widgets: [
          { id: generateUniqueId(), name: 'Security Posture', content: 'Security posture content here...' },
          { id: generateUniqueId(), name: 'Compliance Status', content: 'Compliance status details...' },
          { id: generateUniqueId(),name: 'Threat Detection', content: 'Threat detection metrics and alerts...' }
        ]
      },
      {
        id: 'cat2', 
        name: 'Performance Metrics',
        widgets: [
          { id: generateUniqueId(), name: 'Response Time', content: 'Average response time metrics...' },
          { id: generateUniqueId(), name: 'Error Rate', content: 'System error rate analysis...' },
          { id: generateUniqueId(),name: 'Uptime', content: 'System uptime statistics and reports...' }
        ]
      }
    ]
  };
  