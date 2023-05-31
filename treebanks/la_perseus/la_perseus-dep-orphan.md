---
layout: base
title:  'Statistics of orphan in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `orphan`

This relation is universal.

2 nodes (0%) are attached to their parents as `orphan`.

1 instances of `orphan` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `orphan`: <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (1; 50% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 orphan	color:blue
1	Pernicies	pernicies	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	4	nsubj:pass	_	_
2	ait	aio	VERB	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	parataxis	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
3	Tibi	tu	PRON	p-s---fd-	Case=Dat|Number=Sing|Person=2|PronType=Prs	4	obl	_	_
4	paratur	paro	VERB	v3spip---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LId=paro1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
5	,	,	PUNCT	u--------	_	9	punct	_	_
6	forsan	forsan	ADV	d--------	_	9	orphan	_	_
7	et	etiam	ADV	c--------	_	9	advmod:emph	_	_
8	miserae	miser	ADJ	a-s---fd-	Case=Dat|Gender=Fem|Number=Sing	9	xcomp	_	_
9	mihi	ego	PRON	p-s---fd-	Case=Dat|Number=Sing|Person=1|PronType=Prs	3	conj	_	SpaceAfter=No
10	;	;	PUNCT	u--------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 orphan	color:blue
1	An	an	PART	c--------	_	9	discourse	_	LId=an1
2	satis	satis	ADV	d--------	_	7	advmod	_	SpaceAfter=No|LId=satis1
3	,	,	PUNCT	u--------	_	5	punct	_	LId=comma1
4	o	O	INTJ	e--------	_	5	discourse	_	LId=O1
5	superi	superi	NOUN	n-p---mv-	Case=Voc|Gender=Masc|Number=Plur	9	vocative	_	SpaceAfter=No|LId=superi1
6	,	,	PUNCT	u--------	_	5	punct	_	LId=comma1
7	tutos	tutus	ADJ	v-prppma-	Case=Acc|Gender=Masc|Number=Plur|VerbForm=Part	9	ccomp	_	LId=tueor1
8	fore	sum	AUX	v--fna---	Aspect=Imp|Tense=Fut|VerbForm=Inf	7	cop	_	LId=sum1
9	creditis	credo	VERB	v2ppia---	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=credo1|TraditionalMood=Indicativus|TraditionalTense=Praesens
10	illos	ille	DET	p-p---ma-	Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	7	nsubj	_	SpaceAfter=No|LId=ille1
11	,	,	PUNCT	u--------	_	12	punct	_	LId=comma1
12	cum	cum	SCONJ	c--------	_	25	mark	_	LId=cum1
13	mihi	ego	PRON	p-s---md-	Case=Dat|Number=Sing|Person=1|PronType=Prs	25	obl:arg	_	SpaceAfter=No|LId=ego1
14	,	,	PUNCT	u--------	_	15	punct	_	LId=comma1
15	qui	qui	PRON	p-s---mn-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	13	acl:relcl	_	LId=qui1
16	fulmen	fulmen	NOUN	n-s---na-	Case=Acc|Gender=Neut|Number=Sing	15	orphan	_	SpaceAfter=No|LId=fulmen1
17	,	,	PUNCT	u--------	_	21	punct	_	LId=comma1
18	qui	qui	PRON	p-s---mn-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	21	nsubj	_	LId=qui1
19	vos	tu	PRON	p-p---ma-	Case=Acc|Number=Plur|Person=2|PronType=Prs	21	obj	_	LId=tu1
20	que	que	CCONJ	c--------	_	21	cc	_	LId=que1
21	habeo	habeo	VERB	v1spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	15	conj	_	LId=habeo1|TraditionalMood=Indicativus|TraditionalTense=Praesens
22	que	que	CCONJ	c--------	_	23	cc	_	LId=que1
23	rego	rego	VERB	v1spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	21	conj	_	LId=rego1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
24	,	,	PUNCT	u--------	_	21	punct	_	LId=comma1
25	struxerit	struo	VERB	v3stia---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	9	advcl	_	LId=struo1|TraditionalMood=Indicativus|TraditionalTense=Futurum
26	insidias	insidiae	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	25	obj	_	LId=insidiae1
27	notus	Notus	PROPN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	25	nsubj	_	LId=Notus2
28	feritate	feritas	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	27	obl	_	LId=feritas1
29	Lycaon	Lycaon	PROPN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	27	flat:name	_	SpaceAfter=No|LId=Lycaon1
30	?	?	PUNCT	u--------	_	9	punct	_	LId=punc1
31	'	'	PUNCT	u--------	_	9	punct	_	LId=QUOTE1

~~~


