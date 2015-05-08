---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
---

An appositional modifier of an NP is an NP immediately to the right of the first NP that serves to define or modify that NP. It also includes parenthesized examples.

### Examples: 

_Tá gearán déanta ag Unison , <b>ceardchumann</b> lucht na mbónaí bána , leis an gCoimisiún_ `Unison, the workers' <b>trade union</b>, have made a complaint to the Commission' 

~~~ sdparse
Tá gearán déanta ag Unison , ceardchumann lucht na mbónaí bána , leis an gCoimisiún \n There is a complain made by Unison , the white-collar trade union , to the Commission
appos(Unison, ceardchumann)
appos(Unison, union)
~~~

_Chas m'athair air sa tábhairne, <b>O' Shea's</b> i nDomhnach Broc_ `My father met him in the pub, <b>O' Shea's</b> in Donnybrook'

~~~ sdparse
Chas m'athair air sa tábhairne, <b>O' Shea's</b> i nDomhnach Broc \n My father met him in the pub, <b>O' Shea's</b> in Donnybrook
appos(tábhairne, Shea's)
appos(pub, Shea's)
~~~
