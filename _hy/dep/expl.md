---
layout: relation
title:  'expl'
shortdef : 'expletive'
---

This relation captures expletive or pleonastic nominals.The demonstrative pronouns _սա_ or _դա_ can be used as an "extra" subject in the
sentence, where the real subject is expressed as a clause (csubj). 
~~~ sdparse
Դա էլ հենց վատ է, որ ընտանիքներով են եկել : \n That is just bad, that they have come with families .
expl(վատ, Դա)
expl(bad, That)
csubj(եկել, վատ)
csubj(come, bad)
~~~
