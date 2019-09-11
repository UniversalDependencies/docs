---
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
udver: '2'
---

An adverbial modifier of a word is a (non-clausal) adverb or adverbial phrase (ADVP) that serves to modify the meaning of the word. This includes adjectives which become adverbs when the particle 'go' is placed in front of the adjective i.e. 'go hiontach'.  

### Examples


_<b>Averbs of direction</b>_

_Fuair mé fliú mór a bhí ag dul <b>thart</b>_ 'I caught a bad flu that was going <b>around</b>'

~~~ sdparse
Fuair mé fliú mór a bhí ag dul thart \n Caught I flu big [] was at going around
advmod(dul, thart)
~~~


_<b>Averbs of place</b>_

_Chaithimid an oíche <b>amuigh</b> ar an fharraige_ 'We spent the night <b>out</b> on the sea'

~~~ sdparse
Chaithimid an oíche amuigh ar an fharraige \n 'Spent-we the night out on the sea'
advmod(Chaithimid, amuigh)
~~~

_<b>Adverbs of time</b>_

_Níor tháinig sé go <b>fóill</b>_ 'He hasn't arrived <b>yet</b>'

~~~ sdparse
Níor tháinig sé go fóill \n Not arrived he [] yet
advmod(tháinig, fóill)
~~~

NOTE: Some multi-token temporal constructions which bear this dependency relation are also treated as fixed multiword expressions, e.g.:

_<b>fad</b> a bhí Fianna Fáil ar thaobh an fhreasúra_ '<b>while</b> Fianna Fáil were in opposition'

~~~ sdparse
fad a bhí Fianna Fáil ar thaobh an fhreasúra \n while that were Fianna Fáil on the_side of_the opposition
advmod(bhí, fad)
fixed(fad, a)
~~~

_<b>Adverbs of manner</b>_

 _D'éirigh go <b>hiontach</b> leis_ 'He did very <b>well</b>'

~~~ sdparse
D'éirigh go hiontach leis. \n 'Got_on very well with_him'
advmod(D'éirigh, hiontach)
mark:prt(hiontach, go)
~~~

_<b>Interrogative adverbs</b>_

_<b>Cá</b> raibh na mórmheáin eile go léir idir phoiblí is phríobháideach?_ '<b>Where</b> were all the other main public and private media outlets?'

~~~ sdparse
Cá raibh na mórmheáin eile go léir idir phoiblí is phríobháideach? \n Where was the main-media other all-together both public and private
advmod(raibh, Cá)
~~~
