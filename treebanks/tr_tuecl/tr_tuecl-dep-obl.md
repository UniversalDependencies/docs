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

The following 5 pairs of parts of speech are connected with `obl`: <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (37; 52% instances), <tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (14; 20% instances), <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-PRON.html">PRON</a></tt> (11; 15% instances), <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-PROPN.html">PROPN</a></tt> (8; 11% instances), <tt><a href="tr_tuecl-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_tuecl-pos-PRON.html">PRON</a></tt> (1; 1% instances).


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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 obl	color:blue
1	Benim	ben	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	2	nmod:poss	_	_
2	babam	baba	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	6	nsubj	_	_
3	senin	sen	PRON	_	Case=Abl|Number=Sing|Person=2|PronType=Prs	4	nmod	_	_
4	kinden	ki	NOUN	_	Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	6	obl	_	_
5	daha	daha	ADV	_	_	6	advmod	_	_
6	harika	harika	ADJ	_	_	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

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


