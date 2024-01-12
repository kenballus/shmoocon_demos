FROM kenballus/http-garden-soil:latest

RUN apt -y install zsh zsh-syntax-highlighting firefox-esr wget

RUN chsh -s /usr/bin/zsh
COPY zshrc /root/.zshrc

COPY payloads/ ./payloads/
WORKDIR /app/payloads

CMD ["sleep", "infinity"]
