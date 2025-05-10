---
layout: base
title:  'Statistics of nsubj in UD_Esperanto-Prago'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Prago: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="eo_prago-dep-nsubj-pass.html">nsubj:pass</a></tt>.

55 nodes (7%) are attached to their parents as `nsubj`.

55 instances of `nsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.27272727272727.

The following 10 pairs of parts of speech are connected with `nsubj`: <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (20; 36% instances), <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_prago-pos-PRON.html">PRON</a></tt> (18; 33% instances), <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-PRON.html">PRON</a></tt> (7; 13% instances), <tt><a href="eo_prago-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (3; 5% instances), <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="eo_prago-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eo_prago-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="eo_prago-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eo_prago-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="eo_prago-pos-NUM.html">NUM</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="eo_prago-pos-PRON.html">PRON</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_prago-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj	color:blue
1	Plena	plena	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	2	amod	_	_
2	posedo	posedo	NOUN	_	Case=Nom|Number=Sing	5	nsubj	_	_
3	de	de	ADP	_	_	4	case	_	_
4	Esperanto	Esperanto	PROPN	_	Case=Nom|Number=Sing	2	nmod	_	_
5	eblas	ebli	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
6	eĉ	eĉ	ADV	_	_	7	advmod	_	_
7	per	per	ADP	_	_	8	case	_	_
8	memstudado	memstudado	NOUN	_	Case=Nom|Number=Sing	5	obl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nsubj	color:blue
1	Nur	nur	ADV	_	_	2	advmod	_	_
2	malgranda	malgranda	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	3	amod	_	_
3	procentaĵo	procentaĵo	NOUN	_	Case=Nom|Number=Sing	12	nsubj	_	_
4	el	el	ADP	_	_	5	case	_	_
5	tiuj	tiu	PRON	_	Case=Nom|Number=Plur|PronType=Dem	3	nmod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	_
7	kiuj	kiu	PRON	_	Case=Nom|Number=Plur|PronType=Rel	8	nsubj	_	_
8	studas	studi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	_
9	fremdan	fremda	ADJ	_	Case=Acc|Degree=Pos|Number=Sing	10	amod	_	_
10	lingvon	lingvo	NOUN	_	Case=Acc|Number=Sing	8	obj	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	ekmastras	ekmastri	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
13	ĝin	ĝi	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	12	obj	_	SpaceAfter=No
14	.	.	PUNCT	_	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	Ni	ni	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
2	estas	esti	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	movado	movado	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
4	por	por	ADP	_	_	6	case	_	_
5	demokratia	demokratia	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	6	amod	_	_
6	komunikado	komunikado	NOUN	_	Case=Nom|Number=Sing	3	nmod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


