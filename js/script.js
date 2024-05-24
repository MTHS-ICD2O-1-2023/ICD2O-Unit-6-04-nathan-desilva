// Copyright (c) 2024 Nathan De Silva All rights reserved
//
// Created by: Nathan De Silva
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {
  // this calculates volume of a sphere

  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get('radius')

  // process
  const volume = ((4 / 3) * Math.PI) * radius ** 3

  // output
  document.getElementById('radius').innerHTML = "The radius is: " + radius + ' mm'
  document.getElementById('volume').innerHTML = 'The volume is: ' + volume.toFixed(2) + ' mm³'
}
