---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal modifiers. They depend either
on another noun (group “noun dependents”) or on a predicate (group
“non-core dependents of clausal predicates”).

`nmod` is a [noun](u-pos/NOUN) (or noun phrase) functioning as a
non-core (oblique) argument or adjunct.
This means that it functionally corresponds to an adverbial when it attaches to a verb, adjective or other adverb.
But when attaching to a noun, it corresponds to an attribute, or genitive complement.

~~~ sdparse
οι άθλοι του Ηρακλή.Gen
nmod(άθλοι, Ηρακλή.Gen)
~~~

The `nmod` relation can be further specified by the [case]() label assigned to prepositions.

~~~ sdparse
γράψαμε το άρθρο σε έξι ώρες
nmod(γράψαμε, ώρες)
case(γράψαμε, σε)
~~~

~~~ sdparse
είδα τις ανταποκρίσεις για το συμβάν
nmod(ανταποκρίσεις, συμβάν)
case(συμβάν, για)
~~~

~~~ sdparse
έφυγαν από την Αλεξανδρούπολη με το αεροπλάνο
nmod(έφυγαν, Αλεξανδρούπολη)
nmod(έφυγαν, αεροπλάνο)
case(Αλεξανδρούπολη, από)
case(αεροπλάνο, με)
~~~

~~~ sdparse
τελείωσε το διαγώνισμα χωρίς ένα λάθος
nmod(τελείωσε, λάθος)
case(λάθος, χωρίς)
~~~

- An exception for Greek is the  [iobj]() label assigned to certain nominal elements preceded by _σε_, _από_ and _για_ prepositions. See  [iobj]() for more.

~~~ sdparse
Έδωσε στην Άννα αύξηση
iobj(Έδωσε, Άννα)
obj(Έδωσε, αύξηση)
~~~

~~~ sdparse
Ζήτησε από την Ελένη την κούκλα
iobj(Ζήτησε, Ελένη)
obj(Ζήτησε, κούκλα)
~~~

`nmod` is also used for nominal modifiers indicating time, cause, amount etc.:

~~~ sdparse
Θα σε δω την Κυριακή
nmod(δω, Κυριακή)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:09:09 CEST 2021 -->
