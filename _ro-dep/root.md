---
layout: relation
title: 'root'
shortdef: 'root'
---

The `root` grammatical relation points to the root of the sentence. A fake node "ROOT" is used as the governor. The ROOT node is indexed with "0", since the indexation of real words in the sentence starts at 1. 

~~~ sdparse
ROOT Copilul aleargă . \n ROOT Child-the runs .
root(ROOT-0, aleargă-2)
root(ROOT-5, runs-7)
~~~

~~~ sdparse
ROOT Vin imediat . \n ROOT Come-I immediately .
root(ROOT-0, vin-1)
root(ROOT-5, come-I-6)
~~~

~~~ sdparse
ROOT Fata este frumoasă . \n ROOT Girl-the is beautiful .
root(ROOT-0, frumoasă-3)
root(ROOT-6, beautiful-9)
~~~

~~~ sdparse
ROOT Este bine să mănânci de dimineață . \n ROOT Is well SĂ eat in morning.
root(ROOT-0, bine-2)
root(ROOT-9, well-11)
~~~
