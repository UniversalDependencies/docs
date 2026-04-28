---
layout: relation
title: 'flat:redup'
shortdef: 'reduplicated multiword expression'
udver: '2'
---

The `flat:redup` relation is used for reduplicated constructions in Ruuli. A construction is treated as reduplication when the same token is repeated in sequence, the repetitions function together as a single semantic unit, and they share the same syntactic role in the clause. No other material intervenes between the repeated elements.

The relation between the reduplicated elements is a subtype of [flat](), since the construction lacks internal syntactic hierarchy. The first occurrence is taken as the head, and subsequent occurrences are attached to it using `flat:redup`.

When reduplication is word-internal, it is marked with [Red]()=`Yes`.

At present, reduplication in Ruuli is attested with total quantifiers such as *byona byona* 'all (emphatic/distributive)'. 

~~~ sdparse
Byona byona ebyo na tubba nga tukukwatira amwei . \n All all those and we_are while we_hold one .
flat:redup(Byona, byona)
flat:redup(All, all)
det(ebyo, Byona)
det(those, All)
~~~

**Note**: Other types of reduplication may exist in Ruuli.