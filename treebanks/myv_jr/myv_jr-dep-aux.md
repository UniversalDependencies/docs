---
layout: base
title:  'Statistics of aux in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `aux`

This relation is universal.
There are 2 language-specific subtypes of `aux`: <tt><a href="myv_jr-dep-aux-neg.html">aux:neg</a></tt>, <tt><a href="myv_jr-dep-aux-q.html">aux:q</a></tt>.

57 nodes (0%) are attached to their parents as `aux`.

50 instances of `aux` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.47368421052632.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (33; 58% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (14; 25% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (8; 14% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="myv_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux	color:blue
1	―	―	PUNCT	PUNCT	_	5	punct	_	_
2	Да	да	INTJ	Interj	_	5	discourse	_	GTtags=|SpaceAfter=No
3	,	,	PUNCT	CLB	_	2	punct	_	_
4	эряви	эрявомс	AUX	Aux	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	5	aux	_	_
5	капшамс	капшамс	VERB	V	Valency=1|VerbForm=Inf	0	root	_	GTtags=IV,Inf|SpaceAfter=No
6	!	!	PUNCT	CLB	_	5	punct	_	_
7	―	―	PUNCT	PUNCT	_	10	punct	_	_
8	кежей	кежей	ADJ	A	_	9	amod	_	_
9	ладсо	ладсо	ADP	Adp	_	10	obl	_	_
10	пшкадсь	пшкадемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	5	conj	_	GTtags=IV,Ind,Prt1,ScSg3
11	Ясребов	Ястребов	PROPN	PROPN	Case=Nom|Definite=Ind|Number=Sing	10	nsubj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
12	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux	color:blue
1	Кадык	кадомс	VERB	V	Mood=Imp|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=2|Valency=2	2	aux	_	GTtags=TV,Imprt,ScSg2,OcSg3
2	кольневтить	кольневтемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres|Valency=1	0	root	_	GTtags=IV,Ind,Prs,ScPl3
3	те	те	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Dem	4	det	_	GTtags=Dem,Sg,Nom,Indef
4	панжовксонть	панжовкс	NOUN	N	Case=Gen|Definite=Def|Number=Sing	2	obj	_	GTtags=Sg,Gen,Def|SpaceAfter=No
5	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux	color:blue
1	Но	но	CCONJ	CC	_	2	cc	_	_
2	кулось	куломс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg3
3	ли	ли	PART	Pcle	_	2	aux	_	GTtags=Qst|SpaceAfter=No
4	?..	?..	PUNCT	CLB	_	2	punct	_	_

~~~


