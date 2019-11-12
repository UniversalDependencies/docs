---
layout: base
title:  'Statistics of orphan in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `orphan`

This relation is universal.

25 nodes (0%) are attached to their parents as `orphan`.

19 instances of `orphan` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.08.

The following 14 pairs of parts of speech are connected with `orphan`: <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (4; 16% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (4; 16% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (3; 12% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (2; 8% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="myv_jr-pos-ADP.html">ADP</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="myv_jr-pos-DET.html">DET</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (1; 4% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 4% instances).


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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 orphan	color:blue
1	—	—	PUNCT	PUNCT	_	6	punct	_	_
2	Микол	Микол	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|Gender=Masc|NameType=Giv|Number=Sing	6	orphan	_	GTtags=Ant_Mal,Prop,Sg,Nom,Indef|Gloss=Mikol|SpaceAfter=No
3	,	,	PUNCT	CLB	_	2	punct	_	_
4	тон	тон	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	6	orphan	_	GTtags=Pers,Sg2,Nom|Gloss=you-sg2
5	умок	умок	ADV	Adv	AdvType=Tim	6	orphan	_	GTtags=Temp|Gloss=long-time-ago
6	кудосто	кудо	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	0	root	_	GTtags=Sem/Plc,SP,Ela,Indef|Gloss=from-home|SpaceAfter=No
7	?	?	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 orphan	color:blue
1	Ансяк	ансяк	ADV	Adv	_	2	advmod	_	GTtags=Exclusive
2	совасть	совамс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Prt1|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScPl3
3	кудос	кудо	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	2	obl	_	GTtags=Sem/Plc,SP,Ill,Indef|SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	_
5	револьвер	револьвер	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	7	nmod	_	GTtags=Sg,Nom,Indef
6	марто	марто	ADP	Adp	_	5	case	_	_
7	сь	ось	PRON	Pron	Case=Nom|Definite=Def|Number=Sing	2	conj	_	GTtags=Sg,Nom,Def
8	вицтэ	видьстэ	ADV	Adv	Typo=Yes	7	orphan	_	_
9	Марянень	Маря	PROPN	N	Animacy=Hum|Case=Dat|Definite=Ind|Gender=Fem|NameType=Giv|Number=Plur,Sing	7	orphan	_	GTtags=Prop,Ant_Fem,SP,Dat,Indef|SpaceAfter=No
10	:	:	PUNCT	CLB	_	2	punct	_	_

~~~


