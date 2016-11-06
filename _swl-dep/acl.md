---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
---

The category `acl` is used for adverbial modification of a noun. Hence, it is not used for modification of a predicate; for this case, see [advcl]().

~~~ sdparse
POJKE SITTA VARELSE(Vb)-BEFINNA-SIG LEDSEN \n 
BOY SIT PERSON(Vb)-BE SORRY
acl(POJKE, LEDSEN)
~~~

~~~ sdparse

Pojken satt (där), ledsen \n 
The boy sat (there), sad
nsubj(SITTA, POJKE)
acl(Pojken, ledsen)
~~~
