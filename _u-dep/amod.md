---
layout: relation
title: 'amod'
shortdef: 'adjectival modifier'
udver: '2'
---

An adjectival modifier of a noun (or pronoun) is any adjectival phrase that serves
to modify the noun (or pronoun). The relation applies whether the meaning of the noun 
is modified in a compositional way (e.g., _large house_) or an idiomatic way (_hot dogs_).

An `amod` dependent may have its own modifiers (e.g., _very large house_) but the dependent should not be a clause. If it is a clause, then `acl` should be used.

~~~ sdparse
Sam eats large hot dogs
amod(dogs, large)
amod(dogs, hot)
~~~

~~~ sdparse
There is nothing wrong with it
amod(nothing, wrong)
~~~
<!-- Interlanguage links updated St lis 3 20:58:38 CET 2021 -->
