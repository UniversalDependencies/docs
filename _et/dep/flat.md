---
layout: relation
title: 'flat'
shortdef: 'flat multiword expression'
udver: '2'
---

The dependency relation 'flat' is used for exocentric (headless) semi-fixed MWEs like names (Arvo Pärt), dates and foreign phrases. 

~~~ sdparse
Arvo Pärt
flat(Pärt-2, Arvo-1)
~~~

~~~ sdparse
entry level kaamerate hinnad \n prices for entry level cameras
flat(enty-1, level-2)
flat(enty-8, level-9)
nmod(kaamerate,entry-1)
nmod(cameras,entry-8)
~~~


<!-- Interlanguage links updated Čt lis 12 09:43:26 CET 2020 -->
