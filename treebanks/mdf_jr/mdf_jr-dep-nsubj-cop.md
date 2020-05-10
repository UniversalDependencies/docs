---
layout: base
title:  'Statistics of nsubj:cop in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `nsubj:cop`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="mdf_jr-dep-nsubj-pass.html">nsubj:pass</a></tt>.

19 nodes (2%) are attached to their parents as `nsubj:cop`.

17 instances of `nsubj:cop` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.84210526315789.

The following 5 pairs of parts of speech are connected with `nsubj:cop`: <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (10; 53% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt> (6; 32% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:cop	color:blue
1	Ня	ня	PRON	Pron	_	2	det	_	_
2	стирнятне	стирь	NOUN	N	Case=Nom|Definite=Def|Derivation=Dimin|Number=Plur	3	nsubj:cop	_	GTtags=Pl,Nom,Def
3	малат	мала	ADJ	A	Case=Nom|Definite=Ind|Number=Plur	0	root	_	GTtags=Pl,Nom,Indef
4	Веряскинонди	Веряскин	PROPN	N	Case=Dat|Definite=Ind|NameType=Sur|Number=Plur,Sing	3	nmod	_	GTtags=Prop,SP,Dat,Indef|SpaceAfter=No
5	,	,	PUNCT	CLB	_	8	punct	_	_
6	сяс	сяс	ADV	Adv	_	8	mark	_	_
7	самозост	самозост	VERB	V	Case=Ill|Derivation=Vnoun|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=3|Valency=1	8	advcl	_	GTtags=IV,Der/NomAct,SP,Ill,PxPl3
8	кенярдсь	кенярдемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	3	advcl	_	GTtags=IV,Ind,Prt1,ScSg3|SpaceAfter=No
9	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:cop	color:blue
1	Семён	Семён	PROPN	N	Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	2	nsubj:cop	_	GTtags=Prop,Sg,Nom,Indef
2	жаднай	жаднай	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef
3	ярмакненди	ярмак	NOUN	N	Case=Dat|Definite=Def|Number=Plur	2	nmod	_	GTtags=Pl,Dat,Def|SpaceAfter=No
4	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 6 nsubj:cop	color:blue
1	Эста	эста	ADV	Adv	Case=Temp	3	advmod:tmod	_	GTtags=Temp
2	стирьхне	стирь	NOUN	N	Case=Nom|Definite=Def|Number=Plur	3	nsubj	_	GTtags=Pl,Nom,Def
3	сявозь	сявомс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Prt1|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScPl3,OcSg3
4	Архипонь	Архип	PROPN	N	Case=Gen|Definite=Ind|NameType=Giv|Number=Plur,Sing	3	obj	_	GTtags=Prop,SP,Gen,Indef|SpaceAfter=No
5	,	,	PUNCT	CLB	_	11	punct	_	_
6	кона	кона	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Rel	11	nsubj:cop	_	GTtags=Rel,Sg,Nom,Indef
7	ульсь	улемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	11	cop	_	GTtags=IV,Ind,Prt1,ScSg3
8	синь	сон	PRON	Pron	Case=Gen|Number=Plur|Person=3|PronType=Prs	11	nmod	_	GTtags=Pers,Pl3,Gen
9	корязост	корязост	ADP	Adp	Number[psor]=Plur|Person[psor]=3	8	case	_	GTtags=PxPl3
10	сяда	сяда	PART	Pcle	Degree=Cmp	11	advmod:deg	_	GTtags=Comp
11	ёмла	ёмла	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	4	acl:relcl	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
12	,	,	PUNCT	CLB	_	11	punct	_	_
13	кядьта-пильгта	кядть-пилькт	NOUN	N	Case=Abl|Definite=Ind|Number=Plur,Sing	3	obl	_	GTtags=SP,Abl,Indef
14	и	и	CCONJ	CC	_	15	cc	_	_
15	нолдазь	нолдамс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Prt1|Valency=2	3	conj	_	GTtags=TV,Ind,Prt1,ScPl3,OcSg3
16	бохаряму	бохарям	NOUN	N	Case=Lat|Definite=Ind|Number=Plur,Sing	15	obl:lmod	_	GTtags=SP,Lat,Indef|SpaceAfter=No
17	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


