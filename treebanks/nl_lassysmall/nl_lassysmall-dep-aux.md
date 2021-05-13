---
layout: base
title:  'Statistics of aux in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="nl_lassysmall-dep-aux-pass.html">aux:pass</a></tt>.

593 nodes (1%) are attached to their parents as `aux`.

525 instances of `aux` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.70657672849916.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (573; 97% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (8; 1% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (7; 1% instances), <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	Multiculturaliteit	multiculturaliteit	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	5	nsubj	5:nsubj	_
2	heeft	hebben	AUX	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	5	aux	5:aux	_
3	bij	bij	ADP	VZ|init	_	4	case	4:case	_
4	ons	ons	PRON	VNW|pr|pron|obl|vol|1|mv	Case=Acc|Person=1|PronType=Prs	5	obl	5:obl:bij	_
5	geleid	leiden	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	_
6	tot	tot	ADP	VZ|init	_	7	case	7:case	_
7	multicriminaliteit	multi_criminaliteit	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	5	obl	5:obl:tot	SpaceAfter=No
8	.	.	PUNCT	LET	_	5	punct	5:punct	_
9	"	"	PUNCT	LET	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Dat	dat	PRON	VNW|aanw|pron|stan|vol|3o|ev	Person=3|PronType=Dem	4	nsubj	4:nsubj	_
2	moest	moeten	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	4	aux	4:aux	_
3	"	"	PUNCT	LET	_	4	punct	4:punct	SpaceAfter=No
4	woestijnvos	woestijn_vos	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	0	root	0:root	SpaceAfter=No
5	"	"	PUNCT	LET	_	4	punct	4:punct	_
6	zijn	zijn	AUX	WW|inf|vrij|zonder	VerbForm=Inf	4	cop	4:cop	SpaceAfter=No
7	.	.	PUNCT	LET	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 aux	color:blue
1	Gemeentelijke	gemeentelijk	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	2	amod	2:amod	_
2	ambtenaren	ambtenaar	NOUN	N|soort|mv|basis	Number=Plur	15	nsubj	6:nsubj:relsubj|15:nsubj	_
3	die	die	PRON	VNW|betr|pron|stan|vol|persoon|getal	PronType=Rel	6	nsubj	2:ref	_
4	in	in	ADP	VZ|init	_	6	compound:prt	6:compound:prt	_
5	contact	contact	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	4	fixed	4:fixed	_
6	staan	staan	VERB	WW|pv|tgw|mv	Number=Plur|Tense=Pres|VerbForm=Fin	2	acl:relcl	2:acl:relcl	_
7	met	met	ADP	VZ|init	_	9	case	9:case	_
8	het	het	DET	LID|bep|stan|evon	Definite=Def	9	det	9:det	_
9	publiek	publiek	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	6	obl	6:obl:met	_
10	(	(	PUNCT	LET	_	11	punct	11:punct	SpaceAfter=No
11	loketbedienden	loket_bediende	NOUN	N|soort|mv|basis	Number=Plur	2	appos	2:appos	_
12	bv.	bijvoorbeeld	X	SPEC|afk	Abbr=Yes	11	nmod	11:nmod	SpaceAfter=No
13	)	)	PUNCT	LET	_	11	punct	11:punct	_
14	zouden	zullen	AUX	WW|pv|verl|mv	Number=Plur|Tense=Past|VerbForm=Fin	15	aux	15:aux	_
15	tweetalig	twee_talig	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	0	root	0:root	_
16	moeten	moeten	AUX	WW|inf|vrij|zonder	VerbForm=Inf	15	aux	15:aux	_
17	zijn	zijn	AUX	WW|inf|vrij|zonder	VerbForm=Inf	15	cop	15:cop	SpaceAfter=No
18	.	.	PUNCT	LET	_	15	punct	15:punct	_

~~~


