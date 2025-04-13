---
layout: base
title:  'Statistics of compound in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="et_ewt-dep-compound-prt.html">compound:prt</a></tt>.

66 nodes (0%) are attached to their parents as `compound`.

49 instances of `compound` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.12121212121212.

The following 8 pairs of parts of speech are connected with `compound`: <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (33; 50% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (15; 23% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (11; 17% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (1; 2% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound	color:blue
1	2004.	2004.	ADJ	N	NumForm=Digit|NumType=Ord	2	amod	2:amod	_
2	aasta	aasta	NOUN	S	Case=Gen|Number=Sing	3	nmod	3:nmod	_
3	seisuga	seis	NOUN	S	Case=Com|Number=Sing	5	obl	5:obl	_
4	võis	võima	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	aux	5:aux	_
5	rääkida	rääkima	VERB	V	VerbForm=Inf	0	root	0:root	_
6	12	12	NUM	N	NumForm=Digit|NumType=Card	8	nummod	8:nummod	_
7	miljonist	miljon	NUM	N	Case=Ela|Number=Sing|NumForm=Word|NumType=Card	6	compound	6:compound	_
8	kilovatt-tunnist	kilo_vatt-tund	NOUN	S	Case=Ela|Number=Sing	5	obl	5:obl	SpaceAfter=No
9	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 compound	color:blue
1	Lõpuks	lõpuks	ADV	D	_	3	advmod	3:advmod	_
2	ometi	ometi	ADV	D	_	3	advmod	3:advmod	_
3	saab	saama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	ka	ka	ADV	D	_	5	advmod	5:advmod	_
5	aru	aru	NOUN	S	Case=Par|Number=Sing	3	compound	3:compound	SpaceAfter=No
6	,	,	PUNCT	Z	_	7	punct	7:punct	_
7	millest	mis	PRON	P	Case=Ela|Number=Sing|PronType=Int,Rel	3	ccomp	3:ccomp	_
8	jutt	jutt	NOUN	S	Case=Nom|Number=Sing	7	nsubj:cop	7:nsubj	_
9	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	7:cop	SpaceAfter=No
10	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound	color:blue
1	Sai	saama	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	aux	5:aux	_
2	Inglismaa	Inglis_maa	PROPN	S	Case=Gen|Number=Sing	4	nmod	4:nmod	NE=B-Gep
3	õppimis	õppimis	NOUN	S	Case=Nom|Number=Sing	4	compound	4:compound	_
4	eelistustest	eelistus	NOUN	S	Case=Ela|Number=Plur	5	obl	5:obl	_
5	räägitud	rääkima	VERB	V	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


