---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun (adnominal clause)'
udver: '2'
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
There are many online sites offering booking facilities .
acl(sites, offering)
~~~

~~~ sdparse
I have a parakeet named cookie .
acl(parakeet, named)
~~~

~~~ sdparse
A president certain that they are correct is dangerous . 
acl(president, certain)
ccomp(certain, correct)
nsubj(dangerous, president)
~~~

~~~ sdparse
I just want a simple way to get my discount .
acl(way, get)
~~~

~~~ sdparse
Cette affaire à suivre \n This case to follow 
acl(affaire, suivre)
~~~

A relative clause is an instance of `acl`, characterized by finiteness and usually omission of 
the modified noun in the embedded clause. Some languages use a language-particular subtype `acl:relcl` for the traditional class of relative clauses.

~~~ sdparse
I saw the man you love
acl:relcl(man, love)
~~~

Some languages allow finite clausal complements for nouns with 
a subset of nouns like *fact* or *report*. These look roughly like relative clauses, but do not have any omitted role in the dependent clause. This is the class of "content clauses" in Huddleston and Pullum 2002). These are also analyzed as `acl`.

~~~ sdparse
the fact that nobody cares
acl(fact, cares)
~~~

This relation is no longer used for optional depictives: [advcl]() should be used instead.

<!-- Interlanguage links updated St lis 3 20:58:33 CET 2021 -->
