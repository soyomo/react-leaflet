/*
 * @Description: leaflet的页面
 * @Author: scf
 * @Date: 2019-09-07 20:20:01
 * @LastEditors: scf
 * @LastEditTime: 2019-09-07 23:16:21
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class app extends Component {
  constructor(props) {
    super(props);
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
  }
  /**
   * @description: 暂时不知道是哪个生命周期
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
      <div className="map">
        这里是地图
      </div>
    )
  }
}
