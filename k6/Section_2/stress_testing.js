//Checking system limits abov e normal operational capacity
//determines the maximum capacity of a system and how it behaves under extreme conditions
//Stress test is performed after load test

import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: 
    [
        { 
            duration: '10s',
            target: 100
        },
        { 
            duration: '30s',
            target: 100
        },
        { 
            duration: '10s',
            target: 0
        }
    ]
}

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
  http.get('https://test.k6.io/contacts.php');
  sleep(2);
  http.get('https://test.k6.io/news.php');
  sleep(2)
}