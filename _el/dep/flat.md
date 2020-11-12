---
layout: relation
title: 'flat'
redirect_from: "el/dep/name.html"
shortdef: 'name'
---

We use the `flat` relation for proper nouns constituted of more than one words. 
The first (leftmost) word is the head, and the other words are direct dependents of the head. 

~~~ sdparse
Τάκης Παπαδόπουλος
name(Τάκης, Παπαδόπουλος)
~~~

~~~ sdparse
Ρωμανός Δ' Διογένης
name(Ρωμανός, Δ')
name(Ρωμανός, Διογένης)
~~~

~~~ sdparse
Μάο Τσε Τουνγκ
name(Μάο, Τσε)
name(Μάο, Τουνγκ)
~~~

Regular syntactic relations are used for Greek:
(i) for a modifier word including determiners, adjectives and adverbs
(ii) to connect together the words of a description or name which involve embedded prepositional phrases, sentences, etc.

~~~ sdparse
την Παλιά Κοκκινιά
amod(Κοκκινιά, Παλιά)
det(Κοκκινιά, την)
~~~

~~~ sdparse
της Νέας Υόρκης
amod(Υόρκης, Νέας)
det(Υόρκης, της)
~~~

~~~ sdparse
Τα Άνω Δολιανά
det(Δολιανά, Τα)
advmod(Δολιανά, Άνω)
~~~

~~~ sdparse
Ο Βασιλιάς της Αγγλίας
det(Βασιλιάς, Ο)
nmod(Βασιλιάς, Αγγλίας)
det(Αγγλίας, της)
~~~

This also holds for organization names with clear syntactic modification structure as in:

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
name(Σαν, Σεμπαστιάν)
~~~

~~~ sdparse
Στράτφορντ απόν Έιβον
name(Στράτφορντ, απόν)
name(Στράτφορντ, Έιβον)
~~~

~~~ sdparse
Río de la Plata
name(Río, de)
name(Río, la)
name(Río, Plata)
~~~

~~~ sdparse
Ζαν ντ' Αρκ
name(Ζαν, ντ')
name(Ζαν, Αρκ)
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


<!-- Interlanguage links updated Čt lis 12 09:43:26 CET 2020 -->
