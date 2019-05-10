---
layout: base
title:  'Statistics of mark in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `mark`

This relation is universal.

31 nodes (2%) are attached to their parents as `mark`.

27 instances of `mark` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.58064516129032.

The following 6 pairs of parts of speech are connected with `mark`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-SCONJ.html">SCONJ</a></tt> (24; 77% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-SCONJ.html">SCONJ</a></tt> (3; 10% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-SCONJ.html">SCONJ</a></tt> (1; 3% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-SCONJ.html">SCONJ</a></tt> (1; 3% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mark	color:blue
1	Ковмас	ковмыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
2	кӧ	кӧ	SCONJ	CS	_	1	mark	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	4	punct	_	_
4	ог	оз	AUX	V	Mood=Ind|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	жалит	жалитны	VERB	V	Connegative=Yes|Number=Sing	1	advcl	_	_
6	олӧмӧс	олӧм	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=1	5	obj	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 mark	color:blue
1	Кӧть	кӧть	SCONJ	CS	_	5	mark	_	_
2	луныс	лун	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	_
3	вӧлі	вӧвны	AUX	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	5	cop	_	_
4	зэв	зэв	ADV	Adv	_	5	advmod	_	_
5	мича	мича	ADJ	A	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 mark	color:blue
1	Сы	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	obl	_	_
2	вылӧ	вылын	ADP	Po	Case=Ill|Number=Sing	1	case	_	_
3	видзӧдігмоз	видзӧдны	VERB	V	Derivation=Igmoz|VerbForm=Conv	7	advcl	_	_
4	весиг	весиг	ADV	Adv	_	7	mark	_	_
5	шуштӧм	шуштӧм	ADJ	A	Case=Nom|Derivation=Tom|Number=Sing	7	amod	_	_
6	лолі	лолыны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	cop	_	_
7	сьӧлӧм	сьӧлӧм	NOUN	N	Case=Nom|Number=Sing	0	root	_	_
8	вылын	вылын	ADP	Po	Case=Ine|Number=Sing	7	case	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


