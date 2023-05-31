---
layout: base
title:  'Statistics of det in UD_Italian-MarkIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-MarkIT: Relations: `det`

This relation is universal.
There are 2 language-specific subtypes of `det`: <tt><a href="it_markit-dep-det-poss.html">det:poss</a></tt>, <tt><a href="it_markit-dep-det-predet.html">det:predet</a></tt>.

6086 nodes (15%) are attached to their parents as `det`.

6085 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18583634571147.

The following 13 pairs of parts of speech are connected with `det`: <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-DET.html">DET</a></tt> (5546; 91% instances), <tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_markit-pos-DET.html">DET</a></tt> (200; 3% instances), <tt><a href="it_markit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_markit-pos-DET.html">DET</a></tt> (132; 2% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-DET.html">DET</a></tt> (77; 1% instances), <tt><a href="it_markit-pos-NUM.html">NUM</a></tt>-<tt><a href="it_markit-pos-DET.html">DET</a></tt> (50; 1% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-DET.html">DET</a></tt> (38; 1% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (17; 0% instances), <tt><a href="it_markit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_markit-pos-DET.html">DET</a></tt> (11; 0% instances), <tt><a href="it_markit-pos-DET.html">DET</a></tt>-<tt><a href="it_markit-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="it_markit-pos-ADP.html">ADP</a></tt>-<tt><a href="it_markit-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="it_markit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	proprio	proprio	ADV	B	_	3	advmod	_	_
3	questa	questo	PRON	PD	Gender=Fem|Number=Sing|Person=3|PronType=Dem	0	root	_	_
4	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	cosa	cosa	NOUN	S	Gender=Fem|Number=Sing	3	nsubj	_	_
6	che	che	PRON	PR	_	7	nsubj	_	_
7	fa	fare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	_
8	più	più	DET	DI	_	9	advmod	_	_
9	male	male	ADV	B	_	7	advmod	_	_
10	ad	ad	ADP	E	_	12	case	_	_
11	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	giovane	giovane	NOUN	S	Gender=Masc|Number=Sing	7	obl	_	_
13	:	:	PUNCT	FC	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 det	color:blue
1	Questa	questo	PRON	PD	Gender=Fem|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
2	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	via	via	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
5	che	che	PRON	PR	_	7	obj	_	_
6	deve	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	seguire	seguire	VERB	V	VerbForm=Inf	4	acl:relcl	_	_
8	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
9	moderna	moderno	ADJ	A	Gender=Fem|Number=Sing	10	amod	_	_
10	Unione	Unione	PROPN	SP	_	7	nsubj	_	_
11	Europea	Europea	PROPN	SP	_	10	compound	_	_
12	:	[PUNCT]	PUNCT	FC	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 det	color:blue
1	Certo	certo	ADV	B	_	2	advmod	_	_
2	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	che	che	SCONJ	CS	_	6	mark	_	_
4	ognuno	ognuno	PRON	PI	Gender=Masc|Number=Sing|Person=3|PronType=Ind	6	nsubj	_	_
5	può	potere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	veder	vedere	VERB	V	VerbForm=Inf	2	ccomp	_	_
7	la	lo	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	obj	_	_
8	in	in	ADP	E	_	10	case	_	_
9	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	modo	modo	NOUN	S	Gender=Masc|Number=Sing	6	obl	_	_
11	come	come	ADV	B	_	14	advmod	_	_
12	in	in	ADP	E	_	14	case	_	_
13	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	14	det	_	_
14	altro	altro	PRON	PI	Gender=Masc|Number=Sing|Person=3|PronType=Ind	10	nmod	_	_
15	;	[PUNCT]	PUNCT	FC	_	2	punct	_	_

~~~


