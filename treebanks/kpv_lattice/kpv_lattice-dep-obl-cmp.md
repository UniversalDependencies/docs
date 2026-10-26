---
layout: base
title:  'Statistics of obl:cmp in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `obl:cmp`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="kpv_lattice-dep-obl-agent.html">obl:agent</a></tt>.

5 nodes (0%) are attached to their parents as `obl:cmp`.

4 instances of `obl:cmp` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.4.

The following 3 pairs of parts of speech are connected with `obl:cmp`: <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (3; 60% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PROPN.html">PROPN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:cmp	color:blue
1	Свадьбаныс	свадьба	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Plur|Person[psor]=3	10	nsubj	_	gloss_en=wedding
2	мукӧдлӧн	мукӧд	PRON	Pron	Case=Gen|Number=Sing|PronType=Ind	3	nmod	_	gloss_en=other
3	ысь	ыс	PRON	MWN	Case=Ela|Number=Sing|PronType=Ind	4	obl:cmp	_	_
4	торъя	торъя	ADV	_	_	5	advmod	_	gloss_en=specifically
5	гӧль	гӧль	ADJ	A	Case=Nom|Number=Sing	10	xcomp	_	gloss_en=poor
6	ни	ни	CCONJ	CC	_	7	cc	_	gloss_en=nor
7	озыр	озыр	ADJ	A	Case=Nom|Number=Sing	5	conj	_	gloss_en=rich
8	эз	оз	AUX	V	_	10	aux	_	gloss_en=not
9	жӧ	жӧ	ADV	Adv	_	10	advmod	_	_
10	ло	лоны	VERB	V	Connegative=Yes	0	root	_	gloss_en=become|SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 obl:cmp	color:blue
1	Война	война	NOUN	N	Case=Nom|Number=Sing	5	obl	_	_
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 obl:cmp	color:blue
1	Кӧра	кӧр	NOUN	N	Case=Prp|Number=Sing	2	nmod	_	GTtags=Sg,Der,Der/ProprietiveMod,A,Sg,Nom
2	кӧлуйысь	кӧлуй	NOUN	N	Case=Ela|Number=Sing	3	nmod	_	GTtags=Sg,Ela
3	кӧм	кӧм	NOUN	N	Case=Nom|Number=Sing	6	nmod	_	GTtags=Sg,Nom
4	-	-	PUNCT	PUNCT	_	3	punct	_	_
5	пась	пась	NOUN	N	Case=Nom|Number=Sing	3	conj	_	GTtags=Sg,Nom
6	вурӧм	вурны	VERB	V	Case=Nom|Number=Sing|VerbForm=Vnoun	8	nmod	_	GTtags=TV,Der,Der/ӧм,Der/NomAct,N,Sg,Nom
7	кузя	кузя	ADP	Adp	AdpType=Post	6	case	_	GTtags=Po
8	Пӧлашысь	Пӧлаш	PROPN	N	Animacy=Hum|Case=Ela|Number=Sing	9	obl:cmp	_	GTtags=Prop,Sem/Fem,Sg,Ela
9	мастерджыкыс	мастерджыкыс	NOUN	N	Case=Nom|Degree=Cmp|Number=Sing	0	root	_	GTtags=Cmpr,Sg,Nom
10	матігӧгӧрын	матігӧгӧрын	ADV	Adv	Case=Ine	9	advmod	_	GTtags=Ine
11	некод	некод	PRON	Pron	Case=Nom|Number=Sing|Polarity=Neg|PronType=Ind	9	nsubj	_	GTtags=Neg,Sg,Nom
12	эз	оз	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	9	aux	_	GTtags=Neg,Ind,Prt1,Sg3
13	вӧв	вӧвны	AUX	V	Connegative=Yes	9	cop	_	GTtags=IV,ConNeg|SpaceAfter=No
14	.	.	PUNCT	CLB	_	9	punct	_	_

~~~


