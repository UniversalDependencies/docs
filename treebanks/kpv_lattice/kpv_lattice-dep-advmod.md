---
layout: base
title:  'Statistics of advmod in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `advmod`

This relation is universal.
There are 12 language-specific subtypes of `advmod`: <tt><a href="kpv_lattice-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="kpv_lattice-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="kpv_lattice-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="kpv_lattice-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="kpv_lattice-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="kpv_lattice-dep-advmod-freq.html">advmod:freq</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lfrom.html">advmod:lfrom</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lmp.html">advmod:lmp</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lto.html">advmod:lto</a></tt>, <tt><a href="kpv_lattice-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="kpv_lattice-dep-advmod-tmod.html">advmod:tmod</a></tt>.

100 nodes (1%) are attached to their parents as `advmod`.

87 instances of `advmod` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.67.

The following 12 pairs of parts of speech are connected with `advmod`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (64; 64% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (10; 10% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PART.html">PART</a></tt> (8; 8% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (6; 6% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-PART.html">PART</a></tt> (2; 2% instances), <tt><a href="kpv_lattice-pos-DET.html">DET</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod	color:blue
1	Весиг	весиг	PART	Pcle	_	5	advmod	_	_
2	юсянь	ю	NOUN	N	Case=Egr|Number=Sing	4	obl:lmod	_	_
3	неуна	неуна	ADV	Adv	Polarity=Neg	4	advmod	_	_
4	локтысь	локны	VERB	V	Case=Nom|Derivation=NomAg|Number=Sing	5	acl	_	_
5	ыркыдыс	ыркыд	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	nsubj	_	_
6	эз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Past	7	aux:neg	_	_
7	кокньӧд	кокньӧдны	VERB	V	Connegative=Yes	0	root	_	SpaceAfter=No
8	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advmod	color:blue
1	Вундігӧн	вундыны	VERB	V	Case=Ins|Derivation=Ig|VerbForm=Conv	6	advcl	_	_
2	да	да	CCONJ	Pcle	_	3	cc	_	OrigLang=ru
3	тэчигӧн	тэчыны	VERB	V	Case=Ins|Derivation=Ig|VerbForm=Conv	1	conj	_	_
4	му	му	NOUN	N	Case=Nom|Number=Sing	6	obl:lmod	_	_
5	вылӧ	вылын	ADP	Po	Case=Ill|Number=Sing	4	case	_	_
6	усьӧ	усьны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
7	уна	уна	ADV	Adv	_	8	advmod	_	_
8	шеп	шеп	NOUN	N	Case=Nom|Number=Sing	6	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 advmod	color:blue
1	Весиг	весиг	PART	Pcle	_	4	advmod	_	_
2	бӧжсӧ	бӧж	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obj	_	_
3	эз	оз	AUX	V	Mood=Ind|Person=1|Polarity=Neg|Tense=Past	4	aux:neg	_	_
4	петкӧдлы	петкӧдлыны	VERB	V	Connegative=Yes	0	root	_	SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


