---
layout: relation
title: 'clf'
shortdef: 'classifier'
udver: '2'
---

In Indonesian, deprel [clf]() is usually used for word _orang_ (for counting person), _ekor_ (for counting animals) and _buah_ (for counting other than person/animal). For example:
* _tiga orang pegawai baru_ "three new employees"
* _lima ekor kucing_ "five cats"
* _dua buah mobil_ "two cars"


~~~ sdparse
tiga orang pegawai baru \n three new employees
nummod(pegawai, tiga)
clf(tiga, orang)
amod(pegawai, baru)
~~~

~~~ sdparse
lima ekor kucing \n five cats
nummod(kucing, lima)
clf(lima, ekor)
~~~

~~~ sdparse
dua buah mobil \n two cars
nummod(mobil, dua)
clf(dua, buah)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:08:56 CEST 2021 -->
