---
layout: base
title:  'Statistics of obl:agent in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-obl.html">obl</a></tt>.
There are also 7 other language-specific subtypes of `obl`: <tt><a href="kpv_lattice-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="kpv_lattice-dep-obl-lfrom.html">obl:lfrom</a></tt>, <tt><a href="kpv_lattice-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="kpv_lattice-dep-obl-lmp.html">obl:lmp</a></tt>, <tt><a href="kpv_lattice-dep-obl-lto.html">obl:lto</a></tt>, <tt><a href="kpv_lattice-dep-obl-mcl.html">obl:mcl</a></tt>, <tt><a href="kpv_lattice-dep-obl-tmod.html">obl:tmod</a></tt>.

5 nodes (0%) are attached to their parents as `obl:agent`.

4 instances of `obl:agent` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (4; 80% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 obl:agent	color:blue
1	Кӧсъян	кӧсйыны	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|Valency=2	12	advcl	_	GTtags=TV,Ind,Prs,Sg2
2	кӧ	кӧ	SCONJ	CS	_	1	mark	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	6	punct	_	_
4	оз	оз	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	6	aux:neg	_	GTtags=Neg,Ind,Prs,Sg3
5	кӧ	кӧ	SCONJ	CS	_	6	mark	_	_
6	ло	лоны	VERB	V	Connegative=Yes|Valency=1	1	conj	_	GTtags=IV,ConNeg
7	дыш	дыш	ADJ	A	Case=Nom|Number=Sing	6	xcomp	_	GTtags=Sg,Nom
8	тэныд	тэ	PRON	Pron	Case=Dat|Number=Sing|Person=2|PronType=Prs	9	obl:agent	_	GTtags=Pers,Sg2,Dat
9	лыддьынысӧ	лыддьыны	VERB	V	Clitic=So|Valency=2|VerbForm=Inf	6	csubj	_	GTtags=TV,Inf,Clt/сӧ|SpaceAfter=No
10	,	,	PUNCT	CLB	_	1	punct	_	_
11	ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	12	nsubj	_	GTtags=Pers,Sg1,Nom
12	висьтала	висьтавны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Valency=2	0	root	_	GTtags=TV,Ind,Prs,Sg1
13	тэныд	тэ	PRON	Pron	Case=Dat|Number=Sing|Person=2|PronType=Prs	12	obl	_	GTtags=Pers,Sg2,Dat|SpaceAfter=No
14	,	,	PUNCT	CLB	_	17	punct	_	_
15	коръясӧ	кор	ADV	Adv	AdvType=Tim|Case=Ill|Number=Plur|PronType=Rel	17	advmod:tmod	_	GTtags=Sem/Time,Pl,Ill,Rel
16	тэа-меа	тэа-меа	PRON	Pron	_	17	nsubj	_	_
17	окыштчылім	окыштчывны	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Past|Valency=1	12	ccomp	_	GTtags=IV,Ind,Prt1,Pl1|SpaceAfter=No
18	.	.	PUNCT	CLB	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl:agent	color:blue
1	Ми	ме	PRON	Pron	Case=Nom|Number=Plur|Person=1|PronType=Prs	8	nsubj	_	GTtags=Pers,Pl1,Nom|SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	3	punct	_	_
3	зонпосни	зонпосни	NOUN	N	Case=Nom|Number=Sing	1	appos	_	GTtags=Sg,Nom|SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	3	punct	_	_
5	туриясӧн	тури	NOUN	N	Case=Ins|Number=Plur	6	obl:agent	_	GTtags=Pl,Ins
6	вайӧм	вайны	VERB	V	Valency=2|VerbForm=Vnoun	7	acl:relcl	_	GTtags=TV,Der,Der/ӧм,PastPtc
7	шудсӧ	шуд	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obj	_	GTtags=Sg,Acc,PxSg3
8	гӧгӧрволім	гӧгӧрволыны	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,Pl1
9	ас	ас	PRON	Pron	Case=Nom|Number=Sing	10	det	_	GTtags=Sg,Nom
10	ног	ног	NOUN	N	Case=Nom|Number=Sing	8	obl	_	GTtags=Sg,Nom|SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


