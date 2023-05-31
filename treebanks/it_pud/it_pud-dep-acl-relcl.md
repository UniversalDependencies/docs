---
layout: base
title:  'Statistics of acl:relcl in UD_Italian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Italian-PUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="it_pud-dep-acl.html">acl</a></tt>.

241 nodes (1%) are attached to their parents as `acl:relcl`.

241 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.67634854771784.

The following 14 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (164; 68% instances), <tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (30; 12% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt> (11; 5% instances), <tt><a href="it_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (9; 4% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt> (7; 3% instances), <tt><a href="it_pud-pos-DET.html">DET</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="it_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl:relcl	color:blue
1	È	essere	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	3	cop	_	_
2	la	il	DET	DT	Gender=Fem|Number=Sing	3	det	_	_
3	ragione	ragione	NOUN	NN	Gender=Fem|Number=Sing	0	root	_	_
4	per	per	ADP	IN	_	5	case	_	_
5	cui	cui	PRON	WP	Gender=Fem|Number=Sing	7	obl	_	_
6	ne	ne	PRON	PRP	Case=Acc|Person=3	7	expl	_	_
7	chiediamo	chiedere	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Tense=Pres|Voice=Act	3	acl:relcl	_	_
8	ancora	ancora	ADV	RB	_	7	advmod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 acl:relcl	color:blue
1	La	il	DET	DT	Gender=Fem|Number=Sing	2	det	_	_
2	spedizione	spedizione	NOUN	NN	Gender=Fem|Number=Sing	4	nsubj:pass	_	_
3	venne	venire	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Pass	4	aux:pass	_	_
4	guidata	guidare	VERB	VBN	Gender=Fem|Number=Sing|Tense=Past	0	root	_	_
5	da	da	ADP	IN	_	7	case	_	_
6	il	il	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Generale	Generale	PROPN	NN	Gender=Masc|Number=Sing	4	obl	_	_
8	Joseph	Joseph	PROPN	NNP	Gender=Masc|Number=Sing	7	nmod	_	_
9	Burgoyne	Burgoyne	PROPN	NNP	Gender=Masc|Number=Sing	8	flat	_	_
10	che	che	PRON	WP	Gender=Masc|Number=Sing	11	nsubj	_	_
11	aveva	avere	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	7	acl:relcl	_	_
12	intenzione	intenzione	NOUN	NN	Gender=Fem|Number=Sing	11	obj	_	_
13	di	di	ADP	IN	_	14	mark	_	_
14	raggiungere	raggiungere	VERB	VB	Voice=Act	12	acl	_	_
15	Albany	Albany	PROPN	NNP	Gender=Fem|Number=Sing	14	obj	_	SpaceAfter=No
16	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 14 acl:relcl	color:blue
1	L'	il	DET	DT	Gender=Fem|Number=Sing	3	det	_	SpaceAfter=No
2	alta	alto	ADJ	JJ	Gender=Fem|Number=Sing	3	amod	_	_
3	quota	quota	NOUN	NN	Gender=Fem|Number=Sing	4	nsubj	_	_
4	serve	servire	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
5	a	a	ADP	IN	_	6	mark	_	_
6	raffreddare	raffreddare	VERB	VB	Voice=Act	4	xcomp	_	_
7	il	il	DET	DT	Gender=Masc|Number=Sing	8	det	_	_
8	clima	clima	NOUN	NN	Gender=Masc|Number=Sing	6	obj	_	SpaceAfter=No
9	,	,	PUNCT	,	_	14	punct	_	_
10	che	che	PRON	WP	Gender=Masc|Number=Sing	14	nsubj	_	_
11	sarebbe	essere	AUX	VBC	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|Voice=Act	14	cop	_	_
12	altrimenti	altrimenti	ADV	RB	_	14	advmod	_	_
13	molto	molto	ADV	RB	_	14	advmod	_	_
14	caldo	caldo	ADJ	JJ	Gender=Masc|Number=Sing	8	acl:relcl	_	SpaceAfter=No
15	.	.	PUNCT	.	_	4	punct	_	_

~~~


