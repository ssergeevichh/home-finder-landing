import Mmenu from 'mmenu-js'

export default function createMobileMenu(menuSelector) {
  if ($(window).width() < 577) {
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