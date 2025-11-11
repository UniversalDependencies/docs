---
layout: base
title:  'Statistics of nmod in UD_Esperanto-Prago'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Prago: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="eo_prago-dep-nmod-poss.html">nmod:poss</a></tt>.

294 nodes (9%) are attached to their parents as `nmod`.

248 instances of `nmod` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.39795918367347.

The following 16 pairs of parts of speech are connected with `nmod`: <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (161; 55% instances), <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (51; 17% instances), <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_prago-pos-PRON.html">PRON</a></tt> (24; 8% instances), <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-PROPN.html">PROPN</a></tt> (11; 4% instances), <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-NUM.html">NUM</a></tt> (10; 3% instances), <tt><a href="eo_prago-pos-ADV.html">ADV</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-PRON.html">PRON</a></tt> (6; 2% instances), <tt><a href="eo_prago-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="eo_prago-pos-PRON.html">PRON</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="eo_prago-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eo_prago-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="eo_prago-pos-NUM.html">NUM</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="eo_prago-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="eo_prago-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eo_prago-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="eo_prago-pos-PRON.html">PRON</a></tt>-<tt><a href="eo_prago-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_prago-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 nmod	color:blue
1	Manifesto	manifesto	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
2	de	de	ADP	_	_	3	case	_	_
3	Prago	Prago	PROPN	_	Case=Nom|Number=Sing	1	nmod	_	_
4	de	de	ADP	_	_	6	case	_	_
5	la	la	DET	_	Definite=Def|PronType=Art	6	det	_	_
6	movado	movado	NOUN	_	Case=Nom|Number=Sing	3	nmod	_	_
7	por	por	ADP	_	_	10	case	_	_
8	la	la	DET	_	Definite=Def|PronType=Art	10	det	_	_
9	internacia	internacia	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	10	amod	_	_
10	lingvo	lingvo	NOUN	_	Case=Nom|Number=Sing	6	nmod	_	_
11	Esperanto	Esperanto	PROPN	_	Case=Nom|Number=Sing	10	appos	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nmod	color:blue
1	4	4	NUM	_	_	7	nummod	_	SpaceAfter=No
2	.	.	PUNCT	_	_	7	punct	_	_
3	Laŭ	laŭ	ADP	_	_	5	case	_	_
4	mia	mia	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	5	nmod:poss	_	_
5	profesio	profesio	NOUN	_	Case=Nom|Number=Sing	7	nmod	_	_
6	mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
7	estas	esti	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
8	:	:	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 nmod	color:blue
1	Neniam	neniam	ADV	_	_	4	advmod	_	_
2	mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
3	devas	devi	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	malami	malami	VERB	_	VerbForm=Inf	0	root	_	_
5	moki	moki	VERB	_	VerbForm=Inf	4	xcomp	_	_
6	aŭ	aŭ	CCONJ	_	_	7	cc	_	_
7	persekuti	persekuti	VERB	_	VerbForm=Inf	5	conj	_	_
8	iun	iu	PRON	_	Case=Acc|Number=Sing|PronType=Art	7	obj	_	_
9	pro	pro	ADP	_	_	10	case	_	_
10	tio	tio	PRON	_	Case=Nom|Number=Sing|PronType=Dem	7	nmod	_	SpaceAfter=No
11	,	,	PUNCT	_	_	18	punct	_	_
12	ke	ke	SCONJ	_	_	18	mark	_	_
13	lia	lia	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	14	nmod:poss	_	_
14	kredo	kredo	NOUN	_	Case=Nom|Number=Sing	18	nsubj	_	_
15	pri	pri	ADP	_	_	16	case	_	_
16	Dio	dio	NOUN	_	Case=Nom|Number=Sing	14	nmod	_	_
17	estas	esti	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	18	aux	_	_
18	alia	alia	PRON	_	Case=Nom|Number=Sing	10	acl:relcl	_	_
19	ol	ol	CCONJ	_	_	20	cc	_	_
20	mia	mia	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	18	nmod	_	SpaceAfter=No
21	.	.	PUNCT	_	_	4	punct	_	_

~~~


