# Reflexion Marvin
Für das Projekt Shopping List habe ich eine CI/CD Pipeline mit Github Actions erstellt. Diese hat den vorteil, dass nun bei jedem Push auf `main` das Produkt getests, gebaut und deployed wird.

## Pipeline Aufbau
Die Pipeline ist in folgende jobs unterteilt:

- setup:
  - Dieser Job führt die Setup-Prozess aus (npm ci).
- lint:
  - Dieser Job führt die Lint-Prozess aus (npm run lint).
- test:
  - Dieser Job führt die Tests aus (npm run test).
- build:
  - Dieser Job führt die Build-Prozess aus (npm run build).
- deploy:
  - Dieser Job führt die Deployment-Prozess aus.

Um die Pipeline etwas performanter zu mache, werden die jobs: lint und test parallel ausgeführt. Dazu kommt auch, dass die node_modules nur im setup job installiert werden.

Nun fehlt lediglich noch der Deployment-Prozess.