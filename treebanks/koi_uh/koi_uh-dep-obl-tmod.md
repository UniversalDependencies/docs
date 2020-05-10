---
layout: base
title:  'Statistics of obl:tmod in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="koi_uh-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="koi_uh-dep-obl-lmod.html">obl:lmod</a></tt>.

7 nodes (1%) are attached to their parents as `obl:tmod`.

5 instances of `obl:tmod` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.85714285714286.

The following 3 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (5; 71% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (1; 14% instances).


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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 10 obl:tmod	color:blue
1	Сылӧ	сія	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	4	obl	_	GTtags=Pers,Sg3,Dat
2	коліс	ковны	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	aux	_	GTtags=Ind,Prt1,Sg3
3	басӧка	басӧка	ADV	_	_	4	advmod	_	_
4	лӧсьӧтны	лӧсьӧтны	VERB	_	VerbForm=Inf	0	root	_	GTtags=Inf
5	юрсисӧ	юрси	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obj	_	GTtags=Sg,Acc,PxSg3|SpaceAfter=No
6	,	,	PUNCT	_	_	14	punct	_	_
7	но	но	CCONJ	_	_	14	cc	_	_
8	мылякӧ	мылякӧ	ADV	_	Definite=Ind	14	advmod	_	GTtags=Indef
9	сія	сія	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	det	_	GTtags=Pers,Sg3,Nom
10	лунӧ	лун	NOUN	_	Case=Ill|Number=Sing	14	obl:tmod	_	GTtags=Sg,Ill
11	сылӧ	сія	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	14	obl	_	GTtags=Pers,Sg3,Dat
12	эз	оз	AUX	_	Person=3|Polarity=Neg|Tense=Past|VerbType=Aux	14	aux:neg	_	GTtags=Prt1,3
13	вӧв	вӧвны	AUX	_	Connegative=Yes	14	cop	_	GTtags=ConNeg
14	охота	охота	NOUN	_	Case=Nom|Number=Sing	4	conj	_	GTtags=Sg,Nom
15	сійӧ	сія	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	16	obj	_	GTtags=Pers,Sg3,Acc
16	керны	керны	VERB	_	VerbForm=Inf	14	advcl	_	GTtags=Inf|SpaceAfter=No
17	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl:tmod	color:blue
1	Сы	сія	PRON	_	Number=Sing|Person=3|PronType=Prs	3	obl:tmod	_	GTtags=Pers,Sg3
2	бӧрсянь	бӧрсянь	ADP	_	AdpType=Post|AdvType=Loc|Case=Egr|Number=Sing	1	case	_	GTtags=Po,Spat,Sg,Egr
3	вуджӧны	вуджны	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,Pl3
4	порогсӧ	порог	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	obj	_	GTtags=Sg,Acc,PxSg3
5	эшӧ	эшӧ	ADV	_	_	3	advmod:tmod	_	_
6	кыка	кыка	NUM	_	Number=Sing	3	obl	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


