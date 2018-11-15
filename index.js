const Kafka = require('./src')
const PartitionAssigners = require('./src/consumer/assigners')
const AssignerProtocol = require('./src/consumer/assignerProtocol')
const Compression = require('./src/protocol/message/compression')
const ResourceTypes = require('./src/protocol/resourceTypes')
const { LEVELS } = require('./src/loggers')

//imports libs
module.exports = process.env.ELASTICSEARCHCLIENT_COV ? require('./lib-cov/elasticsearchclient/elasticSearchClient') : require('./lib/elasticsearchclient/elasticSearchClient');


module.exports = {
  Kafka,
  PartitionAssigners,
  AssignerProtocol,
  logLevel: LEVELS,
  CompressionTypes: Compression.Types,
  CompressionCodecs: Compression.Codecs,
  ResourceTypes,
}
