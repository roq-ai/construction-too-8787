const mapping: Record<string, string> = {
  companies: 'company',
  orders: 'order',
  'order-items': 'order_item',
  tools: 'tool',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
