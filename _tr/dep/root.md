---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The `root` grammatical relation points to the root of the sentence.
A fake node "ROOT" is used as the governor.
The ROOT node is indexed with "0", since the indexation of real words in the sentence starts at 1.

~~~ sdparse
ROOT Neslihan ağlıyor . \n Neslihan is crying .
root(ROOT, ağlıyor)
~~~

~~~ sdparse
ROOT Aslı yemek yemek istiyor . \n Aslı wants to eat .
root(ROOT, istiyor)
~~~

~~~ sdparse
ROOT Ali'nin kitabı  \n Ali's book
root(ROOT, kitap)
~~~
<!-- Interlanguage links updated St lis 3 20:59:10 CET 2021 -->
