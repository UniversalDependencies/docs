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
flat:foreign(The, Pope's)
flat:foreign(The, Green)
flat:foreign(The, Island)
~~~ 

_a thugann siad do Bhaile Átha Cliath agus Béal Feirste, 'in <b>the</b> <b>two</b> <b>parts</b> <b>of</b> <b>this</b> <b>island</b>'._ 'that they give to Dublin and Belfast, 'in <b>the</b> <b>two</b> <b>parts</b> <b>of</b> <b>this</b> <b>island</b>''

~~~ sdparse
a thugann siad do Bhaile Átha Cliath agus Béal Feirste, ' in the two parts of this island ' \n that give they to Dublin [] [] and Belfast [], ' in the two parts of this island '
flat:foreign(in, the)
flat:foreign(in, two)
flat:foreign(in, parts)
flat:foreign(in, of)
flat:foreign(in, this)
flat:foreign(in, island)
~~~ 
