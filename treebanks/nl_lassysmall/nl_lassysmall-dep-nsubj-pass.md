---
layout: base
title:  'Statistics of nsubj:pass in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="nl_lassysmall-dep-nsubj.html">nsubj</a></tt>.

873 nodes (1%) are attached to their parents as `nsubj:pass`.

873 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.75945017182131.

The following 8 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (527; 60% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (180; 21% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (143; 16% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-SYM.html">SYM</a></tt> (5; 1% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (2; 0% instances).


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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nsubj:pass	color:blue
1	Met	met	ADP	VZ|init	_	3	case	3:case	_
2	het	het	DET	LID|bep|stan|evon	Definite=Def	3	det	3:det	_
3	milieu	milieu	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	9	obl	9:obl:met	_
4	van	van	ADP	VZ|init	_	5	case	5:case	_
5	België	België	PROPN	N|eigen|ev|basis|onz|stan	Gender=Neut|Number=Sing	3	nmod	3:nmod:van	_
6	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	9	aux:pass	9:aux:pass	_
7	het	het	PRON	VNW|pers|pron|stan|red|3|ev|onz	Person=3|PronType=Prs	9	nsubj:pass	9:nsubj:pass	_
8	slecht	slecht	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	9	xcomp	9:xcomp	_
9	gesteld	stellen	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	LET	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	De	de	DET	LID|bep|stan|rest	Definite=Def	2	det	2:det	_
2	Schelde	Schelde	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	4	nsubj:pass	4:nsubj:pass	_
3	werd	worden	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	4	aux:pass	4:aux:pass	_
4	beschouwd	beschouwen	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	_
5	als	als	SCONJ	VG|onder	_	6	mark	6:mark	_
6	grens	grens	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	4	xcomp	4:xcomp	_
7	tussen	tussen	ADP	VZ|init	_	10	case	10:case	_
8	de	de	DET	LID|bep|stan|rest	Definite=Def	10	det	10:det	_
9	beide	beide	DET	VNW|onbep|grad|stan|prenom|met-e|mv|basis	_	10	det	10:det	_
10	rijken	rijk	ADJ	ADJ|nom|basis|met-e|mv-n	Degree=Pos	6	nmod	6:nmod:tussen	SpaceAfter=No
11	.	.	PUNCT	LET	_	4	punct	4:punct	_

~~~


