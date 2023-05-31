---
layout: base
title:  'Statistics of compound:prt in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `compound:prt`

This relation is a language-specific subtype of .

668 nodes (1%) are attached to their parents as `compound:prt`.

494 instances of `compound:prt` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.8622754491018.

The following 7 pairs of parts of speech are connected with `compound:prt`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADP.html">ADP</a></tt> (459; 69% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt> (85; 13% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (66; 10% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (50; 7% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 compound:prt	color:blue
1	In	in	ADP	VZ|init	_	2	case	2:case	_
2	1983	1983	NUM	TW|hoofd|vrij	_	3	obl	3:obl:in	_
3	sloot	aan_sluiten	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	hij	hij	PRON	VNW|pers|pron|nomin|vol|3|ev|masc	Case=Nom|Person=3|PronType=Prs	3	nsubj	3:nsubj	_
5	zich	zich	PRON	VNW|refl|pron|obl|red|3|getal	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	3	expl:pv	3:expl:pv	_
6	aan	aan	ADP	VZ|fin	_	3	compound:prt	3:compound:prt	_
7	bij	bij	ADP	VZ|init	_	10	case	10:case	_
8	het	het	DET	LID|bep|stan|evon	Definite=Def	10	det	10:det	_
9	toenmalige	toenmalig	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	10	amod	10:amod	_
10	Vlaams	Vlaams	PROPN	SPEC|deeleigen	_	3	obl	3:obl:bij	_
11	Blok	Blok	PROPN	SPEC|deeleigen	_	10	flat	10:flat	SpaceAfter=No
12	.	.	PUNCT	LET	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 compound:prt	color:blue
1	Deze	deze	DET	VNW|aanw|det|stan|prenom|met-e|rest	_	2	det	2:det	_
2	maskers	masker	NOUN	N|soort|mv|basis	Number=Plur	3	nsubj	3:nsubj	_
3	komen	terug_komen	VERB	WW|pv|tgw|mv	Number=Plur|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	later	laat	ADJ	ADJ|vrij|comp|zonder	Degree=Cmp	3	advmod	3:advmod	_
5	in	in	ADP	VZ|init	_	7	case	7:case	_
6	zijn	zijn	PRON	VNW|bez|det|stan|vol|3|ev|prenom|zonder|agr	Person=3|Poss=Yes|PronType=Prs	7	nmod:poss	7:nmod:poss	_
7	werk	werk	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	3	obl	3:obl:in	_
8	heel	heel	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	9	advmod	9:advmod	_
9	veel	veel	ADV	VNW|onbep|grad|stan|vrij|zonder|basis	_	3	advmod	3:advmod	_
10	terug	terug	ADV	BW	_	3	compound:prt	3:compound:prt	SpaceAfter=No
11	.	.	PUNCT	LET	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 compound:prt	color:blue
1	Hij	hij	PRON	VNW|pers|pron|nomin|vol|3|ev|masc	Case=Nom|Person=3|PronType=Prs	2	nsubj	2:nsubj	_
2	maakte	kennis_maken	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	er	er	ADV	VNW|aanw|adv-pron|stan|red|3|getal	_	2	advmod	2:advmod	_
4	kennis	kennis	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	2	compound:prt	2:compound:prt	_
5	met	met	ADP	VZ|init	_	7	case	7:case	_
6	o.a.	onder ander	X	SPEC|afk	Abbr=Yes	7	nmod	7:nmod	_
7	Fernand	Fernand	PROPN	SPEC|deeleigen	_	2	obl	2:obl:met	_
8	Khnopff	Khnopff	PROPN	SPEC|deeleigen	_	7	flat	7:flat	SpaceAfter=No
9	.	.	PUNCT	LET	_	2	punct	2:punct	_

~~~


