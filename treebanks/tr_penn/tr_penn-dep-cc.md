---
layout: base
title:  'Statistics of cc in UD_Turkish-Penn'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Penn: Relations: `cc`

This relation is universal.

1733 nodes (2%) are attached to their parents as `cc`.

1694 instances of `cc` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.34391229082516.

The following 17 pairs of parts of speech are connected with `cc`: <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (622; 36% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (609; 35% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (203; 12% instances), <tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (167; 10% instances), <tt><a href="tr_penn-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (59; 3% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (24; 1% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (13; 1% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (10; 1% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (6; 0% instances), <tt><a href="tr_penn-pos-DET.html">DET</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (5; 0% instances), <tt><a href="tr_penn-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-SCONJ.html">SCONJ</a></tt> (4; 0% instances), <tt><a href="tr_penn-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-INTJ.html">INTJ</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	Reklam	reklam	NOUN	_	Case=Nom|Number=Sing|Person=3	6	nsubj	_	_
2	ve	ve	CCONJ	_	_	3	cc	_	_
3	tanıtımın	tanıtım	NOUN	_	Case=Gen|Number=Sing|Person=3	1	conj	_	_
4	işe	iş	NOUN	_	Case=Dat|Number=Sing|Person=3	6	compound	_	_
5	yarayıp	yara	ADV	_	_	6	compound	_	_
6	yaramadığını	yara	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	ccomp	_	_
7	görmek	gör	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
8	üzereyiz	üzere	VERB	_	Number=Plur|Person=1|Tense=Pres	7	case	_	_
9	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 cc	color:blue
1	Ve	ve	CCONJ	_	_	6	cc	_	_
2	Londra	londra	PROPN	_	Case=Nom|Number=Sing	3	nmod	_	_
3	açısından	açı	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	obl	_	_
4	karmaşık	karmaşık	ADJ	_	_	5	amod	_	_
5	sinyaller	sinyal	NOUN	_	Case=Nom|Number=Plur|Person=3	6	obj	_	_
6	bıraktı	bırak	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	Onun	o	PRON	_	PronType=Prs	9	nmod	_	_
2	,	,	PUNCT	_	_	9	punct	_	_
3	sıkı	sık	NOUN	_	Case=Acc|Number=Sing|Person=3	6	amod	_	_
4	ve	ve	CCONJ	_	_	5	cc	_	_
5	güçlü	güç	ADJ	_	_	3	conj	_	_
6	vurucu	vur	ADJ	_	_	7	nmod	_	_
7	McGwire'nin	mcgwire	PROPN	_	Case=Gen|Number=Sing	9	nmod	_	_
8	kendi	kendi	PRON	_	Reflex=Yes	9	amod	_	_
9	imzası	imza	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	0	root	_	_
10	değil	değil	AUX	_	_	9	aux	_	_
11	.	.	PUNCT	_	_	9	punct	_	_

~~~


