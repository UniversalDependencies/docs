---
layout: base
title:  'Statistics of ccomp in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `ccomp`

This relation is universal.

126 nodes (1%) are attached to their parents as `ccomp`.

126 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.57936507936508.

The following 10 pairs of parts of speech are connected with `ccomp`: <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (91; 72% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (13; 10% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (10; 8% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="sv_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="sv_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-PART.html">PART</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 ccomp	color:blue
1	De	den	DET	DT|UTR/NEU|PLU|DEF	Definite=Def|Number=Plur	3	det	3:det	_
2	nya	ny	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	3	amod	3:amod	_
3	riktlinjerna	riktlinje	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	6	nsubj	6:nsubj	_
4	för	för	ADP	PP	_	5	case	5:case	_
5	järn	järn	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	3	nmod	3:nmod:för	_
6	innebär	innebära	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	att	att	SCONJ	SN	_	10	mark	10:mark	_
8	fler	fler	ADJ	JJ|POS|UTR/NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	9	amod	9:amod	_
9	donatorer	donator	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	10	nsubj:pass	10:nsubj:pass	_
10	behövs	behöva	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	6	ccomp	6:ccomp	SpaceAfter=No
11	.	.	PUNCT	MAD	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 17 ccomp	color:blue
1	Pedro	Pedro	PROPN	PM|NOM	Case=Nom	9	nsubj	9:nsubj	_
2	Sánchez	Sánchez	PROPN	PM|NOM	Case=Nom	1	flat:name	1:flat:name	SpaceAfter=No
3	,	,	PUNCT	MID	_	7	punct	7:punct	_
4	liksom	liksom	ADP	PP	_	7	mark	7:mark	_
5	många	mången	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	7	amod	7:amod	_
6	andra	annan	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	7	amod	7:amod	_
7	socialister	socialist	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	1	acl	1:acl:liksom	SpaceAfter=No
8	,	,	PUNCT	MID	_	7	punct	7:punct	_
9	sade	säga	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
10	i	i	ADP	PP	_	12	case	12:case	_
11	programmet	program	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	12	nmod	12:nmod	_
12	Évole	Évole	PROPN	PM|NOM	Case=Nom	9	obl	9:obl:i	_
13	att	att	SCONJ	SN	_	17	mark	17:mark	_
14	Spanien	Spanien	PROPN	PM|NOM	Case=Nom	17	nsubj	17:nsubj	_
15	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	17	cop	17:cop	_
16	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing	17	det	17:det	_
17	nation	nation	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	9	ccomp	9:ccomp	_
18	av	av	ADP	PP	_	19	case	19:case	_
19	nationer	nation	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	17	nmod	17:nmod:av	SpaceAfter=No
20	.	.	PUNCT	MAD	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 ccomp	color:blue
1	Jag	jag	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	nsubj	2:nsubj	_
2	åker	åka	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	i	i	ADP	PP	_	4	case	4:case	_
4	fängelse	fängelse	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	2	obl	2:obl:i	_
5	ändå	ändå	ADV	AB	_	2	advmod	2:advmod	SpaceAfter=No
6	,	,	PUNCT	MID	_	7	punct	7:punct	_
7	hoppas	hoppas	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	2	parataxis	2:parataxis	_
8	det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	10	nsubj	10:nsubj	_
9	var	vara	AUX	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	10	cop	10:cop	_
10	värt	värd	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	7	ccomp	7:ccomp	_
11	det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	10	obl	10:obl	SpaceAfter=No
12	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


