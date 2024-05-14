---
layout: base
title:  'Statistics of aux in UD_Vietnamese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-TueCL: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="vi_tuecl-dep-aux-pass.html">aux:pass</a></tt>.

24 nodes (1%) are attached to their parents as `aux`.

19 instances of `aux` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-AUX.html">AUX</a></tt> (19; 79% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-AUX.html">AUX</a></tt> (2; 8% instances), <tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_tuecl-pos-AUX.html">AUX</a></tt> (2; 8% instances), <tt><a href="vi_tuecl-pos-NUM.html">NUM</a></tt>-<tt><a href="vi_tuecl-pos-AUX.html">AUX</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 aux	color:blue
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


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	Đây	đây	PRON	_	Deixis=Prox|PronType=Dem	5	nsubj	_	_
2	không	không	ADV	_	Polarity=Neg	5	advmod	_	_
3	phải	phải	AUX	_	VerbType=Aux	5	aux	_	_
4	là	là	AUX	_	VerbType=Cop	5	cop	_	_
5	vòng	vòng	NOUN	_	_	0	root	_	_
6	múa	múa	VERB	_	_	5	compound	_	_
7	Hula	Hula	NOUN	_	_	5	compound	_	SpaceAfter=No
8	,	,	PUNCT	_	_	5	punct	_	_
9	nó	nó	PRON	_	Gender=Neut|Number=Sing|Person=3|Polite=Infm|PronType=Prs	11	nsubj	_	_
10	là	là	AUX	_	VerbType=Cop	11	cop	_	_
11	đồ	đồ	NOUN	_	_	5	parataxis	_	_
12	móc	móc	NOUN	_	_	11	compound	_	_
13	quần áo	quần áo	NOUN	_	_	12	compound	_	_
14	.	.	PUNCT	_	_	5	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 aux	color:blue
1	Không	không	ADV	_	Polarity=Neg	4	advmod	_	_
2	phải	phải	AUX	_	VerbType=Aux	4	aux	_	_
3	của	của	ADP	_	_	4	case	_	_
4	ông	ông	PRON	_	Gender=Masc|Number=Sing|Person=2|Polite=Form|PronType=Prs	15	advcl	_	SpaceAfter=No
5	,	,	PUNCT	_	_	10	punct	_	_
6	cũng	cũng	ADV	_	_	10	advmod	_	_
7	không	không	ADV	_	Polarity=Neg	10	advmod	_	_
8	phải	phải	AUX	_	VerbType=Aux	10	aux	_	_
9	của	của	ADP	_	_	10	case	_	_
10	chúng tôi	chúng tôi	PRON	_	Number=Plur|Person=1|PronType=Prs	4	conj	_	SpaceAfter=No
11	,	,	PUNCT	_	_	15	punct	_	_
12	vậy	vậy	PART	_	_	15	discourse	_	_
13	hắn	hắn	PRON	_	Gender=Masc|Number=Sing|Person=3|Polite=Infm|PronType=Prs	15	nsubj	_	_
14	ở	ở	ADP	_	_	15	case	_	_
15	phe	phe	NOUN	_	_	0	root	_	_
16	ai	ai	DET	_	PronType=Int	15	nmod:poss	_	_
17	?	?	PUNCT	_	_	15	punct	_	SpaceAfter=No

~~~


