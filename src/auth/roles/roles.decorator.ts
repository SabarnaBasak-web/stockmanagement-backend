import { SetMetadata } from '@nestjs/common';

export const Roles = (...args: string[]) => {
  const res = SetMetadata('roles', args);
  return res;
};
