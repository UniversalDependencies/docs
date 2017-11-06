---
layout: base
title:  'Statistics of ccomp in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `ccomp`

This relation is universal.

126 nodes (1%) are attached to their parents as `ccomp`.

126 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.57142857142857.

The following 11 pairs of parts of speech are connected with `ccomp`: <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (90; 71% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (13; 10% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (10; 8% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="sv_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 ccomp	color:blue
1	De	den	DET	DT|UTR/NEU|PLU|DEF	Definite=Def|Number=Plur	3	det	_	_
2	nya	ny	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	3	amod	_	_
3	riktlinjerna	riktlinje	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	6	nsubj	_	_
4	för	för	ADP	PP	_	5	case	_	_
5	järn	järn	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	3	nmod	_	_
6	innebär	innebära	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	att	att	SCONJ	SN	_	10	mark	_	_
8	fler	fler	ADJ	JJ|POS|UTR/NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	9	amod	_	_
9	donatorer	donator	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	10	nsubj:pass	_	_
10	behövs	behöva	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	6	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	MAD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 17 ccomp	color:blue
1	Pedro	Pedro	PROPN	PM|NOM	Case=Nom	9	nsubj	_	_
2	Sánchez	Sánchez	PROPN	PM|NOM	Case=Nom	1	flat:name	_	SpaceAfter=No
3	,	,	PUNCT	MID	_	7	punct	_	_
4	liksom	liksom	ADP	PP	_	7	mark	_	_
5	många	mången	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	7	amod	_	_
6	andra	annan	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	7	amod	_	_
7	socialister	socialist	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	1	acl	_	SpaceAfter=No
8	,	,	PUNCT	MID	_	7	punct	_	_
9	sade	säga	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
10	i	i	ADP	PP	_	12	case	_	_
11	programmet	program	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	12	nmod	_	_
12	Évole	Évole	PROPN	PM|NOM	Case=Nom	9	obl	_	_
13	att	att	SCONJ	SN	_	17	mark	_	_
14	Spanien	Spanien	PROPN	PM|NOM	Case=Nom	17	nsubj	_	_
15	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	17	cop	_	_
16	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing	17	det	_	_
17	nation	nation	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	9	ccomp	_	_
18	av	av	ADP	PP	_	19	case	_	_
19	nationer	nation	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	17	nmod	_	SpaceAfter=No
20	.	.	PUNCT	MAD	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 ccomp	color:blue
1	Jag	jag	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	nsubj	_	_
2	åker	åka	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	i	i	ADP	PP	_	4	case	_	_
4	fängelse	fängelse	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	2	obl	_	_
5	ändå	ändå	ADV	AB	_	2	advmod	_	SpaceAfter=No
6	,	,	PUNCT	MID	_	7	punct	_	_
7	hoppas	hoppas	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	2	parataxis	_	_
8	det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	10	nsubj	_	_
9	var	vara	AUX	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	10	cop	_	_
10	värt	värd	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	7	ccomp	_	_
11	det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	10	obl	_	SpaceAfter=No
12	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


