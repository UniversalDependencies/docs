---
layout: base
title:  'Statistics of nmod:comp in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `nmod:comp`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="kpv_lattice-dep-nmod-poss.html">nmod:poss</a></tt>.

2 nodes (0%) are attached to their parents as `nmod:comp`.

1 instances of `nmod:comp` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `nmod:comp`: <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PROPN.html">PROPN</a></tt> (1; 50% instances).


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
1	Кӧра	кӧр	NOUN	N	Case=Nom|Derivation=ProprietiveMod|Number=Sing	2	nmod	_	GTtags=Sg,Der,Der/ProprietiveMod,A,Sg,Nom
2	кӧлуйысь	кӧлуй	NOUN	N	Case=Ela|Number=Sing	3	nmod	_	GTtags=Sg,Ela
3	кӧм	кӧм	NOUN	N	Case=Nom|Number=Sing	6	nmod	_	GTtags=Sg,Nom
4	-	-	PUNCT	PUNCT	_	3	punct	_	_
5	пась	пась	NOUN	N	Case=Nom|Number=Sing	3	conj	_	GTtags=Sg,Nom
6	вурӧм	вурны	VERB	V	Case=Nom|Derivation=Vnoun|Number=Sing|Valency=2	8	nmod	_	GTtags=TV,Der,Der/ӧм,Der/NomAct,N,Sg,Nom
7	кузя	кузя	ADP	Adp	AdpType=Post	6	case	_	GTtags=Po
8	Пӧлашысь	Пӧлаш	PROPN	N	Animacy=Hum|Case=Ela|Number=Sing	9	nmod:comp	_	GTtags=Prop,Sem/Fem,Sg,Ela
9	мастерджыкыс	мастерджыкыс	NOUN	N	Case=Nom|Degree=Cmp|Number=Sing	0	root	_	GTtags=Cmpr,Sg,Nom
10	матігӧгӧрын	матігӧгӧрын	ADV	Adv	Case=Ine	9	advmod	_	GTtags=Ine
11	некод	некод	PRON	Pron	Case=Nom|Number=Sing|Polarity=Neg	9	nsubj	_	GTtags=Neg,Sg,Nom
12	эз	оз	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	9	aux:neg	_	GTtags=Neg,Ind,Prt1,Sg3
13	вӧв	вӧвны	AUX	V	Connegative=Yes|Valency=1	9	cop	_	GTtags=IV,ConNeg|SpaceAfter=No
14	.	.	PUNCT	CLB	_	9	punct	_	_

~~~


