import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/Alido-PWA/',  
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Alido PWA',
        short_name: 'A-PWA',
        description: 'My personal utility PWA',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },  
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' }   
        ]
      }
    })
  ]
})
