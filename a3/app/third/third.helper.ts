import { Customer } from './third.model';

export class ThirdHelper{
    static loadCustomers():Customer[]{
       let customers:Customer [] = [];
       customers.push(new
        Customer('Amit','2222','amit@yahoo.com'));
        customers.push(new
            Customer('Jatin','3333','jatin@yahoo.com'));
            customers.push(new
                Customer('Apoorv','4444','apoorv@yahoo.com'));
                customers.push(new
                    Customer('Pranshul','5555','pranshul@yahoo.com'));
                    return customers;
                }
}