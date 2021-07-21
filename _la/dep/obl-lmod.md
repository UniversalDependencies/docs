---
layout: relation
title: 'obl:lmod'
shortdef: 'locative oblique argument'
udver: '2'
---

This semantical subrelation is used to single out those [oblique](la-dep/obl) arguments that express a spatial reference, often by means of nominal elements with meanings related to spatial concepts, or implying some point, extension or movement in space. 

Latin locative oblique arguments make use of various strategies, mainly (but not always) involving the use of [adpositions](la-pos/ADP) (overwhelmingly [prepositions](la-feat/AdpType)) together with the ablative or the accusative [case](la-feat/Case), depending on direction, presence or absence of movement, and other factors. These strategies have in many cases been adopted to express temporal relations, too (a universally common phenomenon), and are based on a rough conceptual division between ablative-static/origin and accusative-continuous/movement. Latin maintains, though marginal in its system, a locative case, which appears synchronically confined to [names of places](la-feat/NameType#Geo) (e.g. *Roma* 'Rome' gives *Romae*) or specific terms (e.g. *domus* 'home' gives *domi*, *rus* 'countryside' gives *ruri*)  

The `lmod` subrelation is also used for [adverbial](la-dep/advmod-lmod) modifiers: since, in Latin, this appears to be a purely formal distinction with regard to oblique locative (but also [temporal](la-dep/obl-tmod)) arguments, the use of `lmod` aims to capture the fundamental unitarity of such constructions.

NB: when a locative phrase appears as the non-verbal part of a [copula](la-dep/cop), this will not be signalled by the `lmod` subrelation, because other clausal relations will be used instead of `obl`, since that phrase does not function as an argument of the predicate, but is the root of its own clause. Also, sometimes the subrelation `lmod` might come into conflict with that used for the complement ([`arg`](u-dep/obl-arg)), relative to the (possible) secondary complement/adjunct distinction, e.g. for verbs of movement such as *eo* 'I go'. If this occurs, a preference might be given to the `arg` subrelation, seeing `lmod`, i nthis context, as corresponding to a *locative adjunct*.



~~~ sdparse
et exinde tibi , vel ad subcessoribus tuis , a parte prefati episcopatui vestri per singulos annos in ipso loco retdere debeamus medietate vinum purum et lora , et super palmentum misso vestro bene recipere et gubernare debeamus tantum ; \n and thence thee , or to to-successors thy , from part aforementioned of-bishopric your for single years in itself place give-back we-have-to moiety wine pure and after-wine , and over press to-legate your well to-receive and to-manage we-have-to to-such-a-degree ; 
obl:lmod(retdere,loco)
det(loco,ipso)
case(loco,in-17)
obl:lmod(recipere,palmentum)
case(palmentum,super)
obl:lmod(give-back,place)
det(place,itself)
case(place,in-59)
obl:lmod(receive,press)
case(press,over)
~~~

'And then, every year we have to deliver thee and thy heirs a moiety of unadmixed wine and after-wine **in that place** on the part of your aforementioned bishopric, and we do have to welcome and take care of your legate **at the cellar** [?]; [...]' (LLCT)

* the ablative case expresses a stationary locative argument together with the adposition *in* 'in', which can also appear with accusative to express "movement into";
* analogously, the use of accusative with *super* 'over' seems to tie in with the movement implied by the coming of the received legate.

~~~ sdparse
Et cum radix humane propaginis principalis in oris orientalibus sit plantata , nec non ab inde ad utrunque latus per diffusos multipliciter palmites nostra sit extensa propago , demumque ad fines occidentales protracta , forte primitus tunc vel totius Europe flumina , vel saltim quedam , rationalia guctura potaverunt . \n And when root human of-offspring principal in from-edges oriental be planted , nor not from thence to either side for spread multiplexly branches our be extended offspring , and-at-last to ends occidental drawn , maybe firstly then or all of-Europe rivers , or at-least some , rational throats they-drank .
obl:lmod(plantata,oris)
amod(oris,orientalibus)
case(oris,in-7)
obl:lmod(extensa,inde)
case(inde,ab)
obl:lmod(extensa,latus)
det(latus,utrunque)
case(latus,ad-17)
obl:lmod(protracta,fines)
amod(fines,occidentales)
case(fines,ad-30)
obl:lmod(planted,to-edges)
amod(to-edges,oriental)
case(to-edges,in-58)
obl:lmod(extended,thence)
case(thence,from)
obl:lmod(extended,side)
det(side,either)
case(side,to-68)
obl:lmod(drawn,ends)
amod(ends,occidental)
case(ends,to-81)
~~~

'And since the principal root from which the human race has grown was planted **in the East**, and **from there** our growth has spread, through many branches and **in all directions**, finally reaching **the furthest limits of the West**, perhaps it was then that the rivers of all Europe, or at least some of them, first refreshed the throats of rational beings.' (*De Vulgari Eloquentia*, UDante) 

* again, the ablative accompanied by the adposition *in* 'in' expresses a stationary location where the root lay after having been planted;
* the accusatives with *ad* 'to' express the described movement;
* notice the [locative adverbial element](la-dep/advmod-lmod) *inde* 'thence' used in a nominal context, that is, accompanied by an (redundant) adposition as any other noun phrase.