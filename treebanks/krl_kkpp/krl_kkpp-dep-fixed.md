---
layout: base
title:  'Statistics of fixed in UD_Karelian-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Karelian-KKPP: Relations: `fixed`

This relation is universal.

5 nodes (0%) are attached to their parents as `fixed`.

5 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `fixed`: <tt><a href="krl_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="krl_kkpp-pos-PRON.html">PRON</a></tt> (2; 40% instances), <tt><a href="krl_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="krl_kkpp-pos-ADJ.html">ADJ</a></tt> (1; 20% instances), <tt><a href="krl_kkpp-pos-ADV.html">ADV</a></tt>-<tt><a href="krl_kkpp-pos-ADV.html">ADV</a></tt> (1; 20% instances), <tt><a href="krl_kkpp-pos-ADV.html">ADV</a></tt>-<tt><a href="krl_kkpp-pos-SCONJ.html">SCONJ</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 20 fixed	color:blue
1	Nykyihmiset	nyky#ihmini	NOUN	NOUN	Case=Nom|Number=Plur	2	nsubj	_	_
2	eletäh	eleä	VERB	VERB	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
3	ikäh	ikäh	ADV	ADV	_	2	advmod	_	_
4	kuin	kuin	SCONJ	SCONJ	_	3	compound	_	_
5	vakumissa	vakumi	NOUN	NOUN	Case=Ine|Number=Sing	2	obl	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	9	punct	_	_
7	monet	moni	PRON	PRON	Case=Nom|Number=Plur|PronType=Ind	9	nsubj	_	_
8	ei	ei	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	_
9	tunneta	tuntie	VERB	VERB	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	2	parataxis	_	_
10	omie	oma	ADJ	ADJ	Case=Par|Number=Plur	11	amod	_	_
11	nuapurija	nuapuri	NOUN	NOUN	Case=Par|Number=Plur	9	obj	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	13	punct	_	_
13	käyväh	käyvä	VERB	VERB	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	2	parataxis	_	_
14	töissä	työ	NOUN	NOUN	Case=Ine|Number=Plur	13	obl	_	_
15	ta	ta	CCONJ	CCONJ	_	16	cc	_	_
16	kaupoissa	kauppa	NOUN	NOUN	Case=Ine|Number=Plur	14	conj	_	_
17	eikä	ei	CCONJ	CCONJ	Number=Sing|Person=3|Polarity=Neg|Voice=Act	18	cc	_	_
18	huomata	huomata	VERB	VERB	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	9	conj	_	_
19	toini	toini	ADJ	ADJ	Case=Nom|Number=Sing	18	obj	_	_
20	toista	toini	PRON	PRON	Case=Par|Number=Sing	19	fixed	_	SpaceAfter=No
21	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 fixed	color:blue
1	Mie	mie	PRON	PRON	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	järješšän	järješteä	VERB	VERB	Connegative=Yes|Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	šemmosie	semmoni	ADJ	ADJ	Case=Par|Number=Plur	4	amod	_	_
4	pruasniekkoja	pruas#niekka	NOUN	NOUN	Case=Par|Number=Plur	2	obj	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	9	punct	_	_
6	missä	mi	PRON	PRON	Case=Ine|Number=Sing	9	obl	_	PronType=Interr
7	ihmiset	ihmini	NOUN	NOUN	Case=Nom|Number=Plur	9	nsubj	_	_
8	voijah	voija	AUX	AUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	_
9	ottua	ottua	VERB	VERB	VerbForm=Inf	4	acl:relcl	_	_
10	toini	toini	ADJ	ADJ	Case=Nom|Number=Sing	12	nmod:poss	_	_
11	toisen	toini	PRON	PRON	Case=Gen|Number=Sing	10	fixed	_	_
12	kiäštä	käsi	NOUN	NOUN	Case=Ela|Number=Sing	14	obl	_	SpaceAfter=No
13	,	,	PUNCT	PUNCT	_	14	punct	_	_
14	kaččuo	kaččuo	VERB	VERB	VerbForm=Inf	9	conj	_	_
15	šilmih	šilmä	NOUN	NOUN	Case=Ill|Number=Plur	14	obl	_	SpaceAfter=No
16	,	,	PUNCT	PUNCT	_	17	punct	_	_
17	muhie	muhie	VERB	VERB	VerbForm=Inf	9	conj	_	_
18	toini	toini	ADJ	ADJ	Case=Nom|Number=Sing	17	obl	_	_
19	toisella	toini	ADJ	ADJ	Case=Ade|Number=Sing	18	fixed	_	_
20	ta	ta	CCONJ	CCONJ	_	21	cc	_	_
21	paissa	paissa	VERB	VERB	VerbForm=Inf	9	conj	_	_
22	keškenäh	keškenäh	ADV	ADV	_	21	advmod	_	SpaceAfter=No
23	.	.	PUNCT	PUNCT	_	9	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 fixed	color:blue
1	Hyö	hyö	PRON	PRON	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	nsubj	_	_
2	mäntih	männä	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	loitommakši	loitommakši	ADV	ADV	_	2	advmod	_	_
4	šuolla	šuo	NOUN	NOUN	Case=Ade|Number=Sing	2	obl	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	2	punct	_	_
6	a	a	CCONJ	CCONJ	_	7	cc	_	_
7	šielä	šielä	ADV	ADV	_	2	advmod	_	_
8	marjua	marju	NOUN	NOUN	Case=Par|Number=Sing	2	conj	_	_
9	niin	niin	ADV	ADV	_	12	advmod	_	_
10	kun	kun	ADV	ADV	_	9	fixed	_	_
11	ois	olla	AUX	AUX	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	12	aux	_	_
12	valettu	valoa	VERB	ADJ	Case=Nom|Number=Sing|PartForm=Past|Voice=Pass	2	conj	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


