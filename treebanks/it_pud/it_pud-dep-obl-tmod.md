---
layout: base
title:  'Statistics of obl:tmod in UD_Italian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Italian-PUD: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="it_pud-dep-obl.html">obl</a></tt>.

26 nodes (0%) are attached to their parents as `obl:tmod`.

23 instances of `obl:tmod` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.88461538461538.

The following 7 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-SYM.html">SYM</a></tt> (6; 23% instances), <tt><a href="it_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="it_pud-pos-SYM.html">SYM</a></tt> (6; 23% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt> (4; 15% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-NUM.html">NUM</a></tt> (3; 12% instances), <tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_pud-pos-NUM.html">NUM</a></tt> (3; 12% instances), <tt><a href="it_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="it_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt> (2; 8% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 obl:tmod	color:blue
1	I	il	DET	DT	Gender=Masc|Number=Plur	3	det	_	_
2	primi	primo	ADJ	JJ	Gender=Masc|Number=Plur	3	amod	_	_
3	testi	testo	NOUN	NN	Gender=Masc|Number=Plur	5	nsubj	_	_
4	greci	greco	ADJ	JJ	Gender=Masc|Number=Plur	3	amod	_	Proper=True
5	cominciarono	cominciare	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|Voice=Act	0	root	_	_
6	ad	ad	ADP	IN	_	7	mark	_	_
7	apparire	apparire	VERB	VB	Voice=Act	5	xcomp	_	_
8	da	da	ADP	IN	_	11	case	_	_
9	il	il	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
10	IX	IX	ADJ	JJ	Gender=Masc|Number=Sing	11	amod	_	_
11	secolo	secolo	NOUN	NN	Gender=Masc|Number=Sing	7	obl	_	_
12	a.C.	a.C.	SYM	SYM	_	11	obl:tmod	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 23 obl:tmod	color:blue
1	Probabilmente	probabilmente	ADV	RB	_	13	advmod	_	_
2	la	il	DET	DT	Gender=Fem|Number=Sing	3	det	_	_
3	persona	persona	NOUN	NN	Gender=Fem|Number=Sing	13	nsubj	_	_
4	più	più	ADV	RBS	_	5	advmod	_	_
5	celebre	celebre	ADJ	JJ	Gender=Fem|Number=Sing	3	amod	_	_
6	di	di	ADP	IN	_	8	case	_	_
7	l'	il	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	età	età	PROPN	NN	Gender=Fem|Number=Sing	3	nmod	_	_
9	di	di	ADP	IN	_	11	case	_	_
10	il	il	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	rame	rame	PROPN	NN	Gender=Masc|Number=Sing	8	nmod	_	_
12	è	essere	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	13	cop	_	_
13	Ötzi	Ötzi	PROPN	NNP	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
14	,	,	PUNCT	,	_	13	punct	_	_
15	la	il	DET	DT	Gender=Fem|Number=Sing	16	det	_	_
16	mummia	mummia	NOUN	NN	Gender=Fem|Number=Sing	13	appos	_	_
17	congelata	congelare	ADJ	JJ	Gender=Fem|Number=Sing	16	amod	_	_
18	che	che	PRON	WP	Gender=Fem|Number=Sing	19	nsubj	_	_
19	visse	vivere	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	16	acl:relcl	_	_
20	in	in	ADP	IN	_	22	case	_	_
21	il	il	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	3300	3300	NUM	CD	_	19	obl	_	_
23	a.C.	a.C.	SYM	SYM	_	22	obl:tmod	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 obl:tmod	color:blue
1	Elliott	Elliott	PROPN	NNP	Gender=Masc|Number=Sing	5	nsubj	_	_
2	era	essere	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	5	cop	_	_
3	a	a	ADP	IN	_	5	case	_	_
4	il	il	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	funerale	funerale	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
6	di	di	ADP	IN	_	8	case	_	_
7	suo	suo	PRON	DTP$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	8	det:poss	_	_
8	padre	padre	NOUN	NN	Gender=Masc|Number=Sing	5	nmod	_	_
9	il	il	DET	DT	Gender=Masc|Number=Sing	10	det	_	_
10	giorno	giorno	NOUN	NN	Gender=Masc|Number=Sing	5	obl:tmod	_	_
11	di	di	ADP	IN	_	13	case	_	_
12	la	il	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	corsa	corsa|corso	NOUN	NN	Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	5	punct	_	_

~~~


