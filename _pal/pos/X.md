---
layout: postag
title: 'X'
shortdef: '<shortdef>'
udver: '2'
---

### Definition
The Middle Persian manuscripts contain errors of various sorts producing a high number of non-tokens that cannot be assigned a part-of-speech (see [dep]()).

### Examples

- misspelling lkyn in the manuscript for lʿyn (i.e. *pēš*): "to the presence of Yōšt"
~~~ sdparse
tā lkyn pēš yōšt \n up_to ERROR front Yōšt
case(pēš, tā)
dep(pēš, lkyn)
nmod(pēš, yōšt)
~~~
