---
layout: entry
title: 'neg'
shortdef: 'negation modifier'
---

The negation modifier is the relation between a negation word and the
word it modifies.

Modifiers labeled `neg` depend either on a noun (group “noun
dependents”) or on a predicate (group “non-core dependents of clausal
predicates”).

~~~ sdparse
Bill is not a scientist
neg(scientist, not)
~~~

~~~ sdparse
Bill is no scientist
neg(scientist, no)
~~~

~~~ sdparse
Bill does n't drive
neg(drive, n't)
~~~
