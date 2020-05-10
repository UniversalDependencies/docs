---
layout: base
title:  'Statistics of cop:own in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `cop:own`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-cop.html">cop</a></tt>.

1 nodes (0%) are attached to their parents as `cop:own`.

1 instances of `cop:own` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `cop:own`: <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 cop:own	color:blue
1	Сондеенза	сон	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs|Variant=Long	3	obl:agent	_	GTtags=Pers,Sg3,Dat,Long
2	эрявсть	эрявомс	AUX	_	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=1	3	aux	_	GTtags=IV,Ind,Prt1,ScPl3
3	тиемс	тиемс	VERB	_	Valency=2|VerbForm=Inf	0	root	_	GTtags=TV,Inf
4	шяяренза	шяярь	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	3	obj	_	GTtags=Pl,Nom,PxSg3|SpaceAfter=No
5	,	,	PUNCT	CLB	_	9	punct	_	_
6	аньцек	аньцек	ADV	_	_	9	advmod	_	_
7	ся	ся	DET	_	Case=Nom|Number=Sing|PronType=Dem	8	det	_	GTtags=Dem,Sg,Nom
8	шиня	ши	NOUN	_	Case=Temp|Definite=Ind|Number=Sing	9	obl:tmod	_	GTtags=Der/Dimin,N,Sg,Nom,Indef
9	сонь	сон	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs	3	conj	_	GTtags=Pers,Sg3,Gen
10	ашель	аш	AUX	_	Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	9	cop:own	_	GTtags=Aux,Neg,Prt2,ScSg3
11	мялец	мяль	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	nsubj	_	GTtags=Sg,Nom,PxSg3|SpaceAfter=No
12	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


