---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
---

An adverbial clause modifier is a clause which modifies a verb or other predicate (adjective, etc.), as a modifier not as a core complement. This includes temporal, consequence, conditional and purpose clauses. The dependent must be clausal (or else it is an [advmod]()) and the dependent is the main predicate of the clause.


~~~ sdparse
Nuair a bhí siad ag teacht ar ais, chonaic siad é \n When they were coming back, they saw it
advcl(chonaic, bhí)
advcl(saw, When)
~~~


~~~ sdparse
Má imríonn siad mar faoi is féidir leo, is dóigh liom go bhfillfidh siad ar Staid Semple \n If they play as well as they can, I believe they will return to Semple Stadium
advcl(dóigh, imríonn)
advcl(believe, play)
~~~

~~~ sdparse
Ní thugtar íocaíochtaí mura n-iarrtar iad \n Payments are not given if they are not asked for
advcl(thugtar, n-iarrtar)
advcl(given, asked)
~~~

~~~ sdparse
Ach nuair a bhíodar ag dul aníos casadh mairnéalach leo \n But when they were going down, they met sailors
advcl(casadh, bhíodar)
advcl(met, going)
~~~
