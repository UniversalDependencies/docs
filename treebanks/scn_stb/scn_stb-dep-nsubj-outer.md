---
layout: base
title:  'Statistics of nsubj:outer in UD_Sicilian-STB'
udver: '2'
---

## Treebank Statistics: UD_Sicilian-STB: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="scn_stb-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="scn_stb-dep-nsubj-pass.html">nsubj:pass</a></tt>.

5 nodes (0%) are attached to their parents as `nsubj:outer`.

3 instances of `nsubj:outer` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.6.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="scn_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="scn_stb-pos-PRON.html">PRON</a></tt> (4; 80% instances), <tt><a href="scn_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="scn_stb-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 20 nsubj:outer	color:blue
1	—	—	PUNCT	FF	_	5	punct	_	SpaceAfter=No|TokenRange=4125:4126
2	"	"	PUNCT	FB	_	5	punct	_	SpaceAfter=No|TokenRange=4126:4127
3	Cola	Cola	PROPN	SP	_	5	vocative	_	SpaceAfter=No|TokenRange=4127:4131
4	,	,	PUNCT	FF	_	3	punct	_	TokenRange=4131:4132
5	fal	fari	VERB	V	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	TokenRange=4133:4138
6	lu	lu	PRON	PC	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obj	_	Clitic=Yes|TokenRange=4133:4138
7	pri	pri	ADP	E	_	8	case	_	TokenRange=4139:4142
8	carità	carità	NOUN	S	Gender=Fem	5	nmod	_	SpaceAfter=No|TokenRange=4143:4149
9	,	,	PUNCT	FF	_	5	punct	_	TokenRange=4149:4150
10	picchì	picchì	SCONJ	CS	_	19	mark	_	TokenRange=4151:4157
11	'n'	unu	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	13	det	_	SpaceAfter=No|TokenRange=4158:4161
12	àutra	àutru	ADJ	A	Gender=Fem|Number=Sing	13	amod	_	TokenRange=4161:4166
13	curuna	curuna	NOUN	S	Gender=Fem|Number=Sing	19	nsubj	_	TokenRange=4167:4173
14	simuli	simuli	ADJ	A	Number=Sing	13	amod	_	TokenRange=4174:4180
15	nun	nun	ADV	BN	PronType=Neg	19	advmod	_	TokenRange=4181:4184
16	mi	mi	PRON	PC	Number=Sing|Person=1|PronType=Prs	19	iobj	_	Clitic=Yes|TokenRange=4185:4187
17	la	la	PRON	PC	Gender=Fem|Number=Sing|Person=3|PronType=Prs	19	obj	_	Clitic=Yes|TokenRange=4188:4190
18	pò	putiri	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	aux	_	TokenRange=4191:4194
19	fari	fari	VERB	V	VerbForm=Inf	5	advcl	_	TokenRange=4195:4199
20	nuddu	nuddu	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	19	nsubj:outer	_	SpaceAfter=No|TokenRange=4200:4207
21	"	"	PUNCT	FB	_	5	punct	_	SpaceAfter=No|TokenRange=4207:4208
22	.	.	PUNCT	FS	_	5	punct	_	TokenRange=4208:4209

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 nsubj:outer	color:blue
1	Picchì	picchì	SCONJ	CS	_	2	mark	_	TokenRange=2324:2330
2	una	unu	PRON	PI	Gender=Fem|Number=Sing|PronType=Ind	12	nsubj	_	TokenRange=2331:2334
3	ca	ca	PRON	PR	PronType=Rel	4	nsubj	_	TokenRange=2335:2338
4	pari	pariri	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	_	TokenRange=2339:2345
5	un	unu	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	TokenRange=2346:2348
6	catàvaru	catàvaru	NOUN	S	Gender=Masc|Number=Sing	4	xcomp	_	TokenRange=2349:2357
7	a	lu	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	TokenRange=2359:2361
8	prima	primu	ADJ	NO	Gender=Fem|Number=Sing|NumType=Ord	9	amod	_	TokenRange=2362:2367
9	cosa	cosa	NOUN	S	Gender=Fem|Number=Sing	4	nsubj:outer	_	TokenRange=2373:2370
10	ca	ca	PRON	PR	PronType=Rel	12	nsubj:outer	_	TokenRange=2373:2376
11	penza	pinzari	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	acl:relcl	_	TokenRange=2377:2382
12	è	essiri	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	TokenRange=2383:2384
13	jiri	jiri	VERB	V	VerbForm=Inf	12	ccomp	_	_
14	si	si	PRON	PC	Person=3|PronType=Prs	13	expl	_	Clitic=Yes
15	nni	ni	PRON	PC	PronType=Prs	13	expl	_	Clitic=Yes
16	a	a	ADP	E	_	18	case	_	_
17	li	lu	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	18	det	_	_
18	festi	festa	NOUN	S	Gender=Fem|Number=Plur	13	obl	_	TokenRange=2400:2405
19	di	di	ADP	E	_	20	case	_	TokenRange=2406:2408
20	pajisi	pajisi	NOUN	S	Gender=Masc|Number=Sing	18	nmod	_	SpaceAfter=No|TokenRange=2409:2414
21	,	,	PUNCT	FF	_	13	punct	_	TokenRange=2414:2415
22	lòggicu	lòggicu	ADJ	A	Gender=Masc|Number=Sing	13	amod	_	SpaceAfter=No|TokenRange=2416:2422
23	.	.	PUNCT	FS	_	12	punct	_	TokenRange=2422:2423

~~~


