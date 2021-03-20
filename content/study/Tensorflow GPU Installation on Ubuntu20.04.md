---
ads: true
date: "2021-03-20"
excerpt: null
image:
  feature: null
  teaser: null
  thumb: null
modified: null
sitemap:
  changefreq: daily
  priority: 1
tags:
- python
- ubuntu
- tensorflow
title: Ubuntu20.04 에 Tensorflow GPU 설치 1분 설명
toc: true
toc_icon: cog
toc_label: Table of Contents
---

Tensorflow GPU 설치를 위해서는 CUDA, cuDNN 버전을 꼭 확인해야 한다.

1. 그래서 먼저 자신의 PC에 맞는 CUDA 를 설치하고 설치된 버전을 확인한다.
2. 그리고 CUDA 버전과 사용할 Tensorflow GPU 버전에 맞는 cuDNN 을 설치해야 한다.

    예를 들어 내가 설치한 CUDA는 버전이 10.1 이고 사용한 Tensorflow GPU 버전은 2.3.0 이기 때문에 cuDNN은 7.6.5를 설치한다.

    - Tensorflow GPU 버전 확인 방법: [Build from source | TensorFlow](https://www.tensorflow.org/install/source#tested_build_configurations)

    - CUDA 버전에 맞는 cuDNN 다운로드를 위한 cuDNN Archive: [cuDNN Archive](https://developer.nvidia.com/rdp/cudnn-archive)


위에 방법에 따라 차근 차근 설치하면 되고, 터미널에 아래의 명령어들을 입력하여 설치할 수 있다.

- **CUDA 설치**

    ```bash
    ## install cuda
    sudo apt install nvidia-cuda-toolkit
    nvcc -V ## check cuda version, 10.1
    whereis cuda ## cuda: /usr/lib/cuda /usr/include/cuda.h
    ```

- **cuDNN 설치**

    ```bash
    ## install cudnn
    tar -xvzf cudnn-10.1-linux-x64-v7.6.5.32.tgz ## need tensorflow version check
    sudo cp cuda/include/cudnn.h /usr/lib/cuda/include/
    sudo cp cuda/lib64/libcudnn* /usr/lib/cuda/lib64/

    sudo chmod a+r /usr/lib/cuda/include/cudnn.h
    sudo chmod a+r /usr/lib/cuda/lib64/libcudnn*

    echo 'export LD_LIBRARY_PATH=/usr/lib/cuda/lib64:$LD_LIBRARY_PATH' >> ~/.bashrc
    echo 'export LD_LIBRARY_PATH=/usr/lib/cuda/include:$LD_LIBRARY_PATH' >> ~/.bashrc
    source ~/.bashrc
    ```

- **Tensorflow 설치**

    ```bash
    # pip install tensorflow-gpu==2.1.0 ## need version check
    pip3 install tensorflow-gpu==2.3.0 ## need version check

    python3
    >>> import tensorflow as tf
    >>> tf.config.list_physical_devices("GPU")
    ```