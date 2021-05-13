---
layout: base
title:  'Statistics of nmod:appos in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `nmod:appos`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-nmod.html">nmod</a></tt>.
There are also 6 other language-specific subtypes of `nmod`: <tt><a href="kpv_lattice-dep-nmod-comp.html">nmod:comp</a></tt>, <tt><a href="kpv_lattice-dep-nmod-lfrom.html">nmod:lfrom</a></tt>, <tt><a href="kpv_lattice-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="kpv_lattice-dep-nmod-obj.html">nmod:obj</a></tt>, <tt><a href="kpv_lattice-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="kpv_lattice-dep-nmod-subj.html">nmod:subj</a></tt>.

6 nodes (0%) are attached to their parents as `nmod:appos`.

6 instances of `nmod:appos` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33333333333333.

The following 3 pairs of parts of speech are connected with `nmod:appos`: <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (4; 67% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-INTJ.html">INTJ</a></tt> (1; 17% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PROPN.html">PROPN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:appos	color:blue
1	Краснӧйяс	краснӧй	NOUN	N	Case=Nom|Number=Plur	5	nsubj	_	GTtags=Pl,Nom
2	даснаныс	даснан	PRON	Pron	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	1	det	_	GTtags=AssocColl,Sg,Nom,PxSg3
3	Понгорттуй	Понгорттуй	NOUN	N	Case=Nom|Number=Sing	4	nmod:appos	_	GTtags=Prop,Sg,Nom
4	сиктӧдз	сикт	NOUN	N	Case=Ter|Number=Sing	5	obl:lmod	_	GTtags=Sg,Ter
5	локтісны	локны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,Pl3|SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 nmod:appos	color:blue
1	Ho	но·и	CCONJ	CC	_	7	cc	_	_
2	и	_	CCONJ	CC	_	1	fixed	_	_
3	сэтчаняс	сэтчаняс	ADV	Adv	_	7	advmod:lmod	_	GTtags=EgrIne,Px3Sg
4	бой	бой	NOUN	N	Case=Nom|Number=Sing	7	nsubj	_	GTtags=Sg,Nom
5	жӧ	жӧ	ADV	Adv	_	4	advmod:eval	_	GTtags=Parenthetic
6	нин	нин	ADV	Adv	AdvType=Tim	7	advmod:tmod	_	GTtags=Sem/Time
7	муніс	мунны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,Sg3|SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	12	punct	_	_
9	«	«	PUNCT	PUNCT	_	10	punct	_	GTtags=LEFT|SpaceAfter=No
10	ура	ура	INTJ	Interj	_	12	nmod:appos	_	SpaceAfter=No
11	»	»	PUNCT	PUNCT	_	10	punct	_	GTtags=RIGHT
12	сорӧн	сор	NOUN	N	Case=Ins|Number=Sing	7	obl	_	GTtags=Sg,Ins|SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 21 nmod:appos	color:blue
1	Враг	враг	NOUN	N	Case=Nom|Number=Sing	12	csubj	_	OrigLang=ru|SpaceAfter=No
2	,	,	PUNCT	CLB	_	4	punct	_	_
3	коді	коді	PRON	Pron	Case=Nom|Number=Sing|PronType=Int	4	nsubj	_	_
4	лысьтас	лысьтыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut	1	acl:relcl	_	_
5	уськӧдчыны	уськӧдны	VERB	V	VerbForm=Inf	4	xcomp	_	_
6	великӧй	великӧй	ADJ	A	Case=Nom|Number=Sing	7	amod	_	OrigLang=ru
7	Сӧветскӧй	сӧветскӧй	ADJ	A	Case=Nom|Number=Sing	8	amod	_	OrigLang=ru
8	держава	держава	NOUN	N	Case=Nom|Number=Sing	5	obl	_	OrigLang=ru
9	вылӧ	вылын	ADP	Po	Case=Ill|Number=Sing	8	case	_	SpaceAfter=No
10	,	,	PUNCT	CLB	_	12	punct	_	_
11	лоас	лоны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut	12	aux:tense	_	_
12	сетӧма	сетны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
13	сэтшӧм	сэтшӧм	ADJ	A	Case=Nom|Number=Sing|PronType=Dem	14	amod	_	_
14	отпор	отпор	NOUN	N	Case=Nom|Number=Sing	12	obj	_	OrigLang=ru
15	да	да	CCONJ	CC	_	17	cc	_	_
16	нӧшта	нӧшта	ADV	Adv	_	17	advmod:tmod	_	_
17	чорыдджыкӧс	чорыд	ADJ	A	Case=Acc|Degree=Cmp|Number=Sing	14	conj	_	SpaceAfter=No
18	,	,	PUNCT	CLB	_	20	punct	_	_
19	кутшӧм	кутшӧм	ADJ	A	_	20	amod	_	_
20	вӧлі	вӧвны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	14	acl:relcl	_	_
21	Хасан	Хасан	PROPN	N	Case=Nom|Number=Sing	23	nmod:appos	_	OrigLang=ru
22	ты	ты	NOUN	N	Case=Nom|Number=Sing	21	flat:name	_	_
23	районын	район	NOUN	N	Case=Ine|Number=Sing	20	obl:lmod	_	OrigLang=ru
24	японскӧй	японскӧй	ADJ	A	Case=Nom|Number=Sing	25	amod	_	OrigLang=ru
25	самурайяслы	самурайяслы	NOUN	N	Case=Dat|Number=Plur	20	obl	_	OrigLang=ru|SpaceAfter=No
26	.	.	PUNCT	CLB	_	12	punct	_	_

~~~


