/*
 * @Description: leaflet的页面
 * @Author: scf
 * @Date: 2019-09-07 20:20:01
 * @LastEditors: scf
 * @LastEditTime: 2019-09-09 07:20:56
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import '@styles/leaflet.less'

import L from 'leaflet'

export default class app extends Component {
  constructor(props) {
    super(props);
    this.leafLetDom = React.createRef()
    this.leafLetMap = {}
    this.state = {

    }
  }
  /**
   * @description: 组件即将挂载的时候调用的方法
   */
  componentWillMount() {
    console.log('componentWillMount 的 生命周期')
  }
  /**
   * @description: 已经挂载的时候调用的方法
   */
  componentDidMount() {
    console.log('componentDidMount 的 生命周期')
    this.leafLetMap = L.map(this.leafLetDom.current).setView([51.505, -0.09], 13);
    this.addlayer(this.leafLetMap)
    this.addCircle()
    this.addMarker()
    this.addPopup()
    const marker = L.marker([51.5, -0.09]).addTo(this.leafLetMap);
    console.log(marker)
  }
  addlayer(map) {
    // https://api.tiles.mapbox.com/v4/mapbox.light/4/2/6.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw
    // pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw
    // pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2p0MG01MXRqMW45cjQzb2R6b2ptc3J4MSJ9.zA2W0IkI0c6KaAhJfk9bWg
    // mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA'
    const mapboxToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
    L.tileLayer(`https://api.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=${mapboxToken}`, {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: mapboxToken,
    }).addTo(map);
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    // }).addTo(this.leafLetMap);
  }
  addMarker() {
    L.marker([51.5, -0.09]).addTo(this.leafLetMap)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  }
  addCircle(map) {
    const circle = L.circle([51.508, -0.11], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500,
    }).addTo(this.leafLetMap);
  }
  addPopup() {
    const marker = L.marker([51.5, -0.09]).addTo(this.leafLetMap);
  }
  addIcon() {
    const greenIcon = L.icon({
      iconUrl: 'leaf-green.png',
      shadowUrl: 'leaf-shadow.png',

      iconSize: [38, 95], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });
  }
  /**
   * @description: 周期
   */
  componentDidCatch() {
    ('componentDidCatch 的 生命周期')
  }
  /**
   * @description: 虚拟dom数据更新的时候调用的方法
   */
  componentDidUpdate() {
    console.log('componentDidUpdate 的 生命周期')
  }
  render() {
    return (
      <div className="leafLetMap"
        ref={this.leafLetDom}
      />
    )
  }
}
