import React from 'react';

const Terms: React.FC = () => {
    return (
        <div className="bg-background-light min-h-screen py-20">
            <div className="mx-auto max-w-4xl px-6 lg:px-10">
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                    <h1 className="text-3xl md:text-4xl font-black text-navy mb-8">Termos de Uso</h1>

                    <div className="prose prose-lg text-navy/70 max-w-none">
                        <p className="mb-6">
                            Bem-vindo ao site da <strong>EduPública Consultoria</strong>. Ao acessar e utilizar este site, você concorda com os seguintes termos e condições.
                        </p>

                        <h3 className="text-xl font-bold text-navy mt-8 mb-4">1. Uso do Conteúdo</h3>
                        <p className="mb-6">
                            Todo o conteúdo disponibilizado neste site (textos, imagens, logotipos, materiais educativos) é de propriedade exclusiva da EduPública Consultoria ou de seus licenciadores, sendo protegido pelas leis de direitos autorais. É vedada a reprodução, distribuição ou modificação sem autorização prévia.
                        </p>

                        <h3 className="text-xl font-bold text-navy mt-8 mb-4">2. Finalidade Informativa</h3>
                        <p className="mb-6">
                            As informações contidas neste site têm caráter informativo e não constituem aconselhamento legal ou governamental oficial. Para orientações específicas sobre gestão pública, recomendamos a contratação de nossos serviços especializados de consultoria.
                        </p>

                        <h3 className="text-xl font-bold text-navy mt-8 mb-4">3. Limitação de Responsabilidade</h3>
                        <p className="mb-6">
                            A EduPública empenha-se em manter as informações deste site atualizadas e precisas, mas não se responsabiliza por eventuais erros, omissões ou imprecisões técnicas. O uso das informações é de inteira responsabilidade do usuário.
                        </p>

                        <h3 className="text-xl font-bold text-navy mt-8 mb-4">4. Links Externos</h3>
                        <p className="mb-6">
                            Este site pode conter links para sites de terceiros. A EduPública não possui controle sobre o conteúdo ou práticas de privacidade desses sites e não assume responsabilidade por eles.
                        </p>

                        <h3 className="text-xl font-bold text-navy mt-8 mb-4">5. Legislação Aplicável</h3>
                        <p className="mb-6">
                            Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de Natal/RN para dirimir quaisquer dúvidas oriundas destes termos.
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

export default Terms;
