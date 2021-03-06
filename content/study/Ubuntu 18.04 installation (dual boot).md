---
ads: true
date: "2020-02-23T00:00:00Z"
excerpt: null
image:
  feature: null
  teaser: teaser/study002.jpg
  thumb: null
modified: null
sitemap:
  changefreq: daily
  priority: 1
tags:
- ubuntu
title: Ubuntu 18.04 installation (dual boot)
toc: true
toc_icon: cog
toc_label: Table of Contents
---

## Ubuntu 18.04 설치하기(+ Windows10 와 듀얼 부트로 사용하기 + 매번 설명하기 귀찮아 정리하는)
---
준비물:
* Ubuntu 18.04 설치 이미지가 구워진 USB
* Windows10 이 설치된 PC(or laptop)
  - 미리 설치할 Partition 확보해두기, 거거익선이지만 최소 50GB 이상 확보해 두는 것을 추천. 

Ubuntu 를 설치하는 이유는 개발하기 편하기 때문이다. 여러 문서 업무의 경우 Windows10 을 이용하는게 편하다. 하지만 개발업무의 경우 많은 라이브러리를 사용해야 하고, 외부장치 사용이 잦은데, 이러한 부분은 Windows10에서 까다로운 부분이 (경험상) 많다. 
Windows10과 달리 Ubuntu(Linux)를 사용하여 개발하는 경우, 라이브러리 설치 및 삭제가 쉽고 외부장치 접근(을 해놓은 소스들을 갖다 쓰는 것)이 쉽다.

## 설치 방법

### 1. BIOS 설정
각각의 PC or laptop 에 따라 설정 방법은 다르겠지만,
USB 의 저장된 Ubuntu 18.04 의 설치 이미지로 부팅이 될 수 있도록 BIOS 설정을 변경해준다.

<a href="https://drive.google.com/uc?export=view&id=1FznqVktC2j0QlhOSPIKII0eUtsUFfAMv"><img src="https://drive.google.com/uc?export=view&id=1FznqVktC2j0QlhOSPIKII0eUtsUFfAMv" style="width: 500px; max-width: 100%; height: auto" title="Click for the larger version." /></a>

<a href="https://drive.google.com/uc?export=view&id=1FvpgvdWhXAGbne9facMSeOUxNnpxd-81"><img src="https://drive.google.com/uc?export=view&id=1FvpgvdWhXAGbne9facMSeOUxNnpxd-81" style="width: 500px; max-width: 100%; height: auto" title="Click for the larger version." /></a>

### 2. Try Ubuntu without installation
Ubuntu 설치 이미지로 부팅이 되면 아래와 같은 옵션을 선택할 수 있다.
바로 설치를 해도 무방하지만, 인터넷 연결 확인을 위해 __Try Ubuntu without installation__ 을 선택하여 Ubuntu 를 실행한다.

<a href="https://drive.google.com/uc?export=view&id=1FrW38QJ585iJZXaxhfU-5QQ27Fu6WZ-r"><img src="https://drive.google.com/uc?export=view&id=1FrW38QJ585iJZXaxhfU-5QQ27Fu6WZ-r" style="width: 500px; max-width: 100%; height: auto" title="Click for the larger version." /></a>

실행하면 아래와 같은 로딩화면이 뜬 후, Ubuntu가 실행된다.

<a href="https://drive.google.com/uc?export=view&id=1FpmQYBwj8O72BP7733PnUeuqZrxuYYQ0"><img src="https://drive.google.com/uc?export=view&id=1FpmQYBwj8O72BP7733PnUeuqZrxuYYQ0" style="width: 500px; max-width: 100%; height: auto" title="Click for the larger version." /></a>

### 3. Ubuntu 설치 시작
Ubuntu 설치를 시작하기 전, 네트워크 연결 상태를 먼저 확인한다. 네트워크 연결이 된 상태에서 설치를 진행할 경우, 설치와 함께 업데이트 및 third-party software 설치가 가능하다.

<a href="https://drive.google.com/uc?export=view&id=1F_dRCquOZJX0jBbAHNgpZFyFt5ypveT-"><img src="https://drive.google.com/uc?export=view&id=1F_dRCquOZJX0jBbAHNgpZFyFt5ypveT-" style="width: 500px; max-width: 100%; height: auto" title="Click for the larger version." /></a>

네트워크 확인 후, 바탕화면에 있는 __Install Ubuntu 18.04.3 LTS__ 아이콘을 더블클릭하여 실행한다.
먼저 설치 언어를 선택해야 하는데, 개발 환경으로 사용하기에는 영어(English)가 (경험상) 편하다. __English__ 선택 후, __Continue__ 클릭.

<a href="https://drive.google.com/uc?export=view&id=1FYbJVCSNtCC2FsEXnkGhYmDAKd38EXXs"><img src="https://drive.google.com/uc?export=view&id=1FYbJVCSNtCC2FsEXnkGhYmDAKd38EXXs" style="width: 500px; max-width: 100%; height: auto" title="Click for the larger version." /></a>

