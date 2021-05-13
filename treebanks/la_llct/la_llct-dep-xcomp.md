---
layout: base
title:  'Statistics of xcomp in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="la_llct-dep-xcomp-pred.html">xcomp:pred</a></tt>.

3606 nodes (1%) are attached to their parents as `xcomp`.

2582 instances of `xcomp` (72%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.8261231281198.

The following 13 pairs of parts of speech are connected with `xcomp`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (2681; 74% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt> (430; 12% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (256; 7% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt> (125; 3% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (83; 2% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (19; 1% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-PRON.html">PRON</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-NUM.html">NUM</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 xcomp	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	9	cc	_	_
2	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	4	case	_	_
3	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	4	det	_	_
4	casa	casa	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	8	obl	_	_
5	homines	homo	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	8	obj	_	_
6	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	7	mark	_	_
7	abitandum	habito	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Imp|Case=Acc|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Ger|Voice=Pass	8	advcl	_	_
8	mittere	mitto	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	9	xcomp	_	_
9	debeamus	debeo	VERB	v|v|1|p|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|VerbType=Mod|Voice=Act	0	root	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 xcomp	color:blue
1	signum	signum	NOUN	n|n|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
2	+	+	PUNCT	SYM	_	3	punct	_	_
3	manus	manus	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	_
4	Rapprandi	Rapprandus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
5	qui	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	7	nsubj:pass	_	_
6	Ato	Atus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	7	xcomp	_	_
7	vocatur	uoco	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	acl:relcl	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	11	punct	_	_
9	qui	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	11	nsubj	_	_
10	ibi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	11	advmod	_	_
11	fuit	sum	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	_	SpaceAfter=No
12	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 xcomp	color:blue
1	+	+	PUNCT	SYM	_	10	punct	_	_
2	Ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
3	Rachipert	Rachipertus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	2	appos	_	_
4	rogatus	rogo	VERB	t|t|-|s|r|p|p|m|n|-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	3	acl	_	_
5	ad	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	6	case	_	_
6	Lucife	Lucifis	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	4	obl:arg	_	_
7	clerico	clericus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	6	appos	_	_
8	me	ego	PRON	p|p|1|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|Person=1|PronType=Prs	10	obl	_	_
9	testis	testis	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	10	xcomp	_	_
10	subscripsi	subscribo	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	10	punct	_	_

~~~


