---
layout: base
title:  'Statistics of goeswith in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `goeswith`

This relation is universal.

315 nodes (0%) are attached to their parents as `goeswith`.

315 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.34603174603175.

The following 13 pairs of parts of speech are connected with `goeswith`: <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (187; 59% instances), <tt><a href="en_ewt-pos-X.html">X</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (60; 19% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (19; 6% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (16; 5% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (11; 3% instances), <tt><a href="en_ewt-pos-ADP.html">ADP</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (6; 2% instances), <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (5; 2% instances), <tt><a href="en_ewt-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="en_ewt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="en_ewt-pos-AUX.html">AUX</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 goeswith	color:blue
1	-	-	PUNCT	NFP	_	2	punct	2:punct	_
2	ENRON-CPS	enron-cps	NOUN	GW	_	0	root	0:root	_
3	(	(	X	GW	_	2	goeswith	2:goeswith	SpaceAfter=No
4	GISB	gisb	X	GW	_	2	goeswith	2:goeswith	_
5	rev1	rev1	X	GW	_	2	goeswith	2:goeswith	SpaceAfter=No
6	)	)	X	GW	_	2	goeswith	2:goeswith	SpaceAfter=No
7	.doc	.doc	X	NN	Number=Sing	2	goeswith	2:goeswith	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	Robert	robert	X	GW	_	0	root	0:root	_
2	Bryngelson@AZURIX	bryngelson@azurix	X	ADD	_	1	goeswith	1:goeswith	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 goeswith	color:blue
1	when	when	SCONJ	WRB	PronType=Int	3	mark	3:mark	_
2	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	3	nsubj	3:nsubj	_
3	turn	turn	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	7	advcl	7:advcl:when	_
4	21	21	NUM	CD	NumType=Card	3	obj	3:obj	_
5	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	7	nsubj	7:nsubj	_
6	can	can	AUX	MD	VerbForm=Fin	7	aux	7:aux	_
7	party	party	VERB	VB	VerbForm=Inf	0	root	0:root	_
8	any	any	ADV	GW	_	7	advmod	7:advmod	_
9	were	where	X	RB	_	8	goeswith	8:goeswith	Typo=Yes
10	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	11	nsubj	11:nsubj	_
11	want	want	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	8	acl:relcl	8:acl:relcl	_

~~~


