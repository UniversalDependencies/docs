---
layout: base
title:  'Statistics of advcl in UD_Prakrit-DIPI'
udver: '2'
---

## Treebank Statistics: UD_Prakrit-DIPI: Relations: `advcl`

This relation is universal.

16 nodes (2%) are attached to their parents as `advcl`.

15 instances of `advcl` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.3125.

The following 3 pairs of parts of speech are connected with `advcl`: <tt><a href="pra_dipi-pos-VERB.html">VERB</a></tt>-<tt><a href="pra_dipi-pos-VERB.html">VERB</a></tt> (14; 88% instances), <tt><a href="pra_dipi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pra_dipi-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="pra_dipi-pos-VERB.html">VERB</a></tt>-<tt><a href="pra_dipi-pos-ADJ.html">ADJ</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advcl	color:blue
1	idha	idha	ADV	_	AdvType=Loc	6	advmod:lmod	_	Gloss=here|Orig=[i]dha
2	na	na	PART	_	Polarity=Neg	6	advmod	_	Gloss=not
3	kiṃci	kiṃci	PRON	_	PronType=Ind	4	det	_	Gloss=any
4	jīvaṃ	jīva	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	5	obj	_	Gloss=living-being
5	ārabhitpā	ārabha	VERB	_	VerbForm=Conv	6	advcl	_	Gloss=be-killed-and
6	prajūhitavyaṃ	prajūha	VERB	_	Case=Nom|Gender=Neut|Number=Sing|Tense=Fut|VerbForm=Part|Voice=Pass	0	root	_	Gloss=must-be-sacrificed

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 advcl	color:blue
1	so	sa	CCONJ	_	_	12	cc	_	Gloss=but|Orig=s[o]
2	idani	idani	ADV	_	AdvType=Tim	12	advmod:tmod	_	Gloss=now|Orig=[i]dani
3	yada	yada	SCONJ	_	_	7	mark	_	Gloss=when
4	aya	aya	DET	_	PronType=Dem	6	det	_	Gloss=this
5	dhrama	dhrama	NOUN	_	Compound=Yes|Gender=Masc	6	compound	_	Gloss=morality
6	dipi	dipi	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	7	obj	_	Gloss=rescript
7	likhita	likha	VERB	_	Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	11	advcl	_	Gloss=is-written
8	tada	tada	ADV	_	PronType=Dem	12	advmod:tmod	_	Gloss=then
9	trayo	trayas	NUM	_	Case=Nom|Gender=Masc|NumType=Card	11	nummod	_	Gloss=three
10	vo	vo	PART	_	_	9	advmod:emph	_	Gloss=only
11	praṇa	praṇa	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	12	obj	_	Gloss=animals
12	haṃñaṃti	haṃña	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	Gloss=are-being-killed|Orig=haṃñaṃt[i]
13	majura	majura	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	12	parataxis	_	Gloss=peacocks
14	duvi	duva	NUM	_	Case=Nom|Gender=Masc|NumType=Card	13	nummod	_	Gloss=two|Orig=duv[i]
15	mrugo	mruga	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	13	conj	_	Gloss=deer
16	so	sa	DET	_	PronType=Dem	18	det	_	Gloss=this
17	pi	pi	ADV	_	_	16	advmod:emph	_	Gloss=even
18	mrugo	mruga	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	13	conj	_	Gloss=deer
19	no	no	PART	_	Polarity=Neg	20	advmod:neg	_	Gloss=not
20	dhruvaṃ	dhruva	ADV	_	AdvType=Man	18	orphan	_	Gloss=regularly|Orig=dhruva[ṃ]

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 advcl	color:blue
1	yārise	yārisa	SCONJ	_	_	8	mark	_	_
2	bahūhi	bahu	ADJ	_	Case=Ins|Gender=Neut|Number=Plur	5	amod	_	_
3	vāsa	vāsa	NOUN	_	Compound=Yes|Gender=Masc	4	compound	_	Orig=v[āsa]
4	satehi	sata	NUM	_	Case=Ins|Gender=Neut|Number=Plur	7	obl:tmod	_	_
5	na	na	PART	_	Polarity=Neg	7	advmod	_	_
6	bhūta	bhūta	ADJ	_	Compound=Yes	7	compound	_	_
7	puve	puva	ADJ	_	_	10	advcl	_	_
8	tarise	tarisa	ADV	_	_	10	advmod	_	_
9	aja	aja	ADV	_	AdvType=Tim	10	advmod	_	_
10	vaḍhite	vaḍha	VERB	_	Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
11	devānaṃ	deva	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	12	nmod	_	_
12	priyasa	priya	ADJ	_	Case=Gen|Gender=Masc|Number=Sing	15	nmod:desc	_	_
13	priya	priya	ADJ	_	Compound=Yes|Gender=Masc	14	amod	_	_
14	dasino	dasin	ADJ	_	Case=Gen|Gender=Masc|Number=Sing	15	nmod:desc	_	_
15	rāño	rājan	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	17	nmod	_	_
16	dhaṃma	dhaṃma	NOUN	_	Compound=Yes|Gender=Masc	17	compound	_	_
17	anusasṭiyā	anusasṭi	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	10	obl	_	_
18	anāraṃbho	anāraṃbha	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	Orig=anāraṃ[bh]o
19	prāṇānaṃ	prāṇa	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	18	nmod	_	_
20	avihāsā	avihāsā	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	18	conj	_	_
21	bhūtānaṃ	bhūta	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	20	nmod	_	_
22	ñātīnaṃ	ñāti	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	23	nmod	_	_
23	saṃpaṭipatī	saṃpaṭipati	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	18	conj	_	_
24	bramhaṇa	bramhaṇa	NOUN	_	Compound=Yes|Gender=Masc	25	compound	_	_
25	samaṇānaṃ	samaṇa	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	26	nmod	_	_
26	saṃpaṭipatī	saṃpaṭipati	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	18	conj	_	_
27	mātari	mātar	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	29	obl	_	_
28	pitari	pitar	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	27	conj	_	_
29	susrusā	susrusā	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	18	conj	_	Orig=[s]usrusā
30	thaira	thaira	NOUN	_	Compound=Yes|Gender=Masc	31	obl	_	_
31	susrusā	susrusā	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	18	conj	_	_

~~~


