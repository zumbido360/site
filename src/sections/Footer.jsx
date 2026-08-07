export default function Footer() {
  return (
    /* ================= FOOTER ================= */
    <footer className="border-t border-white/10 bg-oceano">
      <div className="container-lp py-14">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            {/* logo secundária — versão para fundos escuros */}
            <img
              src="/assets/logo-secundaria.svg"
              alt="Zumbido 360"
              className="h-10 w-auto"
              loading="lazy"
              width="607"
              height="133"
            />
            <p className="mt-4 text-small font-light text-gelo/60">
              <em className="not-italic text-saude">Da Ciência à Clínica</em> · Instituto Holdefer
            </p>
          </div>

          <address className="not-italic text-small font-light text-gelo/60">
            <a
              href="mailto:zumbido360fono@gmail.com"
              className="transition-colors hover:text-saude"
            >
              zumbido360fono@gmail.com
            </a>
          </address>
        </div>

        <p className="mt-12 max-w-measure border-t border-white/10 pt-8 text-small font-light leading-relaxed text-gelo/45">
          Esta página é destinada a profissionais de saúde — fonoaudiólogos e médicos
          otorrinolaringologistas. A participação na formação não substitui as exigências legais,
          éticas e de capacitação dos Conselhos Profissionais.
        </p>

        <p className="mt-6 text-small font-light text-gelo/35">
          © {new Date().getFullYear()} Instituto Holdefer. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
