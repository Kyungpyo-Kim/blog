---
ads: true
date: "2020-03-13T00:00:00Z"
excerpt: null
image:
  feature: null
  teaser: teaser/400x250.jpg
  thumb: null
modified: null
sitemap:
  changefreq: daily
  priority: 1
tags:
- ubuntu
title: Ubuntu 18.04 - Swap Caps lock and Ctrl
toc: true
toc_icon: cog
toc_label: Table of Contents
---

## Ubuntu 18.04, Swap Caps lock and Ctrl - No installation

1. Open **~/.Xmodmap**

    ```bash
    gedit ~/.Xmodmap
    ```

    Contenst of the **~/.Xmodmap**:
    ```code
    keycode 37 = Caps_Lock NoSymbol Caps_Lock
    keycode 66 = Control_L NoSymbol Control_L
    ```

2. Modify:

    ```code
    keycode 66 = Caps_Lock NoSymbol Caps_Lock
    keycode 37 = Control_L NoSymbol Control_L
    ```

3. Save the file and apply config

    ```bash
    xmodmap ~/.Xmodmap
    ```
