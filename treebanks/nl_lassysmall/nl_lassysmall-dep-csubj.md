---
layout: base
title:  'Statistics of csubj in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `csubj`

This relation is universal.

54 nodes (0%) are attached to their parents as `csubj`.

53 instances of `csubj` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.75925925925926.

The following 10 pairs of parts of speech are connected with `csubj`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (26; 48% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (12; 22% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (6; 11% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (3; 6% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 csubj	color:blue
1	Het	het	PRON	VNW|pers|pron|stan|red|3|ev|onz	Person=3|PronType=Prs	2	expl	2:expl	_
2	werd	worden	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	duidelijk	duidelijk	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	2	xcomp	2:xcomp	_
4	dat	dat	SCONJ	VG|onder	_	8	mark	8:mark	_
5	de	de	DET	LID|bep|stan|rest	Definite=Def	6	det	6:det	_
6	politie	politie	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	8	nsubj	8:nsubj	_
7	ernstig	ernstig	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	8	advmod	8:advmod	_
8	gefaald	falen	VERB	WW|vd|vrij|zonder	VerbForm=Part	2	csubj	2:csubj	_
9	had	hebben	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	8	aux	8:aux	_
10	in	in	ADP	VZ|init	_	13	case	13:case	_
11	een	een	DET	LID|onbep|stan|agr	Definite=Ind	13	det	13:det	_
12	eerder	eerder	ADJ	ADJ|prenom|basis|zonder	Degree=Pos	13	amod	13:amod	_
13	onderzoek	onderzoek	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	8	obl	8:obl:in	_
14	naar	naar	ADP	VZ|init	_	15	case	15:case	_
15	Dutroux	Dutroux	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	13	nmod	13:nmod:naar	SpaceAfter=No
16	.	.	PUNCT	LET	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 18 csubj	color:blue
1	Het	het	PRON	VNW|pers|pron|stan|red|3|ev|onz	Person=3|PronType=Prs	5	expl	5:expl	_
2	was	zijn	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	5	cop	5:cop	_
3	de	de	DET	LID|bep|stan|rest	Definite=Def	5	det	5:det	_
4	eerste	één	ADJ	TW|rang|prenom|stan	_	5	amod	5:amod	_
5	keer	keer	NOUN	N|soort|ev|basis|genus|stan	Gender=Com,Neut|Number=Sing	0	root	0:root	_
6	dat	dat	SCONJ	VG|onder	_	18	mark	18:mark	_
7	de	de	DET	LID|bep|stan|rest	Definite=Def	8	det	8:det	_
8	winnares	winnares	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	18	nsubj	18:nsubj	_
9	van	van	ADP	VZ|init	_	10	case	10:case	_
10	Roland	Roland	PROPN	SPEC|deeleigen	_	8	nmod	8:nmod:van	_
11	Garros	Garros	PROPN	SPEC|deeleigen	_	10	flat	10:flat	_
12	in	in	ADP	VZ|init	_	15	case	15:case	_
13	de	de	DET	LID|bep|stan|rest	Definite=Def	15	det	15:det	_
14	eerste	één	ADJ	TW|rang|prenom|stan	_	15	amod	15:amod	_
15	rond	ronde	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	18	obl	18:obl:in	_
16	van	van	ADP	VZ|init	_	17	case	17:case	_
17	Wimbledon	Wimbledon	PROPN	N|eigen|ev|basis|onz|stan	Gender=Neut|Number=Sing	15	nmod	15:nmod:van	_
18	verloor	verliezen	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	5	csubj	5:csubj	SpaceAfter=No
19	.	.	PUNCT	LET	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 csubj	color:blue
1	Wanneer	wanneer	ADV	BW	_	6	advmod	6:advmod	_
2	ze	ze	PRON	VNW|pers|pron|stan|red|3|ev|fem	Person=3|PronType=Prs	6	nsubj	6:nsubj	_
3	Leopold	Leopold	PROPN	SPEC|deeleigen	_	6	obj	6:obj	_
4	III	III	PROPN	SPEC|deeleigen	_	3	flat	3:flat	_
5	heeft	hebben	AUX	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	6	aux	6:aux	_
6	ontmoet	ontmoeten	VERB	WW|vd|vrij|zonder	VerbForm=Part	10	csubj	10:csubj	SpaceAfter=No
7	,	,	PUNCT	LET	_	6	punct	6:punct	_
8	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	10	cop	10:cop	_
9	niet	niet	ADV	BW	_	10	advmod	10:advmod	_
10	bekend	bekend	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	0	root	0:root	SpaceAfter=No
11	.	.	PUNCT	LET	_	10	punct	10:punct	_

~~~


