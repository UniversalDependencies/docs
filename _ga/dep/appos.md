---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
udver: '2'
---

An appositional modifier of an NP is an NP immediately to the right of the first NP that serves to define or modify that NP. It also includes parenthesized examples.

### Examples: 

_Tá gearán déanta ag Unison, <b>ceardchumann</b> lucht na mbónaí bána, leis an gCoimisiún_ `Unison, the workers' <b>trade union</b>, have made a complaint to the Commission' 

~~~ sdparse
Tá gearán déanta ag Unison , ceardchumann lucht na mbónaí bána , leis an gCoimisiún \n Is complaint made by Unison , trade-union group the collars white  , with the Commission
appos(Unison, ceardchumann)
~~~

_Chas m'athair air sa tábhairne, <b>O' Shea's</b> i nDomhnach Broc_ `My father met him in the pub, <b>O' Shea's</b> in Donnybrook'

~~~ sdparse
Chas m' athair air sa tábhairne , O' Shea's i nDomhnach Broc \n Met my father on-him in-the pub , O' Shea's in Donnybrook []
appos(tábhairne, Shea's)
~~~

_Helena McMahon, <b>duine</b> a bhfuil baint aici le healaín phobail i Luimneach._ `Helena McMahon, <b>someone</b> who is involved in community art in Limerick'

~~~ sdparse
Helena McMahon, duine a bhfuil baint aici le healaín phobail i Luimneach. \n Helena McMahon, person who there_is part at_her with art of_community in Limerick.
appos(Helena, duine)
~~~

In cases where a date string forms a separate clause (potentially introduced by punctuation), the `appos` label is preferred for the head of the string. Subsequent tokens that are part of the string are attached as `flat`. 

_Tá an spriocdháta seo a leanas leagtha amach d'iarratais ar chabhair dheontais: <b>16</b> Eanáir 2003._ `The following closing date has been set for applications for grant aid: <b>16</b> January 2003.'

~~~ sdparse
Tá an spriocdháta seo a leanas leagtha amach d'iarratais ar chabhair dheontais: 16 Eanáir 2003. \n Is the closing_date this that will_follow laid out for_applications on aid of_grant: 16 January 2003.
appos(spriocdháta, 16)
flat(16, Eanáir)
flat(16, 2003.)
~~~
