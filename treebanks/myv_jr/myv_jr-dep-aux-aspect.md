---
layout: base
title:  'Statistics of aux:aspect in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `aux:aspect`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-aux.html">aux</a></tt>.
There are also 6 other language-specific subtypes of `aux`: <tt><a href="myv_jr-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="myv_jr-dep-aux-imp.html">aux:imp</a></tt>, <tt><a href="myv_jr-dep-aux-nec.html">aux:nec</a></tt>, <tt><a href="myv_jr-dep-aux-neg.html">aux:neg</a></tt>, <tt><a href="myv_jr-dep-aux-opt.html">aux:opt</a></tt>, <tt><a href="myv_jr-dep-aux-q.html">aux:q</a></tt>.

86 nodes (0%) are attached to their parents as `aux:aspect`.

75 instances of `aux:aspect` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33720930232558.

The following 3 pairs of parts of speech are connected with `aux:aspect`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (83; 97% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (2; 2% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:aspect	color:blue
1	―	―	PUNCT	PUNCT	_	4	punct	_	_
2	Сынст	сон	PRON	Pron	Case=Gen|Number=Plur|Person=3|PronType=Prs	4	obj	_	GTtags=Pers,Pl3,Gen
3	карми	кармамс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	4	aux:aspect	_	GTtags=IV,Ind,Prs,ScSg3
4	ускомаст	ускомс	VERB	V	Case=Loc|Number[psor]=Plur|Person[psor]=3|Valency=2|VerbForm=Inf	0	root	_	GTtags=Err/Orth,TV,Inf,Loc,PxPl3
5	тия	тия	ADV	Adv	Case=Prl	4	advmod:lmp	_	GTtags=Prl|SpaceAfter=No
6	...	...	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 aux:aspect	color:blue
1	Те	те	DET	Det	Number=Sing|PronType=Dem	2	det	_	GTtags=Dem,Sg|Gloss=this
2	киниганть	кинига	NOUN	N	Case=Gen|Definite=Def|Number=Sing	3	nmod	_	GTtags=Sg,Gen,Def|Gloss=book
3	ловныцянзо	ловныця	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	7	nsubj	_	GTtags=Pl,Nom,PxSg3|Gloss=reader
4	улеме	улемс	AUX	V	Case=Loc|Valency=1|VerbForm=Inf	7	cop	_	GTtags=IV,Inf,Loc|Gloss=be
5	кармить	кармамс	AUX	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres|Valency=1	7	aux:aspect	_	GTtags=IV,Ind,Prs,ScPl3|Gloss=begin
6	аволь	аволь	AUX	Pcle	PartType=Emp|Polarity=Neg	7	aux:neg	_	GTtags=Neg,Intensive|Gloss=other-than
7	аламо	аламо	ADV	Det	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Qnt,N,Sg,Nom,Indef|Gloss=a-little|SpaceAfter=No
8	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 aux:aspect	color:blue
1	Сторужось	сторож	NOUN	N	Case=Nom|Definite=Def|Number=Sing	2	nsubj	_	_
2	лиссь	лисемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg3
3	алтарьстэнть	алтарь	NOUN	N	Case=Ela|Definite=Def|Number=Sing	2	obl	_	GTtags=Sg,Ela,Def|SpaceAfter=No
4	,	,	PUNCT	CLB	_	8	punct	_	_
5	попось	поп	NOUN	N	Case=Nom|Definite=Def|Number=Sing	8	nsubj	_	GTtags=Sg,Nom,Def
6	кармась	кармамс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	8	aux:aspect	_	GTtags=IV,Ind,Prt1,ScSg3
7	обеднянь	обедня	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	8	obj	_	GTtags=SP,Gen,Indef
8	служамо	служамо	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	2	conj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


