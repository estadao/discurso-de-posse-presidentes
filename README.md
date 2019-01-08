# Análise dos discursos de posse dos presidentes Brasileiros

Esse repositório contém o código para as análises e visualizações da matéria ["Na história, nenhum presidente falou tanto em ideologia quanto Bolsonaro"](http://www.estadao.com.br/infograficos/politica,na-historia-nenhum-presidente-falou-tanto-em-ideologia-quanto-bolsonaro,956856), publicada no dia 5 de janeiro 2019.

## Diretórios

### ./code/

Contém o código que trata e analisa os arquivos de texto com a transcrição dos discursos.

`.code/limpeza-de-diacriticos` deve ser executado por primeiro. Trata-se de um script simples que vai substituir acentuação em dois caracteres, que foi extraída do texto em pdf, por um caractere único. O output são arquivos de texto com a acentuação padronizada, salvo no diretório `/output/txts-limpos/`

`./code/gerador-de-csvs.ipynb` gera as matrizes de tf-idf para cada candidato e salva o output em `/output/matrizes`

### ./data/

#### ./data/pdf/

Contém o PDF do livro Palavra de Presidente, de João Bosco Bezerra Bonfim, fonte primária dos discursos dessa análise. 

#### ./data/txts/

Contém transcrições para o formato .txt dos discurso do livro citado acima, além dos discursos posteriores, que foram transcritos a partir do acervo do Estadão ou da Biblioteca da Presidência da República.

##### Ver também o arquivo `README.md` com notas metodológicas.

### ./output/

O diretório recebe o output gerado pelos scripts da pasta '/code/', como citado anteriormente.

### ./viz/

O diretório contém o código em JavaScript que gerou as visualizações de dados do material.

O arquivo `draw.js` é a função genérica que desenha o gráfico, enquanto o arquivo `viz.js` chama o anterior com os parâmetros necessários para desenhar o gráfico do presidente desejado.

#### ./viz/add-ons/

Contém script auxiliares que permitem explorar a visualização de dados a partir do console do browser. Inclui um script para salvar as imagens svg geradas e a opção de destacar e apagar determinadas palavras.