---
layout: base
title:  'Statistics of obl:agent in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="it-dep-obl.html">obl</a></tt>.

1093 nodes (0%) are attached to their parents as `obl:agent`.

1066 instances of `obl:agent` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.35041171088747.

The following 9 pairs of parts of speech are connected with `obl:agent`: <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (864; 79% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-PROPN.html">PROPN</a></tt> (158; 14% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-PRON.html">PRON</a></tt> (41; 4% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (13; 1% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (12; 1% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:agent	color:blue
1	977	977	NUM	N	NumType=Card	3	nummod	_	SpaceAfter=No
2	.	.	PUNCT	FF	_	1	punct	_	_
3	Enfiteusi	enfiteusi	NOUN	S	Gender=Fem	0	root	_	_
4	costituite	costituire	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	3	acl	_	_
5	da	da	ADP	E	_	7	case	_	_
6	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	7	det	_	_
7	persone	persona	NOUN	S	Gender=Fem|Number=Plur	4	obl:agent	_	_
8	giuridiche	giuridico	ADJ	A	Gender=Fem|Number=Plur	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:agent	color:blue
1	Distribuito	distribuire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
2	da	da	ADP	E	_	3	case	_	_
3	Tirone	Tirone	PROPN	SP	_	1	obl:agent	_	_
4	Edilizia	edilizia	NOUN	S	Gender=Fem|Number=Sing	3	nmod	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	6	punct	_	_
6	costa	costare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	conj	_	_
7	circa	circa	ADV	B	_	9	advmod	_	_
8	L.	lira	NOUN	S	Gender=Fem	6	obl	_	_
9	140.000	140.000	NUM	N	NumType=Card	8	nummod	_	_
10	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	mq	mq	NOUN	S	_	6	obl	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	1059	1059	NUM	N	NumType=Card	3	nummod	_	SpaceAfter=No
2	.	.	PUNCT	FF	_	1	punct	_	_
3	Servitù	servitù	NOUN	S	Gender=Fem	0	root	_	_
4	concessa	concedere	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	3	acl	_	_
5	da	da	ADP	E	_	6	case	_	_
6	uno	uno	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	4	obl:agent	_	_
7	di	di	ADP	E	_	9	case	_	_
8	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
9	comproprietari	comproprietario	NOUN	S	Gender=Masc|Number=Plur	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	3	punct	_	_

~~~


