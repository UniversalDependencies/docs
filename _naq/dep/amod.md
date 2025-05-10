---
layout: relation
title: 'amod'
shortdef: 'adjectival modifier'
udver: '2'
---

An adjectival modifier of a nominal is any adjectival phrase that serves to modify the nominal.

An `amod` dependent may have its own modifiers (e.g., _kaise ǁkhurisa goman_ "very wild cows") but the dependent should not be a clause. If it is a clause, then [acl](naq-dep/acl) should be used.

~~~ sdparse
kaise ǁkhurisa goman \n very wild cows
amod(goman, ǁkhurisa)
advmod(ǁkhurisa, kaise)
amod(cows, wild)
advmod(wild, very)
~~~

~~~ sdparse
ǂguro ǃgaeǁaresa \n first allegiance
amod(ǃgaeǁaresa, ǂguro)
amod(allegiance, first)
~~~
<!-- Interlanguage links updated So 10. května 2025, 18:14:58 CEST -->
