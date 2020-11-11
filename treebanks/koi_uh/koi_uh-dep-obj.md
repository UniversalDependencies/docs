---
layout: base
title:  'Statistics of obj in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `obj`

This relation is universal.

36 nodes (4%) are attached to their parents as `obj`.

21 instances of `obj` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.66666666666667.

The following 3 pairs of parts of speech are connected with `obj`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (27; 75% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (8; 22% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obj	color:blue
1	Ныв	ныв	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	GTtags=Sg,Nom
2	гижис	гижны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3
3	ёртыслӧ	ёрт	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	obl	_	GTtags=Sg,Dat,PxSg3
4	гижӧт	гижӧт	NOUN	_	Case=Nom|Number=Sing	2	obj	_	GTtags=Sg,Nom|SpaceAfter=No
5	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obj	color:blue
1	Нія	сія	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	_	GTtags=Pers,Pl3,Nom
2	озӧ	оз	AUX	_	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres	3	aux:neg	_	GTtags=Neg,Ind,Prs,Pl3
3	тӧдӧ	тӧдны	VERB	_	Connegative=Yes|Number=Plur	0	root	_	GTtags=Ind,Prs,ConNegPl|SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	_
5	кин	кин	PRON	_	Case=Nom|Number=Sing|PronType=Int	7	nsubj	_	GTtags=Interr,Sg,Nom
6	этӧ	эта	PRON	_	Case=Acc|Number=Sing|PronType=Dem	7	obj	_	GTtags=Dem,Sg,Nom
7	гижис	гижны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	3	ccomp	_	GTtags=Ind,Prt1,Sg3|SpaceAfter=No
8	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obj	color:blue
1	Эз	оз	AUX	_	Person=3|Polarity=Neg|Tense=Past|VerbType=Aux	3	aux:neg	_	GTtags=Prt1,3
2	позь	позьны	AUX	_	Connegative=Yes	3	aux	_	GTtags=ConNeg
3	бӧрйыны	бӧрйыны	VERB	_	VerbForm=Inf	0	root	_	GTtags=Inf
4	не	не	CCONJ	Polarity=Neg	_	5	cc:preconj	_	_
5	Питер	Питер	PROPN	_	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	3	obj	_	GTtags=Prop,Sg,Nom
6	Смитӧс	Смит	PROPN	_	Animacy=Hum|Case=Acc|NameType=Sur|Number=Sing	5	flat:name	_	GTtags=Prop,Sg,Acc|SpaceAfter=No
7	,	,	PUNCT	CLB	_	9	punct	_	_
8	не	не	CCONJ	Polarity=Neg	_	9	cc	_	_
9	Мери	Мери	PROPN	_	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	6	conj	_	GTtags=Prop,Sg,Nom
10	Браунӧс	Браун	PROPN	_	Animacy=Hum|Case=Acc|NameType=Sur|Number=Sing	9	flat:name	_	GTtags=Prop,Sg,Acc|SpaceAfter=No
11	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


