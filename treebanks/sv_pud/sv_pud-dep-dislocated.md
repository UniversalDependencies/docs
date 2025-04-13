---
layout: base
title:  'Statistics of dislocated in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `dislocated`

This relation is universal.

7 nodes (0%) are attached to their parents as `dislocated`.

7 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.14285714285714.

The following 5 pairs of parts of speech are connected with `dislocated`: <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (2; 29% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (2; 29% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (1; 14% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 14% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 9 dislocated	color:blue
1	Under	under	ADP	PP	_	4	case	4:case	_
2	deras	deras	PRON	PS|UTR/NEU|SIN/PLU|DEF	Definite=Def|Poss=Yes	4	nmod:poss	4:nmod:poss	_
3	olika	olik	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos	4	amod	4:amod	_
4	samarbeten	samarbete	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	8	obl	8:obl:under	_
5	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
6	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	8	expl	8:expl	_
7	inte	inte	PART	AB	Polarity=Neg	8	advmod	8:advmod	_
8	klart	klar	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	0:root	_
9	vem	vem	PRON	HP|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Int,Rel	14	dislocated	14:dislocated	_
10	av	av	ADP	PP	_	12	case	12:case	_
11	de	de	DET	DT|UTR/NEU|PLU|DEF	Definite=Def|Number=Plur|PronType=Art	12	det	12:det	_
12	två	två	NUM	RG|NOM	Case=Nom	9	nmod	9:nmod:av	_
13	som	som	PRON	HP|-|-|-	PronType=Int,Rel	14	nsubj	14:nsubj	_
14	tänkt	tänka	VERB	VB|SUP|AKT	VerbForm=Sup|Voice=Act	8	csubj	8:csubj	_
15	fram	fram	ADV	PL	_	14	compound:prt	14:compound:prt	_
16	vissa	viss	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	18	amod	18:amod	_
17	stilistiska	stilistisk	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	18	amod	18:amod	_
18	lösningar	lösning	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	14	obj	14:obj|23:nsubj	_
19	i	i	ADP	PP	_	20	case	20:case	_
20	arrangemangen	arrangemang	NOUN	NN|NEU|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Plur	18	nmod	18:nmod:i	_
21	som	som	PRON	HP|-|-|-	PronType=Int,Rel	23	nsubj	18:ref	_
22	senare	sent	ADV	AB|KOM	Degree=Cmp	23	advmod	23:advmod	_
23	karaktäriserade	karaktärisera	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	18	acl:relcl	18:acl:relcl	_
24	bådas	bådas	PRON	PS|UTR/NEU|SIN/PLU|DEF	Definite=Def|Poss=Yes	26	nmod:poss	26:nmod:poss	_
25	konstnärliga	konstnärlig	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos	26	amod	26:amod	_
26	stil	stil	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	23	obj	23:obj	SpaceAfter=No
27	.	.	PUNCT	MAD	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 dislocated	color:blue
1	Om	om	SCONJ	SN	_	5	mark	5:mark	_
2	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing	4	det	4:det	_
3	turkisk	turkisk	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	4	amod	4:amod	_
4	anställd	anställd	ADJ	PC|PRF|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing|Tense=Past|VerbForm=Part	5	nsubj	5:nsubj	_
5	slutar	sluta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	dislocated	7:dislocated	_
6	så	så	ADV	AB	_	7	advcl	7:advcl	_
7	kommer	komma	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	de	de	DET	DT|UTR/NEU|PLU|DEF	Definite=Def|Number=Plur|PronType=Art	10	det	10:det	_
9	turkiska	turkisk	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Definite=Def|Degree=Pos	10	amod	10:amod	_
10	arbetsråden	arbetsråd	NOUN	NN|NEU|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Plur	7	nsubj	7:nsubj	SpaceAfter=No
11	.	.	PUNCT	MAD	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 9 dislocated	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	obj	3:obj	_
2	hon	hon	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing	3	nsubj	3:nsubj	_
3	säger	säga	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	15	dislocated	15:dislocated	_
4	och	och	CCONJ	KN	_	7	cc	7:cc	_
5	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	7	obj	7:obj	_
6	hon	hon	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	nsubj	7:nsubj	_
7	gör	göra	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	3:conj:och	SpaceAfter=No
8	,	,	PUNCT	MID	_	3	punct	3:punct	_
9	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	15	dislocated	15:dislocated	_
10	–	–	PUNCT	MID	_	9	punct	9:punct	_
11	faktiskt	faktiskt	ADV	AB|POS	Degree=Pos	9	advmod	9:advmod	SpaceAfter=No
12	,	,	PUNCT	MID	_	9	punct	9:punct	_
13	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	15	nsubj	15:nsubj	_
14	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	15	cop	15:cop	_
15	otroligt	otrolig	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
16	.	.	PUNCT	MAD	_	15	punct	15:punct	_

~~~


