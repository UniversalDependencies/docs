---
layout: base
title:  'Statistics of acl in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="la_llct-dep-acl-relcl.html">acl:relcl</a></tt>.

4761 nodes (2%) are attached to their parents as `acl`.

4213 instances of `acl` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.01827347195967.

The following 17 pairs of parts of speech are connected with `acl`: <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (2636; 55% instances), <tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1840; 39% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (99; 2% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (62; 1% instances), <tt><a href="la_llct-pos-X.html">X</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (58; 1% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt> (15; 0% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (15; 0% instances), <tt><a href="la_llct-pos-PRON.html">PRON</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (10; 0% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="la_llct-pos-NUM.html">NUM</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-ADV.html">ADV</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-PRON.html">PRON</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl	color:blue
1	ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
2	Cunimundus	Cunimundus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	1	appos	_	_
3	clericus	clericus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	2	appos	_	_
4	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	6	case	_	_
5	ac	hic	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	6	det	_	_
6	comotatione	commutatio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	10	obl	_	_
7	a	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	8	case	_	_
8	nos	nos	PRON	p|p|1|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Person=1|PronType=Prs	9	obl:arg	_	_
9	facta	facio	VERB	t|t|-|s|r|p|p|f|a|-	Aspect=Perf|Case=Acc|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	6	acl	_	_
10	suscripsi	subscribo	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl	color:blue
1	+	+	PUNCT	SYM	_	2	punct	_	_
2	Ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	11	nsubj	_	_
3	Teudimundus	Teudimundus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	2	appos	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	5	punct	_	_
5	rogatus	rogo	VERB	t|t|-|s|r|p|p|m|n|-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	3	acl	_	_
6	a	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	7	case	_	_
7	Leoprando	Leoprandus	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	5	obl:arg	_	_
8	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	9	cc	_	_
9	Iohanne	Johannes	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	7	conj	_	SpaceAfter=No
10	,	,	PUNCT	Punc	_	2	punct	_	_
11	subscripsi	subscribo	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
12	.	.	PUNCT	Punc	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 24 acl	color:blue
1	au	aut	CCONJ	c|c|-|-|-|-|-|-|-|-	_	12	cc	_	_
2	tibi	tu	PRON	p|p|2|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs	11	obl:arg	_	_
3	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	4	det	_	_
4	ancilla	ancilla	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	11	obj	_	_
5	nomine	nomen	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	4	nmod	_	_
6	Gaviusa	Gauiusa	PROPN	Propn|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	5	flat	_	_
7	aliquis	aliquis	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	12	nsubj	_	_
8	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	9	case	_	_
9	heredis	heres	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	7	nmod	_	_
10	meis	meus	DET	a|a|1|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	9	det	_	_
11	retollere	retollo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	12	xcomp	_	_
12	quesieret	quaero	VERB	v|v|3|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|VerbType=Mod|Voice=Act	0	root	_	_
13	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	15	case	_	_
14	colivet	quilibet	DET	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	15	det	_	_
15	ingenio	ingenium	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	11	obl	_	SpaceAfter=No
16	,	,	PUNCT	Punc	_	20	punct	_	_
17	similiter	similiter	ADV	d|d|-|-|-|-|-|-|-|-	_	20	advmod	_	_
18	vobis	uos	PRON	p|p|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Person=2|PronType=Prs	20	obl:arg	_	_
19	dupliciter	dupliciter	ADV	d|d|-|-|-|-|-|-|-|-	_	20	advmod	_	_
20	conpona	compono	VERB	v|v|3|s|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	conj	_	_
21	duos	duo	NUM	a|a|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|NumType=Card	22	nummod	_	_
22	persone	persona	NOUN	n|n|-|p|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Plur	20	obj	_	SpaceAfter=No
23	,	,	PUNCT	Punc	_	24	punct	_	_
24	quales	qualis	DET	a|a|-|p|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Plur|PronType=Ind,Rel	22	acl	_	_
25	tunc	tunc	ADV	d|d|-|-|-|-|-|-|-|-	_	24	advmod	_	_
26	illa	ille	DET	p|p|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	24	nsubj	_	_
27	fueret	sum	AUX	v|v|3|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	24	cop	_	SpaceAfter=No
28	;	;	PUNCT	Punc	_	12	punct	_	_

~~~


