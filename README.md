1 - O que é um cookie?
O cookie é um pequeno arquivo de texto enviado pelo servidor ao cliente quando o site é acessado. O arquivo fica salvo no dispositivo do cliente pelo navegador, que o envia de volta ao servidor sempre que o site é acessado.

2 - Quem armazena o cookie: cliente ou servidor?
É o cliente que armazena o cookie, pelo navegador.

3 - Quem envia o cookie nas próximas requisições?
O cliente pelo navegador. O cookie é enviado automaticamente pelo cabeçalho da requisição HTTP sempre que feita no mesmo domínio.

4 - O que muda quando utilizamos HttpOnly?
O cookie não consegue ser acessado pelo javascript por meio do document.cookie, apenas com requisições HTTP pelo navegador.

5 - Por que um cookie HttpOnly continua funcionando mesmo não aparecendo em document.cookie?
Porque quem anexa o cookie na requisição é o navegador, o código javascript da página não precisa manipula-lo para que seja enviado.

6 - Qual é a finalidade de Secure?
Garantir que o cookie seja apenas acessado por conexões HTTPS.

7 - Qual é a finalidade de SameSite?
Controlar se o cookie deve ser enviado em requisições vindas de outros sites, servindo principalmente como proteção contra ataques do tipo CSRF.

8 - Qual a diferença entre armazenar simplesmente um identificador de usuário e armazenar um JWT?
O identificador simples é facilmente manipulável por um cliente, já o JWT é criptografado, assegurando o acesso.

9 - O conteúdo de um JWT é secreto?
Não, o conteúdo é codificado em base64, criptografia que pode ser facilmente descriptografada. A segurança está na autenticidade, não no sigilo dos dados.

10 - Por que armazenar um JWT em um cookie HttpOnly pode ser mais seguro do que disponibilizá-lo diretamente ao JavaScript?
Porque se o JWT estiver acessivel ao javascript, usuários maliciosos podem utilizar scripts via cross-platform que leiam e roubam os dados. Com o HTTPOnly, o script fica impedido de acessar o token.
