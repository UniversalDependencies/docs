---
layout: base
title:  'Statistics of acl:relcl in UD_French-PoitevinDIVITAL'
udver: '2'
---

## Treebank Statistics: UD_French-PoitevinDIVITAL: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="fr_poitevindivital-dep-acl.html">acl</a></tt>.

75 nodes (1%) are attached to their parents as `acl:relcl`.

75 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.21333333333333.

The following 14 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="fr_poitevindivital-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_poitevindivital-pos-VERB.html">VERB</a></tt> (39; 52% instances), <tt><a href="fr_poitevindivital-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_poitevindivital-pos-VERB.html">VERB</a></tt> (20; 27% instances), <tt><a href="fr_poitevindivital-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_poitevindivital-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="fr_poitevindivital-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_poitevindivital-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="fr_poitevindivital-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_poitevindivital-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="fr_poitevindivital-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_poitevindivital-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_poitevindivital-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_poitevindivital-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_poitevindivital-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_poitevindivital-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_poitevindivital-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_poitevindivital-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_poitevindivital-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_poitevindivital-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="fr_poitevindivital-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_poitevindivital-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_poitevindivital-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_poitevindivital-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_poitevindivital-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_poitevindivital-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="fr_poitevindivital-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_poitevindivital-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl:relcl	color:blue
1	Vela	voilà	VERB	_	_	0	root	_	glose=voilà
2	l'	le	DET	_	_	3	det	_	glose=le
3	auto	auto	NOUN	_	_	1	obj	_	glose=auto
4	démaràie	démarai	ADJ	_	_	3	amod	_	glose=démarre
5	,	,	PUNCT	_	_	4	punct	_	glose=,
6	qui	qui	PRON	_	_	7	nsubj	_	glose=qui
7	sort	sorti	VERB	_	_	3	acl:relcl	_	glose=sort
8	bétout	bétout	ADV	_	_	7	advmod	_	glose=
9	d'	de	ADP	_	_	11	case	_	glose=de
10	en	en	ADP	_	_	11	case	_	glose=en
11	borc	borc	NOUN	_	_	7	obl	_	glose=bourg|SpaceAfter=No
12	.	.	PUNCT	_	_	1	punct	_	glose=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 acl:relcl	color:blue
1	Mé	mé	CCONJ	_	_	5	cc	_	Gloss=mais
2	o	o	PRON	_	_	5	expl	_	Gloss=il
3	n'	n	PRON	_	_	5	expl	_	Gloss=y
4	n	en	PRON	_	_	7	nmod	_	Gloss=en
5	at	avoer	VERB	_	_	0	root	_	Gloss=a
6	in	in	DET	_	_	7	det	_	Gloss=un
7	àutre	àutre	PRON	_	_	5	obj	_	Gloss=autre
8	qui	qui	PRON	_	_	10	nsubj	_	Gloss=qui
9	y	y	PRON	_	_	10	obl	_	Gloss=y
10	croéyét	croére	VERB	_	_	7	acl:relcl	_	Gloss=croyait
11	core	core	ADV	_	_	13	advmod	_	Gloss=encore
12	pu	pu	ADV	_	_	13	advmod	_	Gloss=plus
13	fort	fort	ADV	_	_	10	advmod	_	Gloss=fort
14	,	,	PUNCT	_	_	10	punct	_	Gloss=,
15	atét	être	AUX	_	_	17	cop	_	Gloss=c'était|varlemma=étre
16	l'	le	DET	_	_	17	det	_	Gloss=l'
17	églle	églle	NOUN	_	_	7	dislocated	_	Gloss=aigle|SpaceAfter=No
18	.	.	PUNCT	_	_	7	punct	_	Gloss=.

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 13 acl:relcl	color:blue
1	De	de	ADP	_	_	2	case	_	_
2	retor	retor	NOUN	_	_	5	obl	_	_
3	,	,	PUNCT	_	_	5	punct	_	_
4	a	a	PRON	_	_	5	nsubj	_	_
5	passit	passàe	VERB	_	_	0	root	_	_
6	pr	pr	ADP	_	_	7	case	_	_
7	Chipre	Chipre	PROPN	_	_	5	obl	_	_
8	,	,	PUNCT	_	_	7	punct	_	_
9	voure	voure	PRON	_	_	13	obl	_	_
10	a	a	PRON	_	_	13	nsubj	_	_
11	sit	être	AUX	_	_	13	aux:pass	_	_
12	cruàument	cruàument	ADV	_	_	13	advmod	_	_
13	aforçàie	aforçàe	VERB	_	_	7	acl:relcl	_	_
14	pr	pr	ADP	_	_	16	case	_	_
15	çheùques	çheùques	DET	_	_	16	det	_	_
16	criminàus	criminàu	NOUN	_	_	13	obl	_	SpaceAfter=No
17	.	.	PUNCT	_	_	13	punct	_	_

~~~


