---
layout: relation
title: 'flat:redup'
shortdef: 'reduplicated multiword expression'
udver: '2'
---

The `flat:redup` relation is used for reduplicated constructions in Ruuli. We treat a construction as reduplication when the same token is repeated in sequence, with the repetitions functioning together as a single semantic unit and sharing the same syntactic role in the clause. No other material intervenes between the repeated elements.

The relation between the reduplicated elements is a subtype of [flat](), since the construction lacks internal syntactic hierarchy. The first occurrence is taken as the head, and subsequent occurrences are attached to it using `flat:redup`.

At present, reduplication in Ruuli is observed with total quantifiers such as *byona byona* "all (emphatic/distributive)". The reduplicated form typically contributes emphasis or distributivity over the domain of quantification.

~~~ sdparse
Byona byona ebyo na tubba nga tukukwatira amwei . \n All all those and we_are while we_hold one .
flat:redup(Byona, byona)
flat:redup(All, all)
det(ebyo, Byona)
det(those, All)
~~~

Note:
Other potential types of reduplication may exist in Ruuli, but they are not yet attested in the current corpus and are therefore not annotated with this relation at this stage.