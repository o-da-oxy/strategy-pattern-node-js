// STRATEGY

// Интерфейс стратегии
interface PaymentStrategy {
  pay(amount: number): void;
}

// Реализация стратегии оплаты с использованием кредитной карты
class CreditCardPayment implements PaymentStrategy {
  private cardNumber: string;
  private expirationDate: string;
  private cvv: string;

  constructor(cardNumber: string, expirationDate: string, cvv: string) {
    this.cardNumber = cardNumber;
    this.expirationDate = expirationDate;
    this.cvv = cvv;
  }

  pay(amount: number): void {
    console.log(`Paying ${amount} using credit card ${this.cardNumber}`);
  }
}

// Реализация стратегии оплаты с использованием PayPal
class PayPalPayment implements PaymentStrategy {
  private email: string;
  private password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  pay(amount: number): void {
    console.log(`Paying ${amount} using PayPal ${this.email}`);
  }
}

// Класс контекста, использующий стратегию оплаты
class PaymentProcessor {
  private paymentStrategy: PaymentStrategy;

  constructor(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  setPaymentStrategy(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  processPayment(amount: number): void {
    this.paymentStrategy.pay(amount);
  }
}

const creditCardPayment = new CreditCardPayment(
  '1111 2222 3333 4444',
  '01/30',
  '999'
);
const payPalPayment = new PayPalPayment('oxy@mail.ru', '12345');

const paymentProcessor = new PaymentProcessor(creditCardPayment);
paymentProcessor.processPayment(1000);

paymentProcessor.setPaymentStrategy(payPalPayment);
paymentProcessor.processPayment(2000);
