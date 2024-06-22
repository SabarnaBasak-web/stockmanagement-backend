export interface IIp {
  id: number;
  ipName: string;
  active: boolean;
  inUse: boolean;
}
export interface IEmployee {
  id: number;
  name: string;
  designation: string;
  cell: string;
  floorNumber: string;
  mobileNumber: number;
  empId: string;
  active: boolean;
  ip: IIp;
}
