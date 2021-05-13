---
layout: base
title:  'Statistics of advcl:eval in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `advcl:eval`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-advcl.html">advcl</a></tt>.
There are also 2 other language-specific subtypes of `advcl`: <tt><a href="kpv_lattice-dep-advcl-lto.html">advcl:lto</a></tt>, <tt><a href="kpv_lattice-dep-advcl-tcl.html">advcl:tcl</a></tt>.

2 nodes (0%) are attached to their parents as `advcl:eval`.

1 instances of `advcl:eval` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 2 pairs of parts of speech are connected with `advcl:eval`: <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 advcl:eval	color:blue
1	Кымын	кымын	CCONJ	CC	_	2	cc:preconj	_	_
2	ичӧтджык	ичӧт	ADJ	A	Case=Nom|Degree=Cmp|Number=Sing	0	root	_	GTtags=Comp,Sg,Nom
3	пызаныд	пызан	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	2	nsubj:cop	_	GTtags=Sg,Nom,PxSg2|SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	7	punct	_	_
5	сымын	сымын	CCONJ	CC	_	7	cc	_	_
6	озырджыкӧн	озыр	ADJ	A	Case=Ins|Degree=Cmp|Number=Sing	7	xcomp	_	GTtags=Comp,Sg,Ins
7	кажитчӧ	кажитчӧ	VERB	Adv	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	advcl:eval	_	GTtags=Parenthetic
8	пызан	пызан	NOUN	N	Case=Nom|Number=Sing	9	compound	_	GTtags=Sg,Nom
9	вылыд	выв	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	7	conj	_	GTtags=Relat,Sg,Nom,PxSg2|SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 advcl:eval	color:blue
1	Кодъяскӧ	кодкӧ	PRON	Pron	Case=Nom|Derivation=Ko|Number=Plur|PronType=Ind	2	nsubj	_	GTtags=Indef,Pl,Nom,Der/кӧ
2	волӧмаӧсь	волыны	VERB	V	Evident=Nfh|Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=IV,Ind,Prt2,Pl3
3	дзик	дзик	ADV	Adv	AdvType=Deg	5	advmod:deg	_	GTtags=Deg
4	на	на	ADV	Adv	_	3	advmod:tmod	_	_
5	регыд	регыд	ADV	Adv	_	2	advmod:tmod	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	войнас	вой	NOUN	N	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	appos	_	GTtags=Sg,Ins,PxSg3|SpaceAfter=No
8	,	,	PUNCT	CLB	_	7	punct	_	_
9	тыдалӧ	тыдалӧ	VERB	Adv	Mood=Ind|Number=Sing|Person=3|Tense=Pres	12	advcl:eval	_	GTtags=Parenthetic|SpaceAfter=No
10	,	,	PUNCT	CLB	_	9	punct	_	_
11	тэрмасьӧмӧн	тэрмасьӧмӧн	VERB	V	Derivation=Omon	12	advcl	_	GTtags=V,Der,Der/ӧмӧн
12	сӧвтӧмаӧсь	сӧвтны	VERB	V	Evident=Nfh|Mood=Ind|Number=Plur|Person=3|Tense=Past	2	conj	_	GTtags=IV,Ind,Prt2,Pl3
13	да	да	CCONJ	CC	_	14	cc	_	_
14	нуӧмаӧсь	нуны	VERB	V	Evident=Nfh|Mood=Ind|Number=Plur|Person=3|Tense=Past	12	conj	_	GTtags=TV,Ind,Prt2,Pl3
15	сэсь	сэсь	ADV	Adv	_	12	advmod:lfrom	_	_
16	турунсӧ	турун	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	obj	_	GTtags=Sg,Acc,PxSg3|SpaceAfter=No
17	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


