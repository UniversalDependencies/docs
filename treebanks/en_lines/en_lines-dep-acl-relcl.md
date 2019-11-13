---
layout: base
title:  'Statistics of acl:relcl in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="en_lines-dep-acl.html">acl</a></tt>.

759 nodes (1%) are attached to their parents as `acl:relcl`.

759 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.11857707509881.

The following 20 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (589; 78% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (58; 8% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (30; 4% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (28; 4% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (17; 2% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (8; 1% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-X.html">X</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	I	I	PRON	PERS-P1SG-NOM	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	have	have	VERB	PRES	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	no	no	DET	NEG	_	4	det	_	_
4	idea	idea	NOUN	SG-NOM	Number=Sing	2	obj	_	_
5	what	what	PRON	WH	PronType=Int	8	dislocated	_	_
6	you	you	PRON	PERS-P2	_	8	nsubj	_	SpaceAfter=No
7	're	be	AUX	PRES-AUX	Mood=Ind|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	talking	talk	VERB	ING	Tense=Pres|VerbForm=Part	4	acl:relcl	_	_
9	about	about	ADP	_	_	5	case	_	SpaceAfter=No
10	.	.	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl:relcl	color:blue
1	It	it	PRON	PERS-SG	_	3	nsubj	_	SpaceAfter=No
2	's	be	AUX	PRES	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	all	all	PRON	TOT-SG	Case=Nom	0	root	_	_
4	that	that	PRON	REL	PronType=Rel	6	nsubj	_	SpaceAfter=No
5	's	be	AUX	PRES-AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	keeping	keep	VERB	ING	Tense=Pres|VerbForm=Part	3	acl:relcl	_	_
7	me	I	PRON	PERS-P1SG-ACC	Case=Acc|Number=Sing|Person=1|PronType=Prs	6	obj	_	_
8	going	go	VERB	ING	Tense=Pres|VerbForm=Part	6	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 acl:relcl	color:blue
1	Fred	Fred	PROPN	SG-NOM	Number=Sing	10	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	Comma	_	5	punct	_	_
3	who	who	PRON	WH-REL	PronType=Int	5	nsubj	_	_
4	had	have	AUX	PAST-AUX	Mood=Ind|Tense=Past|VerbForm=Fin	5	aux	_	_
5	finished	finish	VERB	PERF	Mood=Ind|Tense=Past|VerbForm=Fin	1	acl:relcl	_	_
6	his	he	PRON	P3SG-GEN	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	8	nmod:poss	_	_
7	own	own	ADJ	POS	Degree=Pos	8	amod	_	_
8	list	list	NOUN	SG-NOM	Number=Sing	5	obj	_	SpaceAfter=No
9	,	,	PUNCT	Comma	_	5	punct	_	_
10	peered	peer	VERB	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
11	over	over	ADV	_	_	10	compound:prt	_	_
12	at	at	ADP	_	_	13	case	_	_
13	Harry	Harry	PROPN	SG	Number=Sing	10	obl	_	SpaceAfter=No
14	's	's	PART	GEN	_	13	case	_	SpaceAfter=No
15	.	.	PUNCT	Period	_	10	punct	_	_

~~~


