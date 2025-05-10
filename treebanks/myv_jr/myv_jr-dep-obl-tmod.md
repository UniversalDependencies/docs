---
layout: base
title:  'Statistics of obl:tmod in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="myv_jr-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="myv_jr-dep-obl-cmp.html">obl:cmp</a></tt>, <tt><a href="myv_jr-dep-obl-own.html">obl:own</a></tt>.

33 nodes (0%) are attached to their parents as `obl:tmod`.

26 instances of `obl:tmod` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.21212121212121.

The following 6 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (25; 76% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (3; 9% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl:tmod	color:blue
1	Читькак	чить	NOUN	Adv	AdvType=Tim|Case=Nom|Clitic=Add|Definite=Ind|Number=Plur	2	obl:tmod	_	GTtags=Sem/Time,Clt/Gak
2	лиснить	лиснемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres	0	root	_	GTtags=IV,Ind,Prs,ScPl3|SpaceAfter=No
3	,	,	PUNCT	CLB	_	8	punct	_	_
4	но	но	PART	Pcle	_	8	cc	_	_
5	сехте	сех	ADV	Adv	Case=Abl|Definite=Ind|Degree=Sup	6	advmod	_	GTtags=Degree=Sup,Abl,Indef
6	сеедьстэ	сеедьстэ	ADV	Adv	AdvType=Tim	8	advmod	_	GTtags=Sem/Time
7	—	—	PUNCT	CLB	_	8	punct	_	_
8	веть	веть	ADV	Adv	AdvType=Tim	1	conj	_	GTtags=Sem/Time|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl:tmod	color:blue
1	Течи	течи	NOUN	Adv	AdvType=Tim|Case=Nom|Definite=Ind|Number=Sing	2	obl:tmod	_	CGdephead=#1-&gt;0|CGdeprel=@ADVL|GTtags=Sem/Time
2	лембе	лембе	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	CGdephead=#2-&gt;0|CGdeprel=@PRED|GTtags=Sg,Nom,Indef|SpaceAfter=No
3	.	.	PUNCT	CLB	_	2	punct	_	CGdephead=#3-&gt;1|CGdeprel=@CLB|GTtags=CLB

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 obl:tmod	color:blue
1	Омбоце	омбоце	ADJ	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Ord	2	amod	_	GTtags=Ord
2	недля	недля	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	5	obl:tmod	_	GTtags=Sg,Nom,Indef
3	Дёбаень	Дёбай	PROPN	N	Case=Gen|Definite=Ind|NameType=Hom|Number=Plur,Sing	4	nmod	_	GTtags=Sem/Sur,Prop,SP,Gen,Indef
4	Микол	Микол	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	5	nsubj	_	GTtags=Ant_Mal,Prop,Sg,Nom,Indef
5	тайгасо	тайга	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	0	root	_	GTtags=SP,Ine,Indef|SpaceAfter=No
6	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


