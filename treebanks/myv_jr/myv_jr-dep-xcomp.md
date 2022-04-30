---
layout: base
title:  'Statistics of xcomp in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="myv_jr-dep-xcomp-ds.html">xcomp:ds</a></tt>.

164 nodes (1%) are attached to their parents as `xcomp`.

135 instances of `xcomp` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.51219512195122.

The following 12 pairs of parts of speech are connected with `xcomp`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (116; 71% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (27; 16% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (8; 5% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 xcomp	color:blue
1	―	―	PUNCT	PUNCT	_	2	punct	_	_
2	Пасиба	пасиба	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef|Gloss=thanks|SpaceAfter=No
3	,	,	PUNCT	CLB	_	4	punct	_	_
4	пасиба	пасиба	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	2	conj	_	GTtags=Sg,Nom,Indef|Gloss=thanks
5	ялгат	ялга	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	4	vocative	_	GTtags=Pl,Nom,Indef|Gloss=comrade
6	тенк	тон	PRON	Pron	Case=Dat|Number=Plur|Person=2|PronType=Prs|Variant=Short	4	nmod	_	GTtags=Pers,Pl2,Dat,Short|Gloss=to-you-pl2|SpaceAfter=No
7	,	,	PUNCT	CLB	_	4	punct	_	_
8	тынь	тон	PRON	Pron	Case=Nom|Number=Plur|Person=2|PronType=Prs	10	nsubj	_	GTtags=Pers,Pl2,Nom|Gloss=you-pl2
9	эзимизь	а	AUX	Aux	Mood=Ind|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=1|Person[subj]=2|Polarity=Neg|Tense=Past|VerbType=Aux	10	aux:neg	_	GTtags=|Gloss=did-not
10	кадт	кадомс	VERB	V	Connegative=Yes|Mood=Ind|Valency=2	2	parataxis	_	GTtags=TV,Ind,ConNeg|Gloss=abandon
11	ёмамо	ёмамс	VERB	V	Case=Loc|Valency=1|VerbForm=Inf	10	xcomp	_	GTtags=IV,Inf,Loc|Gloss=parish|SpaceAfter=No
12	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 xcomp	color:blue
1	Се	се	DET	Det	Number=Sing|PronType=Dem	2	det	_	GTtags=Dem,Sg
2	туремастонть	туремс	VERB	V	Case=Ela|Definite=Def|Number=Sing|Valency=1|VerbForm=Vnoun	4	obl	_	GTtags=IV,NomAct,N,Sg,Ela,Def
3	Громов	Громов	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	4	nsubj	_	GTtags=Prop,Sur_Mal,Sg,Nom,Indef
4	кадовсь	кадовомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg3
5	апокш	апокш	ADJ	A	_	6	amod	_	_
6	губор	губор	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	7	nmod	_	GTtags=Sg,Nom,Indef
7	пряс	пря	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	4	obl:lto	_	GTtags=Sem/Plc,SP,Ill,Indef
8	оймевтеме	ойме	NOUN	N	Case=Abe|Definite=Ind|Number=Plur,Sing	4	xcomp	_	GTtags=SP,Abe,Indef|SpaceAfter=No
9	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	Окойники	окойники	ADV	Adv	AdvType=Tim	4	advmod:tmod	_	GTtags=Sem/Time|SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	_
3	сёвонесь	сёвонь	NOUN	N	Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	GTtags=Sem/Inanim_NCnt,Sg,Nom,Def
4	марявсь	марявомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=Der/ОвОмс,IV,Ind,Prt1,ScSg3
5	тензэ	сон	PRON	Pron	Case=Dat|Number=Sing|Person=3|PronType=Prs|Variant=Short	4	obl	_	GTtags=Pers,Sg3,Dat,Short
6	анок	анок	ADJ	A	_	4	xcomp	_	GTtags=|SpaceAfter=No
7	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


