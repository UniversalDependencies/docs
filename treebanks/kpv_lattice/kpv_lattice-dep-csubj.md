---
layout: base
title:  'Statistics of csubj in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `csubj`

This relation is universal.

10 nodes (0%) are attached to their parents as `csubj`.

8 instances of `csubj` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.1.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (6; 60% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (2; 20% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 10% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 csubj	color:blue
1	Колхозъясын	колхоз	NOUN	N	Case=Ine|Number=Plur	3	obl	_	_
2	ӧні	ӧні	ADV	Adv	_	3	advmod	_	_
3	мунӧ	мунны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	тайӧ	тайӧ	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	7	det	_	_
5	воӧм	воны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	7	acl	_	_
6	озыр	озыр	ADJ	A	Case=Nom|Number=Sing	7	amod	_	_
7	урожайсӧ	урожай	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obj	_	_
8	идралӧм	идравны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	3	csubj	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 csubj	color:blue
1	Тайӧ	тайӧ	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	2	det	_	_
2	кывъясыс	кыв	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	10	csubj	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	4	punct	_	_
4	кодӧс	коді	PRON	Pron	Case=Acc|Number=Sing|PronType=Int	5	obj	_	_
5	висьтавліс	висьтавлыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	acl	_	_
6	Сталин	Сталин	PROPN	N	Case=Nom|Number=Sing	5	nsubj	_	_
7	ёрт	ёрт	NOUN	N	Case=Nom|Number=Sing	6	nmod	_	SpaceAfter=No
8	,	,	PUNCT	CLB	_	9	punct	_	_
9	оз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	вермы	вермыны	VERB	V	Connegative=Yes|Number=Sing	0	root	_	_
11	лоны	лоны	VERB	V	VerbForm=Inf	10	xcomp	_	_
12	вунӧдӧма	вунӧдны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	xcomp	_	_
13	некодӧн	некод	PRON	Pron	Case=Ins|Number=Sing|Polarity=Neg	12	obl	_	_
14	да	да	CCONJ	CC	_	15	cc	_	_
15	должен	должен	ADJ	A	Case=Nom|Number=Sing	10	conj	_	_
16	лоны	лоны	VERB	V	VerbForm=Inf	15	xcomp	_	_
17	пӧртӧма	пӧртны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	16	xcomp	_	_
18	олӧмӧ	олӧм	NOUN	N	Case=Ill|Number=Sing	17	obl	_	SpaceAfter=No
19	.	.	PUNCT	CLB	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 csubj	color:blue
1	Война	война	NOUN	N	Case=Nom|Number=Sing	5	obl	_	_
2	вылын	вылын	ADP	Po	Case=Ine|Number=Sing	1	case	_	_
3	татшӧм	татшӧм	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	4	det	_	_
4	гӧгӧрвотӧмыс	гӧгӧрвоны	VERB	V	Number[psor]=Sing|Person[psor]=3|Polarity=Neg|Tense=Past|VerbForm=Part	5	csubj	_	_
5	лёкджык	лёк	ADJ	A	Case=Nom|Degree=Cmp	0	root	_	_
6	медся	медся	ADV	Adv	_	7	advmod	_	_
7	ён	ён	ADJ	A	Case=Nom|Number=Sing	8	amod	_	_
8	бойысь	бой	NOUN	N	Case=Ela|Number=Sing	5	advcl	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


