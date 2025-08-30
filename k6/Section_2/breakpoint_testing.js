// breakpoint_testing is used test the breakpoint of a application
// measure maximum capacity of the application


import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: 
    [
        { 
            duration: '10s',
            target: 100
        }
    ]
}

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}