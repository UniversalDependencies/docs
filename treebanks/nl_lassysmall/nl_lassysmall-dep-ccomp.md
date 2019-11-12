---
layout: base
title:  'Statistics of ccomp in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `ccomp`

This relation is universal.

185 nodes (0%) are attached to their parents as `ccomp`.

174 instances of `ccomp` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.21081081081081.

The following 9 pairs of parts of speech are connected with `ccomp`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (153; 83% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (10; 5% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (9; 5% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (6; 3% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp	color:blue
1	Men	men	PRON	VNW|pers|pron|nomin|red|3p|ev|masc	Case=Nom|Person=3|PronType=Prs	4	nsubj	4:nsubj	_
2	kan	kunnen	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	4	aux	4:aux	_
3	zich	zich	PRON	VNW|refl|pron|obl|red|3|getal	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	4	expl:pv	4:expl:pv	_
4	voorstellen	voorstellen	VERB	WW|inf|vrij|zonder	VerbForm=Inf	0	root	0:root	_
5	hoe	hoe	ADV	BW	_	8	advmod	8:advmod	_
6	zijn	zijn	PRON	VNW|bez|det|stan|vol|3|ev|prenom|zonder|agr	Person=3|Poss=Yes|PronType=Prs	7	nmod:poss	7:nmod:poss	_
7	ijdelheid	ijdelheid	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	8	nsubj:pass	8:nsubj:pass	_
8	gestreeld	strelen	VERB	WW|vd|vrij|zonder	VerbForm=Part	4	ccomp	4:ccomp	_
9	werd	worden	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	8	aux:pass	8:aux:pass	SpaceAfter=No
10	.	.	PUNCT	LET	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 15 ccomp	color:blue
1	In	in	ADP	VZ|init	_	3	case	3:case	_
2	dit	dit	DET	VNW|aanw|det|stan|prenom|zonder|evon	_	3	det	3:det	_
3	werk	werk	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	4	obl	4:obl:in|10:obl:in	_
4	tekent	tekenen	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	0:root	_
5	René	René	PROPN	SPEC|deeleigen	_	4	nsubj	4:nsubj	_
6	Magritte	Magritte	PROPN	SPEC|deeleigen	_	5	flat	5:flat	_
7	een	een	DET	LID|onbep|stan|agr	Definite=Ind	8	det	8:det	_
8	pijp	pijp	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	4	obj	4:obj	_
9	en	en	CCONJ	VG|neven	_	10	cc	10:cc	_
10	zegt	zeggen	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	4	conj	4:conj:en	_
11	hij	hij	PRON	VNW|pers|pron|nomin|vol|3|ev|masc	Case=Nom|Person=3|PronType=Prs	10	nsubj	10:nsubj	_
12	dat	dat	SCONJ	VG|onder	_	15	mark	15:mark	_
13	het	het	PRON	VNW|pers|pron|stan|red|3|ev|onz	Person=3|PronType=Prs	15	nsubj	15:nsubj	_
14	geen	geen	DET	VNW|onbep|det|stan|prenom|zonder|agr	_	15	det	15:det	_
15	pijp	pijp	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	10	ccomp	10:ccomp	_
16	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	15	cop	15:cop	SpaceAfter=No
17	.	.	PUNCT	LET	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	Sommigen	sommig	PRON	VNW|onbep|det|stan|nom|met-e|mv-n	PronType=Ind	2	nsubj	2:nsubj	_
2	menen	menen	VERB	WW|pv|tgw|mv	Number=Plur|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	dat	dat	SCONJ	VG|onder	_	5	mark	5:mark	_
4	Ensor	Ensor	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	5	nsubj	5:nsubj	_
5	groter	groot	ADJ	ADJ|vrij|comp|zonder	Degree=Cmp	2	ccomp	2:ccomp	_
6	was	zijn	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	5	cop	5:cop	_
7	als	als	ADP	VZ|init	_	8	mark	8:mark	_
8	etser	etser	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	5	advcl	5:advcl:als	_
9	dan	dan	SCONJ	VG|onder	_	11	mark	11:mark	_
10	als	als	ADP	VZ|init	_	11	mark	11:mark	_
11	schilder	schilder	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	5	advcl	5:advcl:dan	SpaceAfter=No
12	.	.	PUNCT	LET	_	2	punct	2:punct	_

~~~


