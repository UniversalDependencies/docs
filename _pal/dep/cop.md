---
layout: relation
title: 'cop'
shortdef: 'copula'
udver: '2'
---

The copular verb is an independent [verb](VERB) in Middle Persian, which can fully inflect. The decision by UD to give a [flat]() structure to the copular verb results in a number of oddities.

(1) Despite the hierarchical formation of the copular verb, the person and number marking [auxiliary](aux_) is related to the nominal head.
- "For when I was praiseworthy, then you have made me even more praiseworthy."

~~~ sdparse
čē ka burzišnīg būd ham ēg =it burzišnīgtar be kird ham \n for when praiseworthy been am then you more_praiseworthy PFV made am
mark(burzišnīg, ka)
cop(burzišnīg, būd)
aux(burzišnīg, ham)
~~~

(2) The negation follows its head, which otherwise never happens. Compare *hušnūd **nē** būd hēnd* with the periphrastic verb form of an optative plurperfect ***nē** kird ēstād hē*.
- negated copular verb: "And (they) were never satisfied."
- negated full verb: "if (he) has not been clearly branded"

~~~ sdparse
ud hagriz hušnūd nē būd hēnd \n and ever satisfied not been are
advmod(hušnūd, nē)
cop(hušnūd, būd)
aux(hušnūd, hēnd)
~~~

~~~ sdparse
ka garān drōš nē kird ēstād hē \n if heavy mutilation not done stood be.OPT.3SG
mark(kird, ka)
amod(drōš, garān)
compound:lvc(kird, drōš)
advmod(kird, nē)
aux(kird, ēstād)
aux(kird, hē)
~~~

(3) The infinitive which is [dependent](xcomp) of a modal verb often follows the modal verb directly, while the rest of the infinitive clause precedes the modalverb. Even though copular constructions comply to this pattern, they have to be annotated differently.
- copular construction dependent of a modal verb: "(It) cannot be otherwise!"
- full verb dependent of a modal verb: "For how long should (you) not drink water?"

~~~ sdparse
ǰuttar nē šāyēd būd \n different not is_possible be
xcomp(šāyēd, ǰuttar)
advmod(šāyēd, nē)
cop(ǰuttar, būd)
~~~

~~~ sdparse
tā čand āb nē abāyēd xwardan \n until how_much water not must drink
obj(xwardan, āb)
advmod(abāyēd, nē)
xcomp(abāyēd, xwardan)
~~~

<!-- Interlanguage links updated Út 30. června 2026, 10:59:55 CEST -->
