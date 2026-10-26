---
layout: base
title:  'Statistics of xcomp in UD_Apurina-UFPA'
udver: '2'
---

## Treebank Statistics: UD_Apurina-UFPA: Relations: `xcomp`

This relation is universal.

4 nodes (0%) are attached to their parents as `xcomp`.

4 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 2 pairs of parts of speech are connected with `xcomp`: <tt><a href="apu_ufpa-pos-VERB.html">VERB</a></tt>-<tt><a href="apu_ufpa-pos-VERB.html">VERB</a></tt> (3; 75% instances), <tt><a href="apu_ufpa-pos-VERB.html">VERB</a></tt>-<tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 xcomp	color:blue
1	Ximaky	ximaky	NOUN	N	Case=Nom|Gender=Masc|Number=Sing|Possessed=No	2	obj	_	GTtags=Msc,Sg,NPossd,Nom
2	ãanhika	anhika	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=1|Tense=Past,Pres|VerbForm=Fin	0	root	_	GTtags=ScPl1,NFut
3	apaka	apaka	ADV	Adv	_	2	advmod	_	GTtags=TV,Caus,NFut
4	ywaã	ywa	PRON	Pron	Case=Loc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	obl	_	GTtags=Pers,Sg3,Msc,Loc
5	anhikakyty	anhikakyty	VERB	V	Number[subj]=Plur|Person[subj]=1|Tense=Past,Pres	2	xcomp	_	_
6	ĩkapane	ĩkapanhi	ADP	Po	AdpType=Post	5	case	_	GTtags=Po|SpaceAfter=No
7	.	.	PUNCT	CLB	_	2	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Sytuwakuru	sytu	NOUN	XPOS=mulher	Case=Nom|Gender=Fem|Number=Plur	2	nsubj	_	gloss[pt]=mulher-PL-F
2	kamary	kama	VERB	XPOS=fazer	Gender[obj]=Masc|Mood=Ind|Number[obj]=Sing|Person[obj]=3|Tense=Past,Pres|VerbForm=Fin	0	root	_	gloss[pt]=fazer-3SG.M.O
3	awinhi	awinhi	NOUN	XPOS=3SG.M-casa.de	Case=Nom|Gender=Masc|Number=Sing	2	obj	_	gloss[pt]=3SG.M-casa.de
4	myramana	myramana	NOUN	XPOS=ATRIB.INTENS-FOC-corpo.de	_	2	xcomp	_	gloss[pt]=ATRIB.INTENS-FOC-corpo.de|SpaceAfter=No
5	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


