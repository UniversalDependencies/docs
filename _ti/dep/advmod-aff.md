---
layout: relation
title: 'advmod:aff'
shortdef: 'negation affix'
udver: '2'
---

We use `advmod:aff` for the negation affixes, which are segmented and tagged `ADV` with `Polarity=Neg`: the circumfix ኣይ-…-ን / *ʔay-…-n* in main clauses, the prefix ኣይ- alone in negative jussives and imperatives, and ዘይ- / *zəy-* in relative clauses and on verbal nouns. The affixes are attached to the head of the negated verb, verbal noun or nonverbal predicate.

~~~ sdparse
ዝ- መደብናዮ ኣይ- ሰለጠና -ን ። \n REL plan.PFV.Sb1p.Ob3sm NEG succeed.PFV.Sb3sm.Ob1p NEG .
csubj(ሰለጠና, መደብናዮ)
mark(መደብናዮ, ዝ-)
advmod:aff(ሰለጠና, ኣይ-)
advmod:aff(ሰለጠና, -ን)
~~~

"What we planned did not succeed for us." (ti_ref_56)

The circumfix also negates nonverbal predicates:

~~~ sdparse
ኣይ- ሓው -ኣይ -ን እዩ ። \n NEG brother my NEG be.PRS.Sb3sm .
advmod:aff(ሓው, ኣይ-)
det:poss(ሓው, -ኣይ)
advmod:aff(ሓው, -ን)
cop(ሓው, እዩ)
~~~

"He is not my brother." (ti_ref_132)
<!-- Interlanguage links updated Út 10. listopadu 2026, 22:38:16 CET -->
