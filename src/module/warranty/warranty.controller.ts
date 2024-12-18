import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { WarrantyService } from './warranty.service';

@ApiTags('warranty')
@Controller('warranty')
export class WarrantyController {
  constructor(private readonly warrantyService: WarrantyService) {}

  @ApiOperation({ summary: 'Get all warranties' })
  @Get()
  async getAllWarranties() {
    return this.warrantyService.getAllWarranties();
  }
}
