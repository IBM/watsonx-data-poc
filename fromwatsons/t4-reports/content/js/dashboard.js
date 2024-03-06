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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.8646162877923095, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.5928661219358894, 500, 1500, "intermediate-01.sql"], "isController": false}, {"data": [0.9980413345940835, 500, 1500, "simple-06.sql"], "isController": false}, {"data": [0.8237975479408991, 500, 1500, "intermediate-06.sql"], "isController": false}, {"data": [0.3984078847611827, 500, 1500, "complex-04.sql"], "isController": false}, {"data": [0.9947332883187036, 500, 1500, "simple-01.sql"], "isController": false}, {"data": [0.9981732070365359, 500, 1500, "simple-14.sql"], "isController": false}, {"data": [0.5515285219035613, 500, 1500, "intermediate-10.sql"], "isController": false}, {"data": [0.9978384220480951, 500, 1500, "simple-07.sql"], "isController": false}, {"data": [0.9601669195751138, 500, 1500, "complex-05.sql"], "isController": false}, {"data": [0.9728072933039924, 500, 1500, "intermediate-05.sql"], "isController": false}, {"data": [0.9979031385281385, 500, 1500, "simple-13.sql"], "isController": false}, {"data": [0.3765151515151515, 500, 1500, "complex-02.sql"], "isController": false}, {"data": [0.9498896942956193, 500, 1500, "intermediate-09.sql"], "isController": false}, {"data": [0.9811562879913549, 500, 1500, "simple-04.sql"], "isController": false}, {"data": [0.6351556567957479, 500, 1500, "complex-06.sql"], "isController": false}, {"data": [0.659054054054054, 500, 1500, "simple-08.sql"], "isController": false}, {"data": [0.6816152597402597, 500, 1500, "simple-12.sql"], "isController": false}, {"data": [0.9806664570889657, 500, 1500, "intermediate-03.sql"], "isController": false}, {"data": [0.5416666666666666, 500, 1500, "complex-01.sql"], "isController": false}, {"data": [0.4990569003458032, 500, 1500, "intermediate-04.sql"], "isController": false}, {"data": [0.9975685532892071, 500, 1500, "simple-03.sql"], "isController": false}, {"data": [0.6724924012158054, 500, 1500, "complex-07.sql"], "isController": false}, {"data": [0.5468995908089392, 500, 1500, "intermediate-08.sql"], "isController": false}, {"data": [0.9322698391239692, 500, 1500, "simple-09.sql"], "isController": false}, {"data": [0.998379035526138, 500, 1500, "simple-05.sql"], "isController": false}, {"data": [0.5397798742138364, 500, 1500, "intermediate-07.sql"], "isController": false}, {"data": [0.9989193570174254, 500, 1500, "simple-02.sql"], "isController": false}, {"data": [0.9987425337944043, 500, 1500, "intermediate-02.sql"], "isController": false}, {"data": [0.5155420773313116, 500, 1500, "complex-03.sql"], "isController": false}, {"data": [0.9658414502164502, 500, 1500, "simple-11.sql"], "isController": false}, {"data": [0.9986466368926783, 500, 1500, "simple-15.sql"], "isController": false}, {"data": [0.68381557598702, 500, 1500, "simple-10.sql"], "isController": false}, {"data": [0.5520516717325228, 500, 1500, "complex-08.sql"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 153305, 0, 0.0, 410.4336975310727, 75, 44162, 273.0, 822.0, 1026.0, 1813.0, 85.11747549690494, 5056.676511834754, 0.0], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["intermediate-01.sql", 3182, 0, 0.0, 801.5955373978635, 121, 44162, 660.5, 925.7000000000003, 1003.8499999999999, 1202.6800000000003, 1.767476324871258, 1.6811737699459037, 0.0], "isController": false}, {"data": ["simple-06.sql", 7403, 0, 0.0, 228.73375658516818, 77, 2203, 219.0, 300.0, 331.0, 408.0, 4.2135614868072215, 0.049377673673522124, 0.0], "isController": false}, {"data": ["intermediate-06.sql", 3181, 0, 0.0, 441.847532222572, 89, 2618, 419.0, 686.8000000000002, 759.8999999999996, 925.0, 1.814086113487311, 0.021258821642429426, 0.0], "isController": false}, {"data": ["complex-04.sql", 1319, 0, 0.0, 1306.7884761182718, 556, 7461, 1208.0, 1747.0, 2203.0, 3763.3999999999987, 0.7513991176899519, 391.9669094700429, 0.0], "isController": false}, {"data": ["simple-01.sql", 7405, 0, 0.0, 322.3720459149227, 78, 42462, 205.0, 276.0, 306.0, 401.8199999999988, 4.113838608639227, 4.464557520859468, 0.0], "isController": false}, {"data": ["simple-14.sql", 7390, 0, 0.0, 153.1660351826792, 78, 2117, 132.0, 234.0, 271.0, 376.0, 4.215599085688469, 1.0827173432969408, 0.0], "isController": false}, {"data": ["intermediate-10.sql", 3173, 0, 0.0, 751.3309171131408, 146, 2820, 739.0, 1015.0, 1102.0, 1279.2599999999998, 1.81101930764612, 6.27666750276961, 0.0], "isController": false}, {"data": ["simple-07.sql", 7402, 0, 0.0, 208.25817346663126, 77, 2185, 199.0, 271.0, 296.84999999999945, 369.0, 4.21341199279815, 1.403099110882978, 0.0], "isController": false}, {"data": ["complex-05.sql", 1318, 0, 0.0, 342.530349013657, 144, 2406, 313.0, 475.0, 544.05, 759.7699999999991, 0.7517681953000228, 1.383255217245608, 0.0], "isController": false}, {"data": ["intermediate-05.sql", 3181, 0, 0.0, 321.5265639735923, 92, 2368, 300.0, 439.0, 507.4999999999982, 701.0, 1.8136062085652842, 3.7266991191096284, 0.0], "isController": false}, {"data": ["simple-13.sql", 7392, 0, 0.0, 210.63244047619074, 82, 2124, 201.0, 274.0, 304.0, 387.0699999999997, 4.216035307014291, 0.4199566419096267, 0.0], "isController": false}, {"data": ["complex-02.sql", 1320, 0, 0.0, 1389.2659090909083, 800, 4561, 1345.5, 1685.9, 1843.8000000000002, 2593.399999999998, 0.7509766963966203, 319.3344685262893, 0.0], "isController": false}, {"data": ["intermediate-09.sql", 3173, 0, 0.0, 368.0280491648278, 101, 2651, 357.0, 498.0, 558.0, 731.5199999999995, 1.8112219269163674, 7.1139986231031545, 0.0], "isController": false}, {"data": ["simple-04.sql", 7403, 0, 0.0, 300.95204646764824, 84, 2384, 288.0, 433.0, 482.7999999999993, 578.96, 4.213964428060916, 0.4979391560501668, 0.0], "isController": false}, {"data": ["complex-06.sql", 1317, 0, 0.0, 690.4457099468494, 262, 5695, 556.0, 1109.6000000000001, 1452.3999999999987, 2924.5199999999945, 0.7510838533510202, 447.0342540057093, 0.0], "isController": false}, {"data": ["simple-08.sql", 7400, 0, 0.0, 632.0071621621615, 111, 3065, 610.0, 941.0, 1042.0, 1292.9799999999996, 4.212901841095036, 402.8587385547128, 0.0], "isController": false}, {"data": ["simple-12.sql", 7392, 0, 0.0, 576.6768127705622, 124, 2458, 563.0, 810.6999999999998, 889.0, 1052.3499999999985, 4.214494508671014, 1.399343879832173, 0.0], "isController": false}, {"data": ["intermediate-03.sql", 3181, 0, 0.0, 297.0490411820176, 97, 2431, 281.0, 430.0, 476.89999999999964, 574.3599999999997, 1.8128289706140481, 0.4797623545277413, 0.0], "isController": false}, {"data": ["complex-01.sql", 1320, 0, 0.0, 952.9075757575756, 245, 42796, 777.5, 1104.4000000000005, 1199.95, 1407.8999999999996, 0.7336744919721003, 2.9261002199356034, 0.0], "isController": false}, {"data": ["intermediate-04.sql", 3181, 0, 0.0, 956.9157497642252, 268, 2729, 944.0, 1235.0, 1319.8999999999996, 1578.1799999999998, 1.8125015313102375, 1.3204356858959347, 0.0], "isController": false}, {"data": ["simple-03.sql", 7403, 0, 0.0, 208.26273132513856, 75, 2207, 199.0, 270.0, 299.0, 379.96000000000004, 4.2141635286717385, 4.341740744871762, 0.0], "isController": false}, {"data": ["complex-07.sql", 1316, 0, 0.0, 612.8396656534953, 190, 2870, 586.5, 911.3, 989.2999999999997, 1159.9599999999991, 0.7511561297422439, 35.746669295380165, 0.0], "isController": false}, {"data": ["intermediate-08.sql", 3177, 0, 0.0, 768.1129996852376, 149, 2885, 755.0, 1043.2000000000003, 1134.0, 1337.8799999999992, 1.8123589531787303, 6.268921300936586, 0.0], "isController": false}, {"data": ["simple-09.sql", 7397, 0, 0.0, 389.692578072192, 107, 2381, 372.0, 525.0, 610.0999999999995, 744.039999999999, 4.21375837396892, 192.6930306424244, 0.0], "isController": false}, {"data": ["simple-05.sql", 7403, 0, 0.0, 208.16074564365798, 80, 2115, 199.0, 274.0, 304.0, 381.0, 4.2136766050163414, 0.8188687933576679, 0.0], "isController": false}, {"data": ["intermediate-07.sql", 3180, 0, 0.0, 746.1842767295607, 371, 3239, 706.0, 1030.0, 1130.0, 1417.0900000000006, 1.8132428308483923, 180.90284578626316, 0.0], "isController": false}, {"data": ["simple-02.sql", 7403, 0, 0.0, 205.4468458732948, 76, 2037, 198.0, 268.0, 294.0, 364.8800000000001, 4.214456216735655, 0.5885422255792956, 0.0], "isController": false}, {"data": ["intermediate-02.sql", 3181, 0, 0.0, 203.0719899402702, 78, 1975, 196.0, 267.0, 293.89999999999964, 360.5399999999995, 1.812979818417048, 0.5293759430729467, 0.0], "isController": false}, {"data": ["complex-03.sql", 1319, 0, 0.0, 778.5018953752846, 278, 2482, 753.0, 1033.0, 1119.0, 1359.7999999999988, 0.7515725187707942, 3.3974894427636784, 0.0], "isController": false}, {"data": ["simple-11.sql", 7392, 0, 0.0, 331.4362824675328, 102, 2593, 303.0, 456.0, 532.0, 750.0699999999997, 4.214035611793371, 1.0452783646440589, 0.0], "isController": false}, {"data": ["simple-15.sql", 7389, 0, 0.0, 158.22655298416615, 78, 2275, 138.0, 248.0, 289.0, 379.10000000000036, 4.213274122833277, 18.231462537377197, 0.0], "isController": false}, {"data": ["simple-10.sql", 7396, 0, 0.0, 725.6421038399116, 241, 10225, 519.0, 1289.3000000000002, 1852.0499999999975, 3893.359999999997, 4.210924262575837, 3143.442625320687, 0.0], "isController": false}, {"data": ["complex-08.sql", 1316, 0, 0.0, 746.7256838905776, 225, 2230, 726.0, 1018.0, 1092.1499999999999, 1301.3199999999997, 0.7511334066582612, 2.995731282023768, 0.0], "isController": false}]}, function(index, item){
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
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 153305, 0, "", "", "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
