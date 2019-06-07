---
layout: base
title:  'Statistics of nsubj:pass in UD_Galician-TreeGal'
udver: '2'
---

## Treebank Statistics: UD_Galician-TreeGal: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="gl_treegal-dep-nsubj.html">nsubj</a></tt>.

25 nodes (0%) are attached to their parents as `nsubj:pass`.

25 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.16.

The following 4 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt> (11; 44% instances), <tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_treegal-pos-PRON.html">PRON</a></tt> (9; 36% instances), <tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt> (4; 16% instances), <tt><a href="gl_treegal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 18 nsubj:pass	color:blue
1	O	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
2	ex	ex	ADJ	A0ms	Gender=Masc|Number=Sing	3	amod	_	_
3	sindicalista	sindicalista	NOUN	Scms	Gender=Masc|Number=Sing	13	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	Q,	_	3	punct	_	_
5	hoxe	hoxe	ADV	Wn	_	8	advmod	_	_
6	con	con	ADP	P	AdpType=Prep	8	case	_	_
7	escaso	escaso	ADJ	A0ms	Gender=Masc|Number=Sing	8	amod	_	_
8	predicamento	predicamento	NOUN	Scms	Gender=Masc|Number=Sing	3	nmod	_	_
9	en	en	ADP	P	AdpType=Prep	11	case	_	_
10	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	país	país	NOUN	Scms	Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
12	,	,	PUNCT	Q,	_	3	punct	_	_
13	logrou	lograr	VERB	Vei30s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
14	non	non	ADV	Wn	_	13	advmod	_	_
15	obstante	obstante	ADJ	A0as	Gender=Com	14	fixed	_	_
16	que	que	SCONJ	Cs	_	24	mark	_	_
17	esta	este	DET	Edfs	Gender=Fem|Number=Sing|PronType=Dem	18	det	_	_
18	opinión	opinión	NOUN	Scfs	Gender=Fem|Number=Sing	24	nsubj:pass	_	_
19	sobre	sobre	ADP	P	AdpType=Prep	21	case	_	_
20	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	emisora	emisora	NOUN	Scfs	Gender=Fem|Number=Sing	18	nmod	_	_
22	fose	ser	AUX	Ves30s	Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	24	aux:pass	_	_
23	moi	moito	ADV	Wm	_	24	advmod	_	_
24	comentada	comentar	VERB	V0p0fs	Gender=Fem|Number=Sing|VerbForm=Part	13	ccomp	_	SpaceAfter=No
25	.	.	PUNCT	Q.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 nsubj:pass	color:blue
1	Hai	haber	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	moitas	moito	DET	Idfp	Gender=Fem|Number=Plur|PronType=Ind	3	det	_	_
3	obras	obra	NOUN	Scfp	Gender=Fem|Number=Plur	1	obj	_	_
4	que	que	PRON	Tnfp	Gender=Fem|Number=Plur|PronType=Rel	8	nsubj:pass	_	_
5	aínda	aínda	ADV	Wn	_	8	advmod	_	_
6	non	non	ADV	Wn	Polarity=Neg	8	advmod	_	_
7	foron	ser	AUX	Vei30p	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	8	aux:pass	_	_
8	tocadas	tocar	VERB	V0p0fp	Gender=Fem|Number=Plur|VerbForm=Part	3	acl	_	SpaceAfter=No
9	,	,	PUNCT	Q,	_	15	punct	_	_
10	que	que	PRON	Tnfp	Gender=Fem|Number=Plur|PronType=Rel	16	obj	_	_
11	non	non	ADV	Wm	Polarity=Neg	12	advmod	_	_
12	todo	todo	DET	Idms	Gender=Masc|Number=Sing|PronType=Ind	14	det	_	_
13	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	mundo	mundo	NOUN	Scms	Gender=Masc|Number=Sing	15	nsubj	_	_
15	quere	querer	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	conj	_	_
16	facer	facer	VERB	V0f000	VerbForm=Inf	15	xcomp	_	SpaceAfter=No
17	.	.	PUNCT	Q.	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 14 nsubj:pass	color:blue
1	Cantos	canto	PRON	Gnmp	Gender=Masc|Number=Plur|PronType=Int	11	nsubj	_	_
2	de	de	ADP	P	AdpType=Prep	4	case	_	_
3	os	o	DET	Ddmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	4	det	_	_
4	espectadores	espectador	NOUN	Scmp	Gender=Masc|Number=Plur	1	nmod	_	_
5	que	que	PRON	Tnmp	Gender=Masc|Number=Plur|PronType=Rel	6	nsubj	_	_
6	vén	ver	VERB	Vpi30p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	acl	_	_
7	estes	este	DET	Edmp	Gender=Masc|Number=Plur|PronType=Dem	8	det	_	_
8	días	día	NOUN	Scmp	Gender=Masc|Number=Plur	6	obl	_	_
9	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	película	película	NOUN	Scfs	Gender=Fem|Number=Sing	6	obj	_	_
11	ignoraban	ignorar	VERB	Vii30p	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
12	que	que	SCONJ	Cs	_	17	mark	_	_
13	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	Berlín	Berlín	PROPN	Spms	Gender=Masc|Number=Sing	17	nsubj:pass	_	_
15	nazi	nazi	ADJ	A0ms	Gender=Masc|Number=Sing	14	amod	_	_
16	foi	ser	AUX	Vei30s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	17	aux:pass	_	_
17	tomado	tomar	VERB	V0p0ms	Gender=Masc|Number=Sing|VerbForm=Part	11	ccomp	_	_
18	por	por	ADP	P	AdpType=Prep	20	case	_	_
19	los	o	DET	Ddmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	20	det	_	_
20	soviéticos	soviético	NOUN	Scmp	Gender=Masc|Number=Plur	17	obl	_	_
21	e	e	CCONJ	Cc	_	25	cc	_	_
22	non	non	ADV	Wn	Polarity=Neg	25	advmod	_	_
23	por	por	ADP	P	AdpType=Prep	25	case	_	_
24	los	o	DET	Ddmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	25	det	_	_
25	norteamericanos	norteamericano	NOUN	Scmp	Gender=Masc|Number=Plur	20	conj	_	SpaceAfter=No
26	?	?	PUNCT	Q?	_	17	punct	_	_

~~~


