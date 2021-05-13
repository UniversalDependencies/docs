---
layout: base
title:  'Statistics of xcomp in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `xcomp`

This relation is universal.

745 nodes (3%) are attached to their parents as `xcomp`.

407 instances of `xcomp` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.49530201342282.

The following 20 pairs of parts of speech are connected with `xcomp`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (470; 63% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (105; 14% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (42; 6% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (24; 3% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (21; 3% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (19; 3% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (18; 2% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (12; 2% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (11; 1% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 xcomp	color:blue
1	sed	sed	CCONJ	c--------	_	5	cc	_	LId=sed1
2	non	non	ADV	d--------	_	3	advmod	_	LId=non1
3	et	et	CCONJ	c--------	_	4	advmod	_	LId=et1
4	venisse	venio	VERB	v--rna---	Aspect=Perf|Tense=Past|VerbForm=Inf|Voice=Act	5	xcomp	_	LId=venio1
5	volent	volo	VERB	v3pfia---	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|LId=volo1
6	.	.	PUNCT	u--------	_	5	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 xcomp	color:blue
1	Ultimus	ulter	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	3	xcomp	_	LId=ulter1
2	inmenso	immensus	ADJ	a-s---md-	Case=Dat|Gender=Masc|Number=Sing	7	amod	_	LId=immensus1
3	restabas	resto	VERB	v2siia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|LId=resto1
4	,	,	PUNCT	u--------	_	5	punct	_	LId=comma1
5	Nile	Nilus	NOUN	n-s---mv-	Case=Voc|Gender=Masc|Number=Sing	3	vocative	_	SpaceAfter=No|LId=Nilus1
6	,	,	PUNCT	u--------	_	5	punct	_	LId=comma1
7	labori	labor	NOUN	n-s---md-	Case=Dat|Gender=Masc|Number=Sing	1	nmod	_	SpaceAfter=No|LId=labor2
8	.	.	PUNCT	u--------	_	3	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	unde	unde	ADV	d--------	_	4	advmod	_	LId=unde1
2	locum	locus	NOUN	n-s---ma-	Case=Acc|Gender=Masc|Number=Sing	4	obj	_	LId=locus1
3	Grai	Graii	NOUN	n-p---mn-	Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	LId=Graii1
4	dixerunt	dico	VERB	v3pria---	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LId=dico2
5	nomine	nomen	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	4	advmod	_	LId=nomen1
6	Aornon	Aornos	NOUN	n-s---ma-	Case=Acc|Gender=Masc|Number=Sing	4	xcomp	_	SpaceAfter=No|LId=Aornos1
7	.	.	PUNCT	u--------	_	4	punct	_	LId=punc1

~~~


