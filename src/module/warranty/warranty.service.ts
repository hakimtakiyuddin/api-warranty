import { Injectable } from '@nestjs/common';

@Injectable()
export class WarrantyService {
  constructor() {}

  async getAllWarranties() {
    return 'All warranties';
  }
}
