---
layout: relation
title: 'compound:lvc'
shortdef: 'light verb construction'
udver: '2'
---

In **conjunct verb** (or **noun-verb concatenation**) constructions, a semantically bleached light verb combines with a noun/adjective/adverb to form a single complex, taking semantics from the non-verbal component. The head is the verb.

Note that a genitive-case object is not treated as a [nmod]() dependent of the nominal, but rather an [obj]() argument to the verb.

~~~ sdparse
ਮੈਂ ਦਸਤਾਵੇਜ਼ ਦਾ ਅਨੁਵਾਦ ਕੀਤਾ \n I document GEN translation did
compound:lvc(ਕੀਤਾ, ਅਨੁਵਾਦ)
compound:lvc(did, translation)
obj(ਕੀਤਾ, ਦਸਤਾਵੇਜ਼)
obj(did, document)
~~~

~~~ sdparse
ਮੈਂ ਕਮਰਾ ਸਾਫ਼ ਕਰ ਰਿਹਾ ਹਾਂ \n I room clean do PROG am
compound:lvc(ਕਰ, ਸਾਫ਼)
compound:lvc(do, clean)
obj(ਕਰ, ਕਮਰਾ)
obj(do, room)
~~~