---
layout: base
title:  'Statistics of advcl in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `advcl`

This relation is universal.

1101 nodes (4%) are attached to their parents as `advcl`.

670 instances of `advcl` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.84468664850136.

The following 16 pairs of parts of speech are connected with `advcl`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (981; 89% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (32; 3% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (24; 2% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (21; 2% instances), <tt><a href="la_perseus-pos-ADV.html">ADV</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (18; 2% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (8; 1% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="la_perseus-pos-X.html">X</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="la_perseus-pos-ADV.html">ADV</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-INTJ.html">INTJ</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 advcl	color:blue
1	His	hic	PRON	p-p---nb-	Case=Abl|Gender=Neut|Number=Plur	2	nsubj	_	LId=hic1
2	actis	ago	VERB	v-prppnb-	Aspect=Perf|Case=Abl|Gender=Neut|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	5	advcl	_	SpaceAfter=No|LId=ago1
3	,	,	PUNCT	u--------	_	2	punct	_	LId=comma1
4	propere	properus	ADV	d--------	_	5	advmod	_	LId=properus1
5	exsequitur	exsequor	VERB	v3spid---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	praecepta	praecipio	VERB	v-prppna-	Aspect=Perf|Case=Acc|Gender=Neut|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	5	xcomp	_	LId=praecipio1
7	Sibyllae	Sibylla	NOUN	n-s---fg-	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No|LId=Sibylla1
8	.	.	PUNCT	u--------	_	5	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 advcl	color:blue
1	tu	tu	PRON	p-s---fn-	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	LId=tu1
2	non	non	ADV	d--------	_	3	advmod	_	LId=non1
3	inventa	invenio	VERB	v-srppfn-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	5	advcl	_	LId=invenio1
4	reperta	reperio	VERB	v-srppfb-	Aspect=Perf|Case=Abl|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	7	advcl	_	LId=reperio1
5	luctus	luctus	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	0	root	_	LId=luctus1
6	eras	sum	AUX	v2siia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	LId=sum1
7	levior	levis	ADJ	a-s---mnc	Case=Nom|Degree=Cmp|Gender=Masc|Number=Sing	5	amod	_	SpaceAfter=No|LId=levis1
8	.	.	PUNCT	u--------	_	5	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advcl	color:blue
1	tu	tu	PRON	p-s---fn-	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	LId=tu1
2	non	non	ADV	d--------	_	3	advmod	_	LId=non1
3	inventa	invenio	VERB	v-srppfn-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	5	advcl	_	LId=invenio1
4	reperta	reperio	VERB	v-srppfb-	Aspect=Perf|Case=Abl|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	7	advcl	_	LId=reperio1
5	luctus	luctus	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	0	root	_	LId=luctus1
6	eras	sum	AUX	v2siia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	LId=sum1
7	levior	levis	ADJ	a-s---mnc	Case=Nom|Degree=Cmp|Gender=Masc|Number=Sing	5	amod	_	SpaceAfter=No|LId=levis1
8	.	.	PUNCT	u--------	_	5	punct	_	LId=punc1

~~~


