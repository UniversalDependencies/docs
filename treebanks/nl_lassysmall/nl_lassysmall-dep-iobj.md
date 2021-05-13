---
layout: base
title:  'Statistics of iobj in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `iobj`

This relation is universal.

66 nodes (0%) are attached to their parents as `iobj`.

34 instances of `iobj` (52%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.81818181818182.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (24; 36% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (22; 33% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (18; 27% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 iobj	color:blue
1	Jaak	Jaak	PROPN	SPEC|deeleigen	_	4	nsubj	4:nsubj	_
2	Van	Van	PROPN	SPEC|deeleigen	_	1	flat	1:flat	_
3	Assche	Assche	PROPN	SPEC|deeleigen	_	1	flat	1:flat	_
4	geeft	geven	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	0:root	_
5	dit	dit	DET	VNW|aanw|det|stan|prenom|zonder|evon	_	6	det	6:det	_
6	personage	personage	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	4	iobj	4:iobj	_
7	gestalte	gestalte	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	4	compound:prt	4:compound:prt	SpaceAfter=No
8	.	.	PUNCT	LET	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	Damned	Damned	SYM	SPEC|vreemd	_	3	parataxis	3:parataxis	SpaceAfter=No
2	,	,	PUNCT	LET	_	1	punct	1:punct	_
3	doe	doen	VERB	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	me	me	PRON	VNW|pr|pron|obl|red|1|ev	Case=Acc|Person=1|PronType=Prs	3	iobj	3:iobj	_
5	dan	dan	ADV	BW	_	3	advmod	3:advmod	_
6	maar	maar	ADV	BW	_	3	advmod	3:advmod	_
7	weer	weer	ADV	BW	_	3	advmod	3:advmod	_
8	een	een	DET	LID|onbep|stan|agr	Definite=Ind	9	det	9:det	_
9	Humo	Humo	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	3	obj	3:obj	_
10	»	»	PUNCT	LET	_	3	punct	3:punct	SpaceAfter=No
11	.	.	PUNCT	LET	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 iobj	color:blue
1	Ook	ook	ADV	BW	_	3	amod	3:amod	_
2	op	op	ADP	VZ|init	_	3	case	3:case	_
3	privévlak	privé_vlak	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	4	obl	4:obl:op	_
4	gaat	gaan	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	0:root	_
5	het	het	PRON	VNW|pers|pron|stan|red|3|ev|onz	Person=3|PronType=Prs	4	nsubj	4:nsubj	_
6	Kim	Kim	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	4	iobj	4:iobj	_
7	niet	niet	ADV	BW	_	4	advmod	4:advmod	_
8	voor	voor	ADP	VZ|init	_	4	compound:prt	4:compound:prt	_
9	de	de	DET	LID|bep|stan|rest	Definite=Def	8	fixed	8:fixed	_
10	wind	wind	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	8	fixed	8:fixed	SpaceAfter=No
11	.	.	PUNCT	LET	_	4	punct	4:punct	_

~~~


