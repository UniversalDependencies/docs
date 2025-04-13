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

The following 9 pairs of parts of speech are connected with `fixed`: <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (6; 27% instances), <tt><a href="sv_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (4; 18% instances), <tt><a href="sv_pud-pos-PART.html">PART</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (4; 18% instances), <tt><a href="sv_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_pud-pos-DET.html">DET</a></tt> (2; 9% instances), <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 9% instances), <tt><a href="sv_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_pud-pos-ADP.html">ADP</a></tt> (1; 5% instances), <tt><a href="sv_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 5% instances), <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_pud-pos-ADP.html">ADP</a></tt> (1; 5% instances), <tt><a href="sv_pud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 fixed	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	4	nsubj	4:nsubj	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
3	ett	en	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing	4	det	4:det	_
4	evenemang	evenemang	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	0	root	0:root	_
5	som	som	PRON	HP|-|-|-	PronType=Int,Rel	11	nsubj	11:nsubj|13:nsubj	_
6	Mexico	Mexico	PROPN	PM|NOM	Case=Nom	7	nsubj:pass	7:nsubj:pass	_
7	hoppas	hoppas	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	4	acl:relcl	4:acl:relcl	_
8	så	så	ADV	AB	_	11	advcl	11:advcl	ExtPos=ADV
9	småningom	småningom	ADV	AB	_	8	fixed	8:fixed	_
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 fixed	color:blue
1	För	för	ADP	PP	_	4	case	4:case	ExtPos=ADP
2	inte	inte	PART	AB	Polarity=Neg	4	advmod	4:advmod	_
3	så	så	ADV	AB	_	4	advmod	4:advmod	_
4	länge	länge	ADV	AB|POS	Degree=Pos	6	advmod	6:advmod	_
5	sedan	sedan	ADV	AB	_	1	fixed	1:fixed	_
6	skilde	skilja	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	han	han	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing	6	nsubj	6:nsubj|18:nsubj	_
8	sig	sig	PRON	PN|UTR/NEU|SIN/PLU|DEF|OBJ	Case=Acc|Definite=Def	6	obj	6:obj	_
9	från	från	ADP	PP	_	10	case	10:case	_
10	skådespelerskan	skådespelerska	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	6	obl	6:obl:från	SpaceAfter=No
11	,	,	PUNCT	MID	_	12	punct	12:punct	_
12	Gloria	Gloria	PROPN	PM|NOM	Case=Nom	10	appos	10:appos	_
13	Holden	Holden	PROPN	PM|NOM	Case=Nom	12	flat:name	12:flat:name	SpaceAfter=No
14	,	,	PUNCT	MID	_	12	punct	12:punct	_
15	men	men	CCONJ	KN	_	18	cc	18:cc	_
16	var	vara	AUX	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	18	cop	18:cop	_
17	fortsatt	fortsatt	ADJ	PC|PRF|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Number=Sing|Tense=Past|VerbForm=Part	18	advmod	18:advmod	_
18	kär	kär	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	6	conj	6:conj:men	_
19	efter	efter	ADP	PP	_	22	case	22:case	_
20	det	den	DET	DT|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing|PronType=Art	22	det	22:det	_
21	äktenskapliga	äktenskaplig	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos	22	amod	22:amod	_
22	uppbrottet	uppbrott	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	18	obl	18:obl:efter	SpaceAfter=No
23	.	.	PUNCT	MAD	_	6	punct	6:punct	_

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
5	icke	icke	PART	AB	Polarity=Neg	3	advmod	3:advmod	ExtPos=ADV
6	desto	desto	ADV	AB	_	5	fixed	5:fixed	_
7	mindre	lite	ADV	AB|KOM	Degree=Cmp	5	fixed	5:fixed	_
8	slutet	slut	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	3	obj	3:obj	_
9	på	på	ADP	PP	_	12	case	12:case	_
10	ett	en	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing	12	det	12:det	_
11	otroligt	otrolig	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	12	amod	12:amod	_
12	år	år	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	8	nmod	8:nmod:på	SpaceAfter=No
13	.	.	PUNCT	MAD	_	3	punct	3:punct	_

~~~


