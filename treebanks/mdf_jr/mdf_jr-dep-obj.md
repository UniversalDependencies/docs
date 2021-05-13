---
layout: base
title:  'Statistics of obj in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `obj`

This relation is universal.

129 nodes (5%) are attached to their parents as `obj`.

100 instances of `obj` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.54263565891473.

The following 6 pairs of parts of speech are connected with `obj`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (112; 87% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (10; 8% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obj	color:blue
1	Лётчикне	лётчик	NOUN	N	Case=Nom|Definite=Def|Number=Plur	6	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	3	punct	_	_
3	улема	улема	PART	Pcle	_	6	advmod:eval	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	3	punct	_	_
5	кядьса	кядь	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	6	obl:inst	_	_
6	токсесазь	токсемс	VERB	V	Mood=Ind|Number[obj]=Plur|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Pres|Valency=2	0	root	_	_
7	коволнятнень	ковол	NOUN	N	Case=Gen|Definite=Def|Derivation=Dimin|Number=Plur	6	obj	_	SpaceAfter=No
8	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obj	color:blue
1	Арьсян	арьсемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=2	0	root	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	4	punct	_	_
3	моньге	мон	PRON	Pron	Case=Gen|Clitic=AddGA|Number=Sing|Person=1|PronType=Prs	4	obj	_	_
4	лийфнесамазь-тисамазь	лийфнемс-тиемс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=1|Person[subj]=3|Tense=Pres	1	ccomp	_	_
5	и	и	CCONJ	CC	_	6	cc	_	_
6	валхтсамазь	валхтомс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=1|Person[subj]=3|Tense=Pres|Valency=2	4	conj	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obj	color:blue
1	Комендантсь	комендант	NOUN	N	Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	GTtags=Sg,Nom,Def
2	васенце	васенце	ADJ	A	Case=Nom|Definite=Ind|Number=Sing|NumType=Ord	3	amod	_	GTtags=Der/Ord,A,Ord,Sg,Nom,Indef
3	рабочайти	рабочай	NOUN	N	Case=Dat|Definite=Def|Number=Sing	4	obl	_	GTtags=Sg,Dat,Def
4	указовась	указовамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg3|SpaceAfter=No
5	,	,	PUNCT	CLB	_	7	punct	_	_
6	омбоцеть	омбоце	ADJ	A	Case=Gen|Definite=Def|Number=Sing|NumType=Ord	7	obj	_	GTtags=Der/Ord,A,Ord,Sg,Gen,Def
7	шназе	шнамс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past|Valency=2	4	conj	_	GTtags=TV,Ind,Prt1,ScSg3,OcSg3|SpaceAfter=No
8	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


