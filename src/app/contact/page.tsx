import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-900 pt-32 pb-20 px-6 md:px-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Contact Us
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          We&apos;d love to hear from you. Please reach out with any inquiries or partnership opportunities.
        </p>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Get in Touch</h2>
            <p className="text-slate-500">
              For general inquiries, please email us directly.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4">
            <a 
              href="mailto:gaomuyouxi81@gmail.com" 
              className="text-xl md:text-2xl font-medium text-slate-800 hover:text-orange-600 transition-colors border-b-2 border-slate-200 hover:border-orange-600 pb-1"
            >
              [EMAIL_ADDRESS]
            </a>
            <p className="text-sm text-slate-400 pt-4">
              It may take some time to reply because it is a personal development project.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
