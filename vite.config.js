import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
<<<<<<< HEAD
  base  base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/'
=======
  base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/'
})
>>>>>>> 76aab3bead4490705919b48a461681b63730fa43
