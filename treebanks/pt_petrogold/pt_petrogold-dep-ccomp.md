---
layout: base
title:  'Statistics of ccomp in UD_Portuguese-PetroGold'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PetroGold: Relations: `ccomp`

This relation is universal.

693 nodes (0%) are attached to their parents as `ccomp`.

693 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.2582972582973.

The following 11 pairs of parts of speech are connected with `ccomp`: <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (530; 76% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (98; 14% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (39; 6% instances), <tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (11; 2% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-AUX.html">AUX</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_petrogold-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 ccomp	color:blue
1	Observou	observar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Se=pass
2	se	se	PRON	_	_	1	expl:pass	_	_
3	que	que	SCONJ	_	_	9	mark	_	_
4	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Argila	argila	NOUN	_	Gender=Fem|Number=Sing	1	nsubj:pass	_	_
6	A4	A4	PROPN	_	Number=Sing	5	nmod	_	_
7	quando	quando	SCONJ	_	_	8	mark	_	_
8	hidratada	hidratar	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part	9	advcl	_	_
9	desfolha	desfolhar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 ccomp	color:blue
1	Verifica	verificar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Se=pass
2	se	se	PRON	_	_	1	expl:pass	_	_
3	que	que	SCONJ	_	_	8	mark	_	_
4	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	pico	pico	NOUN	_	Gender=Masc|Number=Sing	8	nsubj	_	_
6	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
7	pouco	pouco	ADV	_	_	8	advmod	_	_
8	intenso	intenso	ADJ	_	Gender=Masc|Number=Sing	1	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 ccomp	color:blue
1	Acredita	acreditar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Se=impers
2	se	se	PRON	_	_	1	expl:impers	_	_
3	que	que	SCONJ	_	_	6	mark	_	_
4	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
5	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	aquecimento	aquecimento	NOUN	_	Gender=Masc|Number=Sing	1	ccomp	_	_
7	interessante	interessante	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	_
8	para	para	ADP	_	_	9	case	_	_
9	recuperação	recuperação	NOUN	_	Gender=Fem|Number=Sing	7	obl	_	_
10	de	de	ADP	_	_	11	case	_	_
11	petróleo	petróleo	NOUN	_	Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	1	punct	_	_

~~~


