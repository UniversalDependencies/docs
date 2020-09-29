---
layout: relation
title: 'flat:foreign'
shortdef: 'flat foreign'
udver: '2'
---

This label is used for foreign words in a linear sequence or when foreign text is incorporated into the sentence. 

### Example

_Ó Riain faoi ina leabhar The <b>Pope's Green Island</b> `Ó Riain in his book The <b>Pope's Green Island</b>'_

~~~ sdparse
Ó Riain faoi ina leabhar The Pope's Green Island \n Ó Riain about in-his book The Pope's Green Island
appos(leabhar, The)
flat:foreign(The, Pope's)
flat:foreign(The, Green)
flat:foreign(The, Island)
~~~ 

_a thugann siad do Bhaile Átha Cliath agus Béal Feirste, 'in <b>the</b> <b>two</b> <b>parts</b> <b>of</b> <b>this</b> <b>island</b>'._  `that they give to Dublin and Belfast, 'in <b>the</b> <b>two</b> <b>parts</b> <b>of</b> <b>this</b> <b>island</b>''

~~~ sdparse
a thugann siad do Bhaile Átha Cliath agus Béal Feirste, ' in the two parts of this island ' \n that give they to Dublin [] [] and Belfast [], ' in the two parts of this island '
flat:foreign(in, the)
flat:foreign(in, two)
flat:foreign(in, parts)
flat:foreign(in, of)
flat:foreign(in, this)
flat:foreign(in, island)
~~~ 

_go mbeadh <b>'half a batallion of IRA men'</b> ann ar son Shinn Féin._ `that there would be <b>'half a batallion of IRA men'</b> there on behalf of Sinn Féin.


~~~ sdparse
ROOT go mbeadh ' half a batallion of IRA men ' ann ar son Shinn Féin. \n ROOT that would_be ' half a batallion of IRA men ' in_it on behalf of_Sinn Féin
advcl (ROOT, mbeadh)
nsubj(mbeadh, half) 
flat:foreign(half, a)
flat:foreign(half, batallion)
flat:foreign(half, of)
flat:foreign(half, IRA)
flat:foreign(half, men)
~~~ 
<!-- Interlanguage links updated Út zář 29 18:41:23 CEST 2020 -->
