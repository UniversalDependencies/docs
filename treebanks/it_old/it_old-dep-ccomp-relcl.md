---
layout: base
title:  'Statistics of ccomp:relcl in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `ccomp:relcl`

This relation is a language-specific subtype of <tt><a href="it_old-dep-ccomp.html">ccomp</a></tt>.
There are also 1 other language-specific subtypes of `ccomp`: <tt><a href="it_old-dep-ccomp-reported.html">ccomp:reported</a></tt>.

15 nodes (0%) are attached to their parents as `ccomp:relcl`.

15 instances of `ccomp:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.33333333333333.

The following 4 pairs of parts of speech are connected with `ccomp:relcl`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (11; 73% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (2; 13% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (1; 7% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp:relcl	color:blue
1	Caina	Caina	PROPN	np	_	2	nsubj	_	Canto=5|Verso=107
2	attende	attendere	VERB	vta2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Canto=5|Verso=107
3	chi	chi	PRON	pr	PronType=Rel	7	nsubj	_	Canto=5|Verso=107
4	a	a	ADP	epsk1d	_	5	case	_	Canto=5|Verso=107
5	vita	vita	NOUN	sf1fs	Gender=Fem|Number=Sing	7	obl	_	Canto=5|Verso=107
6	ci	ci	PRON	pp1pyac	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	7	obj	_	Canto=5|Verso=107
7	spense	spegnere	VERB	vta2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	ccomp:relcl	_	Canto=5|SpaceAfter=No|Verso=107
8	»	»	PUNCT	_	_	2	punct	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 ccomp:relcl	color:blue
1	Di	di	ADP	_	_	2	case	_	Canto=14|Verso=19
2	sovr'	sopra	ADV	_	_	3	advmod	_	Canto=14|Verso=19
3	esso	esso	PRON	pp3mslco	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	obl:lmod	_	Canto=14|Verso=19
4	rech'	recare	VERB	vta1ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Canto=14|Verso=19
5	io	io	PRON	pp1slso	Person=1|Poss=Yes|PronType=Prs	4	nsubj	_	Canto=14|Verso=19
6	questa	questo	DET	ad1fs	Gender=Fem|Number=Sing|PronType=Dem	7	det	_	Canto=14|Verso=19
7	persona	persona	NOUN	sf1fs	Gender=Fem|Number=Sing	4	obj	_	Canto=14|SpaceAfter=No|Verso=19
8	:	:	PUNCT	_	_	16	punct	_	_
9	dire	dire	VERB	vta3fp	Tense=Pres|VerbForm=Inf|Voice=Act	16	csubj	_	Canto=14|Verso=20
10	vi	vi	PRON	pp2sxda	Clitic=Yes|Person=2|Poss=Yes|PronType=Prs	9	iobj	_	Canto=14|Verso=20
11	ch'	chi	PRON	pt	PronType=Rel	12	nsubj	_	Canto=14|Verso=20
12	i'	io	PRON	pp1slso	Person=1|Poss=Yes|PronType=Prs	9	ccomp:relcl	_	Canto=14|Verso=20
13	sia	essere	AUX	vi4cps1	Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	12	cop	_	Canto=14|SpaceAfter=No|Verso=20
14	,	,	PUNCT	_	_	16	punct	_	_
15	saria	essere	AUX	vi4dps3	Mood=Cnd|Number=Sing|Person=3|Tense=Pres	16	aux	_	Canto=14|Verso=20
16	parlare	parlare	VERB	vi1fp	Tense=Pres|VerbForm=Inf	4	parataxis	_	Canto=14|Verso=20
17	indarno	indarno	ADV	b	_	16	advmod	_	Canto=14|SpaceAfter=No|Verso=20
18	,	,	PUNCT	_	_	26	punct	_	_
19	ché	ché	SCONJ	cssc	_	26	mark	_	Canto=14|Verso=21
20	'l	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	Canto=14|Verso=21
21	nome	nome	NOUN	sm3ms	Gender=Masc|Number=Sing	26	nsubj	_	Canto=14|Verso=21
22	mio	mio	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	21	det:poss	_	Canto=14|Verso=21
23	ancor	ancora	ADV	b	_	26	advmod	_	Canto=14|Verso=21
24	molto	molto	ADV	b	_	26	advmod	_	Canto=14|Verso=21
25	non	non	ADV	b	PronType=Neg	26	advmod:neg	_	Canto=14|Verso=21
26	suona	suonare	VERB	vi1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	advcl	_	Canto=14|SpaceAfter=No|Verso=21
27	»	»	PUNCT	_	_	4	punct	_	SpaceAfter=No
28	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 ccomp:relcl	color:blue
1	Per	per	ADP	epskr	_	2	case	_	Canto=23|Verso=115
2	ch'	che	PRON	pr	PronType=Rel	3	obl	_	Canto=23|Verso=115
3	io	io	PRON	pp1slso	Person=1|Poss=Yes|PronType=Prs	0	root	_	Canto=23|Verso=115
4	a	a	ADP	epsk1d	_	5	case	_	Canto=23|Verso=115
5	lui	lui	PRON	pp3mslco	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	orphan	_	Canto=23|SpaceAfter=No|Verso=115
6	:	:	PUNCT	_	_	10	punct	_	_
7	«	«	PUNCT	_	_	10	punct	_	SpaceAfter=No
8	Se	se	SCONJ	cssv	_	10	mark	_	Canto=23|Verso=115
9	tu	tu	PRON	pp2slso	Person=2|Poss=Yes|PronType=Prs	10	nsubj	_	Canto=23|Verso=115
10	riduci	ridurre	VERB	vta2ips2	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	27	advcl	_	Canto=23|Verso=115
11	a	a	ADP	epskml	_	12	case	_	Canto=23|Verso=115
12	mente	mente	NOUN	sf3fs	Gender=Fem|Number=Sing	10	obl:lmod	_	Canto=23|Verso=115
13	qual	quale	DET	at2ms	Number=Sing|PronType=Int	10	ccomp:relcl	_	Canto=23|Verso=116
14	fosti	essere	AUX	vi4irs2	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	13	cop	_	Canto=23|Verso=116
15	me	me	PRON	_	Number=Sing|Person=1|PronType=Prs	13	obl	_	Canto=23|Comment=me-co|Verso=116
16	con	con	ADP	_	Clitic=Yes	15	case	_	Canto=23|Comment=me-co|Verso=116
17	,	,	PUNCT	_	_	19	punct	_	_
18	e	e	CCONJ	cscc	_	19	cc	_	Canto=23|Verso=116
19	qual	quale	DET	at2ms	Number=Sing|PronType=Int	13	conj	_	Canto=23|Verso=116
20	io	io	PRON	pp1slso	Person=1|Poss=Yes|PronType=Prs	19	nsubj	_	Canto=23|Verso=116
21	te	te	PRON	_	Number=Sing|Person=2|PronType=Prs	19	obl	_	Canto=23|Comment=te-co|Verso=116
22	con	con	ADP	_	Clitic=Yes	21	case	_	Canto=23|Comment=te-co|Verso=116
23	fui	essere	AUX	vi4irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	19	cop	_	Canto=23|SpaceAfter=No|Verso=116
24	,	,	PUNCT	_	_	27	punct	_	_
25	ancor	ancora	ADV	b	_	27	advmod	_	Canto=23|Verso=117
26	fia	essere	AUX	vi4ifs3	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	27	cop	_	Canto=23|Verso=117
27	grave	grave	ADJ	a2ms	Gender=Masc|Number=Sing	3	ccomp:reported	_	Canto=23|Verso=117
28	il	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	29	det	_	Canto=23|Verso=117
29	memorar	memorare	VERB	vta1fpsm3ms	Tense=Pres|VerbForm=Inf|Voice=Act	27	nsubj	_	Canto=23|Verso=117
30	presente	presente	ADJ	a2ms	Gender=Masc|Number=Sing	29	amod	_	Canto=23|SpaceAfter=No|Verso=117
31	.	.	PUNCT	_	_	27	punct	_	_

~~~


