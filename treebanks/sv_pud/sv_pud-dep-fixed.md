---
layout: base
title:  'Statistics of fixed in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `fixed`

This relation is universal.

22 nodes (0%) are attached to their parents as `fixed`.

22 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.68181818181818.

The following 8 pairs of parts of speech are connected with `fixed`: <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (6; 27% instances), <tt><a href="sv_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (5; 23% instances), <tt><a href="sv_pud-pos-PART.html">PART</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (4; 18% instances), <tt><a href="sv_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (2; 9% instances), <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 9% instances), <tt><a href="sv_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_pud-pos-ADP.html">ADP</a></tt> (1; 5% instances), <tt><a href="sv_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 5% instances), <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_pud-pos-ADP.html">ADP</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 fixed	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	4	nsubj	4:nsubj	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
3	ett	en	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	4	det	4:det	_
4	evenemang	evenemang	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	0	root	0:root	_
5	som	som	PRON	HP|-|-|-	PronType=Int,Rel	11	nsubj	11:nsubj|13:nsubj	_
6	Mexico	Mexico	PROPN	PM|NOM	Case=Nom	7	nsubj:pass	7:nsubj:pass	_
7	hoppas	hoppas	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	4	acl:relcl	4:acl:relcl	_
8	så	så	ADV	AB	ExtPos=ADV	11	advcl	11:advcl	ParsemeMWE=1:AdvID
9	småningom	småningom	ADV	AB	_	8	fixed	8:fixed	ParsemeMWE=1
10	kunna	kunna	AUX	VB|INF|AKT	VerbForm=Inf|Voice=Act	11	aux	11:aux	_
11	stå	stå	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	7	ccomp	7:ccomp	_
12	som	som	SCONJ	KN	_	13	mark	13:mark	_
13	rival	rival	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	11	xcomp	11:xcomp	_
14	till	till	ADP	PP	_	15	case	15:case	_
15	Karnevalen	karneval	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	13	nmod	13:nmod:till	_
16	i	i	ADP	PP	_	17	case	17:case	_
17	Brasilien	Brasilien	PROPN	PM|NOM	Case=Nom	15	nmod	15:nmod:i	SpaceAfter=No
18	.	.	PUNCT	MAD	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 fixed	color:blue
1	Grundad	grundad	ADJ	PC|PRF|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing|Tense=Past|VerbForm=Part	10	acl	10:acl	_
2	1925	1925	NUM	RG|NOM	Case=Nom	1	obl	1:obl	_
3	som	som	ADP	KN	_	4	case	4:case	_
4	spel	spel	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	1	obl	1:obl:som	_
5	för	för	ADP	PP	_	6	case	6:case	_
6	vem	vem	PRON	HP|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Int,Rel	4	nmod	4:nmod:för	ParsemeMWE=1:PronID
7	som	som	ADP	KN	ExtPos=ADV	6	advmod	6:advmod	ParsemeMWE=1
8	helst	gärna	ADV	AB|SUV	Degree=Sup	7	fixed	7:fixed	ParsemeMWE=1
9	drar	dra	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
10	utomhusteatern	utomhusteater	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	9	nsubj	9:nsubj	_
11	på	på	ADP	PP	_	14	case	14:case	_
12	de	de	DET	DT|UTR/NEU|PLU|DEF	Definite=Def|Number=Plur|PronType=Art	14	det	14:det	_
13	stora	stor	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Definite=Def|Degree=Pos	14	amod	14:amod	_
14	trapporna	trappa	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	10	nmod	10:nmod:på	_
15	framför	framför	ADP	PP	_	17	case	17:case	_
16	St.	sankt	ADJ	JJ|AN	Abbr=Yes|Number=Sing	17	amod	17:amod	_
17	Michael	Michael	PROPN	PM|NOM	Case=Nom	14	nmod	14:nmod:framför	_
18	fortfarande	fortfarande	ADV	AB	_	9	advmod	9:advmod	_
19	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	21	det	21:det	_
20	blandad	blandad	ADJ	PC|PRF|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing|Tense=Past|VerbForm=Part	21	amod	21:amod	_
21	publik	publik	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	9	obj	9:obj	SpaceAfter=No
22	.	.	PUNCT	MAD	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 fixed	color:blue
1	För	för	ADP	PP	_	2	case	2:case	_
2	Kerber	Kerber	PROPN	PM|NOM	Case=Nom	3	obl	3:obl:för	_
3	markerar	markera	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	säsongsavslutningen	säsongsavslutning	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	3	nsubj	3:nsubj	_
5	icke	icke	PART	AB	ExtPos=ADV|Polarity=Neg	3	advmod	3:advmod	ParsemeMWE=1:AdvID
6	desto	desto	ADV	AB	_	5	fixed	5:fixed	ParsemeMWE=1
7	mindre	lite	ADV	AB|KOM	Degree=Cmp	5	fixed	5:fixed	ParsemeMWE=1
8	slutet	slut	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	3	obj	3:obj	_
9	på	på	ADP	PP	_	12	case	12:case	_
10	ett	en	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	12	det	12:det	_
11	otroligt	otrolig	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	12	amod	12:amod	_
12	år	år	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	8	nmod	8:nmod:på	SpaceAfter=No
13	.	.	PUNCT	MAD	_	3	punct	3:punct	_

~~~


