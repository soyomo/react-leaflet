/*
 * @Description: leaflet的页面
 * @Author: scf
 * @Date: 2019-09-07 20:20:01
 * @LastEditors: scf
 * @LastEditTime: 2019-09-08 10:48:09
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
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.leafLetMap);

    L.marker([51.5, -0.09]).addTo(this.leafLetMap)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
    const marker = L.marker([51.5, -0.09]).addTo(this.leafLetMap);
    console.log(marker)
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
