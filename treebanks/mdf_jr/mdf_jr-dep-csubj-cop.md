---
layout: base
title:  'Statistics of csubj:cop in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `csubj:cop`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-csubj.html">csubj</a></tt>.

2 nodes (0%) are attached to their parents as `csubj:cop`.

1 instances of `csubj:cop` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.5.

The following 2 pairs of parts of speech are connected with `csubj:cop`: <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 csubj:cop	color:blue
1	Аньцек	аньцек	ADV	Adv	_	2	advmod:foc	_	_
2	ужяль	ужяль	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	8	punct	_	_
4	мес	мес	ADV	Adv	_	8	mark	_	_
5	кичкор	кичкор	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	6	amod	_	_
6	мадя	мадя	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	7	nmod:bahuv	_	_
7	Мишазе	Миша	PROPN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	8	nsubj	_	_
8	кулось	куломс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	2	csubj:cop	_	_
9	геройкс	герой	NOUN	N	Case=Tra|Definite=Ind|Number=Plur,Sing	8	xcomp	_	SpaceAfter=No
10	,	,	PUNCT	CLB	_	13	punct	_	_
11	мзярда	мзярда	ADV	Adv	_	13	mark	_	_
12	пятналангста	пятналанга	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	13	obl:lfrom	_	_
13	валгсь	валгомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	8	advcl:tcl	_	_
14	парашютса	парашют	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	13	obl:inst	_	SpaceAfter=No
15	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 csubj:cop	color:blue
1	А	а	CCONJ	CC	_	7	cc	_	_
2	лемфтома	лем	NOUN	N	Case=Abe|Definite=Ind|Number=Plur,Sing	3	obl	_	GTtags=SP,Abe,Indef
3	максф	максомс	VERB	V	Aspect=Perf|Case=Nom|Definite=Ind|Derivation=F|Number=Sing|VerbForm=Part	4	acl	_	GTtags=Der/f,PrfPrc,Sg,Nom,Indef
4	квитанциясь	квитанция	NOUN	N	Case=Nom|Definite=Def|Number=Sing	7	csubj:cop	_	GTtags=Sg,Nom,Def
5	ули	улемс	AUX	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres	7	cop	_	GTtags=Ind,Prs,ScSg3
6	кода	кода	SCONJ	CS	_	7	mark	_	_
7	максомс	максомс	VERB	V	VerbForm=Inf	0	root	_	GTtags=Inf
8	кинди	кие	PRON	Pron	Case=Dat|Number=Plur,Sing|PronType=Int	7	obl	_	GTtags=Interr,SP,Dat
9	повсь	повомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	8	fixed	_	GTtags=Ind,Prt1,ScSg3|SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	_	_
11	но	но	CCONJ	CC	_	12	cc	_	_
12	юмандяряй	юмамс	VERB	V	Mood=Cnd|Number[subj]=Sing|Person[subj]=3	20	advcl	_	GTtags=Cond,ScSg3|SpaceAfter=No
13	,	,	PUNCT	_	_	12	punct	_	_
14	эста	эста	ADV	Adv	AdvType=Tim	20	advmod:tmod	_	GTtags=Sem/Time
15	сонь	сон	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	16	det	_	GTtags=Pers,Sg3,Gen
16	вастозонза	васта	NOUN	N	Case=Ill|Number=Plur,Sing|Number[psor]=Sing|Person[psor]=3	20	obl	_	GTtags=SP,Ill,PxSg3
17	од	од	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	18	amod	_	GTtags=Sg,Nom,Indef
18	квитанция	квитанция	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	20	obj	_	GTtags=Sg,Nom,Indef
19	аф	аф	AUX	_	Polarity=Neg|VerbType=Aux	20	aux:neg	_	GTtags=Aux,Neg
20	максыхть	максомс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres	7	conj	_	GTtags=Ind,Prs,ScPl3|SpaceAfter=No
21	.	.	PUNCT	_	_	7	punct	_	_

~~~


