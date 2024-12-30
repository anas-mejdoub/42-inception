import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
	server: {
    host: '0.0.0.0',  // Listen on all interfaces
    port: 5173     // Ensure it's listening on port 5173
    //https: true
	}
})
