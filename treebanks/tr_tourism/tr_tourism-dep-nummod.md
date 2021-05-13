---
layout: base
title:  'Statistics of nummod in UD_Turkish-Tourism'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Tourism: Relations: `nummod`

This relation is universal.

663 nodes (1%) are attached to their parents as `nummod`.

661 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.03921568627451.

The following 11 pairs of parts of speech are connected with `nummod`: <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-NUM.html">NUM</a></tt> (552; 83% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-NUM.html">NUM</a></tt> (31; 5% instances), <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-NUM.html">NUM</a></tt> (31; 5% instances), <tt><a href="tr_tourism-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_tourism-pos-NUM.html">NUM</a></tt> (24; 4% instances), <tt><a href="tr_tourism-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_tourism-pos-NUM.html">NUM</a></tt> (11; 2% instances), <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="tr_tourism-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_tourism-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_tourism-pos-DET.html">DET</a></tt>-<tt><a href="tr_tourism-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_tourism-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	SAMET	samet	PROPN	_	Case=Nom|Number=Sing	2	nmod	_	_
2	BEYE	bey	NOUN	_	Case=Dat|Number=Sing|Person=3	5	obl	_	_
3	5	5	NUM	_	NumType=Card	4	nummod	_	_
4	PUAN	puan	NOUN	_	Case=Nom|Number=Sing|Person=3	5	compound	_	_
5	VERİRİM	ver	VERB	_	Aspect=Hab|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	5	5	NUM	_	NumType=Card	2	nummod	_	_
2	YILDIZLI	yıldızlı	ADJ	_	_	3	amod	_	_
3	OTEL	otel	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
4	GİBİ	gibi	ADP	_	_	3	case	_	_
5	DEĞİLDİ	değil	AUX	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux	_	_
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	ÇOK	çok	ADV	_	_	2	advmod	_	_
2	İYİ	iyi	ADJ	_	_	3	advmod	_	_
3	DEĞERLENDİRİRİM	değerlendir	VERB	_	Aspect=Hab|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	parataxis	_	_
4	YILDIZLI	yıldızlı	ADJ	_	_	5	amod	_	_
5	5	5	NUM	_	NumType=Card	6	nummod	_	_
6	VERİRİM	ver	VERB	_	Aspect=Hab|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