다음으로 Keyboard 레이아웃을 선택하는 화면이 나오는데, 대충 아래와 같이 선택하면 된다.
이거 설정해도 한글 입력은 되지 않는다...

<a href="https://drive.google.com/uc?export=view&id=1FX-wWbzV_A4DXN_FkNzRwkGh6WCuqyI9"><img src="https://drive.google.com/uc?export=view&id=1FX-wWbzV_A4DXN_FkNzRwkGh6WCuqyI9" style="width: 500px; max-width: 100%; height: auto" title="Click for the larger version." /></a>

다음으로 업데이트 및 third-party software 설치.
아래와 같이 설정해준다. 인터넷이 안되는 환경이라면 선택이 불가하다.

<a href="https://drive.google.com/uc?export=view&id=1FUUxe_mJoaVNobxQ395WpPo4EghonzQK"><img src="https://drive.google.com/uc?export=view&id=1FUUxe_mJoaVNobxQ395WpPo4EghonzQK" style="width: 500px; max-width: 100%; height: auto" title="Click for the larger version." /></a>

### 4. Partition 설정
다음으로 중요한 partition 설정이다. 잘못하면 설치된 Windows OS가 날아가 버릴 수 있다.
아래 사진과 같이 __Something else__ 를 클릭하고 __Continue__ 를 클릭.

<a href="https://drive.google.com/uc?export=view&id=1FPSz98BDfD2fCfBb1AjR_2Tgvci2O8bL"><img src="https://drive.google.com/uc?export=view&id=1FPSz98BDfD2fCfBb1AjR_2Tgvci2O8bL" style="width: 500px; max-width: 100%; height: auto" title="Click for the larger version." /></a>

그리고 Windows10 에서 __컴퓨터 관리__ >> __저장소__ >> __디스크 관리__ 에서 미리 확보해 둔 partition (free space) 을 클릭하고 좌측 하단에 (+) 버튼을 클릭한다. 그리고 __Mount point__ 를 __(/)root__ 로 설정하고 __OK__ 를 클릭한다. 해당 partition 위치에 Ubuntu 가 설치되도록 설정하는 것이다. 좀 더 고급지게 설정을 변경해야 하는 사용자는 이 글을 읽을 필요가 없겠지...

<a href="https://drive.google.com/uc?export=view&id=1FHUUqziuQsfij5G5d6GN0KxAfkNe9kf7"><img src="https://drive.google.com/uc?export=view&id=1FHUUqziuQsfij5G5d6GN0KxAfkNe9kf7" style="width: 500px; max-width: 100%; height: auto" title="Click for the larger version." /></a>

설정 된 모습.

<a href="https://drive.google.com/uc?export=view&id=1FBBELFwHCC5HLz-BIxYUkgh6NmIWb60W"><img src="https://drive.google.com/uc?export=view&id=1FBBELFwHCC5HLz-BIxYUkgh6NmIWb60W" style="width: 500px; max-width: 100%; height: auto" title="Click for the larger version." /></a>

확인창이 뜨면 (Windows OS가 날아갈 수 있으니) 다시 한번 확인해 주자. 

<a href="https://drive.google.com/uc?export=view&id=1F7yiMurV4xmG_YH6cEKcJEoku_-TW97U"><img src="https://drive.google.com/uc?export=view&id=1F7yiMurV4xmG_YH6cEKcJEoku_-TW97U" style="width: 500px; max-width: 100%; height: auto" title="Click for the larger version." /></a>

### 5. 설치 마무리
나라 설정...

<a href="https://drive.google.com/uc?export=view&id=1F7pIm4oeausSawubHh26PZLBhtd5YG8z"><img src="https://drive.google.com/uc?export=view&id=1F7pIm4oeausSawubHh26PZLBhtd5YG8z" style="width: 500px; max-width: 100%; height: auto" title="Click for the larger version." /></a>

비밀번호 설정...
보안이 신경쓰이지 않는다면 짧아야 편하다.

<a href="https://drive.google.com/uc?export=view&id=1Efw06WmVrMySMCIC8oLhN-1lnYAEGFTR"><img src="https://drive.google.com/uc?export=view&id=1Efw06WmVrMySMCIC8oLhN-1lnYAEGFTR" style="width: 500px; max-width: 100%; height: auto" title="Click for the larger version." /></a>

기다림...

<a href="https://drive.google.com/uc?export=view&id=1EUKMl4Ohlu9EahloIfQxNJLUS8qBeraN"><img src="https://drive.google.com/uc?export=view&id=1EUKMl4Ohlu9EahloIfQxNJLUS8qBeraN" style="width: 500px; max-width: 100%; height: auto" title="Click for the larger version." /></a>

### 끝
설치가 종료되어 컴퓨터가 부팅되면, Ubuntu 를 바로 사용할 수 있다.
만약 Ubuntu 가 실행되지 않고 __Try Ubuntu without installation__ 이 뜬다면, BIOS 설정을 다시 원래대로 되돌려 주면 된다.
