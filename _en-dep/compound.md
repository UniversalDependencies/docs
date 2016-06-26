---
layout: relation
title: 'compound'
shortdef: 'compound'
---

*compound* is used for 

- noun compounds (Note that in the current system for dependency extraction, all nouns modify the rightmost noun of the noun phrase -- there is no intelligent noun compound analysis.  This is likely to be fixed once the Penn Treebank represents the branching structure of noun phrases.) 

~~~ sdparse
phone book
compound(book, phone)
~~~

~~~ sdparse
oil price futures
nn(futures, oil)
~~~

  This includes proper names that use regular syntactic relations—contrast with [name]():

~~~ sdparse
Wall Street
compound(Street, Wall)
~~~

~~~ sdparse
Natural Resources Conservation Service
amod(Resources-2, Natural-1)
compound(Conservation-3, Resources-2)
compound(Service-4, Conservation-3)
~~~

- numbers

~~~ sdparse
I have four thousand sheep
compound(thousand, four)
~~~

~~~ sdparse
I lost $ 3.2 billion
compound(billion, 3.2)
~~~

- adjectival compounds

~~~ sdparse
a medium - large company
amod (company, large)
compound(large, medium)
punct(large, -)
~~~

~~~ sdparse
a self - driven research strategy
compound(strategy, research)
amod(strategy, driven)
compound(driven, self)
punct(driven, -)
~~~

- imitative reduplication

~~~ sdparse
Does he go oink oink ?
compound(oink-4, oink-3)
~~~
