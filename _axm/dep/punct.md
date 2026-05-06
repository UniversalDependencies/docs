---
layout: relation
title: 'punct'
shortdef: 'punctuation'
udver: '2'
---

This relation is used for any punctuation sign in a clause.

~~~ sdparse
Եւ ազգ մի այլ կայ , որ ասի ատօրօս \n And there is another kind (of snake) , called atōros  
punct(ասի, ,)
punct(called, ,)
~~~

Tokens with the relation `punct` always attach to content words (except in cases of ellipsis) and can never have dependents.
Since `punct` is not a normal dependency relation, the usual criteria for determining the head word do not apply.
Instead, we use the following principles:

1. A punctuation mark separating coordinated units is attached to the following conjunct.
2. A punctuation mark preceding or following a subordinated unit is attached to this unit.
3. Within the relevant unit, a punctuation mark is attached at the highest possible node that preserves projectivity.
4. Paired punctuation marks (quotes and brackets) should be attached to the same word unless that would create non-projectivity. This word is usually the head of the phrase enclosed in the paired punctuation.

~~~
Եւ ի կռիւ ուր թագաւորն ուրդի ՝ նա երբ սուրն վերնա ՝ նա չէ պատեհ այլ մարդ սպաննել . \n And in a battle where the king is (present) , when the sword is raised , it is no longer proper to kill any other man ;
punct(վերնա, ՝)
punct(raised, ՝)
punct(պատեհ, ՝)
punct(proper, ՝) 
~~~
<!-- Interlanguage links updated St 6. května 2026, 20:48:36 CEST -->
