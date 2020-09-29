---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
udver: '2'
---

An adverbial clause modifier is a clause which acts as an adverb and modifies a verb or other predicate (adjective, etc.), as a modifier not as a core complement. This includes temporal, consequence, conditional and purpose clauses. The dependent must be clausal (or else it is an [advmod]()) and the head is the main predicate of the clause. 

The adverbial clause has a subject and a verb. The head of the adverbial clause is dependent on the head of the clause which it is modifying, usually attached to a verb. It is an adjunct so can be removed from the sentence and sentence does not become agrammatical. 

### Examples

_<b>Temporal</b>_

_Nuair a <b>bhí</b> siad ag teacht ar ais, chonaic siad é_ 'When they <b>were</b> coming back, they saw it'

~~~ sdparse
Nuair a bhí siad ag teacht ar ais, chonaic siad é \n When [] were they at coming on back, saw they it
advcl(chonaic, bhí)
~~~

_Ach nuair a <b>bhíodar</b> ag dul aníos casadh mairnéalach leo_ `But when <b>they were</b> going down, they met sailors'

~~~ sdparse
Ach nuair a bhíodar ag dul aníos casadh mairnéalach leo \n But when [] were-they at going down  were-met sailors with-them
advcl(casadh, bhíodar)
~~~

NOTE: The word 'agus', usually meaning 'and', can also introduce a subordinate clause which can in turn function as a temporal adverb. 

_Agus <b>mé</b> ag rá na bhfocal úd i gCearnóg Pheadair, <b>bhí</b> fhios agam cheana féin go..._ `<b>While</b> I was speaking in Saint Peter's Square, I already <b>knew</b> that...'

~~~ sdparse
Agus mé ag rá na bhfocal úd i gCearnóg Pheadair, bhí fhios agam cheana féin go... \n And I at saying of_the word those in Square Peter's, was knowledge at_me already itself that...
advcl(bhí, mé)
~~~

_<b>Conditional</b>_

Má <b>imríonn</b> siad mar faoi is féidir leo, is dóigh liom go bhfillfidh siad ar Staid Semple 'If they <b>play</b> as well as they can, I believe they will return to Semple Stadium'

~~~ sdparse
Má imríonn siad mar faoi is féidir leo , is dóigh liom go bhfillfidh siad ar Staid Semple \n If play they as about be ability with-them , be belief with-me that will-return they to Stadium Semple
advcl(dóigh, imríonn)
~~~

_Ní thugtar íocaíochtaí mura <b>n-iarrtar</b> iad_ `Payments are not given if they are not <b>asked</b> for'

~~~ sdparse
Ní thugtar íocaíochtaí mura n-iarrtar iad \n Not given payments if-not requested them
advcl(thugtar, n-iarrtar)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:16 CEST 2020 -->
