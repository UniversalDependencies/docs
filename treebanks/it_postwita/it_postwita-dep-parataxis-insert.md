---
layout: base
title:  'Statistics of parataxis:insert in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `parataxis:insert`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-parataxis.html">parataxis</a></tt>.
There are also 3 other language-specific subtypes of `parataxis`: <tt><a href="it_postwita-dep-parataxis-hashtag.html">parataxis:hashtag</a></tt>, <tt><a href="it_postwita-dep-parataxis-nsubj.html">parataxis:nsubj</a></tt>, <tt><a href="it_postwita-dep-parataxis-obj.html">parataxis:obj</a></tt>.

13 nodes (0%) are attached to their parents as `parataxis:insert`.

8 instances of `parataxis:insert` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.92307692307692.

The following 5 pairs of parts of speech are connected with `parataxis:insert`: <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (7; 54% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (2; 15% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (2; 15% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (1; 8% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 parataxis:insert	color:blue
1	@jhutchlosgdr	@jhutchlosgdr	SYM	SYM	_	7	vocative:mention	_	_
2	SENTI	sentire	VERB	V	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	7	parataxis:insert	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	MONDANI	mondano	NOUN	S	Gender=Masc|Number=Plur	7	dislocated	_	_
5	LO	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
6	POSSONO	potere	AUX	VM	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	DIRE	dire	VERB	V	VerbForm=Inf	0	root	_	_
8	SOLO	solo	ADV	B	_	7	advmod	_	_
9	GLI	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	10	det	_	_
10	SHADOWHUNTERS	SHADOWHUNTERS	PROPN	SP	_	7	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	7	punct	_	_
12	OK	ok	INTJ	I	_	7	discourse	_	SpaceAfter=No
13	?	?	PUNCT	FS	_	12	punct	_	_
14	OK	ok	INTJ	I	_	7	discourse	_	_
15	uu	uu	INTJ	I	_	7	discourse	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 parataxis:insert	color:blue
1	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	governo	governo	NOUN	S	Gender=Masc|Number=Sing	7	nsubj	_	_
3	#Monti	#Monti	SYM	SYM	_	2	nmod	_	_
4	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
5	sempre	sempre	ADV	B	_	6	advmod	_	_
6	più	più	ADV	B	_	7	advmod	_	_
7	forte	forte	ADJ	A	Number=Sing	0	root	_	_
8	e	e	CCONJ	CC	_	13	cc	_	_
9	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	10	det	_	_
10	italiani	italiano	NOUN	S	Gender=Masc|Number=Plur	13	conj	_	_
11	sempre	sempre	ADV	B	_	12	advmod	_	_
12	più	più	ADV	B	_	13	advmod	_	_
13	incazzati	incazzato	ADJ	A	Gender=Masc|Number=Plur	7	conj	_	_
14	temo	temere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	13	parataxis:insert	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 parataxis:insert	color:blue
1	Oggi	oggi	ADV	B	_	5	advmod	_	_
2	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	5	nsubj	_	_
3	a	a	ADP	E	_	5	case	_	_
4	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	fiera	fiera	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
6	di	di	ADP	E	_	7	case	_	_
7	aprile	aprile	NOUN	S	Gender=Masc	5	nmod	_	_
8	a	a	ADP	E	_	9	case	_	_
9	Rivanazzano	Rivanazzano	PROPN	SP	_	7	nmod	_	_
10	immagino	immaginare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	parataxis:insert	_	_
11	...	...	PUNCT	FS	_	5	punct	_	_

~~~


