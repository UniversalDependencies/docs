---
layout: base
title: 'acl'
shortdef: 'clausal modifier of noun'
---

## acl: clausal modifier of noun

*acl* stands for finite and non-finite clauses that modify a noun, in contrast to the *advcl* relation which is used for adverbial clauses that modify a predicate. The head of the *acl* relation is the noun that is modified, and the dependent is the head of the clause that modifies the noun.

~~~ sdparse
the issues as he sees them
acl(issues, sees)
~~~

~~~ sdparse
Cette affaire à suivre \n This case to follow 
acl(affaire, suivre)
~~~

A relative clause is an instance of *acl*: the relation points from the noun that is modified to the head of
the relative clause, normally a verb.

~~~ sdparse
I saw the man you love
acl(man, love)
~~~
