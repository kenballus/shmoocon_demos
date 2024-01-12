FROM kenballus/http-garden-soil:latest

RUN apt -y install zlib1g-dev libpcre2-dev libssl-dev && git clone "https://github.com/haproxy/haproxy"

RUN cd haproxy && git checkout "v2.8.0" && make -j$(nproc) TARGET=linux-glibc USE_OPENSSL=1 USE_ZLIB=1 USE_PCRE2=1 && make install

COPY haproxy.conf /app/haproxy.conf

ARG BACKEND
RUN sed -i "s/PROXY_BACKEND_PLACEHOLDER/$BACKEND/g" /app/haproxy.conf

CMD script -q /dev/stdout -c 'haproxy -f /app/haproxy.conf'
