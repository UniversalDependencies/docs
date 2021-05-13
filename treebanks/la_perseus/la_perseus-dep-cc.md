---
layout: base
title:  'Statistics of cc in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `cc`

This relation is universal.

1293 nodes (4%) are attached to their parents as `cc`.

983 instances of `cc` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.64191802010828.

The following 14 pairs of parts of speech are connected with `cc`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt> (762; 59% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt> (331; 26% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt> (116; 9% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt> (22; 2% instances), <tt><a href="la_perseus-pos-ADV.html">ADV</a></tt>-<tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt> (21; 2% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-SCONJ.html">SCONJ</a></tt> (14; 1% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-SCONJ.html">SCONJ</a></tt> (7; 1% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-X.html">X</a></tt> (4; 0% instances), <tt><a href="la_perseus-pos-NUM.html">NUM</a></tt>-<tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
1	Sed	sed	CCONJ	c--------	_	4	cc	_	LId=sed1
2	terrae	terra	NOUN	n-s---fg-	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	LId=terra1
3	graviora	gravis	ADJ	a-p---nnc	Case=Nom|Degree=Cmp|Gender=Neut|Number=Plur	4	nsubj	_	LId=gravis1
4	manent	maneo	VERB	v3ppia---	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|LId=maneo1
5	.	.	PUNCT	u--------	_	4	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cc	color:blue
1	noctes	nox	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	4	advmod	_	LId=nox1
2	atque	atque	CCONJ	c--------	_	1	cc	_	LId=atque1
3	dies	dies	NOUN	n-p---ma-	Case=Acc|Gender=Masc|Number=Plur	1	conj	_	_
4	patet	pateo	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=pateo1
5	atri	ater	ADJ	a-s---mg-	Case=Gen|Gender=Masc|Number=Sing	7	amod	_	LId=ater1
6	ianua	janua	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	LId=janua1
7	Ditis	Dis	NOUN	n-s---mg-	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No|LId=Dis2
8	;	;	PUNCT	u--------	_	4	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 cc	color:blue
1	hac	hic	PRON	p-s---fb-	Case=Abl|Gender=Fem|Number=Sing	2	nmod	_	LId=hic1
2	parte	pars	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	8	advmod	_	LId=pars1
3	potentes	potens	ADJ	a-p---fn-	Case=Nom|Gender=Fem|Number=Plur	4	amod	_	LId=potens1
4	caelicolae	caelicola	NOUN	n-p---fn-	Case=Nom|Gender=Fem|Number=Plur	8	nsubj	_	LId=caelicola1
5	que	que	CCONJ	c--------	_	3	cc	_	LId=que1
6	clari	clarus	ADJ	a-p---mn-	Case=Nom|Gender=Masc|Number=Plur	3	conj	_	LId=clarus1
7	suos	suus	ADJ	a-p---ma-	Case=Acc|Gender=Masc|Number=Plur	9	amod	_	LId=suus1
8	posuere	pono	VERB	v3pria---	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LId=pono1
9	penates	Penates	NOUN	n-p---ma-	Case=Acc|Gender=Masc|Number=Plur	8	obj	_	SpaceAfter=No|LId=Penates1
10	.	.	PUNCT	u--------	_	8	punct	_	LId=punc1

~~~


