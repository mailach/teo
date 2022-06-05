# pull official base image
FROM node:16-alpine

# set working directory
WORKDIR /app

# See https://github.com/vitejs/vite/issues/2671#issuecomment-829535806
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ADD . .

RUN yarn install

ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 3001

# start app
CMD ["yarn","run","dev"]
