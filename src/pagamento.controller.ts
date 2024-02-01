import { Controller, Post, Body } from '@nestjs/common';
import { PagamentoService } from './pagamento.service';
import { PagamentoDto } from './pagamento.dto';

@Controller('pagamento')
export class PagamentoController {
  constructor(private readonly pagamentoService: PagamentoService) {}

  @Post()
  async pagar(@Body() pagamentoDto: PagamentoDto) {
    return this.pagamentoService.pagar(pagamentoDto);
  }
}
