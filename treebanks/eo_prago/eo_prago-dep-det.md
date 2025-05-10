---
layout: base
title:  'Statistics of det in UD_Esperanto-Prago'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Prago: Relations: `det`

This relation is universal.

78 nodes (9%) are attached to their parents as `det`.

78 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35897435897436.

The following 3 pairs of parts of speech are connected with `det`: <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-DET.html">DET</a></tt> (72; 92% instances), <tt><a href="eo_prago-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eo_prago-pos-DET.html">DET</a></tt> (3; 4% instances), <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-PRON.html">PRON</a></tt> (3; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	Manifesto	manifesto	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
2	de	de	ADP	_	_	3	case	_	_
3	Prago	Prago	PROPN	_	Case=Nom|Number=Sing	1	nmod	_	_
4	de	de	ADP	_	_	6	case	_	_
5	la	la	DET	_	Definite=Def|PronType=Art	6	det	_	_
6	movado	movado	NOUN	_	Case=Nom|Number=Sing	3	nmod	_	_
7	por	por	ADP	_	_	10	case	_	_
8	la	la	DET	_	Definite=Def|PronType=Art	10	det	_	_
9	internacia	internacia	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	10	amod	_	_
10	lingvo	lingvo	NOUN	_	Case=Nom|Number=Sing	6	nmod	_	_
11	Esperanto	Esperanto	PROPN	_	Case=Nom|Number=Sing	10	appos	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det	color:blue
1	Ekzemple	ekzemple	ADV	_	_	9	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	9	punct	_	_
3	la	la	DET	_	Definite=Def|PronType=Art	4	det	_	_
4	lernejano	lernejano	NOUN	_	Case=Nom|Number=Sing	9	nsubj	_	_
5	kiu	kiu	PRON	_	Case=Nom|Number=Sing|PronType=Rel	6	nsubj	_	_
6	studas	studi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
7	la	la	DET	_	Definite=Def|PronType=Art	8	det	_	_
8	anglan	angla	ADJ	_	Case=Acc|Degree=Pos|Number=Sing	6	obj	_	_
9	lernas	lerni	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
10	pri	pri	ADP	_	_	12	case	_	_
11	la	la	DET	_	Definite=Def|PronType=Art	12	det	_	_
12	kulturo	kulturo	NOUN	_	Case=Nom|Number=Sing	9	obl	_	SpaceAfter=No
13	,	,	PUNCT	_	_	14	punct	_	_
14	geografio	geografio	NOUN	_	Case=Nom|Number=Sing	12	conj	_	_
15	kaj	kaj	CCONJ	_	_	16	cc	_	_
16	politiko	politiko	NOUN	_	Case=Nom|Number=Sing	14	conj	_	_
17	de	de	ADP	_	_	20	case	_	_
18	la	la	DET	_	Definite=Def|PronType=Art	20	det	_	_
19	anglalingvaj	anglalingva	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	20	amod	_	_
20	landoj	lando	NOUN	_	Case=Nom|Number=Plur	16	nmod	_	SpaceAfter=No
21	,	,	PUNCT	_	_	22	punct	_	_
22	precipe	precipe	ADV	_	_	20	advmod	_	_
23	Usono	Usono	NOUN	_	Case=Nom|Number=Sing	22	nmod	_	_
24	kaj	kaj	CCONJ	_	_	25	cc	_	_
25	Britio	Britio	NOUN	_	Case=Nom|Number=Sing	23	conj	_	SpaceAfter=No
26	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
1	Ĉiu	ĉiu	DET	_	Case=Nom|Number=Sing|PronType=Tot	2	det	_	_
2	lingvo	lingvo	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	_
3	liberigas	liberigi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	kaj	kaj	CCONJ	_	_	5	cc	_	_
5	malliberigas	malliberigi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	conj	_	_
6	siajn	sia	PRON	_	Case=Acc|Number=Plur|PronType=Prs|Reflex=Yes	7	det	_	_
7	anojn	ano	NOUN	_	Case=Acc|Number=Plur	5	obj	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	donante	doni	VERB	_	Tense=Pres|VerbForm=Part|Voice=Act	3	advcl	_	_
10	al	al	ADP	_	_	11	case	_	_
11	ili	ili	PRON	_	Case=Nom|Number=Plur|PronType=Prs	9	obl	_	_
12	la	la	DET	_	Definite=Def|PronType=Art	13	det	_	_
13	povon	povo	NOUN	_	Case=Acc|Number=Sing	9	obj	_	_
14	komuniki	komuniki	VERB	_	VerbForm=Inf	13	acl	_	_
15	inter	inter	ADP	_	_	16	case	_	_
16	si	si	PRON	_	Case=Nom|Number=Sing|PronType=Prs|Reflex=Yes	14	obl	_	SpaceAfter=No
17	,	,	PUNCT	_	_	18	punct	_	_
18	barante	bari	VERB	_	Tense=Pres|VerbForm=Part|Voice=Act	3	advcl	_	_
19	la	la	DET	_	Definite=Def|PronType=Art	20	det	_	_
20	komunikadon	komunikado	NOUN	_	Case=Acc|Number=Sing	18	obj	_	_
21	kun	kun	ADP	_	_	22	case	_	_
22	aliaj	alia	PRON	_	Case=Nom|Number=Plur|PronType=Prs	20	nmod	_	SpaceAfter=No
23	.	.	PUNCT	_	_	3	punct	_	_

~~~


