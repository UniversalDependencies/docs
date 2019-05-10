---
layout: base
title:  'Statistics of obl:arg in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="de_hdt-dep-obl.html">obl</a></tt>.

2671 nodes (0%) are attached to their parents as `obl:arg`.

1536 instances of `obl:arg` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.7083489329839.

The following 17 pairs of parts of speech are connected with `obl:arg`: <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (1873; 70% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-ADV.html">ADV</a></tt> (392; 15% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (136; 5% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt> (66; 2% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (56; 2% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (56; 2% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-X.html">X</a></tt> (28; 1% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-ADV.html">ADV</a></tt> (26; 1% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt> (13; 0% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> (9; 0% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-VERB.html">VERB</a></tt> (8; 0% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="de_hdt-pos-AUX.html">AUX</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obl:arg	color:blue
1	Download-Steuer	Steuer	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	5	nsubj	_	_
2	soll	sollen	AUX	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	aux	_	_
3	für	für	ADP	APPR	_	4	case	_	_
4	Chancengleichheit	Gleichheit	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	5	obl:arg	_	_
5	sorgen	sorgen	VERB	VVINF	_	0	root	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl:arg	color:blue
1	Dazu	Dazu	ADV	PROAV	_	2	obl:arg	_	_
2	gehöre	gehören	VERB	VVFIN	Mood=Sub|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	,	,	PUNCT	$,	_	9	punct	_	_
4	dass	dass	SCONJ	KOUS	_	9	mark	_	_
5	Verbraucher	Verbraucher	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	9	nsubj	_	_
6	in	in	ADP	APPR	Case=Dat	8	case	_	_
7	ihrem	ihrem	PRON	PPOSAT	Case=Dat|Gender=Neut|Number=Sing|Person=3	8	det:poss	_	_
8	Heimatland	Land	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing|Person=3	9	obl	_	_
9	klagen	klagen	VERB	VVINF	_	2	csubj	_	_
10	können	können	AUX	VMFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres	9	aux	_	_
11	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:arg	color:blue
1	So	so	ADV	ADV	Degree=Pos	9	advmod	_	_
2	soll	sollen	AUX	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres	9	aux	_	_
3	man	man	PRON	PIS	Case=Nom|Number=Sing|Person=3	9	nsubj	_	_
4	parallel	parallel	ADJ	ADJD	Degree=Pos	9	advcl	_	_
5	zum	zum	ADP	APPRART	Case=Dat	6	case	_	_
6	Surfen	Surfen	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing|Person=3	4	obl:arg	_	_
7	Streaming	Streaming	X	FM	Person=3	9	obj	_	_
8	Media	Media	X	FM	Person=3	7	flat	_	_
9	genießen	genießen	VERB	VVINF	_	0	root	_	_
10	können	können	AUX	VMINF	_	9	aux	_	_
11	.	.	PUNCT	$.	_	9	punct	_	_

~~~


