---
layout: base
title:  'Statistics of ccomp in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `ccomp`

This relation is universal.

51 nodes (1%) are attached to their parents as `ccomp`.

48 instances of `ccomp` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.03921568627451.

The following 8 pairs of parts of speech are connected with `ccomp`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (34; 67% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (4; 8% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (4; 8% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (3; 6% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (2; 4% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 ccomp	color:blue
1	Думайта	думайтны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	да	да	PART	Pcle	_	1	advmod	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	5	punct	_	_
4	мед	мед	SCONJ	CS	_	5	mark	_	_
5	кӧтӧдас	кӧтӧдны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	1	ccomp	_	SpaceAfter=No
6	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 ccomp	color:blue
1	Аскинас	аски	NOUN	N	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	obl	_	_
2	сійӧ	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	шуис	шуны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	Машалы	Маша	PROPN	N	Case=Dat|Number=Sing	3	obl	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	9	punct	_	_
6	тэ	тэ	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	9	nsubj	_	_
7	пӧ	пӧ	PART	Pcle	_	9	advmod	_	_
8	этша	этша	ADV	Adv	_	9	advmod	_	_
9	вира	вира	ADJ	A	Case=Nom|Number=Sing	3	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 ccomp	color:blue
1	Весигтӧ	весиг	ADV	Adv	Clitic=To	5	advmod	_	GTtags=Clt/тӧ
2	чай	чай	NOUN	N	Case=Nom|Number=Sing	5	ccomp	_	GTtags=Sg,Nom
3	йылысь	йылысь	ADP	Adp	AdpType=Post|Case=Ela|Number=Sing	2	case	_	GTtags=Po,Sg,Ela
4	эз	оз	AUX	V	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	5	aux	_	GTtags=Neg,Ind,Prt1,Pl3
5	вунӧдны	вунӧдны	VERB	V	Connegative=Yes|Number=Plur|Person=3	0	root	_	GTtags=TV,ConNeg,Pl3|SpaceAfter=No
6	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


