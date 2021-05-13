---
layout: base
title:  'Statistics of acl:relcl in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="kpv_ikdp-dep-acl.html">acl</a></tt>.

3 nodes (0%) are attached to their parents as `acl:relcl`.

3 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.33333333333333.

The following 2 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (2; 67% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl:relcl	color:blue
1	А	а	CCONJ	CC	_	2	cc	_	OrigLang=ru
2	мамыслӧн	мам	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	OrigLang=ru|GTtags=Sg,Gen,PxSg3
3	вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	cop	_	GTtags=Ind,Prt1,Sg3
4	потанын	потан	NOUN	N	Case=Ine|Number=Sing	2	obl	_	GTtags=Sg,Ine
5	пони	пони	ADJ	A	Case=Nom|Number=Sing	6	amod	_	GTtags=Sg,Nom
6	тятей	тятей	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	GTtags=Sg,Nom|SpaceAfter=No
7	,	,	PUNCT	CLB	_	8	punct	_	_
8	туплялӧма	туплявны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	6	acl:relcl	_	GTtags=TV,Ind,Prt2,Sg3
9	ротӧн	рот	NOUN	N	Case=Ins|Number=Sing	8	obl	_	GTtags=Sg,Ins|SpaceAfter=No
10	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	И	и	CCONJ	CC	_	3	cc	_	_
2	дзолясянь	дзоля	ADJ	A	Case=Egr|Number=Sing	3	obl:tmod	_	GTtags=Sg,Egr
3	видзеді	видзӧдны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Err/Dial,Sg3
4	кинояс	кино	NOUN	N	Case=Nom|Number=Plur	3	obj	_	GTtags=Pl,Nom|SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	6	punct	_	_
6	сериалъяс	сериал	NOUN	N	Case=Nom|Number=Plur	4	conj	_	GTtags=Pl,Nom
7	английскей	английскӧй	NOUN	N	Case=Nom|Number=Sing	8	nmod	_	GTtags=Sg,Nom
8	вылын	выв	NOUN	N	Case=Ine|NounType=Relat|Number=Sing	4	acl:relcl	_	GTtags=Relat,Sg,Ine|SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	10	punct	_	_
10	вуджедтэг	вуджӧдны	VERB	V	Derivation=VCar|Valency=2	8	conj	_	GTtags=TV,VCar,Err/Dial|SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


