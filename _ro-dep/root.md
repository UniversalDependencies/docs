--
layout: relation
title: 'root'
shortdef: 'root'
---

The `root` grammatical relation points to the root of the sentence. A fake node "ROOT" is used as the governor. The ROOT node is indexed with "0", since the indexation of real words in the sentence starts at 1. 

~~~ sdparse
ROOT Copilul aleargă . \n ROOT Child-the runs .
root(ROOT-2, aleargă)
root(ROOT-7, runs)
~~~

~~~ sdparse
ROOT Vin imediat . \n ROOT Come-I immediately .
root(ROOT-1, vin)
root(ROOT-6, come-I)
~~~

~~~ sdparse
ROOT Fata este frumoasă . \n ROOT Girl-the is beautiful .
root(ROOT-3, frumoasă)
root(ROOT-9, beautiful)
~~~

~~~ sdparse
ROOT Vin imediat . \n ROOT Come-I immediately .
root(ROOT-1, vin)
root(ROOT-5, come-I)
~~~

