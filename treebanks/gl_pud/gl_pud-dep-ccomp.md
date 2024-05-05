---
layout: base
title:  'Statistics of ccomp in UD_Galician-PUD'
udver: '2'
---

## Treebank Statistics: UD_Galician-PUD: Relations: `ccomp`

This relation is universal.

184 nodes (1%) are attached to their parents as `ccomp`.

182 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.93478260869565.

The following 10 pairs of parts of speech are connected with `ccomp`: <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-VERB.html">VERB</a></tt> (146; 79% instances), <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt> (16; 9% instances), <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-ADJ.html">ADJ</a></tt> (9; 5% instances), <tt><a href="gl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_pud-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_pud-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="gl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp	color:blue
1	Isto	isto	PRON	PD0CN000	Gender=Neut|PronType=Dem	6	nsubj	_	_
2	non	non	ADV	RN	Polarity=Neg	6	advmod	_	_
3	é	ser	VERB	VSIP3S0	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	o	o	DET	DA0MS0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	que	que	PRON	PR0CN000	Gender=Neut|PronType=Rel	6	obj	_	_
6	precisamos	precisar	VERB	VMIP1P0	Mood=Ind|Number=Plur|Person=1|Tense=Pres	3	ccomp	_	_
7	en	en	ADP	SP	AdpType=Prep	10	case	_	_
8	o	o	DET	DA0MS0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
9	noso	noso	DET	DP1MSP	Gender=Masc|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes	10	det	_	_
10	país	país	NOUN	NCMS000	Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
11	,	,	PUNCT	Fc	_	12	punct	_	_
12	amigos	amigo	NOUN	NCMP000	Gender=Masc|Number=Plur	10	vocative	_	SpaceAfter=No
13	.	.	PUNCT	Fp	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 ccomp	color:blue
1	Non	non	ADV	RN	Polarity=Neg	2	advmod	_	_
2	digo	dicir	VERB	VMIP1S0	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
3	a	a	ADP	SP	AdpType=Prep	2	advmod	_	_
4	a	o	DET	DA0FS0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	fixed	_	_
5	lixeira	lixeiro	ADJ	AQ0FS	_	3	fixed	_	_
6	que	que	PRON	PR0CN000	Gender=Neut|PronType=Rel	9	nsubj	_	_
7	é	ser	AUX	VSIP3S0	Mood=Ind|Number=Sing|Person=3|Tense=Pres	9	cop	_	_
8	unha	un	DET	DI0FS0	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	besta	besta	NOUN	NCFS000	Gender=Fem|Number=Sing	2	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	Fp	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 ccomp	color:blue
1	Tes	ter	AUX	VMIP2S0	Mood=Ind|Number=Sing|Person=2|Tense=Pres	3	aux	_	_
2	que	que	ADP	SP	AdpType=Prep	1	fixed	_	_
3	facer	facer	VERB	VMN0000	VerbForm=Inf	0	root	_	SpaceAfter=No
4	lle	lle	PRON	PP3CSD00	Case=Dat|Gender=Com|Number=Sing|Person=3|PronType=Prs	3	iobj	_	_
5	fronte	fronte	NOUN	NCFS000	Gender=Fem|Number=Sing	3	obj	_	SpaceAfter=No
6	,	,	PUNCT	Fc	_	8	punct	_	_
7	eu	eu	PRON	PP1CSN00	Case=Nom|Gender=Com|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
8	prefiría	prefiría	VERB	VMIC3S0	Mood=Cnd,Ind|Number=Sing|Person=3	3	parataxis	_	_
9	que	que	SCONJ	CS	_	13	mark	_	_
10	a	o	DET	DA0FS0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	xente	xente	NOUN	NCFS000	Gender=Fem|Number=Sing	13	nsubj	_	_
12	fose	ser	AUX	VSSI1S0	Mood=Sub|Number=Sing|Person=1|Tense=Imp	13	cop	_	_
13	directa	directo	ADJ	AQ0FS	_	8	ccomp	_	_
14	e	e	CCONJ	CC	_	17	cc	_	_
15	que	que	SCONJ	CS	_	17	mark	_	_
16	non	non	ADV	RN	Polarity=Neg	17	advmod	_	_
17	andivese	andar	VERB	VMSI3S0	Mood=Sub|Number=Sing|Person=3|Tense=Imp	13	conj	_	_
18	con	con	ADP	SP	AdpType=Prep	19	case	_	_
19	voltas	volta	NOUN	NCFP000	Gender=Fem|Number=Plur	17	obl	_	SpaceAfter=No
20	.	.	PUNCT	Fp	_	3	punct	_	_

~~~


