---
layout: base
title:  'Statistics of ccomp in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `ccomp`

This relation is universal.

318 nodes (0%) are attached to their parents as `ccomp`.

305 instances of `ccomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.10062893081761.

The following 12 pairs of parts of speech are connected with `ccomp`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (245; 77% instances), <tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (19; 6% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (17; 5% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (16; 5% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (9; 3% instances), <tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	Men	men	PRON	VNW|pers|pron|nomin|red|3p|ev|masc	Case=Nom|Person=3|PronType=Prs	2	nsubj	_	_
2	probeert	proberen	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ook	ook	ADV	BW	_	2	advmod	_	_
4	niet	niet	ADV	BW	_	2	advmod	_	_
5	te	te	ADP	VZ|init	_	6	mark	_	_
6	baren	baren	VERB	WW|inf|vrij|zonder	VerbForm=Inf	2	ccomp	_	SpaceAfter=No
7	.	.	PUNCT	LET	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 12 ccomp	color:blue
1	De	de	DET	LID|bep|stan|rest	Definite=Def	2	det	_	_
2	koning	koning	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	3	nsubj	_	_
3	koos	kiezen	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
4	ervoor	ervoor	ADV	BW	_	3	advcl	_	_
5	om	om	ADP	VZ|init	_	12	mark	_	_
6	de	de	DET	LID|bep|stan|rest	Definite=Def	7	det	_	_
7	hofhouding	hofhouding	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	12	obj	_	_
8	van	van	ADP	VZ|init	_	9	case	_	_
9	Boudewijn	Boudewijn	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	7	nmod	_	_
10	over	over	ADP	VZ|fin	_	12	compound:prt	_	_
11	te	te	ADP	VZ|init	_	12	mark	_	_
12	nemen	nemen	VERB	WW|inf|vrij|zonder	VerbForm=Inf	4	ccomp	_	SpaceAfter=No
13	.	.	PUNCT	LET	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	Sommigen	sommig	PRON	VNW|onbep|det|stan|nom|met-e|mv-n	PronType=Ind	2	nsubj	_	_
2	menen	menen	VERB	WW|pv|tgw|mv	Number=Plur|Tense=Pres|VerbForm=Fin	0	root	_	_
3	dat	dat	SCONJ	VG|onder	_	5	mark	_	_
4	Ensor	Ensor	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	5	nsubj	_	_
5	groter	groot	ADJ	ADJ|vrij|comp|zonder	Degree=Cmp	2	ccomp	_	_
6	was	zijn	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	5	cop	_	_
7	als	als	ADP	VZ|init	_	8	mark	_	_
8	etser	etser	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	5	advcl	_	_
9	dan	dan	SCONJ	VG|onder	_	11	mark	_	_
10	als	als	ADP	VZ|init	_	11	mark	_	_
11	schilder	schilder	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	5	advcl	_	SpaceAfter=No
12	.	.	PUNCT	LET	_	2	punct	_	_

~~~


