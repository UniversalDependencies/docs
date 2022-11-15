---
layout: base
title:  'Statistics of amod in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `amod`

This relation is universal.

2145 nodes (7%) are attached to their parents as `amod`.

1227 instances of `amod` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.84382284382284.

The following 13 pairs of parts of speech are connected with `amod`: <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (1786; 83% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (178; 8% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (62; 3% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (57; 3% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (21; 1% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (14; 1% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (11; 1% instances), <tt><a href="la_perseus-pos-ADV.html">ADV</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="la_perseus-pos-NUM.html">NUM</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="la_perseus-pos-NUM.html">NUM</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 amod	color:blue
1	Non	non	ADV	d--------	_	11	advmod	_	LId=non1
2	Simois	Simois	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	LId=Simois1
3	tibi	tu	PRON	p-s---md-	Case=Dat|Gender=Masc|Number=Sing	11	obj	_	SpaceAfter=No|LId=tu1
4	,	,	PUNCT	u--------	_	8	punct	_	LId=comma1
5	nec	neque	CCONJ	c--------	_	8	advmod	_	_
6	Xanthus	Xanthus	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	SpaceAfter=No|LId=Xanthus1
7	,	,	PUNCT	u--------	_	6	punct	_	LId=comma1
8	nec	neque	CCONJ	c--------	_	11	advmod	_	_
9	Dorica	Doricus	ADJ	a-p---nn-	Case=Nom|Gender=Neut|Number=Plur	10	amod	_	LId=Doricus1
10	castra	castrum	NOUN	n-p---nn-	Case=Nom|Gender=Neut|Number=Plur	8	nsubj	_	LId=castrum1
11	defuerint	desum	VERB	v3ptia---	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
12	;	;	PUNCT	u--------	_	11	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 amod	color:blue
1	alius	alius	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	5	amod	_	LId=alius2
2	Latio	Latium	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	4	obl	_	LId=Latium1
3	iam	jam	ADV	d--------	_	4	advmod	_	LId=jam1
4	partus	pario	VERB	v-srppmn-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	LId=pario2
5	Achilles	Achilles	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	SpaceAfter=No|LId=Achilles1
6	,	,	PUNCT	u--------	_	7	punct	_	LId=comma1
7	natus	nascor	VERB	v-srpdmn-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	5	amod	_	_
8	et	et	CCONJ	c--------	_	9	advmod	_	LId=et1
9	ipse	ipse	PRON	p-s---mn-	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	LId=ipse1
10	dea	dea	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	7	obj	_	SpaceAfter=No|LId=dea1
11	;	;	PUNCT	u--------	_	4	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 amod	color:blue
1	Nocte	nox	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	5	obl	_	LId=nox1
2	gravem	gravis	ADJ	a-s---ma-	Case=Acc|Gender=Masc|Number=Sing	7	amod	_	LId=gravis1
3	somno	somnus	NOUN	n-s---mb-	Case=Abl|Gender=Masc|Number=Sing	2	obl	_	LId=somnus1
4	necopina	necopinus	ADJ	a-s---fb-	Case=Abl|Gender=Fem|Number=Sing	6	amod	_	LId=necopinus1
5	perdere	perdo	VERB	v--pna---	Tense=Pres|VerbForm=Inf|Voice=Act	8	xcomp	_	LId=perdo1
6	morte	mors	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	5	obl	_	LId=mors1
7	me	ego	PRON	p-s---ma-	Case=Acc|Gender=Masc|Number=Sing	5	obj	_	LId=ego1
8	parat	paro	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|LId=paro1
9	:	:	PUNCT	u--------	_	8	punct	_	LId=punc1

~~~


