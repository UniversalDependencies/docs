---
layout: entry
title: 'acl'
shortdef: 'clausal modifier of noun'
---

`acl` stands for finite and non-finite clauses that modify a nominal.  The `acl` relation 
contrasts with the [advcl]() relation, which is used for adverbial clauses
that modify a predicate. The head of the `acl` relation is the noun
that is modified, and the dependent is the head of the clause that
modifies the noun.

~~~ sdparse
the issues as he sees them
acl(issues, sees)
~~~

~~~ sdparse
Cette affaire à suivre \n This case to follow 
acl(affaire, suivre)
~~~

This relation is also used for optional depictives. The adjective is taken to modify the nominal of which it provides a secondary predication. See [xcomp]() for further discussion of resultatives and depictives.

~~~ sdparse
She entered the room sad
acl(She, sad)
~~~

~~~ sdparse
He painted the model naked
acl(model, naked)
~~~

A relative clause is an instance of `acl`, characterized by finiteness and usually omission of 
the modified noun in the embedded clause.

~~~ sdparse
I saw the man you love
acl(man, love)
~~~
