---
layout: base
title:  'Statistics of csubj in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="mdf_jr-dep-csubj-cop.html">csubj:cop</a></tt>.

6 nodes (0%) are attached to their parents as `csubj`.

4 instances of `csubj` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.5.

The following 3 pairs of parts of speech are connected with `csubj`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (3; 50% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (2; 33% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 csubj	color:blue
1	Заводса	завод	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	4	obl:lmod	_	GTtags=SP,Ine,Indef
2	или	или	CCONJ	CC	_	3	cc	_	_
3	фабрикаса	фабрика	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	1	conj	_	GTtags=SP,Ine,Indef
4	работамась	работамс	VERB	V	Case=Nom|Definite=Def|Number=Sing|VerbForm=Vnoun	7	csubj	_	GTtags=NomAct,Sg,Nom,Def
5	кунаркиге	кунаркиге	ADV	Adv	AdvType=Tim	7	advmod:tmod	_	GTtags=Sem/Time
6	ни	ни	ADV	Adv	AdvType=Tim	5	advmod:tmod	_	GTtags=Sem/Time
7	повсь	повомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	GTtags=Ind,Prt1,ScSg3
8	Тишкань	Тишка	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	9	nmod:poss	_	GTtags=Prop,SP,Gen,Indef
9	пряс	пря	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	7	obl:lmod	_	GTtags=SP,Ill,Indef|SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 csubj	color:blue
1	Ну	ну	INTJ	Interj	_	6	discourse	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	6	punct	_	_
3	кли	кли	ADV	Adv	_	4	advmod	_	_
4	онцтон	он	NOUN	N	Case=Ela|Number=Plur,Sing|Number[psor]=Sing|Person[psor]=1	6	obl	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	4	punct	_	_
6	пара	пара	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	SpaceAfter=No
7	:	:	PUNCT	CLB	_	11	punct	_	_
8	гулянять	гуляня	NOUN	N	Case=Gen|Definite=Def|Number=Sing	9	nmod	_	_
9	пацяняц	паця	NOUN	N	Case=Nom|Degree=Dim|Number=Sing|Number[psor]=Sing|Person[psor]=3	11	obj	_	_
10	апак	аф	AUX	Aux	PartForm=NegConvPrc|Polarity=Neg|VerbForm=Conv,Part	11	aux:neg	_	_
11	синтть	синдемс	VERB	V	Connegative=Yes	6	csubj	_	SpaceAfter=No
12	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 csubj	color:blue
1	Весть	весть	ADV	Adv	_	5	advmod:freq	_	_
2	самолётса	самолёт	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	3	obl:inst	_	_
3	лиендемась	лиендема	NOUN	N	Case=Nom|Definite=Def|Number=Sing	5	csubj	_	_
4	прясон	пря	NOUN	N	Case=Ine|Number=Plur,Sing|Number[psor]=Sing|Person[psor]=1	5	obl:lmod	_	_
5	шарсь	шаромс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3	0	root	_	_
6	мадомста	мадомс	VERB	V	Case=Ela|VerbForm=Conv	5	advcl:tcl	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


