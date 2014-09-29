---
layout: base
title: 'compound'
shortdef: 'compound'
---
## compound

*compound* is used for 

- any kind of X<sup>0</sup> compounding: noun compounds in English (Note that in the current system for dependency extraction, all nouns modify the rightmost noun of the noun phrase -- there is no intelligent noun compound analysis.  This is likely to be fixed once the Penn Treebank represents the branching structure of noun phrases.) 

~~~ sdparse
phone book
compound(book, phone)
~~~

~~~ sdparse
oil price futures
nn(futures, oil)
~~~

- for numbers

~~~ sdparse
I have four thousand sheep
compound(thousand, four)
~~~

~~~ sdparse
I lost $ 3.2 billion
compound(billion, 3.2)
~~~


 

