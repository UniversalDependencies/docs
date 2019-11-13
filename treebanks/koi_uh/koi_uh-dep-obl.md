---
layout: base
title:  'Statistics of obl in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `obl`

This relation is universal.
There are 1 language-specific subtypes of `obl`: <tt><a href="koi_uh-dep-obl-tmod.html">obl:tmod</a></tt>.

21 nodes (5%) are attached to their parents as `obl`.

11 instances of `obl` (52%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.23809523809524.

The following 6 pairs of parts of speech are connected with `obl`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (10; 48% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (5; 24% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt> (3; 14% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-NUM.html">NUM</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl	color:blue
1	Ныв	ныв	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	GTtags=Sg,Nom
2	гижис	гижны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3
3	ёртыслӧ	ёрт	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	obl	_	GTtags=Sg,Dat,PxSg3
4	гижӧт	гижӧт	NOUN	_	Case=Nom|Number=Sing	2	obj	_	GTtags=Sg,Nom|SpaceAfter=No
5	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl	color:blue
1	Меным	ме	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	2	obl	_	GTtags=Pers,Sg1,Dat
2	кажитчӧ	кажитчыны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	что	что	SCONJ	_	_	5	mark	_	_
5	зэрӧ	зэрны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	csubj	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
6	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl	color:blue
1	Сія	сія	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	быдмис	быдмыны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3
3	Парижын	Париж	PROPN	_	Case=Ine|Number=Sing	2	obl	_	GTtags=Prop,Sg,Ine|SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	Франция	Франция	PROPN	_	Case=Nom|Number=Sing	6	nmod	_	GTtags=Prop,Sg,Nom
6	юркарын	юркар	NOUN	_	Case=Ine|Number=Sing	3	appos	_	GTtags=Sg,Ine|SpaceAfter=No
7	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


