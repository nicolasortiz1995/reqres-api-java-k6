import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 10,
    duration: '5m',
};

export default function () {
    let res = http.get('https://reqres.in/api/users/2');
    check(res, { 'status was 200': (r) => r.status === 200 });
    sleep(1);
}
