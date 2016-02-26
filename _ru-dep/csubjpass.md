---
layout: relation
title: 'csubjpass'
shortdef: 'clausal passive subject'
---

A clausal passive subject is a clausal syntactic subject of a passive clause.

~~~ sdparse
Мне было посоветовано , чтобы я все хорошо взвесил . \n It-has-been to-me recommended , that-I it very well weigh .
csubjpass(посоветовано, взвесил)
csubjpass(recommended, weigh)
~~~

Reflexive passive (the meaning is “You are not expected to come before nine o'clock.”)

~~~ sdparse
Предполагается, что вы придете до девяти. \n It-is expected itself , that you-will-come before nine .
csubjpass(Предпологается, придете)
csubjpass(It-is expected, you-will-come)
~~~
