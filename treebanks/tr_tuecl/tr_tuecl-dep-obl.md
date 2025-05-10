---
layout: base
title:  'Statistics of obl in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="tr_tuecl-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="tr_tuecl-dep-obl-tmod.html">obl:tmod</a></tt>.

71 nodes (8%) are attached to their parents as `obl`.

71 instances of `obl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8169014084507.

The following 6 pairs of parts of speech are connected with `obl`: <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (37; 52% instances), <tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (12; 17% instances), <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-PRON.html">PRON</a></tt> (11; 15% instances), <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-PROPN.html">PROPN</a></tt> (8; 11% instances), <tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tuecl-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="tr_tuecl-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_tuecl-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl	color:blue
1	Kız	kız	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	_
2	arkadaşına	arkadaş	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obl	_	_
3	mektup	mektup	NOUN	_	Case=Nom|Number=Sing	4	obj	_	_
4	yazdı	yaz	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
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
3	saat	saat	ADV	_	Case=Nom	6	advmod	_	_
4	tir	i	AUX	_	Mood=Gen|Number=Sing|Person=3	3	cop	_	_
5	ofiste	ofis	NOUN	_	Case=Loc|Number=Sing	6	obl	_	_
6	yok	yok	ADJ	_	Polarity=Neg	0	root	_	_
7	muş	i	AUX	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	6	cop	_	_
8	,	,	PUNCT	_	_	6	punct	_	_
9	Ayşe	Ayşe	PROPN	_	Case=Nom|Number=Sing	11	nsubj	_	_
10	de	de	ADV	_	_	9	advmod:emph	_	_
11	evde	ev	NOUN	_	Case=Loc|Number=Sing	6	parataxis	_	_
12	değil	değil	AUX	_	Case=Nom|Number=Sing|Polarity=Neg	11	aux	_	_
13	miş	i	AUX	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	11	cop	_	_
14	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl	color:blue
1	Sen	sen	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	_	_
2	neye	ne	PRON	_	Case=Dat|Number=Sing|PronType=Int	3	obl	_	_
3	bakıyorsun	bak	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=2|Tense=Pres	0	root	_	SpaceAfter=No
4	?	?	PUNCT	_	_	3	punct	_	_

~~~


