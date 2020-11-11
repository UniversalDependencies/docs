---
layout: base
title:  'Statistics of obl:tmod in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="kpv_lattice-dep-obl-lmod.html">obl:lmod</a></tt>.

25 nodes (0%) are attached to their parents as `obl:tmod`.

21 instances of `obl:tmod` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.8.

The following 4 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (21; 84% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (2; 8% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obl:tmod	color:blue
1	Идралін	идравны	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Past	4	advcl	_	_
2	аскадӧ	аскадӧ	NOUN	N	Case=Ill|Number=Sing	1	obl:tmod	_	_
3	–	–	PUNCT	PUNCT	_	4	punct	_	_
4	выиграйтін	выиграйтны	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Past	0	root	_	Lang=Mixed|SpaceAfter=No
5	,	,	PUNCT	CLB	_	8	punct	_	_
6	сёрмӧдчин	сёрмӧдчыны	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Past	8	advcl	_	_
7	–	–	PUNCT	PUNCT	_	8	punct	_	_
8	проиграйтін	проиграйтны	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Past	4	conj	_	Lang=Mixed|SpaceAfter=No
9	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 obl:tmod	color:blue
1	Мудзӧм	мудзӧм	VERB	V	Case=Nom|Derivation=Vnoun|Number=Sing	7	obl:tmod	_	GTtags=NomAct,Sg,Nom
2	бӧрад	бӧрын	ADP	Adp	AdpType=Post|Case=Ine|Number=Sing|Number[psor]=Sing|Person[psor]=2	1	case	_	GTtags=Po,Sg,Ine,PxSg2
3	и	и	CCONJ	CC	_	5	advmod	_	_
4	пиня	пиня	NOUN	N	Case=Nom|Number=Sing	5	nmod	_	GTtags=Sg,Nom
5	тув	тув	NOUN	N	Case=Nom|Number=Sing	7	obl	_	GTtags=Sg,Nom
6	вылын	вылын	ADP	Adp	AdpType=Post|Case=Ine|Number=Sing	5	case	_	GTtags=Po,Sg,Ine
7	узьсяс	узьсьыны	VERB	V	Mood=Ind|Number=Sing|Person=3|PronType=Ref|Tense=Fut	0	root	_	GTtags=Refl,Ind,Fut,Sg3|SpaceAfter=No
8	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 obl:tmod	color:blue
1	Тыдалӧ	тыдавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	9	discourse	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	9	punct	_	_
3	разведкаыс	разведка	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	nsubj	_	_
4	сійӧ	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	det	_	_
5	луннас	лун	NOUN	N	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	obl:tmod	_	_
6	вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	9	cop	_	_
7	сэтшӧм	сэтшӧм	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	8	det	_	_
8	важнӧй	важнӧй	ADJ	A	Case=Nom|Number=Sing	9	amod	_	_
9	делӧӧн	делӧ	NOUN	N	Case=Ins|Number=Sing	0	root	_	SpaceAfter=No
10	,	,	PUNCT	CLB	_	13	punct	_	_
11	мый	мый	SCONJ	CS	_	13	cc	_	_
12	Ворошилов	Ворошилов	PROPN	N	Case=Nom|Number=Sing	13	nsubj	_	_
13	решитчис	решитчыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	9	acl	_	_
14	мунны	мунны	VERB	V	VerbForm=Inf	13	xcomp	_	_
15	ачыс	ас	PRON	Pron	Case=Nom|Person=3|Reflex=Yes	14	nmod	_	SpaceAfter=No
16	.	.	PUNCT	CLB	_	9	punct	_	_

~~~


