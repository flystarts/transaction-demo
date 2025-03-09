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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 1243.0, "series": [{"data": [[0.0, 0.0], [0.1, 21.0], [0.2, 21.0], [0.3, 21.0], [0.4, 21.0], [0.5, 21.0], [0.6, 21.0], [0.7, 22.0], [0.8, 22.0], [0.9, 22.0], [1.0, 22.0], [1.1, 22.0], [1.2, 22.0], [1.3, 22.0], [1.4, 23.0], [1.5, 23.0], [1.6, 23.0], [1.7, 23.0], [1.8, 23.0], [1.9, 23.0], [2.0, 23.0], [2.1, 23.0], [2.2, 24.0], [2.3, 24.0], [2.4, 24.0], [2.5, 24.0], [2.6, 24.0], [2.7, 24.0], [2.8, 24.0], [2.9, 24.0], [3.0, 24.0], [3.1, 24.0], [3.2, 24.0], [3.3, 24.0], [3.4, 24.0], [3.5, 25.0], [3.6, 25.0], [3.7, 25.0], [3.8, 25.0], [3.9, 25.0], [4.0, 25.0], [4.1, 25.0], [4.2, 25.0], [4.3, 25.0], [4.4, 26.0], [4.5, 26.0], [4.6, 26.0], [4.7, 26.0], [4.8, 26.0], [4.9, 26.0], [5.0, 26.0], [5.1, 26.0], [5.2, 26.0], [5.3, 27.0], [5.4, 27.0], [5.5, 27.0], [5.6, 27.0], [5.7, 27.0], [5.8, 28.0], [5.9, 28.0], [6.0, 28.0], [6.1, 28.0], [6.2, 29.0], [6.3, 29.0], [6.4, 30.0], [6.5, 30.0], [6.6, 31.0], [6.7, 31.0], [6.8, 32.0], [6.9, 32.0], [7.0, 33.0], [7.1, 33.0], [7.2, 34.0], [7.3, 34.0], [7.4, 35.0], [7.5, 35.0], [7.6, 35.0], [7.7, 36.0], [7.8, 36.0], [7.9, 36.0], [8.0, 37.0], [8.1, 37.0], [8.2, 37.0], [8.3, 37.0], [8.4, 37.0], [8.5, 37.0], [8.6, 38.0], [8.7, 38.0], [8.8, 38.0], [8.9, 38.0], [9.0, 38.0], [9.1, 38.0], [9.2, 38.0], [9.3, 38.0], [9.4, 38.0], [9.5, 38.0], [9.6, 39.0], [9.7, 39.0], [9.8, 39.0], [9.9, 39.0], [10.0, 39.0], [10.1, 39.0], [10.2, 39.0], [10.3, 39.0], [10.4, 39.0], [10.5, 39.0], [10.6, 39.0], [10.7, 39.0], [10.8, 39.0], [10.9, 39.0], [11.0, 39.0], [11.1, 39.0], [11.2, 39.0], [11.3, 39.0], [11.4, 40.0], [11.5, 40.0], [11.6, 40.0], [11.7, 40.0], [11.8, 40.0], [11.9, 40.0], [12.0, 40.0], [12.1, 40.0], [12.2, 40.0], [12.3, 40.0], [12.4, 40.0], [12.5, 40.0], [12.6, 40.0], [12.7, 40.0], [12.8, 40.0], [12.9, 40.0], [13.0, 40.0], [13.1, 40.0], [13.2, 40.0], [13.3, 40.0], [13.4, 40.0], [13.5, 40.0], [13.6, 40.0], [13.7, 40.0], [13.8, 40.0], [13.9, 40.0], [14.0, 41.0], [14.1, 41.0], [14.2, 41.0], [14.3, 41.0], [14.4, 41.0], [14.5, 41.0], [14.6, 41.0], [14.7, 41.0], [14.8, 41.0], [14.9, 41.0], [15.0, 41.0], [15.1, 41.0], [15.2, 41.0], [15.3, 41.0], [15.4, 41.0], [15.5, 41.0], [15.6, 41.0], [15.7, 41.0], [15.8, 41.0], [15.9, 41.0], [16.0, 41.0], [16.1, 41.0], [16.2, 41.0], [16.3, 41.0], [16.4, 41.0], [16.5, 41.0], [16.6, 41.0], [16.7, 41.0], [16.8, 41.0], [16.9, 41.0], [17.0, 41.0], [17.1, 41.0], [17.2, 41.0], [17.3, 41.0], [17.4, 41.0], [17.5, 41.0], [17.6, 41.0], [17.7, 41.0], [17.8, 42.0], [17.9, 42.0], [18.0, 42.0], [18.1, 42.0], [18.2, 42.0], [18.3, 42.0], [18.4, 42.0], [18.5, 42.0], [18.6, 42.0], [18.7, 42.0], [18.8, 42.0], [18.9, 42.0], [19.0, 42.0], [19.1, 42.0], [19.2, 42.0], [19.3, 42.0], [19.4, 42.0], [19.5, 42.0], [19.6, 42.0], [19.7, 42.0], [19.8, 42.0], [19.9, 42.0], [20.0, 42.0], [20.1, 42.0], [20.2, 42.0], [20.3, 42.0], [20.4, 42.0], [20.5, 42.0], [20.6, 42.0], [20.7, 42.0], [20.8, 42.0], [20.9, 42.0], [21.0, 42.0], [21.1, 42.0], [21.2, 42.0], [21.3, 42.0], [21.4, 42.0], [21.5, 42.0], [21.6, 42.0], [21.7, 42.0], [21.8, 42.0], [21.9, 42.0], [22.0, 42.0], [22.1, 42.0], [22.2, 42.0], [22.3, 42.0], [22.4, 42.0], [22.5, 43.0], [22.6, 43.0], [22.7, 43.0], [22.8, 43.0], [22.9, 43.0], [23.0, 43.0], [23.1, 43.0], [23.2, 43.0], [23.3, 43.0], [23.4, 43.0], [23.5, 43.0], [23.6, 43.0], [23.7, 43.0], [23.8, 43.0], [23.9, 43.0], [24.0, 43.0], [24.1, 43.0], [24.2, 43.0], [24.3, 43.0], [24.4, 43.0], [24.5, 43.0], [24.6, 43.0], [24.7, 43.0], [24.8, 43.0], [24.9, 43.0], [25.0, 43.0], [25.1, 43.0], [25.2, 43.0], [25.3, 43.0], [25.4, 43.0], [25.5, 43.0], [25.6, 43.0], [25.7, 43.0], [25.8, 43.0], [25.9, 43.0], [26.0, 43.0], [26.1, 43.0], [26.2, 43.0], [26.3, 43.0], [26.4, 43.0], [26.5, 43.0], [26.6, 43.0], [26.7, 43.0], [26.8, 43.0], [26.9, 43.0], [27.0, 43.0], [27.1, 43.0], [27.2, 43.0], [27.3, 43.0], [27.4, 43.0], [27.5, 43.0], [27.6, 43.0], [27.7, 43.0], [27.8, 43.0], [27.9, 43.0], [28.0, 43.0], [28.1, 44.0], [28.2, 44.0], [28.3, 44.0], [28.4, 44.0], [28.5, 44.0], [28.6, 44.0], [28.7, 44.0], [28.8, 44.0], [28.9, 44.0], [29.0, 44.0], [29.1, 44.0], [29.2, 44.0], [29.3, 44.0], [29.4, 44.0], [29.5, 44.0], [29.6, 44.0], [29.7, 44.0], [29.8, 44.0], [29.9, 44.0], [30.0, 44.0], [30.1, 44.0], [30.2, 44.0], [30.3, 44.0], [30.4, 44.0], [30.5, 44.0], [30.6, 44.0], [30.7, 44.0], [30.8, 44.0], [30.9, 44.0], [31.0, 44.0], [31.1, 44.0], [31.2, 44.0], [31.3, 44.0], [31.4, 44.0], [31.5, 44.0], [31.6, 44.0], [31.7, 44.0], [31.8, 44.0], [31.9, 44.0], [32.0, 44.0], [32.1, 44.0], [32.2, 44.0], [32.3, 44.0], [32.4, 44.0], [32.5, 44.0], [32.6, 44.0], [32.7, 44.0], [32.8, 44.0], [32.9, 44.0], [33.0, 44.0], [33.1, 44.0], [33.2, 44.0], [33.3, 44.0], [33.4, 44.0], [33.5, 44.0], [33.6, 44.0], [33.7, 44.0], [33.8, 44.0], [33.9, 44.0], [34.0, 44.0], [34.1, 44.0], [34.2, 44.0], [34.3, 45.0], [34.4, 45.0], [34.5, 45.0], [34.6, 45.0], [34.7, 45.0], [34.8, 45.0], [34.9, 45.0], [35.0, 45.0], [35.1, 45.0], [35.2, 45.0], [35.3, 45.0], [35.4, 45.0], [35.5, 45.0], [35.6, 45.0], [35.7, 45.0], [35.8, 45.0], [35.9, 45.0], [36.0, 45.0], [36.1, 45.0], [36.2, 45.0], [36.3, 45.0], [36.4, 45.0], [36.5, 45.0], [36.6, 45.0], [36.7, 45.0], [36.8, 45.0], [36.9, 45.0], [37.0, 45.0], [37.1, 45.0], [37.2, 45.0], [37.3, 45.0], [37.4, 45.0], [37.5, 45.0], [37.6, 45.0], [37.7, 45.0], [37.8, 45.0], [37.9, 45.0], [38.0, 45.0], [38.1, 45.0], [38.2, 45.0], [38.3, 45.0], [38.4, 45.0], [38.5, 45.0], [38.6, 45.0], [38.7, 45.0], [38.8, 45.0], [38.9, 45.0], [39.0, 45.0], [39.1, 45.0], [39.2, 45.0], [39.3, 45.0], [39.4, 45.0], [39.5, 45.0], [39.6, 45.0], [39.7, 45.0], [39.8, 45.0], [39.9, 45.0], [40.0, 45.0], [40.1, 45.0], [40.2, 45.0], [40.3, 45.0], [40.4, 45.0], [40.5, 45.0], [40.6, 45.0], [40.7, 46.0], [40.8, 46.0], [40.9, 46.0], [41.0, 46.0], [41.1, 46.0], [41.2, 46.0], [41.3, 46.0], [41.4, 46.0], [41.5, 46.0], [41.6, 46.0], [41.7, 46.0], [41.8, 46.0], [41.9, 46.0], [42.0, 46.0], [42.1, 46.0], [42.2, 46.0], [42.3, 46.0], [42.4, 46.0], [42.5, 46.0], [42.6, 46.0], [42.7, 46.0], [42.8, 46.0], [42.9, 46.0], [43.0, 46.0], [43.1, 46.0], [43.2, 46.0], [43.3, 46.0], [43.4, 46.0], [43.5, 46.0], [43.6, 46.0], [43.7, 46.0], [43.8, 46.0], [43.9, 46.0], [44.0, 46.0], [44.1, 46.0], [44.2, 46.0], [44.3, 46.0], [44.4, 46.0], [44.5, 46.0], [44.6, 46.0], [44.7, 46.0], [44.8, 46.0], [44.9, 46.0], [45.0, 46.0], [45.1, 46.0], [45.2, 46.0], [45.3, 46.0], [45.4, 46.0], [45.5, 46.0], [45.6, 46.0], [45.7, 46.0], [45.8, 46.0], [45.9, 46.0], [46.0, 46.0], [46.1, 46.0], [46.2, 46.0], [46.3, 46.0], [46.4, 46.0], [46.5, 46.0], [46.6, 46.0], [46.7, 46.0], [46.8, 46.0], [46.9, 47.0], [47.0, 47.0], [47.1, 47.0], [47.2, 47.0], [47.3, 47.0], [47.4, 47.0], [47.5, 47.0], [47.6, 47.0], [47.7, 47.0], [47.8, 47.0], [47.9, 47.0], [48.0, 47.0], [48.1, 47.0], [48.2, 47.0], [48.3, 47.0], [48.4, 47.0], [48.5, 47.0], [48.6, 47.0], [48.7, 47.0], [48.8, 47.0], [48.9, 47.0], [49.0, 47.0], [49.1, 47.0], [49.2, 47.0], [49.3, 47.0], [49.4, 47.0], [49.5, 47.0], [49.6, 47.0], [49.7, 47.0], [49.8, 47.0], [49.9, 47.0], [50.0, 47.0], [50.1, 47.0], [50.2, 47.0], [50.3, 47.0], [50.4, 47.0], [50.5, 47.0], [50.6, 47.0], [50.7, 47.0], [50.8, 47.0], [50.9, 47.0], [51.0, 47.0], [51.1, 47.0], [51.2, 47.0], [51.3, 47.0], [51.4, 47.0], [51.5, 47.0], [51.6, 47.0], [51.7, 47.0], [51.8, 47.0], [51.9, 47.0], [52.0, 47.0], [52.1, 47.0], [52.2, 47.0], [52.3, 47.0], [52.4, 47.0], [52.5, 47.0], [52.6, 47.0], [52.7, 47.0], [52.8, 47.0], [52.9, 48.0], [53.0, 48.0], [53.1, 48.0], [53.2, 48.0], [53.3, 48.0], [53.4, 48.0], [53.5, 48.0], [53.6, 48.0], [53.7, 48.0], [53.8, 48.0], [53.9, 48.0], [54.0, 48.0], [54.1, 48.0], [54.2, 48.0], [54.3, 48.0], [54.4, 48.0], [54.5, 48.0], [54.6, 48.0], [54.7, 48.0], [54.8, 48.0], [54.9, 48.0], [55.0, 48.0], [55.1, 48.0], [55.2, 48.0], [55.3, 48.0], [55.4, 48.0], [55.5, 48.0], [55.6, 48.0], [55.7, 48.0], [55.8, 48.0], [55.9, 48.0], [56.0, 48.0], [56.1, 48.0], [56.2, 48.0], [56.3, 48.0], [56.4, 48.0], [56.5, 48.0], [56.6, 48.0], [56.7, 48.0], [56.8, 48.0], [56.9, 48.0], [57.0, 48.0], [57.1, 48.0], [57.2, 48.0], [57.3, 48.0], [57.4, 48.0], [57.5, 48.0], [57.6, 48.0], [57.7, 48.0], [57.8, 48.0], [57.9, 48.0], [58.0, 48.0], [58.1, 48.0], [58.2, 48.0], [58.3, 48.0], [58.4, 49.0], [58.5, 49.0], [58.6, 49.0], [58.7, 49.0], [58.8, 49.0], [58.9, 49.0], [59.0, 49.0], [59.1, 49.0], [59.2, 49.0], [59.3, 49.0], [59.4, 49.0], [59.5, 49.0], [59.6, 49.0], [59.7, 49.0], [59.8, 49.0], [59.9, 49.0], [60.0, 49.0], [60.1, 49.0], [60.2, 49.0], [60.3, 49.0], [60.4, 49.0], [60.5, 49.0], [60.6, 49.0], [60.7, 49.0], [60.8, 49.0], [60.9, 49.0], [61.0, 49.0], [61.1, 49.0], [61.2, 49.0], [61.3, 49.0], [61.4, 49.0], [61.5, 49.0], [61.6, 49.0], [61.7, 49.0], [61.8, 49.0], [61.9, 49.0], [62.0, 49.0], [62.1, 49.0], [62.2, 49.0], [62.3, 49.0], [62.4, 49.0], [62.5, 49.0], [62.6, 49.0], [62.7, 49.0], [62.8, 49.0], [62.9, 49.0], [63.0, 49.0], [63.1, 49.0], [63.2, 49.0], [63.3, 50.0], [63.4, 50.0], [63.5, 50.0], [63.6, 50.0], [63.7, 50.0], [63.8, 50.0], [63.9, 50.0], [64.0, 50.0], [64.1, 50.0], [64.2, 50.0], [64.3, 50.0], [64.4, 50.0], [64.5, 50.0], [64.6, 50.0], [64.7, 50.0], [64.8, 50.0], [64.9, 50.0], [65.0, 50.0], [65.1, 50.0], [65.2, 50.0], [65.3, 50.0], [65.4, 50.0], [65.5, 50.0], [65.6, 50.0], [65.7, 50.0], [65.8, 50.0], [65.9, 50.0], [66.0, 50.0], [66.1, 50.0], [66.2, 50.0], [66.3, 50.0], [66.4, 50.0], [66.5, 50.0], [66.6, 50.0], [66.7, 50.0], [66.8, 50.0], [66.9, 50.0], [67.0, 50.0], [67.1, 50.0], [67.2, 50.0], [67.3, 50.0], [67.4, 50.0], [67.5, 50.0], [67.6, 51.0], [67.7, 51.0], [67.8, 51.0], [67.9, 51.0], [68.0, 51.0], [68.1, 51.0], [68.2, 51.0], [68.3, 51.0], [68.4, 51.0], [68.5, 51.0], [68.6, 51.0], [68.7, 51.0], [68.8, 51.0], [68.9, 51.0], [69.0, 51.0], [69.1, 51.0], [69.2, 51.0], [69.3, 51.0], [69.4, 51.0], [69.5, 51.0], [69.6, 51.0], [69.7, 51.0], [69.8, 51.0], [69.9, 51.0], [70.0, 51.0], [70.1, 51.0], [70.2, 51.0], [70.3, 51.0], [70.4, 51.0], [70.5, 51.0], [70.6, 51.0], [70.7, 51.0], [70.8, 51.0], [70.9, 51.0], [71.0, 51.0], [71.1, 51.0], [71.2, 51.0], [71.3, 51.0], [71.4, 51.0], [71.5, 52.0], [71.6, 52.0], [71.7, 52.0], [71.8, 52.0], [71.9, 52.0], [72.0, 52.0], [72.1, 52.0], [72.2, 52.0], [72.3, 52.0], [72.4, 52.0], [72.5, 52.0], [72.6, 52.0], [72.7, 52.0], [72.8, 52.0], [72.9, 52.0], [73.0, 52.0], [73.1, 52.0], [73.2, 52.0], [73.3, 52.0], [73.4, 52.0], [73.5, 52.0], [73.6, 52.0], [73.7, 52.0], [73.8, 52.0], [73.9, 52.0], [74.0, 52.0], [74.1, 52.0], [74.2, 52.0], [74.3, 52.0], [74.4, 52.0], [74.5, 52.0], [74.6, 52.0], [74.7, 52.0], [74.8, 53.0], [74.9, 53.0], [75.0, 53.0], [75.1, 53.0], [75.2, 53.0], [75.3, 53.0], [75.4, 53.0], [75.5, 53.0], [75.6, 53.0], [75.7, 53.0], [75.8, 53.0], [75.9, 53.0], [76.0, 53.0], [76.1, 53.0], [76.2, 53.0], [76.3, 53.0], [76.4, 53.0], [76.5, 53.0], [76.6, 53.0], [76.7, 53.0], [76.8, 53.0], [76.9, 53.0], [77.0, 53.0], [77.1, 53.0], [77.2, 53.0], [77.3, 53.0], [77.4, 53.0], [77.5, 53.0], [77.6, 53.0], [77.7, 53.0], [77.8, 54.0], [77.9, 54.0], [78.0, 54.0], [78.1, 54.0], [78.2, 54.0], [78.3, 54.0], [78.4, 54.0], [78.5, 54.0], [78.6, 54.0], [78.7, 54.0], [78.8, 54.0], [78.9, 54.0], [79.0, 54.0], [79.1, 54.0], [79.2, 54.0], [79.3, 54.0], [79.4, 54.0], [79.5, 54.0], [79.6, 54.0], [79.7, 54.0], [79.8, 54.0], [79.9, 54.0], [80.0, 54.0], [80.1, 54.0], [80.2, 54.0], [80.3, 54.0], [80.4, 55.0], [80.5, 55.0], [80.6, 55.0], [80.7, 55.0], [80.8, 55.0], [80.9, 55.0], [81.0, 55.0], [81.1, 55.0], [81.2, 55.0], [81.3, 55.0], [81.4, 55.0], [81.5, 55.0], [81.6, 55.0], [81.7, 55.0], [81.8, 55.0], [81.9, 55.0], [82.0, 55.0], [82.1, 55.0], [82.2, 55.0], [82.3, 55.0], [82.4, 55.0], [82.5, 55.0], [82.6, 56.0], [82.7, 56.0], [82.8, 56.0], [82.9, 56.0], [83.0, 56.0], [83.1, 56.0], [83.2, 56.0], [83.3, 56.0], [83.4, 56.0], [83.5, 56.0], [83.6, 56.0], [83.7, 56.0], [83.8, 56.0], [83.9, 56.0], [84.0, 56.0], [84.1, 56.0], [84.2, 56.0], [84.3, 56.0], [84.4, 56.0], [84.5, 57.0], [84.6, 57.0], [84.7, 57.0], [84.8, 57.0], [84.9, 57.0], [85.0, 57.0], [85.1, 57.0], [85.2, 57.0], [85.3, 57.0], [85.4, 57.0], [85.5, 57.0], [85.6, 57.0], [85.7, 57.0], [85.8, 57.0], [85.9, 57.0], [86.0, 57.0], [86.1, 58.0], [86.2, 58.0], [86.3, 58.0], [86.4, 58.0], [86.5, 58.0], [86.6, 58.0], [86.7, 58.0], [86.8, 58.0], [86.9, 58.0], [87.0, 58.0], [87.1, 58.0], [87.2, 58.0], [87.3, 58.0], [87.4, 58.0], [87.5, 59.0], [87.6, 59.0], [87.7, 59.0], [87.8, 59.0], [87.9, 59.0], [88.0, 59.0], [88.1, 59.0], [88.2, 59.0], [88.3, 59.0], [88.4, 59.0], [88.5, 59.0], [88.6, 59.0], [88.7, 60.0], [88.8, 60.0], [88.9, 60.0], [89.0, 60.0], [89.1, 60.0], [89.2, 60.0], [89.3, 60.0], [89.4, 60.0], [89.5, 60.0], [89.6, 60.0], [89.7, 61.0], [89.8, 61.0], [89.9, 61.0], [90.0, 61.0], [90.1, 61.0], [90.2, 61.0], [90.3, 61.0], [90.4, 61.0], [90.5, 61.0], [90.6, 62.0], [90.7, 62.0], [90.8, 62.0], [90.9, 62.0], [91.0, 62.0], [91.1, 62.0], [91.2, 62.0], [91.3, 62.0], [91.4, 63.0], [91.5, 63.0], [91.6, 63.0], [91.7, 63.0], [91.8, 63.0], [91.9, 63.0], [92.0, 63.0], [92.1, 64.0], [92.2, 64.0], [92.3, 64.0], [92.4, 64.0], [92.5, 64.0], [92.6, 64.0], [92.7, 65.0], [92.8, 65.0], [92.9, 65.0], [93.0, 65.0], [93.1, 65.0], [93.2, 65.0], [93.3, 66.0], [93.4, 66.0], [93.5, 66.0], [93.6, 66.0], [93.7, 66.0], [93.8, 67.0], [93.9, 67.0], [94.0, 67.0], [94.1, 67.0], [94.2, 67.0], [94.3, 68.0], [94.4, 68.0], [94.5, 68.0], [94.6, 68.0], [94.7, 69.0], [94.8, 69.0], [94.9, 69.0], [95.0, 69.0], [95.1, 70.0], [95.2, 70.0], [95.3, 70.0], [95.4, 71.0], [95.5, 71.0], [95.6, 71.0], [95.7, 71.0], [95.8, 72.0], [95.9, 72.0], [96.0, 72.0], [96.1, 73.0], [96.2, 73.0], [96.3, 73.0], [96.4, 74.0], [96.5, 74.0], [96.6, 75.0], [96.7, 75.0], [96.8, 75.0], [96.9, 76.0], [97.0, 76.0], [97.1, 77.0], [97.2, 77.0], [97.3, 78.0], [97.4, 78.0], [97.5, 79.0], [97.6, 79.0], [97.7, 80.0], [97.8, 80.0], [97.9, 81.0], [98.0, 82.0], [98.1, 82.0], [98.2, 83.0], [98.3, 84.0], [98.4, 85.0], [98.5, 86.0], [98.6, 87.0], [98.7, 88.0], [98.8, 89.0], [98.9, 91.0], [99.0, 92.0], [99.1, 94.0], [99.2, 96.0], [99.3, 99.0], [99.4, 103.0], [99.5, 108.0], [99.6, 115.0], [99.7, 128.0], [99.8, 242.0], [99.9, 251.0], [100.0, 1243.0]], "isOverall": false, "label": "HTTP请求", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 4785597.0, "series": [{"data": [[0.0, 4785597.0], [300.0, 107.0], [600.0, 29.0], [1200.0, 2.0], [100.0, 22872.0], [200.0, 10636.0], [400.0, 30.0], [500.0, 9.0], [1000.0, 2.0]], "isOverall": false, "label": "HTTP请求", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 42.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4819116.0, "series": [{"data": [[0.0, 4819116.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 42.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 126.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 99.56208607334302, "minX": 1.74125436E12, "maxY": 100.0, "series": [{"data": [[1.7412546E12, 100.0], [1.74125622E12, 100.0], [1.74125652E12, 100.0], [1.7412549E12, 100.0], [1.7412552E12, 100.0], [1.74125502E12, 100.0], [1.74125532E12, 100.0], [1.74125562E12, 100.0], [1.74125592E12, 100.0], [1.7412567E12, 99.95694428650155], [1.74125478E12, 100.0], [1.74125508E12, 100.0], [1.74125538E12, 100.0], [1.74125568E12, 100.0], [1.7412555E12, 100.0], [1.7412558E12, 100.0], [1.74125448E12, 100.0], [1.7412561E12, 100.0], [1.7412564E12, 100.0], [1.74125526E12, 100.0], [1.74125556E12, 100.0], [1.74125586E12, 100.0], [1.74125616E12, 100.0], [1.74125436E12, 99.56208607334302], [1.74125598E12, 100.0], [1.74125628E12, 100.0], [1.74125658E12, 100.0], [1.74125466E12, 100.0], [1.74125496E12, 100.0], [1.74125574E12, 100.0], [1.74125604E12, 100.0], [1.74125472E12, 100.0], [1.74125634E12, 100.0], [1.74125442E12, 100.0], [1.74125664E12, 100.0], [1.74125646E12, 100.0], [1.74125454E12, 100.0], [1.74125484E12, 100.0], [1.74125514E12, 100.0], [1.74125544E12, 100.0]], "isOverall": false, "label": "线程组", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7412567E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 4.0, "minX": 1.0, "maxY": 144.25, "series": [{"data": [[2.0, 44.0], [3.0, 47.0], [4.0, 25.0], [6.0, 4.0], [8.0, 59.75], [9.0, 36.5], [10.0, 45.0], [11.0, 45.0], [12.0, 42.333333333333336], [13.0, 52.0], [14.0, 43.0], [15.0, 37.0], [16.0, 30.0], [17.0, 46.75], [18.0, 26.18181818181818], [19.0, 49.0], [20.0, 25.333333333333332], [21.0, 34.57142857142857], [22.0, 33.800000000000004], [23.0, 31.142857142857142], [24.0, 29.363636363636363], [25.0, 27.25], [26.0, 33.85714285714286], [27.0, 30.875], [28.0, 30.0], [29.0, 24.8], [30.0, 31.166666666666668], [31.0, 31.499999999999996], [32.0, 28.0], [33.0, 28.399999999999995], [34.0, 29.333333333333332], [35.0, 33.0], [36.0, 29.449999999999996], [37.0, 30.666666666666668], [38.0, 30.91304347826087], [39.0, 25.0], [40.0, 31.066666666666666], [41.0, 26.375], [42.0, 32.83333333333333], [43.0, 33.0], [44.0, 31.11111111111111], [45.0, 33.53333333333334], [46.0, 30.857142857142854], [47.0, 38.1], [48.0, 40.875], [49.0, 40.84615384615384], [50.0, 40.727272727272734], [51.0, 35.090909090909086], [52.0, 34.6875], [53.0, 40.846153846153854], [54.0, 42.63636363636364], [55.0, 33.13333333333334], [56.0, 39.92857142857143], [57.0, 40.0], [58.0, 35.8], [59.0, 53.12499999999999], [60.0, 41.300000000000004], [61.0, 39.15789473684211], [62.0, 42.416666666666664], [63.0, 43.5], [64.0, 49.80952380952381], [65.0, 46.666666666666664], [66.0, 44.2], [67.0, 39.07692307692308], [68.0, 49.0], [69.0, 44.6875], [70.0, 48.35714285714286], [71.0, 49.5], [72.0, 53.38461538461538], [73.0, 58.64285714285714], [74.0, 65.33333333333333], [75.0, 46.9], [76.0, 51.33333333333333], [77.0, 60.45454545454545], [78.0, 69.07142857142857], [79.0, 67.16666666666669], [80.0, 73.73333333333333], [81.0, 75.3], [82.0, 67.81818181818181], [83.0, 68.18181818181819], [84.0, 54.6], [85.0, 60.857142857142854], [86.0, 72.46153846153845], [87.0, 60.99999999999999], [88.0, 46.666666666666664], [89.0, 144.25], [90.0, 83.33333333333334], [91.0, 76.28571428571429], [92.0, 96.61538461538461], [93.0, 89.80000000000001], [94.0, 89.26315789473685], [95.0, 84.00000000000001], [96.0, 56.652173913043484], [97.0, 61.29166666666666], [98.0, 46.07407407407407], [99.0, 43.19999999999999], [100.0, 48.78683026703759], [1.0, 46.0]], "isOverall": false, "label": "HTTP请求", "isController": false}, {"data": [[99.99121301006775, 48.78648342782887]], "isOverall": false, "label": "HTTP请求-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 172015.86666666667, "minX": 1.74125436E12, "maxY": 659994.3, "series": [{"data": [[1.7412546E12, 242782.95], [1.74125622E12, 245068.08333333334], [1.74125652E12, 248987.28333333333], [1.7412549E12, 244465.41666666666], [1.7412552E12, 240614.21666666667], [1.74125502E12, 246427.96666666667], [1.74125532E12, 245351.46666666667], [1.74125562E12, 243010.26666666666], [1.74125592E12, 244144.2], [1.7412567E12, 234274.18333333332], [1.74125478E12, 245041.95], [1.74125508E12, 248720.11666666667], [1.74125538E12, 242520.13333333333], [1.74125568E12, 242486.5], [1.7412555E12, 237790.06666666668], [1.7412558E12, 242028.55], [1.74125448E12, 246612.05], [1.7412561E12, 244562.78333333333], [1.7412564E12, 250622.56666666668], [1.74125526E12, 241926.18333333332], [1.74125556E12, 241482.03333333333], [1.74125586E12, 241509.3], [1.74125616E12, 246791.85], [1.74125436E12, 172015.86666666667], [1.74125598E12, 242692.68333333332], [1.74125628E12, 248499.73333333334], [1.74125658E12, 247659.26666666666], [1.74125466E12, 246035.6], [1.74125496E12, 246754.01666666666], [1.74125574E12, 239046.13333333333], [1.74125604E12, 242960.41666666666], [1.74125472E12, 246067.7], [1.74125634E12, 246396.58333333334], [1.74125442E12, 244401.85], [1.74125664E12, 245840.38333333333], [1.74125646E12, 247962.25], [1.74125454E12, 243524.76666666666], [1.74125484E12, 244421.7], [1.74125514E12, 245776.98333333334], [1.74125544E12, 242687.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7412546E12, 639349.6333333333], [1.74125622E12, 645368.9833333333], [1.74125652E12, 655682.55], [1.7412549E12, 643771.3333333334], [1.7412552E12, 633631.3333333334], [1.74125502E12, 648945.5333333333], [1.74125532E12, 646109.3166666667], [1.74125562E12, 639940.85], [1.74125592E12, 642919.95], [1.7412567E12, 605117.4833333333], [1.74125478E12, 645312.1333333333], [1.74125508E12, 654980.4166666666], [1.74125538E12, 638652.6666666666], [1.74125568E12, 638568.4], [1.7412555E12, 626193.0166666667], [1.7412558E12, 637354.0166666667], [1.74125448E12, 649435.4166666666], [1.7412561E12, 644037.9833333333], [1.7412564E12, 659994.3], [1.74125526E12, 637089.55], [1.74125556E12, 635921.75], [1.74125586E12, 635993.95], [1.74125616E12, 649895.05], [1.74125436E12, 452778.65], [1.74125598E12, 639111.25], [1.74125628E12, 654396.0166666667], [1.74125658E12, 652192.8166666667], [1.74125466E12, 647906.7666666667], [1.74125496E12, 649800.9], [1.74125574E12, 629505.65], [1.74125604E12, 639811.5333333333], [1.74125472E12, 647987.1], [1.74125634E12, 648857.95], [1.74125442E12, 643606.0833333334], [1.74125664E12, 647390.5166666667], [1.74125646E12, 652985.5666666667], [1.74125454E12, 641307.7333333333], [1.74125484E12, 643666.7166666667], [1.74125514E12, 647229.5], [1.74125544E12, 639093.6833333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7412567E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 47.9149026690748, "minX": 1.74125436E12, "maxY": 49.74852632547159, "series": [{"data": [[1.7412546E12, 49.61884519133502], [1.74125622E12, 48.188319897548475], [1.74125652E12, 48.119076284128084], [1.7412549E12, 48.975335972282636], [1.7412552E12, 49.74852632547159], [1.74125502E12, 48.569515878847234], [1.74125532E12, 48.78705260136954], [1.74125562E12, 48.638355824157784], [1.74125592E12, 48.59098662579433], [1.7412567E12, 48.68931130103169], [1.74125478E12, 49.10092609316805], [1.74125508E12, 48.11710035671218], [1.74125538E12, 49.36183697509677], [1.74125568E12, 48.72222913607273], [1.7412555E12, 49.742789458098216], [1.7412558E12, 48.78394374158397], [1.74125448E12, 48.84961903052608], [1.7412561E12, 48.39320675869103], [1.7412564E12, 47.9149026690748], [1.74125526E12, 49.48342217528326], [1.74125556E12, 49.02435204238899], [1.74125586E12, 48.82339955849957], [1.74125616E12, 47.974076580064576], [1.74125436E12, 49.379583908637635], [1.74125598E12, 48.74452264305759], [1.74125628E12, 48.090423335680555], [1.74125658E12, 48.223042680054085], [1.74125466E12, 48.714319590494995], [1.74125496E12, 48.513167549939155], [1.74125574E12, 49.46827975088388], [1.74125604E12, 48.753407415994616], [1.74125472E12, 48.610336200412256], [1.74125634E12, 48.600009798077366], [1.74125442E12, 49.26410714432721], [1.74125664E12, 48.622704507512324], [1.74125646E12, 48.31213286599832], [1.74125454E12, 49.27703886061735], [1.74125484E12, 49.10134740273087], [1.74125514E12, 48.68851398916289], [1.74125544E12, 49.21825235635914]], "isOverall": false, "label": "HTTP请求", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7412567E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 47.914766205097614, "minX": 1.74125436E12, "maxY": 49.7483841838143, "series": [{"data": [[1.7412546E12, 49.61875403967569], [1.74125622E12, 48.18811466662343], [1.74125652E12, 48.11893892260055], [1.7412549E12, 48.975179610412454], [1.7412552E12, 49.7483841838143], [1.74125502E12, 48.569409747733424], [1.74125532E12, 48.78697060391138], [1.74125562E12, 48.638132295720204], [1.74125592E12, 48.59080533649795], [1.7412567E12, 48.66447684946176], [1.74125478E12, 49.10083578266431], [1.74125508E12, 48.1169709372399], [1.74125538E12, 49.361745723623855], [1.74125568E12, 48.721947050965646], [1.7412555E12, 49.742467955497176], [1.7412558E12, 48.7837276188257], [1.74125448E12, 48.849512979066745], [1.7412561E12, 48.39303400733752], [1.7412564E12, 47.914766205097614], [1.74125526E12, 49.483280804318156], [1.74125556E12, 49.02421041231049], [1.74125586E12, 48.823224624099375], [1.74125616E12, 47.9738890836316], [1.74125436E12, 49.37930308207134], [1.74125598E12, 48.744381719761634], [1.74125628E12, 48.09033428055581], [1.74125658E12, 48.222928953225946], [1.74125466E12, 48.714172404207034], [1.74125496E12, 48.513086017121964], [1.74125574E12, 49.468119845143825], [1.74125604E12, 48.75323352599205], [1.74125472E12, 48.61017267881105], [1.74125634E12, 48.599911817298505], [1.74125442E12, 49.26404952214782], [1.74125664E12, 48.622606304624895], [1.74125646E12, 48.31201927757788], [1.74125454E12, 49.27698929350257], [1.74125484E12, 49.10124040068199], [1.74125514E12, 48.68839120540923], [1.74125544E12, 49.21811143072689]], "isOverall": false, "label": "HTTP请求", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7412567E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.20148829858167203, "minX": 1.74125436E12, "maxY": 0.2203918295197899, "series": [{"data": [[1.7412546E12, 0.20424601004325338], [1.74125622E12, 0.20397491257162467], [1.74125652E12, 0.20321425974257082], [1.7412549E12, 0.20241455646720904], [1.7412552E12, 0.20276925392352788], [1.74125502E12, 0.2034778349253005], [1.74125532E12, 0.20430486654913482], [1.74125562E12, 0.20400695421806453], [1.74125592E12, 0.20469209661071366], [1.7412567E12, 0.2085779017993799], [1.74125478E12, 0.20497200374377988], [1.74125508E12, 0.20263045078420325], [1.74125538E12, 0.20280224976357658], [1.74125568E12, 0.20411346458587498], [1.7412555E12, 0.20423029738990636], [1.7412558E12, 0.20342970191684115], [1.74125448E12, 0.20578877812403346], [1.7412561E12, 0.20512989256510972], [1.7412564E12, 0.20386915512743078], [1.74125526E12, 0.2034078718680108], [1.74125556E12, 0.2037973523506426], [1.74125586E12, 0.2038818776292201], [1.74125616E12, 0.20193365887061746], [1.74125436E12, 0.22024993564391282], [1.74125598E12, 0.20434706920991869], [1.74125628E12, 0.2042600733490403], [1.74125658E12, 0.20322984191970808], [1.74125466E12, 0.20292900714671488], [1.74125496E12, 0.20277211577660292], [1.74125574E12, 0.20511698367278114], [1.74125604E12, 0.2061921401719036], [1.74125472E12, 0.2042139516630155], [1.74125634E12, 0.20191389122500608], [1.74125442E12, 0.20148829858167203], [1.74125664E12, 0.2203918295197899], [1.74125646E12, 0.2041265050465688], [1.74125454E12, 0.20338212940320996], [1.74125484E12, 0.20508177425860102], [1.74125514E12, 0.20522076518834875], [1.74125544E12, 0.20426755974832234]], "isOverall": false, "label": "HTTP请求", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7412567E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 19.0, "minX": 1.74125436E12, "maxY": 1243.0, "series": [{"data": [[1.7412546E12, 310.0], [1.74125622E12, 286.0], [1.74125652E12, 323.0], [1.7412549E12, 293.0], [1.7412552E12, 293.0], [1.74125502E12, 364.0], [1.74125532E12, 459.0], [1.74125562E12, 467.0], [1.74125592E12, 447.0], [1.7412567E12, 401.0], [1.74125478E12, 290.0], [1.74125508E12, 306.0], [1.74125538E12, 450.0], [1.74125568E12, 335.0], [1.7412555E12, 466.0], [1.7412558E12, 346.0], [1.74125448E12, 462.0], [1.7412561E12, 305.0], [1.7412564E12, 450.0], [1.74125526E12, 460.0], [1.74125556E12, 453.0], [1.74125586E12, 305.0], [1.74125616E12, 333.0], [1.74125436E12, 463.0], [1.74125598E12, 326.0], [1.74125628E12, 287.0], [1.74125658E12, 439.0], [1.74125466E12, 457.0], [1.74125496E12, 294.0], [1.74125574E12, 454.0], [1.74125604E12, 322.0], [1.74125472E12, 303.0], [1.74125634E12, 335.0], [1.74125442E12, 453.0], [1.74125664E12, 1243.0], [1.74125646E12, 336.0], [1.74125454E12, 469.0], [1.74125484E12, 465.0], [1.74125514E12, 462.0], [1.74125544E12, 316.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7412546E12, 58.0], [1.74125622E12, 60.0], [1.74125652E12, 60.0], [1.7412549E12, 59.0], [1.7412552E12, 63.0], [1.74125502E12, 60.0], [1.74125532E12, 63.0], [1.74125562E12, 60.0], [1.74125592E12, 61.0], [1.7412567E12, 60.0], [1.74125478E12, 57.0], [1.74125508E12, 58.0], [1.74125538E12, 64.0], [1.74125568E12, 60.0], [1.7412555E12, 60.0], [1.7412558E12, 60.0], [1.74125448E12, 59.0], [1.7412561E12, 61.0], [1.7412564E12, 58.0], [1.74125526E12, 60.0], [1.74125556E12, 60.0], [1.74125586E12, 62.0], [1.74125616E12, 60.0], [1.74125436E12, 62.0], [1.74125598E12, 59.0], [1.74125628E12, 62.0], [1.74125658E12, 57.0], [1.74125466E12, 58.0], [1.74125496E12, 61.0], [1.74125574E12, 60.0], [1.74125604E12, 60.0], [1.74125472E12, 58.0], [1.74125634E12, 62.0], [1.74125442E12, 61.0], [1.74125664E12, 59.0], [1.74125646E12, 59.0], [1.74125454E12, 60.0], [1.74125484E12, 61.0], [1.74125514E12, 60.0], [1.74125544E12, 62.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7412546E12, 86.0], [1.74125622E12, 98.0], [1.74125652E12, 87.0], [1.7412549E12, 87.0], [1.7412552E12, 94.0], [1.74125502E12, 92.0], [1.74125532E12, 105.0], [1.74125562E12, 89.9900000000016], [1.74125592E12, 95.0], [1.7412567E12, 99.0], [1.74125478E12, 84.0], [1.74125508E12, 86.0], [1.74125538E12, 100.0], [1.74125568E12, 90.0], [1.7412555E12, 90.0], [1.7412558E12, 91.0], [1.74125448E12, 89.0], [1.7412561E12, 89.0], [1.7412564E12, 85.0], [1.74125526E12, 90.0], [1.74125556E12, 89.0], [1.74125586E12, 97.0], [1.74125616E12, 91.0], [1.74125436E12, 92.0], [1.74125598E12, 88.0], [1.74125628E12, 92.0], [1.74125658E12, 87.0], [1.74125466E12, 85.0], [1.74125496E12, 94.9900000000016], [1.74125574E12, 88.0], [1.74125604E12, 88.0], [1.74125472E12, 87.0], [1.74125634E12, 90.0], [1.74125442E12, 92.0], [1.74125664E12, 88.0], [1.74125646E12, 91.0], [1.74125454E12, 87.0], [1.74125484E12, 90.0], [1.74125514E12, 89.0], [1.74125544E12, 101.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7412546E12, 66.95000000000073], [1.74125622E12, 70.0], [1.74125652E12, 66.0], [1.7412549E12, 66.0], [1.7412552E12, 70.0], [1.74125502E12, 67.0], [1.74125532E12, 72.0], [1.74125562E12, 70.0], [1.74125592E12, 71.0], [1.7412567E12, 70.0], [1.74125478E12, 65.0], [1.74125508E12, 67.0], [1.74125538E12, 73.0], [1.74125568E12, 67.0], [1.7412555E12, 68.0], [1.7412558E12, 69.0], [1.74125448E12, 65.0], [1.7412561E12, 71.0], [1.7412564E12, 65.0], [1.74125526E12, 66.0], [1.74125556E12, 67.0], [1.74125586E12, 70.0], [1.74125616E12, 67.0], [1.74125436E12, 71.0], [1.74125598E12, 65.0], [1.74125628E12, 68.0], [1.74125658E12, 66.0], [1.74125466E12, 65.0], [1.74125496E12, 71.0], [1.74125574E12, 68.0], [1.74125604E12, 68.0], [1.74125472E12, 67.0], [1.74125634E12, 71.0], [1.74125442E12, 70.0], [1.74125664E12, 68.0], [1.74125646E12, 68.0], [1.74125454E12, 67.0], [1.74125484E12, 69.0], [1.74125514E12, 67.0], [1.74125544E12, 71.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7412546E12, 20.0], [1.74125622E12, 20.0], [1.74125652E12, 19.0], [1.7412549E12, 20.0], [1.7412552E12, 20.0], [1.74125502E12, 20.0], [1.74125532E12, 19.0], [1.74125562E12, 20.0], [1.74125592E12, 20.0], [1.7412567E12, 20.0], [1.74125478E12, 20.0], [1.74125508E12, 20.0], [1.74125538E12, 20.0], [1.74125568E12, 20.0], [1.7412555E12, 20.0], [1.7412558E12, 20.0], [1.74125448E12, 20.0], [1.7412561E12, 20.0], [1.7412564E12, 20.0], [1.74125526E12, 20.0], [1.74125556E12, 20.0], [1.74125586E12, 20.0], [1.74125616E12, 20.0], [1.74125436E12, 20.0], [1.74125598E12, 20.0], [1.74125628E12, 20.0], [1.74125658E12, 20.0], [1.74125466E12, 20.0], [1.74125496E12, 20.0], [1.74125574E12, 20.0], [1.74125604E12, 20.0], [1.74125472E12, 20.0], [1.74125634E12, 20.0], [1.74125442E12, 20.0], [1.74125664E12, 20.0], [1.74125646E12, 20.0], [1.74125454E12, 20.0], [1.74125484E12, 20.0], [1.74125514E12, 20.0], [1.74125544E12, 20.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7412546E12, 49.0], [1.74125622E12, 47.0], [1.74125652E12, 46.0], [1.7412549E12, 47.0], [1.7412552E12, 49.0], [1.74125502E12, 46.0], [1.74125532E12, 46.0], [1.74125562E12, 47.0], [1.74125592E12, 47.0], [1.7412567E12, 47.0], [1.74125478E12, 46.0], [1.74125508E12, 47.0], [1.74125538E12, 48.0], [1.74125568E12, 48.0], [1.7412555E12, 47.0], [1.7412558E12, 47.0], [1.74125448E12, 46.0], [1.7412561E12, 48.0], [1.7412564E12, 46.0], [1.74125526E12, 47.0], [1.74125556E12, 47.0], [1.74125586E12, 48.0], [1.74125616E12, 46.0], [1.74125436E12, 48.0], [1.74125598E12, 46.0], [1.74125628E12, 46.0], [1.74125658E12, 46.0], [1.74125466E12, 46.0], [1.74125496E12, 48.0], [1.74125574E12, 47.0], [1.74125604E12, 47.0], [1.74125472E12, 47.0], [1.74125634E12, 48.0], [1.74125442E12, 48.0], [1.74125664E12, 47.0], [1.74125646E12, 45.0], [1.74125454E12, 47.0], [1.74125484E12, 48.0], [1.74125514E12, 47.0], [1.74125544E12, 47.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7412567E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 27.0, "minX": 541.0, "maxY": 84.0, "series": [{"data": [[541.0, 44.0], [847.0, 41.0], [1243.0, 84.0], [1329.0, 77.0], [1436.0, 67.0], [1507.0, 68.0], [1500.0, 63.0], [1493.0, 58.0], [1534.0, 59.0], [1524.0, 65.0], [1505.0, 62.0], [1598.0, 57.0], [1584.0, 59.0], [1587.0, 57.0], [1578.0, 64.0], [1555.0, 61.0], [1550.0, 61.0], [1599.0, 59.0], [1575.0, 57.0], [1573.0, 60.0], [1560.0, 49.0], [1543.0, 58.0], [1537.0, 62.0], [1539.0, 61.0], [1580.0, 61.5], [1593.0, 63.0], [1596.0, 57.5], [1589.0, 55.0], [1610.0, 60.0], [1652.0, 59.0], [1609.0, 63.0], [1635.0, 62.0], [1645.0, 47.0], [1639.0, 55.0], [1634.0, 59.0], [1658.0, 58.0], [1657.0, 58.0], [1650.0, 59.0], [1612.0, 61.0], [1611.0, 53.0], [1607.0, 58.0], [1600.0, 61.0], [1603.0, 61.0], [1601.0, 65.0], [1621.0, 61.0], [1631.0, 55.0], [1619.0, 61.0], [1719.0, 55.0], [1707.0, 59.0], [1711.0, 52.0], [1710.0, 56.0], [1704.0, 58.0], [1706.0, 57.0], [1705.0, 57.0], [1699.0, 56.0], [1700.0, 57.0], [1702.0, 52.0], [1716.0, 55.0], [1723.0, 56.0], [1726.0, 59.0], [1720.0, 57.0], [1696.0, 55.0], [1669.0, 57.0], [1693.0, 56.0], [1680.0, 57.5], [1681.0, 57.0], [1684.0, 55.0], [1689.0, 54.0], [1685.0, 56.0], [1690.0, 57.0], [1667.0, 56.0], [1668.0, 53.0], [1678.0, 56.0], [1677.0, 54.0], [1672.0, 56.0], [1712.0, 52.0], [1776.0, 51.5], [1790.0, 54.0], [1765.0, 56.0], [1769.0, 54.0], [1767.0, 53.0], [1775.0, 53.5], [1774.0, 51.0], [1737.0, 54.0], [1758.0, 54.0], [1731.0, 56.0], [1732.0, 55.0], [1736.0, 54.0], [1734.0, 54.0], [1754.0, 52.0], [1757.0, 55.0], [1753.0, 56.0], [1752.0, 56.0], [1748.0, 55.0], [1745.0, 54.0], [1747.0, 56.0], [1749.0, 55.0], [1750.0, 54.0], [1763.0, 55.0], [1760.0, 56.0], [1791.0, 54.0], [1762.0, 54.0], [1761.0, 52.0], [1764.0, 54.0], [1780.0, 49.0], [1781.0, 52.0], [1782.0, 55.0], [1785.0, 51.0], [1787.0, 53.0], [1789.0, 54.0], [1779.0, 53.0], [1777.0, 51.0], [1741.0, 55.0], [1738.0, 57.0], [1740.0, 57.0], [1801.0, 54.0], [1854.0, 54.0], [1829.0, 52.0], [1834.0, 55.0], [1831.0, 51.0], [1830.0, 53.0], [1833.0, 52.0], [1838.0, 52.5], [1836.0, 52.0], [1835.0, 49.0], [1837.0, 51.0], [1813.0, 53.0], [1814.0, 53.0], [1815.0, 52.0], [1808.0, 54.0], [1810.0, 51.0], [1812.0, 53.0], [1825.0, 53.0], [1855.0, 49.0], [1827.0, 53.0], [1828.0, 54.0], [1843.0, 49.0], [1844.0, 52.0], [1845.0, 51.0], [1841.0, 52.0], [1840.0, 52.0], [1803.0, 55.0], [1802.0, 54.0], [1805.0, 52.0], [1804.0, 50.0], [1794.0, 56.0], [1793.0, 52.0], [1797.0, 52.0], [1796.0, 55.0], [1800.0, 54.0], [1799.0, 52.0], [1849.0, 52.0], [1847.0, 51.0], [1848.0, 53.0], [1851.0, 52.0], [1852.0, 52.0], [1846.0, 52.0], [1792.0, 53.0], [1816.0, 53.0], [1822.0, 52.0], [1820.0, 53.0], [1818.0, 54.0], [1817.0, 48.0], [1823.0, 53.0], [1912.0, 49.0], [1883.0, 51.0], [1884.0, 52.0], [1885.0, 49.0], [1880.0, 51.0], [1882.0, 53.0], [1881.0, 49.0], [1856.0, 52.0], [1902.0, 51.0], [1901.0, 51.0], [1903.0, 50.0], [1859.0, 52.0], [1858.0, 53.0], [1857.0, 52.0], [1860.0, 51.0], [1861.0, 53.0], [1904.0, 51.0], [1870.0, 52.0], [1871.0, 51.0], [1905.0, 52.0], [1907.0, 51.0], [1910.0, 50.0], [1911.0, 49.0], [1908.0, 52.0], [1909.0, 50.0], [1906.0, 51.0], [1869.0, 53.0], [1862.0, 53.0], [1863.0, 52.0], [1864.0, 51.0], [1865.0, 52.0], [1866.0, 52.0], [1867.0, 51.0], [1868.0, 50.0], [1879.0, 52.0], [1873.0, 52.0], [1872.0, 52.0], [1878.0, 50.0], [1877.0, 52.0], [1876.0, 52.5], [1875.0, 52.0], [1890.0, 51.0], [1891.0, 50.0], [1893.0, 48.0], [1894.0, 51.0], [1896.0, 50.0], [1895.0, 48.0], [1897.0, 51.0], [1899.0, 50.0], [1898.0, 51.0], [1900.0, 50.0], [1888.0, 51.0], [1919.0, 49.0], [1915.0, 50.0], [1914.0, 52.0], [1913.0, 50.0], [1918.0, 51.0], [1916.0, 50.0], [1917.0, 50.0], [1889.0, 51.0], [1934.0, 49.0], [1949.0, 49.0], [1924.0, 50.0], [1932.0, 50.0], [1933.0, 50.0], [1931.0, 49.0], [1930.0, 48.0], [1926.0, 48.0], [1925.0, 49.0], [1929.0, 51.0], [1928.0, 47.0], [1927.0, 50.0], [1946.0, 50.0], [1947.0, 49.0], [1948.0, 49.0], [1944.0, 48.0], [1945.0, 48.0], [1977.0, 48.0], [1981.0, 49.0], [1980.0, 48.0], [1978.0, 48.5], [1979.0, 49.0], [1974.0, 50.0], [1975.0, 49.0], [1976.0, 49.0], [1971.0, 48.0], [1972.0, 49.0], [1970.0, 49.0], [1973.0, 49.0], [1935.0, 50.0], [1968.0, 46.0], [1969.0, 48.0], [1958.0, 49.0], [1964.0, 49.0], [1962.0, 48.0], [1963.0, 49.0], [1966.0, 48.0], [1967.0, 48.0], [1965.0, 49.0], [1961.0, 49.0], [1960.0, 49.0], [1959.0, 49.0], [1983.0, 49.0], [1952.0, 49.0], [1953.0, 49.0], [1954.0, 49.0], [1956.0, 49.0], [1957.0, 50.0], [1955.0, 49.0], [1951.0, 49.0], [1950.0, 49.0], [1921.0, 50.0], [1920.0, 50.0], [1922.0, 51.0], [1923.0, 50.0], [1982.0, 49.0], [1943.0, 49.0], [1942.0, 49.0], [1941.0, 49.0], [1938.0, 49.0], [1940.0, 49.0], [1939.0, 48.0], [1936.0, 49.0], [1937.0, 50.0], [1991.0, 48.0], [2040.0, 47.0], [2035.0, 47.0], [2034.0, 48.0], [2033.0, 46.0], [2032.0, 48.0], [1999.0, 48.0], [2036.0, 48.0], [2037.0, 48.0], [2039.0, 47.0], [2038.0, 47.0], [2020.0, 48.0], [2044.0, 47.0], [2045.0, 47.0], [2016.0, 48.0], [2047.0, 47.0], [2019.0, 47.0], [2018.0, 48.0], [2017.0, 47.0], [2046.0, 47.0], [2043.0, 47.0], [2041.0, 48.0], [2042.0, 48.0], [1986.0, 49.0], [1987.0, 49.0], [1988.0, 49.0], [1990.0, 48.0], [1989.0, 49.0], [1985.0, 48.0], [2012.0, 48.0], [2011.0, 47.0], [2015.0, 48.0], [1984.0, 49.0], [2014.0, 47.0], [2013.0, 48.0], [2010.0, 48.0], [2004.0, 48.0], [2005.0, 48.0], [2009.0, 48.0], [2007.0, 48.0], [2008.0, 48.0], [2006.0, 48.0], [2002.0, 47.0], [2001.0, 49.0], [2000.0, 48.0], [2003.0, 48.0], [1998.0, 47.0], [2031.0, 48.0], [2030.0, 47.0], [2028.0, 48.0], [2029.0, 48.0], [2027.0, 48.0], [2023.0, 47.0], [2022.0, 48.0], [2021.0, 48.0], [2026.0, 47.0], [2024.0, 47.0], [2025.0, 47.0], [1996.0, 48.0], [1997.0, 48.0], [1994.0, 48.0], [1992.0, 49.0], [1993.0, 48.0], [1995.0, 49.0], [2124.0, 45.0], [2064.0, 47.0], [2130.0, 46.0], [2132.0, 46.0], [2140.0, 46.0], [2142.0, 45.0], [2136.0, 46.0], [2134.0, 45.0], [2138.0, 45.0], [2126.0, 46.0], [2128.0, 45.0], [2076.0, 46.0], [2078.0, 47.0], [2072.0, 47.0], [2074.0, 46.0], [2066.0, 47.0], [2068.0, 46.0], [2070.0, 47.0], [2162.0, 45.0], [2166.0, 45.0], [2164.0, 45.0], [2150.0, 45.0], [2148.0, 46.0], [2146.0, 45.0], [2156.0, 45.0], [2154.0, 45.0], [2152.0, 45.0], [2158.0, 45.0], [2160.0, 45.0], [2144.0, 44.0], [2058.0, 47.0], [2060.0, 47.0], [2056.0, 47.0], [2062.0, 46.0], [2088.0, 46.0], [2084.0, 47.0], [2086.0, 46.0], [2080.0, 47.0], [2082.0, 46.0], [2108.0, 45.0], [2110.0, 46.0], [2052.0, 47.0], [2050.0, 47.0], [2048.0, 47.0], [2106.0, 46.0], [2096.0, 46.0], [2090.0, 46.0], [2094.0, 46.0], [2092.0, 46.0], [2098.0, 46.0], [2102.0, 46.0], [2104.0, 46.0], [2100.0, 46.0], [2054.0, 47.0], [2168.0, 45.0], [2122.0, 46.0], [2120.0, 46.0], [2116.0, 45.0], [2118.0, 46.0], [2114.0, 46.0], [2172.0, 45.0], [2170.0, 45.0], [2174.0, 45.0], [2112.0, 45.0], [2236.0, 44.0], [2176.0, 45.0], [2188.0, 45.0], [2180.0, 45.0], [2210.0, 44.0], [2208.0, 44.0], [2234.0, 44.0], [2224.0, 44.0], [2222.0, 44.0], [2220.0, 44.0], [2228.0, 44.0], [2226.0, 44.0], [2230.0, 44.0], [2218.0, 44.0], [2216.0, 44.0], [2214.0, 44.0], [2212.0, 44.0], [2240.0, 44.0], [2252.0, 43.0], [2206.0, 44.0], [2276.0, 43.0], [2278.0, 43.0], [2284.0, 43.0], [2296.0, 42.0], [2294.0, 43.0], [2202.0, 45.0], [2204.0, 45.0], [2200.0, 44.0], [2198.0, 44.0], [2192.0, 44.0], [2196.0, 44.0], [2194.0, 44.0], [2190.0, 45.0], [2184.0, 44.0], [2186.0, 43.0], [2182.0, 45.0], [2258.0, 44.0], [2266.0, 43.0], [2270.0, 43.0], [2262.0, 43.0], [2264.0, 43.0], [2242.0, 44.0], [2244.0, 44.0], [2246.0, 43.0], [2248.0, 43.0], [2250.0, 43.0], [2178.0, 45.0], [2318.0, 42.0], [2308.0, 43.0], [2338.0, 41.0], [2374.0, 41.0], [2079.0, 47.0], [2145.0, 45.0], [2129.0, 45.0], [2131.0, 46.0], [2133.0, 45.0], [2141.0, 46.0], [2143.0, 45.0], [2137.0, 45.0], [2135.0, 45.0], [2139.0, 45.0], [2125.0, 46.0], [2127.0, 45.0], [2089.0, 46.0], [2075.0, 46.0], [2077.0, 47.0], [2069.0, 47.0], [2067.0, 47.0], [2073.0, 46.0], [2071.0, 47.0], [2163.0, 45.0], [2167.0, 45.0], [2165.0, 45.0], [2161.0, 45.0], [2147.0, 45.0], [2151.0, 45.0], [2149.0, 45.0], [2153.0, 45.0], [2155.0, 45.0], [2159.0, 45.0], [2157.0, 45.0], [2057.0, 47.0], [2059.0, 47.0], [2055.0, 47.0], [2061.0, 47.0], [2063.0, 47.0], [2065.0, 47.0], [2083.0, 46.0], [2087.0, 46.0], [2085.0, 46.0], [2081.0, 46.0], [2111.0, 46.0], [2109.0, 46.0], [2053.0, 47.0], [2049.0, 46.0], [2051.0, 47.0], [2107.0, 46.0], [2097.0, 46.0], [2095.0, 46.0], [2093.0, 46.0], [2091.0, 46.0], [2099.0, 46.0], [2101.0, 46.0], [2103.0, 46.0], [2105.0, 46.0], [2113.0, 45.0], [2121.0, 46.0], [2119.0, 46.0], [2115.0, 46.0], [2117.0, 46.0], [2173.0, 45.0], [2171.0, 44.0], [2169.0, 44.0], [2175.0, 45.0], [2123.0, 46.0], [2239.0, 44.0], [2211.0, 44.0], [2209.0, 44.0], [2235.0, 44.0], [2237.0, 44.0], [2233.0, 44.0], [2231.0, 44.0], [2225.0, 44.0], [2227.0, 44.0], [2223.0, 44.0], [2221.0, 44.0], [2219.0, 44.0], [2213.0, 44.0], [2215.0, 44.0], [2217.0, 44.0], [2205.0, 44.0], [2207.0, 44.0], [2203.0, 45.0], [2273.0, 43.0], [2275.0, 43.0], [2279.0, 42.0], [2283.0, 43.0], [2285.0, 43.0], [2289.0, 43.0], [2291.0, 43.0], [2241.0, 44.0], [2297.0, 43.0], [2201.0, 44.0], [2197.0, 44.0], [2195.0, 45.0], [2193.0, 44.0], [2189.0, 44.0], [2191.0, 45.0], [2199.0, 44.0], [2183.0, 44.0], [2187.0, 45.0], [2185.0, 45.0], [2181.0, 45.0], [2253.0, 43.0], [2255.0, 43.0], [2257.0, 44.0], [2271.0, 43.0], [2269.0, 43.0], [2261.0, 44.0], [2263.0, 43.0], [2245.0, 44.0], [2249.0, 43.0], [2243.0, 43.0], [2177.0, 45.0], [2179.0, 45.0], [2311.0, 43.0], [2415.0, 39.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[541.0, 27.0], [847.0, 44.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2415.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 541.0, "maxY": 84.0, "series": [{"data": [[541.0, 44.0], [847.0, 41.0], [1243.0, 84.0], [1329.0, 77.0], [1436.0, 67.0], [1507.0, 68.0], [1500.0, 63.0], [1493.0, 58.0], [1534.0, 59.0], [1524.0, 65.0], [1505.0, 62.0], [1598.0, 57.0], [1584.0, 59.0], [1587.0, 57.0], [1578.0, 64.0], [1555.0, 61.0], [1550.0, 61.0], [1599.0, 59.0], [1575.0, 57.0], [1573.0, 60.0], [1560.0, 49.0], [1543.0, 58.0], [1537.0, 62.0], [1539.0, 61.0], [1580.0, 61.5], [1593.0, 63.0], [1596.0, 57.5], [1589.0, 55.0], [1610.0, 60.0], [1652.0, 59.0], [1609.0, 63.0], [1635.0, 62.0], [1645.0, 47.0], [1639.0, 55.0], [1634.0, 59.0], [1658.0, 58.0], [1657.0, 58.0], [1650.0, 59.0], [1612.0, 61.0], [1611.0, 53.0], [1607.0, 58.0], [1600.0, 61.0], [1603.0, 61.0], [1601.0, 65.0], [1621.0, 61.0], [1631.0, 55.0], [1619.0, 61.0], [1719.0, 55.0], [1707.0, 59.0], [1711.0, 52.0], [1710.0, 56.0], [1704.0, 58.0], [1706.0, 57.0], [1705.0, 57.0], [1699.0, 56.0], [1700.0, 57.0], [1702.0, 52.0], [1716.0, 55.0], [1723.0, 56.0], [1726.0, 59.0], [1720.0, 57.0], [1696.0, 55.0], [1669.0, 57.0], [1693.0, 56.0], [1680.0, 57.5], [1681.0, 57.0], [1684.0, 55.0], [1689.0, 54.0], [1685.0, 56.0], [1690.0, 57.0], [1667.0, 56.0], [1668.0, 53.0], [1678.0, 56.0], [1677.0, 54.0], [1672.0, 56.0], [1712.0, 52.0], [1776.0, 51.5], [1790.0, 54.0], [1765.0, 56.0], [1769.0, 54.0], [1767.0, 53.0], [1775.0, 53.5], [1774.0, 51.0], [1737.0, 54.0], [1758.0, 54.0], [1731.0, 56.0], [1732.0, 55.0], [1736.0, 54.0], [1734.0, 54.0], [1754.0, 52.0], [1757.0, 55.0], [1753.0, 56.0], [1752.0, 56.0], [1748.0, 55.0], [1745.0, 54.0], [1747.0, 56.0], [1749.0, 55.0], [1750.0, 54.0], [1763.0, 55.0], [1760.0, 56.0], [1791.0, 54.0], [1762.0, 54.0], [1761.0, 52.0], [1764.0, 54.0], [1780.0, 49.0], [1781.0, 52.0], [1782.0, 55.0], [1785.0, 51.0], [1787.0, 53.0], [1789.0, 54.0], [1779.0, 53.0], [1777.0, 51.0], [1741.0, 55.0], [1738.0, 57.0], [1740.0, 57.0], [1801.0, 54.0], [1854.0, 54.0], [1829.0, 52.0], [1834.0, 55.0], [1831.0, 51.0], [1830.0, 53.0], [1833.0, 52.0], [1838.0, 52.5], [1836.0, 52.0], [1835.0, 49.0], [1837.0, 51.0], [1813.0, 53.0], [1814.0, 53.0], [1815.0, 52.0], [1808.0, 54.0], [1810.0, 51.0], [1812.0, 53.0], [1825.0, 53.0], [1855.0, 49.0], [1827.0, 53.0], [1828.0, 54.0], [1843.0, 49.0], [1844.0, 52.0], [1845.0, 51.0], [1841.0, 52.0], [1840.0, 52.0], [1803.0, 55.0], [1802.0, 54.0], [1805.0, 52.0], [1804.0, 50.0], [1794.0, 56.0], [1793.0, 52.0], [1797.0, 52.0], [1796.0, 55.0], [1800.0, 54.0], [1799.0, 52.0], [1849.0, 52.0], [1847.0, 51.0], [1848.0, 53.0], [1851.0, 52.0], [1852.0, 52.0], [1846.0, 52.0], [1792.0, 53.0], [1816.0, 53.0], [1822.0, 52.0], [1820.0, 53.0], [1818.0, 54.0], [1817.0, 48.0], [1823.0, 53.0], [1912.0, 49.0], [1883.0, 51.0], [1884.0, 52.0], [1885.0, 49.0], [1880.0, 51.0], [1882.0, 53.0], [1881.0, 49.0], [1856.0, 52.0], [1902.0, 51.0], [1901.0, 51.0], [1903.0, 50.0], [1859.0, 52.0], [1858.0, 53.0], [1857.0, 52.0], [1860.0, 51.0], [1861.0, 53.0], [1904.0, 51.0], [1870.0, 52.0], [1871.0, 51.0], [1905.0, 52.0], [1907.0, 51.0], [1910.0, 50.0], [1911.0, 49.0], [1908.0, 52.0], [1909.0, 50.0], [1906.0, 51.0], [1869.0, 53.0], [1862.0, 53.0], [1863.0, 52.0], [1864.0, 51.0], [1865.0, 52.0], [1866.0, 52.0], [1867.0, 51.0], [1868.0, 50.0], [1879.0, 52.0], [1873.0, 52.0], [1872.0, 52.0], [1878.0, 50.0], [1877.0, 52.0], [1876.0, 52.5], [1875.0, 52.0], [1890.0, 51.0], [1891.0, 50.0], [1893.0, 48.0], [1894.0, 51.0], [1896.0, 50.0], [1895.0, 48.0], [1897.0, 51.0], [1899.0, 50.0], [1898.0, 51.0], [1900.0, 50.0], [1888.0, 51.0], [1919.0, 49.0], [1915.0, 50.0], [1914.0, 52.0], [1913.0, 50.0], [1918.0, 51.0], [1916.0, 50.0], [1917.0, 50.0], [1889.0, 51.0], [1934.0, 49.0], [1949.0, 49.0], [1924.0, 50.0], [1932.0, 50.0], [1933.0, 50.0], [1931.0, 49.0], [1930.0, 48.0], [1926.0, 48.0], [1925.0, 49.0], [1929.0, 51.0], [1928.0, 47.0], [1927.0, 50.0], [1946.0, 50.0], [1947.0, 49.0], [1948.0, 49.0], [1944.0, 48.0], [1945.0, 48.0], [1977.0, 48.0], [1981.0, 49.0], [1980.0, 48.0], [1978.0, 48.5], [1979.0, 49.0], [1974.0, 50.0], [1975.0, 49.0], [1976.0, 49.0], [1971.0, 48.0], [1972.0, 49.0], [1970.0, 49.0], [1973.0, 49.0], [1935.0, 50.0], [1968.0, 46.0], [1969.0, 48.0], [1958.0, 49.0], [1964.0, 49.0], [1962.0, 48.0], [1963.0, 49.0], [1966.0, 48.0], [1967.0, 48.0], [1965.0, 49.0], [1961.0, 49.0], [1960.0, 49.0], [1959.0, 49.0], [1983.0, 49.0], [1952.0, 49.0], [1953.0, 49.0], [1954.0, 49.0], [1956.0, 49.0], [1957.0, 50.0], [1955.0, 49.0], [1951.0, 49.0], [1950.0, 49.0], [1921.0, 50.0], [1920.0, 50.0], [1922.0, 51.0], [1923.0, 50.0], [1982.0, 49.0], [1943.0, 49.0], [1942.0, 49.0], [1941.0, 49.0], [1938.0, 49.0], [1940.0, 49.0], [1939.0, 48.0], [1936.0, 49.0], [1937.0, 50.0], [1991.0, 48.0], [2040.0, 47.0], [2035.0, 47.0], [2034.0, 48.0], [2033.0, 46.0], [2032.0, 48.0], [1999.0, 48.0], [2036.0, 48.0], [2037.0, 48.0], [2039.0, 47.0], [2038.0, 47.0], [2020.0, 48.0], [2044.0, 47.0], [2045.0, 47.0], [2016.0, 48.0], [2047.0, 47.0], [2019.0, 47.0], [2018.0, 48.0], [2017.0, 47.0], [2046.0, 47.0], [2043.0, 47.0], [2041.0, 48.0], [2042.0, 48.0], [1986.0, 49.0], [1987.0, 49.0], [1988.0, 49.0], [1990.0, 48.0], [1989.0, 49.0], [1985.0, 48.0], [2012.0, 48.0], [2011.0, 47.0], [2015.0, 48.0], [1984.0, 49.0], [2014.0, 47.0], [2013.0, 48.0], [2010.0, 48.0], [2004.0, 48.0], [2005.0, 48.0], [2009.0, 48.0], [2007.0, 48.0], [2008.0, 48.0], [2006.0, 48.0], [2002.0, 47.0], [2001.0, 49.0], [2000.0, 48.0], [2003.0, 48.0], [1998.0, 47.0], [2031.0, 48.0], [2030.0, 47.0], [2028.0, 48.0], [2029.0, 48.0], [2027.0, 48.0], [2023.0, 47.0], [2022.0, 48.0], [2021.0, 48.0], [2026.0, 47.0], [2024.0, 47.0], [2025.0, 47.0], [1996.0, 48.0], [1997.0, 48.0], [1994.0, 48.0], [1992.0, 49.0], [1993.0, 48.0], [1995.0, 49.0], [2124.0, 45.0], [2064.0, 47.0], [2130.0, 46.0], [2132.0, 46.0], [2140.0, 46.0], [2142.0, 45.0], [2136.0, 46.0], [2134.0, 45.0], [2138.0, 45.0], [2126.0, 46.0], [2128.0, 45.0], [2076.0, 46.0], [2078.0, 47.0], [2072.0, 47.0], [2074.0, 46.0], [2066.0, 47.0], [2068.0, 46.0], [2070.0, 47.0], [2162.0, 45.0], [2166.0, 45.0], [2164.0, 45.0], [2150.0, 45.0], [2148.0, 46.0], [2146.0, 45.0], [2156.0, 45.0], [2154.0, 45.0], [2152.0, 45.0], [2158.0, 45.0], [2160.0, 45.0], [2144.0, 44.0], [2058.0, 47.0], [2060.0, 47.0], [2056.0, 47.0], [2062.0, 46.0], [2088.0, 46.0], [2084.0, 47.0], [2086.0, 46.0], [2080.0, 47.0], [2082.0, 46.0], [2108.0, 45.0], [2110.0, 46.0], [2052.0, 47.0], [2050.0, 47.0], [2048.0, 47.0], [2106.0, 46.0], [2096.0, 46.0], [2090.0, 46.0], [2094.0, 46.0], [2092.0, 46.0], [2098.0, 46.0], [2102.0, 46.0], [2104.0, 46.0], [2100.0, 46.0], [2054.0, 47.0], [2168.0, 45.0], [2122.0, 46.0], [2120.0, 46.0], [2116.0, 45.0], [2118.0, 46.0], [2114.0, 46.0], [2172.0, 45.0], [2170.0, 45.0], [2174.0, 45.0], [2112.0, 45.0], [2236.0, 44.0], [2176.0, 45.0], [2188.0, 45.0], [2180.0, 45.0], [2210.0, 44.0], [2208.0, 44.0], [2234.0, 44.0], [2224.0, 44.0], [2222.0, 44.0], [2220.0, 44.0], [2228.0, 44.0], [2226.0, 44.0], [2230.0, 44.0], [2218.0, 44.0], [2216.0, 44.0], [2214.0, 44.0], [2212.0, 44.0], [2240.0, 44.0], [2252.0, 43.0], [2206.0, 44.0], [2276.0, 43.0], [2278.0, 43.0], [2284.0, 43.0], [2296.0, 42.0], [2294.0, 43.0], [2202.0, 45.0], [2204.0, 45.0], [2200.0, 44.0], [2198.0, 44.0], [2192.0, 44.0], [2196.0, 44.0], [2194.0, 44.0], [2190.0, 45.0], [2184.0, 44.0], [2186.0, 43.0], [2182.0, 45.0], [2258.0, 44.0], [2266.0, 43.0], [2270.0, 43.0], [2262.0, 43.0], [2264.0, 43.0], [2242.0, 44.0], [2244.0, 44.0], [2246.0, 43.0], [2248.0, 43.0], [2250.0, 43.0], [2178.0, 45.0], [2318.0, 42.0], [2308.0, 43.0], [2338.0, 41.0], [2374.0, 41.0], [2079.0, 47.0], [2145.0, 45.0], [2129.0, 45.0], [2131.0, 46.0], [2133.0, 45.0], [2141.0, 46.0], [2143.0, 45.0], [2137.0, 45.0], [2135.0, 45.0], [2139.0, 45.0], [2125.0, 46.0], [2127.0, 45.0], [2089.0, 46.0], [2075.0, 46.0], [2077.0, 47.0], [2069.0, 47.0], [2067.0, 47.0], [2073.0, 46.0], [2071.0, 47.0], [2163.0, 45.0], [2167.0, 45.0], [2165.0, 45.0], [2161.0, 45.0], [2147.0, 45.0], [2151.0, 45.0], [2149.0, 45.0], [2153.0, 45.0], [2155.0, 45.0], [2159.0, 45.0], [2157.0, 45.0], [2057.0, 47.0], [2059.0, 47.0], [2055.0, 47.0], [2061.0, 47.0], [2063.0, 47.0], [2065.0, 47.0], [2083.0, 46.0], [2087.0, 46.0], [2085.0, 46.0], [2081.0, 46.0], [2111.0, 46.0], [2109.0, 46.0], [2053.0, 47.0], [2049.0, 46.0], [2051.0, 47.0], [2107.0, 46.0], [2097.0, 46.0], [2095.0, 46.0], [2093.0, 46.0], [2091.0, 46.0], [2099.0, 46.0], [2101.0, 46.0], [2103.0, 46.0], [2105.0, 46.0], [2113.0, 45.0], [2121.0, 46.0], [2119.0, 46.0], [2115.0, 46.0], [2117.0, 46.0], [2173.0, 45.0], [2171.0, 44.0], [2169.0, 44.0], [2175.0, 45.0], [2123.0, 46.0], [2239.0, 44.0], [2211.0, 44.0], [2209.0, 44.0], [2235.0, 44.0], [2237.0, 44.0], [2233.0, 44.0], [2231.0, 44.0], [2225.0, 44.0], [2227.0, 44.0], [2223.0, 44.0], [2221.0, 44.0], [2219.0, 44.0], [2213.0, 44.0], [2215.0, 44.0], [2217.0, 44.0], [2205.0, 44.0], [2207.0, 44.0], [2203.0, 45.0], [2273.0, 43.0], [2275.0, 43.0], [2279.0, 42.0], [2283.0, 43.0], [2285.0, 43.0], [2289.0, 43.0], [2291.0, 43.0], [2241.0, 44.0], [2297.0, 43.0], [2201.0, 44.0], [2197.0, 44.0], [2195.0, 45.0], [2193.0, 44.0], [2189.0, 44.0], [2191.0, 45.0], [2199.0, 44.0], [2183.0, 44.0], [2187.0, 45.0], [2185.0, 45.0], [2181.0, 45.0], [2253.0, 43.0], [2255.0, 43.0], [2257.0, 44.0], [2271.0, 43.0], [2269.0, 43.0], [2261.0, 44.0], [2263.0, 43.0], [2245.0, 44.0], [2249.0, 43.0], [2243.0, 43.0], [2177.0, 45.0], [2179.0, 45.0], [2311.0, 43.0], [2415.0, 39.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[541.0, 0.0], [847.0, 44.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2415.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1426.0333333333333, "minX": 1.74125436E12, "maxY": 2076.233333333333, "series": [{"data": [[1.7412546E12, 2011.3], [1.74125622E12, 2030.2333333333333], [1.74125652E12, 2062.6833333333334], [1.7412549E12, 2025.2166666666667], [1.7412552E12, 1993.3166666666666], [1.74125502E12, 2041.5], [1.74125532E12, 2032.5833333333333], [1.74125562E12, 2013.1666666666667], [1.74125592E12, 2021.95], [1.7412567E12, 1903.6166666666666], [1.74125478E12, 2030.0666666666666], [1.74125508E12, 2060.483333333333], [1.74125538E12, 2009.1], [1.74125568E12, 2008.85], [1.7412555E12, 1969.9166666666667], [1.7412558E12, 2005.0333333333333], [1.74125448E12, 2043.0333333333333], [1.7412561E12, 2026.0333333333333], [1.7412564E12, 2076.233333333333], [1.74125526E12, 2004.1833333333334], [1.74125556E12, 2000.5166666666667], [1.74125586E12, 2000.7333333333333], [1.74125616E12, 2044.4833333333333], [1.74125436E12, 1426.0333333333333], [1.74125598E12, 2011.15], [1.74125628E12, 2058.65], [1.74125658E12, 2051.7], [1.74125466E12, 2038.2333333333333], [1.74125496E12, 2044.1666666666667], [1.74125574E12, 1980.3333333333333], [1.74125604E12, 2012.7833333333333], [1.74125472E12, 2038.4333333333334], [1.74125634E12, 2041.2166666666667], [1.74125442E12, 2024.6833333333334], [1.74125664E12, 2036.6], [1.74125646E12, 2054.2166666666667], [1.74125454E12, 2017.4666666666667], [1.74125484E12, 2024.8833333333334], [1.74125514E12, 2036.1], [1.74125544E12, 2010.5166666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7412567E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.43333333333333335, "minX": 1.74125436E12, "maxY": 2076.25, "series": [{"data": [[1.7412546E12, 2011.3], [1.74125622E12, 2030.2333333333333], [1.74125652E12, 2062.6833333333334], [1.7412549E12, 2025.2166666666667], [1.7412552E12, 1993.3166666666666], [1.74125502E12, 2041.5], [1.74125532E12, 2032.5833333333333], [1.74125562E12, 2013.1666666666667], [1.74125592E12, 2022.55], [1.7412567E12, 1903.6166666666666], [1.74125478E12, 2030.0333333333333], [1.74125508E12, 2060.483333333333], [1.74125538E12, 2009.1], [1.74125568E12, 2008.85], [1.7412555E12, 1969.9166666666667], [1.7412558E12, 2005.0333333333333], [1.74125448E12, 2043.0333333333333], [1.7412561E12, 2026.0333333333333], [1.7412564E12, 2076.25], [1.74125526E12, 2004.1833333333334], [1.74125556E12, 2000.5166666666667], [1.74125586E12, 2000.75], [1.74125616E12, 2044.4833333333333], [1.74125436E12, 1423.9333333333334], [1.74125598E12, 2010.55], [1.74125628E12, 2058.65], [1.74125658E12, 2051.7], [1.74125466E12, 2038.2333333333333], [1.74125496E12, 2044.1666666666667], [1.74125574E12, 1980.3333333333333], [1.74125604E12, 2012.7666666666667], [1.74125472E12, 2038.4666666666667], [1.74125634E12, 2041.2166666666667], [1.74125442E12, 2024.6833333333334], [1.74125664E12, 2036.6], [1.74125646E12, 2054.2], [1.74125454E12, 2017.4666666666667], [1.74125484E12, 2024.8833333333334], [1.74125514E12, 2036.1], [1.74125544E12, 2010.5166666666667]], "isOverall": false, "label": "201", "isController": false}, {"data": [[1.74125436E12, 0.43333333333333335]], "isOverall": false, "label": "400", "isController": false}, {"data": [[1.7412567E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7412567E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.43333333333333335, "minX": 1.74125436E12, "maxY": 2076.25, "series": [{"data": [[1.7412567E12, 1.6666666666666667], [1.74125436E12, 0.43333333333333335]], "isOverall": false, "label": "HTTP请求-failure", "isController": false}, {"data": [[1.7412546E12, 2011.3], [1.74125622E12, 2030.2333333333333], [1.74125652E12, 2062.6833333333334], [1.7412549E12, 2025.2166666666667], [1.7412552E12, 1993.3166666666666], [1.74125502E12, 2041.5], [1.74125532E12, 2032.5833333333333], [1.74125562E12, 2013.1666666666667], [1.74125592E12, 2022.55], [1.7412567E12, 1903.6166666666666], [1.74125478E12, 2030.0333333333333], [1.74125508E12, 2060.483333333333], [1.74125538E12, 2009.1], [1.74125568E12, 2008.85], [1.7412555E12, 1969.9166666666667], [1.7412558E12, 2005.0333333333333], [1.74125448E12, 2043.0333333333333], [1.7412561E12, 2026.0333333333333], [1.7412564E12, 2076.25], [1.74125526E12, 2004.1833333333334], [1.74125556E12, 2000.5166666666667], [1.74125586E12, 2000.75], [1.74125616E12, 2044.4833333333333], [1.74125436E12, 1423.9333333333334], [1.74125598E12, 2010.55], [1.74125628E12, 2058.65], [1.74125658E12, 2051.7], [1.74125466E12, 2038.2333333333333], [1.74125496E12, 2044.1666666666667], [1.74125574E12, 1980.3333333333333], [1.74125604E12, 2012.7666666666667], [1.74125472E12, 2038.4666666666667], [1.74125634E12, 2041.2166666666667], [1.74125442E12, 2024.6833333333334], [1.74125664E12, 2036.6], [1.74125646E12, 2054.2], [1.74125454E12, 2017.4666666666667], [1.74125484E12, 2024.8833333333334], [1.74125514E12, 2036.1], [1.74125544E12, 2010.5166666666667]], "isOverall": false, "label": "HTTP请求-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7412567E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.43333333333333335, "minX": 1.74125436E12, "maxY": 2076.25, "series": [{"data": [[1.7412546E12, 2011.3], [1.74125622E12, 2030.2333333333333], [1.74125652E12, 2062.6833333333334], [1.7412549E12, 2025.2166666666667], [1.7412552E12, 1993.3166666666666], [1.74125502E12, 2041.5], [1.74125532E12, 2032.5833333333333], [1.74125562E12, 2013.1666666666667], [1.74125592E12, 2022.55], [1.7412567E12, 1903.6166666666666], [1.74125478E12, 2030.0333333333333], [1.74125508E12, 2060.483333333333], [1.74125538E12, 2009.1], [1.74125568E12, 2008.85], [1.7412555E12, 1969.9166666666667], [1.7412558E12, 2005.0333333333333], [1.74125448E12, 2043.0333333333333], [1.7412561E12, 2026.0333333333333], [1.7412564E12, 2076.25], [1.74125526E12, 2004.1833333333334], [1.74125556E12, 2000.5166666666667], [1.74125586E12, 2000.75], [1.74125616E12, 2044.4833333333333], [1.74125436E12, 1423.9333333333334], [1.74125598E12, 2010.55], [1.74125628E12, 2058.65], [1.74125658E12, 2051.7], [1.74125466E12, 2038.2333333333333], [1.74125496E12, 2044.1666666666667], [1.74125574E12, 1980.3333333333333], [1.74125604E12, 2012.7666666666667], [1.74125472E12, 2038.4666666666667], [1.74125634E12, 2041.2166666666667], [1.74125442E12, 2024.6833333333334], [1.74125664E12, 2036.6], [1.74125646E12, 2054.2], [1.74125454E12, 2017.4666666666667], [1.74125484E12, 2024.8833333333334], [1.74125514E12, 2036.1], [1.74125544E12, 2010.5166666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7412567E12, 1.6666666666666667], [1.74125436E12, 0.43333333333333335]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7412567E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

