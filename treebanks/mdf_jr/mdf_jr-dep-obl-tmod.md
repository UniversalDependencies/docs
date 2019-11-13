---
layout: base
title:  'Statistics of obl:tmod in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-obl.html">obl</a></tt>.

3 nodes (1%) are attached to their parents as `obl:tmod`.

3 instances of `obl:tmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (2; 67% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:tmod	color:blue
1	Монць	монць	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	4	nsubj	_	_
2	эрь	эрь	DET	Det	Case=Nom|Definite=Ind|Number=Sing	3	det	_	_
3	шиня	шиня	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	4	obl:tmod	_	_
4	мастярлан	мастярламс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	0	root	_	_
5	самолётт	самолёт	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	4	obj	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	8	punct	_	_
7	и	и	CCONJ	CC	_	8	cc	_	_
8	лийфнесайне	лийфнемс	VERB	V	Mood=Ind|Number[obj]=Plur|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Pres|Valency=2	4	conj	_	_
9	няканень	няка	NOUN	N	Case=Gen|Number=Plur|Number[psor]=Sing|Person[psor]=1	8	obj	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 obl:tmod	color:blue
1	Сондеенза	Сондеенза	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs|Variant=Long	3	obl	_	GTtags=Pers,Sg3,Dat,Long
2	эрявсть	эрявомс	AUX	_	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Prt1|Valency=1	3	aux	_	GTtags=IV,Ind,Prt1,ScPl3
3	тиемс	тиемс	VERB	_	Valency=2|VerbForm=Inf	0	root	_	GTtags=TV,Inf
4	шяяренза	шяярь	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	3	obj	_	GTtags=Pl,Nom,PxSg3|SpaceAfter=No
5	,	,	PUNCT	CLB	_	9	punct	_	_
6	аньцек	аньцек	ADV	_	_	9	advmod	_	_
7	ся	ся	DET	_	Case=Nom|Number=Sing|PronType=Dem	8	det	_	GTtags=Dem,Sg,Nom
8	шиня	ши	NOUN	_	Case=Nom|Definite=Ind|Derivation=Dimin|Number=Sing	9	obl:tmod	_	GTtags=Der/Dimin,N,Sg,Nom,Indef
9	сонь	сон	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs	3	conj	_	GTtags=Pers,Sg3,Gen
10	ашель	аш	AUX	_	Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Prt2|VerbType=Aux	9	aux:neg	_	GTtags=Aux,Neg,Prt2,ScSg3
11	мялец	мяль	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	nsubj	_	GTtags=Sg,Nom,PxSg3|SpaceAfter=No
12	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


