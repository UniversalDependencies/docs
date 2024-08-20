---
layout: relation
title: 'obj'
shortdef: 'object'
udver: '2'
---

The object of a verb (`obj`) is one of two core arguments of the verb together with the subject. This relation is typically used for nouns or nominal phrases which represent the affected object of the action, that is, the entity which undergoes some change of state or position (**the direct object**). In Slovene, this role is most often—but not exclusively—performed by objects in the accusative and genitive (in the case of negation) cases. 
~~~ sdparse
Andreja Burin pa je dobila posebno pohvalo \n Andreja Burin CONJ aux-PAST got a-special commendation
obj(dobila,pohvalo)
obj(got,commendation)
~~~
~~~ sdparse
Neznosna teža nahrbtnika me je vlekla v globino \n Immense weight of-backpack me aux-PAST pulled to depths
obj(vlekla,me-4)
obj(pulled,me-13)
~~~
~~~ sdparse
Trojka ni upoštevala opozorila poročevalca Specialeja \n Troika did-not consider warning of-reporter Speciale
obj(upoštevala,opozorila)
obj(consider,warning)
~~~

The `obj` relation is also used for objects of adjectival and (less often) nominal subject complements. 
~~~ sdparse
Mladi gasilci so prav željni vaj . \n Young firefighters are really eager for-exercises .
obj(željni,vaj)
nsubj(željni,gasilci)
cop(željni,so)
obj(eager,for-exercises)
nsubj(eager,firefighters)
cop(eager,are)
~~~
~~~ sdparse
K sreči niste zapisani samo šahu . \n Luckily you-are-not committed only to-chess .
obj(zapisani,šahu)
cop(zapisani,niste)
obj(committed,to-chess)
cop(committed,you-are-not)
~~~
~~~ sdparse
Župančič je bil domači učitelj grofiču Manfredu Attemsu \n Župančič aux-PAST was home teacher to-count Manfred Attems
obj(učitelj,grofiču)
cop(učitelj,bil)
obj(teacher,to-count)
cop(teacher,was)
~~~

If a clause contains only one non-clausal object (i.e. an object tat is not ccomp), this object can be marked either as a direct object (`obj`) or an indirect object (`iobj`). See the `iobj` relation for more detailed guidelines and examples of sole objects in Slovenian. 

The `obj` relation is not used for prepositional phrases, even if they are syntactically or semantically necessary and cannot be omitted from the sentence (e.g., *veliko se je govorilo o hladni vojni*). Regardless of their meaning and omissibility, prepositional phrases are always treated as peripheral objects (`obl`). 
<!-- Interlanguage links updated Ne 5. května 2024, 18:21:32 CEST -->
