---
layout: relation
title: 'cop:emph'
shortdef: 'emphasizing copula'
udver: '2'
---

It is a special relation which captures the 'Focus' in a phrase. 
In cleft constructions,the verb is nominalized 
and the copula is postposed to the focused element.

~~~ sdparse
ആര് ആണ് എഴുതിയത് എന്ന് അവർക്ക് അറിയില്ല . \n Who is wrote that they know-not .
nsubj(എഴുതിയത്, ആര്)
cop:emph(എഴുതിയത്, ആണ്)
cop:emph(wrote, is)
ccomp(അറിയില്ല, എഴുതിയത്)
mark(എഴുതിയത്, എന്ന്)
nsubj(അറിയില്ല, അവർക്ക്)
punct(അറിയില്ല, .)
~~~
