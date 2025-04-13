---
layout: base
title:  'Statistics of ccomp in UD_Albanian-STAF'
udver: '2'
---

## Treebank Statistics: UD_Albanian-STAF: Relations: `ccomp`

This relation is universal.

57 nodes (2%) are attached to their parents as `ccomp`.

56 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.87719298245614.

The following 6 pairs of parts of speech are connected with `ccomp`: <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-VERB.html">VERB</a></tt> (43; 75% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (6; 11% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-VERB.html">VERB</a></tt> (3; 5% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-PRON.html">PRON</a></tt> (2; 4% instances), <tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_staf-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp	color:blue
1	Kur	kur	SCONJ	_	_	3	mark	_	end_char=476|start_char=473
2	nuk	nuk	PART	_	_	3	advmod	_	end_char=480|start_char=477
3	ke	kam	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	8	advcl	_	end_char=483|start_char=481
4	se	se	SCONJ	_	_	6	mark	_	end_char=486|start_char=484
5	ç'	ç'	PRON	_	PronType=Int	6	obj	_	end_char=492|SpaceAfter=No|start_char=487
6	bën	bëj	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	ccomp	_	end_char=492|SpaceAfter=No|start_char=487
7	,	,	PUNCT	_	_	3	punct	_	end_char=493|start_char=492
8	merresh	marr	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Mid	0	root	_	end_char=501|start_char=494
9	me	me	ADP	_	_	10	case	_	end_char=504|start_char=502
10	thashetheme	thashethem	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Plur	8	obl	_	end_char=516|start_char=505
11	grash	grash	NOUN	_	Case=Abl|Definite=Ind|Gender=Fem|Number=Plur	10	nmod	_	end_char=522|SpaceAfter=No|start_char=517
12	.	.	PUNCT	_	_	8	punct	_	end_char=523|start_char=522

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 16 ccomp	color:blue
1	Për	për	PART	_	_	3	mark	_	end_char=2450|start_char=2447
2	të	të	PART	_	_	3	mark	_	end_char=2453|start_char=2451
3	shmangur	shmangoj	VERB	_	VerbForm=Part	11	advcl	_	end_char=2462|start_char=2454
4	një	një	DET	_	Definite=Ind	5	det	_	end_char=2466|start_char=2463
5	ngatërresë	ngatërre	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	3	obj	_	end_char=2477|start_char=2467
6	të	të	DET	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Art	7	det:adj	_	end_char=2480|start_char=2478
7	mundshme	mundshëm	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	end_char=2489|start_char=2481
8	kohësh	kohë	NOUN	_	Case=Abl|Definite=Ind|Gender=Fem|Number=Sing	5	nmod	_	end_char=2496|SpaceAfter=No|start_char=2490
9	,	,	PUNCT	_	_	3	punct	_	end_char=2497|start_char=2496
10	po	po	PART	_	_	11	mark	_	end_char=2500|start_char=2498
11	them	them	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	0	root	_	end_char=2505|SpaceAfter=No|start_char=2501
12	:	:	PUNCT	_	_	11	punct	_	end_char=2506|start_char=2505
13	ishte	jam	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	16	cop	_	end_char=2512|start_char=2507
14	dhe	dhe	CCONJ	_	_	15	cc	_	end_char=2516|start_char=2513
15	është	jam	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	13	conj	_	end_char=2522|start_char=2517
16	shtëpia	shtëpi	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	11	ccomp	_	end_char=2530|start_char=2523
17	e	e	PART	_	_	18	case	_	_
18	timeti	timeti	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	16	det:poss	_	end_char=2536|SpaceAfter=No|start_char=2533
19	.	.	PUNCT	_	_	11	punct	_	end_char=2541|start_char=2540

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 ccomp	color:blue
1	Më	unë	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	3	iobj	_	end_char=159|start_char=157
2	vjen	vij	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	end_char=164|start_char=160
3	keq	keq	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	nsubj	_	end_char=168|SpaceAfter=No|start_char=165
4	,	,	PUNCT	_	_	2	punct	_	end_char=169|start_char=168
5	qëllimi	qëllim	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	parataxis	_	end_char=177|start_char=170
6	im	im	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=1|Poss=Yes|PronType=Prs	5	nmod:poss	_	end_char=180|start_char=178
7	nuk	nuk	PART	_	Polarity=Neg	5	advmod	_	end_char=184|start_char=181
8	është	jam	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	5	cop	_	end_char=190|start_char=185
9	të	të	PART	_	_	10	mark	_	end_char=193|start_char=191
10	mërzis	mërz	VERB	_	Mood=Sub|Number=Sing|Person=1|Tense=Pres|Voice=Act	5	ccomp	_	end_char=200|start_char=194
11	askënd	askënd	PRON	_	PronType=Ind	10	obj	_	end_char=207|SpaceAfter=No|start_char=201
12	.	.	PUNCT	_	_	2	punct	_	end_char=208|start_char=207

~~~


