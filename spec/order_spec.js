import { Order } from '../Order.js'

describe("Tests all stages of an order", function() {
    it("test hello", function() {
        const oOrder = new Order("999-999-9999");
        const aResults = oOrder.handleInput("hello");
        expect(aResults[0]).toBe("Welcome to Laynol's Chicken Tender Shop!")
    });
    it("test yes", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        expect(aResults[0]).toBe("Awesome, our tenders come in classic or spicy. Which would you like?")
    });
    it("test no", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("no");
        expect(aResults[0]).toBe("Thanks! Maybe next time :)")
    });
    it("test spicy", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults2 = oOrder.handleInput("spicy");
        expect(aResults2[0]).toBe("Spicy it is! Do you want a 3 or 5 piece")
    });
    it("test classic", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults2 = oOrder.handleInput("classic");
        expect(aResults2[0]).toBe("Classic it is! Do you want a 3 or 5 piece")
    });
  });
  
  