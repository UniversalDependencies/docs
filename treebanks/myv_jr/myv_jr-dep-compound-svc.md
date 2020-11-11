---
layout: base
title:  'Statistics of compound:svc in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `compound:svc`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-compound.html">compound</a></tt>.
There are also 3 other language-specific subtypes of `compound`: <tt><a href="myv_jr-dep-compound-coll.html">compound:coll</a></tt>, <tt><a href="myv_jr-dep-compound-prt.html">compound:prt</a></tt>, <tt><a href="myv_jr-dep-compound-redup.html">compound:redup</a></tt>.

8 nodes (0%) are attached to their parents as `compound:svc`.

7 instances of `compound:svc` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.625.

The following 2 pairs of parts of speech are connected with `compound:svc`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (7; 88% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 compound:svc	color:blue
1	Ваньськавт	Ваньськавтомс	VERB	V	Mood=Imp|Number[subj]=Sing|Person[subj]=2|Style=Arch|Valency=1	0	root	_	GTtags=IV,Imprt,ScSg2|ModernForm=Ванськавтт
2	эйсэнзэ	эйсэ	ADP	Adp	Case=Ine|Number[psor]=Sing|Person[psor]=3	1	obj	_	GTtags=Ine,PxSg3|SpaceAfter=No
3	,	,	PUNCT	CLB	_	5	punct	_	_
4	мон	мон	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	GTtags=Pers,Sg1,Nom
5	молян	молемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	1	conj	_	GTtags=IV,Ind,Prs,ScSg1
6	ведь	ведь	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	7	obj	_	GTtags=Sg,Nom,Indef
7	кандан	кандомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=2	5	compound:svc	_	GTtags=TV,Ind,Prs,ScSg1|SpaceAfter=No
8	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 compound:svc	color:blue
1	Сон	сон	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	шачсь	чачомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Dial,Ind,Prt1,ScSg3
3	аволь	аволь	AUX	Pcle	NegationType=Contrastive|Polarity=Neg	8	aux:neg	_	GTtags=Neg,Emphatic
4	поптнэнь	поп	NOUN	N	Case=Gen|Definite=Def|Number=Plur	8	nmod	_	GTtags=Pl,Gen,Def
5	пейдема	пейдема	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	8	nmod	_	GTtags=Sg,Nom,Indef
6	―	―	PUNCT	PUNCT	_	7	punct	_	_
7	нарьгамо	нарьгамо	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	5	compound:svc	_	GTtags=Sg,Nom,Indef
8	таркас	таркас	ADP	Adp	_	2	obl	_	GTtags=|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


