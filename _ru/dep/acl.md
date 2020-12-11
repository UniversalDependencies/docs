---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of nominal'
udver: '2'
---


`acl` stands for finite and non-finite clauses that modify a nominal.  The `acl` relation 
contrasts with the [advcl]() relation, which is used for adverbial clauses
that modify a predicate. The head of the `acl` relation is the nominal
that is modified, and the dependent is the head of the clause that
modifies the nominal.

~~~ sdparse
мужчина , о котором я говорил \n man , about whom I have-talked
acl(мужчина, говорил)
acl(man, have-talked)
~~~

This relation is also used for optional depictives.
The adjective is taken to modify the nominal of which it provides a secondary predication.
See [u-dep/xcomp]() for further discussion of resultatives and depictives.

~~~ sdparse
Она позвонила мне из больницы очень расстроенная . \n She called me from the hospital , upset . 
acl(Она, расстроенная)
acl(She, upset)
~~~

~~~ sdparse
Он нарисовал свою жену обнаженной . \n He painted his wife naked .
acl(жену, обнаженной)
acl(wife, naked)
~~~

It is also used in the floating quantifier constructions with the semi-predicatives *sam* 'oneself', *odin* 'one, alone', *ves'* 'all, whole', *oba* 'both', and *každyj* 'each' ([Testelets 2001](https://www.rsuh.ru/binary/1787534_30.1322270635.81949.pdf)). If the argument to which the floating quantifier refers is omitted, the quantifier is attached directly to the predicate with the help of the `obl` relation. 

~~~ sdparse
Они пришли сами . \n They came on-their-own .
acl(Они, сами)
acl(They, on-their-own)
~~~

Russian also allows finite clausal complements for the demonstrative pronoun "to" or a subset of nouns like *fact* or *report*.  
These look roughly like relative clauses, but do not have any omitted role in the dependent clause. This is the class of “content clauses” in Huddleston and Pullum 2002). 
These are also analyzed as `acl`.

~~~ sdparse
Дело в том , что всем плевать . \n Cause-is in the-fact , that nobody cares .
acl(том, плевать)
acl(the-fact, cares)
~~~

Some Russian treebanks use a language-particular subtype `acl:relcl` for the traditional class of relative clauses.

~~~ sdparse
Видела мужчину , которого ты любишь . \n I-saw man , whom you love .
acl:relcl(мужчину, любишь)
acl:relcl(man, you-love)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:09 CET 2020 -->
