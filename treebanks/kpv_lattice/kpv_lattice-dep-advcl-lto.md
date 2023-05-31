---
layout: base
title:  'Statistics of advcl:lto in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `advcl:lto`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-advcl.html">advcl</a></tt>.
There are also 2 other language-specific subtypes of `advcl`: <tt><a href="kpv_lattice-dep-advcl-eval.html">advcl:eval</a></tt>, <tt><a href="kpv_lattice-dep-advcl-tcl.html">advcl:tcl</a></tt>.

1 nodes (0%) are attached to their parents as `advcl:lto`.

1 instances of `advcl:lto` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 1 pairs of parts of speech are connected with `advcl:lto`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 advcl:lto	color:blue
1	Челядь	челядь	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	GTtags=Sg,Nom
2	доддясьӧны	доддясьны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	GTtags=Refl,Ind,Prs,Pl3
3	на	на	ADV	Adv	_	2	advmod:tmod	_	_
4	чом	чом	NOUN	N	Case=Nom|Number=Sing	2	obl:lmod	_	GTtags=Sg,Nom
5	дорын	дорын	ADP	Adp	AdpType=Post|Case=Ine|Number=Sing	4	case	_	GTtags=Po,Sg,Ine|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	11	punct	_	_
7	а	а	CCONJ	CC	_	11	cc	_	_
8	чӧвтысьяс	чӧвтны	VERB	V	Case=Nom|Derivation=NomAg|Number=Plur|Valency=2	11	nsubj	_	GTtags=TV,Der,Der/ысь,Der/NomAg,N,Pl,Nom
9	да	да	CCONJ	CC	_	10	cc	_	_
10	сюртчысьяс	сюртчыны	VERB	V	Case=Nom|Derivation=NomAg|Number=Plur	8	conj	_	GTtags=Refl,Der,Der/ысь,Der/NomAg,N,Pl,Nom
11	мӧдӧдчисны	мӧдӧдчыны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	2	conj	_	GTtags=Refl,Ind,Prt1,Pl3
12	нин	нин	ADV	Adv	AdvType=Tim	11	advmod:tmod	_	GTtags=Sem/Time
13	зорӧдъяс	зорӧд	NOUN	N	Case=Nom|Number=Plur	14	nmod:obj	_	GTtags=Pl,Nom
14	чӧвтанінӧ	чӧвтны	VERB	V	Case=Ill|Derivation=Anin|Number=Sing|Valency=2	11	advcl:lto	_	GTtags=TV,Der,Der/Ан,Der/Ин,N,Sg,Ill|SpaceAfter=No
15	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


