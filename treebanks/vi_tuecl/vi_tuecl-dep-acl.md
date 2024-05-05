---
layout: base
title:  'Statistics of acl in UD_Vietnamese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-TueCL: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="vi_tuecl-dep-acl-relcl.html">acl:relcl</a></tt>.

12 nodes (1%) are attached to their parents as `acl`.

12 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `acl`: <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt> (11; 92% instances), <tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 acl	color:blue
1	Đâu	đâu	PRON	_	PronType=Int	4	nsubj	_	_
2	là	là	AUX	_	_	4	cop	_	_
3	tiềm năng	tiềm năng	ADJ	_	_	4	amod	_	_
4	ảnh hưởng	ảnh hưởng	NOUN	_	_	0	root	_	_
5	lên	lên	ADP	_	_	6	case	_	_
6	khả năng	khả năng	NOUN	_	_	4	nmod	_	_
7	nhìn	nhìn	VERB	_	_	6	acl	_	_
8	của	của	ADP	_	_	9	case	_	_
9	bệnh nhân	bệnh nhân	NOUN	_	_	6	nmod:poss	_	_
10	?	?	PUNCT	_	_	4	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 acl	color:blue
1	Mọi	mọi	DET	_	_	2	det	_	_
2	thứ	thứ	NOUN	_	_	4	nsubj	_	_
3	đều	đều	ADV	_	_	4	advmod	_	_
4	hỗn độn	hỗn độn	ADJ	_	_	0	root	_	_
5	và	và	CCONJ	_	_	7	cc	_	_
6	chẳng	chẳng	ADV	_	Polarity=Neg	7	advmod	_	_
7	có	có	VERB	_	_	4	conj	_	_
8	ai	ai	PRON	_	PronType=Ind	7	nsubj	_	_
9	muốn	muốn	VERB	_	VerbType=Mod	8	acl	_	_
10	phải	phải	AUX	_	VerbType=Aux	9	aux	_	_
11	một	một	NUM	_	NumType=Card	12	nummod	_	_
12	mình	mình	PRON	_	PronType=Prs|Reflex=Yes	9	xcomp	_	_
13	.	.	PUNCT	_	_	4	punct	_	SpaceAfter=No

~~~


