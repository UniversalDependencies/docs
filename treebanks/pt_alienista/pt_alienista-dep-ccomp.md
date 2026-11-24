---
layout: base
title:  'Statistics of ccomp in UD_Portuguese-Alienista'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Alienista: Relations: `ccomp`

This relation is universal.
There are 1 language-specific subtypes of `ccomp`: <tt><a href="pt_alienista-dep-ccomp-speech.html">ccomp:speech</a></tt>.

178 nodes (1%) are attached to their parents as `ccomp`.

178 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.07303370786517.

The following 5 pairs of parts of speech are connected with `ccomp`: <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt> (125; 70% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt> (28; 16% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-ADJ.html">ADJ</a></tt> (13; 7% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-ADV.html">ADV</a></tt> (8; 4% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt> (4; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 ccomp	color:blue
1	Eu	eu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	lhe	lhe	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	3	iobj	_	_
3	digo	dizer	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	como	como	ADV	_	_	8	advmod	_	_
5	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	negócio	negócio	NOUN	_	Gender=Masc|Number=Sing	8	nsubj	_	_
7	se	se	PRON	_	Case=Acc|Person=3|PronType=Prs	8	expl	_	_
8	passou	passar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 ccomp	color:blue
1	E	e	CCONJ	_	_	2	cc	_	_
2	acrescentou	acrescentar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
3	:	:	PUNCT	_	_	6	punct	_	_
4	-	-	PUNCT	_	_	6	punct	_	_
5	Quem	quem	PRON	_	PronType=Int	6	nsubj	_	_
6	diria	dizer	VERB	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	2	ccomp:speech	_	_
7	nunca	nunca	ADV	_	ExtPos=SCONJ	10	mark	_	_
8	que	que	SCONJ	_	_	7	fixed	_	_
9	meia	meio	NUM	_	Gender=Fem|NumType=Frac	10	nummod	_	_
10	dúzia	dúzia	NOUN	_	Gender=Fem|Number=Sing	6	ccomp	_	_
11	de	de	ADP	_	_	12	case	_	_
12	lunáticos	lunático	NOUN	_	Gender=Masc|Number=Plur	10	nmod	_	SpaceAfter=No
13	...	...	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	Não	não	ADV	_	_	3	advmod	_	_
2	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	3	expl:impers	_	_
3	sabia	saber	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	já	já	ADV	_	_	3	advmod	_	_
5	quem	quem	PRON	_	PronType=Ind	7	nsubj	_	_
6	estava	estar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	cop	_	_
7	são	são	ADJ	_	Gender=Masc|Number=Sing	3	ccomp	_	SpaceAfter=No
8	,	,	PUNCT	_	_	12	punct	_	_
9	nem	nem	CCONJ	_	_	12	cc	_	_
10	quem	quem	PRON	_	PronType=Ind	12	nsubj	_	_
11	estava	estar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	12	cop	_	_
12	doudo	doudo	ADJ	_	Gender=Masc|Number=Sing	7	conj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


