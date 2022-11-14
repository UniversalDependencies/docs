---
layout: base
title:  'Statistics of obl:iobj in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `obl:iobj`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-obl.html">obl</a></tt>.
There are also 7 other language-specific subtypes of `obl`: <tt><a href="vi_vtb-dep-obl-about.html">obl:about</a></tt>, <tt><a href="vi_vtb-dep-obl-adj.html">obl:adj</a></tt>, <tt><a href="vi_vtb-dep-obl-adv.html">obl:adv</a></tt>, <tt><a href="vi_vtb-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="vi_vtb-dep-obl-comp.html">obl:comp</a></tt>, <tt><a href="vi_vtb-dep-obl-tmod.html">obl:tmod</a></tt>, <tt><a href="vi_vtb-dep-obl-with.html">obl:with</a></tt>.

104 nodes (0%) are attached to their parents as `obl:iobj`.

104 instances of `obl:iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.08653846153846.

The following 8 pairs of parts of speech are connected with `obl:iobj`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (70; 67% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (19; 18% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (9; 9% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 obl:iobj	color:blue
1	Nếu	nếu	SCONJ	SC	_	3	mark	_	_
2	tôi	tôi	PRON	Pro	_	3	nsubj	_	_
3	ngã	ngã	VERB	V	_	6	advcl	_	_
4	xuống	xuống	ADV	Adv	_	3	compound:dir	_	_
5	,	,	PUNCT	,	_	3	punct	_	_
6	mong	mong	VERB	V	_	0	root	_	_
7	các	các	DET	Det	_	8	det	_	_
8	bạn	bạn	NOUN	N	_	10	nsubj	_	_
9	hãy	hãy	ADV	Adv	_	10	advmod	_	_
10	tin	tin	VERB	V	_	6	ccomp	_	_
11	cho	cho	ADP	Pre	_	12	case	_	_
12	bố mẹ	bố mẹ	NOUN	N	_	10	obl:iobj	_	_
13	tôi	tôi	PRON	Pro	_	12	nmod:poss	_	_
14	...	...	PUNCT	...	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 obl:iobj	color:blue
1	Ông	ông	NOUN	N	_	3	nsubj	_	_
2	đã	đã	ADV	Adv	_	3	advmod	_	_
3	trực tiếp	trực tiếp	VERB	V	_	0	root	_	_
4	"	"	PUNCT	``	_	5	punct	_	_
5	nghiệm thu	nghiệm thu	VERB	V	_	3	xcomp	_	_
6	"	"	PUNCT	``	_	5	punct	_	_
7	và	và	CCONJ	CC	_	8	cc	_	_
8	công tác	công tác	VERB	V	_	5	conj	_	_
9	tư tưởng	tư tưởng	NOUN	N	_	8	obj	_	_
10	cho	cho	ADP	Pre	_	11	case	_	_
11	Hải	Hải	PROPN	NNP	_	8	obl:iobj	_	_
12	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obl:iobj	color:blue
1	Cô	cô	NOUN	N	_	2	nsubj	_	_
2	chỉ	chỉ	VERB	V	_	0	root	_	_
3	cho	cho	ADP	Pre	_	4	case	_	_
4	tôi	tôi	PRON	Pro	_	2	obl:iobj	_	_
5	biết	biết	VERB	V	_	4	acl:subj	_	_
6	làm	làm	VERB	V	_	5	xcomp	_	_
7	thế nào	thế nào	PRON	Pro	_	6	obl	_	_
8	để	để	ADP	Pre	_	10	mark:pcomp	_	_
9	được	được	AUX	AUX	_	10	aux:pass	_	_
10	yên ổn	yên ổn	ADJ	Adj	_	6	advcl:objective	_	_
11	?	?	PUNCT	?	_	6	punct	_	_
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


