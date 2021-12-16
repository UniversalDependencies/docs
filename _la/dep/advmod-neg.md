---
layout: relation
title: 'advmod:neg'
shortdef: 'negating particle'
udver: '2'
---

This relation is used exclusively and always in combination with [negative](la-feat/Polarity) [particles](la-pos/PART).

In Latin, the chief negative particle is *non*, but also *ne*/*ni* and *haud* are attested as such. They are used mainly to negate predicates, but can confer negative polarity to any other element. They do not really act as [other adverbial](la-pos/ADV) elements, in that they are merely functional, clitic-like elements and as such more similar to [auxiliaries](la-pos/aux) than to adverbs: hence the basic relation `advmod` has best to be augmented with this subtype in the case of negative particles. 

~~~ sdparse
« Non loquor his , ymmo studio callentibus » , inquis . \n « Not I-speak to-these , rather in-study hardening » , you-say .
advmod:neg(loquor, non)
advmod:neg(I-speak, not)
~~~

'«Not to such I speak but rather to those skilled in study,» thou sayst.' (*Eclogues* I, UDante)

~~~ sdparse
Quod patet non solum ex hoc quod est operatio subsistens : sed quia una operatione deus seipsum ita perfecte intelligit sicut est , et omnia alia , quae sunt et quae non sunt , bona et mala . \n What appears not only out-of this what is operation subsistent : but because one with-operation himself so perfectly understands like is , and all other , which they-are and which not they-are , good and bad . 
advmod:neg(solum, non-3)
advmod:emph(hoc,solum)
advmod:neg(only, not-40)
advmod:emph(this,only)
~~~

'This is evident not only because it is a subsistent operation but also because by one operation God knows Himself as perfectly as He is perfect, as well as all other things, those that are and those that are not, the good and the evil.' (*Summa contra Gentiles*, ITTB)
<!-- Interlanguage links updated St lis 3 20:58:37 CET 2021 -->
