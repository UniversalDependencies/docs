---
layout: base
title:  'Statistics of orphan in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `orphan`

This relation is universal.

29 nodes (0%) are attached to their parents as `orphan`.

19 instances of `orphan` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.17241379310345.

The following 13 pairs of parts of speech are connected with `orphan`: <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (6; 21% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (4; 14% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (4; 14% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (3; 10% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (3; 10% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (2; 7% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="myv_jr-pos-DET.html">DET</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 orphan	color:blue
1	—	—	PUNCT	PUNCT	_	6	punct	_	_
2	Микол	Микол	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	6	orphan	_	GTtags=Ant_Mal,Prop,Sg,Nom,Indef|Gloss=Mikol|SpaceAfter=No
3	,	,	PUNCT	CLB	_	2	punct	_	_
4	тон	тон	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	6	orphan	_	GTtags=Pers,Sg2,Nom|Gloss=you-sg2
5	умок	умок	ADV	Adv	AdvType=Tim	6	orphan	_	GTtags=Temp|Gloss=long-time-ago
6	кудосто	кудо	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	0	root	_	GTtags=Sem/Plc,SP,Ela,Indef|Gloss=from-home|SpaceAfter=No
7	?	?	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 orphan	color:blue
1	Кода	кода	ADV	Adv	AdvType=Man|PronType=Int	0	root	_	GTtags=Interr,Manner
2	пангт	панго	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	1	orphan	_	GTtags=Pl,Nom,Indef
3	эли	эли	CCONJ	CC	_	4	cc	_	_
4	нормальть	нормаль	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	2	conj	_	GTtags=Pl,Nom,Indef|SpaceAfter=No
5	?	?	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 orphan	color:blue
1	Тундось	тундо	NOUN	N	Case=Nom|Definite=Def|Number=Sing	5	nsubj	_	GTtags=Sg,Nom,Def
2	ломантненень	ломань	NOUN	N	Animacy=Hum|Case=Dat|Definite=Def|Number=Plur	5	obl	_	GTtags=Sem/Hum,Pl,Dat,Def
3	сюпав	сюпав	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	4	amod	_	GTtags=Sg,Nom,Indef
4	казнеть	казне	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	5	obj	_	GTtags=Pl,Nom,Indef
5	явшесь	явшемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,ScSg3|SpaceAfter=No
6	:	:	PUNCT	CLB	_	10	punct	_	_
7	сыретненень	сыре	NOUN	N	Case=Dat|Definite=Def|Number=Plur	10	orphan	_	GTtags=Pl,Dat,Def
8	—	—	PUNCT	PUNCT	_	10	punct	_	_
9	кувака	кувака	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	10	amod	_	GTtags=Sg,Nom,Indef
10	пингть	пинге	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	5	conj	_	GTtags=Pl,Nom,Indef|SpaceAfter=No
11	,	,	PUNCT	CLB	_	14	punct	_	_
12	одтнэнень	од	NOUN	N	Case=Dat|Definite=Def|Number=Plur	14	orphan	_	GTtags=Pl,Dat,Def
13	—	—	PUNCT	PUNCT	_	14	punct	_	_
14	вечкема	вечкема	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	5	conj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
15	...	...	PUNCT	CLB	_	5	punct	_	_

~~~


