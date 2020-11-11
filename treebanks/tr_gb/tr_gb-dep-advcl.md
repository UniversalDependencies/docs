---
layout: base
title:  'Statistics of advcl in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `advcl`

This relation is universal.

490 nodes (3%) are attached to their parents as `advcl`.

470 instances of `advcl` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.18775510204082.

The following 13 pairs of parts of speech are connected with `advcl`: <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (369; 75% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (41; 8% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (33; 7% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (21; 4% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="tr_gb-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 advcl	color:blue
1	Biletleri	bilet	NOUN	_	Case=Acc|Number=Plur	2	obj	_	_
2	aldıysan	al	VERB	_	Aspect=Perf|Mood=Cnd|Number=Sing|Person=2|Polarity=Pos|Tense=Past|VerbForm=Fin	4	advcl	_	_
3	içeri	içeri	NOUN	_	Case=Nom|Number=Sing	4	obl	_	_
4	girelim	gir	VERB	_	Mood=Opt|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 advcl	color:blue
1	Evini	ev	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=2	2	obj	_	_
2	sattın	sat	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	6	advcl	_	_
3	mı	mı	SCONJ	_	_	2	mark	_	SpaceAfter=No
4	,	,	PUNCT	_	_	2	punct	_	_
5	gerisi	geri	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	nsubj	_	_
6	önemli	önemli	ADJ	_	_	0	root	_	_
7	değil	değil	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	6	aux	_	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 advcl	color:blue
1	Fasulye	fasulye	NOUN	_	Case=Nom|Number=Sing	6	nsubj	_	_
2	kart	kart	ADJ	_	_	6	advcl	_	_
3	olduğundan	ol	AUX	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=3|Tense=Past|VerbForm=Part	2	cop	_	_
4	üç	üç	NUM	_	NumType=Card	5	nummod	_	_
5	saatte	saat	NOUN	_	Case=Loc|Number=Sing	6	obl:tmod	_	_
6	pişti	piş	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


