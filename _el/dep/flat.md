---
layout: relation
title: 'flat'
shortdef: 'name'
udver: '2'
---

We use the [flat]() relation for proper nouns constituted of more than one words.
The first (leftmost) word is the head, and the other words are direct dependents of the head.

~~~ sdparse
Τάκης Παπαδόπουλος
flat(Τάκης, Παπαδόπουλος)
~~~

~~~ sdparse
Ρωμανός Δ' Διογένης
flat(Ρωμανός, Δ')
flat(Ρωμανός, Διογένης)
~~~

~~~ sdparse
Μάο Τσε Τουνγκ
flat(Μάο, Τσε)
flat(Μάο, Τουνγκ)
~~~

[flat]() is used to connect all the parts of a proper names denoting places in Modern Greek:


~~~ sdparse
την Παλιά Κοκκινιά
flat(Παλιά, Κοκκινιά)
det(Παλιά, την)
~~~

~~~ sdparse
της Νέας Υόρκης
flat(Νέας, Υόρκης)
det(Νέας, της)
~~~

~~~ sdparse
Τα Άνω Δολιανά
det(Δολιανά, Τα)
flat(Δολιανά, Άνω)
~~~

For other proper names such as titles, organization names, etc normal syntactic relations are used.

~~~ sdparse
Ο Βασιλιάς της Αγγλίας
det(Βασιλιάς, Ο)
nmod(Βασιλιάς, Αγγλίας)
det(Αγγλίας, της)
~~~


~~~ sdparse
Γενική Γραμματεία Εκπαίδευσης Ενηλίκων
amod(Γραμματεία, Γενική)
nmod(Γραμματεία, Εκπαίδευσης)
nmod(Εκπαίδευσης, Ενηλίκων)
~~~

This convention is not used for foreign names (transliterated or not), which are annotated in a flat, head-initial structure, in
which all words in the name modify the first one using the `flat` label.

~~~ sdparse
Σαν Σεμπαστιάν
flat(Σαν, Σεμπαστιάν)
~~~

~~~ sdparse
Στράτφορντ απόν Έιβον
flat(Στράτφορντ, απόν)
flat(Στράτφορντ, Έιβον)
~~~

~~~ sdparse
Río de la Plata
flat(Río, de)
flat(Río, la)
flat(Río, Plata)
~~~

~~~ sdparse
Ζαν ντ' Αρκ
flat(Ζαν, ντ')
flat(Ζαν, Αρκ)
~~~

~~~ sdparse
Ludwig van Beethoven
name(Ludwig, van)
name(Ludwig, Beethoven)
~~~

~~~ sdparse
Miguel de Cervantes y Saavedra
name(Miguel, de)
name(Miguel, y)
name(Miguel, Cervantes)
name(Miguel, Saavedra)
~~~


<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:55 CET -->
