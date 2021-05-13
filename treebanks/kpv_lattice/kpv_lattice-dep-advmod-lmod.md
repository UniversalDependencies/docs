---
layout: base
title:  'Statistics of advmod:lmod in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `advmod:lmod`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-advmod.html">advmod</a></tt>.
There are also 11 other language-specific subtypes of `advmod`: <tt><a href="kpv_lattice-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="kpv_lattice-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="kpv_lattice-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="kpv_lattice-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="kpv_lattice-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="kpv_lattice-dep-advmod-freq.html">advmod:freq</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lfrom.html">advmod:lfrom</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lmp.html">advmod:lmp</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lto.html">advmod:lto</a></tt>, <tt><a href="kpv_lattice-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="kpv_lattice-dep-advmod-tmod.html">advmod:tmod</a></tt>.

46 nodes (1%) are attached to their parents as `advmod:lmod`.

41 instances of `advmod:lmod` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.30434782608696.

The following 5 pairs of parts of speech are connected with `advmod:lmod`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (35; 76% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (6; 13% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (2; 4% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (2; 4% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:lmod	color:blue
1	Гым-биясыс	гым-би	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	_
2	быттьӧ	быттьӧ	PART	Pcle	_	5	advmod:eval	_	_
3	дзик	дзик	ADV	Adv	_	4	advmod:deg	_	_
4	орччӧн	орччӧн	ADV	Adv	Case=Ins	5	advmod:lmod	_	_
5	орӧдлісны	орӧдлыны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	_
6	сынӧдсӧ	сынӧд	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	obj	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:lmod	color:blue
1	Кӧинъяслы	кӧин	NOUN	N	Case=Dat|Number=Plur	3	obl	_	GTtags=Pl,Dat
2	быдлаын	быдлаын	ADV	Adv	Case=Ine	3	advmod:lmod	_	GTtags=Ine
3	горт	горт	NOUN	N	Case=Nom|Number=Sing	0	root	_	GTtags=Sg,Nom|SpaceAfter=No
4	,	,	PUNCT	CLB	_	7	punct	_	_
5	кытысь	кытысь	ADV	Adv	Case=Ela|PronType=Rel	7	obl	_	GTtags=Ela,Rel
6	сёйны	сёйны	VERB	V	VerbForm=Inf	7	xcomp	_	GTtags=IV,Inf
7	сюрас	сюрны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut	3	parataxis	_	GTtags=IV,Ind,Fut,Sg3|SpaceAfter=No
8	,	,	PUNCT	CLB	_	9	punct	_	_
9	сэні	сэні	ADV	Adv	_	7	conj	_	_
10	и	и	ADV	Adv	_	11	advmod:foc	_	_
11	гажа	гажа	ADJ	A	Case=Nom|Number=Sing	9	nsubj:cop	_	GTtags=Sg,Nom|SpaceAfter=No
12	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 advmod:lmod	color:blue
1	Но	но	CCONJ	CC	_	7	cc	_	_
2	туйладор	туйладор	NOUN	N	Case=Nom|Number=Sing	3	nmod	_	GTtags=Sg,Nom
3	керка	керка	NOUN	N	Case=Nom|Number=Sing	7	obl:lmod	_	GTtags=Sg,Nom
4	бокас	бокӧ	ADP	Adp	AdpType=Post|Case=Ill|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	case	_	GTtags=Po,Sg,Ill,PxSg3
5	мыйкӧ	мыйкӧ	PRON	Pron	Case=Nom|Definite=Ind|Derivation=Ko|Number=Sing|PronType=Ind	7	nsubj	_	GTtags=Indef,Indef,Sg,Nom,Der/кӧ
6	век	век	ADV	Adv	_	7	advmod:freq	_	_
7	вӧрис	вӧрны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=IV,Ind,Prt1,Sg3|SpaceAfter=No
8	,	,	PUNCT	CLB	_	11	punct	_	_
9	и	и	CCONJ	CC	_	11	cc	_	_
10	ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj	_	GTtags=Pers,Sg1,Nom
11	гӧгӧрвои	гӧгӧрвоны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	7	conj	_	GTtags=TV,Ind,Prt1,Sg1|SpaceAfter=No
12	,	,	PUNCT	CLB	_	16	punct	_	_
13	мый	мый	SCONJ	CS	_	16	mark	_	_
14	кодкӧ	кодкӧ	PRON	Pron	Case=Nom|Definite=Ind|Derivation=Ko|Number=Sing|PronType=Ind	16	nsubj	_	GTtags=Indef,Indef,Sg,Nom,Der/кӧ
15	сэні	сэні	ADV	Adv	_	16	advmod:lmod	_	_
16	ловъя	ловъя	ADJ	A	Case=Nom|Number=Sing	11	ccomp	_	GTtags=Sg,Nom|SpaceAfter=No
17	...	...	PUNCT	CLB	_	7	punct	_	_

~~~


