import { OrderItemInterface } from 'interfaces/order-item';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ToolInterface {
  id?: string;
  name: string;
  description?: string;
  company_id: string;
  availability_status?: boolean;
  created_at?: any;
  updated_at?: any;
  order_item?: OrderItemInterface[];
  company?: CompanyInterface;
  _count?: {
    order_item?: number;
  };
}

export interface ToolGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  company_id?: string;
}
