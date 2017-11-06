---
layout: base
title:  'Statistics of amod in UD_Latin'
udver: '2'
---

## Treebank Statistics: UD_Latin: Relations: `amod`

This relation is universal.

2146 nodes (7%) are attached to their parents as `amod`.

1228 instances of `amod` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.84389561975769.

The following 15 pairs of parts of speech are connected with `amod`: <tt><a href="la-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la-pos-ADJ.html">ADJ</a></tt> (1785; 83% instances), <tt><a href="la-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (178; 8% instances), <tt><a href="la-pos-PRON.html">PRON</a></tt>-<tt><a href="la-pos-ADJ.html">ADJ</a></tt> (62; 3% instances), <tt><a href="la-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la-pos-ADJ.html">ADJ</a></tt> (57; 3% instances), <tt><a href="la-pos-PRON.html">PRON</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (21; 1% instances), <tt><a href="la-pos-VERB.html">VERB</a></tt>-<tt><a href="la-pos-ADJ.html">ADJ</a></tt> (14; 1% instances), <tt><a href="la-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (11; 1% instances), <tt><a href="la-pos-NUM.html">NUM</a></tt>-<tt><a href="la-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="la-pos-ADV.html">ADV</a></tt>-<tt><a href="la-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="la-pos-NUM.html">NUM</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="la-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="la-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="la-pos-VERB.html">VERB</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="la-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="la-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la-pos-X.html">X</a></tt>-<tt><a href="la-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	Interim	interim1	ADV	d--------	_	7	advmod	_	_
2	proelio	proelium1	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	7	advmod	_	_
3	equestri	equester1	ADJ	a-s---nb-	Case=Abl|Gender=Neut|Number=Sing	2	amod	_	_
4	inter	inter1	ADP	r--------	_	6	case	_	_
5	duas	duo	NUM	m-p---fa-	Case=Acc|Gender=Fem|Number=Plur	6	nummod	_	_
6	acies	acies1	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	7	obl	_	_
7	contendebatur	contendo1	VERB	v3siip---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
8	.	punc1	PUNCT	u--------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 amod	color:blue
1	sciet	scio1	VERB	v3sfia---	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
2	haec	hic1	PRON	p-p---na-	Case=Acc|Gender=Neut|Number=Plur	1	obj	_	_
3	insana	insanus1	ADJ	a-s---fn-	Case=Nom|Gender=Fem|Number=Sing	4	amod	_	_
4	puella	puella1	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	_
5	et	et1	CCONJ	c--------	_	1	cc	_	_
6	tibi	tu1	PRON	p-s---md-	Case=Dat|Gender=Masc|Number=Sing	1	conj	_	_
7	non	non1	ADV	d--------	_	8	advmod	_	_
8	tacitis	taceo	VERB	v-prppfb-	Aspect=Perf|Case=Abl|Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	9	amod	_	_
9	vocibus	vox1	NOUN	n-p---fb-	Case=Abl|Gender=Fem|Number=Plur	10	nmod	_	_
10	hostis	hostis1	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	1	conj	_	_
11	erit	sum1	VERB	v3sfia---	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	10	cop	_	SpaceAfter=No
12	;	punc1	PUNCT	u--------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 amod	color:blue
1	verum	verus	ADV	d--------	_	7	advmod	_	_
2	tamen	tamen1	ADV	d--------	_	7	advmod	_	_
3	quid	quis1	PRON	p-s---na-	Case=Acc|Gender=Neut|Number=Sing	7	obj	_	_
4	sibi	sui1	PRON	p-p---md-	Case=Dat|Gender=Masc|Number=Plur	7	iobj	_	_
5	isti	iste1	PRON	p-p---mn-	Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	_
6	miseri	miser1	ADJ	a-p---mn-	Case=Nom|Gender=Masc|Number=Plur	5	amod	_	_
7	volunt	volo1	VERB	v3ppia---	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
8	?	punc1	PUNCT	u--------	_	7	punct	_	_

~~~


