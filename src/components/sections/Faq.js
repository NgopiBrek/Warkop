import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'Buka Jam Berapa?',
    content: () => (
      <>
        Warung kopi kami buka dari jam tujuh pagi hingga jam sebelas malam
      </>
    ),
  },
  {
    title: 'Dimana Alamat Warkop Mang Aep?',
    content: () => (
      <>
       Coffee shop kami beralamat di Alamat: Budur, Kec. Ciwaringin, Cirebon, Jawa Barat 45167 datang kapan saja, kami sangat menunggu anda datang.
      </>
    ),
  },
  {
    title: 'Berapa Kecepatan Wifi di Warkop?',
    content: () => (
      <>
       Kami memberi layanan akses wifi dengan kecepatan sangat cepat, hanya dengan membayar dua ribu rupiah nikmati layanan internet sepuasnya seharian tanpa ada gangguan.
      </>
    ),
  },
  {
    title: 'Kopi Apa Saja yang Tersedia?',
    content: () => (
      <>
       Kami menjual berbagai macam kopi terbaik di kota ini, tersedia kopi hitam dengan rasa yang khas, kopi moccachino, kopi latte, kopi capucino serta berbagai macam kopi panas maupun dingin.
      </>
    ),
  },
  {
    title: 'Apa yang Dijual Selain Kopi?',
    content: () => (
      <>
        Kami tidak hanya menjual kopi terbaik, selain itu tersedia banyak makanan cemilan, serta makanan berat seperti mie indomie empat gentong dengan telur setengah matang dan sayuran segar.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
