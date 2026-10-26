---
layout: base
title:  'Statistics of expl in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `expl`

This relation is universal.
There are 2 language-specific subtypes of `expl`: <tt><a href="it_kiparlaforest-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="it_kiparlaforest-dep-expl-pass.html">expl:pass</a></tt>.

426 nodes (2%) are attached to their parents as `expl`.

400 instances of `expl` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19953051643192.

The following 6 pairs of parts of speech are connected with `expl`: <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (405; 95% instances), <tt><a href="it_kiparlaforest-pos-AUX.html">AUX</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (9; 2% instances), <tt><a href="it_kiparlaforest-pos-X.html">X</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (6; 1% instances), <tt><a href="it_kiparlaforest-pos-ADV.html">ADV</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl	color:blue
1	okay	ok	INTJ	_	_	4	discourse	_	Backchannel=BOD2018_16b::11|Begin=49.76|End=50.42|KID=17-0
2	e	e	CCONJ	_	_	4	discourse	_	Begin=50.735|KID=18-0
3	si	si	PRON	_	Person=3|PronType=Prs	4	expl	_	Clitic=Yes|KID=18-1
4	trova	trovare	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	KID=18-2
5	in	in	ADP	_	_	6	case	_	KID=18-3
6	centro	centro	NOUN	_	Gender=Masc|Number=Sing	4	obl	_	KID=18-4|Prolonged=Yes
7	a	a	ADP	_	_	9	case	_	KID=18-5a
8	la	il	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	KID=18-5b
9	città	città	NOUN	_	Gender=Fem	6	nmod	_	KID=18-6|Prolonged=Yes
10	o	o	CCONJ	_	_	11	cc	_	KID=18-7
11	fuori	fuori	ADV	_	_	4	orphan	_	End=53.755|Intonation=Rising|KID=18-8

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 expl	color:blue
1	c'	ci	PRON	_	Number=Plur|Person=1|PronType=Prs	2	expl	_	Begin=28.547|KID=12-0|Truncated=Yes
2	è	essere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	KID=12-1
3	qualcuno	qualcuno	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	2	nsubj	_	KID=12-2
4	che	che	SCONJ	_	PronType=Rel	6	nsubj	_	KID=12-3
5	c'	ci	PRON	_	Number=Plur|Person=1|PronType=Prs	6	expl	_	KID=12-4|Truncated=Yes
6	ha	avere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	KID=12-5
7	provato	provare	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	xcomp	_	KID=12-6|Prolonged=Yes
8	comunque	comunque	CCONJ	_	_	7	cc	_	End=30.444|Intonation=WeaklyRising|KID=12-7

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl	color:blue
1	non	non	ADV	_	PronType=Neg	3	advmod	_	Begin=1180.744|KID=759-0|PaceFast=Yes
2	si	si	PRON	_	Person=3|PronType=Prs	3	expl	_	Clitic=Yes|KID=759-1
3	capi~	capi~	X	_	_	7	reparandum	_	Interrupted=Yes|KID=759-2
4	ma	ma	CCONJ	_	_	7	cc	_	KID=759-3
5	non	non	ADV	_	PronType=Neg	7	advmod	_	KID=759-4
6	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	KID=759-5
7	pari	pari	ADJ	_	Number=Plur	0	root	_	KID=759-6
8	de	di	ADP	_	_	9	case	_	KID=759-7|Variation=Yes
9	cervello	cervello	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	KID=759-8
10	cioè	cioè	CCONJ	_	_	7	discourse	_	End=1183.244|KID=759-9|PaceFast=Yes

~~~


