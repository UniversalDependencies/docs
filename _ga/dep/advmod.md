---
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
udver: '2'
---

An adverbial modifier of a word is a (non-clausal) adverb or adverbial phrase (ADVP) that serves to modify the meaning of the word. This includes adjectives which become adverbs when the particle 'go' is placed in front of the adjective i.e. 'go hiontach'.  

## Examples


### Averbs of direction

_Fuair mé fliú mór a bhí ag dul <b>thart</b>_ `I caught a bad flu that was going <b>around</b>'

~~~ sdparse
Fuair mé fliú mór a bhí ag dul thart \n Caught I flu big [] was at going around
advmod(dul, thart)
~~~


### Averbs of place

_Chaithimid an oíche <b>amuigh</b> ar an fharraige_ `We spent the night <b>out</b> on the sea'

~~~ sdparse
Chaithimid an oíche amuigh ar an fharraige \n 'Spent-we the night out on the sea'
advmod(Chaithimid, amuigh)
~~~

### Adverbs of time 

_Níor tháinig sé go <b>fóill</b>_ `He hasn't arrived <b>yet</b>'

~~~ sdparse
Níor tháinig sé go fóill \n Not arrived he [] yet
advmod(tháinig, fóill)
~~~

_chuala mé iad ag maíomh go <b>minic</b>_ 'I heard them stating <b>often</b>'

~~~ sdparse
chuala mé iad ag maíomh go minic \n heard me them at stating [] often
advmod(maíomh, minic)
~~~


NOTE: Some temporal constructions which bear this dependency relation are also treated as fixed multiword expressions, e.g.:

_<b>fad</b> a bhí Fianna Fáil ar thaobh an fhreasúra_ `<b>while</b> Fianna Fáil were in opposition'

~~~ sdparse
fad a bhí Fianna Fáil ar thaobh an fhreasúra \n while that were Fianna Fáil on the_side of_the opposition
advmod(bhí, fad)
fixed(fad, a)
~~~

### Adverbs of manner

 _D'éirigh go <b>hiontach</b> leis_ `He did very <b>well</b>'
 
 Despite having a POS tag of ADJ, when used with the particle 'go' an adjective takes the role of an adverb.

~~~ sdparse
D'éirigh go hiontach leis. \n 'Got_on very well with_him'
advmod(D'éirigh, hiontach)
mark:prt(hiontach, go)
~~~

### Interrogative adverbs

_<b>Cá</b> raibh na mórmheáin eile go léir idir phoiblí is phríobháideach?_ `<b>Where</b> were all the other main public and private media outlets?'

~~~ sdparse
Cá raibh na mórmheáin eile go léir idir phoiblí is phríobháideach? \n Where was the main-media other all-together both public and private
advmod(raibh, Cá)
~~~

_Conas atá sé?_ `<b>How</b> is he?

~~~ sdparse
Conas atá sé? \n How that_is he?
advmod(atá, Conas)
~~~

_Ní gnó don Stát é a threorú dóibh <b>conas</b> ba chóir dóibh préamhú as an nua._ `It’s not the responsibility of the State to guide them in <b>how</b> they should get re-established.

~~~ sdparse
Ní gnó don Stát é a threorú dóibh conas ba chóir dóibh préamhú as an nua. \n Is_not affair for the State it to guiding to_them how [] should to_them establish from the new.
advmod(chóir, conas)
ccomp(threorú, chóir)
csubj:cop(gnó, threorú)
~~~

### General adverbs

_Rinne an fear comharthaí agus é ag labhairt ionas go dtuigfí a scéal._ 'The man made signals while he was speaking so that his story would be understood.'

~~~ sdparse
Rinne an fear comharthaí agus é ag labhairt ionas go dtuigfí a scéal. \n Made the man signals while he at speaking so that understood his story
advmod(dtuigfí, ionas)
~~~

Rinne an fear comharthaí agus é ag labhairt ionas go dtuigfí a scéal
