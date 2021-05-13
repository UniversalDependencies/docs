---
layout: base
title:  'Statistics of cop in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `cop`

This relation is universal.

12 nodes (0%) are attached to their parents as `cop`.

9 instances of `cop` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.66666666666667.

The following 5 pairs of parts of speech are connected with `cop`: <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (5; 42% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (3; 25% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (2; 17% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 8% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	Касондярян	касомс	VERB	V	Mood=Cnd|Number[subj]=Sing|Person[subj]=1|Valency=1	4	advcl	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	_
3	улян	улемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	4	cop	_	_
4	лётчикокс	лётчик	NOUN	N	Case=Tra|Definite=Ind|Number=Plur,Sing	0	root	_	SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
1	Кукшенец	кукшень	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	nsubj:cop	_	GTtags=Sg,Nom,PxSg3
2	ульсь	улемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	4	cop	_	GTtags=IV,Ind,Prt1,ScSg3
3	крайкс	край	NOUN	N	Case=Tra|Definite=Ind|Number=Plur,Sing	4	obl:lmod	_	GTtags=SP,Tra,Indef
4	пяшксе	пяшксе	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	_
5	иможда	имож	NOUN	N	Case=Abl|Definite=Ind|Number=Plur,Sing	4	obl	_	GTtags=SP,Abl,Indef|SpaceAfter=No
6	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 cop	color:blue
1	Сёксень	сёксе	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	2	nmod	_	GTtags=SP,Gen,Indef
2	вирсь	вирь	NOUN	N	Case=Nom|Definite=Def|Number=Sing	5	nsubj:cop	_	GTtags=Sg,Nom,Def
3	ульсь	улемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	5	cop	_	GTtags=Ind,Prt1,ScSg3
4	пяк	пяк	ADV	Adv	AdvType=Deg	5	advmod:deg	_	GTtags=Deg
5	мазы	мази	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
6	,	,	PUNCT	CLB	_	10	punct	_	_
7	кодама	кодама	ADJ	A	Case=Nom|Definite=Ind|Number=Sing|PronType=Int	9	amod	_	GTtags=Interr,Sg,Nom,Indef
8	аньцек	аньцек	ADV	Adv	_	7	advmod:foc	_	_
9	краскат	краска	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	10	nsubj:cop	_	GTtags=Pl,Nom,Indef
10	сонь	сон	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	5	conj	_	GTtags=Pers,Sg3,Gen
11	эсонза	эса	ADP	Adp	Case=Ine|Number[psor]=Sing|Person[psor]=3	10	case	_	GTtags=Ine,PxSg3
12	ашельхть	аш	AUX	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	10	cop	_	GTtags=Aux,Neg,Loc,Ind,Prt2,ScPl3|SpaceAfter=No
13	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


