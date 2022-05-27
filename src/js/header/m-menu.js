import Mmenu from 'mmenu-js'

export default function createMobileMenu(menuSelector) {
  const mediaQuery = window.matchMedia('(max-width: 575px)')
  if (mediaQuery.matches) {
    document.addEventListener('DOMContentLoaded', () => {
      new Mmenu(menuSelector, {
        "offCanvas": {
          "position": "right"
        },
        "theme": "dark"
      })
    })
  }
}