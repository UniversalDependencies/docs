---
layout: relation
title: 'mark'
shortdef: 'marker'
udver: '2'
---

A marker is the subordinating conjunction introducing a finite clause subordinate to another clause. 
The `mark` is a dependent of the subordinate clause head.

~~~ conllu
# visual-style 6 4 mark color:blue
1	Խոստովանինք	խոստովանիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=1|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=Xostovanink’|LTranslit=xostovanil
2	սակայն	սակայն	PART	_	_	1	discourse	_	Translit=sakayn|LTranslit=sakayn|SpaceAfter=No
3	,	,	PUNCT	_	_	6	punct	_	Translit=,|LTranslit=,
4	որ	որ	SCONJ	_	_	6	mark	_	Translit=or|LTranslit=or
5	աշխարհը	աշխարհ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	6	nsubj	_	Translit=ašxarhë|LTranslit=ašxarh
6	չցնցուեցաւ	ցնցուիլ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	1	ccomp	_	Translit=čc’nc’owec’aw|LTranslit=c’nc’owil
7	ատկէ	ատիկա	PRON	_	Case=Abl|Deixis=Med|Number=Sing|PronType=Dem	6	obl	_	Translit=atkē|LTranslit=atika|SpaceAfter=No
8	:	:	PUNCT	_	Foreign=Yes	1	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
# visual-style 6 4 mark color:blue
1	Ու	ու	CCONJ	_	_	4	cc	_	Translit=OW|LTranslit=ow
2	եթէ	եթէ	SCONJ	_	_	4	mark	_	Translit=et’ē|LTranslit=et’ē
3	Աստուած	Աստուած	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	4	nsubj	_	Translit=Astowaç|LTranslit=Astowaç
4	կամենայ	կամենալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis	_	Translit=kamenay|LTranslit=kamenal|SpaceAfter=No
5	՝	՝	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
6	պիտի	պիտի	AUX	_	Aspect=Prosp|Mood=Ind|Polarity=Pos	7	aux	_	Translit=piti|LTranslit=piti
7	տպեմ	տպել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=1|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=tpem|LTranslit=tpel
~~~

Note that the subordinating conjunction should not be confused with relative pronouns and adverbs.
These fill a valency slot in the frame of the subordinate predicate, and are labeled according to their role in the frame, they are not `mark`:

~~~ conllu
# visual-style 3 1 advmod color:blue
1	Երբոր	երբոր	ADV	_	PronType=Rel	3	advmod	_	Translit=Erbor|LTranslit=erbor
2	ետին	ետին	ADV	_	_	3	compound:lvc	_	Translit=etin|LTranslit=etin
3	դարձաւ	դառնալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	6	advcl	_	Translit=darjaw|LTranslit=daṙnal|SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	Translit=,|LTranslit=,
5	մարդ	մարդ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	6	nsubj	_	Translit=mard|LTranslit=mard
6	չկար	կամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Subcat=Intr|Tense=Imp|VerbForm=Fin|Voice=Mid	0	root	_	Translit=čkar|LTranslit=kam|SpaceAfter=No
7	.	.	PUNCT	_	_	10	punct	_	Translit=.|LTranslit=.
~~~

<!-- Interlanguage links updated Út 30. června 2026, 11:00:14 CEST -->
