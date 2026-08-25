---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

A clausal complement of a verb or adjective is a dependent clause which is a core argument. That is, it functions like an object of the verb, or adjective.

~~~ conllu
# visual-style 2 5 ccomp color:blue
1	Փորձառութիւնը	փորձառութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	2	nsubj	_	Translit=P’orjaṙowt’iwnë|LTranslit=p’orjaṙowt’iwn
2	հաստատեց	հաստատել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=hastatec’|LTranslit=hastatel
3	թէ	թէ	SCONJ	_	_	5	mark	_	Translit=t’ē|LTranslit=t’ē
4	միշտ	միշտ	ADV	_	_	5	advmod:emph	_	Translit=mišt|LTranslit=mišt
5	ոսկի	ոսկի	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	2	ccomp	_	Translit=oski|LTranslit=oski
6	չէ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	5	cop	_	Translit=čē|LTranslit=em|SpaceAfter=No
7	։	։	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

Such clausal complements may be finite or nonfinite. However, if the subject of the clausal complement is controlled (that is, must be the same as the higher subject or object, with no other possible interpretation) the appropriate relation is [xcomp]().

The key difference here is that, while it is possible to interpret the first sentence to mean that the boss will not be doing any digging, in the second sentence it is clear that the subject of **digging** can only be **we**. This is what distinguishes `ccomp` and `xcomp`.

Note that in constructions such as _բանն այն է, որ…_/_bann ayn ē, or…_ “the fact is that…”, the complement clause introduced by _որ_/_or_ is analyzed as [acl]() rather than `ccomp`. More generally, `ccomp` is not used with nominal heads, since nominals do not normally take core arguments.
