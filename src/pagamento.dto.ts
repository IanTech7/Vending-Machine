import { IsNotEmpty, IsNumber, IsString, IsIn } from 'class-validator';

export class PagamentoDto {
  @IsNumber()
  idProduto: number;

  @IsString()
  @IsNotEmpty()
  @IsIn(['pix', 'cartão'])
  metodo: 'pix' | 'cartão';
}
