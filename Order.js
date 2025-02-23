export class Order {
    constructor(sFrom) {
      this.OrderState = {
        WELCOMING: () => {
          let aReturn = [];
          this.stateCur = this.OrderState.RESERVING;
          aReturn.push("Welcome to Laynol's Chicken Tender Shop!");
          aReturn.push("Would you like to start an order?");
          return aReturn;
        },
        RESERVING: (sInput) => {
          let aReturn = [];
          this.isDone = false;
          if (sInput.toLowerCase().startsWith('y')) {
            aReturn.push("Awesome, our tenders come in classic or spicy. Which would you like?");
            this.stateCur = this.OrderState.CHICKEN_TYPE;
          } else {
            aReturn.push("Thanks! Maybe next time :)");
          }
          return aReturn;
        },
        CHICKEN_TYPE: (sInput) => {
          let aReturn = [];
          this.isDone = false;
          if (sInput.toLowerCase().includes('spicy')) {
            aReturn.push("Spicy it is! Do you want a 3 or 5 piece");
            this.stateCur = this.OrderState.CHICKEN_QUANTITY;
          } else if (sInput.toLowerCase().includes('classic')){
            aReturn.push("Classic it is! Do you want a 3 or 5 piece");
            this.stateCur = this.OrderState.CHICKEN_QUANTITY;
          } else {
            aReturn.push("Sorry, I don't quite understand. Try visiting our shop at 123 Dalhousie St. in Brantford to place your order. Thank you!");
          }
          return aReturn;
        },
        CHICKEN_QUANTITY: (sInput) => {
          let aReturn = [];
          this.isDone = false;
          if (sInput.toLowerCase().includes('3')) {
            aReturn.push("3 pieces sounds fantastic, do you want to toss your chicken in our world famous honey BBQ glaze?");
            this.stateCur = this.OrderState.TOPPINGS;
          } else if (sInput.toLowerCase().includes('5')){
            aReturn.push("5 pieces sounds fantastic, do you want to toss your chicken in our world famous honey BBQ glaze?");
            this.stateCur = this.OrderState.TOPPINGS;
          } else {
            aReturn.push("Sorry, I don't quite understand. Try visiting our shop at 123 Dalhousie St. in Brantford to place your order. Thank you!");
          }
          return aReturn;
        },
        TOPPINGS: (sInput) => {
          let aReturn = [];
          this.isDone = false;
          if (sInput.toLowerCase().startsWith('y')) {
            aReturn.push("Honey BBQ all the way! Do you want to add fries to your chicken?");
            this.stateCur = this.OrderState.SIDES;
          } else if (sInput.toLowerCase().startsWith('n')) {
            aReturn.push("No problem. Do you want to add fries to your chicken?");
            this.stateCur = this.OrderState.SIDES;
          } else {
            aReturn.push("Sorry, I don't quite understand. Try visiting our shop at 123 Dalhousie St. in Brantford to place your order. Thank you!");
          }
          return aReturn;
        },
        SIDES: (sInput) => {
          let aReturn = [];
          this.isDone = false;
          if (sInput.toLowerCase().startsWith('y')) {
            aReturn.push("Perfect, we'll throw those on the order! Are you ready to confirm your order?");
            this.stateCur = this.OrderState.CONFIRMATION;
          } else if (sInput.toLowerCase().startsWith('n')) {
            aReturn.push("No worries, Are you ready to confirm your order?");
            this.stateCur = this.OrderState.CONFIRMATION;
          } else {
            aReturn.push("Sorry, I don't quite understand. Try visiting our shop at 123 Dalhousie St. in Brantford to place your order. Thank you!");
          }
          return aReturn;
        },
        CONFIRMATION: (sInput) => {
          let aReturn = [];
          this.isDone = true;
          if (sInput.toLowerCase().startsWith('y')) {
            aReturn.push("Awesome, we'll have that ready to pick up in 15 mins at our Brantford location: 123 Dalhousie St.");
            this.stateCur = this.OrderState.CONFIRMATION;
          } else {
            aReturn.push("Please confirm you are ready to order to continue");
          }
          return aReturn;
        },
      };
  
      this.stateCur = this.OrderState.WELCOMING;
      this.isDone = false;
      this.sFrom = sFrom;
    }
    handleInput(sInput) {
      return this.stateCur(sInput);
    }
    isDone() {
      return this.isDone;
    }
  }