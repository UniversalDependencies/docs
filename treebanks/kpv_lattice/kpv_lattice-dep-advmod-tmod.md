---
layout: base
title:  'Statistics of advmod:tmod in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `advmod:tmod`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-advmod.html">advmod</a></tt>.
There are also 11 other language-specific subtypes of `advmod`: <tt><a href="kpv_lattice-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="kpv_lattice-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="kpv_lattice-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="kpv_lattice-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="kpv_lattice-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="kpv_lattice-dep-advmod-freq.html">advmod:freq</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lfrom.html">advmod:lfrom</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lmp.html">advmod:lmp</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lto.html">advmod:lto</a></tt>, <tt><a href="kpv_lattice-dep-advmod-mmod.html">advmod:mmod</a></tt>.

246 nodes (3%) are attached to their parents as `advmod:tmod`.

181 instances of `advmod:tmod` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.97967479674797.

The following 8 pairs of parts of speech are connected with `advmod:tmod`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (183; 74% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (19; 8% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (19; 8% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (17; 7% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 advmod:tmod	color:blue
1	Тэ	тэ	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	_	_
2	кыдзи	кыдзи	ADV	Adv	PronType=Int	3	advmod:mmod	_	_
3	мӧвпалан	мӧвпавны	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres	0	root	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	7	punct	_	_
5	кор	кор	ADV	Adv	_	7	advmod:tmod	_	_
6	верман	вермыны	AUX	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres	7	aux:pot	_	_
7	волыны	волыны	VERB	V	VerbForm=Inf	3	advcl	_	SpaceAfter=No
8	?	?	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 advmod:tmod	color:blue
1	Первойсӧ	первой	ADV	Adv	Clitic=So	4	advmod:tmod	_	OrigLang=ru
2	ичӧтик	ичӧтик	ADJ	A	Case=Nom|Derivation=Ik|Number=Sing	3	amod	_	_
3	баляяс	баля	NOUN	N	Case=Nom|Number=Plur	4	nmod	_	_
4	кодьӧсь	кодь	ADJ	A	Case=Nom|Number[subj]=Plur	0	root	_	SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod:tmod	color:blue
1	Водз	водз	ADV	Adv	_	2	advmod:tmod	_	_
2	асылын	асыв	NOUN	N	Case=Ine|Number=Sing	3	obl:tmod	_	_
3	лэччи	лэччыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	_
4	Эжва	Эжва	PROPN	N	Case=Nom|Number=Sing	6	obl:lmod	_	_
5	дорӧ	дорын	ADP	Po	Case=Ill|Number=Sing	4	case	_	_
6	вуграсьны	вуграсьны	VERB	V	VerbForm=Inf	3	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


