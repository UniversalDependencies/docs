---
layout: base
title:  'Statistics of expl:pv in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="nl_alpino-dep-expl.html">expl</a></tt>.

426 nodes (0%) are attached to their parents as `expl:pv`.

253 instances of `expl:pv` (59%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.35680751173709.

The following 2 pairs of parts of speech are connected with `expl:pv`: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (411; 96% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (15; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 expl:pv	color:blue
1	De	de	DET	LID|bep|stan|rest	Definite=Def	2	det	2:det	_
2	aanvalsdrift	aanval_drift	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	3	nsubj	3:nsubj	_
3	openbaarde	openbaren	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	zich	zich	PRON	VNW|refl|pron|obl|red|3|getal	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	3	expl:pv	3:expl:pv	_
5	op	op	ADP	VZ|init	_	7	case	7:case	_
6	het	het	DET	LID|bep|stan|evon	Definite=Def	7	det	7:det	_
7	NK	NK	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	3	obl	3:obl:op	_
8	al	al	ADV	BW	_	3	advmod	3:advmod	_
9	direct	direct	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	12	amod	12:amod	_
10	na	na	ADP	VZ|init	_	12	case	12:case	_
11	de	de	DET	LID|bep|stan|rest	Definite=Def	12	det	12:det	_
12	start	start	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	3	obl	3:obl:na	SpaceAfter=No
13	.	.	PUNCT	LET	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl:pv	color:blue
1	hij	hij	PRON	VNW|pers|pron|nomin|vol|3|ev|masc	Case=Nom|Person=3|PronType=Prs	4	nsubj	4:nsubj	_
2	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
3	zich	zich	PRON	VNW|refl|pron|obl|red|3|getal	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	4	expl:pv	4:expl:pv	_
4	bewust	bewust	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	0	root	0:root	_
5	van	van	ADP	VZ|init	_	7	case	7:case	_
6	de	de	DET	LID|bep|stan|rest	Definite=Def	7	det	7:det	_
7	consequenties	consequentie	NOUN	N|soort|mv|basis	Number=Plur	4	obl	4:obl:van	_

~~~


