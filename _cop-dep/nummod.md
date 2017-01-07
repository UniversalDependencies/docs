---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
---

This label is used for number modifiers, counting the modified nouns. Note that for numbers taking a preposition ⲛ, the preposition is attached via the case label to the counted noun, but the article (and any further prepositions preceding the article) are attached to the nominal head as well, as shown below.

~~~ sdparse 
ϩⲙ/ADP ⲡⲉ/DET ϩⲙⲉ/NUM ⲛ/ADP ϩⲟⲟⲩ/NOUN \n in the forty days

case(ϩⲟⲟⲩ, ϩⲙ)
det(ϩⲟⲟⲩ, ⲡⲉ)
nummod(ϩⲟⲟⲩ, ϩⲙⲉ)
case(ϩⲟⲟⲩ, ⲛ)
~~~

For the number ⲥⲛⲁⲩ ‘two’, which follows the counted noun, the noun is still the head, i.e. the dependency arrow points forward from the noun to the number.
