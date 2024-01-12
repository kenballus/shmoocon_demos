FROM kenballus/http-garden-soil

RUN apt -y install trafficserver

COPY ./records.yaml /etc/trafficserver/records.yaml
COPY ./remap.config /etc/trafficserver/remap.config
COPY ./ip_allow.yaml /etc/trafficserver/ip_allow.yaml

ARG BACKEND
RUN sed -i "s/PROXY_BACKEND_PLACEHOLDER/$BACKEND/g" /etc/trafficserver/records.yaml /etc/trafficserver/remap.config && mkdir -p /run/trafficserver && chmod 777 /run/trafficserver

CMD ["traffic_server", "--httpport", "80"]
