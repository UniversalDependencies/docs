---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
---

The name `xcomp` is borrowed from Lexical-Functional Grammar. 
An open clausal complement (xcomp) of a verb or an adjective is a predicative or clausal complement without its own subject. The reference of the subject is necessarily determined by an argument external to the xcomp.
These complements are always non-finite, and they are complements (arguments of the higher verb or adjective) rather than adjuncts/modifiers.

~~~ sdparse
Is leor breathnú ar na staitisticí chun a fheiceáil gur thit na caighdeáin \n You must look at the statistics to see that the standards dropped
xcomp(leor, fheiceáil)
~~~

~~~ sdparse
Caithfidh mé a dhul abhaile \n I have to go home
xcomp(Caithfidh, dhul)
~~~ 


The UD Irish scheme uses `xcomp` to denote progressive aspectual phrases, the structure of which follows:
Be + SUBJ + at (ag) + Verbal Noun
In these cases, and in keeping with regular prepositional phrases, we attach the verbal noun to the higher verb ("be") using the `xcomp` label. The preposition is then a dependent of the verbal noun, with that relationship labelled as `case'.

~~~ sdparse
Tá sé ag rith \n He is running
xcomp(Tá, rith)
~~~

There are also some similar periphrastic constructions similar to these progressives that use _le_ or _ar_

~~~ sdparse
chuirfeadh iad ar fáil \n they would be made available
xcomp(fáil, ar)

~~~
