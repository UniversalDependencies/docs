---
layout: relation
title: 'vocative'
shortdef: 'vocative'
udver: '2'
---

This is used when addressing someone.
It usually works together with the vocative particle _a_ and the `case:voc` relation.

### Examples

_dè seòrsa sgioba a th' agaibh air a’ bhliadhna seo a <b>Raghnaill</b>?_ 'what sort of team do you have this year, <b>Ronald</b>? (p04\_000, test)

~~~ sdparse
_dè seòrsa sgioba a th' agaibh air a’ bhliadhna seo a Raghnaill \n what sort team REL is at_you on the year this o Ronald
case:voc(a, Raghnaill)
vocative(Raghnaill, seòrsa)
nmod:unmarked(dè, seòrsa)
~~~

The vocative particle _a_ is omitted before a vowel:

_math dha-rìreabh eh Aonghais_ 'very good eh Angus' (s06\_047a)

~~~ sdparse
math dha-rìreabh eh Aonghais \n good indeed eh Angus
advmod(dha-rìreabh, math)
vocative(Aonghais, math)
discourse(eh, math)
~~~
<!-- Interlanguage links updated So 10. května 2025, 18:16:12 CEST -->
