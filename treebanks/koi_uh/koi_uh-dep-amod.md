---
layout: base
title:  'Statistics of amod in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `amod`

This relation is universal.

21 nodes (2%) are attached to their parents as `amod`.

20 instances of `amod` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19047619047619.

The following 3 pairs of parts of speech are connected with `amod`: <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt> (19; 90% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="koi_uh-pos-PRON.html">PRON</a></tt>-<tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	Кыкнан	кык	DET	_	PronType=Tot	3	det	_	GTtags=Coll,Cmpl
2	том	том	ADJ	_	Case=Nom|Number=Sing	3	amod	_	GTtags=Sg,Nom
3	семьялӧ	семья	NOUN	_	Case=Dat|Number=Sing	5	obl	_	GTtags=Src/F,Sg,Dat
4	квартираэсӧ	квартира	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3	5	obj	_	GTtags=Pl,Acc,PxSg3
5	сетісӧ	сетны	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Pl3
6	ӧтдруг	ӧтдруг	ADV	_	_	5	advmod:tmod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 amod	color:blue
1	Ордчӧн	ордчӧн	ADV	Adv	_	3	advmod:lmod	_	GTtags=Adv
2	мекӧт	ме	PRON	Pron	Case=Com|Number=Sing|Person=1|PronType=Prs	1	nmod	_	GTtags=Pron,Pers,Sg1,Com
3	пукалӧ	пукавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	GTtags=V,TV,Ind,Prs,Sg3
4	сьӧд	сьӧд	ADJ	A	_	5	amod	_	GTtags=A
5	тошока	тошок	NOUN	N	Case=Prp|Number=Sing	9	amod	_	GTtags=N,Sg,Der,Der/ProprietiveMod,A
6	и	и	CCONJ	CC	_	8	cc	_	GTtags=CC
7	гардчӧмкодь	гардчыны	VERB	V	Case=Nom|Derivation=CompMod|Number=Sing|Tense=Past|VerbForm=Part	8	advcl	_	GTtags=V,IV,Ind,Prt2,Sg3,Der,Der/CompMod
8	уссэза	ус	NOUN	N	Case=Prp|Number=Plur	5	conj	_	GTtags=N,Pl,Der,Der/ProprietiveMod,A
9	мужик	мужик	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	GTtags=N,Sg,Nom|SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 amod	color:blue
1	Но	но	CCONJ	CC	_	10	cc	_	_
2	керкуыс	керку	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	10	obl:lmod	_	GTtags=Sg,Nom,PxSg3
3	бокын	бокын	ADP	Adp	AdvType=Loc|Case=Ine	2	case	_	GTtags=Spat,Ine|SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	туй	туй	NOUN	N	Case=Nom|Number=Sing	6	nmod	_	GTtags=Sg,Nom
6	ладорсяняс	ладор	NOUN	N	Case=Egr|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	appos	_	GTtags=Sg,Egr,PxSg3,So/CP|SpaceAfter=No
7	,	,	PUNCT	CLB	_	6	punct	_	_
8	мыйкӧ	мыйкӧ	PRON	Pron	Case=Nom|Number=Sing|PronType=Ind	10	nsubj	_	GTtags=Indef,Sg,Nom
9	сё	сё	ADV	Adv	AdvType=Deg	10	advmod	_	GTtags=Deg
10	вӧрис	вӧрны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3|SpaceAfter=No
11	,	,	PUNCT	CLB	_	14	punct	_	_
12	и	и	CCONJ	CC	_	14	cc	_	_
13	ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	14	nsubj	_	GTtags=Pers,Sg1,Nom
14	вежӧрті	вежӧртны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	10	conj	_	GTtags=Ind,Prt1,Sg1|SpaceAfter=No
15	,	,	PUNCT	CLB	_	17	punct	_	_
16	что	что	SCONJ	CS	_	17	mark	_	_
17	сэтӧн	сэтӧн	ADV	Adv	_	14	ccomp	_	_
18	кинкӧ	кинкӧ	PRON	Pron	Case=Nom|Number=Sing|PronType=Ind	17	nsubj:cop	_	GTtags=Indef,Sg,Nom
19	ловья	ловья	ADJ	A	_	18	amod	_	SpaceAfter=No
20	...	...	PUNCT	CLB	_	10	punct	_	_

~~~


