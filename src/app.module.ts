import { Module } from '@nestjs/common';
import { ProdutoModule } from './produto.module';
import { PagamentoModule } from './pagamento.module';

@Module({
  imports: [ProdutoModule, PagamentoModule],
})
export class AppModule {}
