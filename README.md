# Drawer
Minimal Drawer React Component

![npm bundle size](https://img.shields.io/bundlephobia/min/@j4jinxx/drawer)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@j4jinxx/drawer)
![npm download](https://img.shields.io/npm/dm/@j4jinxx/drawer.svg)

## Install
    npm i @j4jinxx/drawer


## Import
    import Drawer from '@j4jinxx/drawer';


## Props
|   Name          |  Type  |   Default    | Description |
|-----------------|:-------|:-------------|:------------|
| opened          | bool   | false        | If true, the drawer is open |
| anchor          | string | left         | Drawer placement (left, right, top, bottom) |
| color           | string | #ffffff      | Drawer Color |
| width           | number | 280          | Drawer Width (for anchor `left` & `right`) |
| onClose         | func   | ( ) => { }   | Callback fired when the component requests to be closed |
| children        | node   |              | Drawer children |