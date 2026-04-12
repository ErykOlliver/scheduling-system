# 📅 Sistema de Agendamento Universal

## 📌 Sobre o Projeto

O **Sistema de Agendamento Universal** é uma aplicação web desenvolvida para atender diferentes tipos de negócios que dependem de agendamento de serviços, como:

- Barbearias
- Salões de beleza
- Manicures
- Consultorias
- Prestadores de serviços em geral

A proposta do projeto é ser **genérico, reutilizável e escalável**, focando totalmente no funcionamento do sistema, sem personalizações específicas de nicho.

---

## 🎯 Objetivo

Criar uma base sólida e reutilizável de um sistema de agendamento que possa ser adaptado para qualquer tipo de negócio, mantendo:

- Código limpo
- Arquitetura organizada
- Facilidade de manutenção
- Escalabilidade

---

## ⚙️ Funcionalidades

### 👤 Usuário Comum

- Cadastro e login
- Criação de agendamentos
- Visualização dos próprios agendamentos
- Cancelamento de agendamentos
- Recebimento de notificações
- Recebimento de e-mails (confirmação, atualização, etc.)

---

### 🛠️ Administrador (Admin)

- Gerenciamento completo de agendamentos:
  - Cancelar
  - Marcar como concluído
  - Visualizar todos os agendamentos
- Cadastro e gerenciamento de serviços
- Controle geral do sistema
- Recebimento de notificações

---

### 🔔 Sistema de Notificações

- Notificações para usuários comuns
- Notificações para administradores
- Atualizações em tempo real sobre status de agendamentos

---

### 📧 Envio de E-mails

- Confirmação de agendamento
- Cancelamento
- Atualizações relevantes

---

## 🧱 Stack Tecnológica

### 🖥️ Front-end
- **Next.js**
  - Excelente para SEO
  - Alto desempenho
  - Desenvolvimento rápido e organizado

---

### ⚙️ Back-end
- **Route Handlers (Next.js)**
  - API integrada ao próprio framework
  - Redução de complexidade arquitetural

---

### 🗄️ Banco de Dados
- **PostgreSQL**
  - Banco relacional robusto e confiável

- **Supabase**
  - Hospedagem e gerenciamento do banco
  - Infraestrutura pronta para produção

---

### 🧩 ORM
- **Prisma ORM**
  - Tipagem forte
  - Facilidade de queries
  - Melhor manutenção do código

---

### 🔐 Autenticação e Segurança
- **NextAuth**
  - Gerenciamento de autenticação

- **JWT (JSON Web Token)**
  - Criação e controle de sessões

- **Argon2**
  - Criptografia segura de dados sensíveis

---

### 📩 Envio de E-mails
- **Resend**
  - Simples, rápido e eficiente para envio de e-mails transacionais

---

## 🧠 Arquitetura do Sistema

O sistema segue uma abordagem moderna baseada em:

- Separação de responsabilidades
- APIs internas via Next.js
- Persistência com ORM
- Autenticação desacoplada
- Componentização no front-end

---

## 🔄 Possíveis Evoluções

- Integração com pagamentos online
- Sistema de horários inteligentes (evitar conflitos automaticamente)
- Dashboard analítico para admins
- Multi-tenant (vários negócios no mesmo sistema)
- Integração com apps mobile

---

## 🚀 Status do Projeto

🟡 Em desenvolvimento

---

## 📄 Licença

Este projeto é um modelo proprietário de uso privado.

Não é permitido copiar, distribuir ou utilizar este código sem autorização.  
Seu uso é exclusivo para desenvolvimento e comercialização de soluções pelo autor.

---

## 💡 Considerações Finais

Esse projeto não tenta reinventar a roda — ele faz o básico **muito bem feito**.

A ideia é simples:
> Um sistema sólido, direto e reutilizável resolve mais problemas do que algo complexo e super personalizado.

Se bem estruturado, esse tipo de projeto vira facilmente um produto comercial.

---

## 🛠️ Instruções

### 📦 Instalação

Para utilizar o projeto localmente, execute os seguintes comandos:

```bash
pnpm install
pnpm prisma generate