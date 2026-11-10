---
layout: base
title:  'Statistics of cc in UD_Tigrinya-TiTB'
udver: '2'
---

## Treebank Statistics: UD_Tigrinya-TiTB: Relations: `cc`

This relation is universal.

14 nodes (1%) are attached to their parents as `cc`.

9 instances of `cc` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.64285714285714.

The following 8 pairs of parts of speech are connected with `cc`: <tt><a href="ti_titb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ti_titb-pos-CCONJ.html">CCONJ</a></tt> (4; 29% instances), <tt><a href="ti_titb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ti_titb-pos-CCONJ.html">CCONJ</a></tt> (2; 14% instances), <tt><a href="ti_titb-pos-PRON.html">PRON</a></tt>-<tt><a href="ti_titb-pos-ADV.html">ADV</a></tt> (2; 14% instances), <tt><a href="ti_titb-pos-PRON.html">PRON</a></tt>-<tt><a href="ti_titb-pos-CCONJ.html">CCONJ</a></tt> (2; 14% instances), <tt><a href="ti_titb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ti_titb-pos-CCONJ.html">CCONJ</a></tt> (1; 7% instances), <tt><a href="ti_titb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ti_titb-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="ti_titb-pos-VERB.html">VERB</a></tt>-<tt><a href="ti_titb-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="ti_titb-pos-VERB.html">VERB</a></tt>-<tt><a href="ti_titb-pos-CCONJ.html">CCONJ</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cc	color:blue
1	ካሕሳይ	ካሕሳይ	PROPN	PROPN	Number=Sing	5	nsubj	_	_
2	ን	ን	CCONJ	CCONJ	_	1	cc	_	_
3	ሃይለ	ሃይለ	PROPN	PROPN	Number=Sing	1	conj	_	_
4	ን	ን	CCONJ	CCONJ	_	3	cc	_	_
5	መጺኦም	መጽአ	VERB	VERB	Gender=Masc|Number=Plur|Person=3|VerbForm=Conv	0	root	_	Translit=məs'iʔom
6	።	።	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 cc	color:blue
1	ብ	ብ	ADP	ADP	_	2	case:pre	_	_
2	እግር	እግሪ	NOUN	NOUN	Number=Sing	9	obl	_	_
3	ና	ና	DET	DET	Number=Plur|Person=1|Poss=Yes|PronType=Prs	2	det:poss	_	_
4	ዶ	ዶ	PART	PART	_	2	discourse	_	Translit=do
5	፡	፡	PUNCT	PUNCT	_	8	punct	_	_
6	ወይስ	ወይስ	CCONJ	CCONJ	_	8	cc	_	Translit=wəys
7	ብ	ብ	ADP	ADP	_	8	case:pre	_	_
8	ኣውቶቡስ	ኣውቶቡስ	NOUN	NOUN	Number=Sing	2	conj	_	_
9	ንኺድ	ከደ	VERB	VERB	Mood=Jus|Number=Plur|Person=1	0	root	_	Translit=nxid
10	፧	፧	PUNCT	PUNCT	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 cc	color:blue
1	ክ	ክ	SCONJ	SCONJ	_	2	mark	_	_
2	ይመጽእ	መጽአ	VERB	VSTEM	Aspect=Imp|Gender=Masc|Number=Sing|Person=3	3	xcomp	_	Aimad=SERAHI
3	ደልዩ	ደለየ	VERB	VERB	Aspect=Perf|Gender=Masc|Number=Sing|Person=3	0	root	_	Translit=dəlyu
4	ኣሎ	ኣሎ	AUX	AUX	Gender=Masc|Number=Sing|Person=3|Tense=Pres	3	aux	_	Translit=ʔalo
5	፡	፡	PUNCT	PUNCT	_	6	punct	_	_
6	ንሳ	ንሳ	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	conj	_	Translit=nsa
7	'ውን	'ውን	ADV	ADV	_	6	cc	_	Translit='wn
8	ከምኡ	ንሱ	PRON	PRON	Case=Equ|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	orphan	_	Translit=kəmʔu
9	።	።	PUNCT	PUNCT	_	3	punct	_	_

~~~


