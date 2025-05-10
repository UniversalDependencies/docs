---
layout: base
title:  'Statistics of nsubj:outer in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="sv_talbanken-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="sv_talbanken-dep-nsubj-pass.html">nsubj:pass</a></tt>.

33 nodes (0%) are attached to their parents as `nsubj:outer`.

33 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.93939393939394.

The following 6 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (22; 67% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt> (6; 18% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (2; 6% instances), <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:outer	color:blue
1	Genvägen	genväg	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	4	nsubj:outer	4:nsubj:outer	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
3	att	att	PART	IE	_	4	mark	4:mark	_
4	utnyttja	utnyttja	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	0:root	_
5	modern	modern	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	6	amod	6:amod	_
6	vetenskap	vetenskap	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	obj	4:obj	_
7	och	och	CCONJ	KN	_	8	cc	8:cc	_
8	teknik	teknik	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	conj	4:obj|6:conj:och	SpaceAfter=No
9	.	.	PUNCT	MAD	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 nsubj:outer	color:blue
1	Men	men	CCONJ	KN	_	8	cc	8:cc	_
2	ett	en	PRON	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Prs	10	nsubj:outer	10:nsubj:outer	_
3	av	av	ADP	PP	_	6	case	6:case	_
4	psykologins	psykologi	NOUN	NN|UTR|SIN|DEF|GEN	Case=Gen|Definite=Def|Gender=Com|Number=Sing	6	nmod:poss	6:nmod:poss	_
5	främsta	främst	ADJ	JJ|SUV|UTR/NEU|SIN/PLU|DEF|NOM	Case=Nom|Definite=Def|Degree=Sup	6	amod	6:amod	_
6	mål	mål	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	2	nmod	2:nmod:av	_
7	bör	böra	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	10:aux	_
8	vara	vara	AUX	VB|INF|AKT	VerbForm=Inf|Voice=Act	10	cop	10:cop	_
9	att	att	PART	IE	_	10	mark	10:mark	_
10	ta	ta	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	0:root	_
11	hänsyn	hänsyn	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	10	obj	10:obj	_
12	till	till	ADP	PP	_	13	case	13:case	_
13	minoriteter	minoritet	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	10	obl	10:obl:till	SpaceAfter=No
14	.	.	PUNCT	MAD	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 2 nsubj:outer	color:blue
1	Det	den	DET	DT|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing|PronType=Art	2	det	2:det	_
2	enda	enda	ADJ	JJ|POS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Pos	12	nsubj:outer	12:nsubj:outer	_
3	man	man	PRON	PN|UTR|SIN|IND|SUB	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	5	nsubj	5:nsubj	_
4	kan	kunna	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	5:aux	_
5	säga	säga	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	2	acl:relcl	2:acl:relcl	_
6	med	med	ADP	PP	_	7	case	7:case	_
7	säkerhet	säkerhet	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	obl	5:obl:med	_
8	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	12:cop	_
9	att	att	SCONJ	SN	_	12	mark	12:mark	_
10	u-länderna	u-land	NOUN	NN|NEU|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Plur	12	nsubj:pass	12:nsubj:pass	_
11	blir	bli	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	12	aux:pass	12:aux:pass	_
12	utestängda	utestängd	VERB	PC|PRF|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
13	från	från	ADP	PP	_	16	case	16:case	_
14	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	16	det	16:det	_
15	sådan	sådan	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	16	amod	16:amod	_
16	värld	värld	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	12	obl	12:obl:från	_
17	och	och	CCONJ	KN	_	25	cc	25:cc	_
18	att	att	SCONJ	SN	_	25	mark	25:mark	_
19	klyftan	klyfta	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	25	nsubj	25:nsubj|26:nsubj|28:nsubj	_
20	mellan	mellan	ADP	PP	_	21	case	21:case	_
21	fattiga	fattig	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	19	nmod	19:nmod:mellan	_
22	och	och	CCONJ	KN	_	23	cc	23:cc	_
23	rika	rik	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	21	conj	19:nmod:mellan|21:conj:och	_
24	bara	bara	ADV	AB	_	25	advmod	25:advmod	_
25	blir	bli	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	12	conj	8:ccomp|12:conj:och	_
26	större	stor	ADJ	JJ|KOM|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Cmp	25	xcomp	25:xcomp	_
27	och	och	CCONJ	KN	_	28	cc	28:cc	_
28	större	stor	ADJ	JJ|KOM|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Cmp	26	conj	25:xcomp|26:conj:och	SpaceAfter=No
29	.	.	PUNCT	MAD	_	12	punct	12:punct	_

~~~


