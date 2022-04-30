---
layout: base
title:  'Statistics of cop in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `cop`

This relation is universal.

16 nodes (1%) are attached to their parents as `cop`.

12 instances of `cop` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5625.

The following 5 pairs of parts of speech are connected with `cop`: <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (7; 44% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (3; 19% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (2; 13% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (2; 13% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (2; 13% instances).


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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 cop	color:blue
1	Ужяль	ужяль	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef
2	—	—	PUNCT	PUNCT	_	7	punct	_	_
3	мондедон	мон	PRON	Pron	Case=Abl|Number=Sing|Person=1|PronType=Prs	5	nmod:comp	_	GTtags=Pers,Sg1,Abl
4	сяда	сяда	ADV	Adv	AdvType=Deg	5	advmod:deg	_	GTtags=Deg
5	инголе	инголе	ADV	Adv	Case=Loc	7	advmod:tmod	_	GTtags=Loc
6	ни	ни	ADV	Adv	AdvType=Tim	5	advmod:tmod	_	GTtags=Sem/Time
7	тяса	тяса	ADV	Adv	Case=Ine	1	conj	_	GTtags=Ine
8	ульсть	улемс	AUX	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past	7	cop	_	GTtags=Ind,Prt1,ScPl3
9	инжихть	инжи	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	7	nsubj:cop	_	GTtags=Pl,Nom,Indef|SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


