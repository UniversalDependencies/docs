---
layout: base
title:  'Statistics of aux:q in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `aux:q`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-aux.html">aux</a></tt>.
There are also 4 other language-specific subtypes of `aux`: <tt><a href="myv_jr-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="myv_jr-dep-aux-imp.html">aux:imp</a></tt>, <tt><a href="myv_jr-dep-aux-neg.html">aux:neg</a></tt>, <tt><a href="myv_jr-dep-aux-opt.html">aux:opt</a></tt>.

9 nodes (0%) are attached to their parents as `aux:q`.

8 instances of `aux:q` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33333333333333.

The following 4 pairs of parts of speech are connected with `aux:q`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (5; 56% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (2; 22% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (1; 11% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux:q	color:blue
1	Эзизь	эзь	AUX	Aux	Mood=Ind|Number[obj]=Plur|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Polarity=Neg|Tense=Prt1|VerbType=Aux	2	aux:neg	_	_
2	машт	маштомс	VERB	V	Connegative=Yes|Valency=2	0	root	_	GTtags=TV,Hom2,Dial,Connegative=Yes
3	ли	ли	AUX	Pcle	_	2	aux:q	_	GTtags=Qst
4	бандитнэ	бандит	NOUN	N	Case=Nom|Definite=Def|Number=Plur	2	nsubj	_	GTtags=Pl,Nom,Def|SpaceAfter=No
5	?	?	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 aux:q	color:blue
1	Видестэ	видестэ	ADV	Adv	AdvType=Man	4	advmod	_	GTtags=Manner|Gloss=in-the-right-way
2	-	-	PUNCT	PUNCT	_	3	punct	_	_
3	арась	арась	AUX	Pcle	Polarity=Neg	1	aux:q	_	GTtags=Neg|Gloss=in-the-right-way
4	тошкси	тошксемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	0	root	_	GTtags=IV,Ind,Prs,ScSg3|Gloss=whisper
5	сон	сон	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	GTtags=Pers,Sg3,Nom|Gloss=it|SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	седеем	седей	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	5	appos	_	GTtags=Sg,Nom,PxSg1|Gloss=heart|SpaceAfter=No
8	?	?	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 aux:q	color:blue
1	Миколонь	Микол	PROPN	N	Animacy=Hum|Case=Gen|Definite=Ind|Gender=Masc|NameType=Giv|Number=Plur,Sing	2	nmod	_	GTtags=Prop,Ant_Mal,SP,Gen,Indef
2	седеезэ	седей	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	nsubj	_	GTtags=Sg,Nom,PxSg3
3	кармась	кармамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	6	parataxis	_	GTtags=IV,Ind,Prt1,ScSg3
4	ризнэме	ризнэмс	VERB	V	Case=Loc|Valency=1|VerbForm=Inf	3	xcomp	_	GTtags=IV,Inf,Loc|SpaceAfter=No
5	:	:	PUNCT	CLB	_	3	punct	_	_
6	шумбра	шумбра	ADJ	A	_	0	root	_	_
7	т	оль	AUX	Cop	Number[subj]=Sing|Person[subj]=2|Tense=Pres	6	cop	_	GTtags=Prs,ScSg2
8	ли	ли	AUX	Pcle	_	6	aux:q	_	GTtags=Qst
9	кудосонть	кудо	NOUN	N	Case=Ine|Definite=Def|Number=Sing	6	obl	_	GTtags=Sem/Plc,Sg,Ine,Def|SpaceAfter=No
10	?	?	PUNCT	CLB	_	6	punct	_	_

~~~


