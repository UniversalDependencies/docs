---
layout: base
title:  'Statistics of discourse in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `discourse`

This relation is universal.

4 nodes (0%) are attached to their parents as `discourse`.

4 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.25.

The following 3 pairs of parts of speech are connected with `discourse`: <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-INTJ.html">INTJ</a></tt> (2; 50% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-INTJ.html">INTJ</a></tt> (1; 25% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-PART.html">PART</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
1	Ну	ну	INTJ	Interj	_	6	discourse	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	6	punct	_	_
3	кли	кли	ADV	Adv	_	4	advmod	_	_
4	онцтон	он	NOUN	N	Case=Ela|Number=Plur,Sing|Number[psor]=Sing|Person[psor]=1	6	obl	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	4	punct	_	_
6	пара	пара	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	SpaceAfter=No
7	:	:	PUNCT	CLB	_	11	punct	_	_
8	гулянять	гуляня	NOUN	N	Case=Gen|Definite=Def|Number=Sing	9	nmod	_	_
9	пацяняц	паця	NOUN	N	Case=Nom|Derivation=Dimin|Number=Sing|Number[psor]=Sing|Person[psor]=3	11	obj	_	_
10	апак	апак	AUX	Aux	Polarity=Neg	11	aux:neg	_	_
11	синтть	синдемс	VERB	V	Connegative=Yes|Valency=2	6	csubj	_	SpaceAfter=No
12	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	Вай	вай	INTJ	Interj	_	3	discourse	_	_
2	конашкава	конашкава	ADV	Adv	_	3	advmod:deg	_	_
3	ужяль	ужяль	ADV	Adv	_	0	root	_	_
4	вазнясь	вазня	NOUN	N	Case=Nom|Definite=Def|Number=Sing	3	nsubj:cop	_	GTtags=Sg,Nom,Def|SpaceAfter=No
5	!	!	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 3 discourse	color:blue
1	И	и	CCONJ	CC	_	11	cc	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	3	punct	_	_
3	улема	улема	PART	Pcle	_	11	discourse	_	GTtags=Epist|SpaceAfter=No
4	,	,	PUNCT	CLB	_	3	punct	_	_
5	тянкса	тянкса	ADV	Adv	_	11	advmod	_	_
6	редакциятнень	редакция	NOUN	N	Case=Gen|Definite=Def|Number=Plur	8	nmod	_	GTtags=Pl,Gen,Def
7	рахсемань	рахсема	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	8	nmod	_	GTtags=SP,Gen,Indef
8	отделснонды	отдел	NOUN	N	Case=Dat|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=3	11	obl:agent	_	GTtags=SP,Dat,PxPl3
9	работама	работамс	VERB	V	Case=Loc|VerbForm=Inf	11	xcomp	_	GTtags=Inf,Loc
10	сашендови	сашендовомс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	11	aux	_	GTtags=IV,Ind,Prs,ScSg3
11	сявондемс	сявондемс	VERB	V	Valency=2|VerbForm=Inf	0	root	_	GTtags=TV,Inf
12	ётай-потай	ётай-потай	VERB	V	Tense=Pres|VerbForm=Part	13	advcl	_	GTtags=PrsPrc
13	ломатть	ломань	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	11	obj	_	GTtags=Pl,Nom,Indef|SpaceAfter=No
14	.	.	PUNCT	CLB	_	11	punct	_	_

~~~


