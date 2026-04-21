import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import Process from '@/components/home/Process';
import Education from '@/components/home/Education'; // 새로 추가된 컴포넌트
import ContactForm from '@/components/home/ContactForm';
import CustomerSupport from '@/components/home/CustomerSupport';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      <Hero />

      <Process />

      <Education />

      <ContactForm />

      <CustomerSupport />

      <Footer />
    </main>
  );
}
