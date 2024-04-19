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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9936799203651184, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.996127562642369, 500, 1500, "intermediate-01.sql"], "isController": false}, {"data": [0.9995444191343964, 500, 1500, "intermediate-06.sql"], "isController": false}, {"data": [0.9982507288629737, 500, 1500, "simple-06.sql"], "isController": false}, {"data": [0.9555796316359697, 500, 1500, "complex-04.sql"], "isController": false}, {"data": [0.9961127308066083, 500, 1500, "simple-01.sql"], "isController": false}, {"data": [0.9984438825131298, 500, 1500, "simple-14.sql"], "isController": false}, {"data": [0.9979489516864175, 500, 1500, "intermediate-10.sql"], "isController": false}, {"data": [0.9992225461613217, 500, 1500, "simple-07.sql"], "isController": false}, {"data": [0.9934994582881906, 500, 1500, "complex-05.sql"], "isController": false}, {"data": [0.9993166287015945, 500, 1500, "intermediate-05.sql"], "isController": false}, {"data": [0.9976658237696946, 500, 1500, "simple-13.sql"], "isController": false}, {"data": [0.8982683982683982, 500, 1500, "complex-02.sql"], "isController": false}, {"data": [0.9965815861440291, 500, 1500, "intermediate-09.sql"], "isController": false}, {"data": [0.9992225461613217, 500, 1500, "simple-04.sql"], "isController": false}, {"data": [0.9696641386782232, 500, 1500, "complex-06.sql"], "isController": false}, {"data": [0.9909620991253645, 500, 1500, "simple-08.sql"], "isController": false}, {"data": [0.996498735654542, 500, 1500, "simple-12.sql"], "isController": false}, {"data": [0.9990888382687927, 500, 1500, "intermediate-03.sql"], "isController": false}, {"data": [0.9972943722943723, 500, 1500, "complex-01.sql"], "isController": false}, {"data": [0.996127562642369, 500, 1500, "intermediate-04.sql"], "isController": false}, {"data": [0.998639455782313, 500, 1500, "simple-03.sql"], "isController": false}, {"data": [0.9934994582881906, 500, 1500, "complex-07.sql"], "isController": false}, {"data": [0.9968094804010939, 500, 1500, "intermediate-08.sql"], "isController": false}, {"data": [0.995334370139969, 500, 1500, "simple-09.sql"], "isController": false}, {"data": [0.9972789115646259, 500, 1500, "simple-05.sql"], "isController": false}, {"data": [0.9783599088838268, 500, 1500, "intermediate-07.sql"], "isController": false}, {"data": [0.9990888382687927, 500, 1500, "intermediate-02.sql"], "isController": false}, {"data": [0.9984450923226433, 500, 1500, "simple-02.sql"], "isController": false}, {"data": [0.9972914409534128, 500, 1500, "complex-03.sql"], "isController": false}, {"data": [0.9960124489398949, 500, 1500, "simple-11.sql"], "isController": false}, {"data": [0.9978603384555534, 500, 1500, "simple-15.sql"], "isController": false}, {"data": [0.9627721617418351, 500, 1500, "simple-10.sql"], "isController": false}, {"data": [0.9940411700975081, 500, 1500, "complex-08.sql"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 106486, 0, 0.0, 135.11287868828063, 73, 42985, 100.0, 234.0, 328.0, 1097.900000000016, 58.95754885953358, 3511.5624694619264, 0.0], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["intermediate-01.sql", 2195, 0, 0.0, 190.53621867881574, 109, 42592, 139.0, 195.0, 213.0, 280.0, 1.2200381963666762, 1.1604660188097096, 0.0], "isController": false}, {"data": ["intermediate-06.sql", 2195, 0, 0.0, 108.81457858769936, 85, 1803, 102.0, 132.0, 149.0, 180.0, 1.2496619650151584, 0.014644476152521386, 0.0], "isController": false}, {"data": ["simple-06.sql", 5145, 0, 0.0, 94.00058309037891, 76, 1776, 87.0, 108.0, 117.0, 144.0, 2.930017847766637, 0.03433614665351528, 0.0], "isController": false}, {"data": ["complex-04.sql", 923, 0, 0.0, 321.02708559046573, 168, 7681, 253.0, 430.6, 582.5999999999997, 1763.9599999999994, 0.526631702429695, 274.7171189991872, 0.0], "isController": false}, {"data": ["simple-01.sql", 5145, 0, 0.0, 131.14324586977622, 73, 42985, 83.0, 101.0, 109.0, 134.0, 2.860106599424977, 3.103560492227403, 0.0], "isController": false}, {"data": ["simple-14.sql", 5141, 0, 0.0, 89.62692083252271, 75, 1871, 84.0, 99.0, 107.0, 130.57999999999993, 2.9290309642044043, 0.752280413657967, 0.0], "isController": false}, {"data": ["intermediate-10.sql", 2194, 0, 0.0, 178.87055606198737, 125, 1866, 166.5, 228.0, 253.25, 306.0500000000002, 1.2495180471069443, 4.33060502849858, 0.0], "isController": false}, {"data": ["simple-07.sql", 5145, 0, 0.0, 86.26861030126342, 73, 1762, 82.0, 98.0, 104.0, 126.0, 2.930016179156395, 0.9757182784104791, 0.0], "isController": false}, {"data": ["complex-05.sql", 923, 0, 0.0, 125.08884073672799, 90, 1876, 109.0, 139.0, 149.0, 220.79999999999995, 0.5267332834943589, 0.9690467511456307, 0.0], "isController": false}, {"data": ["intermediate-05.sql", 2195, 0, 0.0, 115.2113895216402, 89, 1794, 110.0, 138.4000000000001, 154.19999999999982, 187.0, 1.249652004652463, 2.568116931347136, 0.0], "isController": false}, {"data": ["simple-13.sql", 5141, 0, 0.0, 91.0459054658628, 75, 1818, 84.0, 100.0, 108.0, 130.0, 2.9290276266387116, 0.2917586112472154, 0.0], "isController": false}, {"data": ["complex-02.sql", 924, 0, 0.0, 457.0746753246754, 293, 6811, 415.5, 564.0, 626.5, 1502.25, 0.5256433157398317, 223.51452364321165, 0.0], "isController": false}, {"data": ["intermediate-09.sql", 2194, 0, 0.0, 129.92114858705568, 94, 1907, 119.0, 155.0, 170.25, 264.0, 1.2495272982417773, 4.907811321805106, 0.0], "isController": false}, {"data": ["simple-04.sql", 5145, 0, 0.0, 103.77473275024303, 80, 1823, 97.0, 128.0, 142.0, 173.0, 2.929964453181503, 0.34621650276851745, 0.0], "isController": false}, {"data": ["complex-06.sql", 923, 0, 0.0, 242.1289274106176, 110, 6072, 177.0, 365.6, 493.1999999999996, 2039.3999999999974, 0.5260107470321425, 313.073994134453, 0.0], "isController": false}, {"data": ["simple-08.sql", 5145, 0, 0.0, 142.2064139941692, 86, 3213, 110.0, 179.0, 270.39999999999964, 682.6999999999998, 2.929237145801427, 280.10830206726143, 0.0], "isController": false}, {"data": ["simple-12.sql", 5141, 0, 0.0, 137.83894184010944, 95, 1904, 125.0, 171.0, 191.0, 241.15999999999985, 2.9289809015176465, 0.972513189957031, 0.0], "isController": false}, {"data": ["intermediate-03.sql", 2195, 0, 0.0, 101.87471526195888, 81, 1794, 95.0, 123.0, 137.0, 165.0, 1.2495659252765268, 0.3306956696776746, 0.0], "isController": false}, {"data": ["complex-01.sql", 924, 0, 0.0, 223.04761904761898, 129, 42655, 165.5, 223.0, 245.0, 330.25, 0.5135036453757164, 2.0479969606586184, 0.0], "isController": false}, {"data": ["intermediate-04.sql", 2195, 0, 0.0, 315.72847380410093, 229, 2041, 300.0, 386.0, 417.1999999999998, 488.03999999999996, 1.2494499858547463, 0.9102438373512116, 0.0], "isController": false}, {"data": ["simple-03.sql", 5145, 0, 0.0, 88.86763848396468, 73, 1799, 83.0, 100.0, 109.0, 127.53999999999996, 2.9299544419134396, 3.0186542345885536, 0.0], "isController": false}, {"data": ["complex-07.sql", 923, 0, 0.0, 142.8223185265438, 97, 2065, 122.0, 174.0, 199.0, 458.9999999999998, 0.5260266352988379, 25.033011684323892, 0.0], "isController": false}, {"data": ["intermediate-08.sql", 2194, 0, 0.0, 182.73154056517805, 123, 2359, 168.0, 229.5, 252.0, 301.0, 1.2494426198886892, 4.32180249965404, 0.0], "isController": false}, {"data": ["simple-09.sql", 5144, 0, 0.0, 122.22006220839792, 84, 2038, 106.0, 144.0, 166.0, 398.2000000000007, 2.929743675905649, 133.9756905387049, 0.0], "isController": false}, {"data": ["simple-05.sql", 5145, 0, 0.0, 91.36987366375106, 74, 1821, 83.0, 100.0, 108.0, 132.53999999999996, 2.930016179156395, 0.5694074410665259, 0.0], "isController": false}, {"data": ["intermediate-07.sql", 2195, 0, 0.0, 226.94123006833723, 94, 2623, 185.0, 318.0, 427.1999999999998, 1132.8399999999983, 1.2493262460392942, 124.64225385533827, 0.0], "isController": false}, {"data": ["intermediate-02.sql", 2195, 0, 0.0, 87.97676537585421, 74, 1780, 82.0, 97.40000000000009, 105.0, 131.0, 1.2495694820406409, 0.3648645264942887, 0.0], "isController": false}, {"data": ["simple-02.sql", 5145, 0, 0.0, 87.84781341107885, 73, 1997, 82.0, 98.0, 106.0, 126.0, 2.929934419582554, 0.4091607636721731, 0.0], "isController": false}, {"data": ["complex-03.sql", 923, 0, 0.0, 252.00216684723745, 169, 1878, 238.0, 307.6, 332.79999999999995, 375.76, 0.5274710705262539, 2.384437095181669, 0.0], "isController": false}, {"data": ["simple-11.sql", 5141, 0, 0.0, 119.2534526356741, 86, 2038, 108.0, 138.0, 151.0, 193.57999999999993, 2.928994251400117, 0.7265278709527635, 0.0], "isController": false}, {"data": ["simple-15.sql", 5141, 0, 0.0, 93.69305582571523, 76, 1890, 85.0, 102.0, 113.0, 186.73999999999978, 2.929034301777703, 12.674366202321293, 0.0], "isController": false}, {"data": ["simple-10.sql", 5144, 0, 0.0, 268.9498444790049, 114, 13036, 157.0, 333.0, 561.75, 2417.1000000000004, 2.919257337301344, 2179.217049783723, 0.0], "isController": false}, {"data": ["complex-08.sql", 923, 0, 0.0, 186.11050920910066, 129, 2064, 167.0, 225.0, 244.5999999999999, 320.52, 0.5260212391761014, 2.0979206453078105, 0.0], "isController": false}]}, function(index, item){
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
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 106486, 0, "", "", "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
