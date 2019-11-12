---
layout: base
title:  'Statistics of csubj:pass in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="de_gsd-dep-csubj.html">csubj</a></tt>.

46 nodes (0%) are attached to their parents as `csubj:pass`.

39 instances of `csubj:pass` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.60869565217391.

The following 5 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-VERB.html">VERB</a></tt> (40; 87% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 csubj:pass	color:blue
1	Was	was	PRON	PWS	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	3	nsubj	_	_
2	nicht	nicht	PART	PTKNEG	Polarity=Neg	3	advmod	_	_
3	gepasst	passen	VERB	VVPP	VerbForm=Part	10	csubj:pass	_	_
4	hat	haben	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	SpaceAfter=No
5	,	,	PUNCT	$,	_	3	punct	_	_
6	wurde	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	10	aux:pass	_	_
7	sehr	sehr	ADV	ADV	_	8	advmod	_	_
8	schnell	schnell	ADV	ADJD	_	10	advmod	_	_
9	passend	passend	ADJ	ADJD	_	10	xcomp	_	_
10	gemacht	machen	VERB	VVPP	VerbForm=Part	0	root	_	SpaceAfter=No
11	.	.	PUNCT	$.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 csubj:pass	color:blue
1	So	so	ADV	ADV	_	3	advmod	_	_
2	wurde	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	3	aux:pass	_	_
3	erzählt	erzählen	VERB	VVPP	VerbForm=Part	0	root	_	SpaceAfter=No
4	,	,	PUNCT	$,	_	8	punct	_	_
5	die	der	DET	ART	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
6	Juden	Jude	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	8	nsubj	_	_
7	seien	sein	AUX	VAFIN	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	betrügerisch	betrügerisch	ADJ	ADJD	_	3	csubj:pass	_	_
9	und	und	CCONJ	KON	_	15	cc	_	_
10	würden	werden	AUX	VAFIN	Mood=Sub|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	15	aux	_	_
11	die	der	DET	ART	Case=Nom|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	12	det	_	_
12	Brunnen	Brunnen	NOUN	NN	Case=Nom|Number=Plur	15	obj	_	_
13	der	der	DET	ART	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	Stadt	Stadt	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	12	nmod	_	_
15	vergiften	vergiften	VERB	VVINF	VerbForm=Inf	8	conj	_	SpaceAfter=No
16	.	.	PUNCT	$.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 csubj:pass	color:blue
1	Es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
2	wird	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	3	aux:pass	_	_
3	angenommen	annehmen	VERB	VVPP	VerbForm=Part	0	root	_	SpaceAfter=No
4	,	,	PUNCT	$,	_	10	punct	_	_
5	dass	dass	SCONJ	KOUS	_	10	mark	_	_
6	das	der	DET	ART	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	7	det	_	_
7	Olešnice	Olešnice	PROPN	NN	Case=Nom|Gender=Neut|Number=Sing	10	nsubj	_	_
8	-	-	PUNCT	$(	_	9	punct	_	_
9	Tal	Tal	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	7	flat	_	_
10	Ausgangspunkt	Ausgangspunkt	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	3	csubj:pass	_	_
11	der	der	DET	ART	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
12	deutschen	deutsch	ADJ	ADJA	Case=Gen|Gender=Fem|Number=Sing	13	amod	_	_
13	Kolonisation	Kolonisation	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	10	nmod	_	_
14	der	der	DET	ART	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	Hostinnér	Hostinnér	PROPN	ADJA	Case=Gen|Gender=Fem|Number=Sing	13	nmod	_	_
16	Gegend	Gegend	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	15	flat	_	_
17	war	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	cop	_	SpaceAfter=No
18	.	.	PUNCT	$.	_	3	punct	_	_

~~~


