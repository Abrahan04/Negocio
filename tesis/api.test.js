import { describe, it, expect, beforeAll } from "vitest";
import request from "supertest";
import app from './index.js';

describe('GET OK',() => {
    it('Endpoint deberia responder mensaje OK', async () => {
        const res= await request(app).get('/productos');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBe(2);

        const productos = res.body[0]
        expect(productos).toHaveProperty('nombre');
    })
})

