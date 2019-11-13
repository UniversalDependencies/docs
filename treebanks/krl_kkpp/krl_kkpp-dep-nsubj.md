---
layout: base
title:  'Statistics of nsubj in UD_Karelian-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Karelian-KKPP: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="krl_kkpp-dep-nsubj-cop.html">nsubj:cop</a></tt>.

203 nodes (7%) are attached to their parents as `nsubj`.

178 instances of `nsubj` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.75369458128079.

The following 10 pairs of parts of speech are connected with `nsubj`: <tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="krl_kkpp-pos-PRON.html">PRON</a></tt> (92; 45% instances), <tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt> (80; 39% instances), <tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="krl_kkpp-pos-PROPN.html">PROPN</a></tt> (15; 7% instances), <tt><a href="krl_kkpp-pos-AUX.html">AUX</a></tt>-<tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="krl_kkpp-pos-AUX.html">AUX</a></tt>-<tt><a href="krl_kkpp-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="krl_kkpp-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="krl_kkpp-pos-ADP.html">ADP</a></tt>-<tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="krl_kkpp-pos-ADP.html">ADP</a></tt>-<tt><a href="krl_kkpp-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="krl_kkpp-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj	color:blue
1	–	–	PUNCT	PUNCT	_	4	punct	_	_
2	Myö	myö	PRON	PRON	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	_
3	emmä	ei	AUX	AUX	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	mäne	männä	VERB	VERB	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	_
5	kalalla	kala	NOUN	NOUN	Case=Ade|Number=Sing	4	obl	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	8	punct	_	_
7	kun	ku	SCONJ	SCONJ	_	8	mark	_	PronType=Interr
8	hilloh	hillo	NOUN	NOUN	Case=Ill|Number=Sing	5	conj	_	_
9	šuolla	šuo	NOUN	NOUN	Case=Ade|Number=Sing	4	obl	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj	color:blue
1	“	“	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No
2	Kalevala	Kalevala	PROPN	PROPN	Case=Nom|Number=Sing	4	nsubj	_	SpaceAfter=No|PropnType=Al
3	”	”	PUNCT	PUNCT	_	2	punct	_	_
4	kuččuu	kuččuo	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	ativoih	ativo	NOUN	NOUN	Case=Ill|Number=Plur	4	xcomp	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


