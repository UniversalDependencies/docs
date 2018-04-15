---
layout: base
title:  'Statistics of acl:relcl in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-acl.html">acl</a></tt>.
There are also 1 other language-specific subtypes of `acl`: <tt><a href="pcm_nsc-dep-acl-cleft.html">acl:cleft</a></tt>.

182 nodes (1%) are attached to their parents as `acl:relcl`.

182 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.74725274725275.

The following 17 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (125; 69% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (27; 15% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt> (3; 2% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="pcm_nsc-pos-DET.html">DET</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="pcm_nsc-pos-ADP.html">ADP</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-SYM.html">SYM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 acl:relcl	color:blue
1	im	im	PRON	_	_	2	nsubj:expl	_	_
2	get	get	VERB	_	_	0	root	_	_
3	one	one	DET	_	_	4	det	_	_
4	man	man	NOUN	_	_	2	nsubj:quasi	_	_
5	wey	wey	SCONJ	_	_	10	mark	_	_
6	be	be	VERB	_	_	5	fixed	_	_
7	sey	sey	SCONJ	_	_	6	fixed	_	_
8	im	im	PRON	_	_	10	nsubj	_	_
9	don	don	AUX	_	_	10	aux	_	_
10	carry	carry	VERB	_	_	4	acl:relcl	_	_
11	people	people	NOUN	_	_	10	obj	_	_
12	dey	dey	AUX	_	_	13	aux	_	_
13	go	go	VERB	_	_	10	compound:svc	_	_
14	abroad	abroad	ADV	_	_	13	obl:arg	_	_
15	//	//	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl:relcl	color:blue
1	we	we	PRON	_	_	3	nsubj	_	_
2	neva	neva	AUX	_	_	3	aux	_	_
3	know	know	VERB	_	_	0	root	_	_
4	wetin	wetin	PRON	_	_	3	obj	_	_
5	dey	dey	AUX	_	_	6	aux	_	_
6	come	come	VERB	_	_	4	acl:relcl	_	_
7	so	so	ADV	_	_	6	advmod	_	_
8	//	//	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 acl:relcl	color:blue
1	why	why	ADV	_	_	4	advmod	_	_
2	I	I	PRON	_	_	4	nsubj	_	_
3	go	go	AUX	_	_	4	aux	_	_
4	let	let	VERB	_	_	0	root	_	_
5	make	make	AUX	_	_	8	aux	_	_
6	you	you	PRON	_	_	8	nsubj	_	_
7	dey	dey	AUX	_	_	8	aux	_	_
8	chop	chop	VERB	_	_	4	ccomp	_	_
9	something	something	NOUN	_	_	8	obj	_	_
10	wey	wey	SCONJ	_	_	11	mark	_	_
11	bad	bad	ADJ	_	_	9	acl:relcl	_	_
12	like	like	ADP	_	_	13	case	_	_
13	dat	dat	PRON	_	_	11	obl:mod	_	_
14	//	//	PUNCT	_	_	4	punct	_	_

~~~


