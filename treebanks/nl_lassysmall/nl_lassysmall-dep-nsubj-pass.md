---
layout: base
title:  'Statistics of nsubj:pass in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="nl_lassysmall-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="nl_lassysmall-dep-nsubj-outer.html">nsubj:outer</a></tt>.

3304 nodes (1%) are attached to their parents as `nsubj:pass`.

3301 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.79933414043584.

The following 12 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (2022; 61% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (749; 23% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (437; 13% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-X.html">X</a></tt> (27; 1% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (22; 1% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (19; 1% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (15; 0% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (6; 0% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-SYM.html">SYM</a></tt> (4; 0% instances), <tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-X.html">X</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 nsubj:pass	color:blue
1	Zijn	zijn	PRON	VNW|bez|det|stan|vol|3|ev|prenom|zonder|agr	Person=3|Poss=Yes|PronType=Prs	3	nmod:poss	3:nmod:poss	_
2	meeste	veel	ADV	VNW|onbep|grad|stan|prenom|met-e|agr|sup	_	3	amod	3:amod	_
3	schilderijen	schilderij	NOUN	N|soort|mv|basis	Number=Plur	8	nsubj:pass	8:nsubj:pass	_
4	werden	worden	AUX	WW|pv|verl|mv	Number=Plur|Tense=Past|VerbForm=Fin	8	aux:pass	8:aux:pass	_
5	echter	echter	ADV	BW	_	8	advmod	8:advmod	_
6	met	met	ADP	VZ|init	_	7	case	7:case	_
7	misnoegdheid	misnoegdheid	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	8	obl	8:obl:met	_
8	bekeken	bekijken	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
9	.	.	PUNCT	LET	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nsubj:pass	color:blue
1	Sommige	sommig	DET	VNW|onbep|det|stan|prenom|met-e|rest	_	2	det	2:det	_
2	grondsoorten	grond_soort	NOUN	N|soort|mv|basis	Number=Plur	5	nsubj	5:nsubj	_
3	zijn	zijn	AUX	WW|pv|tgw|mv	Number=Plur|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
4	heel	heel	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	5	advmod	5:advmod	_
5	vruchtbaar	vruchtbaar	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	0	root	0:root	_
6	als	als	SCONJ	VG|onder	_	8	mark	8:mark	_
7	ze	ze	PRON	VNW|pers|pron|stan|red|3|mv	Person=3|PronType=Prs	8	nsubj:pass	8:nsubj:pass	_
8	bevloeid	bevloeien	VERB	WW|vd|vrij|zonder	VerbForm=Part	5	advcl	5:advcl:als	_
9	worden	worden	AUX	WW|pv|tgw|mv	Number=Plur|Tense=Pres|VerbForm=Fin	8	aux:pass	8:aux:pass	SpaceAfter=No
10	.	.	PUNCT	LET	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 nsubj:pass	color:blue
1	In	in	ADP	VZ|init	_	2	case	2:case	_
2	1936	1936	NUM	TW|hoofd|vrij	_	12	obl	12:obl:in	SpaceAfter=No
3	,	,	PUNCT	LET	_	4	punct	4:punct	_
4	1940	1940	NUM	TW|hoofd|vrij	_	2	conj	2:conj:en|12:obl:in	_
5	en	en	CCONJ	VG|neven	_	6	cc	6:cc	_
6	1944	1944	NUM	TW|hoofd|vrij	_	2	conj	2:conj:en|12:obl:in	_
7	werd	worden	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	12	aux:pass	12:aux:pass	_
8	Roosevelt	Roosevelt	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	12	nsubj:pass	12:nsubj:pass	_
9	dan	dan	ADV	BW	_	12	advmod	12:advmod	_
10	ook	ook	ADV	BW	_	12	advmod	12:advmod	_
11	telkens	telkens	ADV	BW	_	12	advmod	12:advmod	_
12	herkozen	herkiezen	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
13	.	.	PUNCT	LET	_	12	punct	12:punct	_

~~~


