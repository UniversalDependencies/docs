---
layout: base
title:  'Statistics of csubj in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="nl_lassysmall-dep-csubj-outer.html">csubj:outer</a></tt>.

341 nodes (0%) are attached to their parents as `csubj`.

330 instances of `csubj` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.75073313782991.

The following 17 pairs of parts of speech are connected with `csubj`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (113; 33% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (96; 28% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (75; 22% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (9; 3% instances), <tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (8; 2% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (8; 2% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (7; 2% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (7; 2% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 csubj	color:blue
1	Hoe	hoe	ADV	BW	_	7	xcomp	7:xcomp	_
2	dit	dit	DET	VNW|aanw|det|stan|prenom|zonder|evon	_	3	det	3:det	_
3	ciborium	ciborium	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	7	nsubj	7:nsubj	_
4	er	er	ADV	VNW|aanw|adv-pron|stan|red|3|getal	_	7	compound:prt	7:compound:prt	_
5	precies	precies	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	7	advmod	7:advmod	_
6	uit	uit	ADP	VZ|fin	_	7	compound:prt	7:compound:prt	_
7	zag	uit_zien	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	8	csubj	8:csubj	_
8	blijft	blijven	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	0:root	_
9	onbekend	onbekend	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	8	xcomp	8:xcomp	SpaceAfter=No
10	.	.	PUNCT	LET	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 csubj	color:blue
1	Het	het	DET	LID|bep|stan|evon	Definite=Def	2	det	2:det	_
2	gevolg	gevolg	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	0	root	0:root	_
3	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	2	cop	2:cop	_
4	dat	dat	SCONJ	VG|onder	_	9	mark	9:mark	_
5	eigenlijk	eigenlijk	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	9	advmod	9:advmod	_
6	alle	al	DET	VNW|onbep|det|stan|prenom|met-e|agr	_	7	det	7:det	_
7	spanning	spanning	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	9	nsubj:pass	9:nsubj:pass	_
8	wordt	worden	AUX	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	9	aux:pass	9:aux:pass	_
9	weggenomen	weg_nemen	VERB	WW|vd|vrij|zonder	VerbForm=Part	2	csubj	2:csubj	SpaceAfter=No
10	.	.	PUNCT	LET	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 csubj	color:blue
1	Het	het	PRON	VNW|pers|pron|stan|red|3|ev|onz	Person=3|PronType=Prs	4	expl	4:expl	_
2	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
3	daarom	daarom	ADV	BW	_	4	advmod	4:advmod	_
4	gezonder	gezond	ADJ	ADJ|vrij|comp|zonder	Degree=Cmp	0	root	0:root	_
5	om	om	ADP	VZ|init	_	11	mark	11:mark	_
6	bruine	bruin	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	9	nmod	9:nmod	_
7	of	of	CCONJ	VG|neven	_	8	cc	8:cc	_
8	parboiled	parboiled	X	SPEC|vreemd	Foreign=Yes	6	conj	6:conj:of|9:nmod	_
9	rijst	rijst	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	11	obj	11:obj	_
10	te	te	ADP	VZ|init	_	11	mark	11:mark	_
11	eten	eten	VERB	WW|inf|vrij|zonder	VerbForm=Inf	4	csubj	4:csubj	SpaceAfter=No
12	.	.	PUNCT	LET	_	4	punct	4:punct	_

~~~


