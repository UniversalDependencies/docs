---
layout: base
title:  'Statistics of csubj in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `csubj`

This relation is universal.

20 nodes (0%) are attached to their parents as `csubj`.

16 instances of `csubj` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.3.

The following 9 pairs of parts of speech are connected with `csubj`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (9; 45% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (3; 15% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (2; 10% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (1; 5% instances), <tt><a href="myv_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 csubj	color:blue
1	Маряви	марявомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	0	root	_	GTtags=IV,Ind,Prs,ScSg3|Gloss=can-be-heard
2	лоткасть	лоткамс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Prt1|Valency=1	1	csubj	_	GTtags=IV,Ind,Prt1,ScPl3|Gloss=stop
3	зняро	зняро	ADV	Adv	PronType=Rel	5	advmod	_	GTtags=Rel|Gloss=small-number-of
4	бутим	бутим	ADV	Adv	_	3	fixed	_	_
5	ломать	ломань	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	2	nsubj	_	GTtags=Pl,Nom,Indef,Err/Orth|Gloss=person
6	Миколонь	Микол	PROPN	N	Animacy=Hum|Case=Gen|Definite=Ind|Gender=Masc|NameType=Giv|Number=Plur,Sing	7	nmod	_	GTtags=Prop,Ant_Mal,SP,Gen,Indef|Gloss=Mikol
7	кудонть	кудо	NOUN	N	Case=Gen|Definite=Def|Number=Sing	2	obl	_	GTtags=Sem/Plc,Sg,Gen,Def|Gloss=house
8	икелев	икеле	ADP	Adp	AdvType=Loc|Case=Lat	7	case	_	GTtags=Spat,Lat|Gloss=in-front|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 csubj	color:blue
1	Кечай	Кечай	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|Gender=Masc|NameType=Giv|Number=Sing	5	nsubj	_	GTtags=Ant_Mal,Sg,Nom,Indef
2	сёвонень	сёвонень	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	3	obj	_	GTtags=SP,Gen,Indef
3	ичеме	ичемс	VERB	V	Case=Loc|VerbForm=Inf	5	xcomp	_	GTtags=Inf,Loc
4	эзь	эзь	AUX	V	Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Prt1	5	aux:neg	_	GTtags=Neg,Prt1,ScSg3
5	арсеяк	арсемс	VERB	V	Clitic=Gak|Connegative=Yes	0	root	_	GTtags=ConNeg,Clt/Gak|SpaceAfter=No
6	:	:	PUNCT	CLB	_	5	punct	_	_
7	авань	авань	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	8	nmod	_	GTtags=SP,Gen,Indef
8	тевс	тев	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	11	obl	_	GTtags=Sem/Inanim_Cnt,SP,Ill,Indef
9	цёранень	цёра	NOUN	N	Case=Dat|Definite=Ind|Number=Plur,Sing	11	obl	_	GTtags=SP,Dat,Indef
10	а	а	AUX	Pcle	Polarity=Neg	11	aux:neg	_	GTtags=Neg
11	ён	ён	ADJ	A	_	5	parataxis	_	_
12	_	оль	AUX	Cop	Number[subj]=Sing|Person[subj]=3|Tense=Pres	11	cop	_	GTtags=Prs,ScSg3
13	кундсемс	кундсемс	VERB	V	VerbForm=Inf	11	csubj	_	GTtags=Inf|SpaceAfter=No
14	,	,	PUNCT	CLB	_	16	punct	_	_
15	аволь	аволь	AUX	Pcle	NegationType=Contrastive|Polarity=Neg	16	aux:neg	_	GTtags=Neg,Emphatic
16	пакша	пакша	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	11	parataxis	_	GTtags=Sem/Hum,Sg,Nom,Indef
17	_	оль	AUX	Cop	Number[subj]=Sing|Person[subj]=3|Tense=Pres	16	cop	_	GTtags=Prs,ScSg3
18	ней	ней	ADV	Adv	AdvType=Tim	16	advmod	_	GTtags=Sem/Time|SpaceAfter=No
19	,	,	PUNCT	CLB	_	20	punct	_	_
20	визькс	визькс	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	11	conj	_	GTtags=Sem/Inanim_Cnt,Sg,Nom,Indef
21	тензэ	сон	PRON	Pron	Case=Dat|Number=Sing|Person=3|PronType=Prs|Variant=Short	20	obl	_	GTtags=Pers,Sg3,Dat,Short
22	сёвонь	сёвонь	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	23	obj	_	GTtags=Sem/Inanim,Sem/NCnt,Sg,Nom,Indef
23	нерьгемс	нерьгемс	VERB	V	VerbForm=Inf	20	csubj	_	GTtags=Inf|SpaceAfter=No
24	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	Аконашкане	Аконашкане	ADV	Adv	AdvType=Tim	0	root	_	GTtags=Sem/Time|Gloss=there-was-no-time
2	ль	оль	AUX	Cop	Number[subj]=Sing|Person[subj]=3|Tense=Prt2	1	cop	_	GTtags=Prt2,ScSg3
3	вешнемс	вешнемс	VERB	V	Valency=2|VerbForm=Inf	1	csubj	_	GTtags=TV,Inf|Gloss=look-for
4	«	«	PUNCT	PUNCT	_	5	punct	_	GTtags=|SpaceAfter=No
5	мазый	мазый	ADJ	A	_	7	amod	_	GTtags=|Gloss=pretty|SpaceAfter=No
6	»	»	PUNCT	PUNCT	_	5	punct	_	_
7	валт	вал	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	3	obj	_	GTtags=Pl,Nom,Indef|Gloss=word|SpaceAfter=No
8	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


