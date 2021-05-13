---
layout: base
title:  'Statistics of aux in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `aux`

This relation is universal.
There are 3 language-specific subtypes of `aux`: <tt><a href="mdf_jr-dep-aux-nec.html">aux:nec</a></tt>, <tt><a href="mdf_jr-dep-aux-neg.html">aux:neg</a></tt>, <tt><a href="mdf_jr-dep-aux-opt.html">aux:opt</a></tt>.

4 nodes (0%) are attached to their parents as `aux`.

2 instances of `aux` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 25% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 25% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 25% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Мехов	Мехов	PROPN	N	Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	3	nsubj:cop	_	GTtags=Prop,Sem/Mal-Sur,Sg,Nom,Indef
2	ульсь	улемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	3	aux	_	GTtags=IV,Ind,Prt1,ScSg3
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
4	ульсь	улемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	3	aux	_	GTtags=IV,Ind,Prt1,ScSg3
5	эчке	эчке	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	6	amod	_	GTtags=Sg,Nom,Indef
6	доскаста	доска	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	7	obl	_	GTtags=SP,Ela,Indef
7	шавф	шавомс	VERB	V	Derivation=F|Valency=2|VerbForm=Part	8	advcl	_	GTtags=TV,PrfPrc
8	верстак	верстак	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	3	nsubj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
9	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 aux	color:blue
1	Ошу	ош	NOUN	N	Case=Lat|Definite=Ind|Number=Plur,Sing	3	obl:lto	_	GTtags=SP,Lat,Indef
2	сон	сон	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	GTtags=Pers,Sg3,Nom
3	тусь	тумс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg3
4	кунара	кунара	ADV	Adv	AdvType=Tim	3	advmod:tmod	_	GTtags=Temp|SpaceAfter=No
5	,	,	PUNCT	CLB	_	7	punct	_	_
6	мъзярда	мзярда	SCONJ	CS	AdvType=Tim|Style=Ped	7	mark	_	GTtags=Temp|ModernForm=мзярда
7	тейнза	сон	PRON	Pron	Case=Dat|Number=Sing|Person=3|PronType=Prs|Variant=Short	4	appos	_	GTtags=Pers,Sg3,Dat,Short
8	ульсь	улемс	AUX	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	7	aux	_	GTtags=IV,Ind,Prt1,ScSg3
9	комсь	комсь	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	10	nmod	_	GTtags=Card,Sg,Nom,Indef
10	киза	киза	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	7	nsubj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
11	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


