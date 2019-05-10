---
layout: base
title:  'Statistics of aux in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `aux`

This relation is universal.
There are 2 language-specific subtypes of `aux`: <tt><a href="myv_jr-dep-aux-neg.html">aux:neg</a></tt>, <tt><a href="myv_jr-dep-aux-q.html">aux:q</a></tt>.

64 nodes (0%) are attached to their parents as `aux`.

55 instances of `aux` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.515625.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (60; 94% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (2; 3% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="myv_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (1; 2% instances).


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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 aux	color:blue
1	Кадык	кадык	AUX	Aux	Mood=Imp	4	aux	_	GTtags=TV,Imprt,ScSg2,OcSg3
2	Дуняшин	Дуняшин	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|Gender=Masc|NameType=Sur|Number=Sing	4	nsubj	_	GTtags=Sur_Mal,Prop,Sg,Nom,Indef
3	аволь	аволь	AUX	Pcle	PartType=Emp|Polarity=Neg	4	aux:neg	_	GTtags=Neg,Intensive
4	классик	классик	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux	color:blue
1	Виде	виде	ADJ	A	_	0	root	_	_
2	ли	ли	AUX	Pcle	_	1	aux	_	_
3	кияк	кияк	PRON	Pron	Case=Nom|Number=Sing|PronType=Ind	7	nsubj	_	GTtags=Indef,Sg,Nom
4	косояк	косояк	ADV	Adv	Case=Ine|Definite=Ind	7	obl	_	GTtags=Indef,Ine
5	мезтькак	мезеяк	PRON	Pron	Case=Nom|Definite=Ind|Number=Plur|PronType=Ind	7	obj	_	GTtags=Indef,Pl,Nom,Indef
6	а	а	AUX	Pcle	Polarity=Neg	7	aux:neg	_	GTtags=Neg
7	тейни	тейнемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=2	1	conj	_	GTtags=TV,Ind,Prs,ScSg3|SpaceAfter=No
8	?..	?..	PUNCT	CLB	_	1	punct	_	_

~~~


