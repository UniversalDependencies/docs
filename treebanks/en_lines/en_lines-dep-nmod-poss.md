---
layout: base
title:  'Statistics of nmod:poss in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="en_lines-dep-nmod.html">nmod</a></tt>.

1893 nodes (2%) are attached to their parents as `nmod:poss`.

1887 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35974643423138.

The following 13 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (1618; 85% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (158; 8% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (73; 4% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (14; 1% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (13; 1% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (5; 0% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	Thank	thank	VERB	PRES	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
2	you	you	PRON	PERS-P2	_	1	obj	_	_
3	for	for	ADP	_	_	5	case	_	_
4	your	you	PRON	P2-GEN	Person=2|Poss=Yes|PronType=Prs	5	nmod:poss	_	_
5	help	help	NOUN	SG-NOM	Number=Sing	1	obl	_	SpaceAfter=No
6	.	.	PUNCT	Period	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 nmod:poss	color:blue
1	Mama	Mama	PROPN	SG-NOM	Number=Sing	4	nsubj	_	_
2	would	would	AUX	PAST-AUX	VerbForm=Fin	4	aux	_	_
3	not	not	PART	NEG	_	4	advmod	_	_
4	have	have	VERB	INF	VerbForm=Inf	0	root	_	_
5	her	she	PRON	P3SG-GEN	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	nmod:poss	_	_
6	daughter	daughter	NOUN	SG-NOM	Number=Sing	4	obj	_	_
7	given	give	VERB	PASS	Tense=Past|VerbForm=Part|Voice=Pass	4	xcomp	_	_
8	up	up	ADV	_	_	7	compound:prt	_	_
9	to	to	ADP	_	_	12	case	_	_
10	Papa	Papa	PROPN	SG	Number=Sing	12	nmod:poss	_	SpaceAfter=No
11	's	's	PART	GEN	_	10	case	_	_
12	passion	passion	NOUN	SG-NOM	Number=Sing	7	obl	_	SpaceAfter=No
13	.	.	PUNCT	Period	_	4	punct	_	SpacesAfter=\n\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	Village	village	NOUN	SG-NOM	Case=Nom	5	nsubj	_	_
2	of	of	ADP	_	_	4	case	_	_
3	Lepers	leper	NOUN	PL-GEN	Number=Plur	4	nmod:poss	_	_
4	houses	house	NOUN	PL-NOM	Number=Plur	1	nmod	_	_
5	facing	face	VERB	ING	Tense=Pres|VerbForm=Part	0	root	_	_
6	the	the	DET	DEF	Definite=Def|PronType=Art	7	det	_	_
7	wall	wall	NOUN	SG-NOM	Number=Sing	8	compound	_	_
8	Zion	Zion	PROPN	SG-NOM	Number=Sing	5	obj	_	SpaceAfter=No
9	.	.	PUNCT	Period	_	5	punct	_	_

~~~


