curl https://raw.githubusercontent.com/elastic/elasticsearch/master/docs/src/test/resources/accounts.json | curl -XPOST -H "Content-Type: application/json" --data-binary @- http://elasticsearch:9200/testdata/account/_bulk?pretty >> /dev/null