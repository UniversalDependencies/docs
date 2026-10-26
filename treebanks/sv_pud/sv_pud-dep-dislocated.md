---
layout: base
title:  'Statistics of dislocated in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `dislocated`

This relation is universal.

6 nodes (0%) are attached to their parents as `dislocated`.

6 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.33333333333333.

The following 4 pairs of parts of speech are connected with `dislocated`: <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (2; 33% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (2; 33% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 17% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 1 dislocated	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	15	dislocated	15:dislocated	_
2	hon	hon	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	3	nsubj	3:nsubj	_
3	säger	säga	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl:relcl	1:acl:relcl	_
4	och	och	CCONJ	KN	_	7	cc	7:cc	_
5	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	7	obj	7:obj	_
6	hon	hon	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	7	nsubj	7:nsubj	_
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


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 9 dislocated	color:blue
1	Under	under	ADP	PP	_	4	case	4:case	_
2	deras	de	PRON	PS|UTR/NEU|SIN/PLU|DEF	Definite=Def|Poss=Yes|PronType=Prs	4	nmod:poss	4:nmod:poss	_
3	olika	olik	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	4	amod	4:amod	_
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
24	bådas	båda	PRON	PS|UTR/NEU|SIN/PLU|DEF	Definite=Def|Poss=Yes|PronType=Tot	26	nmod:poss	26:nmod:poss	_
25	konstnärliga	konstnärlig	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos	26	amod	26:amod	_
26	stil	stil	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	23	obj	23:obj	SpaceAfter=No
27	.	.	PUNCT	MAD	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 7 dislocated	color:blue
1	Jag	jag	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	3	nsubj	3:nsubj	_
2	måste	måste	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	3:aux	_
3	gratulera	gratulera	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	0:root	_
4	Andy	Andy	PROPN	PM|NOM	Case=Nom	3	obj	3:obj	_
5	–	–	PUNCT	MID	_	17	punct	17:punct	_
6	att	att	PART	IE	_	7	mark	7:mark	_
7	bli	bli	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	17	dislocated	17:dislocated	_
8	nummer	nummer	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	9	nmod	9:nmod	_
9	1	1	NUM	RG|NOM	Case=Nom	7	xcomp	7:xcomp	_
10	i	i	ADP	PP	_	11	case	11:case	_
11	världen	värld	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	9	nmod	9:nmod:i	SpaceAfter=No
12	,	,	PUNCT	MID	_	7	punct	7:punct	_
13	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	17	nsubj	17:nsubj	_
14	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	17	cop	17:cop	_
15	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	17	det	17:det	_
16	otrolig	otrolig	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	17	amod	17:amod	_
17	bedrift	bedrift	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	3	parataxis	3:parataxis	SpaceAfter=No
18	,	,	PUNCT	MID	_	19	punct	19:punct	_
19	sade	säga	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	3	parataxis	3:parataxis	_
20	amerikanen	amerikan	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	19	nsubj	19:nsubj	SpaceAfter=No
21	.	.	PUNCT	MAD	_	3	punct	3:punct	_

~~~


