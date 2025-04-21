export interface Order {
    shippingAddress: ShippingAddress
  }
  
  export interface ShippingAddress {
    details: string
    phone: string
    city: string
  }
  