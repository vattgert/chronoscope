import Fastify from "fastify";

const fastify = Fastify({
  logger: true
});

fastify.listen({ port: 3000}, function(error, address){
  if(error){
    fastify.log.error(error);
    process.exit(1);
  }
})