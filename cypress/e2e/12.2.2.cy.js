
describe('Покемоны', function () {
    
    it('Покупка нового фото для своего тренера', function () {
        cy.visit('https://pokemonbattle.me/login'); // захожу на сайт
        cy.get(':nth-child(1) > .auth__input').type('artem.izotov.ne@yandex.ru'); // ввел почту
        cy.get('#password').type('Qwerty123'); // ввел пароль
        cy.get('.auth__button').click(); // клик на кнопку Войти
        cy.wait(5000); // жду
        cy.get('[href="/shop"] > .header__btn-img').click(); // клик на кнопку Магазин
        cy.wait(5000); // жду
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click(); // выбрал аватар
        cy.wait(5000); // жду
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('2121212121212121'); // ввел номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('0524'); // ввел срок действия карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // ввел CVV код карты
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Чингиз'); // ввел имя владельца карты
        cy.get('.pay-btn').click(); // клик на кнопку оплатить
        cy.wait(5000); // жду
        cy.get('#cardnumber').type('56456'); // ввел смс код
        cy.get('.payment__submit-button').click(); // клик на кнопку Отправить
        cy.wait(5000); // жду
        cy.get('.payment__font-for-success').should(`be.visible`); // вижу текст
        cy.get('.payment__font-for-success').contains(`Покупка прошла успешно`); // текст совпадает
        cy.get('.payment__adv').click(); // клик на кнопку Вернуться в магазин
        cy.wait(5000); // жду
        cy.get('.top_menu_exit').click(); // клик на кнопку Выход
        

         })
    
})
