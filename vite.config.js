import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages 배포 시 저장소 이름(mylink)에 맞게 base 경로 설정
  base: '/mylink/',
  build: {
    outDir: 'dist',
  },
});
