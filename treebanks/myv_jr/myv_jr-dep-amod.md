---
layout: base
title:  'Statistics of amod in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `amod`

This relation is universal.

493 nodes (3%) are attached to their parents as `amod`.

490 instances of `amod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23123732251521.

The following 16 pairs of parts of speech are connected with `amod`: <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (428; 87% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (18; 4% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (13; 3% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-DET.html">DET</a></tt> (8; 2% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (6; 1% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="myv_jr-pos-ADP.html">ADP</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-INTJ.html">INTJ</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 amod	color:blue
1	Весе	весе	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Tot	2	det	_	GTtags=Tot,Sg,Nom,Indef
2	тайгась	тайга	NOUN	N	Case=Nom|Definite=Def|Number=Sing	3	nsubj	_	GTtags=Sg,Nom,Def
3	уды	удомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	0	root	_	GTtags=IV,Ind,Prs,ScSg3
4	кеме	кеме	ADJ	A	_	7	amod	_	GTtags=|SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	плотна	плотна	ADJ	A	_	7	amod	_	_
7	удомасо	удома	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	3	obl	_	GTtags=SP,Ine,Indef|SpaceAfter=No
8	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 amod	color:blue
1	Лопа	Лопа	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|Gender=Fem|NameType=Giv|Number=Sing	3	nsubj	_	GTtags=Ant_Fem,Sg,Nom,Indef
2	тарск	тарск	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	3	obj	_	GTtags=Ideoph
3	тейсь	теемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,ScSg3|SubjRef=1:2.2,1
4	ды	ды	CCONJ	CC	_	5	cc	_	_
5	таймаскадсь	таймаскадомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	3	conj	_	GTtags=Ind,Prt1,ScSg3|SubjRef=1:2.2,1
6	апак	апак	AUX	Pcle	Polarity=Neg	7	aux:neg	_	GTtags=Neg
7	учонь	учомс	VERB	V	Derivation=VGen	9	amod	_	GTtags=Der/VGen
8	те	те	DET	Det	Case=Nom|Definite=Ind|Number=Sing	9	det	_	GTtags=Sg,Nom,Indef
9	полавтовомадонть	полавтовома	NOUN	N	Case=Abl|Definite=Def|Number=Sing|Valency=1	5	obl	_	GTtags=IV,Sg,Abl,Def|SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 amod	color:blue
1	Велень	веле	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	2	nmod:poss	_	GTtags=Sem/Plc,SP,Gen,Indef
2	росась	роса	NOUN	N	Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	GTtags=Sg,Nom,Def
3	эзь	эзь	AUX	Aux	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	4	aux:neg	_	_
4	костявт	костявомс	VERB	V	Connegative=Yes|Mood=Ind|Valency=1	0	root	_	GTtags=IV,Ind,ConNeg
5	валске	валске	NOUN	N	AdvType=Tim|Case=Nom|Definite=Ind|Number=Sing	7	amod	_	GTtags=Temp,Sg,Nom,Indef
6	мартонь	марто	ADP	Adp	Case=Gen|Definite=Ind|Number=Plur,Sing	5	fixed	_	GTtags=Der/MWN,N,SP,Gen,Indef
7	чипайсэнть	чипай	NOUN	N	Case=Ine|Definite=Def|Number=Sing	4	obl	_	GTtags=Sg,Ine,Def|SpaceAfter=No
8	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


