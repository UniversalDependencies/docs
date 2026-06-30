---
layout: relation
title: 'amod'
shortdef: 'adjectival modifier'
udver: '2'
---

An adjectival modifier `amod` of a noun (or pronoun) is any adjectival phrase that serves to modify the noun (or pronoun). In the UD annotation, the noun is the head of the relation, and the adjective is the dependent.  

In Lithuanian, adjectival modifiers typically occur in pre-nominal position (1), but can also be found in post-nominal (2, 3) position.  

~~~ sdparse
Aš mėgstu greitą maistą . \n I like fast food .
amod(maistą, greitą)
amod(food, fast)
~~~

~~~ sdparse
Valgyk pyragą skanų . \n Eat a-cake delicious .
amod(pyragą, skanų)
amod(a-cake, delicious)
~~~

~~~ sdparse
Parnešiau krepšį , pilną vaisių . \n I-brought a-basket full of-fruit .
amod(krepšį, pilną)
amod(a-basket, full)
~~~

The `amod` relation is also used for participial adjectives, which can be used in pre-nominal (4) and post-nominal (5) position. Postmodifying participial adjectives are always separated from the noun by a comma.

~~~ sdparse
Mačiau tave vakar vykusioje konferencijoje . \n I-saw you at a yesterday taking-place conference .
amod(konferencijoje, vykusioje)
amod(conference, taking-place)
~~~

~~~ sdparse
Mačiau tave konferencijoje , vykusioje vakar . \n I-saw you at-a-conference that-took-place yesterday .
amod(konferencijoje, vykusioje)
amod(at-a-conference, that-took-place)
~~~

**Note.** If the modifying adjectival word is pronominal (i.e. tagged `det`), the relation is [det]() instead of `amod`.  

`Amod` also marks adjectives occurring after pronouns.  
However, if the modifier is not an adjectival word, but an **infinitive**, the `acl` tag should be used, for example: *teisė reikalauti* “the right to demand” (`acl`) (see the section on [acl]()).  

~~~ sdparse
Nieko blogo nenutiko . \n Nothing bad happened .
amod(Nieko, blogo)
amod(Nothing, bad)
~~~

In Lithuanian, the `amod` relation is also used for **ordinal numbers**, when they are expressed in
words rather than digits (numerals written as digits are annotated as [nummod]()).  
 
~~~ sdparse
Prasidėjo antra savaitė . \n The-second week began .
amod(savaitė, antra)
amod(week, The-second)
~~~
<!-- Interlanguage links updated Út 30. června 2026, 10:34:10 CEST -->
