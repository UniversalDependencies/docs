---
layout: base
title:  'Statistics of advmod:tmod in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `advmod:tmod`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-advmod.html">advmod</a></tt>.
There are also 8 other language-specific subtypes of `advmod`: <tt><a href="kpv_lattice-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="kpv_lattice-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="kpv_lattice-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="kpv_lattice-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="kpv_lattice-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="kpv_lattice-dep-advmod-freq.html">advmod:freq</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="kpv_lattice-dep-advmod-mmod.html">advmod:mmod</a></tt>.

246 nodes (3%) are attached to their parents as `advmod:tmod`.

181 instances of `advmod:tmod` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.97967479674797.

The following 8 pairs of parts of speech are connected with `advmod:tmod`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (183; 74% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (19; 8% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (19; 8% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (17; 7% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 advmod:tmod	color:blue
1	Бур	бур	ADJ	A	Case=Nom|Number=Sing	2	amod	_	_
2	урожай	урожай	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	OrigLang=ru
3	воис	воны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
4	таво	таво	ADV	Adv	_	3	advmod:tmod	_	_
5	миян	ми	PRON	Pron	Case=Gen|Number=Plur|Person=1|PronType=Prs	7	nmod	_	_
6	районувса	районувса	ADJ	A	Case=Nom|Number=Sing	7	amod	_	OrigLang=ru
7	колхозъясын	колхоз	NOUN	N	Case=Ine|Number=Plur	3	obl:lmod	_	OrigLang=ru|SpaceAfter=No
8	.	.	PUNCT	CLB	_	3	punct	_	_

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


