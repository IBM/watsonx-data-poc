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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9708271496067509, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.98432, 500, 1500, "intermediate-01.sql"], "isController": false}, {"data": [0.9988802627650045, 500, 1500, "simple-06.sql"], "isController": false}, {"data": [0.9969590268886044, 500, 1500, "intermediate-06.sql"], "isController": false}, {"data": [0.6750255885363358, 500, 1500, "complex-04.sql"], "isController": false}, {"data": [0.9961945978212207, 500, 1500, "simple-01.sql"], "isController": false}, {"data": [0.9981318188611568, 500, 1500, "simple-14.sql"], "isController": false}, {"data": [0.9713141025641026, 500, 1500, "intermediate-10.sql"], "isController": false}, {"data": [0.9989547558608332, 500, 1500, "simple-07.sql"], "isController": false}, {"data": [0.9974385245901639, 500, 1500, "complex-05.sql"], "isController": false}, {"data": [0.9966389244558259, 500, 1500, "intermediate-05.sql"], "isController": false}, {"data": [0.9994021820355702, 500, 1500, "simple-13.sql"], "isController": false}, {"data": [0.49027635619242577, 500, 1500, "complex-02.sql"], "isController": false}, {"data": [0.9963141025641026, 500, 1500, "intermediate-09.sql"], "isController": false}, {"data": [0.9986567164179104, 500, 1500, "simple-04.sql"], "isController": false}, {"data": [0.8934426229508197, 500, 1500, "complex-06.sql"], "isController": false}, {"data": [0.9765566671644019, 500, 1500, "simple-08.sql"], "isController": false}, {"data": [0.9933492751457181, 500, 1500, "simple-12.sql"], "isController": false}, {"data": [0.9979193341869398, 500, 1500, "intermediate-03.sql"], "isController": false}, {"data": [0.977482088024565, 500, 1500, "complex-01.sql"], "isController": false}, {"data": [0.7143085787451985, 500, 1500, "intermediate-04.sql"], "isController": false}, {"data": [0.9983584539620952, 500, 1500, "simple-03.sql"], "isController": false}, {"data": [0.9830769230769231, 500, 1500, "complex-07.sql"], "isController": false}, {"data": [0.9676385773790451, 500, 1500, "intermediate-08.sql"], "isController": false}, {"data": [0.992010155316607, 500, 1500, "simple-09.sql"], "isController": false}, {"data": [0.9988057919092402, 500, 1500, "simple-05.sql"], "isController": false}, {"data": [0.813640730067243, 500, 1500, "intermediate-07.sql"], "isController": false}, {"data": [0.9987315326070736, 500, 1500, "simple-02.sql"], "isController": false}, {"data": [0.998719590268886, 500, 1500, "intermediate-02.sql"], "isController": false}, {"data": [0.9012282497441146, 500, 1500, "complex-03.sql"], "isController": false}, {"data": [0.9968614556867433, 500, 1500, "simple-11.sql"], "isController": false}, {"data": [0.9966372739500822, 500, 1500, "simple-15.sql"], "isController": false}, {"data": [0.8757281553398059, 500, 1500, "simple-10.sql"], "isController": false}, {"data": [0.9666666666666667, 500, 1500, "complex-08.sql"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 139479, 0, 0.0, 219.09931961083882, 73, 43513, 146.0, 380.0, 506.0, 1101.950000000008, 77.43872952492097, 4399.632050037011, 0.0], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["intermediate-01.sql", 3125, 0, 0.0, 340.84383999999983, 111, 43513, 259.0, 405.0, 452.0, 567.7399999999998, 1.736117862680577, 1.6513464826668771, 0.0], "isController": false}, {"data": ["simple-06.sql", 6698, 0, 0.0, 127.71916990146329, 76, 2427, 120.0, 166.0, 183.0, 227.01000000000022, 3.8126572479194887, 0.04467957712405651, 0.0], "isController": false}, {"data": ["intermediate-06.sql", 3124, 0, 0.0, 183.22567221510883, 86, 2100, 164.0, 276.0, 320.0, 413.75, 1.779957586413978, 0.020858877965788804, 0.0], "isController": false}, {"data": ["complex-04.sql", 977, 0, 0.0, 716.9457523029675, 216, 11805, 533.0, 1069.6000000000006, 1469.999999999999, 5042.520000000002, 0.5562970318677914, 290.1920207185413, 0.0], "isController": false}, {"data": ["simple-01.sql", 6701, 0, 0.0, 179.89031487837636, 74, 42705, 111.0, 152.0, 167.0, 208.0, 3.7232742143396895, 4.0406326095215475, 0.0], "isController": false}, {"data": ["simple-14.sql", 6691, 0, 0.0, 111.20266028994175, 75, 2028, 100.0, 140.0, 159.0, 213.0, 3.8141090683564047, 0.9796002782985688, 0.0], "isController": false}, {"data": ["intermediate-10.sql", 3120, 0, 0.0, 324.9942307692307, 126, 2244, 308.0, 455.0, 508.9499999999998, 609.5799999999999, 1.778988097885399, 6.165653085346954, 0.0], "isController": false}, {"data": ["simple-07.sql", 6697, 0, 0.0, 114.22084515454671, 73, 1874, 107.0, 148.0, 163.0, 203.0, 3.81312336197114, 1.2697998695626551, 0.0], "isController": false}, {"data": ["complex-05.sql", 976, 0, 0.0, 181.32991803278685, 94, 2011, 169.0, 248.30000000000007, 273.15, 419.23, 0.5562039536071194, 1.0234118464461075, 0.0], "isController": false}, {"data": ["intermediate-05.sql", 3124, 0, 0.0, 175.85659411011525, 91, 1956, 164.0, 234.0, 269.75, 393.5, 1.7799109360827374, 3.6574873584090537, 0.0], "isController": false}, {"data": ["simple-13.sql", 6691, 0, 0.0, 117.62875504408915, 75, 2328, 111.0, 151.80000000000018, 167.0, 208.07999999999993, 3.8140525405545906, 0.379915389781805, 0.0], "isController": false}, {"data": ["complex-02.sql", 977, 0, 0.0, 905.7963152507672, 442, 5597, 851.0, 1127.2, 1274.1999999999998, 3176.7600000000043, 0.5563901724524791, 236.59055515669615, 0.0], "isController": false}, {"data": ["intermediate-09.sql", 3120, 0, 0.0, 195.1820512820511, 97, 2120, 181.0, 256.0, 287.9499999999998, 405.9499999999998, 1.7790114284378398, 6.987484340993157, 0.0], "isController": false}, {"data": ["simple-04.sql", 6700, 0, 0.0, 155.37417910447707, 80, 2029, 143.0, 216.0, 243.0, 328.0, 3.8132378544105787, 0.45058767615593753, 0.0], "isController": false}, {"data": ["complex-06.sql", 976, 0, 0.0, 452.2141393442623, 136, 7864, 301.5, 770.3000000000001, 1133.1999999999994, 3354.390000000009, 0.5559983160542804, 330.922161802346, 0.0], "isController": false}, {"data": ["simple-08.sql", 6697, 0, 0.0, 260.2501119904438, 88, 4265, 212.0, 400.0, 475.0, 1253.0, 3.812708725449674, 364.59027187112514, 0.0], "isController": false}, {"data": ["simple-12.sql", 6691, 0, 0.0, 239.16245703183375, 97, 2235, 219.0, 347.0, 391.0, 505.0799999999999, 3.8139525339328344, 1.2663514272823864, 0.0], "isController": false}, {"data": ["intermediate-03.sql", 3124, 0, 0.0, 151.76824583866795, 81, 2820, 138.0, 209.0, 235.0, 335.25, 1.779213501063883, 0.47086607303546124, 0.0], "isController": false}, {"data": ["complex-01.sql", 977, 0, 0.0, 403.96519959058276, 147, 42757, 310.0, 436.0, 480.0999999999999, 595.1800000000005, 0.5435248224504124, 2.167729858288559, 0.0], "isController": false}, {"data": ["intermediate-04.sql", 3124, 0, 0.0, 530.7557618437893, 209, 2730, 524.0, 703.5, 754.75, 862.5, 1.779121294043076, 1.2961176614806003, 0.0], "isController": false}, {"data": ["simple-03.sql", 6701, 0, 0.0, 117.14729144903751, 74, 1961, 110.0, 150.0, 165.0, 209.0, 3.81343585961366, 3.9288816717699326, 0.0], "isController": false}, {"data": ["complex-07.sql", 975, 0, 0.0, 268.1928205128206, 104, 2385, 231.0, 373.4, 428.19999999999993, 1222.0000000000007, 0.5566625368967348, 26.490939536635533, 0.0], "isController": false}, {"data": ["intermediate-08.sql", 3121, 0, 0.0, 332.552707465556, 123, 2371, 317.0, 466.8000000000002, 515.8999999999996, 630.3399999999992, 1.778843221843579, 6.152990909931599, 0.0], "isController": false}, {"data": ["simple-09.sql", 6696, 0, 0.0, 196.46789127837485, 86, 2168, 176.0, 267.0, 318.0, 608.239999999998, 3.8127949563601247, 174.3571771694097, 0.0], "isController": false}, {"data": ["simple-05.sql", 6699, 0, 0.0, 117.09075981489741, 74, 1898, 109.0, 149.0, 165.0, 210.0, 3.8131353090979054, 0.7410292251078937, 0.0], "isController": false}, {"data": ["intermediate-07.sql", 3123, 0, 0.0, 525.5638808837657, 177, 3812, 452.0, 697.5999999999999, 964.5999999999995, 2002.919999999996, 1.7794739981983039, 177.5338111366554, 0.0], "isController": false}, {"data": ["simple-02.sql", 6701, 0, 0.0, 114.12266825846922, 73, 2353, 107.0, 145.0, 160.89999999999964, 202.97999999999956, 3.813574755398533, 0.5325597558808498, 0.0], "isController": false}, {"data": ["intermediate-02.sql", 3124, 0, 0.0, 117.45358514724725, 75, 1857, 109.0, 151.0, 171.0, 225.75, 1.7792043812623124, 0.5195137792943667, 0.0], "isController": false}, {"data": ["complex-03.sql", 977, 0, 0.0, 427.5066530194469, 191, 2261, 420.0, 542.0, 583.0999999999999, 689.9600000000005, 0.5565683035205652, 2.5159713642545856, 0.0], "isController": false}, {"data": ["simple-11.sql", 6691, 0, 0.0, 176.56942161111976, 87, 2000, 164.0, 229.0, 257.0, 359.0, 3.8139590559439562, 0.9460406252048486, 0.0], "isController": false}, {"data": ["simple-15.sql", 6691, 0, 0.0, 117.87326259154062, 77, 2252, 103.0, 150.0, 174.0, 266.0, 3.8141764690792903, 16.50450774852572, 0.0], "isController": false}, {"data": ["simple-10.sql", 6695, 0, 0.0, 539.6023898431628, 124, 15780, 284.0, 883.4000000000005, 1517.1999999999998, 5823.679999999998, 3.810357456491068, 2844.420678113971, 0.0], "isController": false}, {"data": ["complex-08.sql", 975, 0, 0.0, 328.62461538461514, 133, 1988, 313.0, 464.0, 526.1999999999999, 632.48, 0.5566291679393017, 2.2199936736954182, 0.0], "isController": false}]}, function(index, item){
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
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 139479, 0, "", "", "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
