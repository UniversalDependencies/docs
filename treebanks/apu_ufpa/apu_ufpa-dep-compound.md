---
layout: base
title:  'Statistics of compound in UD_Apurina-UFPA'
udver: '2'
---

## Treebank Statistics: UD_Apurina-UFPA: Relations: `compound`

This relation is universal.

5 nodes (0%) are attached to their parents as `compound`.

5 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `compound`: <tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt> (4; 80% instances), <tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="apu_ufpa-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	–	–	PUNCT	PUNCT	_	3	punct	_	_
2	Nuta	nuta	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	gloss[pt]=1SG
3	awapytyka	awapytyka	VERB	V	_	0	root	_	gloss[pt]=ter-ENF-PRED
4	awiri	awiri	NOUN	N	Case=Nom|Gender=Masc|Number=Sing|Possessed=No	5	compound	_	gloss[pt]=rapé
5	yky	yky	NOUN	N	Case=Nom|Gender=Masc|Number=Sing|Possessed=No	3	obj	_	gloss[pt]=semente.|SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound	color:blue
1	Kumyrype	Kumyrype	NOUN	N	_	2	nsubj	_	_
2	pusunapeka	pusunapeka	VERB	V	Mood=Ind|Tense=Past,Pres|VerbForm=Fin	0	root	_	_
3	inhinhiã	inhinhiã	ADV	Adv	AdvType=Tim	2	advmod	_	GTtags=Aux,Der,Der/NomAct,N,Msc,Sg,NPossd,Loc
4	akiritharu	akiritha	VERB	V	Gender[obj]=Fem|Mood=Ind|Number[subj]=Sing|Person[obj]=3|Tense=Past,Pres|VerbForm=Fin	2	conj	_	GTtags=Oc3F,NFut
5	ĩtanyru	tanyru	NOUN	N	Gender=Fem|Gender[psor]=Masc|Number[psor]=Sing|Person[psor]=3	4	obl	_	_
6	kumyrype	kumyrype	NOUN	N	_	7	obj	_	_
7	uiuẽkinhi	iuẽka	VERB	V	Gender[psor]=Masc|Number[psor]=Sing|Person[psor]=3|VerbForm=Vnoun	8	compound	_	_
8	nere	neretxi	NOUN	N	Case=Nom|Gender=Masc|Number=Sing|Possessed=Yes	4	obj	_	GTtags=Msc,Sg,Possd,Nom|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	GTtags=CLB

~~~


