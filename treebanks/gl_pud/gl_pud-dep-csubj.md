---
layout: base
title:  'Statistics of csubj in UD_Galician-PUD'
udver: '2'
---

## Treebank Statistics: UD_Galician-PUD: Relations: `csubj`

This relation is universal.

32 nodes (0%) are attached to their parents as `csubj`.

23 instances of `csubj` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.3125.

The following 8 pairs of parts of speech are connected with `csubj`: <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-VERB.html">VERB</a></tt> (15; 47% instances), <tt><a href="gl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_pud-pos-VERB.html">VERB</a></tt> (7; 22% instances), <tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_pud-pos-VERB.html">VERB</a></tt> (4; 13% instances), <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="gl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_pud-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="gl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="gl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="gl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="gl_pud-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 csubj	color:blue
1	En	en	ADP	SP	AdpType=Prep	3	case	_	_
2	este	este	DET	DD0MS0	Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	contexto	contexto	NOUN	NCMS000	Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
4	,	,	PUNCT	Fc	_	3	punct	_	_
5	ten	ter	VERB	VMIP3S0	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
6	sentido	sentido	NOUN	NCMS000	Gender=Masc|Number=Sing	5	obj	_	_
7	mobilizar	mobilizar	VERB	VMN0000	VerbForm=Inf	5	csubj	_	SpaceAfter=No
8	se	se	PRON	PP3CN000	Gender=Com|Person=3|PronType=Prs	7	expl	_	_
9	contra	contra	ADP	SP	AdpType=Prep	11	case	_	_
10	a	o	DET	DA0FS0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	industria	industria	NOUN	NCFS000	Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
12	.	.	PUNCT	Fp	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 csubj	color:blue
1	É	ser	AUX	VSIP3S0	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	cop	_	_
2	xusto	xusto	ADJ	AQ0MS	_	0	root	_	_
3	dicir	dicir	VERB	VMN0000	VerbForm=Inf	2	csubj	_	_
4	que	que	SCONJ	CS	_	7	mark	_	_
5	Rocco	rocco	PROPN	NP00000	_	7	nsubj	_	_
6	Catalano	catalano	PROPN	NP00000	_	5	flat:name	_	_
7	traballa	traballar	VERB	VMIP3S0	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	ccomp	_	SpaceAfter=No
8	,	,	PUNCT	Fc	_	9	punct	_	_
9	vive	vivir	VERB	VMIP3S0	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	conj	_	_
10	e	e	CCONJ	CC	_	11	cc	_	_
11	respira	respirar	VERB	VMIP3S0	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	conj	_	_
12	a	a	ADP	SP	AdpType=Prep	14	case	_	_
13	o	o	DET	DA0MS0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	estilo	estilo	NOUN	NCMS000	Gender=Masc|Number=Sing	11	obl	_	_
15	retro	retro	NOUN	NCMS000	Gender=Masc|Number=Sing	14	nmod	_	SpaceAfter=No
16	.	.	PUNCT	Fp	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	O	o	DET	DA0MS0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
2	seu	seu	DET	DP3MS0	Definite=Def|Gender=Masc|Number=Sing|Person=3|Poss=Yes	3	det	_	_
3	soño	soño	NOUN	NCMS000	Gender=Masc|Number=Sing	0	root	_	_
4	é	ser	AUX	VSIP3S0	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	cop	_	_
5	terminar	terminar	VERB	VMN0000	VerbForm=Inf	3	csubj	_	_
6	aquí	aquí	ADV	RG	_	5	advmod	_	_
7	a	o	DET	DA0FS0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
8	súa	seu	DET	DP3FS0	Definite=Def|Gender=Fem|Number=Sing|Person=3|Poss=Yes	9	det	_	_
9	carreira	carreira	NOUN	NCFS000	Gender=Fem|Number=Sing	5	obj	_	_
10	profesional	profesional	ADJ	AQ0CS	_	9	amod	_	SpaceAfter=No
11	.	.	PUNCT	Fp	_	3	punct	_	_

~~~


