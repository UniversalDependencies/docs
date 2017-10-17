---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal dependents of another noun or noun phrase and functionally corresponds to
an attribute, or genitive complement.

**New from v2:** The `nmod` relation was previously used also for nominal dependents of verbs, adjectives, and adverbs. The latter are now covered by the new [obl]() relation.

In conjunction with the [case]() relation, `nmod` provides a uniform analysis for the possessive alternation (with the option of a subtype like `nmod:poss` to distinguish non-adpositional case):

~~~ sdparse
the office of the Chair
det(office-2, the-1)
nmod(office-2, Chair-5)
case(Chair-5, of-3)
det(Chair-5, the-4)
~~~

~~~ sdparse
the Chair 's office
det(Chair-2, the-1)
nmod:poss(office-4, Chair-2)
case(Chair-2, 's-3)
~~~
