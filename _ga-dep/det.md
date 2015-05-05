---
layout: relation
title: 'det'
shortdef: 'determiner'
---

The `det`label marks the relationship between a noun and its determiner.

In Irish there is no indefinite article, only a definite article. The definite article can be singular (an) or plural (na).


~~~ sdparse
an clár \n the programme
det(clár, an)
~~~

~~~ sdparse
na cláranna \n the programmes
det(cláranna, na)
~~~


Sometimes there are two pre-determiners:

~~~ sdparse
gach uile ábhar \n every single subject 
det(ábhar, gach)
det(ábhar, uile)
~~~

Sometimes two determiners are used each side of a noun: pre-determiners and post-determiners:

~~~ sdparse
an tuairim sin \n that opinion
det(tuairim, an)
det(tuairim, sin)
~~~

~~~ sdparse
an leabhar úd \n that book
det(leabhar, an)
det(leabhar, úd)
~~~

~~~ sdparse
an alt seo \n this paragraph
det(alt, an)
det(alt, seo)
~~~

~~~ sdparse
an chéad cheannaire eile \n the next leader
det(cheannaire, an)
det(cheannaire, eile)
~~~

