---
layout: relation
title:  'iobj'
shortdef : 'indirect object'
---

The indirect object of a (verbal) predicate is the nominal which is the dative
object of the verb. The relation `iobj` is used for objects that are not direct
objects. It occurs only when there is a `dobj` or `ccomp` in the clause.

~~~ sdparse
She gave me a raise
iobj(gave, me)
~~~
