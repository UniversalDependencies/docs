---
layout: relation
title: 'det:numgov'
shortdef: 'governing pronominal quantifiers'
udver: '2'
---

The `det:numgov` relation is used in the Polish [PDB-UD](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) treebanks for pronominal quantifiers that are attached as children of the quantified noun but govern its case.

~~~ conllu
# visual-style 9 8 det:numgov color:blue
1	Kofeina	kofeina	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	6:nsubj	_
2	zawarta	zawrzeć	ADJ	ppas:sg:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	1	acl	1:acl	_
3	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Loc
4	ziarnie	ziarno	NOUN	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing	2	obl	2:obl	_
5	kawy	kawa	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	4	nmod:arg	4:nmod:arg	_
6	pobudza	pobudzać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	już	już	PART	part	_	8	advmod:emph	8:advmod:emph	_
8	kilkanaście	kilkanaście	DET	num:pl:acc:f:rec	Case=Acc|Gender=Fem|Number=Plur|NumType=Card|PronType=Ind	9	det:numgov	9:det:numgov	_
9	minut	minuta	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	12	nmod	12:nmod	_
10	po	po	ADP	prep:loc	AdpType=Prep	12	case	12:case	Case=Loc
11	jej	on	PRON	ppron3:sg:gen:f:ter:akc:npraep	Case=Gen|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	12	obj	12:obj	_
12	wypiciu	wypić	NOUN	ger:sg:loc:n:perf:aff	Aspect=Perf|Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	6	obl	6:obl	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_
~~~

~~~ conllu
1	Caffeine	_	_	_	_	_	_	_	_
2	contained	_	_	_	_	_	_	_	_
3	in	_	_	_	_	_	_	_	_
4	coffee	_	_	_	_	_	_	_	_
5	beans	_	_	_	_	_	_	_	_
6	stimulates	_	_	_	_	_	_	_	_
7	just	_	_	_	_	_	_	_	_
8	several	_	_	_	_	_	_	_	_
9	minutes	_	_	_	_	_	_	_	_
10	after	_	_	_	_	_	_	_	_
11	drinking	_	_	_	_	_	_	_	_
12	it	_	_	_	_	_	_	_	_
13	.	_	_	_	_	_	_	_	_
~~~
