---
layout: base
title:  'Statistics of det:predet in UD_English-CHILDES'
udver: '2'
---

## Treebank Statistics: UD_English-CHILDES: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="en_childes-dep-det.html">det</a></tt>.

283 nodes (0%) are attached to their parents as `det:predet`.

283 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.16254416961131.

The following 10 pairs of parts of speech are connected with `det:predet`: <tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_childes-pos-DET.html">DET</a></tt> (237; 84% instances), <tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_childes-pos-PRON.html">PRON</a></tt> (29; 10% instances), <tt><a href="en_childes-pos-PRON.html">PRON</a></tt>-<tt><a href="en_childes-pos-DET.html">DET</a></tt> (7; 2% instances), <tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_childes-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="en_childes-pos-ADV.html">ADV</a></tt>-<tt><a href="en_childes-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="en_childes-pos-DET.html">DET</a></tt>-<tt><a href="en_childes-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_childes-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-ADP.html">ADP</a></tt>-<tt><a href="en_childes-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-PRON.html">PRON</a></tt>-<tt><a href="en_childes-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_childes-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 det:predet	color:blue
1	Look	look	VERB	VB	_	0	root	0:root	_
2	at	at	ADP	IN	_	5	case	5:case	_
3	all	all	DET	PDT	_	5	det:predet	5:det:predet	_
4	the	the	DET	DT	_	5	det	5:det	_
5	mess	mess	NOUN	NN	_	1	obl	1:obl:at	SpaceAfter=No
6	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 det:predet	color:blue
1	All	all	PRON	PDT	_	3	det:predet	3:det:predet	_
2	those	that	DET	DT	_	3	det	3:det	_
3	cards	card	NOUN	NNS	_	0	root	0:root	SpaceAfter=No
4	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det:predet	color:blue
1	All	all	DET	PDT	_	2	det:predet	2:det:predet	_
2	these	this	PRON	DT	_	4	nsubj	4:nsubj	_
3	are	be	AUX	VBP	_	4	cop	4:cop	_
4	mine	mine	PRON	PRP	_	0	root	0:root	SpaceAfter=No
5	!	!	PUNCT	!	_	4	punct	4:punct	_

~~~


