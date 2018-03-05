import { renderComponent, expect } from "../test_helper";
import resources from "../../src/components/resources";

describe('Resources', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(resources);
    });

    it('has the right css class', () => {
        expect(component).to.have.class('resources-component');
    });

    it('is top secret', () => {
        expect(component).to.contain('TOP SECRET');
    });

})