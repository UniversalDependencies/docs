---
layout: relation
title:  'nmod:tmod'
shortdef : 'temporal modifier'
udver: '2'
---

**⚠️ DEPRECATED: Beginning with the version 2.15 release,
most English corpora will use the new [nmod:unmarked]() relation instead. ⚠️**

A temporal nominal modifier of another nominal is a subtype of the [nmod]() relation:
if the modifier is specifying a time, it is labeled as `tmod`.

~~~ sdparse
Are you free for lunch some day this week ?
nmod:tmod(lunch, day)
det(day, some)
nmod:tmod(day, week)
det(week, this)
~~~

<!-- Interlanguage links updated Ne 5. května 2024, 18:21:25 CEST -->
