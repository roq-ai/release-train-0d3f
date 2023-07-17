import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ReleaseInterface {
  id?: string;
  status: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface ReleaseGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  organization_id?: string;
}
