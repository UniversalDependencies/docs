---
layout: base
title:  'Statistics of obl:agent in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="nl_lassysmall-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="nl_lassysmall-dep-obl-arg.html">obl:arg</a></tt>.

801 nodes (0%) are attached to their parents as `obl:agent`.

439 instances of `obl:agent` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.71535580524345.

The following 9 pairs of parts of speech are connected with `obl:agent`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (496; 62% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (243; 30% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (20; 2% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (14; 2% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt> (12; 1% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-X.html">X</a></tt> (7; 1% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	De	de	DET	LID|bep|stan|rest	Definite=Def	2	det	2:det	_
2	delegatie	delegatie	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	4	nsubj:pass	4:nsubj:pass	_
3	werd	worden	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	4	aux:pass	4:aux:pass	_
4	geleid	leiden	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	_
5	door	door	ADP	VZ|init	_	6	case	6:case	_
6	premier	premier	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	4	obl:agent	4:obl:agent	_
7	Orlando	Orlando	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	6	appos	6:appos	SpaceAfter=No
8	.	.	PUNCT	LET	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 obl:agent	color:blue
1	De	de	DET	LID|bep|stan|rest	Definite=Def	2	det	2:det	_
2	verhalen	verhaal	NOUN	N|soort|mv|basis	Number=Plur	9	nsubj:pass	9:nsubj:pass	_
3	werden	worden	AUX	WW|pv|verl|mv	Number=Plur|Tense=Past|VerbForm=Fin	9	aux:pass	9:aux:pass	_
4	door	door	ADP	VZ|init	_	5	case	5:case	_
5	Casterman	Casterman	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	9	obl:agent	9:obl:agent	_
6	in	in	ADP	VZ|init	_	8	case	8:case	_
7	het	het	DET	LID|bep|stan|evon	Definite=Def	8	det	8:det	_
8	Frans	Frans	PROPN	N|eigen|ev|basis|onz|stan	Gender=Neut|Number=Sing	9	obl:arg	9:obl:arg:in	_
9	vertaald	vertalen	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	LET	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 obl:agent	color:blue
1	Een	een	DET	LID|onbep|stan|agr	Definite=Ind	2	det	2:det	_
2	schrijver	schrijver	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	0	root	0:root|7:nsubj:pass	_
3	die	die	PRON	VNW|betr|pron|stan|vol|persoon|getal	PronType=Rel	7	nsubj:pass	2:ref	_
4	door	door	ADP	VZ|init	_	5	case	5:case	_
5	hem	hem	PRON	VNW|pers|pron|obl|vol|3|ev|masc	Case=Acc|Person=3|PronType=Prs	7	obl:agent	7:obl:agent	_
6	zo	zo	ADV	BW	_	7	advmod	7:advmod	_
7	bewonderd	bewonderen	VERB	WW|vd|vrij|zonder	VerbForm=Part	2	acl:relcl	2:acl:relcl	_
8	werd	worden	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	7	aux:pass	7:aux:pass	SpaceAfter=No
9	.	.	PUNCT	LET	_	2	punct	2:punct	_

~~~


