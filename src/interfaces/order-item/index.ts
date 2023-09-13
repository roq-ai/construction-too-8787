import { OrderInterface } from 'interfaces/order';
import { ToolInterface } from 'interfaces/tool';
import { GetQueryInterface } from 'interfaces';

export interface OrderItemInterface {
  id?: string;
  order_id: string;
  tool_id: string;
  quantity: number;
  created_at?: any;
  updated_at?: any;

  order?: OrderInterface;
  tool?: ToolInterface;
  _count?: {};
}

export interface OrderItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  order_id?: string;
  tool_id?: string;
}
