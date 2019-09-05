---
layout: relation
title: 'flat:foreign'
shortdef: 'flat foreign'
udver: '2'
---

This label is used for foreign words in a linear sequence or when foreign text is incorporated into the sentence. 

### Example

_Ó Riain faoi ina leabhar The <b>Pope's Green Island</b> 'Ó Riain in his book The <b>Pope's Green Island</b>'_

~~~ sdparse
Ó Riain faoi ina leabhar The Pope's Green Island \n Ó Riain about in-his book The Pope's Green Island
appos(leabhar, The)
flat:foreign(Ó, Pope's)
flat:foreign(Ó, Green)
flat:foreign(Ó, Island)
~~~ 
