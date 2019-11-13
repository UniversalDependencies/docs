---
layout: base
title:  'Statistics of aux in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="de_hdt-dep-aux-pass.html">aux:pass</a></tt>.

84724 nodes (2%) are attached to their parents as `aux`.

61491 instances of `aux` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.30478966998725.

The following 9 pairs of parts of speech are connected with `aux`: <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (79558; 94% instances), <tt><a href="de_hdt-pos-AUX.html">AUX</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (2085; 2% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (1917; 2% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (970; 1% instances), <tt><a href="de_hdt-pos-ADV.html">ADV</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (80; 0% instances), <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (65; 0% instances), <tt><a href="de_hdt-pos-NUM.html">NUM</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (25; 0% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (19; 0% instances), <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (5; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 aux	color:blue
1	DENIC	DENIC	PROPN	NE	Case=Nom|Number=Sing|Person=3	6	nsubj	_	_
2	will	wollen	AUX	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod	6	aux	_	_
3	bei	bei	ADP	APPR	AdpType=Prep|Case=Dat	4	case	_	_
4	Domainstreit	Streit	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	6	obl	_	_
5	Richterspruch	Spruch	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	6	obj	_	_
6	abwarten	abwarten	VERB	VVINF	VerbForm=Inf	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 aux	color:blue
1	Gleichzeitig	Gleichzeitig	ADJ	ADJD	Degree=Pos|Variant=Short	7	advmod	_	_
2	wären	sein	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
3	3500	3500	NUM	CARD	Number=Plur|NumType=Card|Person=3	4	nummod	_	_
4	Mark	Mark	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur|Person=3	7	nsubj	_	_
5	Anwaltskosten	Kosten	NOUN	NN	Gender=Neut|Number=Plur|Person=3	4	appos	_	_
6	fällig	fällig	ADJ	ADJD	Degree=Pos|Variant=Short	7	advmod	_	_
7	geworden	werden	AUX	VAPP	Aspect=Perf|VerbForm=Part	0	root	_	_
8	.	.	PUNCT	$.	PunctType=Peri	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 aux	color:blue
1	Überweisungen	Überweisung	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur|Person=3	8	nsubj	_	_
2	werden	werden	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
3	auf	auf	ADP	APPR	AdpType=Prep|Case=Dat	5	case	_	_
4	diesem	diesem	DET	PDAT	Case=Dat|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	Wege	Weg	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	8	obl	_	_
6	jedoch	jedoch	ADV	ADV	_	8	advmod	_	_
7	nicht	nicht	PART	PTKNEG	Polarity=Neg	8	advmod	_	_
8	möglich	möglich	ADJ	ADJD	Degree=Pos|Variant=Short	0	root	_	_
9	sein	sein	AUX	VAINF	VerbForm=Inf	8	cop	_	_
10	.	.	PUNCT	$.	PunctType=Peri	8	punct	_	_

~~~


