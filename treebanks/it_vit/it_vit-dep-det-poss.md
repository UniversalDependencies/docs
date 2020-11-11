---
layout: base
title:  'Statistics of det:poss in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="it_vit-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="it_vit-dep-det-predet.html">det:predet</a></tt>.

1295 nodes (0%) are attached to their parents as `det:poss`.

1261 instances of `det:poss` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15057915057915.

The following 8 pairs of parts of speech are connected with `det:poss`: <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-DET.html">DET</a></tt> (1245; 96% instances), <tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_vit-pos-DET.html">DET</a></tt> (21; 2% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-PRON.html">PRON</a></tt> (18; 1% instances), <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_vit-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="it_vit-pos-X.html">X</a></tt>-<tt><a href="it_vit-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_vit-pos-NUM.html">NUM</a></tt>-<tt><a href="it_vit-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det:poss	color:blue
1	Da	da	ADP	E	_	3	case	_	_
2	qualche	qualche	DET	DI	Number=Sing|PronType=Ind	3	det	_	_
3	tempo	tempo	ADV	B	_	10	advmod	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	10	punct	_	_
5	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
6	sua	suo	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	7	det:poss	_	_
7	espressione	espressione	NOUN	S	Gender=Fem|Number=Sing	10	nsubj	_	_
8	preferita	preferito	ADJ	A	Gender=Fem|Number=Sing	7	amod	_	_
9	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	diventata	diventare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
11	:	:	PUNCT	FS	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 det:poss	color:blue
1	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
2	sua	suo	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	6	det:poss	_	_
3	straziata	straziato	ADJ	A	Gender=Fem|Number=Sing	6	amod	_	_
4	e	e	CCONJ	CC	_	5	cc	_	_
5	titanica	titanico	ADJ	A	Gender=Fem|Number=Sing	3	conj	_	_
6	Medea	Medea	PROPN	SP	_	0	root	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 14 det:poss	color:blue
1	Anche	anche	ADV	B	_	3	advmod	_	_
2	questo	questo	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	disordine	disordine	NOUN	S	Gender=Masc|Number=Sing	10	nsubj	_	_
4	di	di	ADP	E	_	6	case	_	_
5	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	6	det	_	_
6	ordine	ordine	NOUN	S	Gender=Masc|Number=Sing	3	nmod	_	_
7	giudiziario	giudiziario	ADJ	A	Gender=Masc|Number=Sing	6	amod	_	SpaceAfter=No
8	,	,	PUNCT	FF	_	10	punct	_	_
9	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	frutto	frutto	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
11	di	di	ADP	E	_	13	case	_	_
12	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	sfrenatezza	sfrenatezza	NOUN	S	Gender=Fem|Number=Sing	10	nmod	_	_
14	cui	cui	PRON	PR	PronType=Rel	16	det:poss	_	_
15	era	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	16	aux:pass	_	_
16	giunta	giungere	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	13	acl:relcl	_	_
17	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	rissa	rissa	NOUN	S	Gender=Fem|Number=Sing	16	nsubj:pass	_	_
19	politica	politico	ADJ	A	Gender=Fem|Number=Sing	18	amod	_	SpaceAfter=No
20	.	.	PUNCT	FS	_	10	punct	_	_

~~~


