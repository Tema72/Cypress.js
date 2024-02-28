
describe('Тестирование формы логина и пароля', function () {
    
    it('1. Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio'); // захожу на сайт
        cy.get(`#loginButton`).should(`be.disabled`); // кнопка Войти задизейблена
        cy.get('#mail').type('german@dolnikov.ru'); // ввел логин
        cy.get(`#loginButton`).should(`be.disabled`); // кнопка Войти задизейблена
        cy.get('#pass').type('iLoveqastudio1'); // ввел пароль
        cy.get(`#loginButton`).should(`be.enabled`); // кнопка Войти доступна
        cy.get(`#loginButton`).click(); // клик на кнопку Войти
        cy.wait(2000); // жду
        cy.get(`#messageHeader`).should(`be.visible`); // вижу текст
        cy.get(`#messageHeader`).contains(`Авторизация прошла успешно`); // текст совпадает
        cy.get(`#exitMessageButton > .exitIcon`).should(`be.visible`); // вижу крестик
         })

    it('2. Восстановление пароля', function () {
        cy.visit('https://login.qa.studio'); // захожу на сайт
        cy.get(`#loginButton`).should(`be.disabled`); // кнопка Войти задизейблена
        cy.get('#forgotEmailButton').click(); // клик на кнопку Забыли пароль
        cy.get('#forgotForm > .header').should(`be.visible`); // вижу текст
        cy.get('#forgotForm > .header').contains(`Восстановите пароль`); // текст совпадает
        cy.get('#exitRestoreButton > .exitIcon').should(`be.visible`); // вижу крестик
        cy.get('#mailForgot').type('taurus_volk@mail.ru'); // ввел почту
        cy.get('#restoreEmailButton').click(); // клик на кнопку Войти
        cy.wait(2000); // жду
        cy.get(`#messageHeader`).should(`be.visible`); // вижу текст
        cy.get(`#messageHeader`).contains(`Успешно отправили пароль на e-mail`); // текст совпадает
        cy.get(`#exitMessageButton > .exitIcon`).should(`be.visible`); // вижу крестик
         }) 
         
    it('3. Правильный логин и НЕправильный пароль', function () {
        cy.visit('https://login.qa.studio'); // захожу на сайт
        cy.get(`#loginButton`).should(`be.disabled`); // кнопка Войти задизейблена
        cy.get('#mail').type('german@dolnikov.ru'); // ввел логин
        cy.get(`#loginButton`).should(`be.disabled`); // кнопка Войти задизейблена
        cy.get('#pass').type('iLoveqastudio12'); // ввел НЕправильный пароль
        cy.get(`#loginButton`).should(`be.enabled`); // кнопка Войти доступна
        cy.get(`#loginButton`).click(); // клик на кнопку Войти
        cy.wait(2000); // жду
        cy.get(`#messageHeader`).should(`be.visible`); // вижу текст
        cy.get(`#messageHeader`).contains(`Такого логина или пароля нет`); // текст совпадает
        cy.get(`#exitMessageButton > .exitIcon`).should(`be.visible`); // вижу крестик
         })

    it('4. НЕправильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio'); // захожу на сайт
        cy.get(`#loginButton`).should(`be.disabled`); // кнопка Войти задизейблена
        cy.get('#mail').type('german@dolnikov1.ru'); // ввел НЕправильный логин
        cy.get(`#loginButton`).should(`be.disabled`); // кнопка Войти задизейблена
        cy.get('#pass').type('iLoveqastudio1'); // ввел пароль
        cy.get(`#loginButton`).should(`be.enabled`); // кнопка Войти доступна
        cy.get(`#loginButton`).click(); // клик на кнопку Войти
        cy.wait(2000); // жду
        cy.get(`#messageHeader`).should(`be.visible`); // вижу текст
        cy.get(`#messageHeader`).contains(`Такого логина или пароля нет`); // текст совпадает
        cy.get(`#exitMessageButton > .exitIcon`).should(`be.visible`); // вижу крестик
         })

    it('5. Невалидный логин (без @) и правильный пароль', function () {
        cy.visit('https://login.qa.studio'); // захожу на сайт
        cy.get(`#loginButton`).should(`be.disabled`); // кнопка Войти задизейблена
        cy.get('#mail').type('germandolnikov.ru'); // ввел невалидный логин (без @)
        cy.get(`#loginButton`).should(`be.disabled`); // кнопка Войти задизейблена
        cy.get('#pass').type('iLoveqastudio1'); // ввел пароль
        cy.get(`#loginButton`).should(`be.enabled`); // кнопка Войти доступна
        cy.get(`#loginButton`).click(); // клик на кнопку Войти
        cy.wait(2000); // жду
        cy.get(`#messageHeader`).should(`be.visible`); // вижу текст
        cy.get(`#messageHeader`).contains(`Нужно исправить проблему валидации`); // текст совпадает
        cy.get(`#exitMessageButton > .exitIcon`).should(`be.visible`); // вижу крестик
         })

    it('6. Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio'); // захожу на сайт
        cy.get(`#loginButton`).should(`be.disabled`); // кнопка Войти задизейблена
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввел логин c заглавными буквами
        cy.get(`#loginButton`).should(`be.disabled`); // кнопка Войти задизейблена
        cy.get('#pass').type('iLoveqastudio1'); // ввел пароль
        cy.get(`#loginButton`).should(`be.enabled`); // кнопка Войти доступна
        cy.get(`#loginButton`).click(); // клик на кнопку Войти
        cy.wait(2000); // жду
        cy.get(`#messageHeader`).should(`be.visible`); // вижу текст
        cy.get(`#messageHeader`).contains(`Авторизация прошла успешно`); // текст совпадает
        cy.get(`#exitMessageButton > .exitIcon`).should(`be.visible`); // вижу крестик
         })
    
})
