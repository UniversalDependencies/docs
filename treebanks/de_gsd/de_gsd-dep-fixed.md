---
layout: base
title:  'Statistics of fixed in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `fixed`

This relation is universal.

112 nodes (0%) are attached to their parents as `fixed`.

112 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.27678571428571.

The following 12 pairs of parts of speech are connected with `fixed`: <tt><a href="de_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="de_gsd-pos-SCONJ.html">SCONJ</a></tt> (47; 42% instances), <tt><a href="de_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="de_gsd-pos-ADP.html">ADP</a></tt> (21; 19% instances), <tt><a href="de_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="de_gsd-pos-CCONJ.html">CCONJ</a></tt> (12; 11% instances), <tt><a href="de_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="de_gsd-pos-SCONJ.html">SCONJ</a></tt> (9; 8% instances), <tt><a href="de_gsd-pos-DET.html">DET</a></tt>-<tt><a href="de_gsd-pos-SCONJ.html">SCONJ</a></tt> (8; 7% instances), <tt><a href="de_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt> (5; 4% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="de_gsd-pos-ADP.html">ADP</a></tt> (3; 3% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (3; 3% instances), <tt><a href="de_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="de_gsd-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="de_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="de_gsd-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="de_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="de_gsd-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="de_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="de_gsd-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 fixed	color:blue
1	So	so	ADV	ADV	ExtPos=ADV	4	advmod	_	_
2	gut	gut	ADJ	ADJD	Degree=Pos	1	fixed	_	_
3	wie	wie	SCONJ	KOKOM	_	1	fixed	_	_
4	nichts	nichts	PRON	PIS	Gender=Neut|Number=Sing|PronType=Neg	0	root	_	_
5	in	in	ADP	APPR	_	7	case	_	_
6	der	der	DET	ART	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	Hand	Hand	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	4	nmod	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 fixed	color:blue
1	Die	der	DET	ART	Case=Nom|Definite=Def|Number=Plur|PronType=Art	2	dep	_	FixTigerDep=Yes
2	Hintergründe	Hintergrund	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	9	nsubj	_	_
3	des	der	DET	ART	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	Mordes	Mord	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
5	sind	sein	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
6	nach	nach	ADP	ADV	ExtPos=ADV	9	advmod	_	_
7	wie	wie	SCONJ	KON	_	6	fixed	_	_
8	vor	vor	ADP	ADV	_	6	fixed	_	_
9	unklar	unklar	ADJ	ADJD	Degree=Pos	0	root	_	SpaceAfter=No
10	.	.	PUNCT	$.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Nach	nach	ADP	ADV	ExtPos=ADV	11	advmod	_	_
2	und	und	CCONJ	KON	_	1	fixed	_	_
3	nach	nach	ADP	ADV	_	1	fixed	_	_
4	werden	werden	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	11	aux:pass	_	_
5	die	der	DET	ART	Case=Nom|Definite=Def|Number=Plur|PronType=Art	6	det	_	_
6	Agenten	Agent	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	11	nsubj:pass	_	_
7	eines	ein	DET	ART	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing|NumType=Card|PronType=Art	10	det	_	_
8	ehemaligen	ehemalig	ADJ	ADJA	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	_
9	französischen	französisch	ADJ	ADJA	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	_
10	Spionageringes	Spionageringes	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	_
11	ermordet	ermorden	VERB	VVPP	VerbForm=Part	0	root	_	SpaceAfter=No
12	.	.	PUNCT	$.	_	11	punct	_	_

~~~


