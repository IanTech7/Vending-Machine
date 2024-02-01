import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoDto } from './produto.dto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}
  
  @Get()
  async getTodos() {
    return this.produtoService.getTodos();
  }

  @Get(':id')
  async getUm(@Param('id') id: number) {
    return this.produtoService.getUm(id);
  }

  @Post()
  async criar(@Body() produtoDto: ProdutoDto) {
    return this.produtoService.criar(produtoDto);
  }

  @Put(':id')
  async atualizar(@Param('id') id: number, @Body() produtoDto: ProdutoDto) {
    return this.produtoService.atualizar(id, produtoDto);
  }

  @Delete(':id')
  async deletar(@Param('id') id: number) {
    return this.produtoService.deletar(id);
  }
}
