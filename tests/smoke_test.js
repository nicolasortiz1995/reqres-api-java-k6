import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus: 1,
    duration: '10s',
};

export default function () {
    let res = http.get('https://reqres.in/api/users/2');
    check(res, {
        'status is 200': (r) => r.status === 200,
    });
}
