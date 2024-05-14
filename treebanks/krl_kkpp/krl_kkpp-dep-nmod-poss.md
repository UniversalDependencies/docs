---
layout: base
title:  'Statistics of nmod:poss in UD_Karelian-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Karelian-KKPP: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="krl_kkpp-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="krl_kkpp-dep-nmod-gsubj.html">nmod:gsubj</a></tt>.

210 nodes (7%) are attached to their parents as `nmod:poss`.

209 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.46190476190476.

The following 9 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt> (114; 54% instances), <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-PROPN.html">PROPN</a></tt> (57; 27% instances), <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-PRON.html">PRON</a></tt> (29; 14% instances), <tt><a href="krl_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="krl_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="krl_kkpp-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="krl_kkpp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="krl_kkpp-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="krl_kkpp-pos-ADV.html">ADV</a></tt>-<tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Ulkovaihien	ulko#vaihe	NOUN	NOUN	Case=Gen|Number=Sing	2	nmod:poss	_	_
2	tulokšet	tuloš	NOUN	NOUN	Case=Nom|Number=Plur	3	nsubj	_	_
3	ilmotetah	ilmottoa	VERB	VERB	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
4	www.etnocenter.ru	www.etnocenter.ru	X	X	_	5	compound	_	_
5	-saitilla	saitti	NOUN	NOUN	Case=Ade|Number=Sing	3	obl	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nmod:poss	color:blue
1	“	“	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No
2	Kalevalan	Kalevala	PROPN	PROPN	Case=Gen|Number=Sing	5	nmod:poss	_	PropnType=Al|SpaceAfter=No
3	”	”	PUNCT	PUNCT	_	2	punct	_	_
4	uuši	uuši	ADJ	ADJ	Case=Nom|Number=Sing	5	amod	_	_
5	istorija	istorija	NOUN	NOUN	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod:poss	color:blue
1	Šiitä	še	PRON	PRON	Case=Ela|Number=Sing|PronType=Dem	3	obl	_	_
2	miut	mie	PRON	PRON	Case=Acc|Number=Sing|Person=1|PronType=Prs	3	obj	_	_
3	pelašti	pelaštoa	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	miun	mie	PRON	PRON	Case=Gen|Number=Sing|Person=1|PronType=Prs	6	nmod:poss	_	_
5	”	”	PUNCT	PUNCT	_	6	punct	_	SpaceAfter=No
6	muamo	muamo	NOUN	NOUN	Case=Nom|Number=Sing	3	nsubj	_	SpaceAfter=No
7	”	”	PUNCT	PUNCT	_	6	punct	_	_
8	ta	ta	CCONJ	CCONJ	_	9	cc	_	_
9	mie	mie	PRON	PRON	Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj	_	_
10	tuaš	tuaš	ADV	ADV	_	11	advmod	_	_
11	piäsin	piäštä	VERB	VERB	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	_	_
12	pelih	peli	NOUN	NOUN	Case=Ill|Number=Sing	11	obl	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	11	punct	_	_

~~~


