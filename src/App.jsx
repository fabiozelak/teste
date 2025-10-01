import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Menu, 
  X, 
  Heart, 
  Users, 
  BookOpen, 
  FileText, 
  Instagram, 
  Youtube, 
  Facebook, 
  Mail, 
  Phone,
  ChevronDown,
  Star,
  Award,
  Target
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import teamPhoto from './assets/team_photo.webp'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'quem-somos', 'projetos', 'transparencia', 'contato']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'quem-somos', label: 'Quem Somos' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'transparencia', label: 'Transparência' },
    { id: 'contato', label: 'Contato' }
  ]

  const projects = [
    {
      title: 'Projeto Social',
      description: 'Atividades que promovem inclusão e cidadania através do esporte.',
      icon: Heart,
      color: 'bg-gradient-to-br from-pink-500 to-rose-600'
    },
    {
      title: 'Projeto Cultural',
      description: 'Eventos e oficinas culturais para fortalecer a comunidade.',
      icon: Users,
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
    },
    {
      title: 'Projeto Educacional',
      description: 'Cursos e treinamentos para desenvolvimento de jovens e adultos.',
      icon: BookOpen,
      color: 'bg-gradient-to-br from-green-500 to-emerald-600'
    }
  ]

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                APAC
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className="p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-200"
            >
              <div className="px-4 py-2 space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                Fortalecendo o Esporte
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Associação dos{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Pais e Amigos
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
                dos Patinadores Artísticos de Curitiba
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Unidos pela paixão do esporte, trabalhamos para fortalecer a patinação artística 
                através da cooperação, apoio mútuo e desenvolvimento de nossos atletas em todas 
                as etapas de sua jornada esportiva.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('quem-somos')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                >
                  Conheça Nossa História
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('projetos')}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
                >
                  Ver Projetos
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={teamPhoto} 
                  alt="Equipe APAC com medalhas" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-yellow-500" />
                  <div>
                    <p className="font-bold text-gray-900">Conquistas</p>
                    <p className="text-sm text-gray-600">Nacionais e Internacionais</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* Quem Somos Section */}
      <section id="quem-somos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quem Somos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <Target className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Nossa Missão</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    A Associação de Pais e Amigos de Patinadores nasceu com o propósito de 
                    fortalecer o esporte por meio da união, da cooperação e do apoio mútuo. 
                    Nosso principal objetivo é estar ao lado de nossos associados em todas 
                    as etapas de sua jornada esportiva.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Oferecemos suporte nas competições municipais, estaduais, nacionais e 
                    até internacionais, sempre acreditando que o patinador não caminha sozinho.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-green-50 to-blue-50">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <Users className="w-8 h-8 text-green-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Nossa Comunidade</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Acreditamos que por trás de cada conquista existe uma rede de incentivo 
                    formada por família, amigos e comunidade. Por isso, trabalhamos para 
                    criar um ambiente colaborativo e acolhedor.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Aqui, todos podem compartilhar experiências, superar desafios e celebrar 
                    vitórias juntos, fortalecendo os laços que nos unem pelo amor ao esporte.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Projetos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Desenvolvemos iniciativas que vão além do esporte, promovendo inclusão, 
              cultura e educação para toda a comunidade.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden group">
                  <div className={`h-2 ${project.color}`}></div>
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 ${project.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed text-center">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparência Section */}
      <section id="transparencia" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparência
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Mantemos nossos associados e a comunidade informados sobre nossa gestão, 
              relatórios financeiros e atividades desenvolvidas.
            </p>
            
            <Card className="max-w-2xl mx-auto p-8 shadow-lg border-0 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="text-center p-0">
                <FileText className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Relatórios e Documentos
                </h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Acesse nossos relatórios financeiros, balanços e informações 
                  detalhadas sobre a gestão da associação.
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                >
                  Ver Relatórios
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Estamos sempre prontos para atender você. Entre em contato conosco 
              ou nos siga nas redes sociais.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 shadow-lg border-0 h-full">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    Fale Conosco
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Utilize os canais abaixo para entrar em contato
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 p-0">
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">contato@apac-curitiba.org.br</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                    <Phone className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Telefone</p>
                      <p className="text-gray-600">(41) 99999-9999</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 shadow-lg border-0 h-full">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    Nossas Redes Sociais
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Acompanhe nossas atividades e novidades
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid grid-cols-3 gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="w-8 h-8 text-blue-600 mb-2 group-hover:text-purple-600 transition-colors" />
                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                          {social.label}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">APAC</span>
            </div>
            <p className="text-gray-400 mb-4">
              Associação dos Pais e Amigos dos Patinadores Artísticos de Curitiba
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 APAC. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
