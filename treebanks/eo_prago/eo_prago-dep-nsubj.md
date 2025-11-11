---
layout: base
title:  'Statistics of nsubj in UD_Esperanto-Prago'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Prago: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="eo_prago-dep-nsubj-pass.html">nsubj:pass</a></tt>.

221 nodes (7%) are attached to their parents as `nsubj`.

207 instances of `nsubj` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.08597285067873.

The following 13 pairs of parts of speech are connected with `nsubj`: <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_prago-pos-PRON.html">PRON</a></tt> (109; 49% instances), <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (70; 32% instances), <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-PRON.html">PRON</a></tt> (16; 7% instances), <tt><a href="eo_prago-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (7; 3% instances), <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (7; 3% instances), <tt><a href="eo_prago-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eo_prago-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="eo_prago-pos-AUX.html">AUX</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="eo_prago-pos-NUM.html">NUM</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="eo_prago-pos-PRON.html">PRON</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="eo_prago-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eo_prago-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="eo_prago-pos-AUX.html">AUX</a></tt>-<tt><a href="eo_prago-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_prago-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj	color:blue
1	3	3	NUM	_	_	4	nummod	_	SpaceAfter=No
2	.	.	PUNCT	_	_	4	punct	_	_
3	Mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	naskiĝis	naskiĝi	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
5	en	en	ADP	_	_	7	case	_	_
6	la	la	DET	_	Definite=Def	7	det	_	_
7	jaro	jaro	NOUN	_	Case=Nom|Number=Sing	4	obl	_	SpaceAfter=No
8	:	:	PUNCT	_	_	4	punct	_	_

~~~


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


