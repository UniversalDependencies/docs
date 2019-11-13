---
layout: base
title:  'Statistics of compound:prt in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `compound:prt`

This relation is a language-specific subtype of .

1980 nodes (1%) are attached to their parents as `compound:prt`.

1163 instances of `compound:prt` (59%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.53737373737374.

The following 10 pairs of parts of speech are connected with `compound:prt`: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-ADP.html">ADP</a></tt> (1310; 66% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt> (192; 10% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (185; 9% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt> (170; 9% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (87; 4% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-DET.html">DET</a></tt> (26; 1% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 compound:prt	color:blue
1	Moeder	moeder	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	3	nsubj	3:nsubj	_
2	Mien	Mien	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	1	appos	1:appos	_
3	spoorde	sporen	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	haar	haar	PRON	VNW|pers|pron|obl|vol|3|getal|fem	Case=Acc|Person=3|PronType=Prs	3	obj	3:obj|9:nsubj:xsubj	_
5	aan	aan	ADP	VZ|fin	_	3	compound:prt	3:compound:prt	_
6	toch	toch	ADV	BW	_	9	advmod	9:advmod	_
7	op	op	ADP	VZ|fin	_	9	compound:prt	9:compound:prt	_
8	te	te	ADP	VZ|init	_	9	mark	9:mark	_
9	stappen	stappen	VERB	WW|inf|vrij|zonder	VerbForm=Inf	3	xcomp	3:xcomp	SpaceAfter=No
10	.	.	PUNCT	LET	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 compound:prt	color:blue
1	Daar	daar	ADV	VNW|aanw|adv-pron|obl|vol|3o|getal	_	2	advmod	2:advmod	_
2	besloot	besluiten	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	hij	hij	PRON	VNW|pers|pron|nomin|vol|3|ev|masc	Case=Nom|Person=3|PronType=Prs	2	nsubj	2:nsubj|8:nsubj:xsubj	_
4	wat	wat	DET	VNW|onbep|pron|stan|vol|3o|ev	_	5	det	5:det	_
5	misverstanden	misverstand	NOUN	N|soort|mv|basis	Number=Plur	8	obj	8:obj	_
6	weg	weg	ADV	BW	_	8	compound:prt	8:compound:prt	_
7	te	te	ADP	VZ|init	_	8	mark	8:mark	_
8	werken	werken	VERB	WW|inf|vrij|zonder	VerbForm=Inf	2	xcomp	2:xcomp	SpaceAfter=No
9	.	.	PUNCT	LET	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound:prt	color:blue
1	Rotterdam	Rotterdam	PROPN	N|eigen|ev|basis|onz|stan	Gender=Neut|Number=Sing	6	nsubj	6:nsubj	_
2	kan	kunnen	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	6	aux	6:aux	_
3	dus	dus	ADV	BW	_	6	advmod	6:advmod	_
4	nader	nader	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	6	advmod	6:advmod	_
5	kennis	kennis	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	6	compound:prt	6:compound:prt	_
6	maken	maken	VERB	WW|inf|vrij|zonder	VerbForm=Inf	0	root	0:root	_
7	met	met	ADP	VZ|init	_	9	case	9:case	_
8	de	de	DET	LID|bep|stan|rest	Definite=Def	9	det	9:det	_
9	liefhebbers	liefhebber	NOUN	N|soort|mv|basis	Number=Plur	6	obl	6:obl:met	SpaceAfter=No
10	.	.	PUNCT	LET	_	6	punct	6:punct	_
11	"	"	PUNCT	LET	_	6	punct	6:punct	_

~~~


