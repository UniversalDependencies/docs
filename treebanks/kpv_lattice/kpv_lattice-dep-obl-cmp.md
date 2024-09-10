---
layout: base
title:  'Statistics of obl:cmp in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `obl:cmp`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-obl.html">obl</a></tt>.
There are also 5 other language-specific subtypes of `obl`: <tt><a href="kpv_lattice-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="kpv_lattice-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="kpv_lattice-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="kpv_lattice-dep-obl-mcl.html">obl:mcl</a></tt>, <tt><a href="kpv_lattice-dep-obl-tmod.html">obl:tmod</a></tt>.

5 nodes (0%) are attached to their parents as `obl:cmp`.

4 instances of `obl:cmp` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.4.

The following 4 pairs of parts of speech are connected with `obl:cmp`: <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (2; 40% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 20% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PROPN.html">PROPN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 22 obl:cmp	color:blue
1	Роч	роч	NOUN	N	Case=Nom|Number=Sing	2	compound	_	GTtags=Sg,Nom
2	кыв	кыв	NOUN	N	Case=Nom|Number=Sing	3	nmod	_	GTtags=Sg,Nom
3	отсӧгӧн	отсӧг	NOUN	N	Case=Ins|Number=Sing	6	obl	_	GTtags=Sg,Ins
4	ми	ме	PRON	Pron	Case=Nom|Number=Plur|Person=1|PronType=Prs	6	nsubj	_	GTtags=Pers,Pl1,Nom
5	кокниа	кокниа	ADV	Adv	_	6	advmod:mmod	_	_
6	гӧгӧрвоам	гӧгӧрвоны	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres	0	root	_	GTtags=TV,Ind,Prs,Pl1
7	ӧта-мӧднымӧс	ӧта-мӧд	PRON	Pron	Case=Acc|Number[psor]=Plur|Person[psor]=1|PronType=Rcp	6	obj	_	GTtags=Recipr,Acc,PxPl1|SpaceAfter=No
8	,	,	PUNCT	CLB	_	12	punct	_	_
9	и	и	CCONJ	CC	_	12	cc	_	_
10	юраным	юр	NOUN	N	Case=Ill|Number=Sing|Number[psor]=Plur|Person[psor]=1	12	obl:lmod	_	GTtags=Sg,Ill,PxPl1
11	оз	оз	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	12	aux:neg	_	GTtags=Neg,Ind,Prs,Sg3
12	волы	волыны	VERB	V	Connegative=Yes	6	conj	_	GTtags=IV,ConNeg|SpaceAfter=No
13	,	,	PUNCT	CLB	_	17	punct	_	_
14	мый	мый	SCONJ	CS	_	17	mark	_	_
15	аслыспӧлӧслунным	аслыспӧлӧслун	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Plur|Person[psor]=1	17	nsubj	_	GTtags=Sg,Nom,PxPl1
16	вермас	вермыны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut	17	aux:pot	_	GTtags=TV,Ind,Fut,Sg3
17	кыпӧдны	кыпӧдны	VERB	V	VerbForm=Inf	12	csubj	_	GTtags=TV,Inf
18	мукӧдъясысь	мукӧд	PRON	Pron	Case=Ela|Number=Plur	19	obl:cmp	_	GTtags=Pl,Ela
19	вылӧджык	выв	NOUN	N	Case=Ill|Degree=Cmp|NounType=Relat|Number=Sing	17	obl	_	GTtags=Relat,Sg,Ill,Comp
20	либӧ	либӧ	CCONJ	CC	_	21	cc	_	_
21	уськӧдны	уськӧдны	VERB	V	VerbForm=Inf	17	conj	_	GTtags=TV,Inf
22	мукӧдъясысь	мукӧд	PRON	Pron	Case=Ela|Number=Plur	23	obl:cmp	_	GTtags=Pl,Ela
23	улӧ	ув	NOUN	N	Case=Ill|NounType=Relat|Number=Sing	21	obl:lmod	_	GTtags=Po,Sg,Ill|SpaceAfter=No
24	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 obl:cmp	color:blue
1	Война	война	NOUN	N	Case=Nom|Number=Sing	5	obl:lmod	_	_
2	вылын	вылын	ADP	Po	AdpType=Post|Case=Ine|Number=Sing	1	case	_	_
3	татшӧм	татшӧм	DET	Det	Case=Nom|Number=Sing|PronType=Dem	4	det	_	_
4	гӧгӧрвотӧмыс	гӧгӧрвоны	VERB	V	Number[psor]=Sing|Person[psor]=3|Polarity=Neg|Tense=Past|VerbForm=Part	5	csubj	_	_
5	лёкджык	лёк	ADJ	A	Case=Nom|Degree=Cmp|Number=Sing	0	root	_	_
6	медся	медся	ADV	Adv	_	7	advmod:deg	_	_
7	ён	ён	ADJ	A	Case=Nom|Number=Sing	8	amod	_	_
8	бойысь	бой	NOUN	N	Case=Ela|Number=Sing	5	obl:cmp	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:cmp	color:blue
1	Свадьбаныс	свадьба	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Plur|Person[psor]=3	10	nsubj	_	gloss_en=wedding
2	мукӧдлӧн	мукӧд	PRON	Pron	Case=Gen|Number=Sing	3	nmod	_	gloss_en=other
3	ысь	ыс	PRON	MWN	Case=Ela|Number=Sing	4	obl:cmp	_	_
4	торъя	торъя	ADV	_	_	5	advmod	_	gloss_en=specifically
5	гӧль	гӧль	ADJ	A	Case=Nom|Number=Sing	10	xcomp	_	gloss_en=poor
6	ни	ни	CCONJ	CC	_	7	cc	_	gloss_en=nor
7	озыр	озыр	ADJ	A	Case=Nom|Number=Sing	5	conj	_	gloss_en=rich
8	эз	оз	AUX	V	_	10	aux:neg	_	gloss_en=not
9	жӧ	жӧ	ADV	Adv	_	10	advmod:eval	_	_
10	ло	лоны	VERB	V	Connegative=Yes	0	root	_	gloss_en=become|SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


