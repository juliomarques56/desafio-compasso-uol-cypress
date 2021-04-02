FROM cypress/included:4.4.0

WORKDIR /tmp

RUN git clone https://github.com/juliomarques56/desafio-compasso-uol-cypress.git && \
    cd desafio-compasso-uol-cypress && \
    npm install && \
    npx cypress open