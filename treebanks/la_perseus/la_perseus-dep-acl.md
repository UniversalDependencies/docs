---
layout: base
title:  'Statistics of acl in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="la_perseus-dep-acl-relcl.html">acl:relcl</a></tt>.

79 nodes (0%) are attached to their parents as `acl`.

58 instances of `acl` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.30379746835443.

The following 8 pairs of parts of speech are connected with `acl`: <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (55; 70% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (8; 10% instances), <tt><a href="la_perseus-pos-DET.html">DET</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (6; 8% instances), <tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (4; 5% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="la_perseus-pos-DET.html">DET</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 acl	color:blue
1	proinde	proinde	ADV	d--------	_	9	advmod	_	LId=proinde1
2	quasi	quasi	SCONJ	d--------	_	4	mark	_	LId=quasi1
3	iniuriam	iniuria	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	4	obj	_	LId=injuria1
4	facere	facio	VERB	v--pna---	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	5	acl	_	LId=facio1
5	id	is	PRON	p-s---nn-	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	LId=is1
6	demum	demum	ADV	d--------	_	9	advmod	_	LId=demum1
7	esset	sum	AUX	v3sisa---	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	cop	_	LId=sum1|TraditionalMood=Subiunctivus|TraditionalTense=Imperfectum
8	imperio	imperium	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	9	obj	_	LId=imperium1
9	uti	utor	VERB	v--pnp---	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Pass	0	root	_	SpaceAfter=No|LId=utor1
10	.	.	PUNCT	u--------	_	9	punct	_	LId=punc1

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


