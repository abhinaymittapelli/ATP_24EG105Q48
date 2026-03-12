import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';
    
export function processPayment(paymentMethod, couponCode = null) {
    return true
}

export function validatePaymentMethod(method){
    return true
}

 function generateOrderId() {
    // Generate random order ID
        return 'ORD' + Date.now();
  }
