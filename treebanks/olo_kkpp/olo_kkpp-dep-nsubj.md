---
layout: base
title:  'Statistics of nsubj in UD_Livvi-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Livvi-KKPP: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="olo_kkpp-dep-nsubj-cop.html">nsubj:cop</a></tt>.

119 nodes (7%) are attached to their parents as `nsubj`.

91 instances of `nsubj` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.85714285714286.

The following 4 pairs of parts of speech are connected with `nsubj`: <tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt> (77; 65% instances), <tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="olo_kkpp-pos-PRON.html">PRON</a></tt> (32; 27% instances), <tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="olo_kkpp-pos-PROPN.html">PROPN</a></tt> (9; 8% instances), <tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj	color:blue
1	Vuvvennu	vuozi	NOUN	NOUN	Case=Ess|Number=Sing	5	obl	_	_
2	2017	2017	NUM	NUM	Case=Nom|Number=Sing	1	nummod	_	_
3	Karjalan	Karjala	PROPN	PROPN	Case=Gen|Number=Sing	4	nmod:poss	_	_
4	tazavaldu	tazavaldu	NOUN	NOUN	Case=Nom|Number=Sing	5	nsubj	_	_
5	pidäy	pidiä	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	omassah	oma	ADJ	ADJ	Case=Ter|Number=Sing	7	amod	_	_
7	97-vuozipäiviä	97-vuozipäivy	NOUN	NOUN	Case=Par|Number=Sing	5	obj	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Häi	Häi	PRON	PRON	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	oppi	oppie	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	heittiä	heittiä	VERB	VERB	VerbForm=Inf	2	xcomp	_	_
4	kurindan	kurindu	NOUN	NOUN	Case=Acc|Number=Sing	3	obj	_	_
5	da	da	CCONJ	CCONJ	_	6	cc	_	_
6	juondan	juondu	NOUN	NOUN	Case=Acc|Number=Sing	4	conj	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj	color:blue
1	–	–	PUNCT	PUNCT	_	4	punct	_	_
2	Virtaranta	Virtaranta	PROPN	PROPN	Case=Nom|Number=Sing	4	nsubj	_	_
3	“	“	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No
4	paloi	palua	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	”	”	PUNCT	PUNCT	_	4	punct	_	_
6	tverinkarjalan	tverinkarjala	NOUN	NOUN	Case=Gen|Number=Sing	7	nmod:poss	_	_
7	kieleh	kieli	NOUN	NOUN	Case=Ill|Number=Sing	4	obl	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No

~~~


