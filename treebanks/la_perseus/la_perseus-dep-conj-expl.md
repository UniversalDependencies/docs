---
layout: base
title:  'Statistics of conj:expl in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `conj:expl`

This relation is a language-specific subtype of <tt><a href="la_perseus-dep-conj.html">conj</a></tt>.

9 nodes (0%) are attached to their parents as `conj:expl`.

9 instances of `conj:expl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.44444444444444.

The following 7 pairs of parts of speech are connected with `conj:expl`: <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (3; 33% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (1; 11% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-NUM.html">NUM</a></tt> (1; 11% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt> (1; 11% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 11% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 conj:expl	color:blue
1	et	et	CCONJ	c--------	_	6	cc	_	LId=et1
2	in	in	ADP	r--------	_	3	case	_	LId=in1
3	fronte	frons	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	6	obl	_	LId=frons2
4	eius	is	PRON	p-s---fg-	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nmod	_	LId=is1
5	nomen	nomen	NOUN	n-s---nn-	Case=Nom|Gender=Neut|Number=Sing	6	nsubj:pass	_	LId=nomen1
6	scriptum	scribo	VERB	v-srppnn-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	LId=scribo1|TraditionalMood=Participium|TraditionalTense=Perfectum
7	mysterium	mysterium	NOUN	n-s---nn-	Case=Nom|Gender=Neut|Number=Sing	5	conj:expl	_	SpaceAfter=No|LId=mysterium1
8	:	:	PUNCT	u--------	_	6	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 conj:expl	color:blue
1	Et	et	CCONJ	c--------	_	10	cc	_	LId=et1
2	ne	ne	SCONJ	c--------	_	4	mark	_	LId=ne1
3	me	ego	PRON	p-s---ma-	Case=Acc|Number=Sing|Person=1|PronType=Prs	6	nsubj:pass	_	LId=ego1
4	putes	puteo	VERB	v2spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	10	advcl	_	LId=puteo1|TraditionalMood=Indicativus|TraditionalTense=Praesens
5	studia	studium	NOUN	n-p---na-	Case=Acc|Gender=Neut|Number=Plur	6	obj	_	LId=studium1
6	fastiditum	fastidio	VERB	v-srppma-	Aspect=Perf|Case=Acc|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	4	ccomp	_	LId=fastidio1|SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
7	,	,	PUNCT	u--------	_	4	punct	_	LId=comma1
8	II	II	NUM	m--------	NumForm=Roman|NumType=Card	9	nummod	_	LId=II1
9	bybliothecas	bybliotheca	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	10	obj	_	LId=bybliotheca1
10	habeo	habeo	VERB	v1spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=habeo1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
11	,	,	PUNCT	u--------	_	12	punct	_	LId=comma1
12	unam	unus	ADJ	a-s---fa-	Case=Acc|Gender=Fem|Number=Sing	9	conj:expl	_	LId=unus1
13	Graecam	Graecus	ADJ	a-s---fa-	Case=Acc|Gender=Fem|Number=Sing	12	amod	_	SpaceAfter=No|LId=Graecus1
14	,	,	PUNCT	u--------	_	15	punct	_	LId=comma1
15	alteram	alter	DET	a-s---fa-	Case=Acc|Gender=Fem|Number=Sing|PronType=Con	12	conj	_	LId=alter1
16	Latinam	Latinus	ADJ	a-s---fa-	Case=Acc|Gender=Fem|Number=Sing	15	amod	_	SpaceAfter=No|LId=Latinus1
17	.	.	PUNCT	u--------	_	10	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 conj:expl	color:blue
1	et	et	CCONJ	c--------	_	2	cc	_	LId=et1
2	audivi	audio	VERB	v1sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LId=audio1|TraditionalMood=Indicativus|TraditionalTense=Perfectum
3	numerum	numerus	NOUN	n-s---ma-	Case=Acc|Gender=Masc|Number=Sing	2	obj	_	LId=numerus1
4	signatorum	signator	NOUN	n-p---mg-	Case=Gen|Gender=Masc|Number=Plur	3	nmod	_	LId=signator1
5	centum	centum	NUM	m--------	NumForm=Word|NumType=Card	8	nummod	_	LId=centum1
6	quadraginta	quadraginta	NUM	m--------	NumForm=Word|NumType=Card	5	flat	_	LId=quadraginta1
7	quattuor	quattuor	NUM	m--------	NumForm=Word|NumType=Card	6	flat	_	LId=quattuor1
8	milia	mille	NUM	m--------	NumForm=Word|NumType=Card	3	conj:expl	_	LId=mille1
9	signati	signo	VERB	v-prppmn-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	8	amod	_	LId=signo1|TraditionalMood=Participium|TraditionalTense=Perfectum
10	ex	ex	ADP	r--------	_	12	case	_	LId=ex1
11	omni	omnis	DET	a-s---fb-	Case=Abl|Gender=Fem|Number=Sing|PronType=Tot	12	det	_	LId=omnis1
12	tribu	tribus	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	9	obl	_	LId=tribus1
13	filiorum	filius	NOUN	n-p---mg-	Case=Gen|Gender=Masc|Number=Plur	12	nmod	_	LId=filius1
14	Israhel	Israhel	PROPN	n-s---mg-	Case=Gen|Gender=Masc|Number=Sing	13	nmod	_	SpaceAfter=No|LId=Israhel1
15	:	:	PUNCT	u--------	_	2	punct	_	LId=punc1

~~~


