import { test, expect } from '@playwright/test';
test('TC01 Login เบอร์โทรว่าง', async ({ page }) => {
// 1. เปิดหน้า Login
await page.goto('http://localhost:5173/');
// 2. กรอกหมายเลขโทรศัพท์
await page
.getByLabel('หมายเลขโทรศัพท์มือถือ')
.fill('');
// 3. กรอกรหัสผ่าน
await page
.getByPlaceholder('อย่างน้อย 8 ตัวอักษร')
.fill('uCrwVaBW39o_0G0Q5QwAVrqr');
// 4. กดปุ่มเข้าสู่ระบบ
await page
.getByRole('button', { name: 'เข้าสู่ระบบ' })
.click();
const phoneInput = page.getByLabel('หมายเลขโทรศัพท์มือถือ');
const isInvalid = await phoneInput.evaluate((el) => (el as HTMLInputElement).validity.valueMissing);
expect(isInvalid).toBe(true)});

test('TC02 Login รหัสผ่านว่าง', async ({ page }) => {
// 1. เปิดหน้า Login
await page.goto('http://localhost:5173/');
// 2. กรอกหมายเลขโทรศัพท์
await page
.getByLabel('หมายเลขโทรศัพท์มือถือ')
.fill('0800000000');
// 3. กรอกรหัสผ่าน
await page
.getByPlaceholder('อย่างน้อย 8 ตัวอักษร')
.fill('');
// 4. กดปุ่มเข้าสู่ระบบ
await page
.getByRole('button', { name: 'เข้าสู่ระบบ' })
.click();
const passwordInput = page.getByPlaceholder('อย่างน้อย 8 ตัวอักษร');
const isInvalid = await passwordInput.evaluate((el) => (el as HTMLInputElement).validity.valueMissing);
expect(isInvalid).toBe(true)});

test('TC03 Login ว่างทั้งสอง', async ({ page }) => {
// 1. เปิดหน้า Login
await page.goto('http://localhost:5173/');
// 2. กรอกหมายเลขโทรศัพท์
await page
.getByLabel('หมายเลขโทรศัพท์มือถือ')
.fill('');
// 3. กรอกรหัสผ่าน
await page
.getByPlaceholder('อย่างน้อย 8 ตัวอักษร')
.fill('');
// 4. กดปุ่มเข้าสู่ระบบ
await page
.getByRole('button', { name: 'เข้าสู่ระบบ' })
.click();
const phoneInput = page.getByLabel('หมายเลขโทรศัพท์มือถือ');
const isInvalid = await phoneInput.evaluate((el) => (el as HTMLInputElement).validity.valueMissing);
expect(isInvalid).toBe(true);
const passwordInput = page.getByPlaceholder('อย่างน้อย 8 ตัวอักษร');
const isInvalid2 = await passwordInput.evaluate((el) => (el as HTMLInputElement).validity.valueMissing);
expect(isInvalid2).toBe(true)});