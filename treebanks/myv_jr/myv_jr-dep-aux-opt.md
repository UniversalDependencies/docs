---
layout: base
title:  'Statistics of aux:opt in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `aux:opt`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-aux.html">aux</a></tt>.
There are also 6 other language-specific subtypes of `aux`: <tt><a href="myv_jr-dep-aux-aspect.html">aux:aspect</a></tt>, <tt><a href="myv_jr-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="myv_jr-dep-aux-imp.html">aux:imp</a></tt>, <tt><a href="myv_jr-dep-aux-nec.html">aux:nec</a></tt>, <tt><a href="myv_jr-dep-aux-neg.html">aux:neg</a></tt>, <tt><a href="myv_jr-dep-aux-q.html">aux:q</a></tt>.

8 nodes (0%) are attached to their parents as `aux:opt`.

8 instances of `aux:opt` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25.

The following 2 pairs of parts of speech are connected with `aux:opt`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (6; 75% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (2; 25% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 aux:opt	color:blue
1	Кадык	кадык	AUX	Pcle	Mood=Opt	4	aux:opt	_	GTtags=Opt
2	уш	уш	ADV	Adv	AdvType=Tim	4	advmod:tmod	_	GTtags=Sem/Time
3	аватне	ава	NOUN	N	Case=Nom|Definite=Def|Number=Plur	4	nsubj	_	GTtags=Sem/Kin,Pl,Nom,Def
4	пулькить	пулькамс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,ScPl3
5	те	те	DET	Det	Case=Nom|Definite=Ind|Number=Sing	7	det	_	GTtags=Sg,Nom,Indef
6	стяконь	стяко	ADJ	A	Case=Gen|Definite=Ind|Number=Plur,Sing	7	amod	_	GTtags=SP,Gen,Indef
7	тевсэнть	тев	NOUN	N	Case=Ine|Definite=Def|Number=Sing	4	obl	_	GTtags=Sg,Ine,Def|SpaceAfter=No
8	...	...	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 aux:opt	color:blue
1	Кадык	кадык	AUX	Aux	Mood=Imp	4	aux:opt	_	GTtags=TV,Imprt,ScSg2,OcSg3
2	Дуняшин	Дуняшин	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	4	nsubj	_	GTtags=Sur_Mal,Prop,Sg,Nom,Indef
3	аволь	аволь	AUX	Pcle	PartType=Emp|Polarity=Neg	4	aux:neg	_	GTtags=Neg,Intensive
4	классик	классик	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


