import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProdutoDto {
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsNumber()
  preco: number;
}
