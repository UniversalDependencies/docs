---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
---
`acl` is used for finite and non-finite clauses that modify a nominal (either a noun or a pronoun). The head of the `acl` relation is the noun/pronoun that is modified, and the dependent is the head of the clause that modifies the noun/pronoun.

`acl` is used in the following cases:
- participial modifiers of nouns 

~~~ conllu
# Commossa, Fiona May ha parlato
1 Commossa  commuovere  VERB  V Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part 3 acl
2 ,	,	PUNCT	FF	_	1	punct
3 Fiona	Fiona	PROPN	SP	_	6	nsubj
4 May	May	PROPN	SP	_	3	name
5 ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux
6 parlato	parlare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root
~~~

- relative clauses, also including free relatives. Note that in Italian relative clauses are assigned a specific relation `acl:relcl`, which is a subtype of `acl`
- finite clausal complements of nouns like fatto _fact_, considerazione _consideration_, bisogno _need_
- infinitival modifiers of nouns
