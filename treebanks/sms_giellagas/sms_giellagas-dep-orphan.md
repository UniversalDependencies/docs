---
layout: base
title:  'Statistics of orphan in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `orphan`

This relation is universal.

11 nodes (1%) are attached to their parents as `orphan`.

9 instances of `orphan` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.36363636363636.

The following 7 pairs of parts of speech are connected with `orphan`: <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (4; 36% instances), <tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (2; 18% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt> (1; 9% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (1; 9% instances), <tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (1; 9% instances), <tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 orphan	color:blue
1	Son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	vueʹsti	vuäʹstted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=2	0	root	_	GTtags=Ind,Prt,Sg3
3	aaut	autt	NOUN	N	Case=Acc|Number=Sing	2	obj	_	GTtags=Sg,Acc
4	da	da	CCONJ	CC	_	6	cc	_	_
5	väʹst	väʹst	ADV	Adv	_	6	orphan	_	_
6	viʹlljes	villj	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	conj	_	GTtags=Sem/Kin,Sg,Nom,PxSg3
7	pâi	pâi	ADV	Adv	_	6	orphan	_	_
8	tanccâmvuâjan	tanccâmvuâjan	NOUN	N	Case=Acc|Number=Sing	6	orphan	_	GTtags=Sg,Acc|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 orphan	color:blue
1	Mary	Mary	PROPN	N	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	2	nsubj	_	GTtags=Prop,Sem/Fem,Sg,Nom
2	vuäǯǯai	vuäǯǯad	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=2	0	root	_	GTtags=Ind,Prt,Sg3
3	proons	pronss	NOUN	N	Case=Acc|Number=Sing	2	obj	_	GTtags=Sg,Acc|SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	_
5	Peter	Peter	PROPN	N	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	2	conj	_	GTtags=Prop,Sem/Mal,Sg,Nom
6	siilb	silbb	NOUN	N	Case=Acc|Number=Sing	5	orphan	_	GTtags=Sg,Acc
7	da	da	CCONJ	CC	_	8	cc	_	_
8	Jane	Jane	PROPN	N	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	2	conj	_	GTtags=Prop,Sem/Fem,Sg,Nom
9	kååʹll	kåʹll	NOUN	N	Case=Acc|Number=Sing	8	orphan	_	GTtags=Sg,Acc|SpaceAfter=No
10	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 orphan	color:blue
1	–	–	PUNCT	PUNCT	_	4	punct	_	_
2	”	”	PUNCT	PUNCT	_	4	punct	_	GTtags=RIGHT|SpaceAfter=No
3	Ääkka	ääkkaž	NOUN	N	Animacy=Hum|Case=Gen|Number=Sing	4	nmod:poss	_	GTtags=Sem/Hum,Sg,Gen
4	niõđâž	niõđâž	NOUN	N	Case=Nom|Number=Sing	0	root	_	GTtags=Sg,Nom
5	ij	ij	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Neg	4	orphan	_	GTtags=Neg,Ind,Sg3
6	ni	ni	PART	Pcle	Polarity=Neg	7	advmod:neg	_	GTtags=Pcle,Neg
7	mâiʹd	mâiʹd	PRON	Pron	_	4	orphan	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	15	punct	_	_
9	ääkka	ääkkaž	NOUN	N	Animacy=Hum|Case=Gen|Number=Sing	10	nmod:poss	_	GTtags=Sem/Hum,Sg,Gen
10	niõđâž	niõđâž	NOUN	N	Case=Nom|Number=Sing	15	nsubj	_	GTtags=Sg,Nom
11	pâi	pâi	ADV	Adv	_	15	advmod	_	GTtags=@ADVL>
12	peeiʹvin	peiʹvv	NOUN	N	Case=Com|Number=Sing	15	obl:tmod	_	GTtags=Sg,Com,@>ADVL
13	da	da	CCONJ	CC	_	14	cc	_	_
14	mannuin	mään	NOUN	N	Case=Com|Number=Sing	12	conj	_	GTtags=Sg,Com
15	seârr	siõrrâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	conj	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
16	,	,	PUNCT	PUNCT	_	18	punct	_	_
17	kåʹllkåʹđđnjõõzzid	kåʹllkåʹđđnjõs	NOUN	N	Case=Acc|Number=Plur	18	obj	_	GTtags=Pl,Acc
18	kååđđ	kååʹđđed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	conj	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
19	.	.	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No
20	”	”	PUNCT	PUNCT	_	4	punct	_	GTtags=RIGHT

~~~


