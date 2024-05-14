---
layout: base
title:  'Statistics of nmod:comp in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `nmod:comp`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-nmod.html">nmod</a></tt>.
There are also 6 other language-specific subtypes of `nmod`: <tt><a href="kpv_lattice-dep-nmod-appos.html">nmod:appos</a></tt>, <tt><a href="kpv_lattice-dep-nmod-lfrom.html">nmod:lfrom</a></tt>, <tt><a href="kpv_lattice-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="kpv_lattice-dep-nmod-obj.html">nmod:obj</a></tt>, <tt><a href="kpv_lattice-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="kpv_lattice-dep-nmod-subj.html">nmod:subj</a></tt>.

4 nodes (0%) are attached to their parents as `nmod:comp`.

3 instances of `nmod:comp` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 3 pairs of parts of speech are connected with `nmod:comp`: <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (2; 50% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PROPN.html">PROPN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 22 nmod:comp	color:blue
1	Роч	роч	NOUN	N	Case=Nom|Number=Sing	2	compound	_	GTtags=Sg,Nom
2	кыв	кыв	NOUN	N	Case=Nom|Number=Sing	3	nmod	_	GTtags=Sg,Nom
3	отсӧгӧн	отсӧг	NOUN	N	Case=Ins|Number=Sing	6	obl	_	GTtags=Sg,Ins
4	ми	ме	PRON	Pron	Case=Nom|Number=Plur|Person=1|PronType=Prs	6	nsubj	_	GTtags=Pers,Pl1,Nom
5	кокниа	кокниа	ADV	Adv	_	6	advmod:mmod	_	_
6	гӧгӧрвоам	гӧгӧрвоны	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|Valency=2	0	root	_	GTtags=TV,Ind,Prs,Pl1
7	ӧта-мӧднымӧс	ӧта-мӧд	PRON	Pron	Case=Acc|Number[psor]=Plur|Person[psor]=1|PronType=Rcp	6	obj	_	GTtags=Recipr,Acc,PxPl1|SpaceAfter=No
8	,	,	PUNCT	CLB	_	12	punct	_	_
9	и	и	CCONJ	CC	_	12	cc	_	_
10	юраным	юр	NOUN	N	Case=Ill|Number=Sing|Number[psor]=Plur|Person[psor]=1	12	obl:lmod	_	GTtags=Sg,Ill,PxPl1
11	оз	оз	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	12	aux:neg	_	GTtags=Neg,Ind,Prs,Sg3
12	волы	волыны	VERB	V	Connegative=Yes|Valency=1	6	conj	_	GTtags=IV,ConNeg|SpaceAfter=No
13	,	,	PUNCT	CLB	_	17	punct	_	_
14	мый	мый	SCONJ	CS	_	17	mark	_	_
15	аслыспӧлӧслунным	аслыспӧлӧслун	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Plur|Person[psor]=1	17	nsubj	_	GTtags=Sg,Nom,PxPl1
16	вермас	вермыны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|Valency=1	17	aux:pot	_	GTtags=TV,Ind,Fut,Sg3
17	кыпӧдны	кыпӧдны	VERB	V	Valency=2|VerbForm=Inf	12	csubj	_	GTtags=TV,Inf
18	мукӧдъясысь	мукӧд	PRON	Pron	Case=Ela|Number=Plur	19	nmod:comp	_	GTtags=Pl,Ela
19	вылӧджык	выв	NOUN	N	Case=Ill|Degree=Cmp|NounType=Relat|Number=Sing	17	obl	_	GTtags=Relat,Sg,Ill,Comp
20	либӧ	либӧ	CCONJ	CC	_	21	cc	_	_
21	уськӧдны	уськӧдны	VERB	V	Valency=2|VerbForm=Inf	17	conj	_	GTtags=TV,Inf
22	мукӧдъясысь	мукӧд	PRON	Pron	Case=Ela|Number=Plur	23	nmod:comp	_	GTtags=Pl,Ela
23	улӧ	ув	NOUN	N	Case=Ill|NounType=Relat|Number=Sing	21	obl:lmod	_	GTtags=Po,Sg,Ill|SpaceAfter=No
24	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 nmod:comp	color:blue
1	Война	война	NOUN	N	Case=Nom|Number=Sing	5	obl:lmod	_	_
2	вылын	вылын	ADP	Po	Case=Ine|Number=Sing	1	case	_	_
3	татшӧм	татшӧм	DET	Det	Case=Nom|Number=Sing|PronType=Dem	4	det	_	_
4	гӧгӧрвотӧмыс	гӧгӧрвоны	VERB	V	Number[psor]=Sing|Person[psor]=3|Polarity=Neg|Tense=Past|VerbForm=Part	5	csubj	_	_
5	лёкджык	лёк	ADJ	A	Case=Nom|Degree=Cmp|Number=Sing	0	root	_	_
6	медся	медся	ADV	Adv	_	7	advmod:deg	_	_
7	ён	ён	ADJ	A	Case=Nom|Number=Sing	8	amod	_	_
8	бойысь	бой	NOUN	N	Case=Ela|Number=Sing	5	nmod:comp	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nmod:comp	color:blue
1	Кӧра	кӧр	NOUN	N	Case=Prp|Number=Sing	2	nmod	_	GTtags=Sg,Der,Der/ProprietiveMod,A,Sg,Nom
2	кӧлуйысь	кӧлуй	NOUN	N	Case=Ela|Number=Sing	3	nmod	_	GTtags=Sg,Ela
3	кӧм	кӧм	NOUN	N	Case=Nom|Number=Sing	6	nmod	_	GTtags=Sg,Nom
4	-	-	PUNCT	PUNCT	_	3	punct	_	_
5	пась	пась	NOUN	N	Case=Nom|Number=Sing	3	conj	_	GTtags=Sg,Nom
6	вурӧм	вурны	VERB	V	Case=Nom|Number=Sing|VerbForm=Vnoun	8	nmod	_	GTtags=TV,Der,Der/ӧм,Der/NomAct,N,Sg,Nom
7	кузя	кузя	ADP	Adp	AdpType=Post	6	case	_	GTtags=Po
8	Пӧлашысь	Пӧлаш	PROPN	N	Animacy=Hum|Case=Ela|Number=Sing	9	nmod:comp	_	GTtags=Prop,Sem/Fem,Sg,Ela
9	мастерджыкыс	мастерджыкыс	NOUN	N	Case=Nom|Degree=Cmp|Number=Sing	0	root	_	GTtags=Cmpr,Sg,Nom
10	матігӧгӧрын	матігӧгӧрын	ADV	Adv	Case=Ine	9	advmod:lmod	_	GTtags=Ine
11	некод	некод	PRON	Pron	Case=Nom|Number=Sing|Polarity=Neg	9	nsubj	_	GTtags=Neg,Sg,Nom
12	эз	оз	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	9	aux:neg	_	GTtags=Neg,Ind,Prt1,Sg3
13	вӧв	вӧвны	AUX	V	Connegative=Yes	9	cop	_	GTtags=IV,ConNeg|SpaceAfter=No
14	.	.	PUNCT	CLB	_	9	punct	_	_

~~~


