---
layout: base
title:  'Statistics of nsubj:pass in UD_Indonesian'
udver: '2'
---

## Treebank Statistics: UD_Indonesian: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="id-dep-nsubj.html">nsubj</a></tt>.

2216 nodes (2%) are attached to their parents as `nsubj:pass`.

2172 instances of `nsubj:pass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.78745487364621.

The following 24 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-PRON.html">PRON</a></tt> (857; 39% instances), <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-NOUN.html">NOUN</a></tt> (823; 37% instances), <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-PROPN.html">PROPN</a></tt> (483; 22% instances), <tt><a href="id-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id-pos-PRON.html">PRON</a></tt> (10; 0% instances), <tt><a href="id-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="id-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="id-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="id-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="id-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="id-pos-ADV.html">ADV</a></tt>-<tt><a href="id-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="id-pos-ADV.html">ADV</a></tt>-<tt><a href="id-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="id-pos-ADP.html">ADP</a></tt>-<tt><a href="id-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="id-pos-ADV.html">ADV</a></tt>-<tt><a href="id-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="id-pos-DET.html">DET</a></tt>-<tt><a href="id-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="id-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="id-pos-PART.html">PART</a></tt>-<tt><a href="id-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="id-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj:pass	color:blue
1	Bau	_	NOUN	_	_	0	root	_	_
2	apakah	_	ADV	_	_	1	advmod	_	_
3	yang	_	PRON	_	_	4	nsubj:pass	_	_
4	tercium	_	VERB	_	_	1	acl	_	_
5	olehku	_	NOUN	_	_	4	obj	_	SpaceAfter=No
6	?	_	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Film	_	NOUN	_	_	3	nsubj:pass	_	_
2	ini	_	DET	_	_	1	det	_	_
3	terdiri	_	VERB	_	_	0	root	_	_
4	dari	_	ADP	_	_	6	case	_	_
5	6	_	NUM	_	NumType=Card	6	nummod	_	_
6	musim	_	NOUN	_	_	3	obl	_	_
7	dengan	_	ADP	_	_	9	case	_	_
8	137	_	NUM	_	NumType=Card	9	nummod	_	_
9	episiode	_	NOUN	_	_	6	nmod	_	SpaceAfter=No
10	.	_	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Dingalan	_	PROPN	_	_	2	nsubj:pass	_	_
2	terbagi	_	VERB	_	_	0	root	_	_
3	menjadi	_	VERB	_	_	2	xcomp	_	_
4	11	_	NUM	_	NumType=Card	5	nummod	_	_
5	barangay	_	NOUN	_	_	3	obj	_	SpaceAfter=No
6	,	_	PUNCT	_	_	2	punct	_	_
7	yaitu	_	CCONJ	_	_	2	dep	_	SpaceAfter=No
8	:	_	PUNCT	_	_	2	punct	_	_

~~~


