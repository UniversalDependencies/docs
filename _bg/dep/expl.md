---
layout: relation
title: 'expl'
shortdef: 'expletive'
udver: '2'
---

This relation captures expletive or pleonastic nominals. These are nominals that appear in an argument position of a predicate but which do not themselves satisfy any of the semantic roles of the predicate. The main predicate of the clause (the verb or predicate adjective or noun) is the governor. In English, this is the case for some uses of it and there: the existential there, and it when used in extraposition constructions. (Note that both it and there also have non-expletive uses.)

A second, related, use of the expl relation is for cases of true clitic doubling. However, other languages, such as Greek and Bulgarian, standardly allow doubling of a lexical nominal and a pronominal clitic, with the former still appearing in its regular role as an argument of the predicate. In these cases, if only one of the lexical nominal and the clitic appear in a clause, then whichever appears will be given the grammatical role of [obj](), [iobj](), etc. – parallel to the treatment of lexical nominals and pronouns in other languages, modulo the clitic pronoun having a different position in the sentence. However, if both occur, the lexical nominal will be given the grammatical role of [obj](), [iobj](), etc., and the clitic will be treated as a pronominal copy, which does not receive its own semantic role, and hence will get the role [expl](). 

~~~ sdparse
Щях да я науча аз нея .
obj(науча-4, нея-6)
expl(науча-4, я-3)
~~~

~~~ sdparse
I would teach her.CLITIC her.ARGUMENT a lesson .
obj(teach-3, her.ARGUMENT-5)
expl(teach-3, her.CLITIC-4)
~~~

In Bulgarian this relation is used also for reflexive particles that are semantiaclly vacuous and thus are part of the lexical meaning of the verb.

~~~ sdparse
Чичо Митуш се залови за работа .
expl(залови-4, се-3)
~~~

~~~ sdparse
Uncle Mitush REFL started work .
expl(started-4, REFL-3)
~~~


<!-- Interlanguage links updated Út zář 29 18:41:21 CEST 2020 -->
