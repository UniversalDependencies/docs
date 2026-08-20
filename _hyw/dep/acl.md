---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---

The `acl` relation stands for finite and non-finite clauses that modify a nominal.  This relation contrasts with the [advcl]() relation, which is used for adverbial clauses that modify a predicate. The head of the `acl` relation is the noun
that is modified, and the dependent is the head of the clause that modifies the noun.

Note that in Western Armenian relative clauses get assigned a specific relation [acl:relcl](), a subtype of `acl`.

~~~ conllu
# visual-style 7 10 acl color:blue
1	Այս	այս	DET	_	Deixis=Prox|PronType=Dem	2	det	_	Translit=Ays|LTranslit=ays
2	շարքին	շարք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	7	obl	_	Translit=šark’in|LTranslit=šark’
3	մէջ	մէջ	ADP	_	AdpType=Post	2	case	_	Translit=mēǰ|LTranslit=mēǰ
4	վերջին	վերջին	ADJ	_	Degree=Pos	5	amod	_	Translit=verǰin|LTranslit=verǰin
5	տունը	տուն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	7	nsubj	_	Translit=townë|LTranslit=town
6	մեր	մենք	DET	_	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	7	det:poss	_	Translit=mer|LTranslit=menk’
7	տունն	տուն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	0	root	_	Translit=townn|LTranslit=town
8	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	7	cop	_	Translit=ēr|LTranslit=em|SpaceAfter=No
9	՝	՝	PUNCT	_	_	10	punct	_	Translit=,|LTranslit=,
10	գետնայարկ	գետնայարկ	ADJ	_	_	7	acl	_	Translit=getnayark|LTranslit=getnayark|SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	Translit=,|LTranslit=,
12	պճլիկ	պճլիկ	ADJ	_	Style=Expr	13	amod	_	Translit=pč̣lik|LTranslit=pč̣lik
13	պալքոնով	պալքոն	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	10	conj	_	Translit=palk’onov|LTranslit=palk’on|SpaceAfter=No
14	։	։	PUNCT	_	_	7	punct	_	Translit=.|LTranslit=.
~~~

This relation is no longer used for optional depictives: [advcl]() should be used instead.
See [xcomp]() for further discussion.


Western Armenian also allows finite clausal complements for nouns with a subset of pronouns like *այն* or *նրանում*.
These look roughly like relative clauses, but do not have any omitted role in the dependent clause.
These are also analyzed as `acl`.

~~~ conllu
# visual-style 4 8 acl color:blue


~~~
<!-- Interlanguage links updated Út 30. června 2026, 10:59:25 CEST -->
