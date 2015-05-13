---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
---

An adverbial clause modifier is a clause which modifies a verb or other predicate (adjective, etc.), as a modifier not as a core complement. This includes temporal, consequence, conditional and purpose clauses. The dependent must be clausal (or else it is an [advmod]()) and the head is the main predicate of the clause.

_Nuair a <b>bhí</b> siad ag teacht ar ais, chonaic siad é_ 'When they <b>were<\b> coming back, they saw it'

~~~ sdparse
Nuair a bhí siad ag teacht ar ais, chonaic siad é \n When [] were they at coming on back, saw they it
advcl(chonaic, bhí)
~~~

Má <b>imríonn</b> siad mar faoi is féidir leo, is dóigh liom go bhfillfidh siad ar Staid Semple 'If they <b>play</b> as well as they can, I believe they will return to Semple Stadium'

~~~ sdparse
Má imríonn siad mar faoi is féidir leo, is dóigh liom go bhfillfidh siad ar Staid Semple \n If play they as about be ability with-them, be belief with-me that return they to Stadium Semple
advcl(dóigh, imríonn)
~~~

~~~ sdparse
Ní thugtar íocaíochtaí mura n-iarrtar iad \n Payments are not given if they are not asked for
advcl(thugtar, n-iarrtar)
advcl(given, asked)
~~~

~~~ sdparse
Ach nuair a bhíodar ag dul aníos casadh mairnéalach leo \n But when they were going down, they met sailors
advcl(casadh, bhíodar)
advcl(met, were)
~~~
