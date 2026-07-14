---
layout: relation
title: 'case'
shortdef: '<shortdef>'
udver: '2'
---

Middle Persian makes frequent use of prepositions. There is one well-established postposition (*rāy* 'for'), the existence of other postpositions and circumpositions is debatable.
<br>The adposition usually delimits the adpositional phrase. Only long dependents (e.g. relative clauses) may be dislocated to after the adpositional phrase.

- "(It) says about Dahāg whom (they) also call Bēwarasp (that...)"
~~~ sdparse
dahāg kē bēwarasp =iz xwānēnd rāy gōwēd \n Dahāg who Bēwarasp also call.3pl about says
case(dahāg, rāy)
obl(gōwēd, dahāg)
mark(xwānēnd, kē)
acl:relcl(dahāg, xwānēnd)
~~~

- "the good deed which someone does for that one who has just died"
~~~ sdparse
kirbag ī kas ōy rāy kunēd kē az gētī bē šud ēstēd \n good_deed which someone that for does who from world out went stands
mark(kunēd, ī)
nsubj(kunēd, kas)
obl(kunēd, ōy)
case(ōy, rāy)
acl:relcl(kirbag, kunēd)
mark(šud, kē)
acl:relcl(ōy, šud)
~~~

Case relations can be specified by adverbials (*ō* 'to', *andar ō* 'into', *abar ō* 'onto', *bē ō* 'forth/away to', *tā ō* 'up to', etc.). We have to follow UD in assuming a flat structure. Against UD, we do not analyse those as combinations of prepositions as the prepositional meaning of the single elements may differ (e.g. *bē ō* 'forth/away to', but prepositional *bē* 'without, except').

- "time, which was unlimited up to the act of creation"
~~~ sdparse
zamān kē būd akanārag tā ō dāmdahišnīh \n time which was unlimited until to creature_creating_act
advmod(dāmdahišnīh, tā)
case(dāmdahišnīh, ō)
obl:tmod(akanārag, dāmdahišnīh)
~~~

There are complex prepositions whose original dependency relation is often transparent, e.g. *mayān ī* 'the middle of' or 'amid, amongst, inside'. They are annotated with the fixed relation. The word of nominal origin usually appears without an adposition and the attributive linker can be missing. However, this is not conclusive evidence because the attributive linker is often missing in the manuscripts and locative expressions in particular can appear without an adposition.

- "And (it) happens that (this animals grows up) in secret, and (it) happens that (it) grows up openly amongst people."
~~~ sdparse
ud ast ī ka nihānāg ud ast ī ka āškārag mayān ī mardōmān rōyēd \n and is that when secretly and is that when openly middle EZ humans grows
case(mardōmān, mayān)
fixed(mayān, ī-12)
obl:lmod(rōyēd, mardōmān)
~~~

- "And the earth (is) in the middle of the ether, (its) likeness (is) just like the yolk in the middle of an egg."
~~~ sdparse
ud zamīg andar mayān asmān hangōšīdag ēdōn homānāg čiyōn zardag mayān xāyag \n and earth inside middle sky likeness so similar how yellow middle egg
case(mayān, andar)
nmod(mayān, asmān)
~~~

Some adpositions are also used as adverbs or subjunctors, e.g. *tā* as ADV 'until then, so long, up', as ADP 'until, throughout', as SCONJ 'as long as, until, so that'. At times, it is difficult to distinguish them because elliptical clauses are possible and morphological case marking is sparse in Middle Persian. In case of doubt, we opted for the simpler structure.

- 'mark' relation: "And the sky is so afraid of him as small livestock (is afraid) of the wolf."
~~~ sdparse
u =š asmān ēdōn aziš be tarsīd čiyōn gōspand az gurg \n and him sky so therefrom PFV feared how small_livestock from wolf
mark(gōspand, čiyōn)
orphan(gōspand, gurg)
conj(tarsīd, gōspand)
~~~

- 'case' relation: "The demons are afraid of the body just like sheep pursued by wolves when they begin to be afraid because of the wolf's scent."
~~~ sdparse
dēwān az tan tarsand čiyōn mēš ī gurgānxwist ka az gurg bōy frāz tarsand \n demons from body fear.3pl how sheep EZ pursued_by_wolf when from wolf scent forth fear.3pl
case(mēš, čiyōn)
amod(mēš, gurgānxwist)
det(gurgānxwist, ī)
obl(tarsand-4, mēš)
acl(mēš, tarsand-14)
mark(tarsand-14, ka)
~~~

Even though the attributive linker *ezāfe* is comparable to a case marker when it comes to nouns modifying other nouns, the very same linker is used for adjectives, adverbs, appositions, and infinite attributive clauses, which show no sign of substantivization. The *ezāfe* particle is annotated as a determiner.

<!-- Interlanguage links updated Út 30. června 2026, 10:59:44 CEST -->
