---
layout: base
title:  'Statistics of csubj in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="myv_jr-dep-csubj-cop.html">csubj:cop</a></tt>.

23 nodes (0%) are attached to their parents as `csubj`.

18 instances of `csubj` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.52173913043478.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (11; 48% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (6; 26% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (2; 9% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (1; 4% instances), <tt><a href="myv_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 csubj	color:blue
1	Маряви	марявомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres	0	root	_	GTtags=IV,Ind,Prs,ScSg3|Gloss=can-be-heard
2	лоткасть	лоткамс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past	1	csubj	_	GTtags=IV,Ind,Prt1,ScPl3|Gloss=stop
3	зняро	зняро	ADV	Adv	PronType=Rel	5	advmod	_	GTtags=Rel|Gloss=small-number-of
4	бутим	бутим	ADV	Adv	_	3	fixed	_	_
5	ломать	ломань	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	2	nsubj	_	GTtags=Pl,Nom,Indef,Err/Orth|Gloss=person
6	Миколонь	Микол	PROPN	N	Animacy=Hum|Case=Gen|Definite=Ind|NameType=Giv|Number=Plur,Sing	7	nmod	_	GTtags=Prop,Ant_Mal,SP,Gen,Indef|Gloss=Mikol
7	кудонть	кудо	NOUN	N	Case=Gen|Definite=Def|Number=Sing	2	obl	_	GTtags=Sem/Plc,Sg,Gen,Def|Gloss=house
8	икелев	икеле	ADP	Adp	AdvType=Loc|Case=Lat	7	case	_	GTtags=Relator,Spat,Lat|Gloss=in-front|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	Стака	стака	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef
2	ульнесь	ульнемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	1	cop	_	GTtags=IV,Ind,Prt1,ScSg3
3	велявтомс	велявтомс	VERB	V	VerbForm=Inf	1	csubj	_	GTtags=IV,Inf
4	вейке	вейке	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	5	nummod	_	GTtags=Card,Sg,Nom,Indef
5	бока	бока	NOUN	N	Case=Nom|Definite=Ind|NounType=Relat|Number=Sing	6	nmod	_	GTtags=Relator,Sg,Nom,Indef
6	лангсто	ланго	NOUN	N	Case=Ela|Definite=Ind|NounType=Relat|Number=Plur,Sing	3	obl:lmod	_	GTtags=Relator,SP,Ela,Indef
7	омбоцес	омбоце	ADJ	A	Case=Ill|Definite=Ind|Number=Plur,Sing|NumType=Ord	5	conj	_	GTtags=Ord,SP,Ill,Indef|SpaceAfter=No
8	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 csubj	color:blue
1	—	—	PUNCT	PUNCT	_	2	punct	_	CGdephead=#1-&gt;2|CGdeprel=@CLB|GTtags=PUNCT
2	Тесэ	тесэ	ADV	Adv	Case=Ine	0	root	_	CGdephead=#2-&gt;4|CGdeprel=@ADVL|GTtags=Ine|SpaceAfter=No
3	,	,	PUNCT	CLB	_	2	punct	_	CGdephead=#3-&gt;2|CGdeprel=@CLB|GTtags=CLB
4	милок	милок	NOUN	_	_	2	vocative	_	CGdephead=#4-&gt;0|CGdeprel=@X|GTtags=?|SpaceAfter=No
5	,	,	PUNCT	CLB	_	4	punct	_	CGdephead=#5-&gt;4|CGdeprel=@CLB|GTtags=CLB
6	а	а	AUX	Pcle	Polarity=Neg	7	aux:neg	_	CGdephead=#6-&gt;6|CGdeprel=@NEG&gt;|GTtags=Neg
7	мезть	мезе	PRON	Pron	Case=Nom|Definite=Ind|Number=Plur|PronType=Int	8	obj	_	CGdephead=#7-&gt;0|CGdeprel=@X|GTtags=Interr,Pl,Nom,Indef
8	чарькодемскак	чарькодемс	VERB	V	Clitic=Add|VerbForm=Inf	2	csubj	_	CGdephead=#8-&gt;0|CGdeprel=@FS-IMV|GTtags=IV,Inf,Clt/Add|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	CGdephead=#9-&gt;2|CGdeprel=@CLB|GTtags=CLB

~~~


