---
layout: relation
title: 'amod'
shortdef: 'adjectival modifier'
---

*Adjectival modifiers* (`amod`) are adjectives and nominal adjectives.
A nominal adjective must be followed by an auxiliary な / *na* to modify a noun.
Note that adjectival modifiers with arguments are tagged as "[acl]()".

~~~ sdparse
きれい な リンゴ \n beautiful AUX apple
amod(リンゴ, きれい)
aux(きれい, な)
~~~
