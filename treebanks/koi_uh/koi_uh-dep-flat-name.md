---
layout: base
title:  'Statistics of flat:name in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `flat:name`

This relation is a language-specific subtype of .

5 nodes (1%) are attached to their parents as `flat:name`.

5 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `flat:name`: <tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt>-<tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt> (3; 60% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:name	color:blue
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


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	Дядя	дядя	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	GTtags=N,Sg,Nom
2	Митя	Митя	NOUN	N	Case=Nom|Number=Sing	1	flat:name	_	GTtags=N,Prop,Sem/Ant,Sg,Nom
3	видзӧтіс	видзӧтны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=V,IV,Ind,Prt1,Sg3|SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	GTtags=CLB
5	кыдз	кыдз	ADV	Adv	AdvType=Man|PronType=Rel	6	advmod	_	GTtags=Adv,Manner,Rel
6	пиньӧвтчисӧ	пиньӧвтчыны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	3	advcl	_	GTtags=V,IV,Ind,Prt1,Pl3
7	менам	ме	PRON	Pron	Case=Gen|Number=Sing|Person=1|PronType=Prs	8	nmod:poss	_	GTtags=Pron,Pers,Sg1,Gen
8	аннэзӧ	ан	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=1	6	nsubj	_	GTtags=N,Pl,Nom,PxSg1|SpaceAfter=No
9	,	,	PUNCT	CLB	_	11	punct	_	GTtags=CLB
10	и	и	CCONJ	CC	_	11	cc	_	GTtags=CC
11	шынняліс	шыннявны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	3	conj	_	GTtags=V,Ind,Prt1,Sg3
12	довольнӧя	довольнӧя	ADV	Adv	_	11	advmod	_	GTtags=A,Der,Der/A,Adv|SpaceAfter=No
13	.	.	PUNCT	CLB	_	3	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat:name	color:blue
1	А	а	CCONJ	CC	_	6	cc	_	GTtags=CC
2	вот	вот	ADV	Adv	_	6	advmod	_	GTtags=Adv
3	эна	эна	PRON	_	Case=Nom|Number=Plur|PronType=Dem	5	det	_	_
4	кык	кык	NUM	Num	NumType=Card	5	nummod	_	GTtags=Num,Card,Cmpl
5	керкуын	керку	NOUN	N	Case=Ine|Number=Sing	6	obl:lmod	_	GTtags=N,Sg,Ine
6	олісӧ	овны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=V,IV,Ind,Prt1,Pl3
7	воннэз	вон	NOUN	N	Case=Nom|Number=Plur	6	nsubj	_	GTtags=N,Pl,Nom|SpaceAfter=No
8	:	:	PUNCT	CLB	_	9	punct	_	GTtags=CLB
9	Нетулика	Нетулика	PROPN	NameType=Giv	_	7	list	_	_
10	Сеня	Сень	NOUN	N	Derivation=ProprietiveMod|NameType=Giv|Number=Sing	9	flat:name	_	GTtags=N,Prop,Sem/Sur,Sg,Der,Der/ProprietiveMod,A
11	да	да	CCONJ	CC	_	12	cc	_	GTtags=CC
12	Тулика	Тулика	PROPN	_	NameType=Giv	7	list	_	_
13	Прокоп	Прокоп	PROPN	N	Case=Nom|NameType=Giv|Number=Sing	12	flat:name	_	GTtags=N,Prop,Sem/Sur,Sg,Nom|SpaceAfter=No
14	.	.	PUNCT	CLB	_	6	punct	_	GTtags=CLB

~~~


