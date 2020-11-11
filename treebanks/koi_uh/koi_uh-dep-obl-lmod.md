---
layout: base
title:  'Statistics of obl:lmod in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `obl:lmod`

This relation is a language-specific subtype of <tt><a href="koi_uh-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="koi_uh-dep-obl-tmod.html">obl:tmod</a></tt>.

29 nodes (3%) are attached to their parents as `obl:lmod`.

16 instances of `obl:lmod` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.13793103448276.

The following 5 pairs of parts of speech are connected with `obl:lmod`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (21; 72% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (3; 10% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt> (3; 10% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obl:lmod	color:blue
1	Питер	Питер	PROPN	_	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	4	nsubj	_	GTtags=Prop,Sg,Nom
2	да	да	CCONJ	_	_	3	cc	_	_
3	Мери	Мери	PROPN	_	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	1	conj	_	GTtags=Prop,Sg,Nom
4	кутчисисӧ	кутчисьны	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Pl3
5	да	да	CCONJ	_	_	6	cc	_	_
6	петісӧ	петны	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	4	conj	_	GTtags=Ind,Prt1,Pl3
7	жырись	жыр	NOUN	_	Case=Ela|Number=Sing	6	obl:lmod	_	GTtags=Sg,Ela|SpaceAfter=No
8	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 obl:lmod	color:blue
1	Куимӧдз	Куим	ADJ	_	Case=Nom|Number=Sing|NumType=Ord	2	amod	_	GTtags=Ord,Sg,Nom
2	луныс	лун	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obl:tmod	_	GTtags=Sg,Nom,PxSg3
3	сымда	сымда	ADV	_	_	4	advmod	_	_
4	нюжаліс	нюжавны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	8	punct	_	_
6	что	что	SCONJ	_	_	8	mark	_	_
7	эз	оз	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	8	aux:neg	_	GTtags=Neg,Ind,Prt1,Sg3
8	тӧд	тӧдны	VERB	_	Connegative=Yes	4	ccomp	_	SpaceAfter=No
9	,	,	PUNCT	CLB	_	12	punct	_	_
10	мый	мый	PRON	_	Animacy=NHum|Case=Nom|PronType=Rel	12	obl:lmod	_	GTtags=Sem/NonHum,Nom,Rel
11	бердӧ	бердӧ	ADP	_	AdpType=Post|AdvType=Loc|Case=Ill|Number=Sing	10	case	_	GTtags=Po,Spat,Sg,Ill
12	кутчыны	кутчыны	VERB	_	VerbForm=Inf	8	ccomp	_	SpaceAfter=No
13	,	,	PUNCT	CLB	_	15	punct	_	_
14	кытчӧ	кытчӧ	ADV	_	AdvType=Loc|Case=Ill|PronType=Int	15	advmod:lmod	_	GTtags=Interr,Spat,Ill
15	воштісьны	воштісьны	VERB	_	VerbForm=Inf	8	conj	_	SpaceAfter=No
16	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl:lmod	color:blue
1	Сія	сія	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	быдмис	быдмыны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3
3	Парижын	Париж	PROPN	_	Case=Ine|NameType=Geo|Number=Sing	2	obl:lmod	_	GTtags=Prop,Sg,Ine|SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	Франция	Франция	PROPN	_	Case=Nom|NameType=Geo|Number=Sing	6	nmod	_	GTtags=Prop,Sg,Nom
6	юркарын	юркар	NOUN	_	Case=Ine|Number=Sing	3	appos	_	GTtags=Sg,Ine|SpaceAfter=No
7	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


