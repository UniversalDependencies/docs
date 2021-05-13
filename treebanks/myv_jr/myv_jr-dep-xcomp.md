---
layout: base
title:  'Statistics of xcomp in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="myv_jr-dep-xcomp-ds.html">xcomp:ds</a></tt>.

248 nodes (1%) are attached to their parents as `xcomp`.

209 instances of `xcomp` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.01209677419355.

The following 13 pairs of parts of speech are connected with `xcomp`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (197; 79% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (28; 11% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (7; 3% instances), <tt><a href="myv_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	―	―	PUNCT	PUNCT	_	3	punct	_	_
2	Сынст	сон	PRON	Pron	Case=Gen|Number=Plur|Person=3|PronType=Prs	4	obj	_	GTtags=Pers,Pl3,Gen
3	карми	кармамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	0	root	_	GTtags=IV,Ind,Prs,ScSg3
4	ускомаст	ускомс	VERB	V	Case=Loc|Number[psor]=Plur|Person[psor]=3|Valency=2|VerbForm=Inf	3	xcomp	_	GTtags=Err/Orth,TV,Inf,Loc,PxPl3
5	тия	тия	ADV	Adv	Case=Prl	4	advmod:lmp	_	GTtags=Prl|SpaceAfter=No
6	...	...	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 xcomp	color:blue
1	Се	се	DET	Det	Number=Sing|PronType=Dem	2	det	_	GTtags=Dem,Sg
2	туремастонть	туремс	VERB	V	Case=Ela|Definite=Def|Number=Sing|Valency=1|VerbForm=Vnoun	4	obl	_	GTtags=IV,NomAct,N,Sg,Ela,Def
3	Громов	Громов	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|Gender=Masc|NameType=Sur|Number=Sing	4	nsubj	_	GTtags=Prop,Sur_Mal,Sg,Nom,Indef
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


