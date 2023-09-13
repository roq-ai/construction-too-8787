interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Admin'],
  tenantName: 'Company',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage rental orders.',
    'View company profile.',
    'View list of construction tools available for rent.',
  ],
  ownerAbilities: ['Manage Company profile', 'Invite Admin to manage the Company'],
  getQuoteUrl: 'https://app.roq.ai/proposal/77f17ff6-8d71-469b-90a0-9f0dcf72233a',
};
