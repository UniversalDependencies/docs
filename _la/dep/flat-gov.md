---
layout: relation
title: 'flat:gov'
shortdef: 'partitive-like appositional element'
udver: '2'
---

Sometimes, the named element in an appositional construction is expressed in an oblique case (genitive) as if it were a [modifier](u-dep/nmod), while the structure actually remains flat. In this sense, the [`flat`](u-dep/flat) construction "governs" a case. 


#### Examples

* *urbs **Romae***, where *urbs* and *Roma* are coreferent: the city is not a possession of Rome, but Rome itself

~~~ sdparse
Accedunt nunc ille sacratissime victime Deciorum , qui ... \n They-access now those most-sacred victims of-Decii , who ...
flat:gov(victime,Deciorum)
nsubj(Accedunt,victime)
acl:relcl(victime,...-9)
flat:gov(victims,of-Decii)
nsubj(They-access,victims)
acl:relcl(victims,...-19)
~~~

'Now add to their number those most holy **victims**, the **Decii**, who ...' (*De Monarchia*, UDante)

* Note: the Decii themselves are the victims; there are no victims caused by ("belonging to") them. The English translation indeed conveys this expression with a mere apposition.
<!-- Interlanguage links updated St lis 3 20:58:54 CET 2021 -->
