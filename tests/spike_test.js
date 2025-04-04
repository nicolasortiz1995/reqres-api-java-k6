import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '5s', target: 10 },
        { duration: '5s', target: 100 },
        { duration: '5s', target: 10 },
    ],
};

export default function () {
    let res = http.get('https://reqres.in/api/users/2');
    check(res, { 'status was 200': (r) => r.status === 200 });
    sleep(1);
}
