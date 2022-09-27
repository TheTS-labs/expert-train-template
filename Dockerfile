FROM alpine

RUN apk update
RUN apk --no-cache --update add nodejs npm git bash
RUN apk --no-cache --update add yarn --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community

RUN git clone https://github.com/TheTS-labs/expert-train-template.git
WORKDIR "/expert-train-template"

RUN yarn install