import { renderComponent, expect } from "../test_helper";
import Header from "../../src/components/header";

describe('Header', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(Header);
    });

    it('has the right css class', () => {
        expect(component).to.have.class('header-component');
    });

    describe('Authentication', () => {
        it('has a login button if user is not authenticated', () => {
            expect(component.find('.login-button')).to.exist;
        });

        it('has no login button if user authenticates', () => {
            component.find('.login-button').simulate('click');
            
            expect(component.find('.login-button')).not.to.exist;
            expect(component.find('.logout-button')).to.exist;
        });

    });

});