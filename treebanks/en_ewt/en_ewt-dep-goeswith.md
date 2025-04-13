---
layout: base
title:  'Statistics of goeswith in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `goeswith`

This relation is universal.

171 nodes (0%) are attached to their parents as `goeswith`.

171 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.35672514619883.

The following 9 pairs of parts of speech are connected with `goeswith`: <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (77; 45% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (27; 16% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (17; 10% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (17; 10% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (14; 8% instances), <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (10; 6% instances), <tt><a href="en_ewt-pos-ADP.html">ADP</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (6; 4% instances), <tt><a href="en_ewt-pos-AUX.html">AUX</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="en_ewt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	Robert	RobertBryngelson@AZURIX	PROPN	GW	Typo=Yes	0	root	0:root	_
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	Over	overpriced	ADJ	AFX	Degree=Pos|Typo=Yes	0	root	0:root	_
2	priced	_	X	JJ	_	1	goeswith	1:goeswith	_
3	for	for	ADP	IN	_	5	case	5:case	_
4	Mexican	Mexican	ADJ	JJ	Degree=Pos	5	amod	5:amod	_
5	food	food	NOUN	NN	Number=Sing	1	obl	1:obl:for	_

~~~


