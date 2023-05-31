---
layout: base
title:  'Statistics of acl in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="la_perseus-dep-acl-relcl.html">acl:relcl</a></tt>.

75 nodes (0%) are attached to their parents as `acl`.

59 instances of `acl` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.56.

The following 8 pairs of parts of speech are connected with `acl`: <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (55; 73% instances), <tt><a href="la_perseus-pos-DET.html">DET</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (6; 8% instances), <tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (5; 7% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="la_perseus-pos-DET.html">DET</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 acl	color:blue
1	Finem	finis	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	LId=finis1
2	dedit	do	VERB	v3sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LId=do1|TraditionalMood=Indicativus|TraditionalTense=Perfectum
3	ore	os	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	4	obl	_	LId=os1
4	loquendi	loquor	VERB	v---d--g-	Aspect=Prosp|Case=Gen|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	1	acl	_	SpaceAfter=No|TraditionalMood=Gerundium
5	.	.	PUNCT	u--------	_	2	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 acl	color:blue
1	et	et	CCONJ	c--------	_	11	cc	_	LId=et1
2	quaecumque	quicumque	DET	p-p---na-	Case=Acc|Gender=Neut|Number=Plur|PronType=Rel	6	det	_	LId=quicumque1
3	super	super	ADP	r--------	_	7	case	_	LId=super2
4	dispersa	dispergo	VERB	v-prppna-	Aspect=Perf|Case=Acc|Gender=Neut|Number=Plur|VerbForm=Part|Voice=Pass	6	nmod	_	LId=dispergo1|TraditionalMood=Participium|TraditionalTense=Perfectum
5	invenerit	invenio	VERB	v3srsa---	Aspect=Perf|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	10	acl	_	LId=invenio1|TraditionalMood=Subiunctivus|TraditionalTense=Perfectum
6	ossa	os	NOUN	n-p---na-	Case=Acc|Gender=Neut|Number=Plur	5	obj	_	LId=os2
7	montibus	mons	NOUN	n-p---mb-	Case=Abl|Gender=Masc|Number=Plur	5	obl	_	LId=mons1
8	Etruscis	Etruscus	ADJ	a-p---mb-	Case=Abl|Gender=Masc|Number=Plur	7	amod	_	SpaceAfter=No|LId=Etruscus1
9	,	,	PUNCT	u--------	_	5	punct	_	LId=comma1
10	haec	hic	DET	p-p---na-	Case=Acc|Gender=Neut|Number=Plur|PronType=Dem	13	nsubj	_	LId=hic1
11	sciat	scio	VERB	v3spsa---	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=scio1|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
12	esse	sum	AUX	v--pna---	Aspect=Imp|Tense=Pres|VerbForm=Inf	13	cop	_	LId=sum1
13	mea	meus	DET	p-p---na-	Case=Acc|Gender=Neut|Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	11	obj	_	SpaceAfter=No
14	.	.	PUNCT	u--------	_	11	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 acl	color:blue
1	Maenala	Maenala	PROPN	n-p---na-	Case=Acc|Gender=Neut|Number=Plur	2	obj	_	_
2	transieram	transeo	VERB	v1slia---	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pqp|VerbForm=Fin|Voice=Act	0	root	_	LId=transeo1|TraditionalMood=Indicativus|TraditionalTense=Plusquamperfectum
3	latebris	latebra	NOUN	n-p---fb-	Case=Abl|Gender=Fem|Number=Plur	4	obl	_	LId=latebra1
4	horrenda	horreo	VERB	v-ppgpna-	Aspect=Prosp|Case=Acc|Gender=Neut|Number=Plur|VerbForm=Part|Voice=Pass	1	acl	_	LId=horreo1|TraditionalMood=Gerundivum
5	ferarum	fera	NOUN	n-p---fg-	Case=Gen|Gender=Fem|Number=Plur	3	nmod	_	LId=fera1
6	et	et	CCONJ	c--------	_	10	cc	_	LId=et1
7	cum	cum	ADP	r--------	_	8	case	_	LId=cum1
8	Cyllene	Cyllene	PROPN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	1	obl	_	LId=Cyllene1
9	gelidi	gelidus	ADJ	a-s---mg-	Case=Gen|Gender=Masc|Number=Sing	11	amod	_	LId=gelidus1
10	pineta	pinetum	NOUN	n-p---na-	Case=Acc|Gender=Neut|Number=Plur	1	conj	_	LId=pinetum1
11	Lycaei	Lycaeus	PROPN	n-s---mg-	Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	SpaceAfter=No|LId=Lycaeus1
12	:	:	PUNCT	u--------	_	2	punct	_	LId=punc1

~~~


