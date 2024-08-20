---
layout: base
title:  'Statistics of iobj in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `iobj`

This relation is universal.

25 nodes (0%) are attached to their parents as `iobj`.

25 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.48.

The following 3 pairs of parts of speech are connected with `iobj`: <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (17; 68% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (6; 24% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (2; 8% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 iobj	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	expl	3:expl	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
3	svårt	svår	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	0:root	_
4	att	att	PART	IE	_	5	mark	5:mark	_
5	tänka	tänka	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	3	csubj	3:csubj	_
6	sig	sig	PRON	PN|UTR/NEU|SIN/PLU|DEF|OBJ	Case=Acc|Definite=Def	5	iobj	5:iobj	_
7	att	att	SCONJ	SN	_	9	mark	9:mark	_
8	Italien	Italien	PROPN	PM|NOM	Case=Nom	9	nsubj	9:nsubj	_
9	har	ha	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	ccomp	5:ccomp	_
10	färre	få	ADJ	JJ|KOM|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Cmp	11	amod	11:amod	_
11	kilometrar	kilometer	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	12	nmod	12:nmod	_
12	tunnelbana	tunnelbana	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	9	obj	9:obj	_
13	än	än	ADP	KN	_	14	case	14:case	_
14	Madrid	Madrid	PROPN	PM|NOM	Case=Nom	10	obl	10:obl:än	SpaceAfter=No
15	.	.	PUNCT	MAD	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 iobj	color:blue
1	I	i	ADP	PP	_	2	case	2:case	_
2	nuläget	nuläge	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	6	obl	6:obl:i	_
3	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
4	den	den	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|PronType=Art	6	det	6:det	_
5	högsta	hög	ADJ	JJ|SUV|UTR/NEU|SIN/PLU|DEF|NOM	Case=Nom|Definite=Def|Degree=Sup	6	amod	6:amod	_
6	bot	bot	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	0:root|10:obl	_
7	som	som	PRON	HP|-|-|-	PronType=Int,Rel	10	obj	6:ref	_
8	RECO	RECO	PROPN	PM|NOM	Case=Nom	10	nsubj	10:nsubj	_
9	kan	kunna	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	10:aux	_
10	ålägga	ålägga	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	6	acl:relcl	6:acl:relcl	_
11	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing	12	det	12:det	_
12	mäklare	mäklare	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	10	iobj	10:iobj	_
13	25 000	25 000	NUM	RG|NOM	Case=Nom	14	nummod	14:nummod	_
14	dollar	dollar	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	6	nsubj	6:nsubj	SpaceAfter=No
15	.	.	PUNCT	MAD	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 iobj	color:blue
1	Tidigare	tidigt	ADV	AB|KOM	Degree=Cmp	4	advmod	4:advmod	_
2	i	i	ADP	PP	_	1	advmod	1:advmod	_
3	år	år	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	2	fixed	2:fixed	_
4	gavs	ge	VERB	VB|PRT|SFO	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	0:root	_
5	Seagal	Seagal	PROPN	PM|NOM	Case=Nom	4	iobj	4:iobj	_
6	serbiskt	serbisk	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	7	amod	7:amod	_
7	medborgarskap	medborgarskap	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	4	nsubj:pass	4:nsubj:pass	_
8	efter	efter	ADP	PP	_	11	mark	11:mark	_
9	att	att	PART	IE	_	11	mark	11:mark	_
10	ha	ha	AUX	VB|INF|AKT	VerbForm=Inf|Voice=Act	11	aux	11:aux	_
11	erbjudit	erbjuda	VERB	VB|SUP|AKT	VerbForm=Sup|Voice=Act	4	advcl	4:advcl:att	_
12	att	att	PART	IE	_	13	mark	13:mark	_
13	starta	starta	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	11	xcomp	11:xcomp	_
14	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing	15	det	15:det	_
15	kampsportsskola	kampsportsskola	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	13	obj	13:obj	_
16	i	i	ADP	PP	_	18	case	18:case	_
17	huvudstaden	huvudstad	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	18	nmod	18:nmod	_
18	Belgrad	Belgrad	PROPN	PM|NOM	Case=Nom	13	obl	13:obl:i	SpaceAfter=No
19	.	.	PUNCT	MAD	_	4	punct	4:punct	_

~~~


