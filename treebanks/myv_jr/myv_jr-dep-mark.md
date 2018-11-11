---
layout: base
title:  'Statistics of mark in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `mark`

This relation is universal.

111 nodes (1%) are attached to their parents as `mark`.

109 instances of `mark` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.65765765765766.

The following 18 pairs of parts of speech are connected with `mark`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (47; 42% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-SCONJ.html">SCONJ</a></tt> (36; 32% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (6; 5% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-SCONJ.html">SCONJ</a></tt> (4; 4% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-SCONJ.html">SCONJ</a></tt> (2; 2% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-SCONJ.html">SCONJ</a></tt> (2; 2% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-CCONJ.html">CCONJ</a></tt> (2; 2% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-NUM.html">NUM</a></tt>-<tt><a href="myv_jr-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 mark	color:blue
1	Прок	прок	ADV	Adv	_	4	mark	_	_
2	ине	ине	ADJ	A	_	3	amod	_	_
3	пешть	пеште	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	4	obj	_	GTtags=Err/Orth,Pl,Nom,Indef
4	чулгонесь	чулгонемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg3|SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 mark	color:blue
1	Зярдо	зярдо	ADV	Adv	AdvType=Tim|PronType=Int	4	advmod	_	GTtags=Interr,Sem/Time
2	уш	уш	ADV	Adv	AdvType=Tim	1	advmod	_	GTtags=Sem/Time
3	ансяк	ансяк	ADV	Adv	_	4	advmod	_	_
4	сы	самс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,ScSg3
5	те	те	DET	Det	Case=Nom|Definite=Ind|Number=Sing	6	det	_	GTtags=Sg,Nom,Indef
6	шкась	шка	NOUN	N	Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	GTtags=Sg,Nom,Def|SpaceAfter=No
7	,	,	PUNCT	CLB	_	9	punct	_	_
8	кода	кода	SCONJ	CS	AdvType=Tim	9	mark	_	GTtags=Sem/Temp
9	туить	туемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres|Valency=1	6	acl:relcl	_	GTtags=IV,Ind,Prs,ScPl3
10	Цёраксонь	цёракс	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	11	nmod	_	GTtags=Sem/Inanim,Sem/NCnt,SP,Gen,Indef
11	кирдав	кирда	NOUN	N	Case=Lat|Definite=Ind|Number=Plur,Sing	9	obl	_	GTtags=Sem/Inanim_Cnt,SP,Lat,Indef|SpaceAfter=No
12	...	...	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 mark	color:blue
1	—	—	PUNCT	PUNCT	_	3	punct	_	_
2	Митя	Митя	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|Gender=Masc|NameType=Giv|Number=Sing	3	nsubj	_	GTtags=Ant_Mal,Sg,Nom,Indef|Gloss=Mitya
3	кандоволь	кандомс	VERB	V	Mood=Cnj|Number[subj]=Sing|Person[subj]=3|Valency=2	0	root	_	GTtags=TV,Conj,ScSg3|1q-1:5.2,2|Gloss=carry
4	бу	бу	PART	Pcle	_	3	mark	_	GTtags=|Gloss=could|SpaceAfter=No
5	...	...	PUNCT	CLB	_	3	punct	_	_

~~~


