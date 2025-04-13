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

Note: When a nominal modifies a clause, e.g., Αποφασίζετε επιπόλαια, πράγμα που δεν θα σας ωφελήσει, the nominal depends on the verb head of the clause with the [parataxis]() dependency.


<!---
TODO: advcl from nominals
TODO: What about χαρά που πέρασε στο Πανεπιστήμιο
-->

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:12 CET -->
