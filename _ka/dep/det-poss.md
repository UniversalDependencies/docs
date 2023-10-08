---
layout: relation
title: 'det:poss'
shortdef: 'possessive determiner'
udver: '2'
---

All possessive determiners have the feature <code>Possessive</code> defined as <code>Yes</code>. Elements that can assume the role of <code>det:poss</code> are POS tagged as <code>PRON</code> so called possessive pronouns.  

~~~ sdparse
ჩემს ნერვებს უნდა გავუფრთხილდე, დამჭირდება. /n 'I need to take care of my nerves.'
det:poss(ნერვებს, ჩემს)
~~~

**NB** Note that other pronouns are treated as `nmod`. For more on nominal modifiers, see the [nmod](_ka/dep/nmod) relation.
