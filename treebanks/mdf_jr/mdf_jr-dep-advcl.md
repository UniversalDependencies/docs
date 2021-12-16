---
layout: base
title:  'Statistics of advcl in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `advcl`

This relation is universal.
There are 2 language-specific subtypes of `advcl`: <tt><a href="mdf_jr-dep-advcl-cau.html">advcl:cau</a></tt>, <tt><a href="mdf_jr-dep-advcl-tcl.html">advcl:tcl</a></tt>.

58 nodes (2%) are attached to their parents as `advcl`.

39 instances of `advcl` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.5.

The following 7 pairs of parts of speech are connected with `advcl`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (39; 67% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (11; 19% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 advcl	color:blue
1	Тяни	тяни	ADV	Adv	AdvType=Tim	2	advmod:tmod	_	_
2	ёран	ёрамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=2	0	root	_	_
3	тиемда	тиемс	VERB	V	Case=Abl|Valency=2|VerbForm=Inf	2	xcomp	_	_
4	оцю	оцю	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	5	amod	_	_
5	самолёт	самолёт	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	3	obj	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	10	punct	_	_
7	аньцек	аньцек	ADV	Adv	_	10	advmod:foc	_	_
8	коданга	коданга	ADV	Adv	PronType=Ind	10	advmod:mmod	_	_
9	аф	аф	AUX	Aux	Polarity=Neg	10	aux:neg	_	_
10	лисенди	лисендемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	2	advcl	_	SpaceAfter=No
11	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 advcl	color:blue
1	Касондярян	касомс	VERB	V	Mood=Cnd|Number[subj]=Sing|Person[subj]=1|Valency=1	4	advcl	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	_
3	улян	улемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	4	cop	_	_
4	лётчикокс	лётчик	NOUN	N	Case=Tra|Definite=Ind|Number=Plur,Sing	0	root	_	SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 advcl	color:blue
1	Вармась	варма	NOUN	N	Case=Nom|Definite=Def|Number=Sing	2	nsubj	_	GTtags=Sg,Nom,Def
2	лоткась	лоткамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg3
3	варьхмодема	варьхмодема	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	2	obl:lto	_	GTtags=Sg,Nom,Indef
4	лангс	ланга	ADP	Adp	Case=Ill|NounType=Relat	3	case	_	GTtags=Relator,SP,Ill,Indef|SpaceAfter=No
5	,	,	PUNCT	CLB	_	7	punct	_	_
6	Волгась	Волга	NOUN	N	Case=Nom|Definite=Def|Number=Sing	7	nsubj	_	GTtags=Prop,Sem/Plc,Sg,Nom,Def
7	сетьмось	сетьмомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	2	conj	_	GTtags=IV,Ind,Prt1,ScSg3
8	валдашкодомда	валдашкодомс	VERB	V	Case=Abl|Valency=1|VerbForm=Inf	9	advcl	_	GTtags=IV,Inf,Abl
9	меле	меле	ADV	Adv	_	7	advmod:tmod	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


