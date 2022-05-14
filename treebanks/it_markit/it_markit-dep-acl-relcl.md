---
layout: base
title:  'Statistics of acl:relcl in UD_Italian-MarkIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-MarkIT: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="it_markit-dep-acl.html">acl</a></tt>.

1106 nodes (3%) are attached to their parents as `acl:relcl`.

1104 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.01717902350814.

The following 20 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (834; 75% instances), <tt><a href="it_markit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (121; 11% instances), <tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (42; 4% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (27; 2% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt> (25; 2% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (19; 2% instances), <tt><a href="it_markit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="it_markit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="it_markit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_markit-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl:relcl	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl:relcl	color:blue
1	Anzi	anzi	ADV	B	_	5	advmod	_	_
2	,	,	PUNCT	FF	_	5	punct	_	_
3	sono	essere	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	proprio	proprio	ADV	B	_	5	advmod	_	_
5	io	io	PRON	PE	Number=Sing|Person=1|PronType=Prs	0	root	_	_
6	che	che	PRON	PR	_	7	nsubj	_	_
7	creo	creare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	_
8	queste	questo	DET	DD	Gender=Fem|Number=Plur|PronType=Dem	9	det	_	_
9	condizioni	condizione	NOUN	S	Gender=Fem|Number=Plur	7	obj	_	_
10	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl:relcl	color:blue
1	E'	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
2	lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
3	stesso	stesso	ADJ	A	Gender=Masc|Number=Sing	4	amod	_	_
4	Moro	Moro	PROPN	SP	_	0	root	_	_
5	che	che	PRON	PR	_	6	nsubj	_	_
6	individua	individuare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
7	due	due	NUM	N	NumType=Card	8	nummod	_	_
8	concetti	concetto	NOUN	S	Gender=Masc|Number=Plur	6	obj	_	_
9	chiari	chiaro	ADJ	A	Gender=Masc|Number=Plur	8	amod	_	_
10	:	:	PUNCT	FC	_	4	punct	_	_

~~~


