---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal modifiers of nouns or clausal predicates.
`nmod` is typically a noun functioning as a non-core (oblique) argument or adjunct, and often marked by a preposition using [case]().

Note that nominal modifiers of verbal nouns use `obl`, `obl:smod` or `obl:tmod` instead.

### Examples
_tuathanas beag <b>aige</b>

#### _fheudar_

_b' fheudar <b>dhuinn</b> am fàgail_ '<b>we</b> would have to leave them' (c02_001a)

~~~sdparse
b' fheudar dhuinn am fàgail \n AUX would_have to_us their leave
nmod(fheudar, dhuinn)
~~~

#### _fhèin_ 
_Bett <b>fhèin</b> a' ruith suas_ 'Bett <b>himself</b> running up' (s09_017)

~~~sdparse
Bett fhèin a' ruith suas \n Bett himself at running up
nmod(Bett, fhèin)
~~~

<!-- Interlanguage links updated St lis 3 20:58:58 CET 2021 -->
