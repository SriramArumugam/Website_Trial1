type Where = 'home' | 'app'

export type Navigation = {
  name: string
  to: string
  icon: string
}

export function getNavigation(where: Where): Record<string, Navigation> | [] {
  switch (where) {
    case 'home':
      return {
        home: {
          name: 'Home',
          to: '/',
          icon: 'lucide:home',
        },
        projects: {
      name: 'Projects',
      to: '#products',
      icon: 'lucide:briefcase',
    },
    how: {
      name: 'How it works',
      to: '#how',
      icon: 'lucide:route',
    },
    contact: {
      name: 'Contact us',
      to: '#contact',
      icon: 'lucide:mail',
    },
      }
    default:
      return []
  }
}
