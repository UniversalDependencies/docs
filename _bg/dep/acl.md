---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun (adjectival clause)'
udver: '2'
---

[acl]() stands for finite and non-finite clauses that modify a nominal. The head of the [acl]() relation is the noun that is modified, and the dependent is the head of the clause that modifies the noun.

~~~ sdparse
Тя няма право да се предава .
acl(право-3, предава-6)
~~~

~~~ sdparse
She does not have the right to surrender .
acl(right-6, surrender-8)
~~~

This relation is also used for optional depictives. The adjective is taken to modify the nominal of which it provides a secondary predication.

A relative clause is an instance of [acl](), characterized by finiteness and usually omission of the modified noun in the embedded clause. Some languages use a language-particular subtype [acl:relcl]() for the traditional class of relative clauses.

~~~ sdparse
Така че много добре знам това , което говоря .
acl:relcl(това-6, говоря-9)
~~~

~~~ sdparse
So I know very well what I am speaking about .
acl:relcl(what-6, speaking-9)
~~~


<!-- Interlanguage links updated Út zář 29 20:31:40 CEST 2020 -->
