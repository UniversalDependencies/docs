---
layout: base
title:  'Statistics of discourse in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `discourse`

This relation is universal.

498 nodes (0%) are attached to their parents as `discourse`.

459 instances of `discourse` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.09437751004016.

The following 15 pairs of parts of speech are connected with `discourse`: <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-ADP.html">ADP</a></tt> (177; 36% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-ADP.html">ADP</a></tt> (118; 24% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (110; 22% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-ADP.html">ADP</a></tt> (28; 6% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-ADP.html">ADP</a></tt> (22; 4% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (17; 3% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (7; 1% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-ADP.html">ADP</a></tt> (6; 1% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_syntagrus-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-dep-_.html">_</a></tt>-<tt><a href="ru_syntagrus-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	В	в	ADP	_	_	5	discourse	5:discourse	_
2	первую	первый	ADJ	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	1	fixed	1:fixed	_
3	очередь	очередь	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	2	fixed	2:fixed	_
4	это	это	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	nsubj	5:nsubj	_
5	касается	касаться	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	0:root	_
6	отсрочки	отсрочка	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	5	obl	5:obl	_
7	платежей	платеж	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	nmod	6:nmod	_
8	по	по	ADP	_	_	9	case	9:case	_
9	кредиту	кредит	NOUN	_	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	7	nmod	7:nmod	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	В	в	ADP	_	_	4	discourse	4:discourse	_
2	первую	первый	ADJ	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	1	fixed	1:fixed	_
3	очередь	очередь	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	2	fixed	2:fixed	_
4	журналисты	журналист	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	0	root	0:root	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
1	Тем	то	PRON	_	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	6	discourse	6:discourse	_
2	не	не	PART	_	Polarity=Neg	1	fixed	1:fixed	_
3	менее	менее	ADV	_	Degree=Cmp	2	fixed	2:fixed	_
4	вряд	вряд	ADV	_	Degree=Pos	6	advmod	6:advmod	_
5	ли	ли	PART	_	_	4	fixed	4:fixed	_
6	стоит	стоить	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	ожидать	ожидать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	6	nsubj	6:nsubj	_
8	торжества	торжество	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	7	obl	7:obl	_
9	законности	законность	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	8	nmod	8:nmod	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	9:punct	_

~~~


