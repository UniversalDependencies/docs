---
layout: base
title:  'Statistics of compound:prt in UD_English-CHILDES'
udver: '2'
---

## Treebank Statistics: UD_English-CHILDES: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="en_childes-dep-compound.html">compound</a></tt>.

1768 nodes (1%) are attached to their parents as `compound:prt`.

1755 instances of `compound:prt` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.75848416289593.

The following 16 pairs of parts of speech are connected with `compound:prt`: <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-ADP.html">ADP</a></tt> (1297; 73% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-ADV.html">ADV</a></tt> (414; 23% instances), <tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_childes-pos-ADP.html">ADP</a></tt> (20; 1% instances), <tt><a href="en_childes-pos-ADV.html">ADV</a></tt>-<tt><a href="en_childes-pos-ADP.html">ADP</a></tt> (11; 1% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (8; 0% instances), <tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_childes-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_childes-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="en_childes-pos-ADV.html">ADV</a></tt>-<tt><a href="en_childes-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-ADV.html">ADV</a></tt>-<tt><a href="en_childes-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-AUX.html">AUX</a></tt>-<tt><a href="en_childes-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-AUX.html">AUX</a></tt>-<tt><a href="en_childes-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_childes-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 compound:prt	color:blue
1	Go	go	VERB	VB	_	0	root	0:root	_
2	pick	pick	VERB	VB	_	1	compound	1:compound	_
3	those	that	DET	DT	_	4	det	4:det	_
4	pieces	piece	NOUN	NNS	_	2	obj	2:obj	_
5	up	up	ADP	RP	_	2	compound:prt	2:compound:prt	_
6	and	and	CCONJ	CC	_	9	cc	9:cc	_
7	you	you	PRON	PRP	_	9	nsubj	9:nsubj	_
8	may	may	AUX	MD	_	9	aux	9:aux	_
9	put	put	VERB	VB	_	1	conj	1:conj:and	_
10	your	you	PRON	PRP$	_	12	nmod:poss	12:nmod:poss	_
11	cowboy	cowboy	NOUN	NN	_	12	compound	12:compound	_
12	boots	boot	NOUN	NNS	_	9	obj	9:obj	_
13	on	on	ADV	RB	_	9	compound:prt	9:compound:prt	SpaceAfter=No
14	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 compound:prt	color:blue
1	Did	do	AUX	VBD	_	3	aux	3:aux	_
2	you	you	PRON	PRP	_	3	nsubj	3:nsubj	_
3	like	like	VERB	VB	_	0	root	0:root	_
4	the	the	DET	DT	_	5	det	5:det	_
5	balloon	balloon	NOUN	NN	_	3	obj	3:obj|8:mark	_
6	that	that	SCONJ	WDT	_	8	mark	5:ref	_
7	you	you	PRON	PRP	_	8	nsubj	8:nsubj	_
8	blow	blow	VERB	VBP	_	5	acl:relcl	5:acl:relcl	_
9	up	up	ADV	RP	_	8	compound:prt	8:compound:prt	SpaceAfter=No
10	?	?	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:prt	color:blue
1	She	she	PRON	PRP	_	2	nsubj	2:nsubj	_
2	needs	need	VERB	VBZ	_	0	root	0:root	_
3	a	a	DET	DT	_	4	det	4:det	_
4	towel	towel	NOUN	NN	_	2	obj	2:obj|5:nsubj:xsubj	_
5	dry	dry	NOUN	NN	_	2	xcomp	2:xcomp	_
6	off	off	ADP	RP	_	5	compound:prt	5:compound:prt	SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


