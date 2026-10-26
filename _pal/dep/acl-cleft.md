---
layout: relation
title: 'acl:cleft'
shortdef: 'relative clause in cleft sentences'
udver: '2'
---

In Middle Persian, dependent clauses in cleft sentences are in all aspects identical to [relative clauses](acl:relcl). As such, this annotation identifies the presence of clefting in the sentence. It is used for focus marking as well as avoiding clausal arguments as dependents of clausal heads.

- "Who (is) the one who should not be accepted as a witness?"
~~~ sdparse
kē ān ī pad gugāy nē padīrišn \n who that REL as witness not accept.NEC
nsubj(ān, kē)
mark(padīrišn, ī)
acl:cleft(ān, padīrišn)
~~~

- "(It) is knowledge that one never has enough of." (lit. of which one does not know satiation)
~~~ sdparse
dānāgīh ast kē kas sērīh az =iš nē dānēd \n knowledge is REL someone satiation from it not knows
cop(dānāgīh, ast)
mark(dānēd, kē)
acl:cleft(dānāgīh, dānēd)
~~~

- "The words of that one (are) best who speaks most directly."
~~~ sdparse
gōwišn ī ōy xūbtar kē rāsttar gōwēd \n speaking EZ that better REL more_straight speaks
nsubj(xūbtar, gōwišn)
nmod(gōwišn, ōy)
det(ōy, ī)
mark(gōwēd, kē)
acl:cleft(ōy, gōwēd)
~~~
