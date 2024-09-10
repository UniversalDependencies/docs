---
layout: base
title:  'Statistics of cc in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `cc`

This relation is universal.

1523 nodes (5%) are attached to their parents as `cc`.

1226 instances of `cc` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.80236375574524.

The following 21 pairs of parts of speech are connected with `cc`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt> (798; 52% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt> (430; 28% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt> (129; 8% instances), <tt><a href="la_perseus-pos-ADV.html">ADV</a></tt>-<tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt> (44; 3% instances), <tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt> (27; 2% instances), <tt><a href="la_perseus-pos-DET.html">DET</a></tt>-<tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt> (23; 2% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt> (21; 1% instances), <tt><a href="la_perseus-pos-ADP.html">ADP</a></tt>-<tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt> (12; 1% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-SCONJ.html">SCONJ</a></tt> (9; 1% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-SCONJ.html">SCONJ</a></tt> (6; 0% instances), <tt><a href="la_perseus-pos-NUM.html">NUM</a></tt>-<tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt> (5; 0% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="la_perseus-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="la_perseus-pos-PART.html">PART</a></tt>-<tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="la_perseus-pos-AUX.html">AUX</a></tt>-<tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-DET.html">DET</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
1	Sed	sed	CCONJ	c--------	_	4	cc	_	LId=sed1
2	terrae	terra	NOUN	n-s---fg-	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	LId=terra1
3	graviora	gravis	ADJ	a-p---nnc	Case=Nom|Degree=Cmp|Gender=Neut|Number=Plur	4	nsubj	_	LId=gravis1
4	manent	maneo	VERB	v3ppia---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=maneo1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
5	.	.	PUNCT	u--------	_	4	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	Non	non	PART	d--------	_	11	advmod:neg	_	LId=non1
2	Simois	Simois	PROPN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	11	nsubj	_	LId=Simois1
3	tibi	tu	PRON	p-s---md-	Case=Dat|Number=Sing|Person=2|PronType=Prs	11	obl:arg	_	SpaceAfter=No|LId=tu1
4	,	,	PUNCT	u--------	_	3	punct	_	LId=comma1
5	nec	neque	CCONJ	c--------	_	6	cc	_	_
6	Xanthus	Xanthus	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	2	conj	_	SpaceAfter=No|LId=Xanthus1
7	,	,	PUNCT	u--------	_	8	punct	_	LId=comma1
8	nec	neque	CCONJ	c--------	_	10	cc	_	_
9	Dorica	Doricus	ADJ	a-p---nn-	Case=Nom|Gender=Neut|Number=Plur	10	amod	_	LId=Doricus1
10	castra	castrum	NOUN	n-p---nn-	Case=Nom|Gender=Neut|Number=Plur	2	conj	_	LId=castrum1
11	defuerint	desum	VERB	v3ptia---	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Futurum
12	;	;	PUNCT	u--------	_	11	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 cc	color:blue
1	hac	hic	DET	p-s---fb-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	2	det	_	LId=hic1
2	parte	pars	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	8	obl	_	LId=pars1
3	potentes	potens	ADJ	a-p---fn-	Case=Nom|Gender=Fem|Number=Plur	4	amod	_	LId=potens1
4	caelicolae	caelicola	NOUN	n-p---fn-	Case=Nom|Gender=Fem|Number=Plur	8	nsubj	_	LId=caelicola1
5	clari	clarus	ADJ	a-p---mn-	Case=Nom|Gender=Masc|Number=Plur	3	conj	_	_
6	que	que	CCONJ	c--------	_	5	cc	_	LId=que1
7	suos	suus	DET	a-p---ma-	Case=Acc|Gender=Masc|Number=Plur|Person[psor]=3|Poss=Yes|PronType=Prs	9	det	_	LId=suus1
8	posuere	pono	VERB	v3pria---	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LId=pono1|TraditionalMood=Indicativus|TraditionalTense=Perfectum
9	penates	Penates	PROPN	n-p---ma-	Case=Acc|Gender=Masc|Number=Plur	8	obj	_	SpaceAfter=No|LId=Penates1
10	.	.	PUNCT	u--------	_	8	punct	_	LId=punc1

~~~


