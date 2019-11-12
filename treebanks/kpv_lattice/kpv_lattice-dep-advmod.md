---
layout: base
title:  'Statistics of advmod in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `advmod`

This relation is universal.

243 nodes (11%) are attached to their parents as `advmod`.

186 instances of `advmod` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.80658436213992.

The following 16 pairs of parts of speech are connected with `advmod`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (137; 56% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PART.html">PART</a></tt> (27; 11% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (17; 7% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (15; 6% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (14; 6% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-PART.html">PART</a></tt> (9; 4% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PART.html">PART</a></tt> (8; 3% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-PART.html">PART</a></tt> (4; 2% instances), <tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="kpv_lattice-pos-NUM.html">NUM</a></tt>-<tt><a href="kpv_lattice-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="kpv_lattice-pos-DET.html">DET</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="kpv_lattice-pos-NUM.html">NUM</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="kpv_lattice-pos-PART.html">PART</a></tt>-<tt><a href="kpv_lattice-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 advmod	color:blue
1	Найӧ	найӧ	PRON	Pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	4	nsubj	_	_
2	дзик	дзик	ADV	Adv	_	4	advmod	_	_
3	оз	оз	AUX	V	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	4	aux:neg	_	_
4	тӧдны	тӧдны	VERB	V	Connegative=Yes	0	root	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	коді	коді	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	8	nsubj	_	_
7	тайӧс	тайӧ	PRON	Pron	Case=Acc|Number=Sing|PronType=Dem	8	obj	_	_
8	гижис	гижны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod	color:blue
1	Сідз	сідз	ADV	Adv	_	3	advmod	_	_
2	жӧ	жӧ	PART	Pcle	_	3	advmod	_	_
3	колӧ	ковны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	сетны	сетны	VERB	V	VerbForm=Inf	3	xcomp	_	_
5	ыджыд	ыджыд	ADJ	A	Case=Nom|Number=Sing	6	amod	_	_
6	тӧдчанлун	тӧдчанлун	NOUN	N	Case=Nom|Number=Sing	4	obj	_	_
7	вошӧмъяскӧд	вошӧм	NOUN	N	Case=Com|Number=Plur	8	obl	_	_
8	тышкасьӧм	тышкасьны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	4	obl	_	_
9	вылӧ	вылын	ADP	Po	Case=Ill|Number=Sing	8	case	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod	color:blue
1	Кыліс	кывны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	зэв	зэв	ADV	Adv	_	3	advmod	_	_
3	ылысянь	ылысянь	ADV	Adv	Case=Egr	1	advmod	_	_
4	муркӧдчӧм	муркӧдчыны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	5	acl	_	_
5	шы	шы	NOUN	N	Case=Nom|Number=Sing	1	nsubj	_	SpaceAfter=No
6	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


