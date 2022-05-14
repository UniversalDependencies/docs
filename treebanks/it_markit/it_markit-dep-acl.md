---
layout: base
title:  'Statistics of acl in UD_Italian-MarkIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-MarkIT: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="it_markit-dep-acl-relcl.html">acl:relcl</a></tt>.

752 nodes (2%) are attached to their parents as `acl`.

746 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.3031914893617.

The following 20 pairs of parts of speech are connected with `acl`: <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (578; 77% instances), <tt><a href="it_markit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (53; 7% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (36; 5% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt> (21; 3% instances), <tt><a href="it_markit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (16; 2% instances), <tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (16; 2% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (10; 1% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="it_markit-pos-DET.html">DET</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="it_markit-pos-NUM.html">NUM</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="it_markit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-DET.html">DET</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 acl	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
2	proprio	proprio	ADV	B	_	5	advmod	_	_
3	a	a	ADP	E	_	5	case	_	_
4	questa	questo	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
5	domanda	domanda	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
6	che	che	SCONJ	CS	_	10	mark	_	_
7	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
8	scienziati	scienziato	NOUN	S	Gender=Masc|Number=Plur	10	nsubj	_	_
9	stanno	stare	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	lavorando	lavorare	VERB	V	VerbForm=Ger	5	acl	_	_
11	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl	color:blue
1	E	e	CCONJ	CC	_	4	cc	_	_
2	perché	perché	SCONJ	CS	_	4	mark	_	_
3	allora	allora	SCONJ	CS	_	4	advcl	_	_
4	siamo	essere	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	proprio	proprio	ADV	B	_	6	advmod	_	_
6	noi	noi	PRON	PE	Number=Plur|Person=1|PronType=Prs	4	nsubj	_	_
7	a	a	ADP	E	_	8	mark	_	_
8	distruggere	distruggere	VERB	V	VerbForm=Inf	6	acl	_	_
9	questo	questo	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	10	det	_	_
10	paesaggio	paesaggio	NOUN	S	Gender=Masc|Number=Sing	8	obj	_	_
11	?	?	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 acl	color:blue
1	Ci	ci	PRON	PC	Clitic=Yes|Gender=Fem|Number=Plur|Person=1|PronType=Prs	2	expl	_	_
2	sono	essere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	sicuramente	sicuramente	ADV	B	_	2	advmod	_	_
4	molti	molto	PRON	PI	Gender=Masc|Number=Plur|Person=3|PronType=Ind	5	det	_	_
5	giovani	giovane	ADJ	A	Gender=Masc|Number=Plur	2	nsubj	_	_
6	in	in	ADP	E	_	7	case	_	_
7	gamba	gamba	NOUN	S	Gender=Fem|Number=Sing	5	nmod	_	_
8	che	che	PRON	PR	_	9	nsubj	_	_
9	sarebbero	essere	VERB	V	Mood=Cnd|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	_
10	pronti	pronto	ADJ	A	Gender=Masc|Number=Plur	9	xcomp	_	_
11	ad	ad	ADP	E	_	12	mark	_	_
12	assumer	assumere	VERB	V	VerbForm=Inf	10	acl	_	_
13	si	si	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	expl	_	_
14	delle	dei	DET	RI	Definite=Ind|Gender=Fem|Number=Plur|PronType=Art	15	det	_	_
15	responsabilità	responsabilità	NOUN	S	Gender=Fem|Number=Sing	12	obj	_	_
16	.	.	PUNCT	FS	_	2	punct	_	_

~~~


