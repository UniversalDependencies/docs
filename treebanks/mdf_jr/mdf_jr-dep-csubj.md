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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 csubj	color:blue
1	Синь	сон	PRON	Pron	Case=Gen|Number=Plur|Person=3|PronType=Prs	2	nmod	_	GTtags=Pers,Pl3,Gen
2	мялезостка	мяль	NOUN	N	Case=Ill|Clitic=AddGA|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=3	4	obl:lto	_	GTtags=SP,Ill,PxPl3,Clt/Ka
3	ашезь	аш	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	4	aux:neg	_	GTtags=Aux,Neg,Ind,Prt1,ScSg3
4	кунда	кундамс	VERB	V	Connegative=Yes|Valency=2	0	root	_	GTtags=TV,ConNeg|SpaceAfter=No
5	,	,	PUNCT	CLB	_	8	punct	_	_
6	кие	кие	PRON	Pron	Case=Nom|Number=Sing|PronType=Int	8	nsubj	_	GTtags=Interr,Sg,Nom
7	тянь	тя	PRON	Pron	Case=Gen|Number=Plur,Sing|PronType=Dem	8	obj	_	GTtags=Dem|SP,Gen
8	сёрмадозе	сёрмадомс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past|Valency=2	4	csubj	_	GTtags=TV,Ind,Prt1,ScSg3|OcSg3|SpaceAfter=No
9	.	.	PUNCT	CLB	_	4	punct	_	_

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
9	пацяняц	паця	NOUN	N	Case=Nom|Derivation=Dimin|Number=Sing|Number[psor]=Sing|Person[psor]=3	11	obj	_	_
10	апак	аф	AUX	Aux	Polarity=Neg|VerbForm=Conv,Part	11	aux:neg	_	_
11	синтть	синдемс	VERB	V	Connegative=Yes|Valency=2	6	csubj	_	SpaceAfter=No
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
5	шарсь	шаромс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Valency=1	0	root	_	_
6	мадомста	мадомс	VERB	V	Case=Ela|VerbForm=Conv	5	advcl:tcl	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


