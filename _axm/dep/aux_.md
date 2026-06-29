---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "axm/dep/aux.html"
udver: '2'
---

An auxiliary of a clause is a form of the [auxiliary verbs](AUX) _եմ_ “be”, and its variants (with separate lemma) _լինիմ_/_linim_ “be repeatedly / habitually”, also the verbal auxiliaries  _ունիմ_/_ownim_ “have”, _կամ_/_kam_ “exist”, and partical-like auxiliaries _պիտի (պիտ, տի)_/_piti (pit, ti)_ “must/will”, _կու (կոյ, կ-)_/_kow (koy, k-)_ “do/will” and the negative auxiliaries _չի (չ-)_/_či (č-)_ “do/es not”, _ոչ/oč_ “do/es not” used to construct the periphrastic and the “secondary compound” tenses (in several moods). 

Besides `aux`, the forms of _եմ_/_em_ and  _լինիմ_/_linim_ may also act as a [copula](cop).

Note that in Middle Armenian the auxiliary verb _տալ_ used to construct causative constructions is labeled [aux:caus]().

~~~ conllu
# visual-style 4 3 aux color:blue
1	էգ	էգ	ADJ	_	Degree=Pos	2	amod	_	_
2	իժ	իժ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	4	nsubj	_	_
3	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	խայթել	խայթել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	_
~~~

~~~ conllu
# visual-style 6 7 aux color:blue
1	եւ	եւ	CCONJ	_	_	13	cc	_	_
2	այս	այս	DET	_	Deixis=Prox|PronType=Dem	3	det	_	_
3	օձս	օձ	NOUN	_	Animacy=Nhum|Case=Nom|Deixis[psor]=Prox|Number=Sing	6	nsubj	_	_
4	յորժամ	յորժամ	ADV	_	_	6	advmod	_	_
5	ի	ի	ADP	_	AdpType=Prep	6	case	_	_
6	գնալն	գնալ	VERB	_	Case=Nom|Definite=Def|Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	13	advcl	_	_
7	լինի	լինիլ	AUX	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Tense=Pres|VerbForm=Fin	6	aux	_	SpaceAfter=No
8	,	,	PUNCT	_	_	13	punct	_	_
9	նայ	նայ	SCONJ	_	Style=Var	13	mark	_	_
10-11	զգլուխն	_	_	_	_	_	_	_	_
10	զ	զ	ADP	_	AdpType=Prep	11	case	_	_
11	գլուխն	զգլուխ	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Sing	13	nsubj	_	_
12	բարձր	բարձր	ADJ	_	_	13	advcl	_	_
13	կենայ	կենալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	2	conj	_	_
~~~

~~~ conllu
# visual-style 11 10 aux color:blue
1	մարդիք	մարդ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Plur	2	nsubj	_	_
2	լինին	լինիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
3-4	յայլազգեացն	_	_	_	_	_	_	_	SpaceAfter=No
3	յ	ի	ADP	_	AdpType=Prep	4	case	_	_
4	այլազգեացն	այլազգի	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Plur	2	obl	_	_
5	,	,	PUNCT	_	_	11	punct	_	_
6	որ	որ	PRON	_	Case=Nom|Number=Sing|PronType=Rel	11	nsubj	_	_
7	այն	այն	DET	_	Deixis=Remt|PronType=Dem	8	det	_	_
8	շմորոյն	շմոր	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	9	nmod:poss	_	_
9	պատճառք	պատճառ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	11	xcomp	_	_
10	լինին	լինիլ	AUX	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Tense=Pres|VerbForm=Fin	11	aux	_	_
11	լել	լինալ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	4	acl:relcl	_	_
~~~
<!-- Interlanguage links updated Po 29. června 2026, 18:11:46 CEST -->
