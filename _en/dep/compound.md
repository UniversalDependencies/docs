---
layout: relation
title: 'compound'
shortdef: 'compound'
---

*compound* is used for:

- noun compounds. (These should show the correct modification structure of noun compounds, and do - or should - in the English UD treebank. Note, however, that the current automatic Stanford UD converter still makes all nouns modify the rightmost noun of the noun phrase when run on corpora like the 1999 Penn Treebank 3 which do not show noun compound structure - there is no intelligent noun compound analysis.  The correct results are achieved when run on corpora like OntoNotes which do represent the branching structure of noun phrases.) 

~~~ sdparse
phone book
compound(book, phone)
~~~

~~~ sdparse
oil price futures
compound(price, oil)
compound(futures, price)
~~~

  This includes proper names that use regular syntactic relations—contrast with [flat]():

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
compound(oink-5, oink-4)
~~~

 - idiomatic phrasal verbs are analyzed as a language-specific subrelation of *compound*
 
~~~ sdparse
She just made up the answer .
compound:prt(made, up)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:46 CEST 2020 -->
