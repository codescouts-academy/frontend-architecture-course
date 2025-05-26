import { DomainEvent } from "@codescouts/events";

import { Order } from "../model/order";

export class OrderCreatedCorrectly extends DomainEvent {
  constructor(public readonly order: Order) {
    super();
  }
}
