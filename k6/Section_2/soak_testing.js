// soak testing is used to test the stability of a system over a long period of time

import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: 
    [
        { 
            duration: '5m',
            target: 1000
        },
        { 
            duration: '30m',
            target: 1000
        },
        { 
            duration: '5m',
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