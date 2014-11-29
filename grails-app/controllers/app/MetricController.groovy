package app

import grails.converters.JSON

class MetricController {

    def frontPage(){
        def metric = new Metric(request.JSON)
        println(metric)

        metric.save(flush: true)

        render metric AS JSON
    }
}
