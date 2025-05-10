---
layout: base
title:  'Statistics of nsubj:pass in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="ru_syntagrus-dep-nsubj-outer.html">nsubj:outer</a></tt>.

9500 nodes (1%) are attached to their parents as `nsubj:pass`.

6314 instances of `nsubj:pass` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.05810526315789.

The following 20 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (7353; 77% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (1097; 12% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (445; 5% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (239; 3% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt> (85; 1% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (80; 1% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (70; 1% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (54; 1% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (20; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt> (19; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (11; 0% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (9; 0% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	"	"	PUNCT	_	_	4	punct	4:punct	SpaceAfter=No
2	Алгоризм	алгоризм	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj:pass	4:nsubj	_
3	был	быть	AUX	_	Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	aux:pass	4:aux	_
4	придуман	придумать	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	в	в	ADP	_	_	6	case	6:case	_
6	Греции	Греция	PROPN	_	Animacy=Inan|Case=Loc|Gender=Fem|NameType=Geo|Number=Sing	4	obl	4:obl:в:loc	SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj:pass	color:blue
1	Донато	донато	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	установил	установить	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	_	_	6	punct	6:punct	_
4	что	что	SCONJ	_	_	6	mark	6:mark	_
5	они	они	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj:pass	6:nsubj:pass	_
6	сделаны	делать	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	2	ccomp	2:ccomp	_
7	человеком	человек	NOUN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	6	obl	6:obl:ins	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nsubj:pass	color:blue
1	А	а	CCONJ	_	_	2	cc	2:cc	_
2	отложенные	отложить	VERB	_	Aspect=Perf|Case=Nom|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
3	-	-	PUNCT	_	_	4	punct	4:punct	_
4	наши	наш	DET	_	Case=Nom|Number=Plur|Poss=Yes|PronType=Prs	2	nsubj:pass	2:nsubj:pass	SpaceAfter=No
5	"	"	PUNCT	_	_	4	punct	4:punct	SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


