---
layout: base
title:  'Statistics of obj in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `obj`

This relation is universal.

49 nodes (5%) are attached to their parents as `obj`.

31 instances of `obj` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.57142857142857.

The following 3 pairs of parts of speech are connected with `obj`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (40; 82% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (8; 16% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obj	color:blue
1	Кыкнан	кык	DET	_	PronType=Tot	3	det	_	GTtags=Coll,Cmpl
2	том	том	ADJ	_	Case=Nom|Number=Sing	3	amod	_	GTtags=Sg,Nom
3	семьялӧ	семья	NOUN	_	Case=Dat|Number=Sing	5	obl	_	GTtags=Src/F,Sg,Dat
4	квартираэсӧ	квартира	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3	5	obj	_	GTtags=Pl,Acc,PxSg3
5	сетісӧ	сетны	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Pl3
6	ӧтдруг	ӧтдруг	ADV	_	_	5	advmod:tmod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obj	color:blue
1	Окаліс	окавны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3
2	Митя	Митя	PROPN	_	Case=Nom|NameType=Giv|Number=Sing	1	nsubj	_	GTtags=Prop,Prop,Sem/Mal,Sg,Nom
3	кыкнаннысӧ	кык	PRON	_	Case=Acc|Number=Sing|Number[psor]=Plur|Person[psor]=3|PronType=Tot	1	obj	_	GTtags=Coll,Der/MWN,N,Sg,PxPl3,Acc
4	да	да	CCONJ	_	_	5	cc	_	_
5	пуксьӧтіс	пуксьӧтны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	1	conj	_	GTtags=Ind,Prt1,Sg3
6	пызан	пызан	NOUN	_	Case=Nom|Number=Sing	7	nmod	_	GTtags=Sg,Nom
7	сайӧ	сай	NOUN	N	Case=Nom|NounType=Relat|Number=Sing|Number[psor]=Sing|Person[psor]=1	5	obl:lmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obj	color:blue
1	Эз	оз	AUX	_	Person=3|Polarity=Neg|Tense=Past|VerbType=Aux	3	aux:neg	_	GTtags=Prt1,3
2	позь	позьны	AUX	_	Connegative=Yes	3	aux:pot	_	GTtags=ConNeg
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


