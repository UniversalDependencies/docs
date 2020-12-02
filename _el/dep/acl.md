---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---

`acl` stands for finite clauses that modify a nominal. The head of the `acl` relation is the noun
that is modified, and the dependent is the head of the clause that modifies the noun. Greek relative
are assigned a specific subtype label [acl:relcl]().

~~~ sdparse
το γεγονός ότι έφυγε
acl(γεγονός, έφυγε)
~~~

~~~ sdparse
η είδηση πως νίκησε
acl(είδηση, νίκησε)
~~~

~~~ sdparse
ο στόχος της να παραμείνει
acl(στόχος, παραμείνει)
~~~

~~~ sdparse
η αγωνία μήπως συνεχιστεί το Μνημόνιο
acl(αγωνία, συνεχιστεί)
~~~

~~~ sdparse
στην ερώτηση γιατί θα μετακόμιζαν
acl(ερώτηση, μετακόμιζαν)
~~~

~~~ sdparse
η χαρά που πέρασε στο Πανεπιστήμιο
acl(χαρά, πέρασε)
~~~

<!---
TODO: advcl from nominals
TODO: What about χαρά που πέρασε στο Πανεπιστήμιο
-->

<!-- Interlanguage links updated Čt lis 12 09:43:08 CET 2020 -->
