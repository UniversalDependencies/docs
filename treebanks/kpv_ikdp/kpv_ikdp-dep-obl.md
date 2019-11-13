---
layout: base
title:  'Statistics of obl in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `obl`

This relation is universal.

129 nodes (10%) are attached to their parents as `obl`.

80 instances of `obl` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.16279069767442.

The following 12 pairs of parts of speech are connected with `obl`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (100; 78% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PROPN.html">PROPN</a></tt> (8; 6% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (5; 4% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (4; 3% instances), <tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl	color:blue
1	Мама	мама	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	Lang=Mixed
2	уджалӧ	уджавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	колхозын	колхоз	NOUN	N	Case=Ine|Number=Sing	2	obl	_	Lang=Mixed|SpaceAfter=No
4	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obl	color:blue
1	И	и	CCONJ	CC	_	2	cc	_	Lang=Mixed
2	этія	этія	PRON	Pron	_	6	discourse	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	4	punct	_	_
4	миян	ми	PRON	Pron	Case=Gen|Number=Plur|Person=1|PronType=Prs	6	nsubj	_	_
5	ӧттӧрйи	ӧттӧрйи	ADV	Adv	_	6	advmod	_	_
6	вӧрзялісныс	вӧрзявны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
7	Из	из	PROPN	N	Case=Nom|Number=Sing	6	obl	_	_
8	сае	сайын	ADP	Po	Case=Ill|Number=Sing	7	case	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obl	color:blue
1	А	а	CCONJ	CC	_	2	cc	_	Lang=Mixed
2	мамыслӧн	мам	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	Lang=Mixed|GTtags=Sg,Gen,PxSg3
3	вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	cop	_	GTtags=Ind,Prt1,Sg3
4	потанын	потан	NOUN	N	Case=Ine|Number=Sing	2	obl	_	GTtags=Sg,Ine
5	пони	пони	ADJ	A	Case=Nom|Number=Sing	6	amod	_	GTtags=Sg,Nom
6	тятей	тятей	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	GTtags=Sg,Nom|SpaceAfter=No
7	,	,	PUNCT	CLB	_	8	punct	_	_
8	туплялӧма	туплявны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	acl:relcl	_	GTtags=TV,Ind,Prt2,Sg3
9	ротӧн	рот	NOUN	N	Case=Ins|Number=Sing	8	obl	_	GTtags=Sg,Ins|SpaceAfter=No
10	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


