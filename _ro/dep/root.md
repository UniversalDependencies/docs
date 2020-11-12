---
layout: relation
title: 'root'
shortdef: 'root'
---

The `root` grammatical relation points to the root of the sentence. A fake node "ROOT" is used as the governor. The ROOT node is indexed with "0", since the indexation of real words in the sentence starts at 1. 

~~~ sdparse
ROOT Copilul aleargă . \n ROOT Child-the runs .
root(ROOT, aleargă)
~~~

~~~ sdparse
ROOT Vin imediat . \n ROOT Come-I immediately .
root(ROOT, Vin)
~~~

~~~ sdparse
ROOT Fata este frumoasă . \n ROOT Girl-the is beautiful .
root(ROOT, frumoasă)
~~~

~~~ sdparse
ROOT Este bine să mănânci de dimineață . \n ROOT Is well SA eat in morning.
root(ROOT, bine)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:39 CET 2020 -->
