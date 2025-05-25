import { service } from '@/data/service';
import whatsapp from '../../../../public/assets/images/whatsapp.png';
import facebook from '../../../../public/assets/images/facebook.png';
import instagram from '../../../../public/assets/images/instagram.png';
import formas from '../../../../public/assets/images/formas.webp';
import verificada from '../../../../public/assets/images/site-seguro.png'

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 flex flex-col items-center justify-center">
            <div className="flex md:flex-row flex-col items-center justify-center w-full px-4 bg-white py-10">
                <div className="container flex flex-col md:flex-row items-center justify-center">
                    {service.map((item, index) => (
                        <div key={index} className="flex items-center md:justify-between justify-center md:w-1/4 w-full md:mb-0 mb-8">
                            <div className="md:w-[20%] w-[20%]">
                                <img src={item.img} alt={item.title} className='w-full'/>
                            </div>
                            <div className="flex flex-col md:items-start items-center justify-center text-black w-[75%]">
                                <h4 className="text-[20px] font-[600]">
                                    {item.title}
                                </h4>
                                <span className="text-[14px] font-[400]">
                                    {item.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container flex flex-col md:flex-row items-center justify-center">
                <div className="md:w-1/4 w-full p-4">
                    <h4 className="text-[24px] font-[700]">Atendimento ao Cliente</h4>
                    <span className="text-[16px] font-[500]">Horário de atendimento:</span>
                    <ul className="flex flex-col gap-2 md:gap-4 mt-2 pl-2">
                        {['Segunda a sexta 9h às 12:30h e das 13:30 às 17:00 horas.', 'Sábados: - Das 9:00 às 12:00 horas.', 'Domingos e feriados: fechados.', 'WhatsApp: (41) 9 99999-9999', 'Email: exemplo@gmail.com'].map((item) => (
                            <li key={item} className="cursor-pointer">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:w-1/4 w-full p-4">
                    <h4 className="text-[24px] font-[700]">Atendimento ao Cliente</h4>
                    <span className="text-[16px] font-[500]">Horário de atendimento:</span>
                    <ul className="flex flex-col gap-2 md:gap-4 mt-2 pl-2">
                        {['Sobre Nós', 'Contato', 'Meus Pedidos', 'Acompanhe seus pedidos', 'Editar Cadastro', 'Todos os Produtos'].map((item) => (
                            <li key={item} className="cursor-pointer">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:w-1/4 w-full p-4">
                    <h4 className="text-[24px] font-[700]">Nossa Política</h4>
                    <ul className="flex flex-col gap-2 md:gap-4 mt-2 pl-2">
                        {['Políticas de privacidade', 'Políticas de devolução e trocas'].map((item) => (
                            <li key={item} className=" cursor-pointer">
                                {item}
                            </li>
                        ))}
                    </ul>
                    <h4 className="text-[24px] font-[700] mt-4">Onde nos encontra</h4>
                    <ul className="flex gap-1 md:gap-1 mt-2 pl-2">
                        {[whatsapp, instagram, facebook].map((item) => (
                            <li key={item} className="w-1/4 cursor-pointer hover:scale-110 transition-all">
                                <img src={item} alt="Redes sociais" className='w-[60%]'/>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:w-1/4 w-full p-4">
                    <h4 className="text-[24px] font-[700] mt-4">Formas de pagamento</h4>
                    <img src={formas} alt="pagamento" />
                    <h4 className="text-[24px] font-[700] mt-4">Loja verificada</h4>
                    <img src={verificada} alt="Loja verificada" />
                </div>
            </div>
            <div className='border-t-2 border-gray-950 w-full flex items-center justify-center py-4'>
                <p className='text-center'>
                    Thiago Lojas CNPJ: 99.999.999/0001-99 © 2025 Todos os direitos reservados. Feito por Thiago Tech
                </p>
            </div>
        </footer>
    );
}