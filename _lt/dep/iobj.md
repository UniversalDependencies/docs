---
layout: relation
title:  'iobj'
shortdef : 'indirect object'
udver: '2'
---

In general, if there is just one object, it should be labeled [obj](), regardless of the morphological case or semantic role that it bears. If there are two or more objects, one of them should be [obj]() (or [ccomp]() – if it is a verbal object) and the others should be `iobj`. In such cases, it is necessary to decide what is the most directly affected object (patient). In this example one of them is direct object (patient), the other is indirect (addressee): 
~~~ sdparse
Jis moko dukrą matematikos . \n He is-teaching his-daughter maths .
iobj(moko, dukrą)
iobj(is-teaching, his-daughter)
~~~

A single object in a sentence may be annotated as `iobj` when there is also a clausal complement ([ccomp]()) functioning as another object in the same sentence:
~~~ sdparse
Jis moko studentus , kad gerai rašyti yra svarbu . \n He teaches the-students that writing well is important .
iobj(moko, studentus)
iobj(teaches, the-students)
~~~
