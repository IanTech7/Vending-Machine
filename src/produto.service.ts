import { Injectable, NotFoundException } from '@nestjs/common';
import { ProdutoDto } from './produto.dto';

@Injectable()
export class ProdutoService {
  private produtos: ProdutoDto[] = [
    { id: 1, nome: 'água mineral', preco: 2.5 },
    { id: 2, nome: 'energético', preco: 6.0 },
    { id: 3, nome: 'chocolate', preco: 3.5 },
    { id: 4, nome: 'salgadinho', preco: 3.0 },
    { id: 5, nome: 'refrigerante', preco: 4.0 },
  ];

  getTodos() {
    return this.produtos;
  }

  getUm(id: number) {
    const produto = this.produtos.find(produto => produto.id === id);
    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }
    return produto;
  }

  criar(produtoDto: ProdutoDto) {
    this.produtos.push(produtoDto);
    return produtoDto;
  }

  atualizar(id: number, produtoDto: ProdutoDto) {
    const index = this.produtos.findIndex(produto => produto.id === id);
    if (index === -1) {
      throw new NotFoundException('Produto não encontrado');
    }
    this.produtos[index] = produtoDto;
    return produtoDto;
  }

  deletar(id: number) {
    const index = this.produtos.findIndex(produto => produto.id === id);
    if (index === -1) {
      throw new NotFoundException('Produto não encontrado');
    }
    this.produtos.splice(index, 1);
    return { message: 'Produto deletado com sucesso.' };
  }
}
