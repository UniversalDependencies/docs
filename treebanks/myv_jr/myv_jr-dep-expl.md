---
layout: base
title:  'Statistics of expl in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `expl`

This relation is universal.

7 nodes (0%) are attached to their parents as `expl`.

7 instances of `expl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 3 pairs of parts of speech are connected with `expl`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (4; 57% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (2; 29% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-DET.html">DET</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 expl	color:blue
1	Те	те	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Dem	2	expl	_	GTtags=Dem,Sg,Nom,Indef
2	чартизе	чартямс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg3,OcSg3
3	прянзо	пря	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	obj	_	GTtags=Sem/Body_part,Sg,Gen,PxSg3
4	Вирьавась	Вирьава	NOUN	N	Case=Nom|Definite=Def|Number=Sing	2	nsubj	_	GTtags=Sem/Anim_Cnt,Sg,Nom,Def|SpaceAfter=No
5	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 expl	color:blue
1	—	—	PUNCT	PUNCT	_	4	punct	_	_
2	Те	те	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Dem	4	expl	_	GTtags=Dem,Sg,Nom,Indef|Gloss=it
3	так	так	ADV	Adv	_	4	advmod	_	GTtags=|Gloss=let-me-see
4	плант	план	NOUN	N	Case=Nom|Definite=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres	0	root	_	GTtags=Pl,Nom,Indef|Gloss=plan|SpaceAfter=No
5	...	...	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 expl	color:blue
1	Те	те	DET	Det	Number=Sing|PronType=Dem	4	expl	_	GTtags=Dem,Sg
2	таго	таго	ADV	Adv	AdvType=Tim	1	advmod:tmod	_	GTtags=Temp
3	нать	нать	ADV	Adv	_	1	advmod	_	GTtags=Parenthetic
4	ускить	ускомс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres|Valency=2	0	root	_	GTtags=TV,Ind,Prs,ScPl3
5	Колчакнэнь	Колчак	PROPN	N	Case=Dat|Definite=Ind|NameType=Sur|Number=Plur,Sing	4	obl	_	GTtags=Prop,SP,Dat,Indef
6	оружия	оружия	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	4	obj	_	GTtags=Sg,Nom,Indef
7	ды	ды	CCONJ	CC	_	8	cc	_	_
8	снарежения	снарежения	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	4	obj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
9	,	,	PUNCT	CLB	_	13	punct	_	_
10	а	а	CCONJ	CC	_	13	cc	_	_
11	можот	можот	ADV	Adv	_	13	advmod:mmod	_	_
12	розорязь	розорямс	VERB	V	Derivation=Ozj|Valency=1|VerbForm=Conv	13	advcl	_	GTtags=IV,Der/Озь,Ger
13	велестэ	веле	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	1	conj	_	GTtags=Sem/Plc,SP,Ela,Indef
14	атят	атя	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	13	nsubj	_	GTtags=Pl,Nom,Indef
15	―	―	PUNCT	PUNCT	_	17	punct	_	_
16	од	од	ADJ	A	_	17	amod	_	_
17	цёрат	цёра	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	14	compound	_	GTtags=Pl,Nom,Indef|SpaceAfter=No
18	...	...	PUNCT	CLB	_	4	punct	_	_

~~~


