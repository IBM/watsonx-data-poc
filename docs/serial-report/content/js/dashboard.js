/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 100.0, "KoPercent": 0.0};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9714285714285714, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [1.0, 500, 1500, "intermediate-01.sql"], "isController": false}, {"data": [1.0, 500, 1500, "intermediate-06.sql"], "isController": false}, {"data": [1.0, 500, 1500, "complex-04.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-01.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-14.sql"], "isController": false}, {"data": [1.0, 500, 1500, "intermediate-10.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-07.sql"], "isController": false}, {"data": [0.0, 500, 1500, "simple-00.sql"], "isController": false}, {"data": [1.0, 500, 1500, "complex-05.sql"], "isController": false}, {"data": [1.0, 500, 1500, "intermediate-05.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-13.sql"], "isController": false}, {"data": [1.0, 500, 1500, "intermediate-09.sql"], "isController": false}, {"data": [1.0, 500, 1500, "complex-02.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-04.sql"], "isController": false}, {"data": [1.0, 500, 1500, "complex-06.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-08.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-12.sql"], "isController": false}, {"data": [1.0, 500, 1500, "intermediate-03.sql"], "isController": false}, {"data": [1.0, 500, 1500, "intermediate-04.sql"], "isController": false}, {"data": [1.0, 500, 1500, "complex-01.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-03.sql"], "isController": false}, {"data": [1.0, 500, 1500, "complex-07.sql"], "isController": false}, {"data": [1.0, 500, 1500, "intermediate-08.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-09.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-05.sql"], "isController": false}, {"data": [1.0, 500, 1500, "intermediate-07.sql"], "isController": false}, {"data": [1.0, 500, 1500, "Debug Sampler"], "isController": false}, {"data": [1.0, 500, 1500, "simple-02.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-11.sql"], "isController": false}, {"data": [1.0, 500, 1500, "intermediate-02.sql"], "isController": false}, {"data": [1.0, 500, 1500, "complex-03.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-15.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simlple-06.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-10.sql"], "isController": false}, {"data": [1.0, 500, 1500, "complex-08.sql"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 35, 0, 0.0, 403.3714285714286, 1, 10872, 66.0, 250.59999999999985, 2468.799999999955, 10872.0, 2.4773499433748585, 185.52295861940826, 0.0], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["intermediate-01.sql", 1, 0, 0.0, 80.0, 80, 80, 80.0, 80.0, 80.0, 80.0, 12.5, 11.8896484375, 0.0], "isController": false}, {"data": ["intermediate-06.sql", 1, 0, 0.0, 59.0, 59, 59, 59.0, 59.0, 59.0, 59.0, 16.949152542372882, 0.1986228813559322, 0.0], "isController": false}, {"data": ["complex-04.sql", 1, 0, 0.0, 211.0, 211, 211, 211.0, 211.0, 211.0, 211.0, 4.739336492890995, 2472.2721045616113, 0.0], "isController": false}, {"data": ["simple-01.sql", 1, 0, 0.0, 57.0, 57, 57, 57.0, 57.0, 57.0, 57.0, 17.543859649122805, 65.39542214912281, 0.0], "isController": false}, {"data": ["simple-14.sql", 1, 0, 0.0, 43.0, 43, 43, 43.0, 43.0, 43.0, 43.0, 23.25581395348837, 5.972928779069768, 0.0], "isController": false}, {"data": ["intermediate-10.sql", 1, 0, 0.0, 101.0, 101, 101, 101.0, 101.0, 101.0, 101.0, 9.900990099009901, 34.315052599009896, 0.0], "isController": false}, {"data": ["simple-07.sql", 1, 0, 0.0, 45.0, 45, 45, 45.0, 45.0, 45.0, 45.0, 22.22222222222222, 7.400173611111112, 0.0], "isController": false}, {"data": ["simple-00.sql", 1, 0, 0.0, 10872.0, 10872, 10872, 10872.0, 10872.0, 10872.0, 10872.0, 0.09197939661515821, 9.880599245768948E-4, 0.0], "isController": false}, {"data": ["complex-05.sql", 1, 0, 0.0, 66.0, 66, 66, 66.0, 66.0, 66.0, 66.0, 15.151515151515152, 27.920809659090907, 0.0], "isController": false}, {"data": ["intermediate-05.sql", 1, 0, 0.0, 66.0, 66, 66, 66.0, 66.0, 66.0, 66.0, 15.151515151515152, 31.04285037878788, 0.0], "isController": false}, {"data": ["simple-13.sql", 1, 0, 0.0, 43.0, 43, 43, 43.0, 43.0, 43.0, 43.0, 23.25581395348837, 2.316497093023256, 0.0], "isController": false}, {"data": ["intermediate-09.sql", 1, 0, 0.0, 71.0, 71, 71, 71.0, 71.0, 71.0, 71.0, 14.084507042253522, 55.320202464788736, 0.0], "isController": false}, {"data": ["complex-02.sql", 1, 0, 0.0, 310.0, 310, 310, 310.0, 310.0, 310.0, 310.0, 3.225806451612903, 1370.9551411290322, 0.0], "isController": false}, {"data": ["simple-04.sql", 1, 0, 0.0, 55.0, 55, 55, 55.0, 55.0, 55.0, 55.0, 18.18181818181818, 2.1484375, 0.0], "isController": false}, {"data": ["complex-06.sql", 1, 0, 0.0, 162.0, 162, 162, 162.0, 162.0, 162.0, 162.0, 6.172839506172839, 3673.9848572530864, 0.0], "isController": false}, {"data": ["simple-08.sql", 1, 0, 0.0, 179.0, 179, 179, 179.0, 179.0, 179.0, 179.0, 5.58659217877095, 534.2178770949721, 0.0], "isController": false}, {"data": ["simple-12.sql", 1, 0, 0.0, 69.0, 69, 69, 69.0, 69.0, 69.0, 69.0, 14.492753623188406, 4.812047101449275, 0.0], "isController": false}, {"data": ["intermediate-03.sql", 1, 0, 0.0, 53.0, 53, 53, 53.0, 53.0, 53.0, 53.0, 18.867924528301884, 4.993366745283019, 0.0], "isController": false}, {"data": ["intermediate-04.sql", 1, 0, 0.0, 204.0, 204, 204, 204.0, 204.0, 204.0, 204.0, 4.901960784313726, 3.571155024509804, 0.0], "isController": false}, {"data": ["complex-01.sql", 1, 0, 0.0, 99.0, 99, 99, 99.0, 99.0, 99.0, 99.0, 10.101010101010102, 40.28566919191919, 0.0], "isController": false}, {"data": ["simple-03.sql", 1, 0, 0.0, 48.0, 48, 48, 48.0, 48.0, 48.0, 48.0, 20.833333333333332, 21.464029947916668, 0.0], "isController": false}, {"data": ["complex-07.sql", 1, 0, 0.0, 74.0, 74, 74, 74.0, 74.0, 74.0, 74.0, 13.513513513513514, 643.0927998310812, 0.0], "isController": false}, {"data": ["intermediate-08.sql", 1, 0, 0.0, 95.0, 95, 95, 95.0, 95.0, 95.0, 95.0, 10.526315789473683, 36.41036184210526, 0.0], "isController": false}, {"data": ["simple-09.sql", 1, 0, 0.0, 65.0, 65, 65, 65.0, 65.0, 65.0, 65.0, 15.384615384615385, 703.5306490384615, 0.0], "isController": false}, {"data": ["simple-05.sql", 1, 0, 0.0, 46.0, 46, 46, 46.0, 46.0, 46.0, 46.0, 21.73913043478261, 4.224694293478261, 0.0], "isController": false}, {"data": ["intermediate-07.sql", 1, 0, 0.0, 76.0, 76, 76, 76.0, 76.0, 76.0, 76.0, 13.157894736842104, 1312.731291118421, 0.0], "isController": false}, {"data": ["Debug Sampler", 1, 0, 0.0, 1.0, 1, 1, 1.0, 1.0, 1.0, 1.0, 1000.0, 3710.9375, 0.0], "isController": false}, {"data": ["simple-02.sql", 1, 0, 0.0, 50.0, 50, 50, 50.0, 50.0, 50.0, 50.0, 20.0, 2.79296875, 0.0], "isController": false}, {"data": ["simple-11.sql", 1, 0, 0.0, 56.0, 56, 56, 56.0, 56.0, 56.0, 56.0, 17.857142857142858, 4.429408482142857, 0.0], "isController": false}, {"data": ["intermediate-02.sql", 1, 0, 0.0, 43.0, 43, 43, 43.0, 43.0, 43.0, 43.0, 23.25581395348837, 6.790515988372094, 0.0], "isController": false}, {"data": ["complex-03.sql", 1, 0, 0.0, 162.0, 162, 162, 162.0, 162.0, 162.0, 162.0, 6.172839506172839, 27.904369212962962, 0.0], "isController": false}, {"data": ["simple-15.sql", 1, 0, 0.0, 45.0, 45, 45, 45.0, 45.0, 45.0, 45.0, 22.22222222222222, 96.15885416666667, 0.0], "isController": false}, {"data": ["simlple-06.sql", 1, 0, 0.0, 48.0, 48, 48, 48.0, 48.0, 48.0, 48.0, 20.833333333333332, 0.244140625, 0.0], "isController": false}, {"data": ["simple-10.sql", 1, 0, 0.0, 368.0, 368, 368, 368.0, 368.0, 368.0, 368.0, 2.717391304347826, 2028.5246475883152, 0.0], "isController": false}, {"data": ["complex-08.sql", 1, 0, 0.0, 96.0, 96, 96, 96.0, 96.0, 96.0, 96.0, 10.416666666666666, 41.544596354166664, 0.0], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": []}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 35, 0, "", "", "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
