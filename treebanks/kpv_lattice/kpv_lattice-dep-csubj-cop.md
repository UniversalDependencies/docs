---
layout: base
title:  'Statistics of csubj:cop in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `csubj:cop`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-csubj.html">csubj</a></tt>.

2 nodes (0%) are attached to their parents as `csubj:cop`.

1 instances of `csubj:cop` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 1 pairs of parts of speech are connected with `csubj:cop`: <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj:cop	color:blue
1	Миянлы	ме	PRON	Pron	Case=Dat|Number=Plur|Person=1|PronType=Prs	3	obl	_	GTtags=Pers,Pl1,Dat
2	зэв	зэв	ADV	Adv	_	3	advmod:deg	_	_
3	нимкодь	нимкодь	ADJ	A	Case=Nom|Number=Sing	0	root	_	GTtags=Sg,Nom
4	вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=1	3	cop	_	GTtags=IV,Ind,Prt1,Sg3
5	поезд	поезд	NOUN	N	Case=Nom|Number=Sing	6	nmod:subj	_	GTtags=Sg,Nom
6	сувтлігъясӧ	сувтлыны	VERB	V	Case=Ill|Derivation=Ig|Number=Plur|Valency=1|VerbForm=Conv	7	advcl	_	GTtags=IV,Der,Der/иг,Ger,Pl,Ill
7	чеччыштлыны	чеччыштлыны	VERB	V	Valency=1|VerbForm=Inf	3	csubj:cop	_	GTtags=IV,Inf
8	станцияясӧ	станция	NOUN	N	Case=Ill|Number=Plur	7	obl:lmod	_	GTtags=Pl,Ill|SpaceAfter=No
9	...	...	PUNCT	CLB	_	3	punct	_	_

~~~


