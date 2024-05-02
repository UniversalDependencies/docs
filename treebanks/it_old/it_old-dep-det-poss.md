---
layout: base
title:  'Statistics of det:poss in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="it_old-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="it_old-dep-det-predet.html">det:predet</a></tt>.

551 nodes (1%) are attached to their parents as `det:poss`.

410 instances of `det:poss` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.03992740471869.

The following 6 pairs of parts of speech are connected with `det:poss`: <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (513; 93% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (27; 5% instances), <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (8; 1% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det:poss	color:blue
1	Or	ora	ADV	b	_	2	nsubj	_	Canto=7|Verso=72
2	vo'	volere	VERB	vta2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Canto=7|Verso=72
3	che	che	SCONJ	csso	_	8	mark	_	Canto=7|Verso=72
4	tu	tu	PRON	pp2slso	Number=Sing|Person=2|PronType=Prs	8	nsubj	_	Canto=7|Verso=72
5	mia	mio	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	6	det:poss	_	Canto=7|Verso=72
6	sentenza	sentenza	NOUN	sf1fs	Gender=Fem|Number=Sing	8	obj	_	Canto=7|Verso=72
7	ne	ne	PRON	pp3ypt	Clitic=Yes|Person=3|PronType=Prs	8	obl:arg	_	Canto=7|Verso=72
8	'mbocche	imboccare	VERB	vta1cps2	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	Canto=7|SpaceAfter=No|Verso=72
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det:poss	color:blue
1	Vostro	vostro	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	2	det:poss	_	Canto=7|Verso=85
2	saver	sapere	VERB	vta2fpsm3ms	Tense=Pres|VerbForm=Inf|Voice=Act	4	nsubj	_	Canto=7|Verso=85
3	non	non	ADV	b	PronType=Neg	4	advmod:neg	_	Canto=7|Verso=85
4	ha	avere	VERB	vta5ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Canto=7|Verso=85
5	contasto	contrasto	NOUN	sm2ms	Gender=Masc|Number=Sing	4	obj	_	Canto=7|Verso=85
6	a	a	ADP	epsk1o	_	7	case	_	Canto=7|Verso=85
7	lei	lei	PRON	pp3fslco	Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	nmod	_	Canto=7|SpaceAfter=No|Verso=85
8	:	:	PUNCT	_	_	10	punct	_	_
9	questa	questo	PRON	pd1fs	Gender=Fem|Number=Sing|Person=1|PronType=Dem	10	nsubj	_	Canto=7|Verso=86
10	provede	provvedere	VERB	vi2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	parataxis	_	Canto=7|SpaceAfter=No|Verso=86
11	,	,	PUNCT	_	_	12	punct	_	_
12	giudica	giudicare	VERB	vta1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	conj	_	Canto=7|SpaceAfter=No|Verso=86
13	,	,	PUNCT	_	_	12	punct	_	_
14	e	e	CCONJ	cscc	_	15	cc	_	Canto=7|Verso=86
15	persegue	perseguire	VERB	vta3ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	conj	_	Canto=7|Verso=86
16	suo	suo	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	17	det:poss	_	Canto=7|Verso=87
17	regno	regno	NOUN	sm2ms	Gender=Masc|Number=Sing	10	obj	_	Canto=7|Verso=87
18	come	come	ADV	b	_	20	advmod	_	Canto=7|Verso=87
19	il	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	Canto=7|Verso=87
20	loro	loro	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	10	advcl:cmp	_	Canto=7|Verso=87
21	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	23	det	_	Canto=7|Verso=87
22	altri	altro	DET	ai	Gender=Masc|Number=Plur|PronType=Ind	23	det	_	Canto=7|Verso=87
23	dèi	dio	NOUN	sm2mp	Gender=Masc|Number=Plur	20	obj	_	Canto=7|SpaceAfter=No|Verso=87
24	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det:poss	color:blue
1	Sieti	essere	AUX	_	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Pass	2	aux:pass	_	Canto=15|Comment=sie-ti|Verso=119
2	raccomandato	raccomandare	VERB	vtp1cps2	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Canto=15|Verso=119
3	il	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	Canto=15|Verso=119
4	mio	mio	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	5	det:poss	_	Canto=15|Verso=119
5	Tesoro	tesoro	PROPN	sm2ms	Gender=Masc|Number=Sing	2	nsubj	_	Canto=15|SpaceAfter=No|Verso=119
6	,	,	PUNCT	_	_	11	punct	_	_
7	in	in	ADP	_	_	9	case	_	Canto=15|Comment=ne-l|Verso=120
8	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	Canto=15|Comment=ne-l|Verso=120
9	qual	quale	PRON	pr2ms	Number=Sing|PronType=Rel	11	obl:lmod	_	Canto=15|Verso=120
10	io	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	11	nsubj	_	Canto=15|Verso=120
11	vivo	vivere	VERB	vi2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	Canto=15|Verso=120
12	ancora	ancora	ADV	b	_	11	advmod:tmod	_	Canto=15|SpaceAfter=No|Verso=120
13	,	,	PUNCT	_	_	17	punct	_	_
14	e	e	CCONJ	cscc	_	17	cc	_	Canto=15|Verso=120
15	più	più	ADV	b	_	17	advmod	_	Canto=15|Verso=120
16	non	non	ADV	b	PronType=Neg	17	advmod:neg	_	Canto=15|Verso=120
17	cheggio	chiedere	VERB	vta2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	Canto=15|SpaceAfter=No|Verso=120
18	»	»	PUNCT	_	_	2	punct	_	SpaceAfter=No
19	.	.	PUNCT	_	_	2	punct	_	_

~~~


