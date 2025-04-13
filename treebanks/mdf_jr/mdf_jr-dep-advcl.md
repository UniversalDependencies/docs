---
layout: base
title:  'Statistics of advcl in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `advcl`

This relation is universal.
There are 3 language-specific subtypes of `advcl`: <tt><a href="mdf_jr-dep-advcl-cau.html">advcl:cau</a></tt>, <tt><a href="mdf_jr-dep-advcl-eval.html">advcl:eval</a></tt>, <tt><a href="mdf_jr-dep-advcl-tcl.html">advcl:tcl</a></tt>.

72 nodes (2%) are attached to their parents as `advcl`.

48 instances of `advcl` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.44444444444444.

The following 8 pairs of parts of speech are connected with `advcl`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (47; 65% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (15; 21% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 advcl	color:blue
1	Тяни	тяни	ADV	Adv	AdvType=Tim	2	advmod:tmod	_	_
2	ёран	ёрамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres	0	root	_	_
3	тиемда	тиемс	VERB	V	Case=Abl|VerbForm=Inf	2	xcomp	_	_
4	оцю	оцю	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	5	amod	_	_
5	самолёт	самолёт	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	3	obj	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	10	punct	_	_
7	аньцек	аньцек	ADV	Adv	_	10	advmod:foc	_	_
8	коданга	коданга	ADV	Adv	PronType=Ind	10	advmod:mmod	_	_
9	аф	аф	AUX	Aux	Polarity=Neg	10	aux	_	_
10	лисенди	лисендемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres	2	advcl	_	SpaceAfter=No
11	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 advcl	color:blue
1	Касондярян	касомс	VERB	V	Derivation=Cond|Mood=Ind|Number[subj]=Sing|Person[subj]=1	4	advcl	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	_
3	улян	улемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres	4	cop	_	_
4	лётчикокс	лётчик	NOUN	N	Case=Tra|Definite=Ind|Number=Plur,Sing	0	root	_	SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 advcl	color:blue
1	Улендяряль	улемс	AUX	V	Derivation=Cond|Mood=Sub|Number[subj]=Sing|Person[subj]=3	2	cop	_	GTtags=Cond,Conj,ScSg3
2	кудса	куд	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	4	advcl	_	GTtags=SP,Ine,Indef|SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	нолдалезе	нолдамс	VERB	V	Mood=Sub|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3	0	root	_	GTtags=Conj,ScSg3,OcSg3|SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


