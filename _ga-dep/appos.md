---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
---

An appositional modifier of an NP is an NP immediately to the right of the first NP that serves to define or modify that NP. It also includes parenthesized examples.

### Examples: 

_Tá gearán déanta ag Unison, <b>ceardchumann</b> lucht na mbónaí bána, leis an gCoimisiún_ `Unison, the workers' <b>trade union</b>, have made a complaint to the Commission' 

~~~ sdparse
Tá gearán déanta ag Unison , ceardchumann lucht na mbónaí bána , leis an gCoimisiún \n Is complaint made by Unison , trade_union group the collars white  , with the Commission
appos(Unison, ceardchumann)
~~~

_Chas m'athair air sa tábhairne, <b>O' Shea's</b> i nDomhnach Broc_ `My father met him in the pub, <b>O' Shea's</b> in Donnybrook'

~~~ sdparse
Chas m' athair air sa tábhairne , O' Shea's i nDomhnach Broc \n Met my father on him in_the pub , O' Shea's in Donnybrook []
appos(tábhairne, Shea's)
~~~
