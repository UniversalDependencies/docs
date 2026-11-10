---
layout: base
title:  'Statistics of mark in UD_Tigrinya-TiTB'
udver: '2'
---

## Treebank Statistics: UD_Tigrinya-TiTB: Relations: `mark`

This relation is universal.

153 nodes (10%) are attached to their parents as `mark`.

137 instances of `mark` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2156862745098.

The following 4 pairs of parts of speech are connected with `mark`: <tt><a href="ti_titb-pos-VERB.html">VERB</a></tt>-<tt><a href="ti_titb-pos-SCONJ.html">SCONJ</a></tt> (120; 78% instances), <tt><a href="ti_titb-pos-VERB.html">VERB</a></tt>-<tt><a href="ti_titb-pos-ADP.html">ADP</a></tt> (30; 20% instances), <tt><a href="ti_titb-pos-PRON.html">PRON</a></tt>-<tt><a href="ti_titb-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="ti_titb-pos-PRON.html">PRON</a></tt>-<tt><a href="ti_titb-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	ምሸት	ምሸት	NOUN	NOUN	Number=Sing	0	root	_	Translit=mšət
2	እዩ	እዩ	AUX	AUX	Gender=Masc|Number=Sing|Person=3|Tense=Pres	1	cop	_	Translit=ʔyu
3	ገዛ	ገዛ	NOUN	NOUN	Number=Sing	5	obl	_	Translit=gəza
4	ዝ	ዝ	SCONJ	SCONJ	_	5	mark	_	_
5	በጽሐ	በጽሐ	VERB	VSTEM	Aspect=Perf|Gender=Masc|Number=Sing|Person=3	1	csubj:cleft	_	Aimad=SERAHI
6	።	።	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 mark	color:blue
1	ናብ	ናብ	ADP	ADP	_	2	case	_	Translit=nab
2	ገዛ	ገዛ	NOUN	NOUN	Number=Sing	6	obl	_	_
3	ኣ	ኣ	DET	DET	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	det:poss	_	_
4	ከም	ከም	ADP	ADP	_	6	mark	_	Translit=kəm
5	ዝ	ዝ	SCONJ	SCONJ	_	6	mark	_	_
6	ትምለስ	ተመልሰ	VERB	VERB	Aspect=Imp|Gender=Fem|Number=Sing|Person=3|Voice=Pass	7	ccomp	_	Aimad=TESERAHI
7	እፈልጥ	ፈለጠ	VERB	VERB	Aspect=Imp|Number=Sing|Person=1	0	root	_	Translit=ʔfəlt'
8	ነይሩ	ነበረ	AUX	AUX	Gender=Masc|Number=Sing|Person=3|Tense=Past	7	aux	_	Translit=nəyru
9	።	።	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mark	color:blue
1	ንሳ	ንሳ	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	ccomp	_	Translit=nsa
2	እንተ	እንተ	ADP	ADP	_	1	mark	_	_
3	ነይራ	ነበረ	AUX	AUX	Gender=Fem|Number=Sing|Person=3|Tense=Past|VerbForm=Conv	1	cop	_	_
4	ሕተታ	ሓተተ	VERB	VERB	Gender=Masc|Gender[obj]=Fem|Mood=Imp|Number=Sing|Number[obj]=Sing|Person=2|Person[obj]=3	0	root	_	Translit=ħtəta
5	።	።	PUNCT	PUNCT	_	4	punct	_	_

~~~


