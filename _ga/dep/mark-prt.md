---
layout: relation
title:  'mark:prt'
shortdef : 'particle'
udver: '2'
---

The UD Irish subtype `mark:prt' is used for the various particles in Irish, including:

* adverbial particle: _go_
* quantifier particle: _a_
* cleft particle: _a_
* verb particles: _d'_, _a_, and the complementisers _go_, _nach_, _nár_, _gur_, _gurbh_, 
* comparative and superlative particles: _is_, _níos_
* days of the week particle: _Dé_


### Examples

#### Adverbial particle

_Níor tháinig sé <b>go</b> fóill_ `He has not arrived yet'
~~~ sdparse
Níor tháinig sé go fóill \n NEG arrived he PART yet
mark:prt(fóill, go)
~~~ 

#### Quantifier particle

_Ar <b>a</b> seacht a chlog_ `At seven o' clock'

~~~ sdparse
Ar a seacht a chlog \n At PART seven o' clock
mark:prt(seacht, a)
~~~

_Roinn <b>a</b>_ 2 `Division 2'

~~~ sdparse
Roinn a 2 \n Division PART 2
mark:prt(2, a)
~~~

#### Cleft particle

_Is leabhar <b>a </b>thug sí dom_ `It is a book that she gave me'

~~~ sdparse
Is leabhar a thug sí dom \n Is book PART gave she to_me
mark:prt(thug, a)
~~~


#### Verb particles

_Nuair <b>a</b> tógadh na scadáin ar bord_ `When the herring were brought onboard'

~~~ sdparse
Nuair a tógadh na scadáin ar bord \n When PART was_brought the herring on board
mark:prt(tógadh, a)
~~~

_<b>D'</b> inis tú dom_ `You told me'

~~~ sdparse
D' inis tú dom \n PART told you to_me
mark:prt(inis, D')
~~~


#### Complementiser

_Is dóigh liom <b>go</b> raibh siad ann_ `I believe they were there'

~~~ sdparse
Is dóigh liom go raibh siad ann \n Is belief to_me PART were they there
mark:prt(raibh, go)
~~~

#### Superlative particle

_Ba í an difríocht <b>is</b> suntasaí_ `It was the most remarkable difference'

~~~ sdparse
Ba í an difríocht is suntasaí \n Was it the difference most remarkable
mark:prt(suntasaí, is)
~~~












