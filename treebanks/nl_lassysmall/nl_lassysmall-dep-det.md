---
layout: base
title:  'Statistics of det in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `det`

This relation is universal.

34233 nodes (12%) are attached to their parents as `det`.

34232 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.38372330791926.

The following 15 pairs of parts of speech are connected with `det`: <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (28263; 83% instances), <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (4429; 13% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (603; 2% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (510; 1% instances), <tt><a href="nl_lassysmall-pos-X.html">X</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (279; 1% instances), <tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (47; 0% instances), <tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (41; 0% instances), <tt><a href="nl_lassysmall-pos-SYM.html">SYM</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (17; 0% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (15; 0% instances), <tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (9; 0% instances), <tt><a href="nl_lassysmall-pos-SYM.html">SYM</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (8; 0% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (7; 0% instances), <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Leden	lid	NOUN	N|soort|mv|basis	Number=Plur	0	root	0:root	_
2	in	in	ADP	VZ|init	_	4	case	4:case	_
3	de	de	DET	LID|bep|stan|rest	Definite=Def	4	det	4:det	_
4	Kamer	kamer	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	1	nmod	1:nmod:in	_
5	van	van	ADP	VZ|init	_	6	case	6:case	_
6	Volksvertegenwoordigers	volksvertegenwoordiger	NOUN	N|soort|mv|basis	Number=Plur	4	nmod	4:nmod:van	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Leden	lid	NOUN	N|soort|mv|basis	Number=Plur	0	root	0:root	_
2	in	in	ADP	VZ|init	_	4	case	4:case	_
3	het	het	DET	LID|bep|stan|evon	Definite=Def	4	det	4:det	_
4	Vlaams	Vlaams	PROPN	SPEC|deeleigen	_	1	nmod	1:nmod:in	_
5	Parlement	Parlement	PROPN	SPEC|deeleigen	_	4	flat	4:flat	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Onder	onder	ADP	VZ|init	_	3	case	3:case	_
2	deze	deze	DET	VNW|aanw|det|stan|prenom|met-e|rest	_	3	det	3:det	_
3	laatsten	laat	ADJ	ADJ|nom|sup|met-e|mv-n	Degree=Sup	9	obl	9:obl:onder	_
4	waren	zijn	AUX	WW|pv|verl|mv	Number=Plur|Tense=Past|VerbForm=Fin	9	cop	9:cop	_
5	de	de	DET	LID|bep|stan|rest	Definite=Def	6	det	6:det	_
6	Grieken	Griek	PROPN	N|eigen|mv|basis	Number=Plur	9	nsubj	9:nsubj	_
7	de	de	DET	LID|bep|stan|rest	Definite=Def	9	det	9:det	_
8	grootste	groot	ADJ	ADJ|prenom|sup|met-e|stan	Degree=Sup	9	amod	9:amod	_
9	groep	groep	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	LET	_	9	punct	9:punct	_

~~~


