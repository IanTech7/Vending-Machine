import { Injectable, BadRequestException } from '@nestjs/common';
import { PagamentoDto } from './pagamento.dto';

@Injectable()
export class PagamentoService {
  pagar(pagamentoDto: PagamentoDto) {
    // Aqui você pode implementar a lógica de pagamento.
    // Por exemplo, você pode verificar se o usuário tem saldo suficiente,
    // se o método de pagamento é válido, etc.
    // Neste exemplo simplificado, vamos assumir que o pagamento sempre é bem-sucedido.
    if (pagamentoDto.metodo !== 'pix' && pagamentoDto.metodo !== 'cartão') {
      throw new BadRequestException('Método de pagamento inválido');
    }
    return { message: 'Pagamento realizado com sucesso.' };
  }
}
