---
layout: base
title:  'Statistics of obl in UD_Ottoman_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-TueCL: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="ota_tuecl-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ota_tuecl-dep-obl-tmod.html">obl:tmod</a></tt>.

71 nodes (8%) are attached to their parents as `obl`.

71 instances of `obl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.88732394366197.

The following 6 pairs of parts of speech are connected with `obl`: <tt><a href="ota_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_tuecl-pos-NOUN.html">NOUN</a></tt> (37; 52% instances), <tt><a href="ota_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_tuecl-pos-NOUN.html">NOUN</a></tt> (12; 17% instances), <tt><a href="ota_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_tuecl-pos-PRON.html">PRON</a></tt> (11; 15% instances), <tt><a href="ota_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_tuecl-pos-PROPN.html">PROPN</a></tt> (8; 11% instances), <tt><a href="ota_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_tuecl-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="ota_tuecl-pos-AUX.html">AUX</a></tt>-<tt><a href="ota_tuecl-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 obl	color:blue
1	Refīḳasına	refīḳa	NOUN	_	Case=Dat|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	obl	_	_
2	mektūb	mektūb	NOUN	_	Case=Nom|Number=Sing	4	obj	_	_
3	taḥrīr	taḥrīr	NOUN	_	Case=Nom|Number=Sing	4	compound:lvc	_	_
4	eyledi	eyle	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl	color:blue
1	Sude	Sude	PROPN	_	Case=Nom|Number=Sing	6	nsubj	_	_
2	üç	üç	NUM	_	NumType=Card	3	nummod	_	_
3	sāʿāt	sāʿāt	ADV	_	_	6	advmod	_	_
4	tir	i	AUX	_	Mood=Gen|Number=Sing|Person=3	3	cop	_	_
5	dāʾirede	dāʾire	NOUN	_	Case=Loc|Number=Sing	6	obl	_	_
6	yoḳ	yoḳ	ADJ	_	Polarity=Neg	0	root	_	_
7	muş	i	AUX	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	6	cop	_	_
8	,	,	PUNCT	_	_	6	punct	_	_
9	ʿAyşe	ʿAyşe	PROPN	_	Case=Nom|Number=Sing	11	nsubj	_	_
10	de	de	ADV	_	_	9	advmod:emph	_	_
11	evde	ev	NOUN	_	Case=Loc|Number=Sing	6	parataxis	_	_
12	degil	degil	AUX	_	Case=Nom|Number=Sing|Polarity=Neg	11	aux	_	_
13	miş	i	AUX	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	11	cop	_	_
14	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl	color:blue
1	Sen	sen	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	_	_
2	neye	ne	PRON	_	Case=Dat|Number=Sing|PronType=Int	4	obl	_	_
3	naẓar	naẓar	NOUN	_	Case=Nom|Number=Sing	4	compound:lvc	_	_
4	eyliyorsun	eyle	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=2|Tense=Pres	0	root	_	SpaceAfter=No
5	?	?	PUNCT	_	_	4	punct	_	_

~~~


