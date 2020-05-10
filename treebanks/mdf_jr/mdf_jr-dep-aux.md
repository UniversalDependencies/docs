---
layout: base
title:  'Statistics of aux in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `aux`

This relation is universal.
There are 2 language-specific subtypes of `aux`: <tt><a href="mdf_jr-dep-aux-neg.html">aux:neg</a></tt>, <tt><a href="mdf_jr-dep-aux-opt.html">aux:opt</a></tt>.

9 nodes (1%) are attached to their parents as `aux`.

7 instances of `aux` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.44444444444444.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (6; 67% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 11% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 11% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	Ашень	аш	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Polarity=Neg|Tense=Past	2	aux:neg	_	_
2	кеподев	кеподевомс	VERB	V	Mood=Imp|Number[subj]=Sing|Person[subj]=2|Valency=1	0	root	_	_
3	теест	сон	PRON	Pron	Case=Dat|Number=Plur|Person=3|PronType=Prs|Variant=Short	2	obl:agent	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	эрявсь	эрявомс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	6	aux	_	_
6	лездомс	лездомс	VERB	V	Valency=1|VerbForm=Inf	2	conj	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Мехов	Мехов	PROPN	N	Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	3	nsubj:cop	_	GTtags=Prop,Sem/Mal-Sur,Sg,Nom,Indef
2	ульсь	улемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	3	aux	_	GTtags=IV,Ind,Prt1,ScSg3
3	оцю	оцю	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef
4	сереc	сереc	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	3	nmod	_	GTtags=SP,Ill,Indef|SpaceAfter=No
5	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux	color:blue
1	Школьнай	школьнай	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	3	amod	_	GTtags=Sg,Nom,Indef
2	фкя	фкя	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	3	nummod	_	GTtags=Card,Sg,Nom,Indef
3	комнатаса	комната	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	0	root	_	GTtags=SP,Ine,Indef
4	ульсь	улемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	3	aux	_	GTtags=IV,Ind,Prt1,ScSg3
5	эчке	эчке	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	6	amod	_	GTtags=Sg,Nom,Indef
6	доскаста	доска	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	7	obl	_	GTtags=SP,Ela,Indef
7	шавф	шавомс	VERB	V	Derivation=F|Valency=2|VerbForm=Part	8	advcl	_	GTtags=TV,PrfPrc
8	верстак	верстак	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	3	nsubj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
9	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


