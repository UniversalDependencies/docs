---
layout: relation
title: 'discourse:q'
shortdef: 'discourse particle for questions'
udver: '2'
---

Turkish employs _mI (mi, mı, mu, mü)_ clitics for question 
formation. In contrast to other Turkic languages, question 
clitics in Turkish don't bear sentential stress and can occur 
in different syntactic positions in the sentence without
rendering it ungrammatical. _mI_ clitic is often preceded
by the clause being in question.

The question clitic, when attached to a predicate, typically 
carries some of the tense/aspect/modality morphemes as well 
as person/number agreement morphemes.

The main motivation behind introducing this dependency
relation is ensuring the linguistic accuracy of annotations.

~~~ sdparse
Sen bugün Ayşe'yi mi gördün ? \n Did you see _Ayşe_ today ?
discourse:q(mi, Ayşe'yi)
~~~

~~~ sdparse
Sen bugün mü gördün Ayşe'yi ? \n Did you see Ayşe _today_ ?
discourse:q(mü, bugün)
~~~

~~~ sdparse
Çayını içtin mi ? \n Did you drink your tea ?
discourse:q(mi, içtin)
~~~

