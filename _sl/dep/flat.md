---
layout: relation
title: 'flat'
shortdef: 'flat multiword expression'
udver: '2'
---

The `flat` relation is one of three relations for multiword expressions (MWEs) in UD (the other two being fixed and compound). It is used for exocentric (headless) structures like names and dates. The head of the relation is always the first word of the expression, while all the other words in the expression are its dependents. In the Slovene treebank three different varieties of the **flat** relation are used.

The more general **flat** relation is used for individual tokens that make up **dates and multi-word numerals**.
~~~ sdparse
Rojena sem bila 5. 10. 1957 \n Born I-aux-PAST was 5. 10. 1957
flat(5.-4,10.-5)
flat(5.-4,1957-6)
flat(5.-11,10.-12)
flat(5.-11,1957-13)
~~~

The **flat:name** subtype is used for **personal names**.
~~~ sdparse
Vladimir  Putin
flat:name(Vladimir,Putin)
~~~

The **flat:foreign** subtype is used for **foreign language expressions**. 
~~~ sdparse
V svoji uspešnici You Can Heal Your Life 
flat:foreign(You,Can)
flat:foreign(You,Heal)
flat:foreign(You,Your)
flat:foreign(You,Life)
~~~

Foreign language expressions made up of **proper names** (personal names, names of places, cities, etc.) are also analyzed as flat structures where the first element is the head of a relation ending in every subsequent element,  except that the `nmod` relation is used instead.
~~~ sdparse
Angry Birds je franšiza videoiger . \n Angry Birds is a-franchise of-video-games .
nsubj(franšiza,Angry-1)
nmod(Angry-1,Birds-2)
nsubj(a-franchise,Angry-8)
nmod(Angry-8,Birds-9)
~~~
<!-- Interlanguage links updated Út 9. května 2023, 20:04:16 CEST -->
