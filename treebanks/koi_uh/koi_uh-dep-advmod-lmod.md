---
layout: base
title:  'Statistics of advmod:lmod in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `advmod:lmod`

This relation is a language-specific subtype of <tt><a href="koi_uh-dep-advmod.html">advmod</a></tt>.
There are also 2 other language-specific subtypes of `advmod`: <tt><a href="koi_uh-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="koi_uh-dep-advmod-tmod.html">advmod:tmod</a></tt>.

8 nodes (1%) are attached to their parents as `advmod:lmod`.

8 instances of `advmod:lmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.875.

The following 3 pairs of parts of speech are connected with `advmod:lmod`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (6; 75% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (1; 13% instances), <tt><a href="koi_uh-pos-ADV.html">ADV</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod:lmod	color:blue
1	Ордчӧн	ордчӧн	ADV	Adv	_	3	advmod:lmod	_	GTtags=Adv
2	мекӧт	ме	PRON	Pron	Case=Com|Number=Sing|Person=1|PronType=Prs	1	nmod	_	GTtags=Pron,Pers,Sg1,Com
3	пукалӧ	пукавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Valency=2	0	root	_	GTtags=V,TV,Ind,Prs,Sg3
4	сьӧд	сьӧд	ADJ	A	_	5	amod	_	GTtags=A
5	тошока	тошока	NOUN	N	Derivation=ProprietiveMod|Number=Sing	9	amod	_	GTtags=N,Sg,Der,Der/ProprietiveMod,A
6	и	и	CCONJ	CC	_	8	cc	_	GTtags=CC
7	гардчӧмкодь	гардчыны	VERB	V	Derivation=CompMod|Mood=Ind|Number=Sing|Person=3|Tense=Prt2|Valency=1	8	advcl	_	GTtags=V,IV,Ind,Prt2,Sg3,Der,Der/CompMod
8	уссэза	ус	NOUN	N	Derivation=ProprietiveMod|Number=Plur	5	conj	_	GTtags=N,Pl,Der,Der/ProprietiveMod,A
9	мужик	мужик	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	GTtags=N,Sg,Nom|SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:lmod	color:blue
1	Только	только	ADV	_	_	3	advmod	_	_
2	ылын	ылын	ADV	_	AdvType=Loc|Case=Ine	3	advmod:lmod	_	GTtags=Spat,Ine
3	веськытлань	веськыт	ADJ	_	Case=Apr|Number=Sing	9	obl:lmod	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	самӧй	самӧй	ADV	_	_	6	advmod	_	_
6	горизонт	горизонт	NOUN	_	Case=Nom|Number=Sing	3	appos	_	GTtags=Sg,Nom
7	вылын	вылын	ADP	_	AdpType=Post|AdvType=Loc|Case=Ine|Number=Sing	6	case	_	SpaceAfter=No
8	,	,	PUNCT	CLB	_	6	punct	_	_
9	лэбтіcиcӧ	лэбтіcьны	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Pl3
10	кык	кык	NUM	_	Case=Nom|Number=Sing|NumType=Card	13	nummod	_	GTtags=Card,Sg,Nom
11	ыджыт	ыджыт	ADJ	_	Case=Nom|Number=Sing	13	amod	_	GTtags=Sg,Nom
12	коричневӧй	коричневӧй	ADJ	_	Case=Nom|Number=Sing	13	amod	_	GTtags=Sg,Nom
13	кымӧp	кымӧp	NOUN	_	Case=Nom|Number=Sing	9	nsubj	_	SpaceAfter=No
14	.	.	PUNCT	CLB	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 advmod:lmod	color:blue
1	Ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj:cop	_	GTtags=Pron,Pers,Sg1,Nom
2	татӧн	татӧн	ADV	Adv	_	4	advmod:lmod	_	GTtags=Adv
3	не	не	AUX	Pcle	_	4	aux:neg	_	GTtags=Pcle
4	ӧтнам	ӧтнам	ADV	Adv	_	0	root	_	GTtags=Adv|SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	GTtags=CLB

~~~


