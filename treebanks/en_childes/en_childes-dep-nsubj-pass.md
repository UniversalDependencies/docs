---
layout: base
title:  'Statistics of nsubj:pass in UD_English-CHILDES'
udver: '2'
---

## Treebank Statistics: UD_English-CHILDES: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="en_childes-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="en_childes-dep-nsubj-outer.html">nsubj:outer</a></tt>.

237 nodes (0%) are attached to their parents as `nsubj:pass`.

236 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.41772151898734.

The following 9 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-PRON.html">PRON</a></tt> (163; 69% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (53; 22% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-PROPN.html">PROPN</a></tt> (9; 4% instances), <tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_childes-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-AUX.html">AUX</a></tt>-<tt><a href="en_childes-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-AUX.html">AUX</a></tt>-<tt><a href="en_childes-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-INTJ.html">INTJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nsubj:pass	color:blue
1	It	it	PRON	PRP	_	4	nsubj	4:nsubj	_
2	's	be	AUX	VBZ	_	4	cop	4:cop	_
3	a	a	DET	DT	_	4	det	4:det	_
4	celebration	celebration	NOUN	NN	_	0	root	0:root	_
5	of	of	ADP	IN	_	7	case	7:case	_
6	the	the	DET	DT	_	7	det	7:det	_
7	day	day	NOUN	NN	_	4	nmod	4:nmod:of	_
8	you	you	PRON	PRP	_	10	nsubj:pass	10:nsubj:pass	_
9	got	get	AUX	VBD	_	10	aux:pass	10:aux:pass	_
10	born	bear	VERB	VBN	_	7	acl:relcl	7:acl:relcl	SpaceAfter=No
11	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:pass	color:blue
1	Someone	someone	PRON	NN	_	3	nmod:poss	3:nmod:poss	_
2	's	's	PART	POS	_	1	case	1:case	_
3	picture	picture	NOUN	NN	_	5	nsubj:pass	5:nsubj:pass	_
4	gotted	get	AUX	VBD	_	5	aux:pass	5:aux:pass	_
5	ripped	rip	VERB	VBN	_	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Tony	Tony	PROPN	NNP	_	3	nsubj:pass	3:nsubj:pass|4:nsubj:xsubj	_
2	's	have	AUX	VBZ	_	3	aux	3:aux	_
3	called	call	VERB	VBN	_	0	root	0:root	_
4	man	man	NOUN	NN	_	3	xcomp	3:xcomp	SpaceAfter=No
5	?	?	PUNCT	?	_	3	punct	3:punct	_

~~~


