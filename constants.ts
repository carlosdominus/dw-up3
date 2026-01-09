
import { PageData } from './types';

export const DOWNSELL_DATA = {
  instructor: "Lara",
  title: "TÔNICO DO",
  titleHighlight: "CAVALO",
  subtitle: "Sua compra do Protocolo está sendo processada. Não feche esta página.",
  oldPrice: "R$ 97,00",
  newPrice: "R$ 49,99",
  dailyPrice: "R$ 1,67",
  checkoutUrl: "https://www.google.com",
  guaranteeDays: 60,
  bonusList: [
    { title: "Tônico do Cavalo", desc: "Anabolizante natural para crescimento de até 23cm em poucas semanas.", price: "R$ 297", icon: "🐎" },
    { title: "O Truque Lésbico", desc: "42 lições práticas sem censura para enlouquecer qualquer mulher.", price: "R$ 147", icon: "👅" },
    { title: "Transformar a Saúde Masculina", desc: "Estratégias para prevenir câncer de próstata e diabetes.", price: "R$ 97", icon: "🏥" },
    { title: "Presente Surpresa", desc: "Algo tão incrível que prefiro deixar que sua mulher lhe conte.", price: "VALOR INESTIMÁVEL", icon: "🎁" }
  ]
};

export const COMMON_DATA: PageData = {
  title: "TÔNICO DO CAVALO",
  subtitle: "Condição exclusiva para novos membros.",
  oldPrice: "R$ 97,00",
  newPrice: "R$ 49,99",
  ctaText: "QUERO MEUS BÔNUS AGORA",
  alertText: "🚨 Oferta válida apenas para esta sessão!",
  benefits: [],
  bonusList: [],
  guaranteeDays: 60,
  checkoutUrl: "https://www.google.com"
};
