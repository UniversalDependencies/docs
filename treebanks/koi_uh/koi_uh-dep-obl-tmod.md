---
layout: base
title:  'Statistics of obl:tmod in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="koi_uh-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="koi_uh-dep-obl-lmod.html">obl:lmod</a></tt>.

10 nodes (1%) are attached to their parents as `obl:tmod`.

7 instances of `obl:tmod` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.7.

The following 4 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (6; 60% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (2; 20% instances), <tt><a href="koi_uh-pos-PRON.html">PRON</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:tmod	color:blue
1	А	а	CCONJ	CC	_	3	cc	_	GTtags=CC
2	медӧддьӧнсӧ	медӧддьӧнсӧ	ADV	_	_	3	advmod	_	_
3	повзьӧтчӧ	повзьӧтчыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	GTtags=V,Ind,Prs,Sg3
4	середа	середа	NOUN	_	_	5	nmod	_	_
5	ойӧ	ой	NOUN	N	Case=Ill|Number=Sing	3	obl:tmod	_	GTtags=N,Sg,Ill|SpaceAfter=No
6	.	.	PUNCT	CLB	_	3	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 obl:tmod	color:blue
1	Тулыснас	тулыс	NOUN	N	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	obl:tmod	_	GTtags=Sg,Ins,PxSg3
2	узян	узьны	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg2|SpaceAfter=No
3	,	,	PUNCT	CLB	_	6	punct	_	_
4	арнас	ар	NOUN	N	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	obl:tmod	_	GTtags=Sg,Ins,PxSg3
5	шогö	шог	NOUN	N	Case=Ill|Number=Sing	6	obl:lmod	_	GTtags=Der,Der/MWN,N,Sg,Ill
6	усян	усян	NOUN	N	Case=Nom|Number=Sing	2	conj	_	GTtags=Sg,Nom|SpaceAfter=No
7	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obl:tmod	color:blue
1	Абу	абу	INTJ	_	_	4	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	абу	абу	AUX	_	Polarity=Neg	4	aux:neg	_	_
4	сія	сія	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	0	root	_	GTtags=Pers,Sg3,Nom
5	талун	талун	NOUN	_	Case=Nom|Number=Sing	4	obl:tmod	_	GTtags=Sg,Nom
6	гортас	горт	NOUN	_	Case=Ill|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obl:lmod	_	GTtags=N,Sg,Ill,PxSg3|SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	_

~~~


