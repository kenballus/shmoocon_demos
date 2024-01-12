FROM kenballus/http-garden-soil:latest

RUN git clone 'https://github.com/cesanta/mongoose' \
 && cd /app/mongoose \
 && git checkout 7.9 \
 && cd examples/http-server \
 && make example

CMD script -q /dev/stdout -c /app/mongoose/examples/http-server/example
