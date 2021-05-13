---
layout: base
title:  'Statistics of obl in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `obl`

This relation is universal.
There are 5 language-specific subtypes of `obl`: <tt><a href="kpv_ikdp-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="kpv_ikdp-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="kpv_ikdp-dep-obl-lmp.html">obl:lmp</a></tt>, <tt><a href="kpv_ikdp-dep-obl-lto.html">obl:lto</a></tt>, <tt><a href="kpv_ikdp-dep-obl-tmod.html">obl:tmod</a></tt>.

158 nodes (7%) are attached to their parents as `obl`.

88 instances of `obl` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.18354430379747.

The following 11 pairs of parts of speech are connected with `obl`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (119; 75% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (15; 9% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PROPN.html">PROPN</a></tt> (8; 5% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl	color:blue
1	Мама	мама	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	OrigLang=ru
2	уджалӧ	уджавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	колхозын	колхоз	NOUN	N	Case=Ine|Number=Sing	2	obl	_	OrigLang=ru|SpaceAfter=No
4	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl	color:blue
1	Сы	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	obl	_	_
2	бӧрын	бӧр	ADP	Po	Case=Ine|Number=Sing	1	case	_	_
3	устроитчи	устроитчыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	OrigLang=ru
4	рӧбитны	рӧбитны	VERB	V	VerbForm=Inf	3	xcomp	_	OrigLang=ru|SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	локті	локны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	3	parataxis	_	_
7	ас	ас	ADJ	A	Case=Nom|Number=Sing|PronType=Prs	8	nmod	_	_
8	сиктэ	сикт	NOUN	N	Case=Ill|Number=Sing	6	obl	_	_
9	да	да	PART	Pcle	_	8	advmod	_	OrigLang=ru|SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obl	color:blue
1	И	и	CCONJ	CC	_	2	cc	_	OrigLang=ru
2	этія	этія	PRON	Pron	_	6	discourse	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	4	punct	_	_
4	миян	ми	PRON	Pron	Case=Gen|Number=Plur|Person=1|PronType=Prs	6	nsubj	_	_
5	ӧттӧрйи	ӧттӧрйи	ADV	Adv	_	6	advmod:tmod	_	_
6	вӧрзялісныс	вӧрзявны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	_
7	Из	из	PROPN	N	Case=Nom|Number=Sing	6	obl	_	_
8	сае	сайын	ADP	Po	Case=Ill|Number=Sing	7	case	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


