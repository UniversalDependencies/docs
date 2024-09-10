---
layout: base
title:  'Statistics of parataxis in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `parataxis`

This relation is universal.

45 nodes (0%) are attached to their parents as `parataxis`.

30 instances of `parataxis` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.57777777777778.

The following 3 pairs of parts of speech are connected with `parataxis`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (42; 93% instances), <tt><a href="la_perseus-pos-DET.html">DET</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 parataxis	color:blue
1	Moderatius	moderatus	ADV	d--------	_	5	advmod	_	SpaceAfter=No|LId=moderatus1
2	,	,	PUNCT	u--------	_	3	punct	_	LId=comma1
3	oro	oro	VERB	v1spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	parataxis	_	LId=oro1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
4	,	,	PUNCT	u--------	_	3	punct	_	LId=comma1
5	curre	curro	VERB	v2spma---	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=curro1|TraditionalMood=Imperativus|TraditionalTense=Praesens
6	fugam	fuga	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	8	obj	_	_
7	que	que	CCONJ	c--------	_	6	cc	_	LId=que1
8	inhibe	inhibeo	VERB	v2spma---	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	LId=inhibeo1|SpaceAfter=No|TraditionalMood=Imperativus|TraditionalTense=Praesens
9	;	;	PUNCT	u--------	_	5	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 parataxis	color:blue
1	Quale	qualis	DET	a-s---nn-	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	0	root	_	_
2	inquit	inquam	VERB	v3sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	parataxis	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
3	caput	caput	NOUN	n-s---nn-	Case=Nom|Gender=Neut|Number=Sing	1	nsubj	_	_
4	est	sum	AUX	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	LId=sum1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
5	,	,	PUNCT	u--------	_	7	punct	_	_
6	talis	talis	DET	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	7	xcomp	_	_
7	praestatur	praesto	VERB	v3spip---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	1	conj	_	LId=praesto2|TraditionalMood=Indicativus|TraditionalTense=Praesens
8	sapor	sapor	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	7	nsubj:pass	_	SpaceAfter=No
9	.	.	PUNCT	u--------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 parataxis	color:blue
1	Ingrata	ingratus	ADJ	a-s---fn-	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	es	sum	AUX	v2spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	1	cop	_	LId=sum1|TraditionalMood=Indicativus|TraditionalTense=Praesens
3	inquit	inquam	VERB	v3sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	parataxis	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
4	ore	os	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	9	obj	_	LId=os1
5	quae	qui	PRON	p-s---fn-	Case=Nom|Gender=Fem|Number=Sing|PronType=Rel	9	nsubj	_	LId=qui1
6	nostro	noster	DET	p-s---nb-	Case=Abl|Gender=Neut|Number=Sing|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	4	det	_	_
7	caput	caput	NOUN	n-s---na-	Case=Acc|Gender=Neut|Number=Sing	9	obj	_	_
8	Incolume	incolumis	ADJ	a-s---na-	Case=Acc|Gender=Neut|Number=Sing	9	xcomp	_	_
9	abstuleris	aufero	VERB	v2srsa---	Aspect=Perf|Mood=Sub|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	1	csubj	_	TraditionalMood=Subiunctivus|TraditionalTense=Perfectum
10	et	et	CCONJ	c--------	_	12	cc	_	_
11	mercedem	merces	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	12	obj	_	LId=merces1
12	postules	postulo	VERB	v2spsa---	Aspect=Imp|Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	9	conj	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
13	.	.	PUNCT	u--------	_	1	punct	_	_

~~~


