export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='py-8 bg-black/80'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0'>
            <p className='text-foreground/60 text-sm'>
              © {currentYear} Fernando. Todos los derechos reservados.
            </p>
          </div>
          <div>
            <p className='text-foreground/60 text-sm'>
              Espacio libre pa ser tu<span className='text-accent'>♥</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
