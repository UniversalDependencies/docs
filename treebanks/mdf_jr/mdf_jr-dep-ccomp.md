---
layout: base
title:  'Statistics of ccomp in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `ccomp`

This relation is universal.

5 nodes (0%) are attached to their parents as `ccomp`.

5 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.4.

The following 2 pairs of parts of speech are connected with `ccomp`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (4; 80% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	Тоса	тоса	ADV	Adv	_	2	obl:lmod	_	_
2	кизефтине	кизефтемс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Past|Valency=2	0	root	_	_
3	алязень	аля	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	2	obj	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	мзярда	мзярда	ADV	Adv	_	6	advmod:tmod	_	_
6	касан	касомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	2	ccomp	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp	color:blue
1	Да	да	CCONJ	CC	_	3	cc	_	_
2	тон	тон	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	_	GTtags=Pers,Sg2,Nom
3	варжака	варжамс	VERB	V	Mood=Prec|Number[subj]=Sing|Person[subj]=2	0	root	_	GTtags=Prec,ScSg2|SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	конашкава	конашкава	ADV	Adv	AdvType=Deg	6	advmod:deg	_	GTtags=Deg
6	ляпоня	ляпоня	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	3	ccomp	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
7	!	!	PUNCT	CLB	_	3	punct	_	_

~~~


