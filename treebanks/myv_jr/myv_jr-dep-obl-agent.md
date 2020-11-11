---
layout: base
title:  'Statistics of obl:agent in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="myv_jr-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="myv_jr-dep-obl-tmod.html">obl:tmod</a></tt>.

29 nodes (0%) are attached to their parents as `obl:agent`.

16 instances of `obl:agent` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.79310344827586.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (22; 76% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (4; 14% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (3; 10% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:agent	color:blue
1	Ансяк	ансяк	ADV	Adv	_	4	advmod	_	GTtags=Exclusive
2	бу	бу	AUX	Pcle	_	4	aux:cnd	_	_
3	сонензэ	сон	PRON	Pron	Case=Dat|Number=Sing|Person=3|PronType=Prs	4	obl:agent	_	GTtags=Pers,Sg3,Dat
4	кирдевель	кирдемс	VERB	V	Mood=Cnj|Number[subj]=Sing|Person[subj]=3|Valency=2	0	root	_	GTtags=TV,Conj,ScSg3
5	те	те	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Dem	6	det	_	GTtags=Dem,Sg,Nom,Indef
6	сэредьксэсь	сэредькс	NOUN	N	Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	GTtags=Sg,Nom,Def|SpaceAfter=No
7	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obl:agent	color:blue
1	Вечкевсть	вечкевемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScPl3
2	Пальконень	Палько	PROPN	N	Case=Dat|Definite=Ind|NameType=Giv|Number=Plur,Sing	1	obl:agent	_	GTtags=Prop,Sem/Sur,SP,Dat,Indef
3	салдатнэ	салдат	NOUN	N	Case=Nom|Definite=Def|Number=Plur	1	nsubj	_	GTtags=Pl,Nom,Def|SpaceAfter=No
4	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 obl:agent	color:blue
1	Колмо	колмо	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	2	nummod	_	GTtags=Card,Sg,Nom,Indef|Gloss=three
2	частнэ	час	NOUN	N	Case=Nom|Definite=Def|Number=Plur	6	nsubj	_	GTtags=Pl,Nom,Def|Gloss=hour
3	марявсть	марявомс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=1	6	parataxis	_	GTtags=IV,Ind,Prt1,ScPl3|Gloss=feel
4	колмо	колмо	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	5	nummod	_	GTtags=Card,Sg,Nom,Indef|Gloss=three
5	чинь	чи	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	6	nmod	_	GTtags=SP,Gen,Indef|Gloss=day
6	кувалмосот	кувалмо	NOUN	N	Case=Ine|Number=Plur,Sing|Number[psor]=Sing|Person[psor]=2	0	root	_	GTtags=SP,Ine,PxSg2|Gloss=length
7	учомс	учомс	VERB	V	Valency=2|VerbForm=Inf	10	advcl	_	GTtags=TV,Inf|Gloss=wait
8	партизантнэнень	партизан	NOUN	N	Case=Dat|Definite=Def|Number=Plur	7	obl:agent	_	GTtags=Pl,Dat,Def|Gloss=guerrilla
9	пек	пек	ADV	Adv	AdvType=Deg	10	advmod:deg	_	GTtags=Degree|Gloss=very
10	стакаль	стака	ADJ	A	Number[subj]=Sing|Person[subj]=3|Tense=Past	6	conj	_	GTtags=|Gloss=difficult|SpaceAfter=No
11	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


