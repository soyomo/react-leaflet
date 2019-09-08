# leaflet的一些使用

## 创建地图

```js
var map = L.map('map', { // map是一个dom元素即地图容器
    center: [51.505, -0.09],
    zoom: 13
});
```

## 添加geojson数据到地图上

```L.geoJson(statesData).addTo(map)```

## 创建wms图层

```js
const wms = 'https://demo.boundlessgeo.com/geoserver/ows?'
var wmsLayer = L.tileLayer.wms(wms, wmsOptions).addTo(map);
```

## 使用TMS服务

```js
const TMSUrl = 'https://demo.boundlessgeo.com/geoserver/gwc/service/tms/1.0.0/ne:ne@EPSG:900913@png/{z}/{x}/{y}.png'
var tms_ne = L.tileLayer(TMSUrl, {tms: true}).addTo(map);
```

## 给图层添加交互事件

[https://leafletjs.com/examples/choropleth/](https://leafletjs.com/examples/choropleth/)

## 聚合图层的实现

[聚合图](https://github.com/Leaflet/Leaflet.markercluster)
