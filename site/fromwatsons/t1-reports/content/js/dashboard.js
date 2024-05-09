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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9705882352941176, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [1.0, 500, 1500, "intermediate-01.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-06.sql"], "isController": false}, {"data": [1.0, 500, 1500, "intermediate-06.sql"], "isController": false}, {"data": [1.0, 500, 1500, "complex-04.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-01.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-14.sql"], "isController": false}, {"data": [1.0, 500, 1500, "intermediate-10.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-07.sql"], "isController": false}, {"data": [0.6666666666666666, 500, 1500, "simple-00.sql"], "isController": false}, {"data": [1.0, 500, 1500, "complex-05.sql"], "isController": false}, {"data": [1.0, 500, 1500, "intermediate-05.sql"], "isController": false}, {"data": [0.6666666666666666, 500, 1500, "simple-13.sql"], "isController": false}, {"data": [1.0, 500, 1500, "intermediate-09.sql"], "isController": false}, {"data": [1.0, 500, 1500, "complex-02.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-04.sql"], "isController": false}, {"data": [1.0, 500, 1500, "complex-06.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-08.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-12.sql"], "isController": false}, {"data": [1.0, 500, 1500, "intermediate-03.sql"], "isController": false}, {"data": [1.0, 500, 1500, "intermediate-04.sql"], "isController": false}, {"data": [1.0, 500, 1500, "complex-01.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-03.sql"], "isController": false}, {"data": [1.0, 500, 1500, "complex-07.sql"], "isController": false}, {"data": [1.0, 500, 1500, "intermediate-08.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-09.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-05.sql"], "isController": false}, {"data": [1.0, 500, 1500, "intermediate-07.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-02.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-11.sql"], "isController": false}, {"data": [1.0, 500, 1500, "intermediate-02.sql"], "isController": false}, {"data": [1.0, 500, 1500, "complex-03.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-15.sql"], "isController": false}, {"data": [1.0, 500, 1500, "simple-10.sql"], "isController": false}, {"data": [0.6666666666666666, 500, 1500, "complex-08.sql"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 102, 0, 0.0, 333.529411764706, 68, 18182, 96.0, 291.3, 370.9999999999999, 17690.53999999998, 2.9896242452664286, 229.93175225504132, 0.0], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["intermediate-01.sql", 3, 0, 0.0, 111.66666666666667, 110, 113, 112.0, 113.0, 113.0, 113.0, 0.2607335303320007, 0.24800240092125847, 0.0], "isController": false}, {"data": ["simple-06.sql", 3, 0, 0.0, 77.33333333333333, 76, 79, 77.0, 79.0, 79.0, 79.0, 0.29219830524982954, 0.00342419888964644, 0.0], "isController": false}, {"data": ["intermediate-06.sql", 3, 0, 0.0, 87.0, 87, 87, 87.0, 87.0, 87.0, 87.0, 0.2614151272220286, 0.0030634585221331473, 0.0], "isController": false}, {"data": ["complex-04.sql", 3, 0, 0.0, 211.0, 189, 248, 196.0, 248.0, 248.0, 248.0, 0.253399780386857, 132.18584696237014, 0.0], "isController": false}, {"data": ["simple-01.sql", 3, 0, 0.0, 79.66666666666667, 75, 88, 76.0, 88.0, 88.0, 88.0, 0.29151685939170147, 0.316379299873676, 0.0], "isController": false}, {"data": ["simple-14.sql", 3, 0, 0.0, 77.0, 76, 78, 77.0, 78.0, 78.0, 78.0, 0.2628811777076761, 0.0675173337276551, 0.0], "isController": false}, {"data": ["intermediate-10.sql", 3, 0, 0.0, 122.66666666666667, 122, 123, 123.0, 123.0, 123.0, 123.0, 0.256366433088361, 0.8885199912408135, 0.0], "isController": false}, {"data": ["simple-07.sql", 3, 0, 0.0, 74.66666666666667, 73, 76, 75.0, 76.0, 76.0, 76.0, 0.2923691647987526, 0.0973612160120846, 0.0], "isController": false}, {"data": ["simple-00.sql", 3, 0, 0.0, 6106.0, 68, 18182, 68.0, 18182.0, 18182.0, 18182.0, 0.10563380281690142, 0.001134738116197183, 0.0], "isController": false}, {"data": ["complex-05.sql", 3, 0, 0.0, 93.33333333333333, 91, 95, 94.0, 95.0, 95.0, 95.0, 0.25558016697904246, 0.47080994952291705, 0.0], "isController": false}, {"data": ["intermediate-05.sql", 3, 0, 0.0, 93.66666666666667, 92, 96, 93.0, 96.0, 96.0, 96.0, 0.26125576939824086, 0.537309228860054, 0.0], "isController": false}, {"data": ["simple-13.sql", 3, 0, 0.0, 610.0, 76, 1677, 77.0, 1677.0, 1677.0, 1677.0, 0.2629042152309175, 0.026187724564017176, 0.0], "isController": false}, {"data": ["intermediate-09.sql", 3, 0, 0.0, 100.0, 98, 103, 99.0, 103.0, 103.0, 103.0, 0.2569153035882504, 1.0090950693671321, 0.0], "isController": false}, {"data": ["complex-02.sql", 3, 0, 0.0, 357.0, 304, 393, 374.0, 393.0, 393.0, 393.0, 0.2505637684790779, 106.54245489852167, 0.0], "isController": false}, {"data": ["simple-04.sql", 3, 0, 0.0, 82.66666666666667, 81, 84, 83.0, 84.0, 84.0, 84.0, 0.29191398267977037, 0.034493742093996305, 0.0], "isController": false}, {"data": ["complex-06.sql", 3, 0, 0.0, 163.33333333333334, 142, 183, 165.0, 183.0, 183.0, 183.0, 0.25397900440230275, 151.1646326299526, 0.0], "isController": false}, {"data": ["simple-08.sql", 3, 0, 0.0, 243.0, 90, 354, 285.0, 354.0, 354.0, 354.0, 0.2919423900350331, 27.91699104710004, 0.0], "isController": false}, {"data": ["simple-12.sql", 3, 0, 0.0, 96.33333333333333, 96, 97, 96.0, 97.0, 97.0, 97.0, 0.3051881993896236, 0.10133201932858596, 0.0], "isController": false}, {"data": ["intermediate-03.sql", 3, 0, 0.0, 82.33333333333333, 81, 84, 82.0, 84.0, 84.0, 84.0, 0.2614151272220286, 0.06918310495817358, 0.0], "isController": false}, {"data": ["intermediate-04.sql", 3, 0, 0.0, 228.33333333333334, 226, 230, 229.0, 230.0, 230.0, 230.0, 0.25815334308579296, 0.18806874408398588, 0.0], "isController": false}, {"data": ["complex-01.sql", 3, 0, 0.0, 125.33333333333333, 124, 127, 125.0, 127.0, 127.0, 127.0, 0.2563226247436774, 1.0222867182159945, 0.0], "isController": false}, {"data": ["simple-03.sql", 3, 0, 0.0, 76.66666666666667, 74, 79, 77.0, 79.0, 79.0, 79.0, 0.29197080291970806, 0.3008097627737226, 0.0], "isController": false}, {"data": ["complex-07.sql", 3, 0, 0.0, 98.33333333333333, 98, 99, 98.0, 99.0, 99.0, 99.0, 0.25581990278843697, 12.174179377718087, 0.0], "isController": false}, {"data": ["intermediate-08.sql", 3, 0, 0.0, 124.66666666666667, 123, 126, 125.0, 126.0, 126.0, 126.0, 0.2563226247436774, 0.8866159539473684, 0.0], "isController": false}, {"data": ["simple-09.sql", 3, 0, 0.0, 89.66666666666667, 88, 92, 89.0, 92.0, 92.0, 92.0, 0.2997002997002997, 13.705142513736265, 0.0], "isController": false}, {"data": ["simple-05.sql", 3, 0, 0.0, 89.0, 74, 116, 77.0, 116.0, 116.0, 116.0, 0.292169848071679, 0.0567791013342423, 0.0], "isController": false}, {"data": ["intermediate-07.sql", 3, 0, 0.0, 167.0, 100, 294, 107.0, 294.0, 294.0, 294.0, 0.2567613830879836, 25.616461346713457, 0.0], "isController": false}, {"data": ["simple-02.sql", 3, 0, 0.0, 74.33333333333333, 74, 75, 74.0, 75.0, 75.0, 75.0, 0.2919423900350331, 0.040769298608407945, 0.0], "isController": false}, {"data": ["simple-11.sql", 3, 0, 0.0, 89.66666666666667, 87, 95, 87.0, 95.0, 95.0, 95.0, 0.3052503052503053, 0.07571638431013432, 0.0], "isController": false}, {"data": ["intermediate-02.sql", 3, 0, 0.0, 77.33333333333333, 77, 78, 77.0, 78.0, 78.0, 78.0, 0.2615290733153169, 0.07636444621218726, 0.0], "isController": false}, {"data": ["complex-03.sql", 3, 0, 0.0, 180.66666666666666, 160, 194, 188.0, 194.0, 194.0, 194.0, 0.254539283896148, 1.1506468214406924, 0.0], "isController": false}, {"data": ["simple-15.sql", 3, 0, 0.0, 102.33333333333333, 79, 145, 83.0, 145.0, 145.0, 145.0, 0.26139234991722576, 1.1310834985187765, 0.0], "isController": false}, {"data": ["simple-10.sql", 3, 0, 0.0, 260.6666666666667, 145, 320, 317.0, 320.0, 320.0, 320.0, 0.29812183245553014, 222.54707452424722, 0.0], "isController": false}, {"data": ["complex-08.sql", 3, 0, 0.0, 687.3333333333333, 127, 1800, 135.0, 1800.0, 1800.0, 1800.0, 0.25523226135783567, 1.0179380423685553, 0.0], "isController": false}]}, function(index, item){
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
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 102, 0, "", "", "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
