---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The `root` grammatical relation points to the root of the sentence.
A fake node "ROOT" is used as the governor.
The ROOT node is indexed with "0", since the indexation of real words in the sentence starts at 1.
<!-- Interlanguage links updated Čt lis 12 09:43:39 CET 2020 -->

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
