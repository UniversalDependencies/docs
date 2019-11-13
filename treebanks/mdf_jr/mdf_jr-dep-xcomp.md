---
layout: base
title:  'Statistics of xcomp in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `xcomp`

This relation is universal.

13 nodes (2%) are attached to their parents as `xcomp`.

7 instances of `xcomp` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.76923076923077.

The following 4 pairs of parts of speech are connected with `xcomp`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (5; 38% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (5; 38% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (2; 15% instances), <tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 xcomp	color:blue
1	Ладяйне	ладямс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Prt1|Valency=2	0	root	_	_
2	прокс	прокс	ADV	Adv	_	3	advmod	_	_
3	пеняти	пеня	NOUN	N	Case=Dat|Definite=Def|Number=Sing	1	obl	_	_
4	очконять	очконя	NOUN	N	Case=Gen|Definite=Def|Number=Sing	1	obj	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	7	punct	_	_
6	пильгса	пильге	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	7	obl	_	_
7	орхкадине	орхкадемс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Prt1|Valency=2	1	conj	_	_
8	и	и	CCONJ	CC	_	12	cc	_	_
9	аф	аф	AUX	Aux	Polarity=Neg	10	aux:neg	_	_
10	вяри	вяри	ADV	Adv	_	11	advmod	_	_
11	лиема	лиема	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	12	xcomp	_	_
12	тунь	тумс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Prt1|Valency=1	1	conj	_	SpaceAfter=No
13	,	,	PUNCT	CLB	_	15	punct	_	_
14	а	а	CCONJ	CC	_	15	cc	_	_
15	алу	алу	ADV	Adv	AdvType=Loc	12	conj	_	SpaceAfter=No
16	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 xcomp	color:blue
1	Сяльде	сяльде	ADV	Adv	_	5	advmod	_	_
2	мялезень	мяль	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	obj	_	_
3	петемс	петемс	VERB	V	Valency=2|VerbForm=Inf	5	xcomp	_	_
4	сон	сон	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
5	рамась	рамамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	0	root	_	_
6	самолёткя	самолёт	NOUN	N	Case=Nom|Definite=Ind|Derivation=Dimin|Number=Sing	5	obj	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 xcomp	color:blue
1	Очконять	очконя	NOUN	N	Case=Gen|Definite=Def|Number=Sing	4	obj	_	_
2	аноконди	аноконди	ADV	Adv	_	4	xcomp	_	_
3	ни	ни	ADV	Adv	AdvType=Tim	4	advmod:tmod	_	_
4	куцфтине	куцьфтемс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Prt1|Valency=2	0	root	_	_
5	карденя	карденя	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	4	obl	_	_
6	пряв	пряв	ADP	Adp	AdpType=Post	5	case	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


