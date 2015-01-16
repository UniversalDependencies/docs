---
layout: relation
title:  'neg'
shortdef : 'negation modifier'
---

The negation modifier is the relation between a negation word and the
word it modifies. It is used both for predicate negation (canonically, _not_) and nominal negation (canonically _no_). Dependents labeled `neg` in the current treebank are the following (in various lowercase/uppercase forms): _n, n't, neither, never, no, non, not, nt, t_. 

~~~ sdparse
Bill is not a scientist
neg(scientist, not)
~~~

~~~ sdparse
Bill does n't drive
neg(drive, n't)
~~~

~~~ sdparse
John saw no accidents
neg(accidents, no)
~~~
