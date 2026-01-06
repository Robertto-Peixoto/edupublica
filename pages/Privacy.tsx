import React from 'react';

const Privacy: React.FC = () => {
    return (
        <div className="bg-background-light min-h-screen py-20">
            <div className="mx-auto max-w-4xl px-6 lg:px-10">
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                    <h1 className="text-3xl md:text-4xl font-black text-navy mb-8">Política de Privacidade</h1>

                    <div className="prose prose-lg text-navy/70 max-w-none">
                        <p className="mb-6">
                            A <strong>EduPública Consultoria</strong> preza pela privacidade e proteção dos dados pessoais de seus usuários, parceiros e clientes. Esta política descreve como coletamos, usamos e protegemos suas informações, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                        </p>

                        <h3 className="text-xl font-bold text-navy mt-8 mb-4">1. Coleta de Dados</h3>
                        <p className="mb-4">
                            Coletamos informações estritamente necessárias para a prestação de nossos serviços de consultoria educacional, incluindo:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Dados de contato (nome, e-mail, telefone) fornecidos voluntariamente através de nossos formulários.</li>
                            <li>Informações técnicas de acesso (endereço IP, tipo de navegador) para otimização da experiência no site.</li>
                        </ul>

                        <h3 className="text-xl font-bold text-navy mt-8 mb-4">2. Uso das Informações</h3>
                        <p className="mb-4">
                            Os dados coletados são utilizados para:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Responder a solicitações de diagnóstico e propostas de serviço.</li>
                            <li>Enviar comunicações institucionais e newsletters, quando autorizadas.</li>
                            <li>Melhorar a performance e segurança de nossa plataforma digital.</li>
                        </ul>

                        <h3 className="text-xl font-bold text-navy mt-8 mb-4">3. Compartilhamento de Dados</h3>
                        <p className="mb-6">
                            A EduPública não comercializa dados pessoais. O compartilhamento ocorre apenas com parceiros tecnológicos estritamente necessários para a operação do site ou quando exigido por lei.
                        </p>

                        <h3 className="text-xl font-bold text-navy mt-8 mb-4">4. Seus Direitos</h3>
                        <p className="mb-6">
                            Você tem o direito de solicitar o acesso, correção ou exclusão de seus dados pessoais a qualquer momento. Para exercer esses direitos, entre em contato conosco através do e-mail: <strong>privacidade@edupublica.com.br</strong>.
                        </p>

                        <h3 className="text-xl font-bold text-navy mt-8 mb-4">5. Alterações nesta Política</h3>
                        <p className="mb-6">
                            Reservamo-nos o direito de atualizar esta política periodicamente. Recomendamos a visita regular a esta página para estar ciente de quaisquer mudanças.
                        </p>

                        <p className="text-sm text-gray-500 mt-12 border-t border-gray-100 pt-6">
                            Última atualização: Janeiro de 2026.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
