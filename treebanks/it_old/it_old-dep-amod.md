---
layout: base
title:  'Statistics of amod in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `amod`

This relation is universal.

1059 nodes (3%) are attached to their parents as `amod`.

639 instances of `amod` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16525023607177.

The following 12 pairs of parts of speech are connected with `amod`: <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (971; 92% instances), <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (38; 4% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (23; 2% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (10; 1% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="it_old-pos-DET.html">DET</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="it_old-pos-NUM.html">NUM</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 amod	color:blue
1	Oh	oh	INTJ	i	_	5	discourse	_	Canto=23|Verso=67
2	in	in	ADP	_	_	3	case	_	Canto=23|Verso=67
3	etterno	etterno	NOUN	_	Gender=Masc|Number=Sing	5	obl:tmod	_	Canto=23|Verso=67
4	faticoso	faticoso	ADJ	a1ms	Gender=Masc|Number=Sing	5	amod	_	Canto=23|Verso=67
5	manto	manto	NOUN	sm2ms	Gender=Masc|Number=Sing	0	root	_	Canto=23|SpaceAfter=No|Verso=67
6	!	!	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	Quivi	quivi	ADV	b	_	7	advmod:lmod	_	Canto=13|Verso=10
2	le	il	DET	rdfp	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	4	det	_	Canto=13|Verso=10
3	brutte	brutto	ADJ	a1fp	Gender=Fem|Number=Plur	4	amod	_	Canto=13|Verso=10
4	Arpie	Arpia	PROPN	np	_	7	nsubj	_	Canto=13|Verso=10
5	lor	loro	DET	as	Poss=Yes|PronType=Prs	6	det:poss	_	Canto=13|Verso=10
6	nidi	nido	NOUN	sm2mp	Gender=Masc|Number=Plur	7	obj	_	Canto=13|Verso=10
7	fanno	fare	VERB	vta1ipp3	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Canto=13|SpaceAfter=No|Verso=10
8	,	,	PUNCT	_	_	10	punct	_	_
9	che	che	PRON	pr	PronType=Rel	10	nsubj	_	Canto=13|Verso=11
10	cacciar	cacciare	VERB	vta1irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	_	Canto=13|Verso=11
11	de	di	ADP	eps	_	13	case	_	Canto=13|Verso=11
12	le	il	DET	rdfp	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	13	det	_	Canto=13|Verso=11
13	Strofade	Strofadi	PROPN	np	_	10	obl:lmod	_	Canto=13|Verso=11
14	i	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	15	det	_	Canto=13|Verso=11
15	Troiani	troiano	NOUN	sm2mp	Gender=Masc|Number=Plur	10	obj	_	Canto=13|Verso=11
16	con	con	ADP	epskw	_	18	case	_	Canto=13|Verso=12
17	tristo	tristo	ADJ	a1ms	Gender=Masc|Number=Sing	18	amod	_	Canto=13|Verso=12
18	annunzio	annunzio	NOUN	sm2ms	Gender=Masc|Number=Sing	10	obl	_	Canto=13|Verso=12
19	di	di	ADP	epskx	_	21	case	_	Canto=13|Verso=12
20	futuro	futuro	ADJ	a1ms	Gender=Masc|Number=Sing	21	amod	_	Canto=13|Verso=12
21	danno	danno	NOUN	sm2ms	Gender=Masc|Number=Sing	18	nmod	_	Canto=13|SpaceAfter=No|Verso=12
22	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 amod	color:blue
1	Or	ora	ADV	b	_	2	advmod:tmod	_	Canto=2|Verso=139
2	va	andare	VERB	vi1mps2	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	Canto=2|SpaceAfter=No|Verso=139
3	,	,	PUNCT	_	_	10	punct	_	_
4	ch'	che	SCONJ	cssc	_	10	mark	_	Canto=2|SpaceAfter=No|Verso=139
5	un	uno	DET	an1ms	Gender=Masc|Number=Sing	7	det	_	Canto=2|Verso=139
6	sol	solo	ADJ	a1ms	Gender=Masc|Number=Sing	7	amod	_	Canto=2|Verso=139
7	volere	volere	VERB	vta2fpsm3ms	Tense=Pres|VerbForm=Inf|Voice=Act	10	nsubj	_	Canto=2|Verso=139
8	è	essere	AUX	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	Canto=2|Verso=139
9	d'	di	ADP	eps	_	10	case	_	Canto=2|SpaceAfter=No|Verso=139
10	ambedue	ambedue	DET	pn	PronType=Tot	2	advcl	_	Canto=2|SpaceAfter=No|Verso=139
11	:	:	PUNCT	_	_	12	punct	_	_
12	tu	tu	PRON	pp2slso	Number=Sing|Person=2|PronType=Prs	2	vocative	_	Canto=2|Verso=140
13	duca	duca	NOUN	sm1ms	Gender=Masc|Number=Sing	12	appos	_	Canto=2|SpaceAfter=No|Verso=140
14	,	,	PUNCT	_	_	15	punct	_	_
15	tu	tu	PRON	pp2slso	Number=Sing|Person=2|PronType=Prs	12	conj	_	Canto=2|Verso=140
16	segnore	signore	NOUN	sm3ms	Gender=Masc|Number=Sing	15	appos	_	Canto=2|Verso=140
17	e	e	CCONJ	cscc	_	18	cc	_	Canto=2|Verso=140
18	tu	tu	PRON	pp2slso	Number=Sing|Person=2|PronType=Prs	12	conj	_	Canto=2|Verso=140
19	maestro	maestro	NOUN	sm2ms	Gender=Masc|Number=Sing	18	appos	_	Canto=2|SpaceAfter=No|Verso=140
20	»	»	PUNCT	_	_	2	punct	_	SpaceAfter=No
21	.	.	PUNCT	_	_	2	punct	_	_

~~~


