---
layout: base
title:  'Statistics of xcomp in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `xcomp`

This relation is universal.

100 nodes (2%) are attached to their parents as `xcomp`.

76 instances of `xcomp` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.64.

The following 5 pairs of parts of speech are connected with `xcomp`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (84; 84% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (8; 8% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (6; 6% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Сійӧ	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	заводитліс	заводітны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	Lang=Mixed
3	чӧвтны	чӧвтны	VERB	V	VerbForm=Inf	2	xcomp	_	_
4	куритчӧмсӧ	куритчӧм	NOUN	N	Case=Acc|Number=Sing	3	obj	_	Lang=Mixed
5	да	да	CCONJ	CC	_	6	cc	_	_
6	юӧмсӧ	юӧм	NOUN	N	Case=Acc|Number=Sing	4	conj	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 xcomp	color:blue
1	Сы	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	obl	_	_
2	вылӧ	вылын	ADP	Po	Case=Ill|Number=Sing	1	case	_	_
3	видзӧдігмоз	видзӧдны	VERB	V	Derivation=Igmoz|VerbForm=Conv	6	advcl	_	_
4	весиг	весиг	PART	Pcle	_	6	advmod	_	_
5	шуштӧм	шуштӧм	ADJ	A	Case=Nom|Derivation=Tom|Number=Sing	6	xcomp	_	_
6	лолі	лолыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
7	сьӧлӧм	сьӧлӧм	NOUN	N	Case=Nom|Number=Sing	6	obl:lmod	_	_
8	вылын	вылын	ADP	Po	Case=Ine|Number=Sing	7	case	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 xcomp	color:blue
1	А	а	CCONJ	CC	_	5	cc	_	_
2	регыд	регыд	ADV	Adv	_	5	advcl	_	_
3	и	и	ADV	Adv	_	5	advcl	_	_
4	вӧралысь	вӧралысь	NOUN	N	Case=Nom|Number=Sing	5	xcomp	_	GTtags=Sg,Nom
5	лоӧ	лоны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Valency=1	0	root	_	GTtags=IV,Ind,Prs,Sg3|SpaceAfter=No
6	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


