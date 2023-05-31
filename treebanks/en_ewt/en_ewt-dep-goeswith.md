---
layout: base
title:  'Statistics of goeswith in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `goeswith`

This relation is universal.

155 nodes (0%) are attached to their parents as `goeswith`.

155 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.4.

The following 10 pairs of parts of speech are connected with `goeswith`: <tt><a href="en_ewt-pos-X.html">X</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (62; 40% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (31; 20% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (17; 11% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (16; 10% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (11; 7% instances), <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (7; 5% instances), <tt><a href="en_ewt-pos-ADP.html">ADP</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (6; 4% instances), <tt><a href="en_ewt-pos-AUX.html">AUX</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="en_ewt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	Robert	robertbryngelson@azurix	X	GW	Typo=Yes	0	root	0:root	_
2	Bryngelson@AZURIX	_	X	ADD	_	1	goeswith	1:goeswith	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 goeswith	color:blue
1	<<	<<	PUNCT	-LRB-	_	2	punct	2:punct	SpaceAfter=No
2	Compaq.com	compaq.com-notebook.url	NOUN	GW	Number=Sing|Typo=Yes	0	root	0:root	_
3	-	_	X	GW	_	2	goeswith	2:goeswith	_
4	notebook.url	_	X	NN	_	2	goeswith	2:goeswith	SpaceAfter=No
5	>>	>>	PUNCT	-RRB-	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 goeswith	color:blue
1	when	when	ADV	WRB	PronType=Int	3	advmod	3:advmod	_
2	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	3	nsubj	3:nsubj	_
3	turn	turn	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	7	advcl	7:advcl:when	_
4	21	21	NUM	CD	NumForm=Digit|NumType=Card	3	obj	3:obj	_
5	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	7	nsubj	7:nsubj	_
6	can	can	AUX	MD	VerbForm=Fin	7	aux	7:aux	_
7	party	party	VERB	VB	VerbForm=Inf	0	root	0:root	_
8	any	anywhere	ADV	GW	Typo=Yes	7	advmod	7:advmod	CorrectForm=anywhere
9	were	_	X	RB	_	8	goeswith	8:goeswith	_
10	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	11	nsubj	11:nsubj	_
11	want	want	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	8	advcl:relcl	8:advcl:relcl	_

~~~


